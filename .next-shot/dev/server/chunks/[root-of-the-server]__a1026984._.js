module.exports = [
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/node:fs [external] (node:fs, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:fs", () => require("node:fs"));

module.exports = mod;
}),
"[externals]/node:path [external] (node:path, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:path", () => require("node:path"));

module.exports = mod;
}),
"[project]/lib/store.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "append",
    ()=>append,
    "newId",
    ()=>newId,
    "readAll",
    ()=>readAll,
    "update",
    ()=>update
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$fs__$5b$external$5d$__$28$node$3a$fs$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/node:fs [external] (node:fs, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/node:path [external] (node:path, cjs)");
;
;
/**
 * A tiny append oriented JSON store.
 *
 * Three datasets share it: enquiries, newsletter subscribers, and page views.
 *
 * DEPLOYMENT NOTE, worth reading before relying on this.
 * Serverless platforms give you a read only file system apart from /tmp, and
 * /tmp does not survive between invocations. On Vercel this store accepts a
 * write and loses it. So every write is also emitted to the process log, which
 * every host retains, and enquiries can additionally be forwarded to a webhook.
 *
 * For durable page view data at any volume, point NEXT_PUBLIC_GA_ID at Google
 * Analytics. This store is for a small site and a single operator.
 */ const DATA_DIR = __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__["default"].join(process.cwd(), ".data");
/** Page views are capped so the file cannot grow without bound. */ const LIMITS = {
    pageviews: 5000,
    leads: 2000,
    subscribers: 2000
};
function fileFor(name) {
    return __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__["default"].join(DATA_DIR, `${name}.json`);
}
function readAll(name) {
    try {
        const file = fileFor(name);
        if (!__TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$fs__$5b$external$5d$__$28$node$3a$fs$2c$__cjs$29$__["default"].existsSync(file)) return [];
        const parsed = JSON.parse(__TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$fs__$5b$external$5d$__$28$node$3a$fs$2c$__cjs$29$__["default"].readFileSync(file, "utf8"));
        return Array.isArray(parsed) ? parsed : [];
    } catch  {
        return [];
    }
}
function writeAll(name, rows) {
    try {
        __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$fs__$5b$external$5d$__$28$node$3a$fs$2c$__cjs$29$__["default"].mkdirSync(DATA_DIR, {
            recursive: true
        });
        __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$fs__$5b$external$5d$__$28$node$3a$fs$2c$__cjs$29$__["default"].writeFileSync(fileFor(name), JSON.stringify(rows, null, 2), "utf8");
        return true;
    } catch  {
        return false;
    }
}
function append(name, record) {
    const rows = readAll(name);
    rows.unshift(record);
    const limit = LIMITS[name] ?? 2000;
    return writeAll(name, rows.slice(0, limit));
}
function update(name, id, patch) {
    const rows = readAll(name);
    const i = rows.findIndex((r)=>r.id === id);
    if (i === -1) return false;
    rows[i] = {
        ...rows[i],
        ...patch,
        updatedAt: new Date().toISOString()
    };
    return writeAll(name, rows);
}
function newId(prefix) {
    return `${prefix}_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`;
}
}),
"[project]/lib/geo.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "clientIp",
    ()=>clientIp,
    "deviceFrom",
    ()=>deviceFrom,
    "locationLabel",
    ()=>locationLabel,
    "resolveOrigin",
    ()=>resolveOrigin
]);
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
 */ const CACHE = new Map();
