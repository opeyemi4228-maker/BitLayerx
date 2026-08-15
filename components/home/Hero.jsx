import Link from "next/link";
import { Container, ActionLink } from "@/components/ui/primitives";

/**
 * The hero.
 *
 * Apple's opening move is always the same: one enormous centred headline, one
 * quiet line of support, two links  -  never two competing buttons  -  and a great
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
    <section className="relative overflow-hidden bg-[#fbfbfd] pt-[clamp(1.75rem,3.5vw,3rem)] pb-[clamp(3.5rem,7vw,6rem)]">
      {/* A single soft light source, well behind the type. Apple uses gradient
          as atmosphere, never as decoration competing with the words. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-[70%]"
        style={{
          background:
            "radial-gradient(ellipse 90% 60% at 50% -10%, rgba(46,92,230,0.13), transparent 70%)",
        }}
      />

      <Container width="narrow" className="relative text-center">
        <p className="text-[13px] font-semibold tracking-[0.02em] text-[#0040FF]">
          Websites · Apps · Design · Branding · Video · Marketing
        </p>

        {/* "Build" carries the whole promise, so it is set larger, heavier and
            in the brand blue. One emphasised word reads as confidence; two or
            more reads as shouting and the emphasis stops meaning anything. */}
        <h1 className="mx-auto mt-6 max-w-[14ch] text-[clamp(3rem,8.6vw,6.4rem)] font-extrabold leading-[0.94] tracking-[-0.045em] text-[#0B0B0F]">
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
            className="inline-flex items-center justify-center rounded-full bg-[#0040FF] px-8 py-[0.95rem] text-[1.0625rem] font-medium text-white transition-colors hover:bg-[#0B0B0F] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0040FF] focus-visible:ring-offset-2"
          >
            Start a project
          </Link>
          <ActionLink href="/portfolio">See work that is live</ActionLink>
        </div>

        {/* Visual band.

            Three frames at different depths: the phone and the brand card sit
            forward, the desktop sits behind. It reads as "we make the whole
            thing", which is the argument the headline just made in words. */}
        <div className="relative mx-auto mt-16 max-w-[900px]">
          <div className="grid grid-cols-12 items-end gap-3 sm:gap-5">
            {/* Left: brand card */}
            <div className="col-span-3 hidden sm:block">
              <div className="overflow-hidden rounded-xl bg-[#0040FF] shadow-[0_18px_50px_-18px_rgba(0,64,255,0.6)]">
                <svg viewBox="0 0 200 260" className="block w-full" aria-hidden="true">
                  <rect width="200" height="260" fill="#0040FF" />
                  <g
                    fill="none"
                    stroke="#ffffff"
                    strokeWidth="4"
                    strokeLinejoin="round"
                    transform="translate(68,58) scale(1.05)"
                  >
                    <path d="M32 14 L50 24 L32 34 L14 24 Z" />
                    <path d="M14 32 L32 42 L50 32" opacity="0.7" />
                    <path d="M14 40 L32 50 L50 40" opacity="0.45" />
                  </g>
                  <rect x="34" y="176" width="132" height="9" rx="4.5" fill="#fff" opacity="0.9" />
                  <rect x="34" y="196" width="94" height="7" rx="3.5" fill="#fff" opacity="0.5" />
                  <rect x="34" y="218" width="66" height="7" rx="3.5" fill="#fff" opacity="0.3" />
                </svg>
              </div>
            </div>

            {/* Centre: desktop */}
            <div className="col-span-12 sm:col-span-6">
              <div className="overflow-hidden rounded-xl bg-white shadow-[0_26px_70px_-24px_rgba(0,0,0,0.42)] ring-1 ring-black/[0.08]">
                <div className="flex items-center gap-1.5 bg-[#fbfbfd] px-3 py-2">
                  <span className="h-2 w-2 rounded-full bg-black/15" />
                  <span className="h-2 w-2 rounded-full bg-black/15" />
                  <span className="h-2 w-2 rounded-full bg-black/15" />
                </div>
                <svg viewBox="0 0 420 280" className="block w-full" aria-hidden="true">
                  <rect width="420" height="280" fill="#ffffff" />
                  <rect x="0" y="0" width="420" height="122" fill="#0B0B0F" />
                  <rect x="28" y="30" width="96" height="8" rx="4" fill="#0040FF" />
                  <rect x="28" y="52" width="214" height="20" rx="6" fill="#fff" />
                  <rect x="28" y="82" width="150" height="12" rx="5" fill="#fff" opacity="0.55" />
                  {[0, 1, 2].map((i) => (
                    <g key={i}>
                      <rect x={28 + i * 124} y="146" width="108" height="66" rx="9" fill="#fbfbfd" />
                      <rect x={44 + i * 124} y="164" width="46" height="7" rx="3.5" fill="#0B0B0F" opacity="0.18" />
                      <rect x={44 + i * 124} y="180" width="72" height="12" rx="4" fill="#0040FF" opacity={0.9 - i * 0.26} />
                    </g>
                  ))}
                  <rect x="28" y="232" width="98" height="18" rx="9" fill="#0040FF" />
                  <rect x="138" y="236" width="70" height="10" rx="5" fill="#0B0B0F" opacity="0.12" />
                </svg>
              </div>
            </div>

            {/* Right: phone */}
            <div className="col-span-3 hidden sm:block">
              <div className="overflow-hidden rounded-[1.25rem] bg-[#0B0B0F] p-1.5 shadow-[0_22px_55px_-18px_rgba(0,0,0,0.55)]">
                <svg viewBox="0 0 170 300" className="block w-full rounded-[0.95rem]" aria-hidden="true">
                  <rect width="170" height="300" fill="#ffffff" />
                  <rect x="0" y="0" width="170" height="96" fill="#0040FF" />
                  <rect x="18" y="26" width="52" height="7" rx="3.5" fill="#fff" opacity="0.55" />
                  <rect x="18" y="44" width="98" height="14" rx="5" fill="#fff" />
                  <rect x="16" y="82" width="138" height="52" rx="10" fill="#ffffff" stroke="#0B0B0F" strokeOpacity="0.08" />
                  <rect x="30" y="98" width="44" height="6" rx="3" fill="#0B0B0F" opacity="0.2" />
                  <rect x="30" y="112" width="72" height="12" rx="4" fill="#0040FF" />
                  {[152, 194, 236].map((y, i) => (
                    <g key={y}>
                      <rect x="16" y={y} width="138" height="32" rx="8" fill="#fbfbfd" />
                      <circle cx="36" cy={y + 16} r="8" fill="#0040FF" opacity={0.85 - i * 0.2} />
                      <rect x="52" y={y + 9} width="62" height="6" rx="3" fill="#0B0B0F" opacity="0.2" />
                      <rect x="52" y={y + 20} width="40" height="5" rx="2.5" fill="#0B0B0F" opacity="0.1" />
                    </g>
                  ))}
                  <rect x="16" y="274" width="138" height="14" rx="7" fill="#0B0B0F" />
                </svg>
              </div>
            </div>
          </div>
        </div>

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
