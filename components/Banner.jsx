"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  Star,
  Quote,
  ChevronLeft,
  ChevronRight,
  Rocket,
  CalendarCheck,
  Send,
  Layers,
  TrendingUp,
  BarChart3,
  Users,
  Zap,
  ShieldCheck,
  CheckCircle2,
  Phone,
} from "lucide-react";

// ─── Animation helpers ────────────────────────────────────────────────────────
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  },
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
        y: direction === "up" ? 28 : direction === "down" ? -28 : 0,
        x: direction === "left" ? 28 : direction === "right" ? -28 : 0,
      }}
      animate={inView ? { opacity: 1, y: 0, x: 0 } : {}}
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ─── DATA ─────────────────────────────────────────────────────────────────────

const TESTIMONIALS = [
  {
    name: "Chukwuemeka Obi",
    role: "CEO",
    company: "PrimeVest Capital",
    industry: "Fintech",
    avatar: "CO",
    color: "#0818A8",
    rating: 5,
    result: "3.8× Revenue Growth in 8 Months",
    quote:
      "BitLayerX didn't just build us a platform — they built us a business. The strategy, the design, the technology, the marketing — everything worked together from day one. Within 8 months we had tripled our revenue and doubled our user base. I've worked with agencies before. This is different.",
    metrics: [
      { val: "3.8×", label: "Revenue Growth" },
      { val: "50K+", label: "New Users" },
    ],
  },
  {
    name: "Amaka Nwosu",
    role: "Founder & Creative Director",
    company: "Noir Lagos",
    industry: "Fashion & E-commerce",
    avatar: "AN",
    color: "#1D4ED8",
    rating: 5,
    result: "₦120M in Sales, 340% More Traffic",
    quote:
      "Before BitLayerX, we had a beautiful product and a forgettable brand. They rebuilt everything — our visual identity, our website, our marketing strategy. The results were immediate and they kept compounding. We went from a local boutique to a national brand in under a year.",
    metrics: [
      { val: "₦120M", label: "Revenue Generated" },
      { val: "340%",  label: "Traffic Growth" },
    ],
  },
  {
    name: "Ibrahim Musa",
    role: "Managing Director",
    company: "SwiftHaul Logistics",
    industry: "Logistics",
    avatar: "IM",
    color: "#000080",
    rating: 5,
    result: "47% Cost Reduction, 200 Vehicles Automated",
    quote:
      "We were drowning in manual processes. BitLayerX built us a fleet management system that handles everything automatically — dispatch, tracking, invoicing, client communication. We saved 30 hours per week and cut operational costs by nearly half. Worth every naira.",
    metrics: [
      { val: "47%",  label: "Cost Reduction" },
      { val: "30hrs", label: "Saved Per Week" },
    ],
  },
  {
    name: "Toluwani Adeyemi",
    role: "Head of Marketing",
    company: "Horizon Properties",
    industry: "Real Estate",
    avatar: "TA",
    color: "#0369A1",
    rating: 5,
    result: "65% More Enquiries, ₦2.1B Properties Sold",
    quote:
      "The commercial videos BitLayerX produced for us were on a completely different level. Our properties started selling faster, at higher prices, to better clients. The rebrand and the digital presence they built gave us the authority to compete at the top of the Abuja market.",
    metrics: [
      { val: "65%",   label: "More Enquiries" },
      { val: "₦2.1B", label: "Properties Sold" },
    ],
  },
  {
    name: "Oluwaseun Bakare",
    role: "Co-founder",
    company: "Starta Africa",
    industry: "Startup",
    avatar: "OB",
    color: "#2563EB",
    rating: 5,
    result: "Launched in 2 Weeks, 10K Users in 30 Days",
    quote:
      "We needed to move fast. BitLayerX delivered our MVP in 14 days, and it was production-quality — not a prototype. The design was clean, the technology was solid, and the brand they built for us gave us instant credibility with investors. We closed our seed round 6 weeks after launch.",
    metrics: [
      { val: "14 Days", label: "MVP to Live" },
      { val: "10K+",    label: "Users in 30 Days" },
    ],
  },
];