const CACHE_MAX = 5000;
/** Loopback and private ranges. Nothing outside the building can locate these. */ function isLocalAddress(ip) {
    if (!ip || ip === "unknown") return true;
    return ip === "::1" || ip === "127.0.0.1" || ip.startsWith("10.") || ip.startsWith("192.168.") || ip.startsWith("::ffff:127.") || ip.startsWith("fc") || ip.startsWith("fd") || /^172\.(1[6-9]|2\d|3[01])\./.test(ip);
}
function clientIp(headers) {
    // x-forwarded-for is a chain; the first entry is the original client.
    const forwarded = headers.get("x-forwarded-for");
    if (forwarded) return forwarded.split(",")[0].trim();
    return headers.get("cf-connecting-ip") ?? headers.get("x-real-ip") ?? headers.get("x-vercel-forwarded-for") ?? "unknown";
}
/** Geography the CDN already worked out. Free and instant when present. */ function fromHeaders(headers) {
    const country = headers.get("x-vercel-ip-country") ?? headers.get("cf-ipcountry") ?? null;
    if (!country) return null;
    const city = headers.get("x-vercel-ip-city");
    return {
        country,
        // Vercel percent encodes city names, so "Port%20Harcourt" needs decoding.
        city: city ? decodeURIComponent(city) : null,
        region: headers.get("x-vercel-ip-country-region") ?? null,
        timezone: headers.get("x-vercel-ip-timezone") ?? null,
        source: "cdn"
    };
}
/**
 * Fallback lookup.
 *
 * ipapi.co needs no key for low volume. A three second timeout means a slow or
 * unreachable lookup can never hold up the response the visitor is waiting
 * for; we would rather record an unknown location than delay a page.
 */ async function fromLookup(ip) {
    try {
        const controller = new AbortController();
        const timer = setTimeout(()=>controller.abort(), 3000);
        const res = await fetch(`https://ipapi.co/${ip}/json/`, {
            signal: controller.signal,
            headers: {
                "User-Agent": "BitLayerX/1.0"
            },
            cache: "no-store"
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
            source: "lookup"
        };
    } catch  {
        return null;
    }
}
async function resolveOrigin(headers) {
    const ip = clientIp(headers);
    const userAgent = headers.get("user-agent") ?? null;
    const base = {
        ip,
        userAgent,
        device: deviceFrom(userAgent),
        language: headers.get("accept-language")?.split(",")[0] ?? null
    };
    if (isLocalAddress(ip)) {
        return {
            ...base,
            country: null,
            city: "Local",
            region: null,
            timezone: null,
            source: "local"
        };
    }
    const header = fromHeaders(headers);
    if (header) return {
        ...base,
        ...header
    };
    if (CACHE.has(ip)) return {
        ...base,
        ...CACHE.get(ip)
    };
    const looked = await fromLookup(ip);
    if (looked) {
        if (CACHE.size > CACHE_MAX) CACHE.clear();
        CACHE.set(ip, looked);
        return {
            ...base,
            ...looked
        };
    }
    return {
        ...base,
        country: null,
        city: null,
        region: null,
        timezone: null,
        source: "unresolved"
    };
}
function deviceFrom(ua) {
    if (!ua) return "Unknown";
    if (/bot|crawl|spider|slurp|bingpreview/i.test(ua)) return "Bot";
    if (/iPad|Tablet/i.test(ua)) return "Tablet";
    if (/Mobi|Android|iPhone/i.test(ua)) return "Mobile";
    return "Desktop";
}
function locationLabel(origin) {
    if (!origin) return "Unknown";
    if (origin.source === "local") return "Local";
    const parts = [
        origin.city,
        origin.countryName ?? origin.country
    ].filter(Boolean);
    return parts.length ? parts.join(", ") : "Unknown";
}
}),
"[project]/app/api/track/route.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "POST",
    ()=>POST,
    "dynamic",
    ()=>dynamic,
    "runtime",
    ()=>runtime
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/store.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$geo$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/geo.js [app-route] (ecmascript)");
;
;
;
const runtime = "nodejs";
const dynamic = "force-dynamic";
async function POST(request) {
    let body;
    try {
        body = await request.json();
    } catch  {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            ok: false
        }, {
            status: 400
        });
    }
    const origin = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$geo$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["resolveOrigin"])(request.headers);
    if (origin.device === "Bot") {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            ok: true,
            skipped: "bot"
        });
    }
    const path = String(body.path ?? "").slice(0, 300);
    if (!path.startsWith("/")) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            ok: false
        }, {
            status: 400
        });
    }
    // Admin traffic would otherwise pollute the visitor figures.
    if (path.startsWith("/admin")) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            ok: true,
            skipped: "admin"
        });
    }
    const view = {
        id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["newId"])("pv"),
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
        geoSource: origin.source
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$store$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["append"])("pageviews", view);
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
        ok: true
    });
}
/** Group referrers into the handful of channels worth reporting on. */ function channelFrom(referrer) {
    if (!referrer) return "Direct";
    let host;
    try {
        host = new URL(referrer).hostname.replace(/^www\./, "");
    } catch  {
        return "Direct";
    }
    if (host.includes("google")) return "Google";
    if (host.includes("bing") || host.includes("duckduckgo")) return "Other search";
    if (host.includes("linkedin")) return "LinkedIn";
    if (host.includes("facebook") || host.includes("instagram")) return "Meta";
    if (host.includes("x.com") || host.includes("twitter") || host.includes("t.co")) return "X";
    if (host.includes("whatsapp")) return "WhatsApp";
    if (host.includes("bitlayerx")) return "Internal";
    return host;
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__a1026984._.js.map