import crypto from "node:crypto";

/**
 * Admin session handling.
 *
 * A single shared password in the environment, exchanged for a signed cookie.
 * No database, no user table, no third party dependency. For a one person
 * admin area that is genuinely secure, provided three things hold:
 *
 *   1. The password never appears in the repository. It lives in ADMIN_PASSWORD.
 *   2. The cookie is signed, httpOnly and expires. A client cannot forge one
 *      without ADMIN_SESSION_SECRET.
 *   3. Password comparison is timing safe, so an attacker cannot learn the
 *      password one character at a time from response timings.
 *
 * If either variable is missing, `isConfigured()` returns false and the admin
 * refuses every login rather than falling open.
 */

const COOKIE_NAME = "blx_admin";
const MAX_AGE_SECONDS = 60 * 60 * 12; // 12 hours

export { COOKIE_NAME, MAX_AGE_SECONDS };

export function isConfigured() {
  return Boolean(process.env.ADMIN_PASSWORD && process.env.ADMIN_SESSION_SECRET);
}

function sign(value) {
  return crypto
    .createHmac("sha256", process.env.ADMIN_SESSION_SECRET)
    .update(value)
    .digest("hex");
}

/** Constant time comparison, so timing never leaks how much matched. */
function safeEqual(a, b) {
  const bufA = Buffer.from(String(a));
  const bufB = Buffer.from(String(b));
  if (bufA.length !== bufB.length) {
    // Still perform a comparison so the failure takes the same time.
    crypto.timingSafeEqual(bufA, bufA);
    return false;
  }
  return crypto.timingSafeEqual(bufA, bufB);
}

export function verifyPassword(candidate) {
  if (!isConfigured()) return false;
  return safeEqual(candidate ?? "", process.env.ADMIN_PASSWORD);
}

/** Token format: <expiry-ms>.<hmac of expiry>. */
export function createSessionToken() {
  const expiry = Date.now() + MAX_AGE_SECONDS * 1000;
  return `${expiry}.${sign(String(expiry))}`;
}

export function verifySessionToken(token) {
  if (!token || !isConfigured()) return false;

  const [expiry, signature] = String(token).split(".");
  if (!expiry || !signature) return false;

  if (!safeEqual(signature, sign(expiry))) return false;

  return Number(expiry) > Date.now();
}
