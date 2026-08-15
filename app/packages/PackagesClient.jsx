import Link from "next/link";
import {
  Section,
  Container,
  Heading,
  Lede,
  ActionLink,
  SectionHeader,
  PageHero,
} from "@/components/ui/primitives";

/**
 * Packages.
 *
 * Five tiers, in plain language. We do not publish a single fixed number
 * because the same package costs different amounts depending on how much of it
 * you need, and a number that turns out to be wrong on the first call costs
 * more trust than it buys clicks. What we do publish is exactly what is
 * included, so nobody has to book a call to find out what they are buying.
 */

const PACKAGES = [
  {
    name: "Launchpad",
    price: "₦500,000",
    pricePrefix: "from",
    priceNote: "Most launch sites land between ₦500k and ₦1.2m.",
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
    name: "Growth Engine",
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
    name: "Brand Authority",
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
    name: "Tech Powerhouse",
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
    name: "Digital Dominance",
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

const FAQS = [
  {
    q: "Are these the final prices?",
    a: "They are honest starting points, not the whole answer. What you finally pay depends on how much of each package you actually need. Nobody pays less than the number shown, and you get a firm written price within 48 hours of one conversation.",
  },
  {
    q: "Do you quote in pounds or dollars?",
    a: "Yes. Naira for Nigerian clients, and GBP, USD or AED for clients in the UK, the United States and the UAE. We quote at the rate on the day and hold it for 30 days.",
  },
  {
    q: "What do these actually cost, roughly?",
    a: "We published honest market ranges for Nigeria, in writing, which almost nobody here will do. Read it before you talk to anybody, including us.",
    link: { href: "/blog/what-a-website-costs-in-nigeria", label: "What a website really costs" },
  },
  {
    q: "Can I mix parts of different packages?",
    a: "Yes. These are starting points, not menus you have to order from exactly. Most projects end up somewhere between two of them.",
  },
  {
    q: "What if my budget is smaller than this?",
    a: "Tell us on the first call. We will either scope something smaller that still works, or tell you honestly that we are not the right fit and point you somewhere better.",
  },
  {
    q: "Do I own what you build?",
    a: "Completely. The code, the accounts and the domain are in your name from day one, not transferred at the end. If you want to move to another team later, you can.",
  },
];

export default function PackagesClient() {
  return (
    <>
      <PageHero
        eyebrow="Packages"
        before="Pick a"
        highlight="starting"
        after="point."
        lede="Five packages, real starting prices, and exactly what is in each one. Most projects land somewhere between two of them, which is fine."
        primary={{ href: "/start-a-project", label: "Get a written price" }}
        secondary={{ href: "/blog/what-a-website-costs-in-nigeria", label: "What this normally costs" }}
      />

      {/* Packages */}
      <Section tone="white">
        <Container width="wide">
          <div className="grid gap-px overflow-hidden rounded-2xl bg-black/10 lg:grid-cols-3">
            {PACKAGES.map((p) => (
              <div
                key={p.name}
                className={`flex flex-col p-8 ${p.featured ? "bg-[#0B0B0F]" : "bg-white"}`}
              >
                {p.featured && (
                  <span className="mb-4 inline-block self-start rounded-full bg-[#0040FF] px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-white">
                    Most popular
                  </span>
                )}

                <h2
                  className={`text-[1.6rem] font-bold tracking-[-0.03em] ${p.featured ? "text-white" : "text-[#0B0B0F]"}`}
                >
                  {p.name}
                </h2>
                <p
                  className={`mt-2 text-[1.0625rem] leading-snug ${p.featured ? "text-white/70" : "text-[#6e6e73]"}`}
                >
                  {p.tagline}
                </p>

                <div
                  className={`mt-6 border-t pt-6 ${p.featured ? "border-white/10" : "border-black/10"}`}
                >
                  <span
                    className={`block text-[12px] font-semibold uppercase tracking-[0.12em] ${p.featured ? "text-white/45" : "text-[#6e6e73]"}`}
                  >
                    {p.pricePrefix}
                  </span>
                  <span
                    className={`mt-1 block text-[2rem] font-extrabold tracking-[-0.035em] ${p.featured ? "text-white" : "text-[#0B0B0F]"}`}
                  >
                    {p.price}
                  </span>
                  <span
                    className={`mt-2 block text-[13.5px] leading-relaxed ${p.featured ? "text-white/50" : "text-[#6e6e73]"}`}
                  >
                    {p.priceNote}
                  </span>
                </div>

                <p
                  className={`mt-5 border-t pt-5 text-[14.5px] leading-relaxed ${
                    p.featured
                      ? "border-white/10 text-white/55"
                      : "border-black/10 text-[#6e6e73]"
                  }`}
                >
                  <span className={p.featured ? "font-semibold text-white/80" : "font-semibold text-[#0B0B0F]"}>
                    Good for:
                  </span>{" "}
                  {p.who}
                </p>

                <ul className="mt-6 flex-1 space-y-3">
                  {p.includes.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span
                        aria-hidden="true"
                        className="mt-[0.42rem] h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#0040FF]"
                      />
                      <span
                        className={`text-[15px] leading-relaxed ${p.featured ? "text-white/80" : "text-[#0B0B0F]"}`}
                      >
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/start-a-project"
                  className={`mt-8 inline-flex items-center justify-center rounded-full px-6 py-[0.8rem] text-[1.0625rem] font-medium transition-colors ${
                    p.featured
                      ? "bg-white text-[#0B0B0F] hover:bg-white/90"
                      : "bg-[#0040FF] text-white hover:bg-[#0B0B0F]"
                  }`}
                >
                  Get a price for this
                </Link>
              </div>
            ))}
          </div>

          <p className="mt-8 text-center text-[14.5px] leading-relaxed text-[#6e6e73]">
            Prices in naira, excluding VAT. We also quote in GBP, USD and AED
            for clients outside Nigeria.{" "}
            <Link
              href="/blog/what-a-website-costs-in-nigeria"
              className="font-medium text-[#0040FF] underline underline-offset-4"
            >
              How these compare to the market
            </Link>
            .
          </p>
        </Container>
      </Section>

      {/* FAQs */}
      <Section tone="offwhite" labelledBy="faq">
        <Container width="narrow">
          <SectionHeader
            id="faq"
            align="left"
            eyebrow="Straight answers"
            heading="The questions everybody asks."
            size="lg"
          />

          <dl className="mt-12 divide-y divide-black/10 border-y border-black/10">
            {FAQS.map((f) => (
              <div key={f.q} className="grid gap-3 py-7 sm:grid-cols-[1fr_1.4fr] sm:gap-10">
                <dt className="text-[1.0625rem] font-bold text-[#0B0B0F]">{f.q}</dt>
                <dd className="text-[1.0625rem] leading-relaxed text-[#6e6e73]">
                  {f.a}
                  {f.link && (
                    <>
                      {" "}
                      <Link
                        href={f.link.href}
                        className="font-medium text-[#0040FF] underline underline-offset-4"
                      >
                        {f.link.label}
                      </Link>
                      .
                    </>
                  )}
                </dd>
              </div>
            ))}
          </dl>
        </Container>
      </Section>

      {/* CTA */}
      <Section tone="brand">
        <Container width="narrow" className="text-center">
          <Heading as="h2" size="xl" className="mx-auto max-w-[16ch]">
            Get a real price in 48 hours.
          </Heading>
          <Lede tone="light" className="mx-auto mt-6 max-w-[48ch]">
            One conversation, then a written plan with the scope, the timeline
            and the price. Yours to keep even if you go elsewhere.
          </Lede>
          <div className="mt-10">
            <Link
              href="/start-a-project"
              className="inline-flex items-center justify-center rounded-full bg-white px-8 py-[0.95rem] text-[1.0625rem] font-medium text-[#0B0B0F] transition-colors hover:bg-white/90"
            >
              Start a project
            </Link>
          </div>
        </Container>
      </Section>
    </>
  );
}
