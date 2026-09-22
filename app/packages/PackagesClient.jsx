import Link from "next/link";
import Image from "next/image";
import { Check } from "lucide-react";
import {
  Section,
  Container,
  Heading,
  Lede,
  ActionLink,
  SectionHeader,
  PageHero,
  ClosingCTA,
} from "@/components/ui/primitives";
import { PACKAGES } from "@/content/packages";

/**
 * Packages.
 *
 * Five tiers, in plain language. We do not publish a single fixed number
 * because the same package costs different amounts depending on how much of it
 * you need, and a number that turns out to be wrong on the first call costs
 * more trust than it buys clicks. What we do publish is exactly what is
 * included, so nobody has to book a call to find out what they are buying.
 */



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
          {/* White cards on white, separated by hairlines. The featured tier
              is marked with a blue outline, not a black slab: on a white
              page a dark card becomes the heaviest thing on screen and pulls
              the eye away from the price, which is what the reader came for. */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {PACKAGES.map((p) => (
              <article
                key={p.name}
                id={p.slug}
                className={`flex scroll-mt-32 flex-col rounded-[24px] bg-white p-8 ${
                  p.featured ? "ring-2 ring-[#0040FF]" : "ring-1 ring-black/[0.1]"
                }`}
              >
                <a
                  href={p.example.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative -mx-2 -mt-2 block overflow-hidden rounded-[16px] ring-1 ring-black/[0.08]"
                  aria-label={`Open ${p.example.name}, an example of ${p.name} work`}
                >
                  <div className="relative aspect-[16/9]">
                    <Image
                      src={p.example.image}
                      alt=""
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 420px"
                      className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
                    />
                  </div>
                </a>
                <p className="mt-3 text-[13px] text-[#5E5E5E]">
                  Example: {p.example.name}
                </p>

                <div className="mt-5 flex items-center gap-3">
                  <h2 className="text-[1.6rem] font-semibold tracking-[-0.03em] text-[#111111]">
                    {p.name}
                  </h2>
                  {p.featured && (
                    <span className="rounded-full bg-[#0040FF] px-3 py-1 text-[12px] font-medium text-white">
                      Most popular
                    </span>
                  )}
                </div>
                <p className="mt-2 text-[1.0625rem] leading-snug text-[#5E5E5E]">
                  {p.tagline}
                </p>

                <div className="mt-6 border-t border-black/10 pt-6">
                  <span className="block text-[13px] text-[#5E5E5E]">
                    Starting {p.pricePrefix}
                  </span>
                  <span className="mt-1 block text-[2rem] font-semibold tracking-[-0.035em] text-[#111111]">
                    {p.price}
                  </span>
                  <span className="mt-2 block text-[13.5px] leading-relaxed text-[#5E5E5E]">
                    {p.priceNote}
                  </span>
                </div>

                <p className="mt-5 border-t border-black/10 pt-5 text-[14.5px] leading-relaxed text-[#5E5E5E]">
                  <span className="font-semibold text-[#111111]">Good for:</span>{" "}
                  {p.who}
                </p>

                <ul className="mt-6 flex-1 space-y-3">
                  {p.includes.map((item) => (
                    <li key={item} className="flex gap-3">
                      <Check
                        size={16}
                        strokeWidth={2.25}
                        aria-hidden="true"
                        className="mt-[3px] flex-shrink-0 text-[#0040FF]"
                      />
                      <span className="text-[15px] leading-relaxed text-[#111111]">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/start-a-project"
                  className={`mt-8 inline-flex items-center justify-center rounded-full px-6 py-[0.8rem] text-[1.0625rem] font-medium transition-colors ${
                    p.featured
                      ? "bg-[#0040FF] text-white hover:bg-black"
                      : "border border-black/[0.16] text-[#111111] hover:border-black"
                  }`}
                >
                  Get a price for this
                </Link>
              </article>
            ))}
          </div>

          <p className="mt-8 text-center text-[14.5px] leading-relaxed text-[#5E5E5E]">
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
                <dt className="text-[1.0625rem] font-bold text-[#111111]">{f.q}</dt>
                <dd className="text-[1.0625rem] leading-relaxed text-[#5E5E5E]">
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
      <ClosingCTA
        heading="Get a real price in 48 hours."
        lede="One conversation, then a written plan with the scope, the timeline and the price. Yours to keep even if you go elsewhere."
        primary={{ href: "/start-a-project", label: "Start a project" }}
      />
    </>
  );
}
