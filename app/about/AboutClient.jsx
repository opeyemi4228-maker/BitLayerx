import Image from "next/image";
import Link from "next/link";
import { Check } from "lucide-react";
import { COMPANY, VALUES, LEADERSHIP } from "@/content/company";
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

// How we build: six principles, from the company plan.
const BELIEFS = [
  {
    title: "Focus",
    body: "Say no to almost everything. A small number of products, each made brilliantly. Nothing else gets our best people.",
  },
  {
    title: "Design first",
    body: "How it works, not just how it looks. Every product starts with design and must work on a basic phone, on a weak network.",
  },
  {
    title: "Own the experience",
    body: "From the data centre to the doorstep. We design, build, host, secure, train and support. One point of accountability.",
  },
  {
    title: "Better together",
    body: "Every product strengthens the next. Data Bank powers everything. Agent360 verifies. Poll360 shows. Logistics reuses all three.",
  },
  {
    title: "Experts lead",
    body: "Organised by discipline. One leader for each area of expertise, and one accountable owner for every product.",
  },
  {
    title: "Trust is the product",
    body: "Sealed records, African data kept in Africa, and full data ownership for every client.",
  },
];

const DIVISIONS = [
  { name: "BitLayerX Cloud", body: "Data Bank: cloud platform and data centres." },
  { name: "BitLayerX Civic", body: "Poll360, Agent360 and situation rooms." },
  { name: "BitLayerX Logistics", body: "Quick Drive, Relay and GoTrack, launching 2027." },
  { name: "BitLayerX Digital", body: "Stores, websites, apps and growth." },
];

// "Opeyemi T. Ojurongbe" -> "OO". Stands in for a portrait until it arrives.
function initials(name) {
  const parts = name.replace(/[^A-Za-z\s]/g, " ").trim().split(/\s+/);
  return (parts[0][0] + (parts.length > 1 ? parts[parts.length - 1][0] : "")).toUpperCase();
}

