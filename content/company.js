// Imported rather than referenced by path. A bundled import gets a filename
// containing a hash of the file's contents, so replacing the photograph
// changes the URL and every browser and CDN fetches the new one. A fixed
// path like "/images/.../opeyemi-ojurongbe.jpg" never changes, so a swapped
// photograph keeps serving from cache and looks like nothing happened.
import OpeyemiPortrait from "../public/images/leadership/opeyemi-ojurongbe.jpg";
import KehindePortrait from "../public/images/leadership/marketing-director.jpg";
import LeahPortrait from "../public/images/leadership/analytics-officer.jpg";

/**
 * Company facts shared across the site: the dream, the products, the
 * services and the values.
 *
 * Taken from the public parts of the 2026–2031 business plan. Board-only
 * material (budgets, risks, competition, the org chart) stays out of the site
 * on purpose. Goals are always written as goals, never as achievements.
 */

export const COMPANY = {
  name: "BitLayerX Technologies",
  tagline: "Your digital growth partner",
  origin: "Built in Nigeria. Built for Africa.",
  mission:
    "To digitalise 30% of African businesses before 2030, with products they trust and love to use.",
  vision:
    "To be Africa’s biggest technology company: a household name in every home, business and institution.",
};

// What "digitalised" means to us. Each line is something a business can check.
export const DIGITALISED = [
  "Sells online, with secure digital payments",
  "Keeps its records and data safely in the cloud",
  "Delivers to customers with live tracking and proof",
  "Sees its field teams and operations in real time",
  "Is found by customers searching online",
];

export const VALUES = [
  { title: "Simplicity", body: "If it needs a manual, it is not finished." },
  { title: "Proof", body: "We show the evidence. We never make claims we cannot prove." },
  { title: "Ownership", body: "Clients own their data. Always." },
  { title: "Scale", body: "We build for a continent, not a city." },
];

/**
 * The six products. Each one answers a single question a leader asks.
 * `visual` picks the illustration in components/home/ProductVisuals.jsx.
 */
export const PRODUCTS = [
  {
    id: "data-bank",
    name: "Data Bank",
    status: "live",
    division: "BitLayerX Cloud",
    question: "Where does our data live, safely?",
    summary:
      "Africa’s cloud computing platform and data centre. Computing power, storage and databases for businesses, governments and developers, hosted in Africa, under African law, close to their customers.",
    points: [
      "Virtual servers, storage and managed databases in one console",
      "Vault: sealed, time-stamped records where any later change shows",
      "Automatic backups and recovery across two regions",
      "African data kept in Africa, in line with the NDPA 2023",
    ],
    visual: "databank",
  },
  {
    id: "poll360",
    name: "Poll360",
    status: "live",
    division: "BitLayerX Civic",
    question: "What was the result?",
    summary:
      "The collation engine. An independent count built from every polling unit, each figure checked against the photographed result sheet, and always shown beside the share of units it is built on.",
    points: [
      "Live collation, from polling unit to national total",
      "AI reading of photographed result sheets",
      "Impossible or unusual figures flagged within minutes",
      "Tribunal-ready evidence packs for every polling unit",
    ],
    note: "Poll360 produces an independent count, never an official result. It does not replace INEC.",
    url: "https://poll-360.vercel.app",
    visual: "poll360",
  },
  {
    id: "agent360",
    name: "Agent360",
    status: "live",
    division: "BitLayerX Civic",
    question: "Was our person really there?",
    summary:
      "Field command. Registers, trains and manages every agent and coordinator, confirms presence at the assigned location, and raises an alert the moment a unit goes silent.",
    points: [
      "Agents report on WhatsApp, a light web app, or SMS",
      "Location check-in confirms presence on arrival",
      "Silence alerts and an SOS routed to the right coordinator",
      "Training in English, Hausa, Yoruba, Igbo and Pidgin",
    ],
    visual: "agent360",
  },
  {
    id: "quick-drive",
    name: "Quick Drive",
    status: "2027",
    division: "BitLayerX Logistics",
    question: "Can I get this moved now?",
    summary:
      "On-demand delivery and dispatch. Book a verified rider or driver in a few taps, on the app, the web or WhatsApp, and follow every step until it arrives.",
    points: [
      "Book in under a minute, by app, web or WhatsApp",
      "Verified riders and drivers, with identity checks",
      "Photo proof at pickup and delivery",
      "One-time delivery code for the recipient",
    ],
    visual: "quickdrive",
  },
  {
    id: "relay",
    name: "Relay",
    status: "2027",
    division: "BitLayerX Logistics",
    question: "Who had it at every step?",
    summary:
      "Hub-to-hub and multi-leg delivery with an unbroken chain of custody. Every hand-off is scanned, confirmed by both sides and sealed.",
    points: [
      "Scan-to-confirm at every hand-off",
      "Both parties confirm, so no one can deny receipt",
      "Inter-city and multi-leg route planning",
      "A full custody report for every consignment",
    ],
    visual: "relay",
  },
  {
    id: "gotrack",
    name: "GoTrack",
    status: "2027",
    division: "BitLayerX Logistics",
    question: "Where is it, right now?",
    summary:
      "Live tracking and fleet command. Every vehicle, driver and delivery on one map, and customers follow their package by a link or on WhatsApp without calling anyone.",
    points: [
      "Every vehicle and rider on one live map",
      "Delays, route changes and idle vehicles flagged at once",
      "SOS, speed alerts and check-ins on long routes",
      "Works for any fleet, on its own or with Quick Drive and Relay",
    ],
    visual: "gotrack",
  },
];

