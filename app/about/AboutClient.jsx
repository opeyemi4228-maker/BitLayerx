import Image from "next/image";
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

const BELIEFS = [
  {
    title: "Small is the feature",
    body: "The person who plans your project is the person who builds it. Nothing gets lost being passed between departments, because there are no departments.",
  },
  {
    title: "You own everything",
    body: "Your code, your accounts, your domain, all in your name from day one. If you want to move to another team next year, you can. We build for that.",
  },
  {
    title: "We will say no",
    body: "If a thing you want will not work, we tell you before you pay for it. Saying yes to everything is how agencies keep clients and lose them.",
  },
  {
    title: "Plans before code",
    body: "Big decisions get made on paper while they are still cheap to change. It is much more expensive to discover a problem halfway through building.",
  },
  {
    title: "You can see the work",
    body: "A link you can open any time, and one short written update every day. You should never have to ask how your project is going.",
  },
  {
    title: "Built to keep working",
    body: "Fast on a poor connection, on an old phone, in a place with bad signal. If it works there it works anywhere.",
  },
];

export default function AboutClient() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        before="A small team that"
        highlight="finishes"
        after="things."
        lede="We build websites, apps, brands and marketing for companies in Nigeria and around the world. One team, one contract, no handing you between suppliers."
        primary={{ href: "/start-a-project", label: "Start a project" }}
        secondary={{ href: "/portfolio", label: "See what we have built" }}
      />

      {/* Founder */}
      <Section tone="white" labelledBy="founder-about">
        <Container width="default">
          <div className="grid items-center gap-12 lg:grid-cols-[0.8fr_1fr] lg:gap-20">
            <figure className="mx-auto w-full max-w-[400px] lg:mx-0">
              <div
                className="relative overflow-hidden rounded-2xl bg-white"
                style={{ aspectRatio: "3 / 4" }}
              >
                <Image
                  src="/images/founder-opeyemi.jpg"
                  alt="Opeyemi T. Ojurongbe, Team Lead at BitLayerX."
                  fill
                  sizes="(max-width: 1024px) 90vw, 400px"
                  className="object-cover object-[50%_18%]"
                />
              </div>
              <figcaption className="mt-5 border-l-2 border-[#0040FF] pl-4">
                <span className="block text-[1.125rem] font-bold tracking-[-0.02em] text-[#1d1d1f]">
                  Opeyemi T. Ojurongbe
                </span>
                <span className="mt-0.5 block text-[14px] text-[#6e6e73]">
                  Team Lead
                </span>
              </figcaption>
            </figure>

            <div>
              <p className="text-[12px] font-bold uppercase tracking-[0.18em] text-[#0040FF]">
                The team
              </p>
              <Heading as="h2" size="xl" id="founder-about" className="mt-4">
                You will meet everyone who touches your project.
              </Heading>
              <div className="mt-7 space-y-5 text-[1.0625rem] leading-relaxed text-[#6e6e73]">
                <p>
                  BitLayerX started because too many businesses here were paying
                  good money for websites and software that were never finished
                  properly, and had nobody to call when they broke.
                </p>
                <p>
                  We are a small team in Gwarinpa, Abuja, covering design,
                  engineering, brand, film and marketing between us. Small is a
                  decision rather than a stage we are trying to grow out of. It
                  is what keeps the people who scoped your job on the job.
                </p>
                <p>
                  Opeyemi leads the team and sits on every project, so
                  accountability has a name rather than a department.
                </p>
                <p className="text-[#1d1d1f]">
                  We will also say no. If a piece of work will not earn back
                  what it costs you, we would rather lose that line on the
                  invoice than watch you regret it.
                </p>
              </div>
              <div className="mt-9">
                <ActionLink href="/contact">Talk to us directly</ActionLink>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* What we believe */}
      <Section tone="dark" labelledBy="beliefs">
        <Container width="default">
          <SectionHeader
            id="beliefs"
            tone="light"
            eyebrow="How we work"
            heading="Six things we do differently."
            lede="None of these are slogans. Each one changes something about how your project actually runs."
          />

          <div className="mt-14 grid gap-px overflow-hidden rounded-2xl bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
            {BELIEFS.map((b) => (
              <div key={b.title} className="bg-black p-8">
                <h3 className="text-[1.3rem] font-bold tracking-[-0.025em] text-white">
                  {b.title}
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-white/60">
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
      <Section tone="brand">
        <Container width="narrow" className="text-center">
          <Heading as="h2" size="xl" className="mx-auto max-w-[16ch]">
            Tell us what you need.
          </Heading>
          <Lede tone="light" className="mx-auto mt-6 max-w-[48ch]">
            One conversation, then a written plan in 48 hours. The plan is yours
            to keep even if you decide not to work with us.
          </Lede>
          <div className="mt-10">
            <Link
              href="/start-a-project"
              className="inline-flex items-center justify-center rounded-full bg-white px-8 py-[0.95rem] text-[1.0625rem] font-medium text-[#1d1d1f] transition-colors hover:bg-white/90"
            >
              Start a project
            </Link>
          </div>
        </Container>
      </Section>
    </>
  );
}