export default function AboutClient() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        before="One company. A continent to"
        highlight="digitalise"
        after="."
        lede="BitLayerX Technologies builds the digital foundations African businesses and institutions run on: cloud, field intelligence, logistics and digital growth services."
        primary={{ href: "/start-a-project", label: "Start a project" }}
        secondary={{ href: "/portfolio", label: "See what we have built" }}
      />

      {/* Mission, vision, values */}
      <Section tone="offwhite" labelledBy="mission">
        <Container width="wide">
          <div className="grid gap-6 md:grid-cols-2">
            {[
              ["Mission", COMPANY.mission],
              ["Vision", COMPANY.vision],
            ].map(([k, v]) => (
              <div key={k} className="rounded-[24px] bg-white p-8 ring-1 ring-black/[0.1] sm:p-10">
                <p id={k === "Mission" ? "mission" : undefined} className="text-[14px] font-semibold text-[#0040FF]">{k}</p>
                <p className="mt-4 text-[clamp(1.4rem,2.4vw,2rem)] font-semibold leading-[1.2] tracking-[-0.03em] text-[#111111]">
                  {v}
                </p>
              </div>
            ))}
          </div>

          <h2 className="mt-20 text-[clamp(1.7rem,3.2vw,2.7rem)] font-semibold tracking-[-0.035em] text-[#111111]">
            What we value.
          </h2>
          <ul className="mt-8 grid gap-8 border-t border-black/[0.08] pt-8 sm:grid-cols-2 lg:grid-cols-4">
            {VALUES.map((v) => (
              <li key={v.title}>
                <p className="text-[1.25rem] font-semibold tracking-[-0.02em] text-[#111111]">{v.title}</p>
                <p className="mt-2 text-[15.5px] leading-relaxed text-[#5E5E5E]">{v.body}</p>
              </li>
            ))}
          </ul>

          <h2 className="mt-20 text-[clamp(1.7rem,3.2vw,2.7rem)] font-semibold tracking-[-0.035em] text-[#111111]">
            Four divisions. One company.
          </h2>
          <p className="mt-3 max-w-[60ch] text-[1.0625rem] leading-relaxed text-[#5E5E5E]">
            One brand, one shared core and one standard, growing through strong
            divisions the way the world&rsquo;s great technology groups did.
          </p>
          <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {DIVISIONS.map((d) => (
              <li key={d.name} className="rounded-[20px] bg-white p-7 ring-1 ring-black/[0.1]">
                <Check size={18} strokeWidth={2.25} aria-hidden="true" className="text-[#0040FF]" />
                <p className="mt-4 text-[1.125rem] font-semibold tracking-[-0.02em] text-[#111111]">{d.name}</p>
                <p className="mt-2 text-[15px] leading-relaxed text-[#5E5E5E]">{d.body}</p>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      {/* Leadership */}
      <Section tone="white" labelledBy="leadership">
        <Container width="wide">
          <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:gap-20">
            <div>
              <p className="text-[14px] font-semibold text-[#0040FF]">
                Leadership
              </p>
              <Heading as="h2" size="xl" id="leadership" className="mt-4">
                You will meet everyone who touches your project.
              </Heading>
            </div>
            <div className="space-y-5 text-[1.0625rem] leading-relaxed text-[#5E5E5E] lg:pt-10">
              <p>
                Almost every business owner in Nigeria has the same story: a
                website that was never quite finished, an app that stopped
                working, and a developer who stopped picking up the phone.{" "}
                <span className="text-[#111111]">
                  We started BitLayerX to end that story.
                </span>
              </p>
              <p>
                We are one team in Gwarinpa, Abuja. Designers, engineers, brand
                builders, filmmakers and marketers, under one roof. Your project
                gets a single owner who knows your business by name, answers
                when you call, and stays with the work long after it goes live.
              </p>
              <p className="text-[#111111]">
                And we will tell you the truth, even when it costs us the sale.
                If something will not pay you back, you will hear it from us
                before you spend a single naira on it.
              </p>
            </div>
          </div>

          <ul className="mt-16 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
            {LEADERSHIP.map((person) => (
              <li key={person.name}>
                <div
                  className="relative overflow-hidden rounded-2xl bg-[#F4F4F2] ring-1 ring-black/[0.06]"
                  style={{ aspectRatio: "3 / 4" }}
                >
                  {person.image ? (
                    <Image
                      src={person.image}
                      alt={`${person.name}, ${person.role}.`}
                      fill
                      sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 300px"
                      className="object-cover object-[50%_18%]"
                    />
                  ) : (
                    <span
                      aria-hidden="true"
                      className="absolute inset-0 flex items-center justify-center text-[3rem] font-semibold tracking-[-0.04em] text-[#0040FF]/40"
                    >
                      {initials(person.name)}
                    </span>
                  )}
                </div>
                <p className="mt-5 text-[1.125rem] font-bold tracking-[-0.02em] text-[#111111]">
                  {person.name}
                </p>
                <p className="mt-0.5 text-[14px] font-medium text-[#0040FF]">
                  {person.role}
                </p>
                {person.bio && (
                  <p className="mt-3 text-[15px] leading-relaxed text-[#5E5E5E]">
                    {person.bio}
                  </p>
                )}
              </li>
            ))}
          </ul>

          <div className="mt-14">
            <ActionLink href="/contact">Talk to us directly</ActionLink>
          </div>
        </Container>
      </Section>

      {/* What we believe */}
      <Section tone="offwhite" labelledBy="beliefs">
        <Container width="default">
          <SectionHeader
            id="beliefs"
            eyebrow="How we build"
            heading="Six principles. No exceptions."
            lede="The world’s greatest technology companies share a few habits. These are ours, applied to a company built in Africa, for Africa."
          />

          <div className="mt-14 grid gap-px overflow-hidden rounded-2xl bg-black/10 sm:grid-cols-2 lg:grid-cols-3">
            {BELIEFS.map((b) => (
              <div key={b.title} className="bg-white p-8">
                <h3 className="text-[1.3rem] font-bold tracking-[-0.025em] text-[#111111]">
                  {b.title}
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-[#5E5E5E]">
                  {b.body}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Where we work */}
      <Section tone="offwhite" labelledBy="reach">
        <Container width="narrow">
          <SectionHeader
            id="reach"
            align="left"
            eyebrow="Where we work"
            heading="Based in Abuja. Working worldwide."
            lede="Our studio is in Gwarinpa. We build for companies in Nigeria, the UK, the United States, the UAE, South Africa and beyond."
            size="lg"
          />
          <div className="mt-10">
            <ActionLink href="/locations">See every market we serve</ActionLink>
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <ClosingCTA
        heading="Tell us what you need."
        lede="One conversation, then a written plan in 48 hours. The plan is yours to keep even if you decide not to work with us."
        primary={{ href: "/start-a-project", label: "Start a project" }}
      />
    </>
  );
}