const LOGOS = [
  "PrimeVest Capital",
  "Noir Lagos",
  "SwiftHaul Logistics",
  "Horizon Properties",
  "Starta Africa",
  "NexaBridge",
  "Crest Dynamics",
  "TrueNorth Media",
];

const CTA_BENEFITS = [
  "Full strategy session included",
  "No long-term lock-in contracts",
  "Dedicated account manager",
  "Results tracked from day one",
];

// ─── TESTIMONIALS SECTION ─────────────────────────────────────────────────────
function TestimonialsSection() {
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState(1);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const paginate = (dir) => {
    setDirection(dir);
    setActive((prev) => (prev + dir + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const t = TESTIMONIALS[active];

  const slideVariants = {
    enter: (d) => ({ opacity: 0, x: d > 0 ? 40 : -40 }),
    center: { opacity: 1, x: 0, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } },
    exit: (d) => ({ opacity: 0, x: d > 0 ? -40 : 40, transition: { duration: 0.3 } }),
  };

  return (
    <section
      className="bg-white py-24 lg:py-32 overflow-hidden"
      aria-labelledby="testimonials-heading"
      itemScope
      itemType="https://schema.org/Review"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">

        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16 lg:mb-20">
          <FadeIn direction="right">
            <p className="text-[#0818A8] text-[15px] font-black tracking-[0.22em] uppercase mb-4 flex items-center gap-2">
              <Star size={13} strokeWidth={2.5} className="fill-[#0818A8]" />
              Client Results & Credibility
            </p>
            <h2
              id="testimonials-heading"
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-[#000080] uppercase leading-[0.92] tracking-tight"
            >
              WHAT OUR
              <br />
              <span className="text-[#0818A8]">CLIENTS SAY</span>
            </h2>
          </FadeIn>

          <FadeIn direction="left" delay={0.1} className="lg:max-w-xs">
            <div className="flex items-center gap-3 mb-3">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <span className="text-black/80 text-[17px] font-semibold">4.9 / 5.0</span>
            </div>
            <p className="text-black/80 text-[17px] leading-relaxed">
              Based on 127 verified client reviews across all service lines.
            </p>
          </FadeIn>
        </div>

        {/* Main testimonial carousel */}
        <FadeIn className="mb-12">
          <div
            ref={ref}
            className="grid lg:grid-cols-[1fr_380px] gap-6 lg:gap-8 items-start"
          >
            {/* Quote panel */}
            <div className="relative overflow-hidden bg-gray-50 border border-gray-100 min-h-[360px] flex flex-col justify-between">
              {/* Top accent */}
              <div
                className="absolute top-0 left-0 right-0 h-[3px] transition-colors duration-500"
                style={{ backgroundColor: t.color }}
              />

              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={active}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  className="p-8 lg:p-10 flex flex-col h-full"
                >
                  {/* Quote icon */}
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center mb-6 flex-shrink-0"
                    style={{ backgroundColor: t.color + "15" }}
                  >
                    <Quote size={18} strokeWidth={2} style={{ color: t.color }} />
                  </div>

                  {/* Stars */}
                  <div className="flex gap-1 mb-5">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} size={14} className="text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>

                  {/* Result badge */}
                  <div
                    className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-[15px] font-black tracking-wide uppercase mb-5 w-fit"
                    style={{ backgroundColor: t.color + "12", color: t.color }}
                  >
                    <TrendingUp size={11} strokeWidth={2.5} />
                    {t.result}
                  </div>

                  {/* Quote text */}
                  <p className="text-black/80 text-[16px] lg:text-[17px] leading-relaxed italic flex-1 mb-8">
                    "{t.quote}"
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-3 pt-6 border-t border-gray-100">
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center text-white font-black text-[17px] flex-shrink-0"
                      style={{ backgroundColor: t.color }}
                    >
                      {t.avatar}
                    </div>
                    <div>
                      <p className="text-[#000080] font-black text-[16px]">{t.name}</p>
                      <p className="text-black/80 text-[16px] font-medium">
                        {t.role} · {t.company}
                      </p>
                    </div>
                    <div className="ml-auto">
                      <span
                        className="px-2.5 py-1 text-[15px] font-black uppercase tracking-wider rounded-full"
                        style={{ backgroundColor: t.color + "10", color: t.color }}
                      >
                        {t.industry}
                      </span>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Right — metrics + nav */}
            <div className="flex flex-col gap-4">
              {/* Metric cards */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={active + "-metrics"}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ duration: 0.4 }}
                  className="grid grid-cols-2 gap-3"
                >
                  {t.metrics.map((m, j) => (
                    <div
                      key={j}
                      className="p-5 border border-gray-100 bg-white flex flex-col gap-1.5"
                      style={{ borderTopColor: t.color, borderTopWidth: 3 }}
                    >
                      <p
                        className="font-black text-[28px] lg:text-[32px] leading-none"
                        style={{ color: t.color }}
                      >
                        {m.val}
                      </p>
                      <p className="text-black/80 text-[15px] font-semibold uppercase tracking-wider">
                        {m.label}
                      </p>
                    </div>
                  ))}
                </motion.div>
              </AnimatePresence>

              {/* Dot indicators */}
              <div className="flex items-center gap-2 justify-center py-2">
                {TESTIMONIALS.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => { setDirection(i > active ? 1 : -1); setActive(i); }}
                    className="rounded-full transition-all duration-300"
                    style={{
                      width: i === active ? 24 : 8,
                      height: 8,
                      backgroundColor: i === active ? t.color : "#E5E7EB",
                    }}
                    aria-label={`Go to testimonial ${i + 1}`}
                  />
                ))}
              </div>

              {/* Prev/next */}
              <div className="flex gap-3">
                <button
                  onClick={() => paginate(-1)}
                  className="flex-1 flex items-center justify-center gap-2 py-3.5 border border-gray-200 hover:border-[#000080]/30 hover:bg-gray-50 text-black/80 hover:text-[#000080] font-bold text-[17px] rounded-xl transition-all duration-200"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft size={16} strokeWidth={2.5} />
                  Previous
                </button>
                <button
                  onClick={() => paginate(1)}
                  className="flex-1 flex items-center justify-center gap-2 py-3.5 border border-gray-200 hover:border-[#000080]/30 hover:bg-gray-50 text-black/80 hover:text-[#000080] font-bold text-[17px] rounded-xl transition-all duration-200"
                  aria-label="Next testimonial"
                >
                  Next
                  <ChevronRight size={16} strokeWidth={2.5} />
                </button>
              </div>

              {/* View all link */}
              <Link
                href="/work/success-stories"
                className="flex items-center justify-center gap-1.5 text-[#0818A8] hover:text-[#000080] font-black text-[16px] uppercase tracking-wide transition-colors group"
              >
                Read All Success Stories
                <ArrowRight size={13} strokeWidth={3} className="group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>
          </div>
        </FadeIn>

        {/* Mini testimonial strip */}
        <motion.div
          variants={stagger(0.08)}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4"
        >
          {TESTIMONIALS.slice(0, 3).map((test, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              onClick={() => { setDirection(i > active ? 1 : -1); setActive(i); }}
              className={`p-5 border cursor-pointer transition-all duration-200 ${
                active === i
                  ? "border-[#0818A8]/30 bg-[#000080]/4 shadow-md"
                  : "border-gray-100 bg-gray-50 hover:bg-white hover:border-gray-200 hover:shadow-sm"
              }`}
            >
              <div className="flex items-center gap-2 mb-3">
                <div
                  className="w-7 h-7 rounded-full flex items-center justify-center text-white text-[15px] font-black flex-shrink-0"
                  style={{ backgroundColor: test.color }}
                >
                  {test.avatar}
                </div>
                <div>
                  <p className="text-[#000080] font-black text-[16px]">{test.name}</p>
                  <p className="text-black/80 text-[15px]">{test.company}</p>
                </div>
              </div>
              <p className="text-black/80 text-[15px] leading-relaxed line-clamp-2 italic">
                "{test.quote.slice(0, 90)}…"
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Client logos strip */}
        <FadeIn className="mt-16" delay={0.15}>
          <p className="text-center text-gray-300 text-[15px] font-black tracking-[0.2em] uppercase mb-8">
            Trusted by leading brands across Nigeria & beyond
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 lg:gap-10">
            {LOGOS.map((logo, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ delay: 0.05 * i, duration: 0.5 }}
                className="px-5 py-2.5 border border-gray-100 bg-gray-50 hover:bg-white hover:border-gray-200 hover:shadow-sm transition-all duration-200 cursor-default"
              >
                <span className="text-black/80 font-black text-[16px] tracking-wide uppercase">
                  {logo}
                </span>
              </motion.div>
            ))}
          </div>
        </FadeIn>

      </div>
    </section>
  );
}

