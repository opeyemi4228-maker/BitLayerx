import { NextResponse } from "next/server";
import {
  verifyPassword,
  createSessionToken,
  isConfigured,
  COOKIE_NAME,
  MAX_AGE_SECONDS,
} from "@/lib/auth";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

/** Throttle login attempts per address, so the password cannot be brute forced. */
const ATTEMPTS = new Map();
const WINDOW_MS = 10 * 60 * 1000;
const MAX_ATTEMPTS = 8;

function tooManyAttempts(ip) {
  const now = Date.now();
  const hits = (ATTEMPTS.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  hits.push(now);
  ATTEMPTS.set(ip, hits);
  if (ATTEMPTS.size > 2000) ATTEMPTS.clear();
  return hits.length > MAX_ATTEMPTS;
}

export async function POST(request) {
  if (!isConfigured()) {
    return NextResponse.json(
      {
        success: false,
        message:
          "Admin is not configured. Set ADMIN_PASSWORD and ADMIN_SESSION_SECRET in .env, then restart.",
      },
      { status: 503 }
    );
  }

  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0].trim() ??
    request.headers.get("x-real-ip") ??
    "unknown";

  if (tooManyAttempts(ip)) {
    return NextResponse.json(
      { success: false, message: "Too many attempts. Try again in ten minutes." },
      { status: 429 }
    );
  }

  const body = await request.json().catch(() => ({}));

  if (!verifyPassword(body.password)) {
    // Deliberately vague: never confirm whether a password was close.
    return NextResponse.json(
      { success: false, message: "Incorrect password." },
      { status: 401 }
    );
  }

  const response = NextResponse.json({ success: true });
  response.cookies.set({
    name: COOKIE_NAME,
    value: createSessionToken(),
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: MAX_AGE_SECONDS,
  });
  return response;
}

/** Sign out. */
export async function DELETE() {
  const response = NextResponse.json({ success: true });
  response.cookies.set({
    name: COOKIE_NAME,
    value: "",
    httpOnly: true,
    path: "/",
    maxAge: 0,
  });
  return response;
}
