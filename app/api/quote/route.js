import { NextResponse } from "next/server";
import { saveLead } from "@/lib/leads";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

/**
 * Very small in-memory rate limit.
 *
 * Enough to stop a script hammering the endpoint. It resets when the process
 * does, which is acceptable for a contact form, the honeypot catches most
 * automated traffic before it reaches here anyway.
 */
const RECENT = new Map();
const WINDOW_MS = 60_000;
const MAX_PER_WINDOW = 5;

function rateLimited(ip) {
  const now = Date.now();
  const hits = (RECENT.get(ip) ?? []).filter((t) => now, t < WINDOW_MS);
  hits.push(now);
  RECENT.set(ip, hits);

  // Keep the map from growing without bound on a long-lived process.
  if (RECENT.size > 5000) RECENT.clear();

  return hits.length > MAX_PER_WINDOW;
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request) {
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0].trim() ??
    request.headers.get("x-real-ip") ??
    "unknown";

  if (rateLimited(ip)) {
    return NextResponse.json(
      { success: false, message: "Too many requests. Please try again shortly." },
      { status: 429 }
    );
  }

  let body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { success: false, message: "Malformed request." },
      { status: 400 }
    );
  }

  // Honeypot. A real browser never fills a field it cannot see.
  if (body.website) {
    // Answer 200 so the bot believes it succeeded and does not retry.
    return NextResponse.json({ success: true });
  }

  const name = String(body.name ?? "").trim();
  const email = String(body.email ?? "").trim();
  const message = String(body.message ?? "").trim();
  const service = String(body.service ?? "").trim();

  const errors = [];
  if (name.length < 2) errors.push("a name");
  if (!EMAIL_RE.test(email)) errors.push("a valid email address");
  if (message.length < 10) errors.push("a little more detail in the message");
  if (!service) errors.push("what you need");

  if (errors.length > 0) {
    return NextResponse.json(
      { success: false, message: `Please include ${errors.join(", ")}.` },
      { status: 400 }
    );
  }

  const { persisted, forwarded } = await saveLead({
    name,
    email,
    message,
    service,
    company: String(body.company ?? "").trim(),
    phone: String(body.phone ?? "").trim(),
    budget: String(body.budget ?? "").trim(),
    timeline: String(body.timeline ?? "").trim(),
    source: request.headers.get("referer") ?? "direct",
  });

  return NextResponse.json({ success: true, persisted, forwarded });
}