// ─── FINAL CTA SECTION ────────────────────────────────────────────────────────
function FinalCTA() {
  return (
    <section
      className="relative bg-[#04040e] py-24 lg:py-36 overflow-hidden"
      aria-labelledby="cta-heading"
    >
      {/* Hex grid */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.05]">
        <svg width="100%" height="100%" aria-hidden="true">
          <defs>
            <pattern id="cta-hex" x="0" y="0" width="80" height="69" patternUnits="userSpaceOnUse">
              <path
                d="M40 0 L74.64 20 L74.64 49 L40 69 L5.36 49 L5.36 20 Z"
                fill="none"
                stroke="rgba(99,149,255,0.8)"
                strokeWidth="0.8"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#cta-hex)" />
        </svg>
      </div>

      {/* Glow orbs */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] pointer-events-none"
        style={{
          background: "radial-gradient(ellipse, rgba(37,99,235,0.12) 0%, transparent 65%)",
        }}
      />
      <div
        className="absolute bottom-0 left-[10%] w-[400px] h-[400px] pointer-events-none rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(0,0,128,0.15) 0%, transparent 65%)",
        }}
      />

      {/* Top accent line */}
      <div
        className="absolute top-0 left-0 right-0 h-px pointer-events-none"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, rgba(59,130,246,0.5) 30%, rgba(99,149,255,0.9) 50%, rgba(59,130,246,0.5) 70%, transparent 100%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Left — headline + benefits */}
          <div>
            <FadeIn direction="right">
              <p className="text-blue-400 text-[15px] font-black tracking-[0.22em] uppercase mb-6 flex items-center gap-2">
                <Layers size={13} strokeWidth={2.5} />
                Ready to Build in Layers?
              </p>

              <h2
                id="cta-heading"
                className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-white uppercase leading-[0.92] tracking-tight mb-8"
              >
                LET'S BUILD
                <br />
                YOUR
                <br />
                <span
                  style={{
                    background: "linear-gradient(135deg, #3b82f6 0%, #93c5fd 50%, #60a5fa 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  DIGITAL
                  <br />
                  ENGINE
                </span>
              </h2>

              <p className="text-white/45 text-[17px] leading-relaxed max-w-md mb-10">
                Your brand. Your technology. Your marketing. Your media. All
                working as one layered system — built to dominate your market and
                compound in value every single day.
              </p>

              {/* Benefits checklist */}
              <ul className="space-y-3 mb-10">
                {CTA_BENEFITS.map((b, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 size={12} strokeWidth={2.5} className="text-blue-400" />
                    </div>
                    <span className="text-white/60 text-[17px] font-medium">{b}</span>
                  </li>
                ))}
              </ul>

              {/* Contact info */}
              <div className="flex items-center gap-2 text-white/25 text-[16px]">
                <Phone size={13} strokeWidth={2} />
                <span>+234 802 540 1891</span>
                <span className="text-white/15 mx-1">·</span>
                <span>6th Avenue, Gwarinpa, Abuja</span>
              </div>
            </FadeIn>
          </div>

          {/* Right — action cards */}
          <div className="space-y-4">
            <FadeIn delay={0.1} direction="left">

              {/* Primary action */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.25 }}
                className="relative p-8 bg-white overflow-hidden group cursor-pointer"
              >
                <div
                  className="absolute top-0 left-0 right-0 h-[3px]"
                  style={{
                    background: "linear-gradient(90deg, #000080 0%, #0818A8 50%, #2563EB 100%)",
                  }}
                />
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 rounded-xl bg-[#000080]/8 flex items-center justify-center flex-shrink-0">
                    <Rocket size={22} strokeWidth={2} className="text-[#000080]" />
                  </div>
                  <div className="flex-1">
                    <p className="text-[#000080] font-black text-[16px] uppercase tracking-tight mb-1">
                      Start a Project
                    </p>
                    <p className="text-black/80 text-[17px] leading-relaxed mb-5">
                      Tell us what you're building. We'll define the layers, scope the
                      work, and give you a clear plan within 48 hours.
                    </p>
                    <Link
                      href="/contact/project"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-[#000080] hover:bg-[#0818A8] text-white font-black text-[17px] rounded-xl transition-all duration-200 shadow-lg shadow-[#000080]/20 group/btn"
                    >
                      Start Your Project
                      <ArrowRight size={14} strokeWidth={3} className="group-hover/btn:translate-x-0.5 transition-transform" />
                    </Link>
                  </div>
                </div>
              </motion.div>

              {/* Secondary action */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.25 }}
                className="relative p-8 border border-white/8 bg-white/[0.03] hover:bg-white/[0.06] overflow-hidden group cursor-pointer transition-colors duration-200"
              >
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 rounded-xl bg-blue-500/15 flex items-center justify-center flex-shrink-0">
                    <CalendarCheck size={22} strokeWidth={2} className="text-blue-400" />
                  </div>
                  <div className="flex-1">
                    <p className="text-white font-black text-[16px] uppercase tracking-tight mb-1">
                      Book a Strategy Call
                    </p>
                    <p className="text-white/40 text-[17px] leading-relaxed mb-5">
                      30 minutes with a senior BitLayerX strategist. No pitch. Just
                      clarity on your biggest digital challenge and how to solve it.
                    </p>
                    <Link
                      href="/contact/call"
                      className="inline-flex items-center gap-2 px-6 py-3 border border-white/15 hover:border-blue-400/40 text-white/70 hover:text-white font-bold text-[17px] rounded-xl transition-all duration-200 group/btn"
                    >
                      Book a Free Call
                      <ArrowRight size={14} strokeWidth={2.5} className="group-hover/btn:translate-x-0.5 transition-transform" />
                    </Link>
                  </div>
                </div>
              </motion.div>

              {/* Proposal action */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.25 }}
                className="relative p-8 border border-white/8 bg-white/[0.03] hover:bg-white/[0.06] overflow-hidden group cursor-pointer transition-colors duration-200"
              >
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 rounded-xl bg-white/8 flex items-center justify-center flex-shrink-0">
                    <Send size={20} strokeWidth={2} className="text-white/50" />
                  </div>
                  <div className="flex-1">
                    <p className="text-white font-black text-[16px] uppercase tracking-tight mb-1">
                      Request a Proposal
                    </p>
                    <p className="text-white/40 text-[17px] leading-relaxed mb-5">
                      Know what you need? Send us the details and we'll come back
                      with a tailored proposal, timeline, and investment breakdown.
                    </p>
                    <Link
                      href="/contact/proposal"
                      className="inline-flex items-center gap-2 px-6 py-3 border border-white/10 hover:border-white/25 text-white/50 hover:text-white/80 font-bold text-[17px] rounded-xl transition-all duration-200 group/btn"
                    >
                      Request Proposal
                      <ArrowRight size={14} strokeWidth={2.5} className="group-hover/btn:translate-x-0.5 transition-transform" />
                    </Link>
                  </div>
                </div>
              </motion.div>

            </FadeIn>

            {/* Trust line */}
            <FadeIn delay={0.25} direction="left">
              <div className="flex items-center justify-center gap-6 pt-4">
                {[
                  { icon: ShieldCheck, text: "No hidden fees" },
                  { icon: Zap,         text: "48hr response" },
                  { icon: Users,       text: "500+ clients" },
                ].map((t, i) => {
                  const Icon = t.icon;
                  return (
                    <div key={i} className="flex items-center gap-1.5 text-white/25">
                      <Icon size={13} strokeWidth={2} />
                      <span className="text-[15px] font-semibold">{t.text}</span>
                    </div>
                  );
                })}
              </div>
            </FadeIn>
          </div>

        </div>
      </div>
    </section>
  );
}

// ─── ROOT EXPORT ──────────────────────────────────────────────────────────────
export default function TestimonialsAndCTA() {
  return (
    <>
      <TestimonialsSection />
      <FinalCTA />
    </>
  );
}