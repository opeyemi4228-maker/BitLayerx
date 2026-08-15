import Link from "next/link";
import {
  Landmark,
  Truck,
  Home,
  ShoppingCart,
  Factory,
} from "lucide-react";
import {
  Section,
  Container,
  Heading,
  Lede,
  ActionLink,
  SectionHeader,
} from "@/components/ui/primitives";

/**
 * Industries.
 *
 * This page exists to let a buyer recognise themselves in about ten seconds,
 * and to say out loud who we are not for. Refusing work is the most credible
 * thing an agency can do, because everyone else claims everything.
 *
 * It used to carry roughly nineteen facts per industry  -  challenges, how we
 * help, capabilities, metrics and a case study, five times over. Nobody reads
 * ninety-five bullet points. Each industry now gets one sentence and three
 * things we build, which is the amount a reader will actually take in before
 * deciding whether to keep going.
 */

const INDUSTRIES = [
  {
    id: "fintech",
    icon: Landmark,
    label: "Fintech",
    headline: "Money moves, or it doesn't.",
    intro:
      "Payment infrastructure and digital banking, architected so a regulator's questions have answers before they are asked.",
    builds: [
      "Payment gateways and wallet apps",
      "KYC and AML verification flows",
      "Real-time transaction dashboards",
    ],
    practices: ["Strategy", "Design", "Engineering", "Growth"],
  },
  {
    id: "logistics",
    icon: Truck,
    label: "Logistics",
    headline: "Operations that stop needing you.",
    intro:
      "Fleet, dispatch and tracking systems built for the reality of a vehicle in a dead zone with a driver who has one bar of signal.",
    builds: [
      "Fleet management and live tracking",
      "Automated dispatch and job assignment",
      "Client-facing delivery portals",
    ],
    practices: ["Strategy", "Engineering", "Design"],
  },
  {
    id: "real-estate",
    icon: Home,
    label: "Real estate",
    headline: "Property is sold on trust.",
    intro:
      "Listing platforms, developer identities and cinematic project films  -  made by one team, so the film and the website tell the same story.",
    builds: [
      "Property listing platforms",
      "Developer brand identity systems",
      "Project films and walkthroughs",
    ],
    practices: ["Brand", "Film", "Design", "Growth"],
  },
  {
    id: "ecommerce",
    icon: ShoppingCart,
    label: "E-commerce",
    headline: "A checkout that survives a weak signal.",
    intro:
      "Storefronts built for a phone on 3G, with the advertising that feeds them run by the same people who built the store.",
    builds: [
      "Custom and headless storefronts",
      "Checkout and conversion work",
      "Performance advertising and email",
    ],
    practices: ["Brand", "Engineering", "Growth", "Film"],
  },
  {
    id: "enterprise",
    icon: Factory,
    label: "Corporate & enterprise",
    headline: "Procurement is in the room.",
    intro:
      "Internal systems and brand governance for organisations where compliance, legacy integration and six approvers are all part of the job.",
    builds: [
      "Enterprise platforms and internal tools",
      "ERP and CRM integration",
      "Brand governance your teams can follow",
    ],
    practices: ["Strategy", "Brand", "Engineering", "Growth"],
  },
];

// The same three promises hold whichever industry you arrive from. They are
// deliberately not numbers: a number we cannot evidence costs more than it buys.
const CONSTANTS = [
  {
    title: "A written plan in 48 hours",
    body: "One conversation, then the scope, the timeline and the price in writing. Yours to keep even if you go elsewhere.",
  },
  {
    title: "One accountable owner",
    body: "A named senior person who answers for the whole engagement, not an account manager between you and the work.",
  },
  {
    title: "You own all of it",
    body: "Code, accounts and domains in your name from day one  -  not transferred at the end, and never held hostage.",
  },
];

