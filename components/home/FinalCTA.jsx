import Link from "next/link";
import { Section, Container, ActionLink } from "@/components/ui/primitives";

/**
 * The closing ask.
 *
 * Placed after the proof rather than before it, and it names the objection out
 * loud instead of pretending it does not exist. "What if we are not the right
 * fit" is the thought in the reader's head at this exact point on the page, * answering it here is worth more than another testimonial.
 */
export default function FinalCTA() {
  return (
    <Section tone="brand" labelledBy="cta-heading">
      <Container width="narrow" className="text-center">
        <h2
          id="cta-heading"
          className="mx-auto max-w-[17ch] text-[clamp(2.2rem,5.5vw,4rem)] font-extrabold leading-[1.02] tracking-[-0.038em]"
        >
          Tell us what you are building.
        </h2>

        <p className="mx-auto mt-6 max-w-[52ch] text-[clamp(1.05rem,1.7vw,1.3rem)] leading-[1.5] text-white/75">
          One session, then a written plan with scope, timeline and price within
          48 hours. If we are the wrong fit, we will say so on the first call
          and point you at someone better.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-8">
          <Link
            href="/start-a-project"
            className="inline-flex items-center justify-center rounded-full bg-white px-8 py-[0.95rem] text-[1.0625rem] font-medium text-[#1d1d1f] transition-colors hover:bg-white/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B0B0F]"
          >
            Start a project
          </Link>
          <ActionLink href="/contact" tone="light">
            Book a call instead
          </ActionLink>
        </div>

        <p className="mt-10 text-[14.5px] text-white/55">
          Abuja · Lagos · London · Dubai · Johannesburg · New York, {" "}
          <Link
            href="/locations"
            className="underline underline-offset-4 hover:text-white"
          >
            and everywhere else we work
          </Link>
        </p>
      </Container>
    </Section>
  );
}
