"use client";

import React, { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  TrendingUp,
  Zap,
  Users,
  ShieldCheck,
  Globe,
  Video,
  ExternalLink,
  Landmark,
  Truck,
  Home,
  ShoppingCart,
  Factory,
  ChevronRight,
  Star,
  Award,
  Target,
  Layers,
} from "lucide-react";

// ─── Animation helpers ────────────────────────────────────────────────────────
const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  },
};

const stagger = (d = 0.11) => ({
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
      animate={
        inView
          ? { opacity: 1, y: 0, x: 0 }
          : {}
      }
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ─── Case Studies Data ────────────────────────────────────────────────────────
const CASE_STUDIES = [
  {
    index: "01",
    tag: "E-commerce · Branding · Performance Marketing",
    industry: "E-commerce",
    duration: "6 months",
    title: "Scaling a Lagos Fashion Label to ₦120M Annual Revenue",
    description:
      "A homegrown fashion brand had exceptional products but zero digital authority. We rebuilt their brand identity, launched a custom e-commerce platform, and executed a 6-month performance marketing campaign — turning them into one of Lagos's most recognised online labels.",
    layers: ["Brand", "Technology", "Growth"],
    metrics: [
      { value: "₦120M", label: "Revenue Generated", icon: BarChart3 },
      { value: "340%",  label: "Organic Traffic Increase", icon: TrendingUp },
      { value: "4.2×",  label: "Return on Ad Spend", icon: Zap },
    ],
    accentColor: "#0818A8",
  },
  {
    index: "02",
    tag: "Fintech · UI/UX · Software Engineering",
    industry: "Fintech",
    duration: "4 months",
    title: "Building a CBN-Compliant Payments Platform for 50,000+ Users",
    description:
      "A Nigerian fintech startup needed a scalable, regulation-compliant payments infrastructure and consumer mobile app — built from scratch and shipped to production in under four months, handling thousands of daily transactions.",
    layers: ["Strategy", "Experience", "Technology"],
    metrics: [
      { value: "50K+",  label: "Active Users at Launch", icon: Users },
      { value: "99.9%", label: "Platform Uptime", icon: ShieldCheck },
      { value: "14 Days", label: "MVP to Live", icon: Zap },
    ],
    accentColor: "#1D4ED8",
  },
  {
    index: "03",
    tag: "Real Estate · Brand Identity · Commercial Video",
    industry: "Real Estate",
    duration: "3 months",
    title: "Positioning an Abuja Property Group as the Premium Market Leader",
    description:
      "A real estate developer wanted to move upmarket and command premium pricing. We delivered a complete rebrand, three cinematic property films, and a luxury digital presence — resulting in a dramatic surge in high-value property enquiries.",
    layers: ["Brand", "Media", "Experience"],
    metrics: [
      { value: "65%",   label: "Increase in Enquiries", icon: TrendingUp },
      { value: "₦2.1B", label: "Properties Sold Post-Launch", icon: BarChart3 },
      { value: "3",     label: "Cinematic Brand Films", icon: Video },
    ],
    accentColor: "#000080",
  },
  {
    index: "04",
    tag: "Logistics · Software · AI Automation",
    industry: "Logistics",
    duration: "5 months",
    title: "Automating Operations for a 200-Vehicle Fleet Company",
    description:
      "A logistics firm was drowning in manual coordination. We engineered a custom fleet management system with real-time GPS tracking, automated dispatch, client-facing portals, and AI-powered route optimisation — cutting costs nearly in half.",
    layers: ["Strategy", "Technology", "Growth"],
    metrics: [
      { value: "47%",  label: "Operational Cost Reduction", icon: BarChart3 },
      { value: "200+", label: "Vehicles Managed in Real-Time", icon: Globe },
      { value: "30 hrs", label: "Saved Per Week", icon: Zap },
    ],
    accentColor: "#0369A1",
  },
];

// ─── Industries Data ──────────────────────────────────────────────────────────
const INDUSTRIES = [
  {
    icon: Landmark,
    label: "Fintech",
    href: "/industries/fintech",
    description:
      "CBN-compliant platforms, payment infrastructure, investment apps, and digital banking experiences built for scale and security.",
    stats: ["Payment platforms", "Investment apps", "KYC & compliance systems"],
    color: "#0818A8",
    featured: true,
  },
  {
    icon: Truck,
    label: "Logistics",
    href: "/industries/logistics",
    description:
      "Fleet management systems, real-time tracking platforms, dispatch automation, and supply chain visibility tools.",
    stats: ["Fleet management", "Route optimisation", "Client portals"],
    color: "#1D4ED8",
    featured: false,
  },
  {
    icon: Home,
    label: "Real Estate",
    href: "/industries/real-estate",
    description:
      "Property listing platforms, developer brand identities, cinematic project videos, and lead-generation marketing systems.",
    stats: ["Property platforms", "Brand & video", "Lead generation"],
    color: "#000080",
    featured: false,
  },
  {
    icon: ShoppingCart,
    label: "E-commerce",
    href: "/industries/ecommerce",
    description:
      "High-conversion online stores, marketplace platforms, performance marketing campaigns, and abandoned cart automation.",
    stats: ["Custom storefronts", "Performance ads", "Cart automation"],
    color: "#2563EB",
    featured: false,
  },
  {
    icon: Factory,
    label: "Corporate & Enterprise",
    href: "/industries/enterprise",
    description:
      "Enterprise web platforms, internal systems, ERP integrations, brand governance, and long-term digital transformation partnerships.",
    stats: ["Enterprise platforms", "ERP integrations", "Brand governance"],
    color: "#0369A1",
    featured: false,
  },
];

// ─── FEATURED WORK SECTION ────────────────────────────────────────────────────
function FeaturedWork() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      className="bg-[#04040e] py-24 lg:py-32 overflow-hidden relative"
      aria-labelledby="work-heading"
      itemScope
      itemType="https://schema.org/CreativeWork"
    >
      {/* Background grid */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.04]">
        <svg width="100%" height="100%" aria-hidden="true">
          <defs>
            <pattern id="work-grid" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="rgba(99,149,255,1)" strokeWidth="0.8" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#work-grid)" />
        </svg>
      </div>

      {/* Top accent line */}
      <div
        className="absolute top-0 left-0 right-0 h-px pointer-events-none"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, rgba(59,130,246,0.5) 30%, rgba(99,149,255,0.8) 50%, rgba(59,130,246,0.5) 70%, transparent 100%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">

        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16 lg:mb-20">
          <FadeIn direction="right">
            <p className="text-blue-400 text-[11px] font-black tracking-[0.22em] uppercase mb-4 flex items-center gap-2">
              <Award size={13} strokeWidth={2.5} />
              Proof of Execution
            </p>
            <h2
              id="work-heading"
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-white uppercase leading-[0.92] tracking-tight"
            >
              FEATURED
              <br />
              <span
                style={{
                  background: "linear-gradient(135deg, #3b82f6 0%, #93c5fd 50%, #60a5fa 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                WORK
              </span>
            </h2>
          </FadeIn>

          <FadeIn direction="left" delay={0.1} className="lg:max-w-xs">
            <p className="text-white/35 text-[14px] leading-relaxed mb-5 lg:text-right">
              Results over visuals. Every project is measured in business impact — not aesthetics.
            </p>
            <div className="lg:flex lg:justify-end">
              <Link
                href="/work"
                className="inline-flex items-center gap-1.5 text-blue-400 hover:text-blue-300 font-black text-[12px] uppercase tracking-wide transition-colors group"
              >
                View All Projects
                <ArrowRight size={13} strokeWidth={3} className="group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>
          </FadeIn>
        </div>

        {/* Case Studies */}
        <motion.div
          ref={ref}
          variants={stagger(0.13)}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="space-y-px"
        >
          {CASE_STUDIES.map((cs, i) => (
            <motion.article
              key={i}
              variants={fadeUp}
              className={`group grid lg:grid-cols-2 min-h-[380px] lg:min-h-[420px]`}
              itemProp="workExample"
            >
              {/* ── Metrics panel ── */}
              <div
                className={`relative flex flex-col justify-between p-8 lg:p-12 overflow-hidden ${
                  i % 2 === 1 ? "lg:order-2" : ""
                }`}
                style={{
                  background: `linear-gradient(135deg, ${cs.accentColor}f0 0%, ${cs.accentColor}cc 100%)`,
                }}
              >
                {/* Subtle dot pattern */}
                <div
                  className="absolute inset-0 opacity-[0.08] pointer-events-none"
                  style={{
                    backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
                    backgroundSize: "28px 28px",
                  }}
                />

                {/* Large index */}
                <div
                  className="absolute bottom-4 right-6 text-[100px] lg:text-[130px] font-black leading-none text-white/5 select-none pointer-events-none"
                  aria-hidden="true"
                >
                  {cs.index}
                </div>

                <div className="relative z-10">
                  {/* Tag */}
                  <p className="text-white/60 text-[10px] font-bold tracking-[0.18em] uppercase mb-6">
                    {cs.tag}
                  </p>

                  {/* Metrics grid */}
                  <div className="grid grid-cols-3 gap-3 sm:gap-5">
                    {cs.metrics.map((m, j) => {
                      const Icon = m.icon;
                      return (
                        <motion.div
                          key={j}
                          initial={{ opacity: 0, y: 16 }}
                          animate={inView ? { opacity: 1, y: 0 } : {}}
                          transition={{ delay: 0.2 + i * 0.1 + j * 0.08, duration: 0.5 }}
                          className="flex flex-col gap-2"
                        >
                          <div className="w-8 h-8 rounded-lg bg-white/15 flex items-center justify-center flex-shrink-0">
                            <Icon size={14} strokeWidth={2} className="text-white/80" />
                          </div>
                          <p className="text-white font-black text-[22px] sm:text-[28px] lg:text-[32px] leading-none">
                            {m.value}
                          </p>
                          <p className="text-white/50 text-[10px] sm:text-[11px] font-semibold leading-tight">
                            {m.label}
                          </p>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>

                {/* Layer badges */}
                <div className="relative z-10 mt-8 flex flex-wrap gap-2">
                  {cs.layers.map((l, j) => (
                    <span
                      key={j}
                      className="px-3 py-1 border border-white/20 bg-white/10 text-white/70 text-[10px] font-bold tracking-wider uppercase rounded-full"
                    >
                      {l} Layer
                    </span>
                  ))}
                </div>
              </div>

              {/* ── Content panel ── */}
              <div
                className={`flex flex-col justify-between p-8 lg:p-12 bg-white group-hover:bg-gray-50/80 transition-colors duration-300 border-t lg:border-t-0 border-white/5 ${
                  i % 2 === 1 ? "lg:order-1" : ""
                }`}
              >
                <div>
                  {/* Industry + duration */}
                  <div className="flex items-center gap-3 mb-6">
                    <span
                      className="px-3 py-1 text-[10px] font-black tracking-wider uppercase rounded-full"
                      style={{
                        backgroundColor: cs.accentColor + "12",
                        color: cs.accentColor,
                      }}
                    >
                      {cs.industry}
                    </span>
                    <span className="text-gray-200 text-[11px]">·</span>
                    <span className="text-gray-400 text-[11px] font-semibold">{cs.duration}</span>
                  </div>

                  {/* Title */}
                  <h3
                    className="text-[19px] sm:text-[22px] lg:text-[24px] font-black text-[#000080] uppercase leading-tight tracking-tight mb-5"
                    itemProp="name"
                  >
                    {cs.title}
                  </h3>

                  {/* Description */}
                  <p
                    className="text-gray-500 text-[13px] lg:text-[14px] leading-relaxed"
                    itemProp="description"
                  >
                    {cs.description}
                  </p>
                </div>

                {/* CTA row */}
                <div className="flex items-center justify-between mt-8 pt-6 border-t border-gray-100">
                  <Link
                    href="/work"
                    className="inline-flex items-center gap-2 font-black text-[12px] uppercase tracking-wide transition-colors group/link"
                    style={{ color: cs.accentColor }}
                  >
                    View Case Study
                    <ArrowRight
                      size={13}
                      strokeWidth={3}
                      className="group-hover/link:translate-x-0.5 transition-transform"
                    />
                  </Link>
                  <ExternalLink size={15} strokeWidth={1.5} className="text-gray-200" />
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <FadeIn className="text-center mt-14" delay={0.2}>
          <Link
            href="/work"
            className="inline-flex items-center gap-2.5 px-9 py-4 bg-white hover:bg-white/90 text-[#000080] font-black text-[13px] rounded-xl transition-all duration-300 shadow-lg shadow-white/10 group"
          >
            See All Case Studies
            <ArrowRight
              size={14}
              strokeWidth={3}
              className="group-hover:translate-x-0.5 transition-transform"
            />
          </Link>
        </FadeIn>

      </div>
    </section>
  );
}

// ─── INDUSTRIES SECTION ───────────────────────────────────────────────────────
function IndustriesSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [hovered, setHovered] = useState(null);

  return (
    <section
      className="bg-white py-24 lg:py-32 overflow-hidden"
      aria-labelledby="industries-heading"
      itemScope
      itemType="https://schema.org/ItemList"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">

        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16 lg:mb-20">
          <FadeIn direction="right">
            <p className="text-[#0818A8] text-[11px] font-black tracking-[0.22em] uppercase mb-4 flex items-center gap-2">
              <Target size={13} strokeWidth={2.5} />
              Specialists, Not Generalists
            </p>
            <h2
              id="industries-heading"
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-[#000080] uppercase leading-[0.92] tracking-tight"
            >
              INDUSTRIES
              <br />
              <span className="text-[#0818A8]">WE POWER</span>
            </h2>
          </FadeIn>

          <FadeIn direction="left" delay={0.1} className="lg:max-w-sm">
            <p className="text-gray-400 text-[14px] leading-relaxed lg:text-right">
              We don't work with everyone — we go deep in the industries where
              our layered approach creates the most measurable impact.
            </p>
          </FadeIn>
        </div>

        {/* Industry cards */}
        <motion.div
          ref={ref}
          variants={stagger(0.1)}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-100"
        >
          {INDUSTRIES.map((ind, i) => {
            const Icon = ind.icon;
            const isHovered = hovered === i;

            return (
              <motion.div
                key={i}
                variants={fadeUp}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
                className={`relative bg-white overflow-hidden transition-all duration-300 ${
                  isHovered ? "shadow-2xl shadow-[#000080]/10 z-10" : ""
                } ${i === 0 ? "sm:col-span-2 lg:col-span-1" : ""}`}
                itemProp="itemListElement"
                itemScope
                itemType="https://schema.org/Thing"
              >
                {/* Top accent bar */}
                <div
                  className="absolute top-0 left-0 right-0 h-[3px] transition-transform duration-300 origin-left"
                  style={{
                    backgroundColor: ind.color,
                    transform: isHovered ? "scaleX(1)" : "scaleX(0.3)",
                    opacity: isHovered ? 1 : 0.4,
                  }}
                />

                <Link href={ind.href} className="block p-8 lg:p-9 h-full group">
                  {/* Icon */}
                  <div
                    className="w-12 h-12 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300"
                    style={{
                      backgroundColor: isHovered ? ind.color : ind.color + "12",
                    }}
                  >
                    <Icon
                      size={22}
                      strokeWidth={1.75}
                      className="transition-colors duration-300"
                      style={{ color: isHovered ? "#fff" : ind.color }}
                    />
                  </div>

                  {/* Label */}
                  <p
                    className="text-[11px] font-black tracking-[0.2em] uppercase mb-2 transition-colors duration-300"
                    style={{ color: ind.color }}
                    itemProp="name"
                  >
                    {ind.label}
                  </p>

                  {/* Description */}
                  <p
                    className="text-gray-500 text-[13px] leading-relaxed mb-6 transition-colors duration-300 group-hover:text-gray-700"
                    itemProp="description"
                  >
                    {ind.description}
                  </p>

                  {/* Stat chips */}
                  <ul className="space-y-2 mb-8">
                    {ind.stats.map((s, j) => (
                      <li key={j} className="flex items-center gap-2">
                        <div
                          className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                          style={{ backgroundColor: ind.color }}
                        />
                        <span className="text-gray-400 text-[12px] font-semibold">{s}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA link */}
                  <div
                    className="flex items-center gap-1.5 text-[11px] font-black uppercase tracking-wide transition-all duration-300"
                    style={{
                      color: isHovered ? ind.color : "#D1D5DB",
                    }}
                  >
                    Explore
                    <ChevronRight
                      size={13}
                      strokeWidth={3}
                      className={`transition-transform duration-300 ${isHovered ? "translate-x-1" : ""}`}
                    />
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Industries CTA strip */}
        <FadeIn delay={0.2}>
          <div className="mt-px bg-gray-100 p-px">
            <div className="bg-[#04040e] p-8 lg:p-10 flex flex-col sm:flex-row items-center justify-between gap-6">
              {/* Left */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-blue-500/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Layers size={18} strokeWidth={2} className="text-blue-400" />
                </div>
                <div>
                  <p className="text-white font-black text-[15px] lg:text-[17px] uppercase tracking-tight mb-1">
                    Don't see your industry?
                  </p>
                  <p className="text-white/35 text-[13px]">
                    Our layered approach adapts to any sector. Let's talk about yours.
                  </p>
                </div>
              </div>

              {/* Right */}
              <div className="flex items-center gap-3 flex-shrink-0">
                <Link
                  href="/contact/project"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white hover:bg-white/90 text-[#000080] font-black text-[13px] rounded-xl transition-all duration-200 shadow-lg shadow-white/5 group"
                >
                  Start a Conversation
                  <ArrowRight
                    size={13}
                    strokeWidth={3}
                    className="group-hover:translate-x-0.5 transition-transform"
                  />
                </Link>
              </div>
            </div>
          </div>
        </FadeIn>

      </div>
    </section>
  );
}

// ─── Root Export ──────────────────────────────────────────────────────────────
export default function FeaturedWorkAndIndustries() {
  return (
    <>
      <FeaturedWork />
      <IndustriesSection />
    </>
  );
}