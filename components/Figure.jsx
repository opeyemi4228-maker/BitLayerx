"use client";

import { useState } from "react";
import Image from "next/image";

/**
 * Figure  -  the site's single image primitive.
 *
 * If the file at `src` is missing, it renders a branded generated plate rather
 * than a broken image or a stock photograph. That distinction matters: a stock
 * photo standing in for your team is the thing that quietly costs trust, and a
 * designed placeholder never pretends to be a record of something real.
 */

/**
 * A light, quiet plate. Deliberately low-contrast: it should read as a
 * considered surface waiting for a photograph, never as a design statement
 * competing with the words next to it.
 */
function BrandPlate({ seed = 0, label }) {
  const id = `plate-${seed}`;
  const tilt = [-8, 6, -4, 9][seed % 4];

  return (
    <div
      className="absolute inset-0 overflow-hidden bg-[#fbfbfd]"
      aria-hidden="true"
    >
      <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="xMidYMid slice">
        <defs>
          <pattern id={`${id}-grid`} x="0" y="0" width="34" height="34" patternUnits="userSpaceOnUse">
            <path d="M34 0 L0 0 0 34" fill="none" stroke="#0B0B0F" strokeWidth="0.5" />
          </pattern>
          <linearGradient id={`${id}-sheen`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.9" />
            <stop offset="55%" stopColor="#FFFFFF" stopOpacity="0" />
            <stop offset="100%" stopColor="#0B0B0F" stopOpacity="0.05" />
          </linearGradient>
        </defs>
        <rect width="100%" height="100%" fill={`url(#${id}-grid)`} opacity="0.06" />
        <rect width="100%" height="100%" fill={`url(#${id}-sheen)`} />
      </svg>

      {/* Three offset planes  -  the layer idea, drawn once and quietly. */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div
          className="relative"
          style={{ width: "52%", aspectRatio: "4 / 3", transform: `rotate(${tilt}deg)` }}
        >
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="absolute inset-0 rounded-lg"
              style={{
                background:
                  i === 2 ? "rgba(0, 64, 255,0.06)" : "rgba(255,255,255,0.75)",
                border: "1px solid rgba(0, 64, 255,0.10)",
                transform: `translate(${i * 13}px, ${i * -13}px)`,
                boxShadow: "0 8px 24px -12px rgba(0, 64, 255,0.30)",
              }}
            />
          ))}
        </div>
      </div>

      {label && (
        <div className="absolute bottom-4 left-4 right-4">
          <span className="inline-block px-2.5 py-1 rounded-md bg-white/80 backdrop-blur-sm text-[#0B0B0F]/70 text-[11px] font-black tracking-[0.16em] uppercase border border-[#0B0B0F]/[0.08]">
            {label}
          </span>
        </div>
      )}
    </div>
  );
}

export default function Figure({
  src,
  alt = "",
  caption,
  ratio = "4 / 3",
  seed = 0,
  label,
  priority = false,
  sizes = "(max-width: 768px) 100vw, 50vw",
  className = "",
  rounded = "rounded-2xl",
  zoomOnHover = true,
  fallback = null,
}) {
  const [failed, setFailed] = useState(!src);

  return (
    <figure className={`group relative ${className}`}>
      <div
        className={`relative w-full overflow-hidden ${rounded} bg-[#0B0B0F]/5`}
        style={{ aspectRatio: ratio }}
      >
        {failed ? (
          fallback || <BrandPlate seed={seed} label={label} />
        ) : (
          <>
            <Image
              src={src}
              alt={alt}
              fill
              sizes={sizes}
              priority={priority}
              onError={() => setFailed(true)}
              className={`object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
                zoomOnHover ? "group-hover:scale-[1.04]" : ""
              }`}
            />
            {label && (
              <>
                <div
                  aria-hidden="true"
                  className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/55 to-transparent"
                />
                <span className="absolute bottom-4 left-4 px-2.5 py-1 rounded-md bg-white/15 backdrop-blur-sm text-white text-[11px] font-black tracking-[0.16em] uppercase">
                  {label}
                </span>
              </>
            )}
          </>
        )}
      </div>

      {caption && (
        <figcaption className="mt-3 text-[13px] leading-relaxed text-gray-500">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
