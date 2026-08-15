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
 */

export const SITE = {
  url: "https://bitlayerx.com",
  name: "BitLayerX",
  legalName: "BitLayerX Technologies",
  twitter: "@bitlayerx",
  email: "hello@bitlayerx.com",
  phone: "+234-802-540-1891",
  founder: "Opeyemi T. Ojurongbe",
  founderUrl: "https://opeyemiojurongbe.com",
};

/**
 * Markets we actively sell into.
 *
 * These drive schema.org `areaServed`, the locations section, and the
 * long-tail location pages. Google will not rank a business for "web design
 * Lagos" on the strength of a meta tag alone, it wants the place named in
 * real content, in structured data, and in internal links. All three are wired
 * from this list.
 */
export const MARKETS = [
  {
    slug: "abuja",
    city: "Abuja",
    region: "FCT",
    country: "Nigeria",
    countryCode: "NG",
    primary: true,
    blurb:
      "Our studio is in Gwarinpa. Most Abuja clients meet us in person before anything is signed.",
    timezone:
      "The same working day as you, our team is here, and you are welcome to come and sit in the studio.",
    meetings:
      "In person at our Gwarinpa studio, or on a call, whichever you prefer.",
    contracting:
      "Naira contracts, with a clear written position on FX for anything with imported costs.",
  },
  {
    slug: "lagos",
    city: "Lagos",
    region: "Lagos State",
    country: "Nigeria",
    countryCode: "NG",
    blurb:
      "Nigeria's commercial capital, and where most of our fintech and logistics work ships.",
    timezone:
      "The same working day as you. We are one flight away and travel to Lagos regularly for kickoffs.",
    meetings:
      "Video by default, in person for kickoffs and anything that genuinely needs a room.",
    contracting:
      "Naira contracts, with a clear written position on FX for anything with imported costs.",
  },
  {
    slug: "port-harcourt",
    city: "Port Harcourt",
    region: "Rivers State",
    country: "Nigeria",
    countryCode: "NG",
    blurb:
      "Energy, industrial and logistics companies who need software that holds up in the field.",
    timezone: "The same working day as you.",
    meetings:
      "Video by default, in person for kickoffs and major reviews.",
    contracting:
      "Naira contracts, structured for corporate and industrial procurement.",
  },
  {
    slug: "london",
    city: "London",
    region: "England",
    country: "United Kingdom",
    countryCode: "GB",
    blurb:
      "We hold a UK presence and work to GMT for British clients, with contracting in GBP.",
    timezone:
      "Effectively no time difference, our GMT+1 is the same working day as London, one hour offset in British Summer Time.",
    meetings:
      "Video, with a written daily update so progress never waits for a slot in the diary.",
    contracting:
      "Contracts and invoicing in GBP, with professional indemnity cover named explicitly for UK procurement.",
  },
  {
    slug: "manchester",
    city: "Manchester",
    region: "England",
    country: "United Kingdom",
    countryCode: "GB",
    blurb:
      "The UK's fastest-growing tech cluster outside London, and a market that values straight pricing.",
    timezone:
      "Effectively no time difference, the same working day, one hour offset in British Summer Time.",
    meetings:
      "Video, with a written daily update so progress never waits for a slot in the diary.",
    contracting:
      "Contracts and invoicing in GBP, with professional indemnity cover named explicitly for UK procurement.",
  },
  {
    slug: "dubai",
    city: "Dubai",
    region: "Dubai",
    country: "United Arab Emirates",
    countryCode: "AE",
    blurb:
      "GMT+1 to GST+4 is a three-hour gap, which makes Dubai delivery unusually smooth.",
    timezone:
      "Dubai is three hours ahead, so your morning is our early morning and the overlap runs to mid-afternoon your time.",
    meetings:
      "Video, scheduled in your morning. We move at the pace Dubai expects, a slow reply reads as disinterest here.",
    contracting:
      "Contracts in USD or AED, structured for UAE procurement and free-zone entities.",
  },
  {
    slug: "johannesburg",
    city: "Johannesburg",
    region: "Gauteng",
    country: "South Africa",
    countryCode: "ZA",
    blurb:
      "Africa's deepest financial market, and clients who expect enterprise-grade engineering discipline.",
    timezone:
      "One hour ahead of us, an almost complete working-day overlap with no scheduling friction at all.",
    meetings:
      "Video, with a written daily update. In person for kickoffs on larger engagements.",
    contracting:
      "Contracts in ZAR or USD, structured for South African corporate procurement.",
  },
  {
    slug: "cape-town",
    city: "Cape Town",
    region: "Western Cape",
    country: "South Africa",
    countryCode: "ZA",
    blurb:
      "A design and product culture that holds work to a high standard, our kind of market.",
    timezone:
      "One hour ahead of us, so the working day overlaps almost completely.",
    meetings:
      "Video, with a written daily update so nothing waits on a call.",
    contracting:
      "Contracts in ZAR or USD, structured for South African corporate procurement.",
  },
  {
    slug: "new-york",
    city: "New York",
    region: "New York",
    country: "United States",
    countryCode: "US",
    blurb:
      "We overlap US Eastern mornings, and run async-first so nothing stalls overnight.",
    timezone:
      "Five to six hours behind us. Your morning is our afternoon, which gives a solid daily overlap for anything that needs a live conversation.",
    meetings:
      "Video in your morning, with a written daily update waiting when you start.",
    contracting:
      "Contracts in USD, with a W-8BEN-E on file for the entity. Fixed-scope, fixed-price where you want it.",
  },
  {
    slug: "san-francisco",
    city: "San Francisco",
    region: "California",
    country: "United States",
    countryCode: "US",
    blurb:
      "The one market where the time gap is real, so we run genuinely async, and it works.",
    timezone:
      "Eight to nine hours behind us. This is the market where asynchronous discipline actually matters, and we are built for it.",
    meetings:
      "One fixed weekly call in your morning. Everything else is written, so you wake up to progress rather than questions.",
    contracting:
      "Contracts in USD, with a W-8BEN-E on file for the entity.",
  },
  {
    slug: "toronto",
    city: "Toronto",
    region: "Ontario",
    country: "Canada",
    countryCode: "CA",
    blurb:
      "Canadian clients get the same Eastern-morning overlap as New York, with CAD contracting.",
    timezone:
      "Five to six hours behind us, your morning is our afternoon, with a reliable daily overlap.",
    meetings:
      "Video in your morning, with a written daily update waiting when you start.",
    contracting: "Contracts in CAD or USD, structured for Canadian procurement.",
  },
  {
    slug: "nairobi",
    city: "Nairobi",
    region: "Nairobi County",
    country: "Kenya",
    countryCode: "KE",
    blurb:
      "East Africa's product capital, and a market that understands building for mobile-first users.",
    timezone:
      "Two hours ahead of us, so the working day overlaps almost entirely.",
    meetings: "Video, with a written daily update.",
    contracting: "Contracts in USD or KES.",
  },
  {
    slug: "accra",
    city: "Accra",
    region: "Greater Accra",
    country: "Ghana",
    countryCode: "GH",
    blurb:
      "One hour behind us, same regional context, and none of the friction of a distant supplier.",
    timezone:
      "One hour behind us, effectively the same working day.",
    meetings: "Video, with a written daily update. In person for kickoffs.",
    contracting: "Contracts in USD or GHS.",
  },
];

