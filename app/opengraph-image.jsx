import { ImageResponse } from "next/og";

/**
 * The default social card, generated at build time.
 *
 * layout.js previously pointed at /og-image.png, which was never in /public  - 
 * so every share of every page produced a blank preview and another 404 in
 * Search Console. Generating it here means it cannot go missing again.
 */

export const runtime = "nodejs";
export const alt =
  "BitLayerX  -  digital products, brands and systems built to last.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "linear-gradient(135deg, #0B0B0F 0%, #0040FF 100%)",
          padding: "80px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <svg width="64" height="64" viewBox="0 0 64 64">
            <g
              fill="none"
              stroke="#ffffff"
              strokeWidth="3.4"
              strokeLinejoin="round"
            >
              <path d="M32 14 L50 24 L32 34 L14 24 Z" />
              <path d="M14 32 L32 42 L50 32" opacity="0.72" />
              <path d="M14 40 L32 50 L50 40" opacity="0.44" />
            </g>
          </svg>
          <div
            style={{
              color: "#ffffff",
              fontSize: 40,
              fontWeight: 800,
              letterSpacing: "-0.03em",
            }}
          >
            BitLayerX
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 24,
          }}
        >
          <div
            style={{
              color: "#ffffff",
              fontSize: 76,
              fontWeight: 800,
              lineHeight: 1.05,
              letterSpacing: "-0.04em",
              maxWidth: 900,
            }}
          >
            Digital products, brands and systems built to last.
          </div>
          <div
            style={{
              color: "rgba(255,255,255,0.78)",
              fontSize: 30,
              fontWeight: 500,
            }}
          >
            Strategy · Design · Engineering · Brand · Film · Growth
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            color: "rgba(255,255,255,0.72)",
            fontSize: 24,
            fontWeight: 600,
          }}
        >
          <span>bitlayerx.com</span>
          <span>Abuja · Lagos · London · Dubai</span>
        </div>
      </div>
    ),
    size
  );
}
