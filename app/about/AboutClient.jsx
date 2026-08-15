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
    n: "01",
    title: "Small is the feature",
    body: "The person who plans your project is the person who builds it. Nothing gets lost being passed between departments, because there are no departments.",
  },
  {
    n: "02",
    title: "You own everything",
    body: "Your code, your accounts, your domain, all in your name from day one. If you want to move to another team next year, you can. We build for that.",
  },
  {
    n: "03",
    title: "We will say no",
    body: "If a thing you want will not work, we tell you before you pay for it. Saying yes to everything is how agencies keep clients and lose them.",
  },
  {
    n: "04",
    title: "Plans before code",
    body: "Big decisions get made on paper while they are still cheap to change. It is much more expensive to discover a problem halfway through building.",
  },
  {
    n: "05",
    title: "You can see the work",
    body: "A link you can open any time, and one short written update every day. You should never have to ask how your project is going.",
  },
  {
    n: "06",
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
                className="relative overflow-hidden rounded-2xl bg-[#fbfbfd]"
                style={{ aspectRatio: "3 / 4" }}
              >
                <Image
                  src="/images/founder-opeyemi.jpg"
                  alt="Opeyemi T. Ojurongbe, Founder and Chief Executive of BitLayerX."
                  fill
                  sizes="(max-width: 1024px) 90vw, 400px"
                  className="object-cover object-[50%_18%]"
                />
              </div>
              <figcaption className="mt-5 border-l-2 border-[#0040FF] pl-4">
                <span className="block text-[1.125rem] font-bold tracking-[-0.02em] text-[#0B0B0F]">
                  Opeyemi T. Ojurongbe
                </span>
                <span className="mt-0.5 block text-[14px] text-[#6e6e73]">
                  Founder &amp; Chief Executive
                </span>
              </figcaption>
            </figure>

            <div>
              <p className="text-[12px] font-bold uppercase tracking-[0.18em] text-[#0040FF]">
                Who runs it
              </p>
              <Heading as="h2" size="xl" id="founder-about" className="mt-4">
                One name on the work.
              </Heading>
              <div className="mt-7 space-y-5 text-[1.0625rem] leading-relaxed text-[#6e6e73]">
                <p>
                  I started BitLayerX because too many businesses were paying
                  good money for websites and software that never worked
                  properly, and had nobody to hold responsible when it did not.
                </p>
                <p>
                  We stayed small on purpose. It means decisions take hours instead of weeks, and it means the team can afford to tell a client honestly when something is not worth building.
                </p>
                <p className="text-[#0B0B0F]">
                  If something goes wrong on your project, you will not be
                  passed to an account manager. You will speak to me.
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
              <div key={b.n} className="bg-[#0B0B0F] p-8">
                <span className="text-[12px] font-bold tabular-nums tracking-[0.14em] text-[#5C86FF]">
                  {b.n}
                </span>
                <h3 className="mt-3 text-[1.3rem] font-bold tracking-[-0.025em] text-white">
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
