"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Section,
  Container,
  Heading,
  Lede,
  ActionLink,
  PageHero,
} from "@/components/ui/primitives";

const SUBJECTS = [
  "A new project",
  "A quote for specific work",
  "Support on something we built",
  "Careers",
  "Something else",
];

const inputCls =
  "w-full rounded-xl border border-black/[0.14] bg-white px-4 py-3 text-[16px] text-[#1d1d1f] placeholder:text-[#9a9aa0] transition-colors focus:border-[#0040FF] focus:outline-none focus:ring-2 focus:ring-[#0040FF]/20";

const labelCls = "block text-[13.5px] font-semibold text-[#1d1d1f] mb-2";

export default function ContactClient() {
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");

  async function onSubmit(e) {
    e.preventDefault();
    setStatus("sending");
    setError("");

    const form = new FormData(e.currentTarget);
    const payload = Object.fromEntries(form.entries());

    // The contact form and the project form share one endpoint, so every
    // enquiry lands in the same place regardless of which page it came from.
    payload.service = payload.subject || "General enquiry";

    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data.message || "Something went wrong. Please try again.");
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
          <Heading as="h1" size="lg">Message received.</Heading>
          <Lede className="mt-5">
            A real person will reply within one working day. If it is urgent,
            call{" "}
            <a
              href="tel:+2348025401891"
              className="font-semibold text-[#0040FF] underline underline-offset-4"
            >
              +234 802 540 1891
            </a>
            .
          </Lede>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <Link
              href="/portfolio"
              className="inline-flex items-center rounded-full bg-[#0040FF] px-7 py-[0.8rem] text-[1.0625rem] font-medium text-white transition-colors hover:bg-black"
            >
              See our work
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
      <PageHero
        eyebrow="Contact"
        before="Talk to a"
        highlight="person"
        after="."
        lede="No chatbots, no ticket numbers. Send a message and someone who can actually answer it will reply within one working day."
      />

      {/* Ways to reach us */}
      <Section tone="white" rhythm="tight">
        <Container width="default">
          <div className="grid gap-px overflow-hidden rounded-2xl bg-black/10 sm:grid-cols-3">
            <a
              href="tel:+2348025401891"
              className="group bg-white p-8 transition-colors hover:bg-[#f5f5f7]"
            >
              <span className="text-[12px] font-bold uppercase tracking-[0.14em] text-[#0040FF]">
                Call
              </span>
              <span className="mt-3 block text-[1.25rem] font-bold tracking-[-0.02em] text-[#1d1d1f] transition-colors group-hover:text-[#0040FF]">
                +234 802 540 1891
              </span>
              <span className="mt-2 block text-[14.5px] text-[#6e6e73]">
                Monday to Friday, 8am to 6pm
              </span>
            </a>

            <a
              href="mailto:hello@bitlayerx.com"
              className="group bg-white p-8 transition-colors hover:bg-[#f5f5f7]"
            >
              <span className="text-[12px] font-bold uppercase tracking-[0.14em] text-[#0040FF]">
                Email
              </span>
              <span className="mt-3 block break-all text-[1.25rem] font-bold tracking-[-0.02em] text-[#1d1d1f] transition-colors group-hover:text-[#0040FF]">
                hello@bitlayerx.com
              </span>
              <span className="mt-2 block text-[14.5px] text-[#6e6e73]">
                Replies within one working day
              </span>
            </a>

            <div className="bg-white p-8">
              <span className="text-[12px] font-bold uppercase tracking-[0.14em] text-[#0040FF]">
                Visit
              </span>
              <span className="mt-3 block text-[1.25rem] font-bold tracking-[-0.02em] text-[#1d1d1f]">
                Gwarinpa, Abuja
              </span>
              <span className="mt-2 block text-[14.5px] text-[#6e6e73]">
                6th Avenue. Please arrange a time first.
              </span>
            </div>
          </div>
        </Container>
      </Section>

      {/* Form */}
      <Section tone="offwhite">
        <Container width="default">
          <div className="grid items-start gap-10 lg:grid-cols-[1.35fr_1fr] lg:gap-16">
            <div className="rounded-2xl border border-black/[0.07] bg-white p-6 sm:p-9">
              <Heading as="h2" size="md">Send a message</Heading>
              <p className="mt-3 text-[15.5px] leading-relaxed text-[#6e6e73]">
                Ready to start a project instead?{" "}
                <Link
                  href="/start-a-project"
                  className="font-medium text-[#0040FF] underline underline-offset-4"
                >
                  Use the project form
                </Link>{" "}
                and you will get a written plan in 48 hours.
              </p>

              <form onSubmit={onSubmit} noValidate className="mt-8">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className={labelCls}>
                      Your name <span className="text-[#0040FF]">*</span>
                    </label>
                    <input id="name" name="name" required autoComplete="name" className={inputCls} placeholder="Adaeze Okafor" />
                  </div>
                  <div>
                    <label htmlFor="company" className={labelCls}>Company</label>
                    <input id="company" name="company" autoComplete="organization" className={inputCls} placeholder="Optional" />
                  </div>
                  <div>
                    <label htmlFor="email" className={labelCls}>
                      Email <span className="text-[#0040FF]">*</span>
                    </label>
                    <input id="email" name="email" type="email" required autoComplete="email" className={inputCls} placeholder="you@company.com" />
                  </div>
                  <div>
                    <label htmlFor="phone" className={labelCls}>Phone or WhatsApp</label>
                    <input id="phone" name="phone" type="tel" autoComplete="tel" className={inputCls} placeholder="+234 …" />
                  </div>
                </div>

                <div className="mt-5">
                  <label htmlFor="subject" className={labelCls}>
                    What is this about? <span className="text-[#0040FF]">*</span>
                  </label>
                  <select id="subject" name="subject" required className={inputCls} defaultValue="">
                    <option value="" disabled>Choose one</option>
                    {SUBJECTS.map((s) => <option key={s} value={s}>{s}</option>)}
                  </select>
                </div>

                <div className="mt-5">
                  <label htmlFor="message" className={labelCls}>
                    Your message <span className="text-[#0040FF]">*</span>
                  </label>
                  <textarea id="message" name="message" required rows={5} className={`${inputCls} resize-none`} placeholder="Tell us what you need. The more detail, the more useful our reply." />
                </div>

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
                  className="mt-7 w-full rounded-full bg-[#0040FF] px-7 py-[0.95rem] text-[1.0625rem] font-medium text-white transition-colors hover:bg-black disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
                >
                  {status === "sending" ? "Sending…" : "Send message"}
                </button>

                <p className="mt-4 text-[13px] leading-relaxed text-[#6e6e73]">
                  We do not add you to a mailing list and we do not share your
                  details with anyone.
                </p>
              </form>
            </div>

            <aside>
              <h2 className="border-b-2 border-[#1d1d1f] pb-3 text-[12px] font-bold uppercase tracking-[0.16em] text-[#1d1d1f]">
                Common questions
              </h2>
              <dl className="mt-6 space-y-6">
                {[
                  {
                    q: "How quickly do you reply?",
                    a: "Within one working day. Usually the same day.",
                  },
                  {
                    q: "Do you work outside Nigeria?",
                    a: "Yes. The UK, the United States, the UAE, South Africa and more.",
                  },
                  {
                    q: "What does a project cost?",
                    a: "It depends on scope. We published real ranges so you do not have to guess.",
                  },
                  {
                    q: "Will this be a sales call?",
                    a: "No. We spend the time on your problem. If we are the wrong fit we say so.",
                  },
                ].map((f) => (
                  <div key={f.q}>
                    <dt className="text-[15.5px] font-bold text-[#1d1d1f]">{f.q}</dt>
                    <dd className="mt-1.5 text-[14.5px] leading-relaxed text-[#6e6e73]">{f.a}</dd>
                  </div>
                ))}
              </dl>

              <div className="mt-8">
                <ActionLink href="/blog/what-a-website-costs-in-nigeria">
                  What a website really costs
                </ActionLink>
              </div>
            </aside>
          </div>
        </Container>
      </Section>
    </>
  );
}
