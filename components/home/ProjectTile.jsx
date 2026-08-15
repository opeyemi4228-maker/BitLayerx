/**
 * A visual tile for a live project.
 *
 * Draws a small abstract page layout inside a browser frame, seeded from the
 * project name so every project gets a different, stable composition. It is
 * drawn rather than photographed on purpose: a real screenshot of the site is
 * better, and the moment one exists it replaces this. What this never does is
 * pass off a stock photo as a picture of your work.
 *
 * To use real screenshots instead: save them to /public/images/work/<slug>.jpg
 * and the tile below picks them up automatically.
 */

import Image from "next/image";

/** Tiny deterministic hash, so a given project always draws the same tile. */
function seedFrom(text) {
  let h = 0;
  for (let i = 0; i < text.length; i++) {
    h = (h << 5) - h + text.charCodeAt(i);
    h |= 0;
  }
  return Math.abs(h);
}

/** Four layout archetypes, picked by seed. */
function Artwork({ seed }) {
  const variant = seed % 4;
  const accent = "#0040FF";

  return (
    <svg
      viewBox="0 0 400 250"
      className="block h-full w-full"
      aria-hidden="true"
      preserveAspectRatio="xMidYMid slice"
    >
      <rect width="400" height="250" fill="#ffffff" />

      {variant === 0 && (
        <>
          {/* Hero split */}
          <rect x="0" y="0" width="400" height="112" fill={accent} />
          <rect x="26" y="30" width="120" height="9" rx="4.5" fill="#fff" opacity="0.55" />
          <rect x="26" y="50" width="196" height="18" rx="5" fill="#fff" />
          <rect x="26" y="76" width="140" height="12" rx="4" fill="#fff" opacity="0.7" />
          {[0, 1, 2].map((i) => (
            <g key={i}>
              <rect x={26 + i * 118} y="134" width="102" height="62" rx="8" fill="#fbfbfd" />
              <rect x={40 + i * 118} y="150" width="52" height="7" rx="3.5" fill="#0B0B0F" opacity="0.18" />
              <rect x={40 + i * 118} y="166" width="72" height="9" rx="4" fill={accent} opacity={0.85 - i * 0.25} />
            </g>
          ))}
          <rect x="26" y="212" width="86" height="16" rx="8" fill="#0B0B0F" />
        </>
      )}

      {variant === 1 && (
        <>
          {/* Sidebar app */}
          <rect x="0" y="0" width="96" height="250" fill="#0B0B0F" />
          <rect x="18" y="24" width="40" height="8" rx="4" fill={accent} />
          {[52, 76, 100, 124].map((y, i) => (
            <rect key={y} x="18" y={y} width={i === 0 ? 56 : 44} height="6" rx="3" fill="#fff" opacity={i === 0 ? 0.6 : 0.2} />
          ))}
          <rect x="120" y="26" width="120" height="12" rx="5" fill="#0B0B0F" opacity="0.75" />
          {[0, 1].map((i) => (
            <rect key={i} x={120 + i * 138} y="56" width="122" height="56" rx="8" fill="#fbfbfd" />
          ))}
          <rect x="136" y="74" width="60" height="14" rx="4" fill={accent} />
          <rect x="274" y="74" width="42" height="14" rx="4" fill={accent} opacity="0.45" />
          <polyline
            points="128,196 168,176 208,186 248,152 288,164 328,132 368,142"
            fill="none"
            stroke={accent}
            strokeWidth="3"
            strokeLinecap="round"
          />
        </>
      )}

      {variant === 2 && (
        <>
          {/* Editorial grid */}
          <rect x="24" y="22" width="150" height="10" rx="5" fill="#0B0B0F" opacity="0.8" />
          <rect x="24" y="44" width="96" height="6" rx="3" fill={accent} />
          <rect x="24" y="68" width="212" height="118" rx="10" fill={accent} opacity="0.14" />
          <rect x="24" y="68" width="212" height="118" rx="10" fill="none" stroke={accent} strokeOpacity="0.35" />
          {[0, 1, 2].map((i) => (
            <g key={i}>
              <rect x="252" y={68 + i * 42} width="124" height="30" rx="6" fill="#fbfbfd" />
              <rect x="264" y={78 + i * 42} width={84 - i * 14} height="6" rx="3" fill="#0B0B0F" opacity="0.2" />
              <rect x="264" y={90 + i * 42} width="46" height="5" rx="2.5" fill={accent} opacity="0.5" />
            </g>
          ))}
          <rect x="24" y="204" width="180" height="7" rx="3.5" fill="#0B0B0F" opacity="0.12" />
          <rect x="24" y="220" width="130" height="7" rx="3.5" fill="#0B0B0F" opacity="0.08" />
        </>
      )}

      {variant === 3 && (
        <>
          {/* Storefront */}
          <rect x="0" y="0" width="400" height="34" fill="#0B0B0F" />
          <rect x="20" y="13" width="48" height="8" rx="4" fill={accent} />
          {[0, 1, 2].map((i) => (
            <rect key={i} x={244 + i * 40} y="14" width="28" height="6" rx="3" fill="#fff" opacity="0.35" />
          ))}
          {[0, 1, 2, 3].map((i) => (
            <g key={i}>
              <rect x={22 + (i % 2) * 190} y={54 + Math.floor(i / 2) * 96} width="172" height="84" rx="10" fill="#fbfbfd" />
              <rect x={38 + (i % 2) * 190} y={70 + Math.floor(i / 2) * 96} width="60" height="38" rx="6" fill={accent} opacity={0.8 - i * 0.15} />
              <rect x={110 + (i % 2) * 190} y={76 + Math.floor(i / 2) * 96} width="66" height="7" rx="3.5" fill="#0B0B0F" opacity="0.2" />
              <rect x={110 + (i % 2) * 190} y={90 + Math.floor(i / 2) * 96} width="40" height="7" rx="3.5" fill="#0B0B0F" opacity="0.1" />
            </g>
          ))}
        </>
      )}
    </svg>
  );
}

export default function ProjectTile({ project, screenshot = null }) {
  const seed = seedFrom(project.slug || project.title || "x");

  return (
    <div className="relative overflow-hidden rounded-lg bg-white ring-1 ring-white/10" style={{ aspectRatio: "16 / 10" }}>
      {/* Browser chrome, so the tile reads as software rather than decoration */}
      <div className="flex items-center gap-1.5 bg-[#fbfbfd] px-3 py-2">
        <span className="h-2 w-2 rounded-full bg-black/15" />
        <span className="h-2 w-2 rounded-full bg-black/15" />
        <span className="h-2 w-2 rounded-full bg-black/15" />
      </div>

      <div className="absolute inset-x-0 bottom-0 top-[28px]">
        {screenshot ? (
          <Image
            src={screenshot}
            alt={`The ${project.title} website.`}
            fill
            sizes="(max-width: 640px) 100vw, 33vw"
            className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.04]"
          />
        ) : (
          <div className="h-full w-full transition-transform duration-700 group-hover:scale-[1.04]">
            <Artwork seed={seed} />
          </div>
        )}
      </div>
    </div>
  );
}
