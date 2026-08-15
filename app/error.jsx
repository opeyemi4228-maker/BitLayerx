"use client";

import Link from "next/link";
import { useEffect } from "react";

/**
 * Route-level error boundary.
 *
 * Without this file Next has nothing to render when a page throws, and the
 * browser falls into the "missing required error components, refreshing…"
 * loop  -  which tells a visitor nothing and looks like the site is broken
 * rather than one page being broken.
 *
 * The navbar and footer stay in place because this renders inside the root
 * layout, so someone who hits it still has a way out.
 */
export default function Error({ error, reset }) {
  useEffect(() => {
    // Surface it for whatever is collecting errors; never swallow it silently.
    if (typeof window !== "undefined" && typeof window.gtag === "function") {
      window.gtag("event", "exception", {
        description: error?.message ?? "Unknown route error",
        fatal: false,
      });
    }
    console.error(error);
  }, [error]);

  return (
    <section className="bg-[#fbfbfd] py-[clamp(4.5rem,9vw,9rem)]">
      <div className="mx-auto max-w-[720px] px-5 text-center sm:px-8">
        <p className="text-[12px] font-bold uppercase tracking-[0.18em] text-[#0040FF]">
          Something broke
        </p>

        <h1 className="mx-auto mt-5 max-w-[16ch] text-[clamp(2.1rem,5vw,3.9rem)] font-extrabold leading-[1.03] tracking-[-0.035em] text-[#0B0B0F]">
          That page didn&rsquo;t load.
        </h1>

        <p className="mx-auto mt-6 max-w-[48ch] text-[clamp(1.05rem,1.5vw,1.3rem)] leading-[1.5] text-[#6e6e73]">
          The fault is ours, not yours. Try again  -  and if it keeps happening,
          tell us and we will fix it properly.
        </p>

        {error?.digest && (
          <p className="mt-5 text-[13px] text-[#6e6e73]">
            Reference:{" "}
            <code className="rounded bg-black/[0.05] px-1.5 py-0.5 font-mono">
              {error.digest}
            </code>
          </p>
        )}

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
          <button
            onClick={reset}
            className="inline-flex items-center justify-center rounded-full bg-[#0040FF] px-8 py-[0.95rem] text-[1.0625rem] font-medium text-white transition-colors hover:bg-[#0B0B0F]"
          >
            Try again
          </button>
          <Link
            href="/"
            className="text-[1.0625rem] font-medium text-[#0040FF] transition-colors hover:text-[#0B0B0F]"
          >
            Back to the homepage ›
          </Link>
        </div>

        <p className="mt-12 text-[14px] text-[#6e6e73]">
          Need a person?{" "}
          <Link
            href="/contact"
            className="font-medium text-[#0040FF] underline underline-offset-4"
          >
            Contact us
          </Link>{" "}
           -  we reply within 48 hours.
        </p>
      </div>
    </section>
  );
}
