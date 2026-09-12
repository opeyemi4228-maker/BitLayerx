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
    title: "Websites",
    body: "We build fast websites that show up on Google and bring you customers. Your team can update the words and pictures without calling us.",
    href: "/services",
  },
  {
    title: "Apps and software",
    body: "We build web and mobile apps. Logins, payments, dashboards and everything behind them. Built to grow with you.",
    href: "/solutions",
  },
  {
    title: "Design",
    body: "We design screens that people understand straight away. No training needed, no confusion, no lost customers.",
    href: "/design",
  },
  {
    title: "Branding",
    body: "We create your logo, colours and look. Then we give you the files and rules so it stays right long after we finish.",
    href: "/design",
  },
  {
    title: "Video",
    body: "We shoot and edit your adverts and brand films with our own team. You get the full video plus short cuts for every platform.",
    href: "/services",
  },
  {
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
          align="left"
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
              className="group bg-white p-8 transition-colors hover:bg-black/[0.02] focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#0040FF]"
            >
              <h3 className="flex items-center gap-1.5 text-[1.375rem] font-bold tracking-[-0.025em] text-[#1d1d1f] transition-colors group-hover:text-[#0040FF]">
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
