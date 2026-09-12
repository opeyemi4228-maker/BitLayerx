module.exports = [
"[project]/app/favicon.ico.mjs { IMAGE => \"[project]/app/favicon.ico (static in ecmascript, tag client)\" } [app-rsc] (structured image object, ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/favicon.ico.mjs { IMAGE => \"[project]/app/favicon.ico (static in ecmascript, tag client)\" } [app-rsc] (structured image object, ecmascript)"));
}),
"[project]/app/icon.png.mjs { IMAGE => \"[project]/app/icon.png (static in ecmascript, tag client)\" } [app-rsc] (structured image object, ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/icon.png.mjs { IMAGE => \"[project]/app/icon.png (static in ecmascript, tag client)\" } [app-rsc] (structured image object, ecmascript)"));
}),
"[project]/app/apple-icon.png.mjs { IMAGE => \"[project]/app/apple-icon.png (static in ecmascript, tag client)\" } [app-rsc] (structured image object, ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/apple-icon.png.mjs { IMAGE => \"[project]/app/apple-icon.png (static in ecmascript, tag client)\" } [app-rsc] (structured image object, ecmascript)"));
}),
"[project]/app/opengraph-image--metadata.js [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/opengraph-image--metadata.js [app-rsc] (ecmascript)"));
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/app/global-error.jsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/global-error.jsx [app-rsc] (ecmascript)"));
}),
"[project]/app/layout.js [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/layout.js [app-rsc] (ecmascript)"));
}),
"[project]/app/error.jsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/error.jsx [app-rsc] (ecmascript)"));
}),
"[project]/app/not-found.jsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/not-found.jsx [app-rsc] (ecmascript)"));
}),
"[project]/lib/seo.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Central SEO configuration.
 *
 * One file owns every title, description, canonical and keyword set on the
 * site. That matters for two reasons:
 *
 *   1. Google's "Duplicate without user-selected canonical" is caused by pages
 *      that inherit a parent canonical instead of declaring their own. Every
 *      route here declares one, so no two URLs ever claim the same canonical.
 *
 *   2. Titles and descriptions written together stay distinct from each other.
 *      Written page by page, they drift into near-duplicates, and Google drops
 *      near-duplicates into "Crawled, currently not indexed".
 */ __turbopack_context__.s([
    "AREA_SERVED",
    ()=>AREA_SERVED,
    "MARKETS",
    ()=>MARKETS,
    "PAGES",
    ()=>PAGES,
    "SITE",
    ()=>SITE,
    "pageMetadata",
    ()=>pageMetadata
]);
const SITE = {
    url: "https://bitlayerx.com",
    name: "BitLayerX",
    legalName: "BitLayerX Technologies",
    twitter: "@bitlayerx",
    email: "hello@bitlayerx.com",
    phone: "+234-802-540-1891",
    // Corporate Affairs Commission registration. A verifiable company number
    // is one of the few trust signals in this market that a visitor can check
    // themselves, which is exactly what makes it worth showing.
    cacNumber: "9834403",
    founder: "Opeyemi T. Ojurongbe",
    founderUrl: "https://opeyemiojurongbe.com"
};
const MARKETS = [
    {
        slug: "abuja",
        city: "Abuja",
        region: "FCT",
        country: "Nigeria",
        countryCode: "NG",
        primary: true,
        blurb: "Our studio is in Gwarinpa. Most Abuja clients meet us in person before anything is signed.",
        timezone: "The same working day as you, our team is here, and you are welcome to come and sit in the studio.",
        meetings: "In person at our Gwarinpa studio, or on a call, whichever you prefer.",
        contracting: "Naira contracts, with a clear written position on FX for anything with imported costs."
    },
    {
        slug: "lagos",
        city: "Lagos",
        region: "Lagos State",
        country: "Nigeria",
        countryCode: "NG",
        blurb: "Nigeria's commercial capital, and where most of our fintech and logistics work ships.",
        timezone: "The same working day as you. We are one flight away and travel to Lagos regularly for kickoffs.",
        meetings: "Video by default, in person for kickoffs and anything that genuinely needs a room.",
        contracting: "Naira contracts, with a clear written position on FX for anything with imported costs."
    },
    {
        slug: "port-harcourt",
        city: "Port Harcourt",
        region: "Rivers State",
        country: "Nigeria",
        countryCode: "NG",
        blurb: "Energy, industrial and logistics companies who need software that holds up in the field.",
        timezone: "The same working day as you.",
        meetings: "Video by default, in person for kickoffs and major reviews.",
        contracting: "Naira contracts, structured for corporate and industrial procurement."
    },
    {
        slug: "london",
        city: "London",
        region: "England",
        country: "United Kingdom",
        countryCode: "GB",
        blurb: "We hold a UK presence and work to GMT for British clients, with contracting in GBP.",
        timezone: "Effectively no time difference, our GMT+1 is the same working day as London, one hour offset in British Summer Time.",
        meetings: "Video, with a written daily update so progress never waits for a slot in the diary.",
        contracting: "Contracts and invoicing in GBP, with professional indemnity cover named explicitly for UK procurement."
    },
    {
        slug: "manchester",
        city: "Manchester",
        region: "England",
        country: "United Kingdom",
        countryCode: "GB",
        blurb: "The UK's fastest-growing tech cluster outside London, and a market that values straight pricing.",
        timezone: "Effectively no time difference, the same working day, one hour offset in British Summer Time.",
        meetings: "Video, with a written daily update so progress never waits for a slot in the diary.",
        contracting: "Contracts and invoicing in GBP, with professional indemnity cover named explicitly for UK procurement."
    },
    {
        slug: "dubai",
        city: "Dubai",
        region: "Dubai",
        country: "United Arab Emirates",
        countryCode: "AE",
        blurb: "GMT+1 to GST+4 is a three-hour gap, which makes Dubai delivery unusually smooth.",
        timezone: "Dubai is three hours ahead, so your morning is our early morning and the overlap runs to mid-afternoon your time.",
        meetings: "Video, scheduled in your morning. We move at the pace Dubai expects, a slow reply reads as disinterest here.",
        contracting: "Contracts in USD or AED, structured for UAE procurement and free-zone entities."
    },
    {
        slug: "johannesburg",
        city: "Johannesburg",
        region: "Gauteng",
        country: "South Africa",
        countryCode: "ZA",
        blurb: "Africa's deepest financial market, and clients who expect enterprise-grade engineering discipline.",
        timezone: "One hour ahead of us, an almost complete working-day overlap with no scheduling friction at all.",
        meetings: "Video, with a written daily update. In person for kickoffs on larger engagements.",
        contracting: "Contracts in ZAR or USD, structured for South African corporate procurement."
    },
    {
        slug: "cape-town",
        city: "Cape Town",
        region: "Western Cape",
        country: "South Africa",
        countryCode: "ZA",
        blurb: "A design and product culture that holds work to a high standard, our kind of market.",
        timezone: "One hour ahead of us, so the working day overlaps almost completely.",
        meetings: "Video, with a written daily update so nothing waits on a call.",
        contracting: "Contracts in ZAR or USD, structured for South African corporate procurement."
    },
    {
        slug: "new-york",
        city: "New York",
        region: "New York",
        country: "United States",
        countryCode: "US",
        blurb: "We overlap US Eastern mornings, and run async-first so nothing stalls overnight.",
        timezone: "Five to six hours behind us. Your morning is our afternoon, which gives a solid daily overlap for anything that needs a live conversation.",
        meetings: "Video in your morning, with a written daily update waiting when you start.",
        contracting: "Contracts in USD, with a W-8BEN-E on file for the entity. Fixed-scope, fixed-price where you want it."
    },
    {
        slug: "san-francisco",
        city: "San Francisco",
        region: "California",
        country: "United States",
        countryCode: "US",
        blurb: "The one market where the time gap is real, so we run genuinely async, and it works.",
        timezone: "Eight to nine hours behind us. This is the market where asynchronous discipline actually matters, and we are built for it.",
        meetings: "One fixed weekly call in your morning. Everything else is written, so you wake up to progress rather than questions.",
        contracting: "Contracts in USD, with a W-8BEN-E on file for the entity."
    },
    {
        slug: "toronto",
        city: "Toronto",
        region: "Ontario",
        country: "Canada",
        countryCode: "CA",
        blurb: "Canadian clients get the same Eastern-morning overlap as New York, with CAD contracting.",
        timezone: "Five to six hours behind us, your morning is our afternoon, with a reliable daily overlap.",
        meetings: "Video in your morning, with a written daily update waiting when you start.",
        contracting: "Contracts in CAD or USD, structured for Canadian procurement."
    },
    {
        slug: "nairobi",
        city: "Nairobi",
        region: "Nairobi County",
        country: "Kenya",
        countryCode: "KE",
        blurb: "East Africa's product capital, and a market that understands building for mobile-first users.",
        timezone: "Two hours ahead of us, so the working day overlaps almost entirely.",
        meetings: "Video, with a written daily update.",
        contracting: "Contracts in USD or KES."
    },
    {
        slug: "accra",
        city: "Accra",
        region: "Greater Accra",
        country: "Ghana",
        countryCode: "GH",
        blurb: "One hour behind us, same regional context, and none of the friction of a distant supplier.",
        timezone: "One hour behind us, effectively the same working day.",
        meetings: "Video, with a written daily update. In person for kickoffs.",
        contracting: "Contracts in USD or GHS."
    }
];
const AREA_SERVED = [
    "NG",
    "GB",
    "US",
    "AE",
    "ZA",
    "CA",
    "KE",
    "GH",
    "IE",
    "AU",
    "SA",
    "QA",
    "DE",
    "NL"
];
const PAGES = {
    "/": {
        title: "Digital Products, Brands & Systems Built to Last",
        description: "BitLayerX designs and builds the products, brands and systems companies run on. Strategy, design, engineering, brand, film and growth, one team in Abuja, delivering to Nigeria, the UK, the US and the UAE.",
        keywords: [
            "digital agency Abuja",
            "software development company Nigeria",
            "web design Lagos",
            "product design agency",
            "custom software development"
        ],
        priority: 1.0,
        changeFrequency: "weekly"
    },
    "/about": {
        title: "About BitLayerX, The Team Behind the Work",
        description: "Who we are, how we work, and why one team across strategy, design, engineering, brand, film and growth beats six agencies who never speak to each other.",
        keywords: [
            "about BitLayerX",
            "digital agency team Nigeria",
            "Opeyemi Ojurongbe",
            "software company Abuja"
        ],
        priority: 0.8,
        changeFrequency: "monthly"
    },
    "/services": {
        title: "Services, Strategy, Design, Engineering, Brand, Film & Growth",
        description: "Six practices, one team, one contract. Product strategy, UI/UX design, software engineering, brand identity, commercial film and performance marketing, delivered together.",
        keywords: [
            "digital services Nigeria",
            "web development services Abuja",
            "UI UX design agency",
            "branding agency Lagos",
            "video production Nigeria",
            "digital marketing agency"
        ],
        priority: 0.9,
        changeFrequency: "monthly"
    },
    "/industries": {
        title: "Industries We Build For",
        description: "Fintech, logistics, real estate, healthcare, education and public sector. The constraints differ; the discipline does not. See how we approach each.",
        keywords: [
            "fintech software development",
            "logistics software Nigeria",
            "real estate web development",
            "healthcare software Africa"
        ],
        priority: 0.8,
        changeFrequency: "monthly"
    },
    "/portfolio": {
        title: "Work, Live Projects & Deployments",
        description: "Every project in the BitLayerX index is a running deployment you can open and use. Synced from GitHub and refreshed hourly.",
        keywords: [
            "BitLayerX portfolio",
            "web development case studies",
            "software projects Nigeria"
        ],
        priority: 0.9,
        changeFrequency: "daily"
    },
    "/packages": {
        title: "Packages & Prices, Websites From ₦500,000",
        description: "Websites from ₦500,000, marketing from ₦1.5m, custom software from ₦8m. Five packages with real starting prices and exactly what is in each one.",
        keywords: [
            "web design pricing Nigeria",
            "software development cost Abuja",
            "digital agency packages",
            "website cost Lagos"
        ],
        priority: 0.9,
        changeFrequency: "weekly"
    },
    "/contact": {
        title: "Contact BitLayerX, Start a Project",
        description: "Tell us what you are building. We reply within one business day, and you get a written plan within 48 hours of the first call.",
        keywords: [
            "contact BitLayerX",
            "hire developers Nigeria",
            "digital agency Abuja contact"
        ],
        priority: 0.8,
        changeFrequency: "monthly"
    },
    "/company": {
        title: "The Company, How BitLayerX Is Built",
        description: "Our structure, our principles and the way we run projects. The operating detail behind the work.",
        keywords: [
            "BitLayerX company",
            "digital agency structure",
            "technology company Nigeria"
        ],
        priority: 0.6,
        changeFrequency: "monthly"
    },
    "/solutions": {
        title: "Solutions, Systems That Solve a Named Problem",
        description: "Purpose-built platforms, internal tools, customer portals and automations. Each one starts from a problem you can name and ends in something running.",
        keywords: [
            "custom software solutions",
            "business automation Nigeria",
            "enterprise software Africa"
        ],
        priority: 0.8,
        changeFrequency: "monthly"
    },
    "/enterprise": {
        title: "Enterprise, Engineering for Organisations at Scale",
        description: "Architecture, security, integration and support for organisations where downtime has a board-level cost. Built for procurement, not just for launch.",
        keywords: [
            "enterprise software development",
            "enterprise web development Nigeria",
            "scalable architecture"
        ],
        priority: 0.8,
        changeFrequency: "monthly"
    },
    "/startups": {
        title: "Startups, From Empty Repo to Something Users Pay For",
        description: "Founder-speed delivery without founder-speed debt. MVPs, investor-ready product, and the engineering discipline to survive your first thousand users.",
        keywords: [
            "startup MVP development",
            "startup web development Nigeria",
            "MVP agency Africa"
        ],
        priority: 0.8,
        changeFrequency: "monthly"
    },
    "/design": {
        title: "Design, Interfaces, Brand & the Craft Between Them",
        description: "Product design, design systems and brand identity. Design that survives contact with engineering, because the engineers are in the room.",
        keywords: [
            "UI UX design Nigeria",
            "product design agency Abuja",
            "brand identity design Lagos",
            "design system"
        ],
        priority: 0.8,
        changeFrequency: "monthly"
    },
    "/marketing": {
        title: "Marketing & Growth, Demand, Not Just Traffic",
        description: "SEO, paid acquisition, lifecycle email and content built to produce qualified pipeline. Measured against revenue, not impressions.",
        keywords: [
            "digital marketing agency Nigeria",
            "SEO agency Abuja",
            "performance marketing Lagos",
            "growth marketing Africa"
        ],
        priority: 0.8,
        changeFrequency: "monthly"
    },
    "/blog": {
        title: "Insight, Engineering, Design & Growth Notes",
        description: "Practical writing on building software, designing products and growing companies, from the team doing the work. New pieces most weeks.",
        keywords: [
            "software engineering blog",
            "design blog Nigeria",
            "tech blog Africa",
            "startup advice Nigeria"
        ],
        priority: 0.9,
        changeFrequency: "daily"
    }
};
function pageMetadata(path, overrides = {}) {
    const page = PAGES[path] ?? {};
    const url = `${SITE.url}${path === "/" ? "" : path}`;
    const title = overrides.title ?? page.title ?? SITE.name;
    const description = overrides.description ?? page.description ?? "";
    const keywords = overrides.keywords ?? page.keywords ?? [];
    return {
        title,
        description,
        keywords,
        alternates: {
            canonical: url
        },
        openGraph: {
            type: "website",
            url,
            siteName: SITE.name,
            title,
            description,
            locale: "en_NG",
            alternateLocale: [
                "en_GB",
                "en_US",
                "en_AE"
            ],
            images: [
                {
                    url: `${SITE.url}/opengraph-image`,
                    width: 1200,
                    height: 630,
                    alt: `${SITE.name}, ${title}`
                }
            ]
        },
        twitter: {
            card: "summary_large_image",
            title,
            description,
            site: SITE.twitter,
            creator: SITE.twitter,
            images: [
                `${SITE.url}/opengraph-image`
            ]
        },
        robots: {
            index: true,
            follow: true,
            googleBot: {
                index: true,
                follow: true,
                "max-image-preview": "large",
                "max-snippet": -1,
                "max-video-preview": -1
            }
        },
        ...overrides.extra
    };
}
}),
"[project]/components/home/Hero.jsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Hero
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$primitives$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/primitives.jsx [app-rsc] (ecmascript)");
;
;
;
;
function Hero() {
    // Top padding is deliberately small. The navbar spacer already reserves the
    // bar's full height above this, so a large pt here stacks on top of it and
    // opens a dead band between the nav and the headline.
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "relative overflow-hidden bg-white pt-[clamp(1.75rem,3.5vw,3rem)] pb-[clamp(3.5rem,7vw,6rem)]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                "aria-hidden": "true",
                className: "pointer-events-none absolute inset-x-0 top-0 h-[70%]",
                style: {
                    background: "radial-gradient(ellipse 90% 60% at 50% -10%, rgba(0,64,255,0.055), transparent 70%)"
                }
            }, void 0, false, {
                fileName: "[project]/components/home/Hero.jsx",
                lineNumber: 26,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$primitives$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Container"], {
                width: "narrow",
                className: "relative text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-[13px] font-semibold tracking-[0.02em] text-[#0040FF]",
                        children: "Websites · Apps · Design · Branding · Video · Marketing"
                    }, void 0, false, {
                        fileName: "[project]/components/home/Hero.jsx",
                        lineNumber: 36,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "mx-auto mt-6 max-w-[14ch] text-[clamp(3rem,8.6vw,6.4rem)] font-extrabold leading-[0.94] tracking-[-0.045em] text-[#1d1d1f]",
                        children: [
                            "We",
                            " ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[1.14em] font-black text-[#0040FF] tracking-[-0.05em]",
                                children: "build"
                            }, void 0, false, {
                                fileName: "[project]/components/home/Hero.jsx",
                                lineNumber: 45,
                                columnNumber: 11
                            }, this),
                            " ",
                            "what your business runs on."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/home/Hero.jsx",
                        lineNumber: 43,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mx-auto mt-7 max-w-[46ch] text-[clamp(1.1rem,1.9vw,1.5rem)] font-normal leading-[1.45] text-[#6e6e73]",
                        children: "One team for everything digital. Tell us what you need and we will send you a written plan in 48 hours."
                    }, void 0, false, {
                        fileName: "[project]/components/home/Hero.jsx",
                        lineNumber: 51,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                href: "/start-a-project",
                                className: "inline-flex items-center justify-center rounded-full bg-[#0040FF] px-8 py-[0.95rem] text-[1.0625rem] font-medium text-white transition-colors hover:bg-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0040FF] focus-visible:ring-offset-2",
                                children: "Start a project"
                            }, void 0, false, {
                                fileName: "[project]/components/home/Hero.jsx",
                                lineNumber: 57,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$primitives$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ActionLink"], {
                                href: "/portfolio",
                                children: "See work that is live"
                            }, void 0, false, {
                                fileName: "[project]/components/home/Hero.jsx",
                                lineNumber: 63,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/home/Hero.jsx",
                        lineNumber: 56,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative mx-auto mt-16 min-h-[210px] max-w-[940px] sm:min-h-[330px]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("figure", {
                                className: "absolute bottom-0 left-0 hidden w-[32%] -rotate-[7deg] sm:block",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "overflow-hidden rounded-lg bg-white shadow-[0_18px_45px_-20px_rgba(0,0,0,0.4)] ring-1 ring-black/[0.07]",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                        src: "/images/work/gcsa-consulting.jpg",
                                        alt: "GCSA Consulting, a business consultancy website built by BitLayerX.",
                                        width: 1200,
                                        height: 633,
                                        sizes: "(max-width: 640px) 0px, 300px",
                                        className: "block h-auto w-full"
                                    }, void 0, false, {
                                        fileName: "[project]/components/home/Hero.jsx",
                                        lineNumber: 81,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/home/Hero.jsx",
                                    lineNumber: 80,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/home/Hero.jsx",
                                lineNumber: 79,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("figure", {
                                className: "absolute bottom-0 right-0 hidden w-[32%] rotate-[7deg] sm:block",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "overflow-hidden rounded-lg bg-white shadow-[0_18px_45px_-20px_rgba(0,0,0,0.4)] ring-1 ring-black/[0.07]",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                        src: "/images/work/point-of-sale_webapp.jpg",
                                        alt: "Swift Grocers, a point of sale web application built by BitLayerX.",
                                        width: 1200,
                                        height: 633,
                                        sizes: "(max-width: 640px) 0px, 300px",
                                        className: "block h-auto w-full"
                                    }, void 0, false, {
                                        fileName: "[project]/components/home/Hero.jsx",
                                        lineNumber: 95,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/home/Hero.jsx",
                                    lineNumber: 94,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/home/Hero.jsx",
                                lineNumber: 93,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("figure", {
                                className: "relative z-10 mx-auto w-full sm:w-[64%]",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "overflow-hidden rounded-xl bg-white shadow-[0_30px_80px_-26px_rgba(0,0,0,0.45)] ring-1 ring-black/[0.09]",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-1.5 border-b border-black/[0.06] bg-white px-3 py-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    "aria-hidden": "true",
                                                    className: "h-2 w-2 rounded-full bg-black/15"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/home/Hero.jsx",
                                                    lineNumber: 113,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    "aria-hidden": "true",
                                                    className: "h-2 w-2 rounded-full bg-black/15"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/home/Hero.jsx",
                                                    lineNumber: 114,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    "aria-hidden": "true",
                                                    className: "h-2 w-2 rounded-full bg-black/15"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/home/Hero.jsx",
                                                    lineNumber: 115,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "mx-auto truncate rounded bg-black/[0.04] px-2.5 py-0.5 text-[10.5px] font-medium text-[#6e6e73]",
                                                    children: "orrea.ng"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/home/Hero.jsx",
                                                    lineNumber: 116,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/home/Hero.jsx",
                                            lineNumber: 112,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                            src: "/images/work/orrea.jpg",
                                            alt: "Orréa Bread House, an artisan bakery website and ordering experience built by BitLayerX.",
                                            width: 1200,
                                            height: 633,
                                            priority: true,
                                            sizes: "(max-width: 640px) 100vw, 600px",
                                            className: "block h-auto w-full"
                                        }, void 0, false, {
                                            fileName: "[project]/components/home/Hero.jsx",
                                            lineNumber: 120,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/home/Hero.jsx",
                                    lineNumber: 108,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/home/Hero.jsx",
                                lineNumber: 107,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/home/Hero.jsx",
                        lineNumber: 77,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-8 text-[13px] text-[#6e6e73]",
                        children: [
                            "Live work for Orréa, GCSA Consulting and Swift Grocers.",
                            " ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                href: "/portfolio",
                                className: "font-medium text-[#0040FF] underline underline-offset-4 hover:text-black",
                                children: "Open any of them"
                            }, void 0, false, {
                                fileName: "[project]/components/home/Hero.jsx",
                                lineNumber: 136,
                                columnNumber: 11
                            }, this),
                            "."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/home/Hero.jsx",
                        lineNumber: 134,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("dl", {
                        className: "mx-auto mt-16 grid max-w-[720px] grid-cols-2 gap-x-6 gap-y-9 sm:grid-cols-4",
                        children: [
                            {
                                v: "48hr",
                                l: "To get your plan"
                            },
                            {
                                v: "6",
                                l: "Services, one team"
                            },
                            {
                                v: "13",
                                l: "Cities we serve"
                            },
                            {
                                v: "100%",
                                l: "You own everything"
                            }
                        ].map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("dt", {
                                        className: "sr-only",
                                        children: s.l
                                    }, void 0, false, {
                                        fileName: "[project]/components/home/Hero.jsx",
                                        lineNumber: 156,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("dd", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "block text-[clamp(1.6rem,3vw,2.2rem)] font-extrabold tracking-[-0.03em] text-[#1d1d1f]",
                                                children: s.v
                                            }, void 0, false, {
                                                fileName: "[project]/components/home/Hero.jsx",
                                                lineNumber: 158,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "mt-1 block text-[13px] leading-snug text-[#6e6e73]",
                                                children: s.l
                                            }, void 0, false, {
                                                fileName: "[project]/components/home/Hero.jsx",
                                                lineNumber: 161,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/home/Hero.jsx",
                                        lineNumber: 157,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, s.l, true, {
                                fileName: "[project]/components/home/Hero.jsx",
                                lineNumber: 155,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/components/home/Hero.jsx",
                        lineNumber: 148,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/home/Hero.jsx",
                lineNumber: 35,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/home/Hero.jsx",
        lineNumber: 23,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/home/Practices.jsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Practices
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$primitives$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/primitives.jsx [app-rsc] (ecmascript)");
;
;
;
/**
 * Our services.
 *
 * Written in plain language. Every line says what we do and what the client
 * gets, with no jargon and no dashes. Short sentences read faster, and a
 * reader who understands the offer in three seconds is far likelier to act on
 * it than one who has to decode it.
 */ const SERVICES = [
    {
        title: "Websites",
        body: "We build fast websites that show up on Google and bring you customers. Your team can update the words and pictures without calling us.",
        href: "/services"
    },
    {
        title: "Apps and software",
        body: "We build web and mobile apps. Logins, payments, dashboards and everything behind them. Built to grow with you.",
        href: "/solutions"
    },
    {
        title: "Design",
        body: "We design screens that people understand straight away. No training needed, no confusion, no lost customers.",
        href: "/design"
    },
    {
        title: "Branding",
        body: "We create your logo, colours and look. Then we give you the files and rules so it stays right long after we finish.",
        href: "/design"
    },
    {
        title: "Video",
        body: "We shoot and edit your adverts and brand films with our own team. You get the full video plus short cuts for every platform.",
        href: "/services"
    },
    {
        title: "Marketing",
        body: "We bring the right people to your business through Google, social media and email. We measure it in sales, not clicks.",
        href: "/marketing"
    }
];
function Practices() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$primitives$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Section"], {
        tone: "white",
        labelledBy: "services-heading",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$primitives$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Container"], {
            width: "default",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$primitives$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SectionHeader"], {
                    align: "left",
                    id: "services-heading",
                    eyebrow: "Our services",
                    heading: "Everything you need, from one team.",
                    lede: "Most companies hire six different suppliers and end up managing all of them. We do all six, so you only manage us."
                }, void 0, false, {
                    fileName: "[project]/components/home/Practices.jsx",
                    lineNumber: 50,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-14 grid gap-px overflow-hidden rounded-2xl bg-black/10 sm:grid-cols-2 lg:grid-cols-3",
                    children: SERVICES.map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                            href: s.href,
                            className: "group bg-white p-8 transition-colors hover:bg-black/[0.02] focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#0040FF]",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "flex items-center gap-1.5 text-[1.375rem] font-bold tracking-[-0.025em] text-[#1d1d1f] transition-colors group-hover:text-[#0040FF]",
                                    children: [
                                        s.title,
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            "aria-hidden": "true",
                                            className: "text-[1.1rem] transition-transform duration-200 group-hover:translate-x-[3px]",
                                            children: "›"
                                        }, void 0, false, {
                                            fileName: "[project]/components/home/Practices.jsx",
                                            lineNumber: 67,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/home/Practices.jsx",
                                    lineNumber: 65,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-3 text-[15px] leading-relaxed text-[#6e6e73]",
                                    children: s.body
                                }, void 0, false, {
                                    fileName: "[project]/components/home/Practices.jsx",
                                    lineNumber: 74,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, s.title, true, {
                            fileName: "[project]/components/home/Practices.jsx",
                            lineNumber: 60,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/components/home/Practices.jsx",
                    lineNumber: 58,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/home/Practices.jsx",
            lineNumber: 49,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/home/Practices.jsx",
        lineNumber: 48,
        columnNumber: 5
    }, this);
}
}),
"[project]/lib/github.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// lib/github.js
// Live GitHub -> Vercel project feed for the BitLayerx portfolio.
//
// Any public repo on the connected GitHub account that has a Vercel
// homepage URL set (Repo → About → Website) appears on the portfolio
// automatically. Push a new repo, set its Vercel URL, and it shows up
// on the next revalidation, no code changes needed.
//
// Optionally set GITHUB_TOKEN in the environment to raise the API rate
// limit (recommended for production deployments).
__turbopack_context__.s([
    "GITHUB_USER",
    ()=>GITHUB_USER,
    "getGithubProjects",
    ()=>getGithubProjects,
    "prettifyName",
    ()=>prettifyName
]);
const GITHUB_USER = 'opeyemi4228-maker';
// Force the correct live URL for repos whose GitHub "homepage" field is
// outdated or wrong. Keyed by lowercased repo name. These win over whatever
// the GitHub API (or the fallback list) reports.
const HOMEPAGE_OVERRIDES = {
    'realestate': 'https://bitlayerx-real-estate.vercel.app',
    'digital-library': 'https://digital-library-vert.vercel.app'
};
// Repos we never want to show on the public portfolio.
const EXCLUDED = new Set([
    'bitlayerx',
    'check',
    'nordic-bridge-partner',
    'bricks-wealth',
    'bricks-and-wealth',
    'rotimi',
    'rotimiamaechi-website'
]);
// Used only if the GitHub API is unreachable / rate-limited, so the
// portfolio always renders something sensible.
const FALLBACK = [
    {
        id: 'gcsa',
        name: 'GCSA-Consulting',
        homepage: 'https://gcsa-consulting.vercel.app',
        html_url: 'https://github.com/opeyemi4228-maker/GCSA-Consulting',
        language: 'JavaScript',
        updated_at: '2026-06-08T00:00:00Z'
    },
    {
        id: 'realestate',
        name: 'RealEstate',
        homepage: 'https://bitlayerx-real-estate.vercel.app',
        html_url: 'https://github.com/opeyemi4228-maker/RealEstate',
        language: 'JavaScript',
        updated_at: '2026-06-07T00:00:00Z'
    },
    {
        id: 'ngogbehei',
        name: 'Ngogbehei-Cancer-Center-',
        homepage: 'https://ngogbeheicancercenter.vercel.app',
        html_url: 'https://github.com/opeyemi4228-maker/Ngogbehei-Cancer-Center-',
        language: 'JavaScript',
        updated_at: '2026-05-25T00:00:00Z'
    },
    {
        id: 'charles',
        name: 'Pastor-Charles-Adakole',
        homepage: 'https://charlesadakoleconsulting.vercel.app',
        html_url: 'https://github.com/opeyemi4228-maker/Pastor-Charles-Adakole',
        language: 'JavaScript',
        updated_at: '2026-05-13T00:00:00Z'
    },
    {
        id: 'ncc',
        name: 'NCC',
        homepage: 'https://ncc-olive.vercel.app',
        html_url: 'https://github.com/opeyemi4228-maker/NCC',
        language: 'JavaScript',
        updated_at: '2026-04-15T00:00:00Z'
    },
    {
        id: 'digital-library',
        name: 'Digital-Library',
        homepage: 'https://digital-library-vert.vercel.app',
        html_url: 'https://github.com/opeyemi4228-maker/Digital-Library',
        language: 'JavaScript',
        updated_at: '2026-01-19T00:00:00Z'
    }
];
// "Ngogbehei-Cancer-Center-" -> "Ngogbehei Cancer Center"
// "RotimiAmaechi-Website"    -> "Rotimi Amaechi Website"
// Words that should stay upper-case when a repo name is turned into a title.
const ACRONYMS = new Set([
    'ncc',
    'gcsa',
    'ai',
    'crm',
    'erp',
    'hr',
    'ui',
    'ux',
    'api'
]);
function prettifyName(name) {
    return name.replace(/[-_]+/g, ' ').replace(/([a-z\d])([A-Z])/g, '$1 $2').replace(/\s+/g, ' ').trim().split(' ').map((word)=>ACRONYMS.has(word.toLowerCase()) ? word.toUpperCase() : word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}
function toProject(repo) {
    const override = HOMEPAGE_OVERRIDES[(repo.name || '').toLowerCase()];
    const homepage = (override || repo.homepage || '').trim();
    return {
        id: repo.id ?? repo.name,
        slug: repo.name,
        title: prettifyName(repo.name),
        homepage,
        repoUrl: repo.html_url || `https://github.com/${GITHUB_USER}/${repo.name}`,
        language: repo.language || 'Web',
        topics: repo.topics || [],
        stars: repo.stargazers_count || 0,
        description: (repo.description || '').trim() || null,
        updatedAt: repo.updated_at || null
    };
}
async function getGithubProjects() {
    const headers = {
        Accept: 'application/vnd.github+json'
    };
    if (process.env.GITHUB_TOKEN) {
        headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
    }
    try {
        const res = await fetch(`https://api.github.com/users/${GITHUB_USER}/repos?per_page=100&sort=updated`, {
            headers,
            next: {
                revalidate: 3600
            }
        } // refresh hourly
        );
        if (!res.ok) throw new Error(`GitHub API ${res.status}`);
        const repos = await res.json();
        const projects = repos.filter((r)=>!r.fork).filter((r)=>(r.homepage || '').trim()) // must have a deployed URL
        .filter((r)=>!EXCLUDED.has(r.name.toLowerCase())).map(toProject);
        return projects.length ? projects : FALLBACK.map(toProject);
    } catch  {
        return FALLBACK.map(toProject);
    }
}
}),
"[project]/components/home/Clients.jsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Clients
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$primitives$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/primitives.jsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$github$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/github.js [app-rsc] (ecmascript)");
;
;
;
async function Clients() {
    let projects = [];
    try {
        projects = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$github$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getGithubProjects"])();
    } catch  {
        projects = [];
    }
    if (projects.length < 3) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$primitives$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Section"], {
        tone: "white",
        rhythm: "tight",
        labelledBy: "clients-heading",
        className: "border-b border-black/[0.07]",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$primitives$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Container"], {
            width: "default",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    id: "clients-heading",
                    className: "text-center text-[13px] font-semibold text-[#6e6e73]",
                    children: "Businesses running on something we built"
                }, void 0, false, {
                    fileName: "[project]/components/home/Clients.jsx",
                    lineNumber: 27,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                    className: "mt-8 flex flex-wrap items-center justify-center gap-x-10 gap-y-5 sm:gap-x-14",
                    children: projects.slice(0, 8).map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: p.homepage,
                                target: "_blank",
                                rel: "noopener noreferrer",
                                className: "text-[1.05rem] font-bold tracking-[-0.02em] text-[#1d1d1f]/45 transition-colors hover:text-[#0040FF] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0040FF] focus-visible:ring-offset-2 rounded",
                                children: p.title
                            }, void 0, false, {
                                fileName: "[project]/components/home/Clients.jsx",
                                lineNumber: 37,
                                columnNumber: 15
                            }, this)
                        }, p.id, false, {
                            fileName: "[project]/components/home/Clients.jsx",
                            lineNumber: 36,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/components/home/Clients.jsx",
                    lineNumber: 34,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "mt-8 text-center",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$primitives$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ActionLink"], {
                        href: "/portfolio",
                        children: "Open any of them"
                    }, void 0, false, {
                        fileName: "[project]/components/home/Clients.jsx",
                        lineNumber: 50,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/home/Clients.jsx",
                    lineNumber: 49,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/home/Clients.jsx",
            lineNumber: 26,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/home/Clients.jsx",
        lineNumber: 25,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/home/Showcase.jsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Showcase
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$primitives$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/primitives.jsx [app-rsc] (ecmascript)");
;
;
;
/**
 * The showcase band.
 *
 * Drawn rather than photographed, and deliberately so: an illustrated device
 * frame is honest about being an illustration, whereas a stock photograph of a
 * laptop on a desk pretends to be a record of work that was never done. When
 * real product photography exists, it replaces this wholesale.
 */ /** A browser chrome frame, the container Apple uses to say "this is software". */ function BrowserFrame({ children, label, className = "" }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `overflow-hidden rounded-xl bg-white shadow-[0_24px_70px_-24px_rgba(0,0,0,0.55)] ring-1 ring-black/10 ${className}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-2 border-b border-black/[0.07] bg-white px-4 py-2.5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "flex gap-1.5",
                        "aria-hidden": "true",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "h-2.5 w-2.5 rounded-full bg-black/15"
                            }, void 0, false, {
                                fileName: "[project]/components/home/Showcase.jsx",
                                lineNumber: 21,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "h-2.5 w-2.5 rounded-full bg-black/15"
                            }, void 0, false, {
                                fileName: "[project]/components/home/Showcase.jsx",
                                lineNumber: 22,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "h-2.5 w-2.5 rounded-full bg-black/15"
                            }, void 0, false, {
                                fileName: "[project]/components/home/Showcase.jsx",
                                lineNumber: 23,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/home/Showcase.jsx",
                        lineNumber: 20,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "mx-auto truncate rounded-md bg-black/[0.05] px-3 py-1 text-[11px] font-medium text-[#6e6e73]",
                        children: label
                    }, void 0, false, {
                        fileName: "[project]/components/home/Showcase.jsx",
                        lineNumber: 25,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/home/Showcase.jsx",
                lineNumber: 19,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative",
                children: children
            }, void 0, false, {
                fileName: "[project]/components/home/Showcase.jsx",
                lineNumber: 29,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/home/Showcase.jsx",
        lineNumber: 16,
        columnNumber: 5
    }, this);
}
/** A dashboard abstraction, bars, a chart line, a table. No fake numbers. */ function DashboardArt() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 640 380",
        className: "block w-full",
        role: "img",
        "aria-label": "An abstract representation of a product dashboard.",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                width: "640",
                height: "380",
                fill: "#ffffff"
            }, void 0, false, {
                fileName: "[project]/components/home/Showcase.jsx",
                lineNumber: 38,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "0",
                y: "0",
                width: "132",
                height: "380",
                fill: "#ffffff"
            }, void 0, false, {
                fileName: "[project]/components/home/Showcase.jsx",
                lineNumber: 41,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "20",
                y: "26",
                width: "64",
                height: "9",
                rx: "4.5",
                fill: "#0040FF"
            }, void 0, false, {
                fileName: "[project]/components/home/Showcase.jsx",
                lineNumber: 42,
                columnNumber: 7
            }, this),
            [
                62,
                88,
                114,
                140,
                166
            ].map((y, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                    x: "20",
                    y: y,
                    width: i === 0 ? 88 : 74,
                    height: "7",
                    rx: "3.5",
                    fill: "#0B0B0F",
                    opacity: i === 0 ? "0.5" : "0.16"
                }, y, false, {
                    fileName: "[project]/components/home/Showcase.jsx",
                    lineNumber: 44,
                    columnNumber: 9
                }, this)),
            [
                0,
                1,
                2
            ].map((i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                            x: 162 + i * 158,
                            y: "30",
                            width: "140",
                            height: "72",
                            rx: "10",
                            fill: "#ffffff"
                        }, void 0, false, {
                            fileName: "[project]/components/home/Showcase.jsx",
                            lineNumber: 50,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                            x: 178 + i * 158,
                            y: "48",
                            width: "46",
                            height: "6",
                            rx: "3",
                            fill: "#0B0B0F",
                            opacity: "0.2"
                        }, void 0, false, {
                            fileName: "[project]/components/home/Showcase.jsx",
                            lineNumber: 51,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                            x: 178 + i * 158,
                            y: "66",
                            width: "76",
                            height: "14",
                            rx: "4",
                            fill: "#0040FF",
                            opacity: 1 - i * 0.28
                        }, void 0, false, {
                            fileName: "[project]/components/home/Showcase.jsx",
                            lineNumber: 52,
                            columnNumber: 11
                        }, this)
                    ]
                }, i, true, {
                    fileName: "[project]/components/home/Showcase.jsx",
                    lineNumber: 49,
                    columnNumber: 9
                }, this)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "162",
                y: "120",
                width: "456",
                height: "150",
                rx: "10",
                fill: "#ffffff"
            }, void 0, false, {
                fileName: "[project]/components/home/Showcase.jsx",
                lineNumber: 57,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                points: "186,236 244,212 302,222 360,180 418,192 476,152 534,164 592,132",
                fill: "none",
                stroke: "#0040FF",
                strokeWidth: "3",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/components/home/Showcase.jsx",
                lineNumber: 58,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("polygon", {
                points: "186,236 244,212 302,222 360,180 418,192 476,152 534,164 592,132 592,258 186,258",
                fill: "#0040FF",
                opacity: "0.07"
            }, void 0, false, {
                fileName: "[project]/components/home/Showcase.jsx",
                lineNumber: 66,
                columnNumber: 7
            }, this),
            [
                288,
                312,
                336
            ].map((y, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                            x: "162",
                            y: y,
                            width: "200",
                            height: "8",
                            rx: "4",
                            fill: "#0B0B0F",
                            opacity: "0.14"
                        }, void 0, false, {
                            fileName: "[project]/components/home/Showcase.jsx",
                            lineNumber: 75,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                            x: "392",
                            y: y,
                            width: "120",
                            height: "8",
                            rx: "4",
                            fill: "#0B0B0F",
                            opacity: "0.09"
                        }, void 0, false, {
                            fileName: "[project]/components/home/Showcase.jsx",
                            lineNumber: 76,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                            x: "546",
                            y: y,
                            width: "72",
                            height: "8",
                            rx: "4",
                            fill: "#0040FF",
                            opacity: 0.3 - i * 0.07
                        }, void 0, false, {
                            fileName: "[project]/components/home/Showcase.jsx",
                            lineNumber: 77,
                            columnNumber: 11
                        }, this)
                    ]
                }, y, true, {
                    fileName: "[project]/components/home/Showcase.jsx",
                    lineNumber: 74,
                    columnNumber: 9
                }, this))
        ]
    }, void 0, true, {
        fileName: "[project]/components/home/Showcase.jsx",
        lineNumber: 37,
        columnNumber: 5
    }, this);
}
/** A phone abstraction, sat over the browser frame for depth. */ function PhoneArt() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "overflow-hidden rounded-[1.75rem] bg-black p-2 shadow-[0_30px_70px_-20px_rgba(0,0,0,0.7)] ring-1 ring-white/10",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            viewBox: "0 0 240 460",
            className: "block w-full rounded-[1.35rem]",
            role: "img",
            "aria-label": "An abstract representation of a mobile application screen.",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                    width: "240",
                    height: "460",
                    fill: "#ffffff"
                }, void 0, false, {
                    fileName: "[project]/components/home/Showcase.jsx",
                    lineNumber: 89,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                    x: "0",
                    y: "0",
                    width: "240",
                    height: "132",
                    fill: "#0040FF"
                }, void 0, false, {
                    fileName: "[project]/components/home/Showcase.jsx",
                    lineNumber: 90,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                    x: "22",
                    y: "34",
                    width: "70",
                    height: "8",
                    rx: "4",
                    fill: "#ffffff",
                    opacity: "0.55"
                }, void 0, false, {
                    fileName: "[project]/components/home/Showcase.jsx",
                    lineNumber: 91,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                    x: "22",
                    y: "56",
                    width: "130",
                    height: "15",
                    rx: "5",
                    fill: "#ffffff"
                }, void 0, false, {
                    fileName: "[project]/components/home/Showcase.jsx",
                    lineNumber: 92,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                    x: "22",
                    y: "82",
                    width: "104",
                    height: "15",
                    rx: "5",
                    fill: "#ffffff",
                    opacity: "0.85"
                }, void 0, false, {
                    fileName: "[project]/components/home/Showcase.jsx",
                    lineNumber: 93,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                    x: "20",
                    y: "112",
                    width: "200",
                    height: "76",
                    rx: "12",
                    fill: "#ffffff",
                    stroke: "#0B0B0F",
                    strokeOpacity: "0.08"
                }, void 0, false, {
                    fileName: "[project]/components/home/Showcase.jsx",
                    lineNumber: 96,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                    x: "38",
                    y: "132",
                    width: "58",
                    height: "7",
                    rx: "3.5",
                    fill: "#0B0B0F",
                    opacity: "0.2"
                }, void 0, false, {
                    fileName: "[project]/components/home/Showcase.jsx",
                    lineNumber: 97,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                    x: "38",
                    y: "150",
                    width: "96",
                    height: "16",
                    rx: "4",
                    fill: "#0040FF"
                }, void 0, false, {
                    fileName: "[project]/components/home/Showcase.jsx",
                    lineNumber: 98,
                    columnNumber: 9
                }, this),
                [
                    212,
                    262,
                    312,
                    362
                ].map((y, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                x: "20",
                                y: y,
                                width: "200",
                                height: "38",
                                rx: "9",
                                fill: "#ffffff"
                            }, void 0, false, {
                                fileName: "[project]/components/home/Showcase.jsx",
                                lineNumber: 102,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                cx: "43",
                                cy: y + 19,
                                r: "10",
                                fill: "#0040FF",
                                opacity: 0.85 - i * 0.18
                            }, void 0, false, {
                                fileName: "[project]/components/home/Showcase.jsx",
                                lineNumber: 103,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                x: "62",
                                y: y + 10,
                                width: "88",
                                height: "7",
                                rx: "3.5",
                                fill: "#0B0B0F",
                                opacity: "0.22"
                            }, void 0, false, {
                                fileName: "[project]/components/home/Showcase.jsx",
                                lineNumber: 104,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                x: "62",
                                y: y + 23,
                                width: "58",
                                height: "6",
                                rx: "3",
                                fill: "#0B0B0F",
                                opacity: "0.11"
                            }, void 0, false, {
                                fileName: "[project]/components/home/Showcase.jsx",
                                lineNumber: 105,
                                columnNumber: 13
                            }, this)
                        ]
                    }, y, true, {
                        fileName: "[project]/components/home/Showcase.jsx",
                        lineNumber: 101,
                        columnNumber: 11
                    }, this)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                    x: "20",
                    y: "414",
                    width: "200",
                    height: "30",
                    rx: "15",
                    fill: "#0B0B0F"
                }, void 0, false, {
                    fileName: "[project]/components/home/Showcase.jsx",
                    lineNumber: 109,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/home/Showcase.jsx",
            lineNumber: 88,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/home/Showcase.jsx",
        lineNumber: 87,
        columnNumber: 5
    }, this);
}
function Showcase() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$primitives$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Section"], {
        tone: "dark",
        labelledBy: "showcase-heading",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$primitives$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Container"], {
            width: "default",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mx-auto max-w-[760px] text-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-[12px] font-bold uppercase tracking-[0.18em] text-[#5C86FF]",
                            children: "One team, one system"
                        }, void 0, false, {
                            fileName: "[project]/components/home/Showcase.jsx",
                            lineNumber: 120,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            id: "showcase-heading",
                            className: "mt-4 text-[clamp(2.1rem,5vw,3.9rem)] font-extrabold leading-[1.03] tracking-[-0.035em]",
                            children: "Web and mobile that behave like one product."
                        }, void 0, false, {
                            fileName: "[project]/components/home/Showcase.jsx",
                            lineNumber: 123,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mx-auto mt-5 max-w-[52ch] text-[1.0625rem] leading-relaxed text-white/60",
                            children: "Same design system, same engineering team, same release. Not a website from one supplier and an app from another that happen to share a logo."
                        }, void 0, false, {
                            fileName: "[project]/components/home/Showcase.jsx",
                            lineNumber: 129,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/home/Showcase.jsx",
                    lineNumber: 119,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative mx-auto mt-16 max-w-[900px]",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(BrowserFrame, {
                            label: "bitlayerx.com/app",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(DashboardArt, {}, void 0, false, {
                                fileName: "[project]/components/home/Showcase.jsx",
                                lineNumber: 139,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/home/Showcase.jsx",
                            lineNumber: 138,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute -bottom-10 -right-2 w-[26%] min-w-[120px] max-w-[190px] sm:-right-6 lg:-right-12",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(PhoneArt, {}, void 0, false, {
                                fileName: "[project]/components/home/Showcase.jsx",
                                lineNumber: 143,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/home/Showcase.jsx",
                            lineNumber: 142,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/home/Showcase.jsx",
                    lineNumber: 137,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-24 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                            href: "/portfolio",
                            className: "inline-flex items-center justify-center rounded-full bg-white px-8 py-[0.9rem] text-[1.0625rem] font-medium text-[#1d1d1f] transition-colors hover:bg-white/90",
                            children: "See live deployments"
                        }, void 0, false, {
                            fileName: "[project]/components/home/Showcase.jsx",
                            lineNumber: 148,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$primitives$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ActionLink"], {
                            href: "/solutions",
                            tone: "light",
                            children: "How we build them"
                        }, void 0, false, {
                            fileName: "[project]/components/home/Showcase.jsx",
                            lineNumber: 154,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/home/Showcase.jsx",
                    lineNumber: 147,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/home/Showcase.jsx",
            lineNumber: 118,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/home/Showcase.jsx",
        lineNumber: 117,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/home/Method.jsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Method
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$primitives$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/primitives.jsx [app-rsc] (ecmascript)");
;
;
;
/**
 * How the work runs.
 *
 * This section exists for one psychological reason: the single largest barrier
 * to commissioning agency work is not price, it is fear of the unknown.
 * "Will I be able to see what is happening, and can I get out if it goes
 * wrong?" Every step below answers that, and the last one answers it hardest.
 */ const STEPS = [
    {
        n: "1",
        title: "We talk for 45 minutes",
        body: "We spend the time on your business, not on slides about us. Bring the problem you think cannot be solved. That is usually the useful part."
    },
    {
        n: "2",
        title: "You get a written plan in 48 hours",
        body: "What we will build, in what order, how long it takes and what it costs. The plan is yours to keep even if you hire someone else."
    },
    {
        n: "3",
        title: "We plan on paper before we build",
        body: "Big decisions get made while they are still cheap to change. We do not write code to answer a question a sketch can settle."
    },
    {
        n: "4",
        title: "You get a link and a daily update",
        body: "You can open the work in progress any time. We send one short written update every day, so you never have to ask how it is going."
    },
    {
        n: "5",
        title: "You own everything at the end",
        body: "The code, the accounts and the domain are in your name from day one. If you want to bring it in house later, that is fine by us."
    }
];
function Method() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$primitives$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Section"], {
        tone: "offwhite",
        labelledBy: "method-heading",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$primitives$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Container"], {
            width: "default",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$primitives$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SectionHeader"], {
                    align: "left",
                    id: "method-heading",
                    eyebrow: "How it runs",
                    heading: "You will always know where it stands.",
                    lede: "Agency work goes wrong in the dark. So the process is built to make the current state visible at every point, including the parts that are behind."
                }, void 0, false, {
                    fileName: "[project]/components/home/Method.jsx",
                    lineNumber: 45,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("ol", {
                    className: "mt-14 max-w-[840px]",
                    children: STEPS.map((s, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            className: `grid gap-3 py-8 sm:grid-cols-[90px_1fr] sm:gap-10 ${i < STEPS.length - 1 ? "border-b border-black/10" : ""}`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-[13px] font-semibold tabular-nums text-[#6e6e73] sm:pt-2",
                                    children: s.n
                                }, void 0, false, {
                                    fileName: "[project]/components/home/Method.jsx",
                                    lineNumber: 61,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-[clamp(1.25rem,2vw,1.6rem)] font-bold tracking-[-0.025em] text-[#1d1d1f]",
                                            children: s.title
                                        }, void 0, false, {
                                            fileName: "[project]/components/home/Method.jsx",
                                            lineNumber: 65,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mt-2.5 max-w-[58ch] text-[1.0625rem] leading-relaxed text-[#6e6e73]",
                                            children: s.body
                                        }, void 0, false, {
                                            fileName: "[project]/components/home/Method.jsx",
                                            lineNumber: 68,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/home/Method.jsx",
                                    lineNumber: 64,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, s.n, true, {
                            fileName: "[project]/components/home/Method.jsx",
                            lineNumber: 55,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/components/home/Method.jsx",
                    lineNumber: 53,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-12",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                            href: "/start-a-project",
                            className: "inline-flex items-center justify-center rounded-full bg-[#0040FF] px-8 py-[0.9rem] text-[1.0625rem] font-medium text-white transition-colors hover:bg-black",
                            children: "Book the first session"
                        }, void 0, false, {
                            fileName: "[project]/components/home/Method.jsx",
                            lineNumber: 77,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mt-4 text-[14px] text-[#6e6e73]",
                            children: "No retainer to see the plan. No obligation after it."
                        }, void 0, false, {
                            fileName: "[project]/components/home/Method.jsx",
                            lineNumber: 83,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/home/Method.jsx",
                    lineNumber: 76,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/home/Method.jsx",
            lineNumber: 44,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/home/Method.jsx",
        lineNumber: 43,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/home/Founder.jsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Founder
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$primitives$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/primitives.jsx [app-rsc] (ecmascript)");
;
;
;
;
function Founder() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$primitives$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Section"], {
        tone: "white",
        labelledBy: "team-heading",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$primitives$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Container"], {
            width: "default",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid items-center gap-12 lg:grid-cols-[0.85fr_1fr] lg:gap-20",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("figure", {
                        className: "mx-auto w-full max-w-[420px] lg:mx-0",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative overflow-hidden rounded-2xl bg-white",
                                style: {
                                    aspectRatio: "3 / 4"
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                    src: "/images/founder-opeyemi.jpg",
                                    alt: "Opeyemi T. Ojurongbe, Team Lead at BitLayerX.",
                                    fill: true,
                                    sizes: "(max-width: 1024px) 90vw, 420px",
                                    className: "object-cover object-[50%_18%]",
                                    priority: true
                                }, void 0, false, {
                                    fileName: "[project]/components/home/Founder.jsx",
                                    lineNumber: 30,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/home/Founder.jsx",
                                lineNumber: 26,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("figcaption", {
                                className: "mt-5 border-l-2 border-[#0040FF] pl-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "block text-[1.125rem] font-bold tracking-[-0.02em] text-[#1d1d1f]",
                                        children: "Opeyemi T. Ojurongbe"
                                    }, void 0, false, {
                                        fileName: "[project]/components/home/Founder.jsx",
                                        lineNumber: 41,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "mt-0.5 block text-[14px] text-[#6e6e73]",
                                        children: "Team Lead"
                                    }, void 0, false, {
                                        fileName: "[project]/components/home/Founder.jsx",
                                        lineNumber: 44,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/home/Founder.jsx",
                                lineNumber: 40,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/home/Founder.jsx",
                        lineNumber: 25,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[12px] font-bold uppercase tracking-[0.18em] text-[#0040FF]",
                                children: "The team"
                            }, void 0, false, {
                                fileName: "[project]/components/home/Founder.jsx",
                                lineNumber: 52,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                id: "team-heading",
                                className: "mt-4 text-[clamp(2rem,4.4vw,3.4rem)] font-extrabold leading-[1.05] tracking-[-0.035em] text-[#1d1d1f]",
                                children: "Small enough that you meet the whole team."
                            }, void 0, false, {
                                fileName: "[project]/components/home/Founder.jsx",
                                lineNumber: 56,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-7 space-y-5 text-[1.0625rem] leading-relaxed text-[#6e6e73]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: "We build from a studio in Gwarinpa, Abuja. The same team covers the design, the engineering and the marketing, so nothing falls into the gap between two suppliers who have never spoken to each other."
                                    }, void 0, false, {
                                        fileName: "[project]/components/home/Founder.jsx",
                                        lineNumber: 72,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: "Opeyemi leads the team and stays on every project, so there is always one person who can answer for the whole of it rather than for one slice. You are never handed to an account manager who was not in the room."
                                    }, void 0, false, {
                                        fileName: "[project]/components/home/Founder.jsx",
                                        lineNumber: 78,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: "We are straight about capacity. When we are full, we say we are full. And when something you have asked for will not earn back what it costs you, we say so before you pay for it."
                                    }, void 0, false, {
                                        fileName: "[project]/components/home/Founder.jsx",
                                        lineNumber: 84,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[#1d1d1f]",
                                        children: "Projects run long enough that something eventually goes wrong. When it does, you get a person on the phone, not a ticket number."
                                    }, void 0, false, {
                                        fileName: "[project]/components/home/Founder.jsx",
                                        lineNumber: 89,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/home/Founder.jsx",
                                lineNumber: 71,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-9 flex flex-wrap items-center gap-x-8 gap-y-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/start-a-project",
                                        className: "inline-flex items-center justify-center rounded-full bg-[#0040FF] px-7 py-[0.85rem] text-[1.0625rem] font-medium text-white transition-colors hover:bg-black",
                                        children: "Start a project"
                                    }, void 0, false, {
                                        fileName: "[project]/components/home/Founder.jsx",
                                        lineNumber: 97,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$primitives$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ActionLink"], {
                                        href: "/about",
                                        children: "More about the team"
                                    }, void 0, false, {
                                        fileName: "[project]/components/home/Founder.jsx",
                                        lineNumber: 103,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/home/Founder.jsx",
                                lineNumber: 96,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/home/Founder.jsx",
                        lineNumber: 51,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/home/Founder.jsx",
                lineNumber: 18,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/home/Founder.jsx",
            lineNumber: 17,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/home/Founder.jsx",
        lineNumber: 16,
        columnNumber: 5
    }, this);
}
}),
"[externals]/node:fs [external] (node:fs, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:fs", () => require("node:fs"));

module.exports = mod;
}),
"[externals]/node:path [external] (node:path, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:path", () => require("node:path"));

module.exports = mod;
}),
"[project]/components/home/ProjectTile.jsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProjectTile
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
/**
 * A visual tile for a live project.
 *
 * Draws a small abstract page layout inside a browser frame, seeded from the
 * project name so every project gets a different, stable composition. It is
 * drawn rather than photographed on purpose: a real screenshot of the site is
 * better, and the moment one exists it replaces this. What this never does is
 * pass off a stock photo as a picture of your work.
 *
 * To use real screenshots instead: save them to /public/images/work/<slug>.jpg
 * and the tile below picks them up automatically.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-rsc] (ecmascript)");
;
;
/** Tiny deterministic hash, so a given project always draws the same tile. */ function seedFrom(text) {
    let h = 0;
    for(let i = 0; i < text.length; i++){
        h = (h << 5) - h + text.charCodeAt(i);
        h |= 0;
    }
    return Math.abs(h);
}
/** Four layout archetypes, picked by seed. */ function Artwork({ seed }) {
    const variant = seed % 4;
    const accent = "#0040FF";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 400 250",
        className: "block h-full w-full",
        "aria-hidden": "true",
        preserveAspectRatio: "xMidYMid slice",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                width: "400",
                height: "250",
                fill: "#ffffff"
            }, void 0, false, {
                fileName: "[project]/components/home/ProjectTile.jsx",
                lineNumber: 38,
                columnNumber: 7
            }, this),
            variant === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                        x: "0",
                        y: "0",
                        width: "400",
                        height: "112",
                        fill: accent
                    }, void 0, false, {
                        fileName: "[project]/components/home/ProjectTile.jsx",
                        lineNumber: 43,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                        x: "26",
                        y: "30",
                        width: "120",
                        height: "9",
                        rx: "4.5",
                        fill: "#fff",
                        opacity: "0.55"
                    }, void 0, false, {
                        fileName: "[project]/components/home/ProjectTile.jsx",
                        lineNumber: 44,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                        x: "26",
                        y: "50",
                        width: "196",
                        height: "18",
                        rx: "5",
                        fill: "#fff"
                    }, void 0, false, {
                        fileName: "[project]/components/home/ProjectTile.jsx",
                        lineNumber: 45,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                        x: "26",
                        y: "76",
                        width: "140",
                        height: "12",
                        rx: "4",
                        fill: "#fff",
                        opacity: "0.7"
                    }, void 0, false, {
                        fileName: "[project]/components/home/ProjectTile.jsx",
                        lineNumber: 46,
                        columnNumber: 11
                    }, this),
                    [
                        0,
                        1,
                        2
                    ].map((i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                    x: 26 + i * 118,
                                    y: "134",
                                    width: "102",
                                    height: "62",
                                    rx: "8",
                                    fill: "#ffffff"
                                }, void 0, false, {
                                    fileName: "[project]/components/home/ProjectTile.jsx",
                                    lineNumber: 49,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                    x: 40 + i * 118,
                                    y: "150",
                                    width: "52",
                                    height: "7",
                                    rx: "3.5",
                                    fill: "#0B0B0F",
                                    opacity: "0.18"
                                }, void 0, false, {
                                    fileName: "[project]/components/home/ProjectTile.jsx",
                                    lineNumber: 50,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                    x: 40 + i * 118,
                                    y: "166",
                                    width: "72",
                                    height: "9",
                                    rx: "4",
                                    fill: accent,
                                    opacity: 0.85 - i * 0.25
                                }, void 0, false, {
                                    fileName: "[project]/components/home/ProjectTile.jsx",
                                    lineNumber: 51,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, i, true, {
                            fileName: "[project]/components/home/ProjectTile.jsx",
                            lineNumber: 48,
                            columnNumber: 13
                        }, this)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                        x: "26",
                        y: "212",
                        width: "86",
                        height: "16",
                        rx: "8",
                        fill: "#0B0B0F"
                    }, void 0, false, {
                        fileName: "[project]/components/home/ProjectTile.jsx",
                        lineNumber: 54,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true),
            variant === 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                        x: "0",
                        y: "0",
                        width: "96",
                        height: "250",
                        fill: "#0B0B0F"
                    }, void 0, false, {
                        fileName: "[project]/components/home/ProjectTile.jsx",
                        lineNumber: 61,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                        x: "18",
                        y: "24",
                        width: "40",
                        height: "8",
                        rx: "4",
                        fill: accent
                    }, void 0, false, {
                        fileName: "[project]/components/home/ProjectTile.jsx",
                        lineNumber: 62,
                        columnNumber: 11
                    }, this),
                    [
                        52,
                        76,
                        100,
                        124
                    ].map((y, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                            x: "18",
                            y: y,
                            width: i === 0 ? 56 : 44,
                            height: "6",
                            rx: "3",
                            fill: "#fff",
                            opacity: i === 0 ? 0.6 : 0.2
                        }, y, false, {
                            fileName: "[project]/components/home/ProjectTile.jsx",
                            lineNumber: 64,
                            columnNumber: 13
                        }, this)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                        x: "120",
                        y: "26",
                        width: "120",
                        height: "12",
                        rx: "5",
                        fill: "#0B0B0F",
                        opacity: "0.75"
                    }, void 0, false, {
                        fileName: "[project]/components/home/ProjectTile.jsx",
                        lineNumber: 66,
                        columnNumber: 11
                    }, this),
                    [
                        0,
                        1
                    ].map((i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                            x: 120 + i * 138,
                            y: "56",
                            width: "122",
                            height: "56",
                            rx: "8",
                            fill: "#ffffff"
                        }, i, false, {
                            fileName: "[project]/components/home/ProjectTile.jsx",
                            lineNumber: 68,
                            columnNumber: 13
                        }, this)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                        x: "136",
                        y: "74",
                        width: "60",
                        height: "14",
                        rx: "4",
                        fill: accent
                    }, void 0, false, {
                        fileName: "[project]/components/home/ProjectTile.jsx",
                        lineNumber: 70,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                        x: "274",
                        y: "74",
                        width: "42",
                        height: "14",
                        rx: "4",
                        fill: accent,
                        opacity: "0.45"
                    }, void 0, false, {
                        fileName: "[project]/components/home/ProjectTile.jsx",
                        lineNumber: 71,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                        points: "128,196 168,176 208,186 248,152 288,164 328,132 368,142",
                        fill: "none",
                        stroke: accent,
                        strokeWidth: "3",
                        strokeLinecap: "round"
                    }, void 0, false, {
                        fileName: "[project]/components/home/ProjectTile.jsx",
                        lineNumber: 72,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true),
            variant === 2 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                        x: "24",
                        y: "22",
                        width: "150",
                        height: "10",
                        rx: "5",
                        fill: "#0B0B0F",
                        opacity: "0.8"
                    }, void 0, false, {
                        fileName: "[project]/components/home/ProjectTile.jsx",
                        lineNumber: 85,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                        x: "24",
                        y: "44",
                        width: "96",
                        height: "6",
                        rx: "3",
                        fill: accent
                    }, void 0, false, {
                        fileName: "[project]/components/home/ProjectTile.jsx",
                        lineNumber: 86,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                        x: "24",
                        y: "68",
                        width: "212",
                        height: "118",
                        rx: "10",
                        fill: accent,
                        opacity: "0.14"
                    }, void 0, false, {
                        fileName: "[project]/components/home/ProjectTile.jsx",
                        lineNumber: 87,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                        x: "24",
                        y: "68",
                        width: "212",
                        height: "118",
                        rx: "10",
                        fill: "none",
                        stroke: accent,
                        strokeOpacity: "0.35"
                    }, void 0, false, {
                        fileName: "[project]/components/home/ProjectTile.jsx",
                        lineNumber: 88,
                        columnNumber: 11
                    }, this),
                    [
                        0,
                        1,
                        2
                    ].map((i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                    x: "252",
                                    y: 68 + i * 42,
                                    width: "124",
                                    height: "30",
                                    rx: "6",
                                    fill: "#ffffff"
                                }, void 0, false, {
                                    fileName: "[project]/components/home/ProjectTile.jsx",
                                    lineNumber: 91,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                    x: "264",
                                    y: 78 + i * 42,
                                    width: (84, i * 14),
                                    height: "6",
                                    rx: "3",
                                    fill: "#0B0B0F",
                                    opacity: "0.2"
                                }, void 0, false, {
                                    fileName: "[project]/components/home/ProjectTile.jsx",
                                    lineNumber: 92,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                    x: "264",
                                    y: 90 + i * 42,
                                    width: "46",
                                    height: "5",
                                    rx: "2.5",
                                    fill: accent,
                                    opacity: "0.5"
                                }, void 0, false, {
                                    fileName: "[project]/components/home/ProjectTile.jsx",
                                    lineNumber: 93,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, i, true, {
                            fileName: "[project]/components/home/ProjectTile.jsx",
                            lineNumber: 90,
                            columnNumber: 13
                        }, this)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                        x: "24",
                        y: "204",
                        width: "180",
                        height: "7",
                        rx: "3.5",
                        fill: "#0B0B0F",
                        opacity: "0.12"
                    }, void 0, false, {
                        fileName: "[project]/components/home/ProjectTile.jsx",
                        lineNumber: 96,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                        x: "24",
                        y: "220",
                        width: "130",
                        height: "7",
                        rx: "3.5",
                        fill: "#0B0B0F",
                        opacity: "0.08"
                    }, void 0, false, {
                        fileName: "[project]/components/home/ProjectTile.jsx",
                        lineNumber: 97,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true),
            variant === 3 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                        x: "0",
                        y: "0",
                        width: "400",
                        height: "34",
                        fill: "#0B0B0F"
                    }, void 0, false, {
                        fileName: "[project]/components/home/ProjectTile.jsx",
                        lineNumber: 104,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                        x: "20",
                        y: "13",
                        width: "48",
                        height: "8",
                        rx: "4",
                        fill: accent
                    }, void 0, false, {
                        fileName: "[project]/components/home/ProjectTile.jsx",
                        lineNumber: 105,
                        columnNumber: 11
                    }, this),
                    [
                        0,
                        1,
                        2
                    ].map((i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                            x: 244 + i * 40,
                            y: "14",
                            width: "28",
                            height: "6",
                            rx: "3",
                            fill: "#fff",
                            opacity: "0.35"
                        }, i, false, {
                            fileName: "[project]/components/home/ProjectTile.jsx",
                            lineNumber: 107,
                            columnNumber: 13
                        }, this)),
                    [
                        0,
                        1,
                        2,
                        3
                    ].map((i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                    x: 22 + i % 2 * 190,
                                    y: 54 + Math.floor(i / 2) * 96,
                                    width: "172",
                                    height: "84",
                                    rx: "10",
                                    fill: "#ffffff"
                                }, void 0, false, {
                                    fileName: "[project]/components/home/ProjectTile.jsx",
                                    lineNumber: 111,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                    x: 38 + i % 2 * 190,
                                    y: 70 + Math.floor(i / 2) * 96,
                                    width: "60",
                                    height: "38",
                                    rx: "6",
                                    fill: accent,
                                    opacity: 0.8 - i * 0.15
                                }, void 0, false, {
                                    fileName: "[project]/components/home/ProjectTile.jsx",
                                    lineNumber: 112,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                    x: 110 + i % 2 * 190,
                                    y: 76 + Math.floor(i / 2) * 96,
                                    width: "66",
                                    height: "7",
                                    rx: "3.5",
                                    fill: "#0B0B0F",
                                    opacity: "0.2"
                                }, void 0, false, {
                                    fileName: "[project]/components/home/ProjectTile.jsx",
                                    lineNumber: 113,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                    x: 110 + i % 2 * 190,
                                    y: 90 + Math.floor(i / 2) * 96,
                                    width: "40",
                                    height: "7",
                                    rx: "3.5",
                                    fill: "#0B0B0F",
                                    opacity: "0.1"
                                }, void 0, false, {
                                    fileName: "[project]/components/home/ProjectTile.jsx",
                                    lineNumber: 114,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, i, true, {
                            fileName: "[project]/components/home/ProjectTile.jsx",
                            lineNumber: 110,
                            columnNumber: 13
                        }, this))
                ]
            }, void 0, true)
        ]
    }, void 0, true, {
        fileName: "[project]/components/home/ProjectTile.jsx",
        lineNumber: 32,
        columnNumber: 5
    }, this);
}
function ProjectTile({ project, screenshot = null }) {
    const seed = seedFrom(project.slug || project.title || "x");
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative overflow-hidden rounded-lg bg-white ring-1 ring-white/10",
        style: {
            aspectRatio: "16 / 10"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-1.5 bg-white px-3 py-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "h-2 w-2 rounded-full bg-black/15"
                    }, void 0, false, {
                        fileName: "[project]/components/home/ProjectTile.jsx",
                        lineNumber: 130,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "h-2 w-2 rounded-full bg-black/15"
                    }, void 0, false, {
                        fileName: "[project]/components/home/ProjectTile.jsx",
                        lineNumber: 131,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "h-2 w-2 rounded-full bg-black/15"
                    }, void 0, false, {
                        fileName: "[project]/components/home/ProjectTile.jsx",
                        lineNumber: 132,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/home/ProjectTile.jsx",
                lineNumber: 129,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-x-0 bottom-0 top-[28px]",
                children: screenshot ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                    src: screenshot,
                    alt: `The ${project.title} website.`,
                    fill: true,
                    sizes: "(max-width: 640px) 100vw, 33vw",
                    className: "object-cover object-top transition-transform duration-700 group-hover:scale-[1.04]"
                }, void 0, false, {
                    fileName: "[project]/components/home/ProjectTile.jsx",
                    lineNumber: 137,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "h-full w-full transition-transform duration-700 group-hover:scale-[1.04]",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(Artwork, {
                        seed: seed
                    }, void 0, false, {
                        fileName: "[project]/components/home/ProjectTile.jsx",
                        lineNumber: 146,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/home/ProjectTile.jsx",
                    lineNumber: 145,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/home/ProjectTile.jsx",
                lineNumber: 135,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/home/ProjectTile.jsx",
        lineNumber: 127,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/home/WorkPreview.jsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>WorkPreview
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$fs__$5b$external$5d$__$28$node$3a$fs$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/node:fs [external] (node:fs, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/node:path [external] (node:path, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$primitives$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/primitives.jsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$github$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/github.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$home$2f$ProjectTile$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/home/ProjectTile.jsx [app-rsc] (ecmascript)");
;
;
;
;
;
;
/**
 * Selected work.
 *
 * Every tile links to a URL you can open right now. That constraint does real
 * persuasive work: a portfolio of screenshots proves someone can produce
 * screenshots, whereas a list of running sites cannot be faked and takes a
 * reader four seconds to check.
 *
 * Tiles show a real screenshot when one exists at
 * /public/images/work/<slug>.jpg, and a drawn placeholder otherwise.
 */ /** Which projects have a real screenshot saved. Checked once, at build time. */ function screenshotFor(slug) {
    if (!slug) return null;
    const rel = `/images/work/${slug.toLowerCase()}.jpg`;
    const abs = __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__["default"].join(process.cwd(), "public", rel);
    try {
        return __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$fs__$5b$external$5d$__$28$node$3a$fs$2c$__cjs$29$__["default"].existsSync(abs) ? rel : null;
    } catch  {
        return null;
    }
}
async function WorkPreview() {
    let projects = [];
    try {
        projects = (await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$github$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getGithubProjects"])()).slice(0, 6);
    } catch  {
        projects = [];
    }
    if (projects.length === 0) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$primitives$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Section"], {
        tone: "dark",
        labelledBy: "work-heading",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$primitives$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Container"], {
            width: "default",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "max-w-[620px]",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-[12px] font-bold uppercase tracking-[0.18em] text-[#5C86FF]",
                                    children: "Selected work"
                                }, void 0, false, {
                                    fileName: "[project]/components/home/WorkPreview.jsx",
                                    lineNumber: 47,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    id: "work-heading",
                                    className: "mt-4 text-[clamp(2.1rem,5vw,3.9rem)] font-extrabold leading-[1.03] tracking-[-0.035em]",
                                    children: "Things we built. Still running."
                                }, void 0, false, {
                                    fileName: "[project]/components/home/WorkPreview.jsx",
                                    lineNumber: 50,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-5 text-[1.0625rem] leading-relaxed text-white/60",
                                    children: "These are live websites, not pictures. Click any one and it opens."
                                }, void 0, false, {
                                    fileName: "[project]/components/home/WorkPreview.jsx",
                                    lineNumber: 56,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/home/WorkPreview.jsx",
                            lineNumber: 46,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$primitives$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ActionLink"], {
                            href: "/portfolio",
                            tone: "light",
                            children: "All work"
                        }, void 0, false, {
                            fileName: "[project]/components/home/WorkPreview.jsx",
                            lineNumber: 61,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/home/WorkPreview.jsx",
                    lineNumber: 45,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-14 grid gap-7 sm:grid-cols-2 lg:grid-cols-3",
                    children: projects.map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: p.homepage,
                            target: "_blank",
                            rel: "noopener noreferrer",
                            className: "group rounded-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-[#5C86FF] focus-visible:ring-offset-4 focus-visible:ring-offset-[#0B0B0F]",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$home$2f$ProjectTile$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                    project: p,
                                    screenshot: screenshotFor(p.slug)
                                }, void 0, false, {
                                    fileName: "[project]/components/home/WorkPreview.jsx",
                                    lineNumber: 75,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-4 flex items-start justify-between gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "min-w-0",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "truncate text-[1.15rem] font-bold tracking-[-0.02em] text-white transition-colors group-hover:text-[#5C86FF]",
                                                    children: p.title
                                                }, void 0, false, {
                                                    fileName: "[project]/components/home/WorkPreview.jsx",
                                                    lineNumber: 79,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "mt-1 truncate text-[13.5px] text-white/45",
                                                    children: p.homepage?.replace(/^https?:\/\//, "")
                                                }, void 0, false, {
                                                    fileName: "[project]/components/home/WorkPreview.jsx",
                                                    lineNumber: 82,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/home/WorkPreview.jsx",
                                            lineNumber: 78,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            "aria-hidden": "true",
                                            className: "mt-1 flex-shrink-0 text-white/40 transition-all duration-200 group-hover:translate-x-[3px] group-hover:-translate-y-[3px] group-hover:text-[#5C86FF]",
                                            children: "↗"
                                        }, void 0, false, {
                                            fileName: "[project]/components/home/WorkPreview.jsx",
                                            lineNumber: 86,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/home/WorkPreview.jsx",
                                    lineNumber: 77,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, p.id, true, {
                            fileName: "[project]/components/home/WorkPreview.jsx",
                            lineNumber: 68,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/components/home/WorkPreview.jsx",
                    lineNumber: 66,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "mt-9 text-[14px] text-white/45",
                    children: "This list updates itself from GitHub every hour. New sites appear here on their own."
                }, void 0, false, {
                    fileName: "[project]/components/home/WorkPreview.jsx",
                    lineNumber: 97,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/home/WorkPreview.jsx",
            lineNumber: 44,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/home/WorkPreview.jsx",
        lineNumber: 43,
        columnNumber: 5
    }, this);
}
}),
"[externals]/fs [external] (fs, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("fs", () => require("fs"));

module.exports = mod;
}),
"[externals]/buffer [external] (buffer, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("buffer", () => require("buffer"));

module.exports = mod;
}),
"[project]/lib/blog.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CATEGORIES",
    ()=>CATEGORIES,
    "categoryBySlug",
    ()=>categoryBySlug,
    "getAllPosts",
    ()=>getAllPosts,
    "getPost",
    ()=>getPost,
    "getPostsByCategory",
    ()=>getPostsByCategory,
    "getRelatedPosts",
    ()=>getRelatedPosts
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$fs__$5b$external$5d$__$28$node$3a$fs$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/node:fs [external] (node:fs, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/node:path [external] (node:path, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gray$2d$matter$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/gray-matter/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$marked$2f$lib$2f$marked$2e$esm$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/marked/lib/marked.esm.js [app-rsc] (ecmascript)");
;
;
;
;
/**
 * The blog content layer.
 *
 * Posts are Markdown files on disk, read at build time and rendered to static
 * HTML. That is the fastest thing a blog can be: no database round trip, no
 * client-side fetch, nothing between Googlebot and the words. Pages that are
 * already HTML when the crawler arrives are the ones that get indexed quickly,
 * which is the whole point of the exercise.
 *
 * To publish: drop a .md file in content/blog/ with the frontmatter below.
 */ const BLOG_DIR = __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__["default"].join(process.cwd(), "content", "blog");
const CATEGORIES = [
    {
        slug: "engineering",
        name: "Engineering",
        tone: "#0040FF"
    },
    {
        slug: "design",
        name: "Design",
        tone: "#0040FF"
    },
    {
        slug: "growth",
        name: "Growth",
        tone: "#0040FF"
    },
    {
        slug: "business",
        name: "Business",
        tone: "#0040FF"
    },
    {
        slug: "nigeria",
        name: "Nigeria & Africa",
        tone: "#0040FF"
    }
];
function categoryBySlug(slug) {
    return CATEGORIES.find((c)=>c.slug === slug) ?? null;
}
/** ~200 wpm is the usual reading speed assumption for prose of this kind. */ function readingTime(markdown) {
    const words = markdown.trim().split(/\s+/).length;
    return Math.max(1, Math.round(words / 200));
}
/**
 * Normalise a frontmatter date to a plain YYYY-MM-DD string.
 *
 * YAML parses an unquoted `published: 2026-08-11` into a Date object, not a
 * string. Comparing that Date to a string date silently coerces it to
 * "Tue Aug 11 2026 …", which sorts after any ISO string, so a publish-date
 * filter written against strings quietly drops every post. Normalising once,
 * here, means the rest of the module can assume strings.
 */ function toISODate(value, fallback = "1970-01-01") {
    if (!value) return fallback;
    if (value instanceof Date) return value.toISOString().slice(0, 10);
    return String(value).slice(0, 10);
}
function parseFile(filename) {
    const slug = filename.replace(/\.md$/, "");
    const raw = __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$fs__$5b$external$5d$__$28$node$3a$fs$2c$__cjs$29$__["default"].readFileSync(__TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__["default"].join(BLOG_DIR, filename), "utf8");
    const { data, content } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gray$2d$matter$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])(raw);
    const published = toISODate(data.published);
    return {
        slug,
        title: data.title ?? slug,
        excerpt: data.excerpt ?? "",
        category: data.category ?? "engineering",
        author: data.author ?? "Opeyemi T. Ojurongbe",
        authorRole: data.authorRole ?? "Team Lead",
        published,
        updated: toISODate(data.updated, published),
        cover: data.cover ?? null,
        coverAlt: data.coverAlt ?? "",
        featured: Boolean(data.featured),
        tags: data.tags ?? [],
        readingTime: readingTime(content),
        content
    };
}
function getAllPosts() {
    if (!__TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$fs__$5b$external$5d$__$28$node$3a$fs$2c$__cjs$29$__["default"].existsSync(BLOG_DIR)) return [];
    const today = new Date().toISOString().slice(0, 10);
    return __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$fs__$5b$external$5d$__$28$node$3a$fs$2c$__cjs$29$__["default"].readdirSync(BLOG_DIR).filter((f)=>f.endsWith(".md")).map(parseFile).filter((p)=>p.published <= today).sort((a, b)=>a.published < b.published ? 1 : -1);
}
function getPost(slug) {
    const post = getAllPosts().find((p)=>p.slug === slug);
    if (!post) return null;
    return {
        ...post,
        html: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$marked$2f$lib$2f$marked$2e$esm$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["marked"].parse(post.content)
    };
}
function getPostsByCategory(categorySlug) {
    return getAllPosts().filter((p)=>p.category === categorySlug);
}
function getRelatedPosts(slug, limit = 3) {
    const all = getAllPosts();
    const current = all.find((p)=>p.slug === slug);
    if (!current) return [];
    const sameCategory = all.filter((p)=>p.slug !== slug && p.category === current.category);
    const rest = all.filter((p)=>p.slug !== slug && p.category !== current.category);
    return [
        ...sameCategory,
        ...rest
    ].slice(0, limit);
}
}),
"[project]/components/blog/PostCover.jsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>PostCover
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$blog$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/blog.js [app-rsc] (ecmascript)");
;
;
;
function PostCover({ post, ratio = "16 / 9", sizes = "(max-width: 768px) 100vw, 50vw", priority = false, className = "", rounded = "rounded-xl" }) {
    const category = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$blog$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["categoryBySlug"])(post.category);
    const tone = category?.tone ?? "#0040FF";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `relative w-full overflow-hidden ${rounded} bg-white ${className}`,
        style: {
            aspectRatio: ratio
        },
        children: post.cover ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
            src: post.cover,
            alt: post.coverAlt || "",
            fill: true,
            sizes: sizes,
            priority: priority,
            className: "object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.03]"
        }, void 0, false, {
            fileName: "[project]/components/blog/PostCover.jsx",
            lineNumber: 30,
            columnNumber: 9
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            "aria-hidden": "true",
            className: "absolute inset-0",
            style: {
                background: `linear-gradient(135deg, ${tone} 0%, ${tone}CC 45%, #0B0B0F 140%)`
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    className: "absolute inset-0 w-full h-full opacity-[0.16]",
                    preserveAspectRatio: "xMidYMid slice",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("pattern", {
                                id: `grid-${post.slug}`,
                                width: "28",
                                height: "28",
                                patternUnits: "userSpaceOnUse",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: "M28 0 L0 0 0 28",
                                    fill: "none",
                                    stroke: "#ffffff",
                                    strokeWidth: "0.6"
                                }, void 0, false, {
                                    fileName: "[project]/components/blog/PostCover.jsx",
                                    lineNumber: 57,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/blog/PostCover.jsx",
                                lineNumber: 51,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/blog/PostCover.jsx",
                            lineNumber: 50,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                            width: "100%",
                            height: "100%",
                            fill: `url(#grid-${post.slug})`
                        }, void 0, false, {
                            fileName: "[project]/components/blog/PostCover.jsx",
                            lineNumber: 65,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/blog/PostCover.jsx",
                    lineNumber: 46,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    className: "absolute right-5 bottom-5 w-16 h-16 opacity-30",
                    viewBox: "0 0 64 64",
                    fill: "none",
                    stroke: "#ffffff",
                    strokeWidth: "2.6",
                    strokeLinejoin: "round",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M32 14 L50 24 L32 34 L14 24 Z"
                        }, void 0, false, {
                            fileName: "[project]/components/blog/PostCover.jsx",
                            lineNumber: 77,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M14 32 L32 42 L50 32",
                            opacity: "0.7"
                        }, void 0, false, {
                            fileName: "[project]/components/blog/PostCover.jsx",
                            lineNumber: 78,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M14 40 L32 50 L50 40",
                            opacity: "0.45"
                        }, void 0, false, {
                            fileName: "[project]/components/blog/PostCover.jsx",
                            lineNumber: 79,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/blog/PostCover.jsx",
                    lineNumber: 69,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/blog/PostCover.jsx",
            lineNumber: 39,
            columnNumber: 9
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/blog/PostCover.jsx",
        lineNumber: 25,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/home/InsightPreview.jsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>InsightPreview
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$primitives$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/primitives.jsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$blog$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/blog.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$blog$2f$PostCover$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/blog/PostCover.jsx [app-rsc] (ecmascript)");
;
;
;
;
;
function InsightPreview() {
    const posts = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$blog$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getAllPosts"])().slice(0, 3);
    if (posts.length === 0) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$primitives$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Section"], {
        tone: "offwhite",
        labelledBy: "insight-heading",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$primitives$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Container"], {
            width: "default",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "max-w-[760px]",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-[12px] font-bold uppercase tracking-[0.18em] text-[#0040FF]",
                                    children: "Insight"
                                }, void 0, false, {
                                    fileName: "[project]/components/home/InsightPreview.jsx",
                                    lineNumber: 25,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    id: "insight-heading",
                                    className: "mt-4 text-[clamp(2.1rem,5vw,3.9rem)] font-extrabold leading-[1.03] tracking-[-0.035em] text-[#1d1d1f]",
                                    children: "What we have learned, written down."
                                }, void 0, false, {
                                    fileName: "[project]/components/home/InsightPreview.jsx",
                                    lineNumber: 28,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-5 text-[1.0625rem] leading-relaxed text-[#6e6e73]",
                                    children: "Including the things most agencies here will not put in writing, like what the work actually costs."
                                }, void 0, false, {
                                    fileName: "[project]/components/home/InsightPreview.jsx",
                                    lineNumber: 34,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/home/InsightPreview.jsx",
                            lineNumber: 24,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$primitives$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ActionLink"], {
                            href: "/blog",
                            children: "All writing"
                        }, void 0, false, {
                            fileName: "[project]/components/home/InsightPreview.jsx",
                            lineNumber: 40,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/home/InsightPreview.jsx",
                    lineNumber: 21,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-14 grid gap-9 sm:grid-cols-2 lg:grid-cols-3",
                    children: posts.map((post)=>{
                        const category = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$blog$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["categoryBySlug"])(post.category);
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                            className: "group",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                href: `/blog/${post.slug}`,
                                className: "block rounded-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0040FF] focus-visible:ring-offset-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$blog$2f$PostCover$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                        post: post,
                                        ratio: "16 / 10",
                                        sizes: "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                    }, void 0, false, {
                                        fileName: "[project]/components/home/InsightPreview.jsx",
                                        lineNumber: 52,
                                        columnNumber: 19
                                    }, this),
                                    category && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "mt-4 block text-[11.5px] font-bold uppercase tracking-[0.1em]",
                                        style: {
                                            color: category.tone
                                        },
                                        children: category.name
                                    }, void 0, false, {
                                        fileName: "[project]/components/home/InsightPreview.jsx",
                                        lineNumber: 58,
                                        columnNumber: 21
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "mt-1.5 text-[1.2rem] font-bold leading-snug tracking-[-0.02em] text-[#1d1d1f] transition-colors group-hover:text-[#0040FF]",
                                        children: post.title
                                    }, void 0, false, {
                                        fileName: "[project]/components/home/InsightPreview.jsx",
                                        lineNumber: 65,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-2 text-[15px] leading-relaxed text-[#6e6e73]",
                                        children: post.excerpt
                                    }, void 0, false, {
                                        fileName: "[project]/components/home/InsightPreview.jsx",
                                        lineNumber: 68,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-3 text-[13px] text-[#6e6e73]",
                                        children: [
                                            post.readingTime,
                                            " min read"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/home/InsightPreview.jsx",
                                        lineNumber: 71,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/home/InsightPreview.jsx",
                                lineNumber: 48,
                                columnNumber: 17
                            }, this)
                        }, post.slug, false, {
                            fileName: "[project]/components/home/InsightPreview.jsx",
                            lineNumber: 47,
                            columnNumber: 15
                        }, this);
                    })
                }, void 0, false, {
                    fileName: "[project]/components/home/InsightPreview.jsx",
                    lineNumber: 43,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/home/InsightPreview.jsx",
            lineNumber: 20,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/home/InsightPreview.jsx",
        lineNumber: 19,
        columnNumber: 5
    }, this);
}
}),
"[project]/content/testimonials.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Client testimonials.
 *
 * ─ HOW TO ADD ONE ─
 * Paste a real quote below and it appears on the homepage immediately. While
 * this list is empty, the testimonials section does not render at all, so the
 * page never shows an empty shell.
 *
 * ─ THE ONE RULE ─
 * Only put a quote here if a real client actually said it and is happy to be
 * named. An invented testimonial is the single most damaging thing a services
 * company can publish: one prospective client who checks, and every other
 * claim on the site becomes suspect. A short real quote from a small client
 * beats a glowing invented one from an imaginary large one, every time.
 *
 * If you have permission for the words but not the name, use the role and
 * company only and set `name` to null. That is still honest. Making up a
 * person is not.
 *
 * ─ HOW TO GET THEM ─
 * Email a past client and ask these three questions. The answers are usually
 * a usable quote with almost no editing:
 *   1. What was the problem before we started?
 *   2. What is different now?
 *   3. What would you say to someone deciding whether to hire us?
 */ __turbopack_context__.s([
    "TESTIMONIALS",
    ()=>TESTIMONIALS
]);
const TESTIMONIALS = [];
}),
"[project]/components/home/Testimonials.jsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Testimonials
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$primitives$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/primitives.jsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$content$2f$testimonials$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/content/testimonials.js [app-rsc] (ecmascript)");
;
;
;
;
;
/**
 * Testimonials.
 *
 * Renders nothing at all while content/testimonials.js is empty, so the page
 * never shows a hollow section waiting to be filled. Add one real quote and
 * the whole band appears.
 */ function initials(name) {
    if (!name) return "•";
    return name.split(" ").filter(Boolean).slice(0, 2).map((part)=>part[0]).join("").toUpperCase();
}
function Testimonials() {
    if (!__TURBOPACK__imported__module__$5b$project$5d2f$content$2f$testimonials$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["TESTIMONIALS"] || __TURBOPACK__imported__module__$5b$project$5d2f$content$2f$testimonials$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["TESTIMONIALS"].length === 0) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$primitives$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Section"], {
        tone: "white",
        labelledBy: "testimonials-heading",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$primitives$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Container"], {
            width: "default",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$primitives$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SectionHeader"], {
                    id: "testimonials-heading",
                    eyebrow: "What clients say",
                    heading: "In their words.",
                    lede: "Every quote below is from a real client about real work. We do not publish anything nobody said."
                }, void 0, false, {
                    fileName: "[project]/components/home/Testimonials.jsx",
                    lineNumber: 31,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3",
                    children: __TURBOPACK__imported__module__$5b$project$5d2f$content$2f$testimonials$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["TESTIMONIALS"].map((t, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("figure", {
                            className: "flex flex-col rounded-2xl bg-white p-8 ring-1 ring-black/[0.07]",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("blockquote", {
                                    className: "flex-1",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[1.0625rem] leading-relaxed text-[#1d1d1f]",
                                        children: [
                                            "“",
                                            t.quote,
                                            "”"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/home/Testimonials.jsx",
                                        lineNumber: 45,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/home/Testimonials.jsx",
                                    lineNumber: 44,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("figcaption", {
                                    className: "mt-7 flex items-center gap-4 border-t border-black/[0.08] pt-6",
                                    children: [
                                        t.avatar ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                            src: t.avatar,
                                            alt: "",
                                            width: 44,
                                            height: 44,
                                            className: "h-11 w-11 rounded-full object-cover"
                                        }, void 0, false, {
                                            fileName: "[project]/components/home/Testimonials.jsx",
                                            lineNumber: 52,
                                            columnNumber: 19
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            "aria-hidden": "true",
                                            className: "flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-[#0040FF]/10 text-[13px] font-bold text-[#0040FF]",
                                            children: initials(t.name)
                                        }, void 0, false, {
                                            fileName: "[project]/components/home/Testimonials.jsx",
                                            lineNumber: 60,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "min-w-0",
                                            children: [
                                                t.name && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "block truncate text-[15px] font-bold text-[#1d1d1f]",
                                                    children: t.name
                                                }, void 0, false, {
                                                    fileName: "[project]/components/home/Testimonials.jsx",
                                                    lineNumber: 70,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "block truncate text-[13.5px] text-[#6e6e73]",
                                                    children: [
                                                        t.role,
                                                        t.role && t.company ? ", " : "",
                                                        t.company
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/home/Testimonials.jsx",
                                                    lineNumber: 74,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/home/Testimonials.jsx",
                                            lineNumber: 68,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/home/Testimonials.jsx",
                                    lineNumber: 50,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, `${t.company}-${i}`, true, {
                            fileName: "[project]/components/home/Testimonials.jsx",
                            lineNumber: 40,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/components/home/Testimonials.jsx",
                    lineNumber: 38,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-12 text-center",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$primitives$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ActionLink"], {
                        href: "/portfolio",
                        children: "See the work behind these"
                    }, void 0, false, {
                        fileName: "[project]/components/home/Testimonials.jsx",
                        lineNumber: 86,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/home/Testimonials.jsx",
                    lineNumber: 85,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/home/Testimonials.jsx",
            lineNumber: 30,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/home/Testimonials.jsx",
        lineNumber: 29,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/home/Newsletter.jsx [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/components/home/Newsletter.jsx <module evaluation> from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/components/home/Newsletter.jsx <module evaluation>", "default");
}),
"[project]/components/home/Newsletter.jsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/components/home/Newsletter.jsx from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/components/home/Newsletter.jsx", "default");
}),
"[project]/components/home/Newsletter.jsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$home$2f$Newsletter$2e$jsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/components/home/Newsletter.jsx [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$home$2f$Newsletter$2e$jsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/components/home/Newsletter.jsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$home$2f$Newsletter$2e$jsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/components/home/FinalCTA.jsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>FinalCTA
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$primitives$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/primitives.jsx [app-rsc] (ecmascript)");
;
;
;
function FinalCTA() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$primitives$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Section"], {
        tone: "brand",
        labelledBy: "cta-heading",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$primitives$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Container"], {
            width: "narrow",
            className: "text-center",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    id: "cta-heading",
                    className: "mx-auto max-w-[17ch] text-[clamp(2.2rem,5.5vw,4rem)] font-extrabold leading-[1.02] tracking-[-0.038em]",
                    children: "Tell us what you are building."
                }, void 0, false, {
                    fileName: "[project]/components/home/FinalCTA.jsx",
                    lineNumber: 15,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "mx-auto mt-6 max-w-[52ch] text-[clamp(1.05rem,1.7vw,1.3rem)] leading-[1.5] text-white/75",
                    children: "One session, then a written plan with scope, timeline and price within 48 hours. If we are the wrong fit, we will say so on the first call and point you at someone better."
                }, void 0, false, {
                    fileName: "[project]/components/home/FinalCTA.jsx",
                    lineNumber: 22,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                            href: "/start-a-project",
                            className: "inline-flex items-center justify-center rounded-full bg-white px-8 py-[0.95rem] text-[1.0625rem] font-medium text-[#1d1d1f] transition-colors hover:bg-white/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B0B0F]",
                            children: "Start a project"
                        }, void 0, false, {
                            fileName: "[project]/components/home/FinalCTA.jsx",
                            lineNumber: 29,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$primitives$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ActionLink"], {
                            href: "/contact",
                            tone: "light",
                            children: "Book a call instead"
                        }, void 0, false, {
                            fileName: "[project]/components/home/FinalCTA.jsx",
                            lineNumber: 35,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/home/FinalCTA.jsx",
                    lineNumber: 28,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "mt-10 text-[14.5px] text-white/55",
                    children: [
                        "Abuja · Lagos · London · Dubai · Johannesburg · New York, ",
                        " ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                            href: "/locations",
                            className: "underline underline-offset-4 hover:text-white",
                            children: "and everywhere else we work"
                        }, void 0, false, {
                            fileName: "[project]/components/home/FinalCTA.jsx",
                            lineNumber: 42,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/home/FinalCTA.jsx",
                    lineNumber: 40,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/home/FinalCTA.jsx",
            lineNumber: 14,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/home/FinalCTA.jsx",
        lineNumber: 13,
        columnNumber: 5
    }, this);
}
}),
"[project]/app/page.jsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>BitLayerXHomePage,
    "metadata",
    ()=>metadata,
    "revalidate",
    ()=>revalidate
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$seo$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/seo.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$home$2f$Hero$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/home/Hero.jsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$home$2f$Practices$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/home/Practices.jsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$home$2f$Clients$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/home/Clients.jsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$home$2f$Showcase$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/home/Showcase.jsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$home$2f$Method$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/home/Method.jsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$home$2f$Founder$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/home/Founder.jsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$home$2f$WorkPreview$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/home/WorkPreview.jsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$home$2f$InsightPreview$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/home/InsightPreview.jsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$home$2f$Testimonials$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/home/Testimonials.jsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$home$2f$Newsletter$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/home/Newsletter.jsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$home$2f$FinalCTA$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/home/FinalCTA.jsx [app-rsc] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
;
;
const metadata = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$seo$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["pageMetadata"])("/");
const revalidate = 3600;
function BitLayerXHomePage() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$home$2f$Hero$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/app/page.jsx",
                lineNumber: 43,
                columnNumber: 7
            }, this),
            "          ",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$home$2f$Clients$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/app/page.jsx",
                lineNumber: 44,
                columnNumber: 7
            }, this),
            "       ",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$home$2f$Practices$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/app/page.jsx",
                lineNumber: 45,
                columnNumber: 7
            }, this),
            "     ",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$home$2f$WorkPreview$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/app/page.jsx",
                lineNumber: 46,
                columnNumber: 7
            }, this),
            "   ",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$home$2f$Method$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/app/page.jsx",
                lineNumber: 47,
                columnNumber: 7
            }, this),
            "        ",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$home$2f$Showcase$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/app/page.jsx",
                lineNumber: 48,
                columnNumber: 7
            }, this),
            "      ",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$home$2f$Testimonials$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/app/page.jsx",
                lineNumber: 49,
                columnNumber: 7
            }, this),
            "  ",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$home$2f$InsightPreview$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/app/page.jsx",
                lineNumber: 50,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$home$2f$Founder$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/app/page.jsx",
                lineNumber: 51,
                columnNumber: 7
            }, this),
            "       ",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$home$2f$Newsletter$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/app/page.jsx",
                lineNumber: 52,
                columnNumber: 7
            }, this),
            "    ",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$home$2f$FinalCTA$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/app/page.jsx",
                lineNumber: 53,
                columnNumber: 7
            }, this),
            "      "
        ]
    }, void 0, true);
}
}),
"[project]/app/page.jsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/page.jsx [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__4a9a3409._.js.map