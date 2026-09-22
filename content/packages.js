/**
 * The five packages, shared by the Packages page and the homepage range.
 *
 * Prices are honest starting points: nobody pays less than the number shown,
 * and the final figure depends on how much of the package a client needs.
 */

export const PACKAGES = [
  {
    slug: "launchpad",
    name: "Launchpad",
    // A live site we built that shows the kind of work this package covers.
    example: { image: "/images/work/orrea.jpg", name: "Orréa Bread House", url: "https://orrea-lemon.vercel.app" },
    price: "₦800,000",
    pricePrefix: "from",
    priceNote: "Most launch sites land between ₦800k and ₦1.2m.",
    tagline: "Get online properly, the first time",
    who: "New businesses, or anyone whose current site is embarrassing them.",
    includes: [
      "A website of up to five pages",
      "Written for your customers, not for you",
      "Set up so Google can find it",
      "Works properly on phones",
      "Business email set up",
      "Thirty days of support after launch",
    ],
  },
  {
    slug: "growth-engine",
    name: "Growth Engine",
    // A live site we built that shows the kind of work this package covers.
    example: { image: "/images/work/gcsa-consulting.jpg", name: "GCSA Consulting", url: "https://gcsa-consulting.vercel.app" },
    price: "₦1,500,000",
    pricePrefix: "from",
    priceNote: "Plus a monthly marketing retainer from ₦350k.",
    tagline: "Stop being the best kept secret in your market",
    who: "Businesses with a site that nobody is finding.",
    includes: [
      "Everything in Launchpad",
      "Up to twelve pages",
      "Google ranking work, done monthly",
      "Google and social media adverts",
      "Email marketing set up and running",
      "A monthly report on enquiries and sales",
    ],
    featured: true,
  },
  {
    slug: "brand-authority",
    name: "Brand Authority",
    // A live site we built that shows the kind of work this package covers.
    example: { image: "/images/work/opeyemi.jpg", name: "Opeyemi T. Ojurongbe", url: "https://opeyemi-eight.vercel.app" },
    price: "₦3,500,000",
    pricePrefix: "from",
    priceNote: "Brand and film together; either alone costs less.",
    tagline: "Become the name people recognise first",
    who: "Companies who look smaller than they are.",
    includes: [
      "Everything in Growth Engine",
      "Full brand identity and logo",
      "A brand guide your team can follow",
      "A brand film and advert cuts",
      "Photography direction",
      "Templates for your team to use",
    ],
  },
  {
    slug: "tech-powerhouse",
    name: "Tech Powerhouse",
    // A live site we built that shows the kind of work this package covers.
    example: { image: "/images/work/point-of-sale_webapp.jpg", name: "Swift Grocers point of sale", url: "https://point-of-sale-webapp.vercel.app" },
    price: "₦8,000,000",
    pricePrefix: "from",
    priceNote: "Scoped on features. Simple apps start lower.",
    tagline: "Build the system your business runs on",
    who: "Businesses who need software, not just a website.",
    includes: [
      "A custom web or mobile app",
      "Logins, payments and dashboards",
      "Connections to systems you already use",
      "Built to handle growth",
      "Security checked before launch",
      "Handover so your team can take over",
    ],
  },
  {
    slug: "digital-dominance",
    name: "Digital Dominance",
    // A live site we built that shows the kind of work this package covers.
    example: { image: "/images/work/valiant_movement.jpg", name: "Valiant Movement", url: "https://valiant-movement.vercel.app" },
    price: "₦20,000,000",
    pricePrefix: "from",
    priceNote: "Six month engagement, billed monthly.",
    tagline: "Own your market completely",
    who: "Companies ready to lead their category.",
    includes: [
      "Everything in every package above",
      "Six months of marketing",
      "A dedicated account lead",
      "Priority on everything",
      "Quarterly strategy sessions",
      "Ongoing development and support",
    ],
  },
];
