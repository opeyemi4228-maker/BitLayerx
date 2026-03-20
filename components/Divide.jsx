"use client";

import React, { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  GitMerge,
  Layers,
  BarChart3,
  ShieldCheck,
  TrendingUp,
  Users,
  Award,
  Target,
  CheckCircle2,
  Play,
  Film,
  Megaphone,
  Sparkles,
  Eye,
  ChevronRight,
  Zap,
  Globe,
  Video,
} from "lucide-react";

// ─── Shared animation helpers ─────────────────────────────────────────────────
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

const DIFFERENTIATORS = [
  {
    icon: GitMerge,
    title: "We Build Systems, Not Silos",
    description:
      "Most agencies deliver one piece of the puzzle. BitLayerX architects the entire ecosystem — every layer engineered to integrate with and amplify the others.",
    highlight: "One system. Six layers. Zero gaps.",
  },
  {
    icon: Layers,
    title: "Strategy Before Execution",
    description:
      "We never start with design or development. We start with strategy — your market position, your audience, and your growth trajectory come first.",
    highlight: "Every decision is deliberate.",
  },
  {
    icon: BarChart3,
    title: "Measured in Revenue, Not Deliverables",
    description:
      "We don't celebrate outputs. We celebrate outcomes. Every engagement is tracked against real business metrics — leads, conversions, and growth.",
    highlight: "Results that show up in your bank account.",
  },
  {
    icon: ShieldCheck,
    title: "Built for the Long Term",
    description:
      "Everything we create — your website, your brand, your tech — is engineered to compound in value over time. Digital assets, not decorations.",
    highlight: "Infrastructure that grows with you.",
  },
];

const COMPARISONS = [
  { label: "Design & Development aligned",     bitlayerx: true, others: false },
  { label: "Brand & Marketing unified",        bitlayerx: true, others: false },
  { label: "Strategy before execution",        bitlayerx: true, others: false },
  { label: "Single point of accountability",   bitlayerx: true, others: false },
  { label: "Revenue-focused reporting",        bitlayerx: true, others: false },
  { label: "Layered digital ecosystem",        bitlayerx: true, others: false },
];

const STATS = [
  { val: "500+", label: "Brands Transformed", icon: Award },
  { val: "6",    label: "Integrated Layers",  icon: Layers },
  { val: "98%",  label: "Client Retention",   icon: Users },
  { val: "250%", label: "Average ROI",        icon: TrendingUp },
];

const MEDIA_ITEMS = [
  {
    id: "brand-film",
    category: "Brand Film",
    title: "Redefining a Lagos Fashion Label",
    description:
      "A cinematic brand story that drove 340% traffic growth and ₦120M in revenue.",
    duration: "2:45",
    icon: Film,
    stats: [{ value: "4.2M",  label: "Views" }, { value: "₦120M", label: "Revenue Impact" }],
    gradient: "from-[#000080] via-[#0818A8] to-[#1D4ED8]",
    color: "#0818A8",
  },
  {
    id: "ad-campaign",
    category: "Performance Ad",
    title: "Fintech Product Launch Campaign",
    description:
      "A high-impact 30-second ad that generated 50,000 app signups in the first month.",
    duration: "0:30",
    icon: Megaphone,
    stats: [{ value: "50K+", label: "App Signups" }, { value: "6.8×", label: "ROAS" }],
    gradient: "from-[#0369A1] via-[#0818A8] to-[#1D4ED8]",
    color: "#1D4ED8",
  },
  {
    id: "property-film",
    category: "Commercial Video",
    title: "Luxury Real Estate Developer Film",
    description:
      "Three premium property films that repositioned a developer as Abuja's market leader.",
    duration: "3:12",
    icon: Eye,
    stats: [{ value: "65%",   label: "More Enquiries" }, { value: "₦2.1B", label: "Properties Sold" }],
    gradient: "from-[#000080] via-[#00005a] to-[#0369A1]",
    color: "#000080",
  },
  {
    id: "social-campaign",
    category: "Social Campaign",
    title: "E-commerce Brand Awareness Series",
    description:
      "A 12-part content series that built a 250K following and doubled monthly revenue.",
    duration: "0:45",
    icon: Sparkles,
    stats: [{ value: "250K", label: "New Followers" }, { value: "2×", label: "Monthly Revenue" }],
    gradient: "from-[#0818A8] via-[#000080] to-[#0369A1]",
    color: "#0369A1",
  },
];

