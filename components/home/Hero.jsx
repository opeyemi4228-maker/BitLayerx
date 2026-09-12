import Image from "next/image";
import Link from "next/link";
import { Container, ActionLink } from "@/components/ui/primitives";

/**
 * The hero.
 *
 * Apple's opening move is always the same: one enormous centred headline, one
 * quiet line of support, two links, never two competing buttons, and a great
 * deal of empty space. The restraint is the point. A hero that says three
 * things says nothing, because the visitor has to choose what to read and
 * mostly chooses to leave.
 *
 * The headline states what we make. The subhead states the risk we remove.
 * That pairing is what converts: capability alone is a claim, and removing the
 * buyer's risk is what makes the claim safe to act on.
 */
export default function Hero() {
  // Top padding is deliberately small. The navbar spacer already reserves the
  // bar's full height above this, so a large pt here stacks on top of it and
  // opens a dead band between the nav and the headline.
  return (
    <section className="relative overflow-hidden bg-white pt-[clamp(1.75rem,3.5vw,3rem)] pb-[clamp(3.5rem,7vw,6rem)]">
      {/* A single soft light source, well behind the type. Apple uses gradient
          as atmosphere, never as decoration competing with the words. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-[70%]"
        style={{
          background:
            "radial-gradient(ellipse 90% 60% at 50% -10%, rgba(0,64,255,0.055), transparent 70%)",
        }}
      />

      <Container width="narrow" className="relative text-center">
        <p className="text-[13px] font-semibold tracking-[0.02em] text-[#0040FF]">
          Websites · Apps · Design · Branding · Video · Marketing
        </p>

        {/* "Build" carries the whole promise, so it is set larger, heavier and
            in the brand blue. One emphasised word reads as confidence; two or
            more reads as shouting and the emphasis stops meaning anything. */}
        <h1 className="mx-auto mt-6 max-w-[14ch] text-[clamp(3rem,8.6vw,6.4rem)] font-extrabold leading-[0.94] tracking-[-0.045em] text-[#1d1d1f]">
          We{" "}
          <span className="text-[1.14em] font-black text-[#0040FF] tracking-[-0.05em]">
            build
          </span>{" "}
          what your business runs on.
        </h1>

        <p className="mx-auto mt-7 max-w-[46ch] text-[clamp(1.1rem,1.9vw,1.5rem)] font-normal leading-[1.45] text-[#6e6e73]">
          One team for everything digital. Tell us what you need and we will
          send you a written plan in 48 hours.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-8">
          <Link
            href="/start-a-project"
            className="inline-flex items-center justify-center rounded-full bg-[#0040FF] px-8 py-[0.95rem] text-[1.0625rem] font-medium text-white transition-colors hover:bg-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0040FF] focus-visible:ring-offset-2"
          >
            Start a project
          </Link>
          <ActionLink href="/portfolio">See work that is live</ActionLink>
        </div>

        {/* Visual band.

            Three real client sites, not an abstraction of one. The previous
            version here drew grey rectangles: honest about being a drawing,
            but it asked a first-time visitor to take the quality of the work
            on trust at the exact moment they are deciding whether to.

            These are screenshots of live deployments. The centre one leads
            because it is the strongest piece; the two behind it are angled
            back so the eye reads them as depth rather than as three equal
            things competing for attention. */}
        <div className="relative mx-auto mt-16 min-h-[210px] max-w-[940px] sm:min-h-[330px]">
          {/* Behind, left */}
          <figure className="absolute bottom-0 left-0 hidden w-[32%] -rotate-[7deg] sm:block">
            <div className="overflow-hidden rounded-lg bg-white shadow-[0_18px_45px_-20px_rgba(0,0,0,0.4)] ring-1 ring-black/[0.07]">
              <Image
                src="/images/work/orrea.jpg"
                alt="Orréa Bread House, an artisan bakery website and ordering experience built by BitLayerX."
                width={1200}
                height={633}
                sizes="(max-width: 640px) 0px, 300px"
                className="block h-auto w-full"
              />
            </div>
          </figure>

          {/* Behind, right */}
          <figure className="absolute bottom-0 right-0 hidden w-[32%] rotate-[7deg] sm:block">
            <div className="overflow-hidden rounded-lg bg-white shadow-[0_18px_45px_-20px_rgba(0,0,0,0.4)] ring-1 ring-black/[0.07]">
              <Image
                src="/images/work/gcsa-consulting.jpg"
                alt="GCSA Consulting, a business consultancy website built by BitLayerX."
                width={1200}
                height={633}
                sizes="(max-width: 640px) 0px, 300px"
                className="block h-auto w-full"
              />
            </div>
          </figure>

          {/* Front, centre */}
          <figure className="relative z-10 mx-auto w-full sm:w-[64%]">
            <div className="overflow-hidden rounded-xl bg-white shadow-[0_30px_80px_-26px_rgba(0,0,0,0.45)] ring-1 ring-black/[0.09]">
              {/* Browser chrome: the cue that says "this is a real product",
                  and it frames the screenshot so it reads as a window rather
                  than a floating picture. */}
              <div className="flex items-center gap-1.5 border-b border-black/[0.06] bg-white px-3 py-2">
                <span aria-hidden="true" className="h-2 w-2 rounded-full bg-black/15" />
                <span aria-hidden="true" className="h-2 w-2 rounded-full bg-black/15" />
                <span aria-hidden="true" className="h-2 w-2 rounded-full bg-black/15" />
                <span className="mx-auto truncate rounded bg-black/[0.04] px-2.5 py-0.5 text-[10.5px] font-medium text-[#6e6e73]">
                  shop-tznuit-ebon.vercel.app
                </span>
              </div>
              <Image
                src="/images/work/shop-tznuit.jpg"
                alt="Tznuit, a fashion house storefront built by BitLayerX."
                width={1200}
                height={633}
                priority
                sizes="(max-width: 640px) 100vw, 600px"
                className="block h-auto w-full"
              />
            </div>
          </figure>
        </div>

        {/* Naming the clients turns a picture into a checkable claim. */}
        <p className="mt-8 text-[13px] text-[#6e6e73]">
          Live work for Tznuit, Orréa and GCSA Consulting.{" "}
          <Link
            href="/portfolio"
            className="font-medium text-[#0040FF] underline underline-offset-4 hover:text-black"
          >
            Open any of them
          </Link>
          .
        </p>

        {/* Proof, stated plainly and immediately under the ask. Numbers here
            are facts about how we work, not results we would need a client's
            permission to publish. */}
        <dl className="mx-auto mt-16 grid max-w-[720px] grid-cols-2 gap-x-6 gap-y-9 sm:grid-cols-4">
          {[
            { v: "48hr", l: "To get your plan" },
            { v: "6", l: "Services, one team" },
            { v: "13", l: "Cities we serve" },
            { v: "100%", l: "You own everything" },
          ].map((s) => (
            <div key={s.l}>
              <dt className="sr-only">{s.l}</dt>
              <dd>
                <span className="block text-[clamp(1.6rem,3vw,2.2rem)] font-extrabold tracking-[-0.03em] text-[#1d1d1f]">
                  {s.v}
                </span>
                <span className="mt-1 block text-[13px] leading-snug text-[#6e6e73]">
                  {s.l}
                </span>
              </dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}
