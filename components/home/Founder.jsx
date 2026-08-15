import Image from "next/image";
import Link from "next/link";
import { Section, Container, ActionLink } from "@/components/ui/primitives";

/**
 * The founder.
 *
 * A named, photographed person is the single strongest trust signal a small
 * firm has, and it is the one most agencies throw away by hiding behind "we".
 * A buyer deciding whether to send money to a company they found online is
 * really asking "who is accountable if this goes wrong"  -  so the answer is a
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
              contrast and never reliably won  -  and a name is the one thing on
              this section that has to be readable every time. */}
          <figure className="mx-auto w-full max-w-[420px] lg:mx-0">
            <div
              className="relative overflow-hidden rounded-2xl bg-[#fbfbfd]"
              style={{ aspectRatio: "3 / 4" }}
            >
              <Image
                src="/images/founder-opeyemi.jpg"
                alt="Opeyemi T. Ojurongbe, Founder and Chief Executive of BitLayerX."
                fill
                sizes="(max-width: 1024px) 90vw, 420px"
                className="object-cover object-[50%_18%]"
                priority
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

          {/* Statement */}
          <div>
            <p className="text-[12px] font-bold uppercase tracking-[0.18em] text-[#0040FF]">
              Who you are hiring
            </p>

            <h2
              id="founder-heading"
              className="mt-4 text-[clamp(2rem,4.4vw,3.4rem)] font-extrabold leading-[1.05] tracking-[-0.035em] text-[#0B0B0F]"
            >
              You will know exactly who is accountable.
            </h2>

            <div className="mt-7 space-y-5 text-[1.0625rem] leading-relaxed text-[#6e6e73]">
              <p>
                BitLayerX is not a faceless agency with a stock photo of a team
                that does not exist. I founded it, I am in the work, and my name
                is on whether it goes well.
              </p>
              <p>
                We are deliberately small. Smallness is why the person who
                scoped your project is the person who builds it, why decisions
                take hours rather than weeks, and why we can afford to tell you
                honestly when a piece of work is not worth doing.
              </p>
              <p className="text-[#0B0B0F]">
                If something goes wrong on your project, you will not be routed
                through an account manager. You will speak to me.
              </p>
            </div>

            <div className="mt-9 flex flex-wrap items-center gap-x-8 gap-y-4">
              <Link
                href="/start-a-project"
                className="inline-flex items-center justify-center rounded-full bg-[#0040FF] px-7 py-[0.85rem] text-[1.0625rem] font-medium text-white transition-colors hover:bg-[#0B0B0F]"
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
