"use client";

import { useEffect } from "react";

/**
 * Root error boundary.
 *
 * This catches failures in the root layout itself, the case app/error.jsx
 * cannot handle, because that one renders *inside* the layout that just threw.
 * It therefore has to supply its own <html> and <body>, and it cannot rely on
 * the site's fonts or navigation existing.
 *
 * Deliberately dependency-free and inline-styled for that reason: if the CSS
 * pipeline is what broke, a stylesheet-dependent page would render unstyled.
 */
export default function GlobalError({ error, reset }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#f5f5f7",
          color: "#0B0B0F",
          fontFamily:
            "-apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif",
          padding: "2rem",
        }}
      >
        <main style={{ maxWidth: 560, textAlign: "center" }}>
          <p
            style={{
              margin: 0,
              fontSize: 12,
              fontWeight: 700,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "#0040FF",
            }}
          >
            BitLayerX
          </p>

          <h1
            style={{
              margin: "1.25rem 0 0",
              fontSize: "clamp(1.9rem, 5vw, 3rem)",
              lineHeight: 1.05,
              letterSpacing: "-0.035em",
              fontWeight: 800,
            }}
          >
            The site failed to load.
          </h1>

          <p
            style={{
              margin: "1.5rem 0 0",
              fontSize: "1.0625rem",
              lineHeight: 1.55,
              color: "#6e6e73",
            }}
          >
            This one is on us. Reload the page, if it happens again, email{" "}
            <a
              href="mailto:hello@bitlayerx.com"
              style={{ color: "#0040FF", fontWeight: 500 }}
            >
              hello@bitlayerx.com
            </a>{" "}
            and we will look at it straight away.
          </p>

          {error?.digest && (
            <p style={{ margin: "1.25rem 0 0", fontSize: 13, color: "#6e6e73" }}>
              Reference: <code>{error.digest}</code>
            </p>
          )}

          <button
            onClick={reset}
            style={{
              marginTop: "2.25rem",
              border: 0,
              cursor: "pointer",
              borderRadius: 9999,
              background: "#0040FF",
              color: "#fff",
              fontSize: "1.0625rem",
              fontWeight: 500,
              padding: "0.95rem 2rem",
            }}
          >
            Reload
          </button>
        </main>
      </body>
    </html>
  );
}
