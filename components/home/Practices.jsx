import Link from "next/link";
import { Section, Container, SectionHeader } from "@/components/ui/primitives";

/**
 * Our services.
 *
 * Written in plain language. Every line says what we do and what the client
 * gets, with no jargon and no dashes. Short sentences read faster, and a
 * reader who understands the offer in three seconds is far likelier to act on
 * it than one who has to decode it.
 */

const SERVICES = [
  {
    n: "01",
    title: "Websites",
    body: "We build fast websites that show up on Google and bring you customers. Your team can update the words and pictures without calling us.",
    href: "/services",
  },
  {
    n: "02",
    title: "Apps and software",
    body: "We build web and mobile apps. Logins, payments, dashboards and everything behind them. Built to grow with you.",
    href: "/solutions",
  },
  {
    n: "03",
    title: "Design",
    body: "We design screens that people understand straight away. No training needed, no confusion, no lost customers.",
    href: "/design",
  },
  {
    n: "04",
    title: "Branding",
    body: "We create your logo, colours and look. Then we give you the files and rules so it stays right long after we finish.",
    href: "/design",
  },
  {
    n: "05",
    title: "Video",
    body: "We shoot and edit your adverts and brand films with our own team. You get the full video plus short cuts for every platform.",
    href: "/services",
  },
  {
    n: "06",
    title: "Marketing",
    body: "We bring the right people to your business through Google, social media and email. We measure it in sales, not clicks.",
    href: "/marketing",
  },
];

export default function Practices() {
  return (
    <Section tone="white" labelledBy="services-heading">
      <Container width="default">
        <SectionHeader
          id="services-heading"
          eyebrow="Our services"
          heading="Everything you need, from one team."
          lede="Most companies hire six different suppliers and end up managing all of them. We do all six, so you only manage us."
        />

        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl bg-black/10 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s) => (
            <Link
              key={s.title}
              href={s.href}
              className="group bg-white p-8 transition-colors hover:bg-[#f5f5f7] focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#0040FF]"
            >
              <span className="text-[12px] font-bold tabular-nums tracking-[0.1em] text-[#0040FF]">
                {s.n}
              </span>
              <h3 className="mt-3 flex items-center gap-1.5 text-[1.375rem] font-bold tracking-[-0.025em] text-[#1d1d1f] transition-colors group-hover:text-[#0040FF]">
                {s.title}
                <span
                  aria-hidden="true"
                  className="text-[1.1rem] transition-transform duration-200 group-hover:translate-x-[3px]"
                >
                  ›
                </span>
              </h3>
              <p className="mt-3 text-[15px] leading-relaxed text-[#6e6e73]">
                {s.body}
              </p>
            </Link>
          ))}
        </div>
      </Container>
    </Section>
  );
}
