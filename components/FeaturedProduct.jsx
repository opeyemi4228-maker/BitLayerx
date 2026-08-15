"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight, GitMerge, Layers, BarChart3, ShieldCheck,
  Target, CheckCircle2, X,
} from "lucide-react";
import Figure from "./Figure";
import { MEDIA } from "@/lib/media";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

const stagger = (d = 0.1) => ({
  hidden: {},
  show: { transition: { staggerChildren: d } },
});

function FadeIn({ children, className = "", delay = 0, direction = "up" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-70px" });
  return (
    <motion.div
      ref={ref}
      initial={{
        opacity: 0,
        y: direction === "up" ? 26 : direction === "down" ? -26 : 0,
        x: direction === "left" ? 26 : direction === "right" ? -26 : 0,
      }}
      animate={inView ? { opacity: 1, y: 0, x: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ─── DATA ─────────────────────────────────────────────────────────────────────
const DIFFERENTIATORS = [
  {
    icon: GitMerge,
    title: "We build systems, not silos",
    description:
      "Most agencies deliver one piece. We plan the whole thing, so the parts are built knowing about each other.",
  },
  {
    icon: Layers,
    title: "Strategy before execution",
    description:
      "We never open with design or code. Position, audience and sequencing come first, on paper, where changing your mind is cheap.",
  },
  {
    icon: BarChart3,
    title: "Measured in revenue, not deliverables",
    description:
      "Every engagement is tracked against agreed business metrics, and we report them whether or not they flatter us.",
  },
  {
    icon: ShieldCheck,
    title: "Built to last",
    description:
      "Your site, your brand, your systems: documented, handed over, engineered to keep working when we're not in the room.",
  },
];

// The last row is one we lose. A perfectly one-sided comparison persuades less
// than one that concedes something, the concession is what makes the rest
// believable.
const COMPARISONS = [
  { label: "Design and engineering aligned",  us: true,  them: false },
  { label: "Brand and marketing unified",     us: true,  them: false },
  { label: "Strategy before execution",       us: true,  them: false },
  { label: "Single point of accountability",  us: true,  them: false },
  { label: "Reporting against agreed metrics", us: true, them: false },
  { label: "The lowest possible price",       us: false, them: true  },
];

// ─── WHY BITLAYERX ────────────────────────────────────────────────────────────
function WhyBitLayerX() {
  const listRef = useRef(null);
  const listInView = useInView(listRef, { once: true, margin: "-80px" });

  return (
    <section className="bg-white py-24 lg:py-32 overflow-hidden" aria-labelledby="why-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">

        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-14 lg:mb-16">
          <FadeIn direction="right">
            <p className="text-[#0040FF] text-[11.5px] font-black tracking-[0.22em] uppercase mb-4 flex items-center gap-2">
              <Target size={12} strokeWidth={2.5} /> The difference
            </p>
            <h2
              id="why-heading"
              className="text-[32px] sm:text-[40px] lg:text-[52px] font-black text-[#1d1d1f] leading-[1] tracking-[-0.035em]"
            >
              Why companies move
              <br />
              <span className="text-[#0040FF]">everything to one team.</span>
            </h2>
          </FadeIn>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">

          {/* Left, differentiators */}
          <motion.div
            ref={listRef}
            variants={stagger(0.1)}
            initial="hidden"
            animate={listInView ? "show" : "hidden"}
            className="space-y-3"
          >
            {DIFFERENTIATORS.map((d, i) => {
              const Icon = d.icon;
              return (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  className="group flex gap-5 p-6 lg:p-7 bg-gray-50 hover:bg-white border border-transparent hover:border-[#0040FF]/10 hover:shadow-xl hover:shadow-[#0040FF]/[0.05] transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#0040FF]/[0.07] group-hover:bg-[#0040FF]/[0.12] flex items-center justify-center flex-shrink-0 mt-0.5 transition-colors duration-300">
                    <Icon size={18} strokeWidth={2} className="text-[#0040FF]" />
                  </div>
                  <div>
                    <h3 className="text-[16.5px] font-black text-[#1d1d1f] tracking-tight mb-2">
                      {d.title}
                    </h3>
                    <p className="text-gray-600 text-[15px] leading-relaxed">
                      {d.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Right, the honest comparison */}
          <FadeIn delay={0.15} direction="left">
            <div className="border border-gray-200 overflow-hidden rounded-xl">
              <div className="grid grid-cols-[1fr_92px_92px] bg-black px-6 py-4">
                <div />
                <p className="text-center text-white font-black text-[11.5px] uppercase tracking-[0.14em]">
                  BitLayerX
                </p>
                <p className="text-center text-white/40 font-bold text-[11.5px] uppercase tracking-[0.14em]">
                  Typical agency
                </p>
              </div>

              {COMPARISONS.map((row, i) => (
                <div
                  key={i}
                  className={`grid grid-cols-[1fr_92px_92px] px-6 py-4 items-center border-b border-gray-100 last:border-b-0 ${
                    i % 2 === 0 ? "bg-white" : "bg-gray-50/60"
                  }`}
                >
                  <p className="text-gray-700 text-[14.5px] font-semibold pr-4">
                    {row.label}
                  </p>
                  <Mark on={row.us} />
                  <Mark on={row.them} />
                </div>
              ))}
            </div>

            <p className="mt-4 text-[13px] leading-relaxed text-gray-500">
              We are not the cheapest, and we don't try to be. If price is the
              deciding factor, a specialist freelancer will beat us on the
              invoice, and cost you more over three years.
            </p>

            <div className="flex items-center gap-3 flex-wrap mt-8">
              <Link
                href="/start-a-project"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-black hover:bg-[#0040FF] text-white font-bold text-[14.5px] rounded-xl transition-colors duration-200 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1d1d1f] focus-visible:ring-offset-2"
              >
                Start a project
                <ArrowRight
                  size={14}
                  strokeWidth={3}
                  className="group-hover:translate-x-0.5 transition-transform"
                />
              </Link>
              <Link
                href="/packages"
                className="inline-flex items-center gap-2 px-6 py-3.5 border border-[#1d1d1f]/20 text-[#1d1d1f] font-bold text-[14.5px] rounded-xl hover:border-[#1d1d1f]/40 hover:bg-black/[0.03] transition-all duration-200"
              >
                See what things cost
              </Link>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

function Mark({ on }) {
  return (
    <div className="flex justify-center">
      <div
        className={`w-6 h-6 rounded-full flex items-center justify-center ${
          on ? "bg-black/10" : "bg-gray-100"
        }`}
      >
        {on ? (
          <CheckCircle2 size={14} strokeWidth={2.5} className="text-[#1d1d1f]" />
        ) : (
          <X size={13} strokeWidth={3} className="text-gray-300" />
        )}
      </div>
    </div>
  );
}

// ─── FOUNDER ──────────────────────────────────────────────────────────────────
// A company quoting itself persuades nobody. Everyone arriving here from one of
// the founder's videos is looking for a person; they should find one.
function FounderSection() {
  return (
    <section className="bg-black py-24 lg:py-32 overflow-hidden relative" aria-labelledby="founder-heading">
      <div
        aria-hidden="true"
        className="absolute top-0 left-0 right-0 h-px pointer-events-none"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, rgba(59,130,246,0.5) 30%, rgba(99,149,255,0.8) 50%, rgba(59,130,246,0.5) 70%, transparent 100%)",
        }}
      />
      <div
        aria-hidden="true"
        className="absolute top-0 right-[8%] w-[480px] h-[480px] pointer-events-none rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(37,99,235,0.10) 0%, transparent 65%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid lg:grid-cols-[380px_1fr] gap-12 lg:gap-16 items-center">

          <FadeIn direction="right">
            <Figure
              src={MEDIA.founder.src}
              alt={MEDIA.founder.alt}
              ratio="4 / 5"
              seed={3}
              sizes="(max-width: 1024px) 100vw, 380px"
              zoomOnHover={false}
            />
          </FadeIn>

          <FadeIn direction="left" delay={0.1}>
            <p className="text-blue-400 text-[11.5px] font-black tracking-[0.22em] uppercase mb-6">
              Who you'll be working with
            </p>

            <blockquote>
              <p
                id="founder-heading"
                className="text-white text-[22px] sm:text-[27px] lg:text-[31px] font-black leading-[1.25] tracking-[-0.025em] mb-8"
              >
                “Everything is a layer, and every layer has to hold. We don't
                build websites, apps or campaigns, we build the systems a
                business runs on, and then we stay accountable for them.”
              </p>

              <footer className="flex items-center gap-4 pt-7 border-t border-white/10">
                <div>
                  <p className="text-white font-black text-[16px] tracking-tight">
                    Opeyemi T. Ojurongbe
                  </p>
                  <p className="text-white/40 text-[14px] font-medium">
                    Team Lead · Design engineer · Registered mining
                    engineer (NSE)
                  </p>
                </div>
              </footer>
            </blockquote>

            <p className="text-white/45 text-[15.5px] leading-relaxed mt-8 max-w-[58ch]">
              Opeyemi started underground and now works mostly on screens. He
              writes and teaches publicly about design engineering, the habit of
              treating an interface as infrastructure, and treating the person
              on the other side of it as someone having a hard day.
            </p>

            <div className="flex flex-wrap items-center gap-3 mt-9">
              <a
                href="https://opeyemiojurongbe.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-white hover:bg-white/90 text-[#1d1d1f] font-bold text-[14.5px] rounded-xl transition-colors duration-200 group focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B0B0F]"
              >
                Read the writing
                <ArrowRight
                  size={14}
                  strokeWidth={3}
                  className="group-hover:translate-x-0.5 transition-transform"
                />
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 border border-white/15 hover:border-blue-400/40 text-white/70 hover:text-white font-bold text-[14.5px] rounded-xl transition-all duration-200"
              >
                Talk to Opeyemi directly
              </Link>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

export default function WhyBitLayerXAndFounder() {
  return (
    <>
      <WhyBitLayerX />
      <FounderSection />
    </>
  );
}
