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
    <Section tone="white" labelledBy="founder-heading">
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
              Who you are hiring
            </p>

            <h2
              id="founder-heading"
              className="mt-4 text-[clamp(2rem,4.4vw,3.4rem)] font-extrabold leading-[1.05] tracking-[-0.035em] text-[#1d1d1f]"
            >
              You will know who is actually doing the work.
            </h2>

            {/* Written to be read aloud.
                The previous version leaned on balanced three part sentences and
                contrast pairs, which is what makes copy sound generated rather
                than spoken. Real speech is uneven: it names places, admits a
                cost, and stops when the point is made. */}
            <div className="mt-7 space-y-5 text-[1.0625rem] leading-relaxed text-[#6e6e73]">
              <p>
                I am Opeyemi, and I run the team here.
              </p>
              <p>
                We work out of Gwarinpa, in Abuja. We have stayed small because
                I want to be in the projects myself, not managing people who
                are. So whoever prices your job is one of the people who builds
                it, and you are never handed to a department you have not met.
              </p>
              <p>
                That costs us work sometimes. When we are full, we say we are
                full. And if you ask us for something that will not earn back
                what it costs you, I will tell you before you pay for it, not
                after.
              </p>
              <p className="text-[#1d1d1f]">
                On a project of any length something eventually goes wrong.
                When it does, you ring me.
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
