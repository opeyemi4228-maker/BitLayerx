/**
 * A drawn brand plate.
 *
 * Used where a photograph would otherwise be a stock image of strangers
 * standing in for our work or our clients. A generated plate is honest about
 * being a graphic; a stock photo of a team that is not ours is not, and one
 * reverse image search is all it takes for a prospective client to notice.
 *
 * Replace any of these by passing a real `src` once real photography exists.
 */

import Image from "next/image";

function hash(text = "") {
  let h = 0;
  for (let i = 0; i < text.length; i++) {
    h = (h << 5) - h + text.charCodeAt(i);
    h |= 0;
  }
  return Math.abs(h);
}

export default function BrandPlate({
  src = null,
  alt = "",
  seed = "",
  ratio = "4 / 3",
  className = "",
  rounded = "rounded-2xl",
  sizes = "(max-width: 768px) 100vw, 50vw",
  label,
}) {
  const n = hash(seed || alt || "blx");
  const variant = n % 3;

  return (
    <div
      className={`relative overflow-hidden ${rounded} bg-[#f5f5f7] ${className}`}
      style={{ aspectRatio: ratio }}
    >
      {src ? (
        <Image src={src} alt={alt} fill sizes={sizes} className="object-cover" />
      ) : (
        <svg
          viewBox="0 0 400 300"
          className="absolute inset-0 h-full w-full"
          preserveAspectRatio="xMidYMid slice"
          role="img"
          aria-label={alt || "Decorative graphic"}
        >
          <rect width="400" height="300" fill="#f5f5f7" />

          <defs>
            <pattern
              id={`g-${n}`}
              width="26"
              height="26"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M26 0 L0 0 0 26"
                fill="none"
                stroke="#1d1d1f"
                strokeWidth="0.5"
              />
            </pattern>
          </defs>
          <rect width="400" height="300" fill={`url(#g-${n})`} opacity="0.07" />

          {variant === 0 && (
            <g>
              <rect x="48" y="60" width="180" height="12" rx="6" fill="#0040FF" />
              <rect x="48" y="86" width="250" height="10" rx="5" fill="#1d1d1f" opacity="0.16" />
              <rect x="48" y="106" width="200" height="10" rx="5" fill="#1d1d1f" opacity="0.1" />
              {[0, 1, 2].map((i) => (
                <rect
                  key={i}
                  x={48 + i * 106}
                  y="150"
                  width="90"
                  height="76"
                  rx="10"
                  fill="#ffffff"
                  stroke="#1d1d1f"
                  strokeOpacity="0.08"
                />
              ))}
              <rect x="64" y="176" width="46" height="10" rx="5" fill="#0040FF" opacity="0.85" />
              <rect x="170" y="176" width="46" height="10" rx="5" fill="#0040FF" opacity="0.5" />
              <rect x="276" y="176" width="46" height="10" rx="5" fill="#0040FF" opacity="0.25" />
            </g>
          )}

          {variant === 1 && (
            <g>
              <circle cx="200" cy="150" r="86" fill="none" stroke="#0040FF" strokeWidth="1.5" opacity="0.35" />
              <circle cx="200" cy="150" r="58" fill="none" stroke="#0040FF" strokeWidth="1.5" opacity="0.5" />
              <g
                fill="none"
                stroke="#0040FF"
                strokeWidth="4"
                strokeLinejoin="round"
                transform="translate(168,118) scale(1.0)"
              >
                <path d="M32 14 L50 24 L32 34 L14 24 Z" />
                <path d="M14 32 L32 42 L50 32" opacity="0.65" />
                <path d="M14 40 L32 50 L50 40" opacity="0.4" />
              </g>
            </g>
          )}

          {variant === 2 && (
            <g>
              <polyline
                points="40,220 100,190 160,204 220,150 280,168 340,110"
                fill="none"
                stroke="#0040FF"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <polygon
                points="40,220 100,190 160,204 220,150 280,168 340,110 340,250 40,250"
                fill="#0040FF"
                opacity="0.07"
              />
              {[40, 100, 160, 220, 280, 340].map((x, i) => (
                <circle key={x} cx={x} cy={[220, 190, 204, 150, 168, 110][i]} r="4" fill="#0040FF" />
              ))}
              <rect x="40" y="56" width="150" height="11" rx="5.5" fill="#1d1d1f" opacity="0.2" />
              <rect x="40" y="78" width="96" height="9" rx="4.5" fill="#0040FF" />
            </g>
          )}
        </svg>
      )}

      {label && (
        <span className="absolute bottom-4 left-4 rounded-md bg-white/85 px-2.5 py-1 text-[11px] font-bold uppercase tracking-[0.14em] text-[#1d1d1f] backdrop-blur-sm">
          {label}
        </span>
      )}
    </div>
  );
}
