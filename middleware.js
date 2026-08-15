import { NextResponse } from "next/server";

/**
 * Admin gate.
 *
 * Runs before any /admin route renders, so an unauthenticated request never
 * reaches the page at all. The signature check is repeated here rather than
 * imported from lib/auth.js because middleware runs on the Edge runtime, which
 * has Web Crypto but not node:crypto.
 */

const COOKIE_NAME = "blx_admin";

async function verify(token, secret) {
  if (!token || !secret) return false;

  const [expiry, signature] = String(token).split(".");
  if (!expiry || !signature) return false;
  if (Number(expiry) <= Date.now()) return false;

  const key = await crypto.subtle.importKey(
    "raw",
    new TextEncoder().encode(secret),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"]
  );

  const mac = await crypto.subtle.sign(
    "HMAC",
    key,
    new TextEncoder().encode(expiry)
  );

  const expected = Array.from(new Uint8Array(mac))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");

  // Length-independent comparison.
  if (expected.length !== signature.length) return false;
  let diff = 0;
  for (let i = 0; i < expected.length; i++) {
    diff |= expected.charCodeAt(i) ^ signature.charCodeAt(i);
  }
  return diff === 0;
}

export async function middleware(request) {
  const { pathname } = request.nextUrl;

  // The login page and its endpoint must stay reachable, or nobody can get in.
  if (pathname === "/admin/login" || pathname.startsWith("/api/admin/session")) {
    return NextResponse.next();
  }

  const secret = process.env.ADMIN_SESSION_SECRET;
  const token = request.cookies.get(COOKIE_NAME)?.value;

  if (await verify(token, secret)) {
    return NextResponse.next();
  }

  const url = request.nextUrl.clone();
  url.pathname = "/admin/login";
  url.searchParams.set("next", pathname);
  return NextResponse.redirect(url);
}

export const config = {
  matcher: ["/admin/:path*", "/api/admin/:path*"],
};
