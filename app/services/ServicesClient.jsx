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
 * Services.
 *
 * Plain language throughout. Each service says what we do, then lists exactly
 * what you get. Vague deliverables are the main reason buyers stall on agency
 * proposals, so the list is the part doing the persuading.
 */

const SERVICES = [
  {
    n: "01",
    title: "Websites",
    lede: "A site that loads fast and brings you customers.",
    body: "We build websites that show up on Google, work properly on a phone, and load quickly even on a poor connection. Your team can change the words and pictures without calling us.",
    gets: [
      "A site designed around what your customers came to do",
      "Set up so Google can find and rank it",
      "Fast on mobile data and older phones",
      "A simple way for your team to edit it",
    ],
    href: "/packages",
  },
  {
    n: "02",
    title: "Apps and software",
    lede: "The tool your business actually runs on.",
    body: "Logins, payments, dashboards, bookings, stock, reporting. We build web and mobile apps that handle real work, and we build them so another team could take over if you ever wanted that.",
    gets: [
      "Web apps and mobile apps",
      "Payments, accounts and admin dashboards",
      "Links to the other systems you already use",
      "The code and accounts in your name from day one",
    ],
    href: "/solutions",
  },
  {
    n: "03",
    title: "Design",
    lede: "Screens people understand without being taught.",
    body: "We design what your customers see and use. Our designers and engineers work together from the start, so what gets designed is what actually gets built.",
    gets: [
      "The full journey mapped out before we design it",
      "Every screen designed, including the awkward ones",
      "A set of reusable parts so it stays consistent",
      "Working prototypes for anything we are unsure about",
    ],
    href: "/design",
  },
  {
    n: "04",
    title: "Branding",
    lede: "A look you can keep using after we finish.",
    body: "Your name, logo, colours and typefaces, plus the rules for using them. Done properly, your team can apply the brand themselves without it drifting.",
    gets: [
      "Naming and the words you use about yourself",
      "Logo, colours, typefaces and image style",
      "A brand guide your team can actually follow",
      "All the files, in every format you need",
    ],
    href: "/design",
  },
  {
    n: "05",
    title: "Video",
    lede: "Adverts and brand films, shot by our own team.",
    body: "We write, shoot and edit in house. Because the same people built your product, the film matches the thing it is selling.",
    gets: [
      "The idea, the script and the shot plan",
      "Filming, lighting and sound",
      "Editing, colour, motion graphics and audio",
      "Short versions cut for every platform you post on",
    ],
    href: "/marketing",
  },
  {
    n: "06",
    title: "Marketing",
    lede: "Customers, not just visitors.",
    body: "We bring the right people to your business through Google, paid ads, social media and email. We report on sales and enquiries, not on clicks that lead nowhere.",
    gets: [
      "Getting you found on Google",
      "Paid adverts, managed properly",
      "Email that brings people back",
      "Reporting tied to real sales",
    ],
    href: "/marketing",
  },
];

const WAYS = [
  {
    title: "One project",
    body: "A fixed job, a fixed price. Best when you know what you want and need to know exactly what it costs.",
    fit: "A website, a rebrand, a first version of an app, a film.",
  },
  {
    title: "Monthly",
    body: "A set amount of our team every month, spent on whatever matters most that month. Best when the work keeps going.",
    fit: "Ongoing marketing, improving a product, keeping things running.",
    featured: true,
  },
  {
    title: "Full partner",
    body: "We act as your whole digital team. Planning, building and marketing, with one named person leading it.",
    fit: "Companies with no in house team who are growing fast.",
  },
];

export default function ServicesClient() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        before="Everything digital, from"
        highlight="one"
        after="team."
        lede="Most companies hire six different suppliers and end up managing all of them. We do all six, so you only manage us."
        primary={{ href: "/start-a-project", label: "Start a project" }}
        secondary={{ href: "/packages", label: "See prices" }}
      />

      {/* Each service */}
      {SERVICES.map((s, i) => (
        <Section
          key={s.title}
          tone={i % 2 === 0 ? "white" : "offwhite"}
          labelledBy={`service-${s.n}`}
        >
          <Container width="default">
            <div className="grid gap-10 lg:grid-cols-2 lg:gap-20">
              <div>
                <span className="text-[12px] font-bold tabular-nums tracking-[0.14em] text-[#0040FF]">
                  {s.n}
                </span>
                <Heading as="h2" size="xl" id={`service-${s.n}`} className="mt-4">
                  {s.title}
                </Heading>
                <p className="mt-5 text-[clamp(1.15rem,1.9vw,1.4rem)] font-medium leading-[1.4] text-[#0B0B0F]">
                  {s.lede}
                </p>
                <p className="mt-4 max-w-[52ch] text-[1.0625rem] leading-relaxed text-[#6e6e73]">
                  {s.body}
                </p>
                <div className="mt-7">
                  <ActionLink href={s.href}>See more</ActionLink>
                </div>
              </div>

              <div className="lg:pt-14">
                <h3 className="border-b-2 border-[#0B0B0F] pb-3 text-[12px] font-bold uppercase tracking-[0.16em] text-[#0B0B0F]">
                  What you get
                </h3>
                <ul className="mt-6 space-y-4">
                  {s.gets.map((g) => (
                    <li key={g} className="flex gap-3">
                      <span
                        aria-hidden="true"
                        className="mt-[0.45rem] h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#0040FF]"
                      />
                      <span className="text-[1.0625rem] leading-relaxed text-[#0B0B0F]">
                        {g}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Container>
        </Section>
      ))}

      {/* Ways to work together */}
      <Section tone="dark" labelledBy="ways">
        <Container width="default">
          <SectionHeader
            id="ways"
            tone="light"
            eyebrow="Working together"
            heading="Three ways to hire us."
            lede="Which one is right depends on whether the work has an end. We will tell you honestly which your project is."
          />

          <div className="mt-14 grid gap-px overflow-hidden rounded-2xl bg-white/10 lg:grid-cols-3">
            {WAYS.map((w) => (
              <div key={w.title} className="bg-[#0B0B0F] p-9">
                {w.featured && (
                  <span className="mb-4 inline-block rounded-full bg-[#0040FF] px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-white">
                    Most common
                  </span>
                )}
                <h3 className="text-[1.5rem] font-bold tracking-[-0.025em] text-white">
                  {w.title}
                </h3>
                <p className="mt-4 text-[1.0625rem] leading-relaxed text-white/65">
                  {w.body}
                </p>
                <p className="mt-6 border-t border-white/10 pt-5 text-[14.5px] text-white/45">
                  <span className="font-semibold text-white/70">Good for:</span>{" "}
                  {w.fit}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <Section tone="brand">
        <Container width="narrow" className="text-center">
          <Heading as="h2" size="xl" className="mx-auto max-w-[18ch]">
            Not sure which you need?
          </Heading>
          <Lede tone="light" className="mx-auto mt-6 max-w-[48ch]">
            That is normal, and it is what the first conversation is for. Tell
            us the problem and we will tell you what it actually takes to fix
            it, even if that is less than you expected.
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
