import Image from "next/image";
import Link from "next/link";
import { Section, Container, ActionLink } from "@/components/ui/primitives";

/**
 * The founder.
 *
 * A named, photographed person is the single strongest trust signal a small
 * firm has, and it is the one most agencies throw away by hiding behind "we".
 * A buyer deciding whether to send money to a company they found online is
 * really asking "who is accountable if this goes wrong", so the answer is a
 * face, a name, and a direct line, stated plainly.
 */
export default function Founder() {
  return (
    <Section tone="white" labelledBy="team-heading">
      <Container width="default">
        <div className="grid items-center gap-12 lg:grid-cols-[0.85fr_1fr] lg:gap-20">
          {/* Portrait.

              The caption sits below the frame rather than floating over the
              photograph. Overlaid on the image it fought the background for
              contrast and never reliably won, and a name is the one thing on
              this section that has to be readable every time. */}
          <figure className="mx-auto w-full max-w-[420px] lg:mx-0">
            <div
              className="relative overflow-hidden rounded-2xl bg-white"
              style={{ aspectRatio: "3 / 4" }}
            >
              <Image
                src="/images/founder-opeyemi.jpg"
                alt="Opeyemi T. Ojurongbe, Team Lead at BitLayerX."
                fill
                sizes="(max-width: 1024px) 90vw, 420px"
                className="object-cover object-[50%_18%]"
                priority
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

          {/* Statement */}
          <div>
            <p className="text-[12px] font-bold uppercase tracking-[0.18em] text-[#0040FF]">
              The team
            </p>

            <h2
              id="team-heading"
              className="mt-4 text-[clamp(2rem,4.4vw,3.4rem)] font-extrabold leading-[1.05] tracking-[-0.035em] text-[#1d1d1f]"
            >
              Small enough that you meet the whole team.
            </h2>

            {/* Framed around the team, not one person.
                Earlier drafts were written in the first person singular, which
                answers one fear and creates another. A buyer commissioning
                something business critical is afraid of being passed around
                with nobody accountable, and equally afraid of a supplier who is
                really one person who might disappear. "I do it all" fixes the
                first and makes the second worse. A named lead inside a real
                team answers both at once. */}
            <div className="mt-7 space-y-5 text-[1.0625rem] leading-relaxed text-[#6e6e73]">
              <p>
                We build from a studio in Gwarinpa, Abuja. The same team covers
                the design, the engineering and the marketing, so nothing falls
                into the gap between two suppliers who have never spoken to each
                other.
              </p>
              <p>
                Opeyemi leads the team and stays on every project, so there is
                always one person who can answer for the whole of it rather than
                for one slice. You are never handed to an account manager who
                was not in the room.
              </p>
              <p>
                We are straight about capacity. When we are full, we say we are
                full. And when something you have asked for will not earn back
                what it costs you, we say so before you pay for it.
              </p>
              <p className="text-[#1d1d1f]">
                Projects run long enough that something eventually goes wrong.
                When it does, you get a person on the phone, not a ticket
                number.
              </p>
            </div>

            <div className="mt-9 flex flex-wrap items-center gap-x-8 gap-y-4">
              <Link
                href="/start-a-project"
                className="inline-flex items-center justify-center rounded-full bg-[#0040FF] px-7 py-[0.85rem] text-[1.0625rem] font-medium text-white transition-colors hover:bg-black"
              >
                Start a project
              </Link>
              <ActionLink href="/about">More about the team</ActionLink>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
