import { NextResponse } from "next/server";
import { append, readAll, newId } from "@/lib/store";
import { resolveOrigin } from "@/lib/geo";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const RECENT = new Map();
const WINDOW_MS = 60_000;
const MAX_PER_WINDOW = 4;

function rateLimited(ip) {
  const now = Date.now();
  const hits = (RECENT.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  hits.push(now);
  RECENT.set(ip, hits);
  if (RECENT.size > 5000) RECENT.clear();
  return hits.length > MAX_PER_WINDOW;
}

/**
 * Newsletter signup.
 *
 * An address only ever arrives here because someone typed it in. There is no
 * other honest way to obtain one.
 */
export async function POST(request) {
  let body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { success: false, message: "Malformed request." },
      { status: 400 }
    );
  }

  const origin = await resolveOrigin(request.headers);

  if (rateLimited(origin.ip)) {
    return NextResponse.json(
      { success: false, message: "Too many attempts. Please try again shortly." },
      { status: 429 }
    );
  }

  // Honeypot.
  if (body.website) return NextResponse.json({ success: true });

  const email = String(body.email ?? "").trim().toLowerCase();

  if (!EMAIL_RE.test(email)) {
    return NextResponse.json(
      { success: false, message: "Please enter a valid email address." },
      { status: 400 }
    );
  }

  // Already subscribed is a success from the visitor's point of view.
  const existing = readAll("subscribers").find((s) => s.email === email);
  if (existing) {
    return NextResponse.json({ success: true, alreadySubscribed: true });
  }

  const record = {
    id: newId("sub"),
    email,
    name: String(body.name ?? "").trim() || null,
    subscribedAt: new Date().toISOString(),
    source: request.headers.get("referer") ?? "direct",
    status: "active",
    origin: {
      ip: origin.ip,
      country: origin.country,
      countryName: origin.countryName ?? null,
      city: origin.city,
      device: origin.device,
    },
  };

  console.log("[SUBSCRIBER]", JSON.stringify(record));
  const persisted = append("subscribers", record);

  return NextResponse.json({ success: true, persisted });
}