export default function IndustriesClient() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Industries  -  BitLayerX",
            description:
              "BitLayerX works in five industries: fintech, logistics, real estate, e-commerce and corporate & enterprise.",
            url: "https://bitlayerx.com/industries",
            provider: {
              "@type": "Organization",
              name: "BitLayerX",
              url: "https://bitlayerx.com",
            },
            about: INDUSTRIES.map((i) => ({
              "@type": "Thing",
              name: i.label,
              description: i.intro,
            })),
          }),
        }}
      />

      {/* ── Hero ───────────────────────────────────────────────────────── */}
      <Section tone="offwhite" rhythm="tight">
        <Container width="narrow" className="text-center">
          <p className="text-[12px] font-bold uppercase tracking-[0.18em] text-[#0040FF]">
            Industries
          </p>

          <Heading as="h1" size="hero" className="mx-auto mt-5 max-w-[16ch]">
            We don&rsquo;t work with everyone.
          </Heading>

          <Lede className="mx-auto mt-7 max-w-[54ch]">
            Five industries, chosen because we have shipped in them and know
            where the work actually gets hard. If yours is not here, say so
            plainly and we will tell you honestly whether we are the right team.
          </Lede>

          {/* Quick nav  -  self-selection in one glance */}
          <nav
            aria-label="Jump to an industry"
            className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-3"
          >
            {INDUSTRIES.map((i) => (
              <a
                key={i.id}
                href={`#${i.id}`}
                className="text-[15px] font-medium text-[#6e6e73] underline-offset-4 transition-colors hover:text-[#0040FF] hover:underline"
              >
                {i.label}
              </a>
            ))}
          </nav>
        </Container>
      </Section>

      {/* ── The five ───────────────────────────────────────────────────── */}
      <Section tone="white">
        <Container>
          <ul className="divide-y divide-black/10 border-y border-black/10">
            {INDUSTRIES.map((industry) => {
              const Icon = industry.icon;
              return (
                <li
                  key={industry.id}
                  id={industry.id}
                  className="scroll-mt-32 grid gap-6 py-12 lg:grid-cols-[1fr_1.35fr] lg:gap-16 lg:py-16"
                >
                  {/* Identity */}
                  <div>
                    <div className="flex items-center gap-3">
                      <span
                        aria-hidden="true"
                        className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-[#0040FF]/10"
                      >
                        <Icon size={17} strokeWidth={1.9} className="text-[#0040FF]" />
                      </span>
                      <span className="text-[12px] font-bold uppercase tracking-[0.18em] text-[#0040FF]">
                        {industry.label}
                      </span>
                    </div>

                    <Heading as="h2" size="lg" className="mt-5 max-w-[18ch]">
                      {industry.headline}
                    </Heading>
                  </div>

                  {/* What we do about it */}
                  <div>
                    <p className="text-[1.0625rem] leading-relaxed text-[#6e6e73]">
                      {industry.intro}
                    </p>

                    <ul className="mt-7 space-y-3">
                      {industry.builds.map((b) => (
                        <li key={b} className="flex gap-3">
                          <span
                            aria-hidden="true"
                            className="mt-[0.5rem] h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#0040FF]"
                          />
                          <span className="text-[1.0625rem] leading-relaxed text-[#0B0B0F]">
                            {b}
                          </span>
                        </li>
                      ))}
                    </ul>

                    <p className="mt-7 text-[14px] text-[#6e6e73]">
                      <span className="font-semibold text-[#0B0B0F]">
                        Practices involved:
                      </span>{" "}
                      {industry.practices.join(" · ")}
                    </p>

                    {/* One live destination, not a link to a page that does
                        not exist. Every industry used to point at
                        /industries/<slug>, none of which were ever built. */}
                    <div className="mt-7">
                      <ActionLink href="/start-a-project">
                        Talk to us about {industry.label.toLowerCase()}
                      </ActionLink>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </Container>
      </Section>

      {/* ── What holds regardless ──────────────────────────────────────── */}
      <Section tone="offwhite" labelledBy="constants">
        <Container>
          <SectionHeader
            id="constants"
            align="left"
            eyebrow="Whichever one you are"
            heading="Three things that do not change."
            size="lg"
          />

          <div className="mt-12 grid gap-px overflow-hidden rounded-2xl bg-black/10 sm:grid-cols-3">
            {CONSTANTS.map((c) => (
              <div key={c.title} className="bg-white p-8">
                <h3 className="text-[1.0625rem] font-bold text-[#0B0B0F]">
                  {c.title}
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-[#6e6e73]">
                  {c.body}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* ── Close ──────────────────────────────────────────────────────── */}
      <Section tone="brand">
        <Container width="narrow" className="text-center">
          <Heading as="h2" size="xl" className="mx-auto max-w-[17ch]">
            Not on the list?
          </Heading>

          <Lede tone="light" className="mx-auto mt-6 max-w-[50ch]">
            Tell us what you are building. If we are the wrong team for it we
            will say so on the first call, and point you at someone better.
          </Lede>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-8">
            <Link
              href="/start-a-project"
              className="inline-flex items-center justify-center rounded-full bg-white px-8 py-[0.95rem] text-[1.0625rem] font-medium text-[#0B0B0F] transition-colors hover:bg-white/90"
            >
              Start a project
            </Link>
            <ActionLink href="/portfolio" tone="light">
              See what we have shipped
            </ActionLink>
          </div>
        </Container>
      </Section>
    </>
  );
}
