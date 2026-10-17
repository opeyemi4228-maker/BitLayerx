import Image from "next/image";
import { pageMetadata } from "@/lib/seo";
import { PageHero, Section, Container, ClosingCTA } from "@/components/ui/primitives";

export const metadata = pageMetadata("/argus");

/**
 * Argus, BitLayerX Intelligence. Launching 2027.
 *
 * A product page, not a site of its own: the same white sections, hairlines
 * and blue as every other page. Three short sections say what it does, who it
 * is for and what it will never compromise on. Nothing here claims customers
 * or results, because there are none to claim before launch.
 */

const STEPS = [
  {
    title: "Connect",
    body: "Brings together the systems an institution already runs. Nothing has to be replaced.",
  },
  {
    title: "Understand",
    body: "Organises that data into one live picture of people, places, assets and events.",
  },
  {
    title: "Decide",
    body: "Gives analysts and leaders the tools, and AI that shows its sources, to choose well.",
  },
  {
    title: "Act",
    body: "Sends decisions back to where work happens, every step approved and recorded.",
  },
];

const SECTORS = [
  "Government",
  "Defence and security",
  "Financial services",
  "Energy and utilities",
  "Manufacturing",
  "Logistics and trade",
  "Health",
  "Investment",
];

const COMMITMENTS = [
  {
    title: "Your data stays home.",
    body: "Argus runs in Nigeria, in your own data centre, or on a fully isolated network. Your keys stay with you.",
  },
  {
    title: "People decide.",
    body: "Decisions about people, money or safety always rest with an accountable person, never with software alone.",
  },
  {
    title: "Everything is on the record.",
    body: "Every search, view and action is logged, so oversight is built in rather than promised.",
  },
];

function Label({ children }) {
  return <p className="text-[14px] font-semibold text-[#0040FF]">{children}</p>;
}

function SectionTitle({ id, children }) {
  return (
    <h2
      id={id}
      className="mt-4 max-w-[22ch] text-[clamp(1.9rem,3.9vw,3.1rem)] font-semibold leading-[1.1] tracking-[-0.035em] text-[#111111]"
    >
      {children}
    </h2>
  );
}

export default function ArgusPage() {
  return (
    <>
      <PageHero
        eyebrow="Argus · BitLayerX Intelligence · Launching 2027"
        before="See everything. Decide in"
        highlight="real time"
        after="."
        lede="Argus is the intelligence platform we are building for governments and critical enterprises: one live picture of everything an institution knows, so its people can act with confidence."
        primary={{ href: "/contact", label: "Join the launch list" }}
        secondary={{ href: "/#products", label: "All our products" }}
      >
        <figure className="mt-[clamp(2.5rem,5vw,4rem)]">
          <div className="flex items-center justify-center rounded-[24px] bg-white px-6 py-[clamp(2.5rem,7vw,5.5rem)] ring-1 ring-black/[0.08]">
            <Image
              src="/images/products/argus-logo.jpg"
              alt="Argus by BitLayerX Technologies"
              width={1024}
              height={370}
              priority
              sizes="(max-width: 768px) 90vw, 620px"
              className="h-auto w-full max-w-[620px]"
            />
          </div>
          <figcaption className="mt-3 text-[12.5px] text-[#5E5E5E]">
            Argus, named for the hundred-eyed guardian of legend who never slept.
          </figcaption>
        </figure>
      </PageHero>

      {/* What it does */}
      <Section tone="offwhite" labelledBy="argus-does">
        <Container width="wide">
          <Label>What Argus does</Label>
          <SectionTitle id="argus-does">
            From scattered data to{" "}
            <span className="text-[#0040FF]">decisive action.</span>
          </SectionTitle>
          <ol className="mt-[clamp(3rem,6vw,4.5rem)] grid gap-x-10 gap-y-12 md:grid-cols-2 lg:grid-cols-4">
            {STEPS.map((s, i) => (
              <li key={s.title} className="border-t border-black/[0.1] pt-6">
                <span className="text-[13px] font-semibold text-[#0040FF]">0{i + 1}</span>
                <h3 className="mt-2 text-[1.25rem] font-semibold tracking-[-0.02em] text-[#111111]">
                  {s.title}
                </h3>
                <p className="mt-3 text-[1.0625rem] leading-relaxed text-[#5E5E5E]">{s.body}</p>
              </li>
            ))}
          </ol>
        </Container>
      </Section>

      {/* Who it is for */}
      <Section tone="offwhite" labelledBy="argus-for">
        <Container width="wide">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
            <div className="lg:col-span-5">
              <Label>Who it is for</Label>
              <SectionTitle id="argus-for">Institutions where decisions cannot wait.</SectionTitle>
            </div>
            <ul className="grid gap-x-10 self-end sm:grid-cols-2 lg:col-span-7">
              {SECTORS.map((s) => (
                <li
                  key={s}
                  className="border-t border-black/[0.1] py-4 text-[1.0625rem] font-medium text-[#111111]"
                >
                  {s}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </Section>

      {/* Commitments */}
      <Section tone="offwhite" labelledBy="argus-trust">
        <Container width="wide">
          <Label>Built on trust</Label>
          <SectionTitle id="argus-trust">Power, with accountability.</SectionTitle>
          <div className="mt-[clamp(3rem,6vw,4.5rem)] grid gap-x-10 gap-y-12 md:grid-cols-3">
            {COMMITMENTS.map((c) => (
              <div key={c.title} className="border-t border-black/[0.1] pt-6">
                <h3 className="text-[1.25rem] font-semibold tracking-[-0.02em] text-[#111111]">
                  {c.title}
                </h3>
                <p className="mt-3 text-[1.0625rem] leading-relaxed text-[#5E5E5E]">{c.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <ClosingCTA
        id="argus-cta"
        heading="Be first to see Argus."
        lede="Argus launches in 2027. Tell us the decision you need to make faster, and we will show you what Argus can do with your data."
        primary={{ href: "/contact", label: "Join the launch list" }}
        secondary={{ href: "/#products", label: "See all our products" }}
      />
    </>
  );
}
