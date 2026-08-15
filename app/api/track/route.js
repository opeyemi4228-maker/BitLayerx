import { NextResponse } from "next/server";
import { append, newId } from "@/lib/store";
import { resolveOrigin } from "@/lib/geo";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

/**
 * Page view beacon.
 *
 * Records that a page was viewed, from where, on what kind of device, and what
 * referred it. It records no identifier that could single out a person: no
 * cookie, no fingerprint, no persistent visitor id. Two visits from the same
 * street are indistinguishable here, which is deliberate.
 *
 * Bots are dropped rather than stored, otherwise the numbers describe crawler
 * traffic rather than customers.
 */
export async function POST(request) {
  let body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false }, { status: 400 });
  }

  const origin = await resolveOrigin(request.headers);

  if (origin.device === "Bot") {
    return NextResponse.json({ ok: true, skipped: "bot" });
  }

  const path = String(body.path ?? "").slice(0, 300);
  if (!path.startsWith("/")) {
    return NextResponse.json({ ok: false }, { status: 400 });
  }

  // Admin traffic would otherwise pollute the visitor figures.
  if (path.startsWith("/admin")) {
    return NextResponse.json({ ok: true, skipped: "admin" });
  }

  const view = {
    id: newId("pv"),
    at: new Date().toISOString(),
    path,
    referrer: String(body.referrer ?? "").slice(0, 300) || null,
    // Where they came from before this site, e.g. google, linkedin, direct.
    channel: channelFrom(body.referrer),
    screen: String(body.screen ?? "").slice(0, 20) || null,
    ip: origin.ip,
    country: origin.country,
    countryName: origin.countryName ?? null,
    city: origin.city,
    region: origin.region,
    timezone: origin.timezone,
    device: origin.device,
    language: origin.language,
    geoSource: origin.source,
  };

  append("pageviews", view);

  return NextResponse.json({ ok: true });
}

/** Group referrers into the handful of channels worth reporting on. */
function channelFrom(referrer) {
  if (!referrer) return "Direct";

  let host;
  try {
    host = new URL(referrer).hostname.replace(/^www\./, "");
  } catch {
    return "Direct";
  }

  if (host.includes("google")) return "Google";
  if (host.includes("bing") || host.includes("duckduckgo")) return "Other search";
  if (host.includes("linkedin")) return "LinkedIn";
  if (host.includes("facebook") || host.includes("instagram")) return "Meta";
  if (host.includes("x.com") || host.includes("twitter") || host.includes("t.co"))
    return "X";
  if (host.includes("whatsapp")) return "WhatsApp";
  if (host.includes("bitlayerx")) return "Internal";
  return host;
}
