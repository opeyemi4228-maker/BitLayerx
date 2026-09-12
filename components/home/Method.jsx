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
  {
    n: "1",
    title: "We talk for 45 minutes",
    body: "We spend the time on your business, not on slides about us. Bring the problem you think cannot be solved. That is usually the useful part.",
  },
  {
    n: "2",
    title: "You get a written plan in 48 hours",
    body: "What we will build, in what order, how long it takes and what it costs. The plan is yours to keep even if you hire someone else.",
  },
  {
    n: "3",
    title: "We plan on paper before we build",
    body: "Big decisions get made while they are still cheap to change. We do not write code to answer a question a sketch can settle.",
  },
  {
    n: "4",
    title: "You get a link and a daily update",
    body: "You can open the work in progress any time. We send one short written update every day, so you never have to ask how it is going.",
  },
  {
    n: "5",
    title: "You own everything at the end",
    body: "The code, the accounts and the domain are in your name from day one. If you want to bring it in house later, that is fine by us.",
  },
];

export default function Method() {
  return (
    <Section tone="offwhite" labelledBy="method-heading">
      <Container width="default">
        <SectionHeader
          align="left"
          id="method-heading"
          eyebrow="How it runs"
          heading="You will always know where it stands."
          lede="Agency work goes wrong in the dark. So the process is built to make the current state visible at every point, including the parts that are behind."
        />

        <ol className="mt-14 max-w-[840px]">
          {STEPS.map((s, i) => (
            <li
              key={s.n}
              className={`grid gap-3 py-8 sm:grid-cols-[90px_1fr] sm:gap-10 ${
                i < STEPS.length - 1 ? "border-b border-black/10" : ""
              }`}
            >
              <span className="text-[13px] font-semibold tabular-nums text-[#6e6e73] sm:pt-2">
                {s.n}
              </span>
              <div>
                <h3 className="text-[clamp(1.25rem,2vw,1.6rem)] font-bold tracking-[-0.025em] text-[#1d1d1f]">
                  {s.title}
                </h3>
                <p className="mt-2.5 max-w-[58ch] text-[1.0625rem] leading-relaxed text-[#6e6e73]">
                  {s.body}
                </p>
              </div>
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
          <p className="mt-4 text-[14px] text-[#6e6e73]">
            No retainer to see the plan. No obligation after it.
          </p>
        </div>
      </Container>
    </Section>
  );
}
