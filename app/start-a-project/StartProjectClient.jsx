"use client";

import { useState } from "react";
import Link from "next/link";
import { Section, Container, Heading, Lede } from "@/components/ui/primitives";

const SERVICES = [
  "Website or marketing site",
  "Web or mobile application",
  "Brand identity",
  "Commercial film / video",
  "Marketing & growth",
  "Not sure yet",
];

const BUDGETS = [
  "Under ₦1m / under £1.5k",
  "₦1m, ₦5m / £1.5k, £7k",
  "₦5m, ₦20m / £7k, £30k",
  "₦20m+ / £30k+",
  "I need guidance on this",
];

const TIMELINES = [
  "As soon as possible",
  "Within 1-3 months",
  "Within 3-6 months",
  "Planning ahead / exploring",
];

/** What happens after the form, stated up front, because uncertainty is what
 *  stops people submitting. */
const STEPS = [
  {
    n: "01",
    title: "You send this form",
    body: "Two minutes. Nothing here is a trick question and no field is used to qualify you out.",
  },
  {
    n: "02",
    title: "We reply within one business day",
    body: "A real person who has read it, not an autoresponder. If we are the wrong fit, we say so here and suggest who is not.",
  },
  {
    n: "03",
    title: "One working session",
    body: "45 minutes, on a call or in our Gwarinpa studio. We spend it on your problem, not on a deck about us.",
  },
  {
    n: "04",
    title: "A written plan within 48 hours",
    body: "Scope, sequence, timeline and price, in writing. It is yours to keep whether or not you hire us.",
  },
];

const inputCls =
  "w-full rounded-xl border border-black/[0.14] bg-white px-4 py-3 text-[16px] text-[#1d1d1f] placeholder:text-[#9a9aa0] transition-colors focus:border-[#0040FF] focus:outline-none focus:ring-2 focus:ring-[#0040FF]/20";

const labelCls =
  "block text-[13.5px] font-semibold text-[#1d1d1f] mb-2";

