import Link from "next/link";
import { Section, Container, ActionLink } from "@/components/ui/primitives";

/**
 * The showcase band.
 *
 * Drawn rather than photographed, and deliberately so: an illustrated device
 * frame is honest about being an illustration, whereas a stock photograph of a
 * laptop on a desk pretends to be a record of work that was never done. When
 * real product photography exists, it replaces this wholesale.
 */

/** A browser chrome frame, the container Apple uses to say "this is software". */
function BrowserFrame({ children, label, className = "" }) {
  return (
    <div
      className={`overflow-hidden rounded-xl bg-white shadow-[0_24px_70px_-24px_rgba(0,0,0,0.55)] ring-1 ring-black/10 ${className}`}
    >
      <div className="flex items-center gap-2 border-b border-black/[0.07] bg-[#f5f5f7] px-4 py-2.5">
        <span className="flex gap-1.5" aria-hidden="true">
          <span className="h-2.5 w-2.5 rounded-full bg-black/15" />
          <span className="h-2.5 w-2.5 rounded-full bg-black/15" />
          <span className="h-2.5 w-2.5 rounded-full bg-black/15" />
        </span>
        <span className="mx-auto truncate rounded-md bg-black/[0.05] px-3 py-1 text-[11px] font-medium text-[#6e6e73]">
          {label}
        </span>
      </div>
      <div className="relative">{children}</div>
    </div>
  );
}

/** A dashboard abstraction, bars, a chart line, a table. No fake numbers. */
function DashboardArt() {
  return (
    <svg viewBox="0 0 640 380" className="block w-full" role="img" aria-label="An abstract representation of a product dashboard.">
      <rect width="640" height="380" fill="#ffffff" />

      {/* Sidebar */}
      <rect x="0" y="0" width="132" height="380" fill="#f5f5f7" />
      <rect x="20" y="26" width="64" height="9" rx="4.5" fill="#0040FF" />
      {[62, 88, 114, 140, 166].map((y, i) => (
        <rect key={y} x="20" y={y} width={i === 0 ? 88 : 74} height="7" rx="3.5" fill="#0B0B0F" opacity={i === 0 ? "0.5" : "0.16"} />
      ))}

      {/* Stat tiles */}
      {[0, 1, 2].map((i) => (
        <g key={i}>
          <rect x={162 + i * 158} y="30" width="140" height="72" rx="10" fill="#f5f5f7" />
          <rect x={178 + i * 158} y="48" width="46" height="6" rx="3" fill="#0B0B0F" opacity="0.2" />
          <rect x={178 + i * 158} y="66" width="76" height="14" rx="4" fill="#0040FF" opacity={1, i * 0.28} />
        </g>
      ))}

      {/* Chart */}
      <rect x="162" y="120" width="456" height="150" rx="10" fill="#f5f5f7" />
      <polyline
        points="186,236 244,212 302,222 360,180 418,192 476,152 534,164 592,132"
        fill="none"
        stroke="#0040FF"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <polygon
        points="186,236 244,212 302,222 360,180 418,192 476,152 534,164 592,132 592,258 186,258"
        fill="#0040FF"
        opacity="0.07"
      />

      {/* Table rows */}
      {[288, 312, 336].map((y, i) => (
        <g key={y}>
          <rect x="162" y={y} width="200" height="8" rx="4" fill="#0B0B0F" opacity="0.14" />
          <rect x="392" y={y} width="120" height="8" rx="4" fill="#0B0B0F" opacity="0.09" />
          <rect x="546" y={y} width="72" height="8" rx="4" fill="#0040FF" opacity={0.3, i * 0.07} />
        </g>
      ))}
    </svg>
  );
}

/** A phone abstraction, sat over the browser frame for depth. */
function PhoneArt() {
  return (
    <div className="overflow-hidden rounded-[1.75rem] bg-black p-2 shadow-[0_30px_70px_-20px_rgba(0,0,0,0.7)] ring-1 ring-white/10">
      <svg viewBox="0 0 240 460" className="block w-full rounded-[1.35rem]" role="img" aria-label="An abstract representation of a mobile application screen.">
        <rect width="240" height="460" fill="#ffffff" />
        <rect x="0" y="0" width="240" height="132" fill="#0040FF" />
        <rect x="22" y="34" width="70" height="8" rx="4" fill="#ffffff" opacity="0.55" />
        <rect x="22" y="56" width="130" height="15" rx="5" fill="#ffffff" />
        <rect x="22" y="82" width="104" height="15" rx="5" fill="#ffffff" opacity="0.85" />

        {/* Floating card straddling the fold */}
        <rect x="20" y="112" width="200" height="76" rx="12" fill="#ffffff" stroke="#0B0B0F" strokeOpacity="0.08" />
        <rect x="38" y="132" width="58" height="7" rx="3.5" fill="#0B0B0F" opacity="0.2" />
        <rect x="38" y="150" width="96" height="16" rx="4" fill="#0040FF" />

        {[212, 262, 312, 362].map((y, i) => (
          <g key={y}>
            <rect x="20" y={y} width="200" height="38" rx="9" fill="#f5f5f7" />
            <circle cx="43" cy={y + 19} r="10" fill="#0040FF" opacity={0.85, i * 0.18} />
            <rect x="62" y={y + 10} width="88" height="7" rx="3.5" fill="#0B0B0F" opacity="0.22" />
            <rect x="62" y={y + 23} width="58" height="6" rx="3" fill="#0B0B0F" opacity="0.11" />
          </g>
        ))}

        <rect x="20" y="414" width="200" height="30" rx="15" fill="#0B0B0F" />
      </svg>
    </div>
  );
}

export default function Showcase() {
  return (
    <Section tone="dark" labelledBy="showcase-heading">
      <Container width="default">
        <div className="mx-auto max-w-[760px] text-center">
          <p className="text-[12px] font-bold uppercase tracking-[0.18em] text-[#5C86FF]">
            One team, one system
          </p>
          <h2
            id="showcase-heading"
            className="mt-4 text-[clamp(2.1rem,5vw,3.9rem)] font-extrabold leading-[1.03] tracking-[-0.035em]"
          >
            Web and mobile that behave like one product.
          </h2>
          <p className="mx-auto mt-5 max-w-[52ch] text-[1.0625rem] leading-relaxed text-white/60">
            Same design system, same engineering team, same release. Not a
            website from one supplier and an app from another that happen to
            share a logo.
          </p>
        </div>

        {/* The composition: desktop behind, phone overlapping at the corner, the standard way to say "the same product, both places". */}
        <div className="relative mx-auto mt-16 max-w-[900px]">
          <BrowserFrame label="bitlayerx.com/app">
            <DashboardArt />
          </BrowserFrame>

          <div className="absolute -bottom-10 -right-2 w-[26%] min-w-[120px] max-w-[190px] sm:-right-6 lg:-right-12">
            <PhoneArt />
          </div>
        </div>

        <div className="mt-24 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-8">
          <Link
            href="/portfolio"
            className="inline-flex items-center justify-center rounded-full bg-white px-8 py-[0.9rem] text-[1.0625rem] font-medium text-[#1d1d1f] transition-colors hover:bg-white/90"
          >
            See live deployments
          </Link>
          <ActionLink href="/solutions" tone="light">
            How we build them
          </ActionLink>
        </div>
      </Container>
    </Section>
  );
}