// Services, grouped the way buyers arrive: by who they are.
export const AUDIENCES = [
  {
    label: "For SMEs",
    title: "Get online and sell.",
    body: "Websites, stores, apps and SEO that bring customers every day.",
    href: "/packages",
  },
  {
    label: "For corporates",
    title: "Run on digital.",
    body: "Custom software, cloud, data and security for growing organisations.",
    href: "/solutions",
  },
  {
    label: "For government",
    title: "Serve with proof.",
    body: "Portals, field systems, situation rooms and sovereign cloud.",
    href: "/enterprise",
  },
];

export const SERVICES = [
  { title: "Web development", body: "Company websites, portals and blogs. Fast, secure and mobile-first.", href: "/services" },
  { title: "E-commerce", body: "Online stores built to convert, with card, transfer and USSD payments.", href: "/services" },
  { title: "Mobile apps", body: "Android and iOS apps for customers, staff and field teams.", href: "/solutions" },
  { title: "Custom software", body: "Business systems, dashboards, booking, school and hospital platforms.", href: "/solutions" },
  { title: "UI/UX and product design", body: "Research, user journeys, screens and interactive prototypes.", href: "/design" },
  { title: "Branding and graphic design", body: "Logos, brand identity, proposals and marketing materials.", href: "/design" },
  { title: "Cloud hosting and migration", body: "Websites, systems and data moved safely onto Data Bank.", href: "/services" },
  { title: "Data, analytics and AI", body: "Dashboards, reports, automation and document reading.", href: "/solutions" },
  { title: "SEO and digital marketing", body: "Search, content, social and ads that bring real buyers.", href: "/marketing" },
  { title: "Cybersecurity and data protection", body: "Security testing, audits and NDPA 2023 compliance.", href: "/services" },
  { title: "IT consulting", body: "Step-by-step plans to move from paper to digital.", href: "/services" },
  { title: "Maintenance, support and training", body: "BitLayerX Care, plus hands-on training in five languages.", href: "/services" },
];

// The leadership team shown on the About page.
//
// Real people only, and only once they have agreed to appear. `image` is a
// path under /public; leave it null until the photo arrives and the card
// shows the person's initials instead. Portraits should be 3:4, face in the
// upper third.
export const LEADERSHIP = [
  {
    name: "Opeyemi T. Ojurongbe",
    role: "CEO, BitLayerX Technologies",
    image: OpeyemiPortrait,
    bio: "Scopes the plan you receive in the first 48 hours and sits on every project, so there is always a name to call.",
  },
  {
    name: "Leah Omolade",
    role: "Chief Analytics Officer",
    image: LeahPortrait,
    bio: "Turns what the products record into the reporting clients read, and holds every engagement to the metrics agreed up front.",
  },
  {
    name: "Awosina Kehinde Johnson",
    role: "Director of Marketing and Media",
    image: KehindePortrait,
    bio: "Owns how the work is found and how it is seen, from search and campaigns through to the films and photography.",
  },
  // {
  //   name: "Full name",
  //   role: "Role",
  //   image: null, // e.g. "/images/leadership/first-last.jpg"
  //   bio: "One or two sentences on what they own.",
  // },
];