export default function StartProjectClient() {
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error
  const [error, setError] = useState("");

  async function onSubmit(e) {
    e.preventDefault();
    setStatus("sending");
    setError("");

    const form = new FormData(e.currentTarget);
    const payload = Object.fromEntries(form.entries());

    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        throw new Error(data.message || "Something went wrong. Please try again.");
      }

      setStatus("sent");
    } catch (err) {
      setStatus("error");
      setError(err.message);
    }
  }

  if (status === "sent") {
    return (
      <Section tone="white">
        <Container width="text" className="text-center">
          <div
            aria-hidden="true"
            className="mx-auto mb-8 flex h-16 w-16 items-center justify-center rounded-full bg-[#0040FF]/10 text-3xl text-[#0040FF]"
          >
            ✓
          </div>
          <Heading as="h1" size="lg">That is with us.</Heading>
          <Lede className="mt-5">
            You will hear from a person, not an autoresponder, within one
            business day. If it is urgent, call{" "}
            <a
              href="tel:+2348025401891"
              className="font-semibold text-[#0040FF] underline underline-offset-4"
            >
              +234 802 540 1891
            </a>{" "}
            and say you have just sent a brief.
          </Lede>

          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <Link
              href="/portfolio"
              className="inline-flex items-center rounded-full bg-[#0040FF] px-7 py-[0.8rem] text-[1.0625rem] font-medium text-white transition-colors hover:bg-[#0B0B0F]"
            >
              See work while you wait
            </Link>
            <Link
              href="/blog"
              className="inline-flex items-center rounded-full border border-black/15 px-7 py-[0.8rem] text-[1.0625rem] font-medium text-[#1d1d1f] transition-colors hover:border-black/40"
            >
              Read something useful
            </Link>
          </div>
        </Container>
      </Section>
    );
  }

  return (
    <>
      {/* ── Header ─────────────────────────────────────────────────────── */}
      <Section tone="white" rhythm="tight">
        <Container width="narrow">
          <p className="text-[12px] font-bold uppercase tracking-[0.18em] text-[#0040FF]">
            Request a session
          </p>
          <Heading as="h1" size="xl" className="mt-4">
            Tell us what you are building.
          </Heading>
          <Lede className="mt-5 max-w-[620px]">
            One working session, then a written plan with scope, timeline and
            price within 48 hours. It is yours to keep, including if you take
            it to another team.
          </Lede>
        </Container>
      </Section>

      {/* ── Form + reassurance rail ────────────────────────────────────── */}
      <Section tone="offwhite" rhythm="tight">
        <Container width="wide">
          <div className="grid lg:grid-cols-[1.35fr_1fr] gap-10 lg:gap-16 items-start">
            {/* Form */}
            <div className="rounded-2xl border border-black/[0.07] bg-white p-6 sm:p-9">
              <form onSubmit={onSubmit} noValidate>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className={labelCls}>
                      Your name <span className="text-[#0040FF]">*</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      required
                      autoComplete="name"
                      className={inputCls}
                      placeholder="Adaeze Okafor"
                    />
                  </div>

                  <div>
                    <label htmlFor="company" className={labelCls}>
                      Company
                    </label>
                    <input
                      id="company"
                      name="company"
                      autoComplete="organization"
                      className={inputCls}
                      placeholder="Optional"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className={labelCls}>
                      Email <span className="text-[#0040FF]">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      autoComplete="email"
                      className={inputCls}
                      placeholder="you@company.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className={labelCls}>
                      Phone or WhatsApp
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                      className={inputCls}
                      placeholder="+234 …"
                    />
                  </div>
                </div>

                <div className="mt-5">
                  <label htmlFor="service" className={labelCls}>
                    What do you need? <span className="text-[#0040FF]">*</span>
                  </label>
                  <select id="service" name="service" required className={inputCls} defaultValue="">
                    <option value="" disabled>Choose one</option>
                    {SERVICES.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </div>

                <div className="mt-5 grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="budget" className={labelCls}>
                      Budget range
                    </label>
                    <select id="budget" name="budget" className={inputCls} defaultValue="">
                      <option value="">Prefer not to say</option>
                      {BUDGETS.map((b) => (
                        <option key={b} value={b}>{b}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="timeline" className={labelCls}>
                      Timeline
                    </label>
                    <select id="timeline" name="timeline" className={inputCls} defaultValue="">
                      <option value="">Not sure</option>
                      {TIMELINES.map((t) => (
                        <option key={t} value={t}>{t}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="mt-5">
                  <label htmlFor="message" className={labelCls}>
                    What are you trying to achieve?{" "}
                    <span className="text-[#0040FF]">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    className={`${inputCls} resize-none`}
                    placeholder="The problem, not the solution. What is not working today, and what would have to be true for this to be worth it?"
                  />
                </div>

                {/* Honeypot, bots fill it, humans never see it. */}
                <div className="absolute -left-[9999px]" aria-hidden="true">
                  <label htmlFor="website">Do not fill this in</label>
                  <input id="website" name="website" tabIndex={-1} autoComplete="off" />
                </div>

                {status === "error" && (
                  <p role="alert" className="mt-5 rounded-xl bg-red-50 px-4 py-3 text-[14.5px] text-red-700">
                    {error}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="mt-7 w-full rounded-full bg-[#0040FF] px-7 py-[0.95rem] text-[1.0625rem] font-medium text-white transition-colors hover:bg-[#0B0B0F] disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
                >
                  {status === "sending" ? "Sending…" : "Send this brief"}
                </button>

                <p className="mt-4 text-[13px] leading-relaxed text-[#6e6e73]">
                  We reply within one business day. We do not add you to a
                  mailing list, and we do not pass your details to anyone.
                </p>
              </form>
            </div>

            {/* Reassurance rail */}
            <aside>
              <h2 className="text-[12px] font-bold uppercase tracking-[0.16em] text-[#1d1d1f] pb-3 mb-6 border-b-2 border-[#1d1d1f]">
                What happens next
              </h2>

              <ol className="space-y-6">
                {STEPS.map((s) => (
                  <li key={s.n} className="flex gap-4">
                    <span className="mt-0.5 flex-shrink-0 text-[12.5px] font-bold tabular-nums text-[#0040FF]">
                      {s.n}
                    </span>
                    <div>
                      <h3 className="text-[15.5px] font-bold text-[#1d1d1f]">
                        {s.title}
                      </h3>
                      <p className="mt-1 text-[14.5px] leading-relaxed text-[#6e6e73]">
                        {s.body}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>

              <div className="mt-9 rounded-2xl bg-[#1d1d1f] p-6 text-white">
                <p className="text-[15px] font-semibold">
                  Would rather just talk?
                </p>
                <p className="mt-2 text-[14.5px] leading-relaxed text-white/70">
                  Call or message the studio directly. Abuja hours, GMT+1, which overlaps London all day and Dubai most of it.
                </p>
                <a
                  href="tel:+2348025401891"
                  className="mt-4 inline-block text-[1.0625rem] font-semibold text-white underline underline-offset-4"
                >
                  +234 802 540 1891
                </a>
                <a
                  href="mailto:hello@bitlayerx.com"
                  className="mt-1 block text-[14.5px] text-white/70 underline underline-offset-4"
                >
                  hello@bitlayerx.com
                </a>
              </div>
            </aside>
          </div>
        </Container>
      </Section>
    </>
  );
}
