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
      <Container width="wide">
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,420px)_minmax(0,600px)] lg:justify-center lg:gap-16 xl:gap-20">
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
                src="/images/leadership/opeyemi-ojurongbe.jpg"
                alt="Opeyemi T. Ojurongbe, CEO of BitLayerX Technologies."
                fill
                sizes="(max-width: 1024px) 90vw, 420px"
                className="object-cover object-[50%_18%]"
                priority
              />
            </div>

            <figcaption className="mt-5 border-l-2 border-[#0040FF] pl-4">
              <span className="block text-[1.125rem] font-bold tracking-[-0.02em] text-[#111111]">
                Opeyemi T. Ojurongbe
              </span>
              <span className="mt-0.5 block text-[14px] text-[#5E5E5E]">
                CEO, BitLayerX Technologies
              </span>
            </figcaption>
          </figure>

          {/* Statement */}
          <div>
            <p className="text-[14px] font-semibold text-[#0040FF]">
              How we lead
            </p>

            <h2
              id="team-heading"
              className="mt-4 text-[clamp(2rem,4.4vw,3.4rem)] font-semibold leading-[1.05] tracking-[-0.035em] text-[#111111]"
            >
              Deep expertise. Close to the details.
            </h2>

            {/* Framed around the team, not one person.
                Earlier drafts were written in the first person singular, which
                answers one fear and creates another. A buyer commissioning
                something business critical is afraid of being passed around
                with nobody accountable, and equally afraid of a supplier who is
                really one person who might disappear. "I do it all" fixes the
                first and makes the second worse. A named lead inside a real
                team answers both at once. */}
            <div className="mt-7 space-y-5 text-[1.0625rem] leading-relaxed text-[#5E5E5E]">
              <p>
                A team in Gwarinpa, Abuja, organised by discipline, with one
                accountable owner for every product. Opeyemi leads the company
                and stays close to the work.
              </p>
              <p className="text-[#111111]">
                Our quality promise: nothing ships until it works on a basic
                phone, on a weak network, for a first-time user.
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
