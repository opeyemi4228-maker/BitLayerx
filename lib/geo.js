/**
 * Resolving where a request came from.
 *
 * Three sources, in order of reliability:
 *
 *   1. CDN headers. Vercel and Cloudflare resolve geography at the edge before
 *      the request reaches us. This is the accurate path and costs nothing.
 *   2. An IP lookup service, used only when those headers are absent, which in
 *      practice means self hosting or a plain Node server.
 *   3. Nothing. A private or loopback address cannot be located by anyone, so
 *      we say "Local" rather than inventing a city.
 *
 * Results are cached per address for the process lifetime, because a visitor
 * reading six pages should not trigger six identical lookups.
 */

const CACHE = new Map();
const CACHE_MAX = 5000;

/** Loopback and private ranges. Nothing outside the building can locate these. */
function isLocalAddress(ip) {
  if (!ip || ip === "unknown") return true;
  return (
    ip === "::1" ||
    ip === "127.0.0.1" ||
    ip.startsWith("10.") ||
    ip.startsWith("192.168.") ||
    ip.startsWith("::ffff:127.") ||
    ip.startsWith("fc") ||
    ip.startsWith("fd") ||
    /^172\.(1[6-9]|2\d|3[01])\./.test(ip)
  );
}

export function clientIp(headers) {
  // x-forwarded-for is a chain; the first entry is the original client.
  const forwarded = headers.get("x-forwarded-for");
  if (forwarded) return forwarded.split(",")[0].trim();

  return (
    headers.get("cf-connecting-ip") ??
    headers.get("x-real-ip") ??
    headers.get("x-vercel-forwarded-for") ??
    "unknown"
  );
}

/** Geography the CDN already worked out. Free and instant when present. */
function fromHeaders(headers) {
  const country =
    headers.get("x-vercel-ip-country") ?? headers.get("cf-ipcountry") ?? null;

  if (!country) return null;

  const city = headers.get("x-vercel-ip-city");

  return {
    country,
    // Vercel percent encodes city names, so "Port%20Harcourt" needs decoding.
    city: city ? decodeURIComponent(city) : null,
    region: headers.get("x-vercel-ip-country-region") ?? null,
    timezone: headers.get("x-vercel-ip-timezone") ?? null,
    source: "cdn",
  };
}

/**
 * Fallback lookup.
 *
 * ipapi.co needs no key for low volume. A three second timeout means a slow or
 * unreachable lookup can never hold up the response the visitor is waiting
 * for; we would rather record an unknown location than delay a page.
 */
async function fromLookup(ip) {
  try {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), 3000);

    const res = await fetch(`https://ipapi.co/${ip}/json/`, {
      signal: controller.signal,
      headers: { "User-Agent": "BitLayerX/1.0" },
      cache: "no-store",
    });
    clearTimeout(timer);

    if (!res.ok) return null;
    const d = await res.json();
    if (d.error) return null;

    return {
      country: d.country_code ?? null,
      countryName: d.country_name ?? null,
      city: d.city ?? null,
      region: d.region ?? null,
      timezone: d.timezone ?? null,
      org: d.org ?? null,
      source: "lookup",
    };
  } catch {
    return null;
  }
}

/**
 * Full origin for a request: address, geography, device and language.
 */
export async function resolveOrigin(headers) {
  const ip = clientIp(headers);
  const userAgent = headers.get("user-agent") ?? null;

  const base = {
    ip,
    userAgent,
    device: deviceFrom(userAgent),
    language: headers.get("accept-language")?.split(",")[0] ?? null,
  };

  if (isLocalAddress(ip)) {
    return {
      ...base,
      country: null,
      city: "Local",
      region: null,
      timezone: null,
      source: "local",
    };
  }

  const header = fromHeaders(headers);
  if (header) return { ...base, ...header };

  if (CACHE.has(ip)) return { ...base, ...CACHE.get(ip) };

  const looked = await fromLookup(ip);
  if (looked) {
    if (CACHE.size > CACHE_MAX) CACHE.clear();
    CACHE.set(ip, looked);
    return { ...base, ...looked };
  }

  return {
    ...base,
    country: null,
    city: null,
    region: null,
    timezone: null,
    source: "unresolved",
  };
}

/** Coarse device class from the user agent. Enough to answer "mobile or not". */
export function deviceFrom(ua) {
  if (!ua) return "Unknown";
  if (/bot|crawl|spider|slurp|bingpreview/i.test(ua)) return "Bot";
  if (/iPad|Tablet/i.test(ua)) return "Tablet";
  if (/Mobi|Android|iPhone/i.test(ua)) return "Mobile";
  return "Desktop";
}

/** A readable label for the admin. */
export function locationLabel(origin) {
  if (!origin) return "Unknown";
  if (origin.source === "local") return "Local";
  const parts = [origin.city, origin.countryName ?? origin.country].filter(Boolean);
  return parts.length ? parts.join(", ") : "Unknown";
}