const MEDIA_CAPABILITIES = [
  {
    icon: Film,
    label: "Brand Films",
    desc: "Cinematic stories that define your brand and captivate audiences across every platform.",
  },
  {
    icon: Megaphone,
    label: "Performance Ads",
    desc: "High-converting ad creatives built for Meta, Google, YouTube & TikTok campaigns.",
  },
  {
    icon: Sparkles,
    label: "Social Content",
    desc: "Monthly content production that keeps your brand dominant, relevant, and growing.",
  },
];

// ─── WHY BITLAYERX ────────────────────────────────────────────────────────────
function WhyBitLayerX() {
  const listRef = useRef(null);
  const listInView = useInView(listRef, { once: true, margin: "-80px" });

  return (
    <section
      className="bg-white py-24 lg:py-32 overflow-hidden"
      aria-labelledby="why-heading"
      itemScope
      itemType="https://schema.org/Organization"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">

        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16 lg:mb-20">
          <FadeIn direction="right">
            <p className="text-[#0818A8] text-[11px] font-black tracking-[0.22em] uppercase mb-4 flex items-center gap-2">
              <Target size={13} strokeWidth={2.5} />
              The BitLayerX Difference
            </p>
            <h2
              id="why-heading"
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-[#000080] uppercase leading-[0.92] tracking-tight"
            >
              WHY
              <br />
              <span className="text-[#0818A8]">BITLAYERX</span>
            </h2>
          </FadeIn>
          <FadeIn direction="left" delay={0.1} className="lg:max-w-sm">
            <p className="text-gray-400 text-[14px] leading-relaxed lg:text-right">
              Most agencies operate in silos. BitLayerX operates in layers —
              every discipline integrated, every outcome compounding.
            </p>
          </FadeIn>
        </div>

        {/* Two-column body */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">

          {/* Left — differentiator cards */}
          <motion.div
            ref={listRef}
            variants={stagger(0.12)}
            initial="hidden"
            animate={listInView ? "show" : "hidden"}
            className="space-y-4"
          >
            {DIFFERENTIATORS.map((d, i) => {
              const Icon = d.icon;
              return (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  className="group flex gap-5 p-7 bg-gray-50 hover:bg-white border border-transparent hover:border-[#000080]/10 hover:shadow-xl hover:shadow-[#000080]/5 transition-all duration-300 cursor-default"
                >
                  <div className="w-11 h-11 rounded-xl bg-[#000080]/8 group-hover:bg-[#000080]/14 flex items-center justify-center flex-shrink-0 mt-0.5 transition-colors duration-300">
                    <Icon size={20} strokeWidth={2} className="text-[#0818A8]" />
                  </div>
                  <div>
                    <h3 className="text-[15px] lg:text-[16px] font-black text-[#000080] uppercase tracking-tight mb-2">
                      {d.title}
                    </h3>
                    <p className="text-gray-500 text-[13px] leading-relaxed mb-3">
                      {d.description}
                    </p>
                    <p className="text-[11px] font-black tracking-wide text-[#0818A8] uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      → {d.highlight}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Right — comparison + quote + CTA */}
          <div className="space-y-8">

            {/* Comparison table */}
            <FadeIn delay={0.2} direction="left">
              <div className="border border-gray-100 overflow-hidden shadow-lg shadow-gray-100/80">
                <div className="grid grid-cols-3 bg-[#000080] px-6 py-4">
                  <div />
                  <p className="text-center text-white font-black text-[12px] uppercase tracking-widest">
                    BitLayerX
                  </p>
                  <p className="text-center text-white/40 font-bold text-[12px] uppercase tracking-widest">
                    Typical Agency
                  </p>
                </div>
                {COMPARISONS.map((row, i) => (
                  <div
                    key={i}
                    className={`grid grid-cols-3 px-6 py-4 items-center border-b border-gray-50 last:border-b-0 ${
                      i % 2 === 0 ? "bg-white" : "bg-gray-50/50"
                    }`}
                  >
                    <p className="text-gray-600 text-[12px] font-semibold pr-4">{row.label}</p>
                    <div className="flex justify-center">
                      <div className="w-6 h-6 rounded-full bg-[#000080]/10 flex items-center justify-center">
                        <CheckCircle2 size={14} strokeWidth={2.5} className="text-[#000080]" />
                      </div>
                    </div>
                    <div className="flex justify-center">
                      <div className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center">
                        <span className="text-gray-300 text-[13px] font-black leading-none">✕</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </FadeIn>

            {/* Quote block */}
            <FadeIn delay={0.3} direction="left">
              <div className="relative p-8 bg-[#04040e] overflow-hidden">
                <div
                  className="absolute top-0 left-0 right-0 h-[3px]"
                  style={{
                    background: "linear-gradient(90deg, #0818A8 0%, #2563EB 50%, #0818A8 100%)",
                  }}
                />
                <div
                  className="absolute top-4 right-6 text-[80px] font-black leading-none text-white/5 select-none"
                  aria-hidden="true"
                >
                  "
                </div>
                <p className="text-white/80 text-[15px] lg:text-[16px] leading-relaxed font-medium mb-6 relative z-10">
                  "Everything is a layer, and every layer must work perfectly
                  together. We don't build websites, apps, or campaigns — we
                  build the digital systems that power modern business success."
                </p>
                <div className="flex items-center gap-3 relative z-10">
                  <div className="w-9 h-9 rounded-full bg-[#0818A8] flex items-center justify-center">
                    <Layers size={16} strokeWidth={2} className="text-white" />
                  </div>
                  <div>
                    <p className="text-white font-black text-[13px]">BitLayerX</p>
                    <p className="text-white/30 text-[11px] font-medium">Digital Innovation Company</p>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* CTAs */}
            <FadeIn delay={0.4} direction="left">
              <div className="flex items-center gap-3 flex-wrap">
                <Link
                  href="/about/why"
                  className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#000080] hover:bg-[#0818A8] text-white font-black text-[13px] rounded-xl transition-all duration-200 shadow-lg shadow-[#000080]/20 group"
                >
                  Why Clients Choose Us
                  <ArrowRight size={14} strokeWidth={3} className="group-hover:translate-x-0.5 transition-transform" />
                </Link>
                <Link
                  href="/contact/project"
                  className="inline-flex items-center gap-2 px-6 py-3.5 border border-[#000080]/20 text-[#000080] font-bold text-[13px] rounded-xl hover:border-[#000080]/40 hover:bg-[#000080]/4 transition-all duration-200"
                >
                  Start a Project
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>

        {/* Stats strip */}
        <FadeIn delay={0.2} className="mt-20">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-gray-100">
            {STATS.map((s, i) => {
              const Icon = s.icon;
              return (
                <div
                  key={i}
                  className="bg-white px-8 py-8 flex items-center gap-4 hover:bg-gray-50 transition-colors duration-200"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#000080]/8 flex items-center justify-center flex-shrink-0">
                    <Icon size={18} strokeWidth={2} className="text-[#0818A8]" />
                  </div>
                  <div>
                    <p className="text-[#000080] font-black text-[28px] leading-none">{s.val}</p>
                    <p className="text-gray-400 text-[11px] font-semibold mt-1 uppercase tracking-wider">{s.label}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </FadeIn>

      </div>
    </section>
  );
}

// ─── VIDEO CARD ───────────────────────────────────────────────────────────────
function VideoCard({ item }) {
  const [hovered, setHovered] = useState(false);
  const Icon = item.icon;

  return (
    <motion.div
      variants={fadeUp}
      className="group relative overflow-hidden cursor-pointer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      role="article"
      aria-label={item.title}
    >
      {/* Thumbnail area */}
      <div className={`relative bg-gradient-to-br ${item.gradient} overflow-hidden`}
        style={{ aspectRatio: "16/9" }}
      >
        {/* Hex texture */}
        <div className="absolute inset-0 opacity-[0.08] pointer-events-none">
          <svg width="100%" height="100%" aria-hidden="true">
            <defs>
              <pattern id={`vh-${item.id}`} x="0" y="0" width="40" height="35" patternUnits="userSpaceOnUse">
                <path
                  d="M20 0 L37.3 10 L37.3 25 L20 35 L2.7 25 L2.7 10 Z"
                  fill="none"
                  stroke="rgba(255,255,255,0.9)"
                  strokeWidth="0.5"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill={`url(#vh-${item.id})`} />
          </svg>
        </div>

        {/* Category badge */}
        <div className="absolute top-3 left-3 z-10 flex items-center gap-1.5 px-3 py-1.5 bg-black/40 backdrop-blur-sm border border-white/10 rounded-full">
          <Icon size={10} strokeWidth={2.5} className="text-white/80" />
          <span className="text-white/80 text-[10px] font-black tracking-widest uppercase">{item.category}</span>
        </div>

        {/* Duration */}
        <div className="absolute top-3 right-3 z-10 px-2.5 py-1 bg-black/40 backdrop-blur-sm rounded-full">
          <span className="text-white/60 text-[10px] font-bold">{item.duration}</span>
        </div>

        {/* Play button */}
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <motion.div
            animate={{ scale: hovered ? 1.12 : 1 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="w-14 h-14 rounded-full bg-white/15 backdrop-blur-sm border border-white/25 flex items-center justify-center shadow-2xl"
          >
            <Play size={18} className="text-white ml-1" fill="currentColor" strokeWidth={0} />
          </motion.div>
        </div>

        {/* Hover overlay */}
        <motion.div
          animate={{ opacity: hovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 bg-black/25 z-[5]"
        />

        {/* Stats bar */}
        <div className="absolute bottom-0 left-0 right-0 p-4 z-10 bg-gradient-to-t from-black/60 to-transparent">
          <div className="flex items-center gap-5">
            {item.stats.map((s, j) => (
              <div key={j} className="flex items-baseline gap-1">
                <span className="text-white font-black text-[15px]">{s.value}</span>
                <span className="text-white/45 text-[10px] font-semibold">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Card footer */}
      <div className="p-5 bg-white border-t border-gray-50 group-hover:bg-gray-50/80 transition-colors duration-200">
        <h3 className="text-[13px] font-black text-[#000080] uppercase leading-tight tracking-tight mb-1.5">
          {item.title}
        </h3>
        <p className="text-gray-400 text-[12px] leading-relaxed mb-3">{item.description}</p>
        <div
          className="flex items-center gap-1.5 text-[11px] font-black uppercase tracking-wide opacity-0 group-hover:opacity-100 transition-opacity duration-200"
          style={{ color: item.color }}
        >
          View Project <ChevronRight size={12} strokeWidth={3} />
        </div>
      </div>
    </motion.div>
  );
}

// ─── MEDIA SHOWCASE ───────────────────────────────────────────────────────────
function MediaShowcase() {
  const gridRef = useRef(null);
  const gridInView = useInView(gridRef, { once: true, margin: "-80px" });

  return (
    <section
      className="bg-[#04040e] py-24 lg:py-32 overflow-hidden relative"
      aria-labelledby="media-heading"
      itemScope
      itemType="https://schema.org/VideoGallery"
    >
      {/* Diagonal texture */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.025]">
        <svg width="100%" height="100%" aria-hidden="true">
          <defs>
            <pattern id="media-diag" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
              <line x1="0" y1="60" x2="60" y2="0" stroke="white" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#media-diag)" />
        </svg>
      </div>

      {/* Glow orb */}
      <div
        className="absolute top-0 right-[10%] w-[500px] h-[500px] pointer-events-none rounded-full"
        style={{ background: "radial-gradient(circle, rgba(37,99,235,0.10) 0%, transparent 65%)" }}
      />

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
              <Film size={13} strokeWidth={2.5} />
              Media Layer in Action
            </p>
            <h2
              id="media-heading"
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-white uppercase leading-[0.92] tracking-tight"
            >
              COMMERCIALS
              <br />
              <span
                style={{
                  background: "linear-gradient(135deg, #3b82f6 0%, #93c5fd 50%, #60a5fa 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                &amp; MEDIA
              </span>
            </h2>
          </FadeIn>

          <FadeIn direction="left" delay={0.1} className="lg:max-w-xs">
            <p className="text-white/35 text-[14px] leading-relaxed mb-5 lg:text-right">
              Nothing builds trust and drives action faster than great video.
              Every frame is engineered for impact.
            </p>
            <div className="lg:flex lg:justify-end">
              <Link
                href="/services/video"
                className="inline-flex items-center gap-1.5 text-blue-400 hover:text-blue-300 font-black text-[12px] uppercase tracking-wide transition-colors group"
              >
                Explore Media Services
                <ArrowRight size={13} strokeWidth={3} className="group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>
          </FadeIn>
        </div>

        {/* Video grid */}
        <motion.div
          ref={gridRef}
          variants={stagger(0.1)}
          initial="hidden"
          animate={gridInView ? "show" : "hidden"}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/5"
        >
          {MEDIA_ITEMS.map((item) => (
            <VideoCard key={item.id} item={item} />
          ))}
        </motion.div>

        {/* Capabilities strip */}
        <FadeIn delay={0.2} className="mt-14">
          <div className="grid sm:grid-cols-3 gap-px bg-white/5 border border-white/5">
            {MEDIA_CAPABILITIES.map((cap, i) => {
              const Icon = cap.icon;
              return (
                <div
                  key={i}
                  className="flex items-start gap-4 p-6 bg-white/[0.03] hover:bg-white/[0.06] transition-colors duration-200"
                >
                  <div className="w-9 h-9 rounded-xl bg-blue-500/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Icon size={16} strokeWidth={2} className="text-blue-400" />
                  </div>
                  <div>
                    <p className="text-white font-black text-[13px] uppercase tracking-tight mb-1">{cap.label}</p>
                    <p className="text-white/35 text-[12px] leading-relaxed">{cap.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </FadeIn>

        {/* Bottom CTAs */}
        <FadeIn className="text-center mt-14" delay={0.25}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/services/video"
              className="inline-flex items-center gap-2.5 px-9 py-4 bg-white hover:bg-white/90 text-[#000080] font-black text-[13px] rounded-xl transition-all duration-300 shadow-lg shadow-white/10 group"
            >
              <Play size={13} fill="currentColor" strokeWidth={0} />
              Start Your Video Project
              <ArrowRight size={14} strokeWidth={3} className="group-hover:translate-x-0.5 transition-transform" />
            </Link>
            <Link
              href="/work"
              className="inline-flex items-center gap-2 px-9 py-4 border border-white/15 hover:border-blue-400/40 bg-white/5 hover:bg-blue-500/10 text-white/70 hover:text-white font-bold text-[13px] rounded-xl transition-all duration-300"
            >
              See All Production Work
            </Link>
          </div>
        </FadeIn>

      </div>
    </section>
  );
}

// ─── ROOT EXPORT ──────────────────────────────────────────────────────────────
export default function WhyBitLayerXAndMedia() {
  return (
    <>
      <WhyBitLayerX />
      <MediaShowcase />
    </>
  );
}