/** Country codes for schema.org areaServed, the whole addressable market. */
export const AREA_SERVED = [
  "NG", "GB", "US", "AE", "ZA", "CA", "KE", "GH", "IE", "AU", "SA", "QA", "DE", "NL",
];

/**
 * Per-route SEO.
 *
 * `title` is written to stand alone in a search result, the brand name is
 * appended by the layout template, so it is deliberately absent here.
 */
export const PAGES = {
  "/": {
    title: "Digital Products, Brands & Systems Built to Last",
    description:
      "BitLayerX designs and builds the products, brands and systems companies run on. Strategy, design, engineering, brand, film and growth, one team in Abuja, delivering to Nigeria, the UK, the US and the UAE.",
    keywords: [
      "digital agency Abuja",
      "software development company Nigeria",
      "web design Lagos",
      "product design agency",
      "custom software development",
    ],
    priority: 1.0,
    changeFrequency: "weekly",
  },

  "/about": {
    title: "About BitLayerX, The Team Behind the Work",
    description:
      "Who we are, how we work, and why one team across strategy, design, engineering, brand, film and growth beats six agencies who never speak to each other.",
    keywords: [
      "about BitLayerX",
      "digital agency team Nigeria",
      "Opeyemi Ojurongbe",
      "software company Abuja",
    ],
    priority: 0.8,
    changeFrequency: "monthly",
  },

  "/services": {
    title: "Services, Strategy, Design, Engineering, Brand, Film & Growth",
    description:
      "Six practices, one team, one contract. Product strategy, UI/UX design, software engineering, brand identity, commercial film and performance marketing, delivered together.",
    keywords: [
      "digital services Nigeria",
      "web development services Abuja",
      "UI UX design agency",
      "branding agency Lagos",
      "video production Nigeria",
      "digital marketing agency",
    ],
    priority: 0.9,
    changeFrequency: "monthly",
  },

  "/industries": {
    title: "Industries We Build For",
    description:
      "Fintech, logistics, real estate, healthcare, education and public sector. The constraints differ; the discipline does not. See how we approach each.",
    keywords: [
      "fintech software development",
      "logistics software Nigeria",
      "real estate web development",
      "healthcare software Africa",
    ],
    priority: 0.8,
    changeFrequency: "monthly",
  },

  "/portfolio": {
    title: "Work, Live Projects & Deployments",
    description:
      "Every project in the BitLayerX index is a running deployment you can open and use. Synced from GitHub and refreshed hourly.",
    keywords: [
      "BitLayerX portfolio",
      "web development case studies",
      "software projects Nigeria",
    ],
    priority: 0.9,
    changeFrequency: "daily",
  },

  "/packages": {
    title: "Packages & Prices, Websites From ₦500,000",
    description:
      "Websites from ₦500,000, marketing from ₦1.5m, custom software from ₦8m. Five packages with real starting prices and exactly what is in each one.",
    keywords: [
      "web design pricing Nigeria",
      "software development cost Abuja",
      "digital agency packages",
      "website cost Lagos",
    ],
    priority: 0.9,
    changeFrequency: "weekly",
  },

  "/contact": {
    title: "Contact BitLayerX, Start a Project",
    description:
      "Tell us what you are building. We reply within one business day, and you get a written plan within 48 hours of the first call.",
    keywords: [
      "contact BitLayerX",
      "hire developers Nigeria",
      "digital agency Abuja contact",
    ],
    priority: 0.8,
    changeFrequency: "monthly",
  },

  "/company": {
    title: "The Company, How BitLayerX Is Built",
    description:
      "Our structure, our principles and the way we run projects. The operating detail behind the work.",
    keywords: ["BitLayerX company", "digital agency structure", "technology company Nigeria"],
    priority: 0.6,
    changeFrequency: "monthly",
  },

  "/solutions": {
    title: "Solutions, Systems That Solve a Named Problem",
    description:
      "Purpose-built platforms, internal tools, customer portals and automations. Each one starts from a problem you can name and ends in something running.",
    keywords: [
      "custom software solutions",
      "business automation Nigeria",
      "enterprise software Africa",
    ],
    priority: 0.8,
    changeFrequency: "monthly",
  },

  "/enterprise": {
    title: "Enterprise, Engineering for Organisations at Scale",
    description:
      "Architecture, security, integration and support for organisations where downtime has a board-level cost. Built for procurement, not just for launch.",
    keywords: [
      "enterprise software development",
      "enterprise web development Nigeria",
      "scalable architecture",
    ],
    priority: 0.8,
    changeFrequency: "monthly",
  },

  "/startups": {
    title: "Startups, From Empty Repo to Something Users Pay For",
    description:
      "Founder-speed delivery without founder-speed debt. MVPs, investor-ready product, and the engineering discipline to survive your first thousand users.",
    keywords: [
      "startup MVP development",
      "startup web development Nigeria",
      "MVP agency Africa",
    ],
    priority: 0.8,
    changeFrequency: "monthly",
  },

  "/design": {
    title: "Design, Interfaces, Brand & the Craft Between Them",
    description:
      "Product design, design systems and brand identity. Design that survives contact with engineering, because the engineers are in the room.",
    keywords: [
      "UI UX design Nigeria",
      "product design agency Abuja",
      "brand identity design Lagos",
      "design system",
    ],
    priority: 0.8,
    changeFrequency: "monthly",
  },

  "/marketing": {
    title: "Marketing & Growth, Demand, Not Just Traffic",
    description:
      "SEO, paid acquisition, lifecycle email and content built to produce qualified pipeline. Measured against revenue, not impressions.",
    keywords: [
      "digital marketing agency Nigeria",
      "SEO agency Abuja",
      "performance marketing Lagos",
      "growth marketing Africa",
    ],
    priority: 0.8,
    changeFrequency: "monthly",
  },

  "/blog": {
    title: "Insight, Engineering, Design & Growth Notes",
    description:
      "Practical writing on building software, designing products and growing companies, from the team doing the work. New pieces most weeks.",
    keywords: [
      "software engineering blog",
      "design blog Nigeria",
      "tech blog Africa",
      "startup advice Nigeria",
    ],
    priority: 0.9,
    changeFrequency: "daily",
  },
};

/**
 * Build a Next.js metadata object for a route.
 *
 * The canonical is the important part: it is always absolute and always this
 * page's own URL, which is what stops Google folding the route into the
 * homepage as a duplicate.
 */
export function pageMetadata(path, overrides = {}) {
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
      canonical: url,
    },

    openGraph: {
      type: "website",
      url,
      siteName: SITE.name,
      title,
      description,
      locale: "en_NG",
      alternateLocale: ["en_GB", "en_US", "en_AE"],
      images: [
        {
          url: `${SITE.url}/opengraph-image`,
          width: 1200,
          height: 630,
          alt: `${SITE.name}, ${title}`,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title,
      description,
      site: SITE.twitter,
      creator: SITE.twitter,
      images: [`${SITE.url}/opengraph-image`],
    },

    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },

    ...overrides.extra,
  };
}
