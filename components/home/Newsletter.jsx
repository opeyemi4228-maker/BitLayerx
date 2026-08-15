"use client";

import { useState } from "react";
import { Section, Container } from "@/components/ui/primitives";

/**
 * Newsletter signup.
 *
 * The offer is specific rather than "insights", because "subscribe for
 * insights" asks for an address and promises nothing in return. A stated
 * frequency and a stated subject is what makes the trade legible.
 *
 * This replaces an earlier version that waited 1.2 seconds and declared
 * success without sending the address anywhere.
 */
export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle"); // idle | sending | done
  const [error, setError] = useState("");

  async function onSubmit(e) {
    e.preventDefault();
    setStatus("sending");
    setError("");

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        throw new Error(data.message || "Could not subscribe. Please try again.");
      }

      setStatus("done");
      setEmail("");
    } catch (err) {
      setStatus("idle");
      setError(err.message);
    }
  }

  return (
    <Section tone="offwhite" rhythm="tight" labelledBy="newsletter-heading">
      <Container width="default">
        <div className="grid items-center gap-8 lg:grid-cols-[1fr_1fr] lg:gap-16">
          <div>
            <h2
              id="newsletter-heading"
              className="text-[clamp(1.6rem,3vw,2.4rem)] font-extrabold leading-[1.1] tracking-[-0.03em] text-[#1d1d1f]"
            >
              One email a fortnight.
            </h2>
            <p className="mt-4 max-w-[46ch] text-[1.0625rem] leading-relaxed text-[#6e6e73]">
              What we are building, and what we learned building it. Written by
              the people doing the work. No campaigns, no filler, and one click
              to stop.
            </p>
          </div>

          <div>
            {status === "done" ? (
              <div className="flex items-center gap-4 rounded-2xl border border-black/[0.07] bg-white p-6">
                <span
                  aria-hidden="true"
                  className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-[#0040FF]/10 text-[#0040FF]"
                >
                  ✓
                </span>
                <div>
                  <p className="text-[1.0625rem] font-semibold text-[#1d1d1f]">
                    You are on the list.
                  </p>
                  <p className="mt-0.5 text-[14px] text-[#6e6e73]">
                    The next one goes out in a fortnight.
                  </p>
                </div>
              </div>
            ) : (
              <form onSubmit={onSubmit} noValidate>
                <div className="flex flex-col gap-3 sm:flex-row">
                  <label htmlFor="newsletter-email" className="sr-only">
                    Email address
                  </label>
                  <input
                    id="newsletter-email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@company.com"
                    disabled={status === "sending"}
                    className="w-full flex-1 rounded-full border border-black/[0.14] bg-white px-6 py-[0.85rem] text-[16px] text-[#1d1d1f] placeholder:text-[#9a9aa0] transition-colors focus:border-[#0040FF] focus:outline-none focus:ring-2 focus:ring-[#0040FF]/20 disabled:opacity-60"
                  />
                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="whitespace-nowrap rounded-full bg-[#0040FF] px-8 py-[0.85rem] text-[1.0625rem] font-medium text-white transition-colors hover:bg-black disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {status === "sending" ? "Subscribing…" : "Subscribe"}
                  </button>
                </div>

                {/* Honeypot, invisible to people and irresistible to scripts. */}
                <div className="absolute -left-[9999px]" aria-hidden="true">
                  <label htmlFor="newsletter-website">Do not fill this in</label>
                  <input
                    id="newsletter-website"
                    name="website"
                    tabIndex={-1}
                    autoComplete="off"
                  />
                </div>

                {error && (
                  <p role="alert" className="mt-3 text-[14px] text-red-600">
                    {error}
                  </p>
                )}

                <p className="mt-3 text-[13px] text-[#6e6e73]">
                  We never sell or share your address.
                </p>
              </form>
            )}
          </div>
        </div>
      </Container>
    </Section>
  );
}
