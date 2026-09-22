import Link from "next/link";
import { Section, Container, SectionHeader } from "@/components/ui/primitives";

/**
 * How the work runs.
 *
 * This section exists for one psychological reason: the single largest barrier
 * to commissioning agency work is not price, it is fear of the unknown.
 * "Will I be able to see what is happening, and can I get out if it goes
 * wrong?" Every step below answers that, and the last one answers it hardest.
 */

const STEPS = [
  { n: "1", title: "A 45-minute talk", body: "About your business, not about us." },
  { n: "2", title: "A written plan in 48 hours", body: "Scope, timeline and price. Yours to keep." },
  { n: "3", title: "Decisions on paper first", body: "Settled while they are still cheap to change." },
  { n: "4", title: "A live link and daily updates", body: "Open the work in progress any time." },
  { n: "5", title: "You own everything", body: "Code, accounts and domain, in your name." },
];

export default function Method() {
  return (
    <Section id="how-it-runs" tone="offwhite" labelledBy="method-heading" className="scroll-mt-24">
      <Container width="wide">
        <SectionHeader
          align="left"
          id="method-heading"
          eyebrow="How it runs"
          heading="You will always know where it stands."
          lede="Five steps, each one visible to you."
        />

        <ol className="mt-14 grid gap-x-8 gap-y-10 border-t border-black/10 pt-10 sm:grid-cols-2 lg:grid-cols-5">
          {STEPS.map((s) => (
            <li key={s.n}>
              <span className="text-[13px] font-semibold tabular-nums text-[#0040FF]">
                {s.n}
              </span>
              <h3 className="mt-3 text-[1.2rem] font-bold leading-snug tracking-[-0.02em] text-[#111111]">
                {s.title}
              </h3>
              <p className="mt-2 text-[15px] leading-relaxed text-[#5E5E5E]">
                {s.body}
              </p>
            </li>
          ))}
        </ol>

        <div className="mt-12">
          <Link
            href="/start-a-project"
            className="inline-flex items-center justify-center rounded-full bg-[#0040FF] px-8 py-[0.9rem] text-[1.0625rem] font-medium text-white transition-colors hover:bg-black"
          >
            Book the first session
          </Link>
          <p className="mt-4 text-[14px] text-[#5E5E5E]">
            No retainer to see the plan. No obligation after it.
          </p>
        </div>
      </Container>
    </Section>
  );
}
