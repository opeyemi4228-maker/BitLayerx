"use client";

import React, { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  Landmark,
  Truck,
  Home,
  ShoppingCart,
  Factory,
  Target,
  Eye,
  GitBranch,
  Award,
  Video,
  TrendingUp,
  CheckCircle2,
  BarChart3,
  Users,
  Zap,
  ShieldCheck,
  Globe,
  ChevronRight,
  Layers,
  ArrowUpRight,
  Building2,
  CreditCard,
  Package,
  MapPin,
  Cpu,
  LineChart,
} from "lucide-react";

// ─── Animation helpers ────────────────────────────────────────────────────────
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
};
const stagger = (d = 0.1) => ({ hidden: {}, show: { transition: { staggerChildren: d } } });

function FadeIn({ children, className = "", delay = 0, direction = "up" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
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

// ─── INDUSTRY DATA ────────────────────────────────────────────────────────────
const INDUSTRIES = [
  {
    id: "fintech",
    icon: Landmark,
    label: "Fintech",
    headline: "Finance-Grade Digital Products",
    subline: "Secure. Compliant. Scalable.",
    color: "#0818A8",
    intro:
      "The fintech sector demands precision — regulation-compliant platforms, military-grade security, and seamless user experiences that inspire trust at scale. We've engineered payment infrastructure, investment platforms, and digital banking experiences trusted by thousands of daily users.",
    challenges: [
      "CBN & SEC compliance requirements",
      "High-stakes security & fraud prevention",
      "Building user trust in financial UX",
      "Scaling under transaction volume pressure",
    ],
    howWeHelp: [
      "Regulation-aware architecture from day one",
      "KYC/AML integration & identity verification",
      "End-to-end encrypted data infrastructure",
      "Conversion-optimised onboarding flows",
      "Real-time transaction dashboards",
      "Performance marketing for user acquisition",
    ],
    layers: ["Strategy", "Experience", "Technology", "Growth"],
    metrics: [
      { val: "50K+", label: "Users Onboarded", icon: Users },
      { val: "99.9%", label: "Platform Uptime", icon: ShieldCheck },
      { val: "14 Days", label: "MVP to Live", icon: Zap },
    ],
    caseStudy: {
      title: "CBN-Compliant Payments Platform",
      result: "50,000+ users in 30 days, 99.9% uptime, 6.8× ROAS on launch campaign",
    },
    capabilities: [
      "Payment gateway development",
      "Investment & portfolio platforms",
      "Digital banking applications",
      "KYC/AML compliance systems",
      "Mobile money & wallet apps",
      "Fintech brand & UI/UX design",
    ],
    href: "/industries/fintech",
  },
  {
    id: "logistics",
    icon: Truck,
    label: "Logistics",
    headline: "Operations-Optimised Platforms",
    subline: "Track. Dispatch. Automate.",
    color: "#1D4ED8",
    intro:
      "Logistics businesses run on precision and speed. We build custom fleet management systems, real-time tracking platforms, and automated dispatch tools that eliminate manual effort — cutting costs and scaling operations without scaling headcount.",
    challenges: [
      "Manual coordination eating productivity",
      "Real-time visibility across large fleets",
      "Client-facing transparency expectations",
      "Integrating legacy systems with modern tools",
    ],
    howWeHelp: [
      "Custom fleet management system development",
      "Real-time GPS tracking & route optimisation",
      "Automated dispatch & job assignment",
      "Client-facing portals & delivery tracking",
      "CRM & operations software integration",
      "Performance dashboards & analytics",
    ],
    layers: ["Strategy", "Technology", "Experience"],
    metrics: [
      { val: "47%", label: "Cost Reduction", icon: BarChart3 },
      { val: "200+", label: "Vehicles Managed", icon: Globe },
      { val: "30hrs", label: "Saved Per Week", icon: Zap },
    ],
    caseStudy: {
      title: "Fleet Automation for 200-Vehicle Company",
      result: "47% cost reduction, 30 hours saved weekly, real-time tracking for entire fleet",
    },
    capabilities: [
      "Fleet management systems",
      "Real-time GPS tracking platforms",
      "Automated dispatch software",
      "Client-facing delivery portals",
      "Route optimisation engines",
      "Operations analytics dashboards",
    ],
    href: "/industries/logistics",
  },
  {
    id: "real-estate",
    icon: Home,
    label: "Real Estate",
    headline: "Property Tech & Digital Presence",
    subline: "Premium. Compelling. Trust-Building.",
    color: "#000080",
    intro:
      "Real estate is sold on trust, aspiration, and perception. We deliver cinematic property films, luxury brand identities, and high-converting digital platforms that position developers as market leaders — commanding premium pricing and attracting premium buyers.",
    challenges: [
      "Differentiating in a crowded property market",
      "Communicating premium value digitally",
      "Generating qualified, high-intent leads",
      "Building brand authority in specific markets",
    ],
    howWeHelp: [
      "Luxury brand identity & visual positioning",
      "Cinematic property films & 3D walkthroughs",
      "High-converting property listing platforms",
      "Lead generation & CRM integration",
      "Targeted digital advertising campaigns",
      "Off-plan development marketing strategies",
    ],
    layers: ["Brand", "Media", "Experience", "Growth"],
    metrics: [
      { val: "65%", label: "More Enquiries", icon: TrendingUp },
      { val: "₦2.1B", label: "Properties Sold", icon: BarChart3 },
      { val: "3", label: "Cinematic Brand Films", icon: Video },
    ],
    caseStudy: {
      title: "Abuja Property Group Repositioning",
      result: "65% more enquiries, ₦2.1B in properties sold post-launch",
    },
    capabilities: [
      "Developer brand identity systems",
      "Cinematic property films & tours",
      "Property listing platforms",
      "Off-plan marketing campaigns",
      "Lead generation systems",
      "Luxury visual content production",
    ],
    href: "/industries/real-estate",
  },
  {
    id: "ecommerce",
    icon: ShoppingCart,
    label: "E-commerce",
    headline: "Conversion-Optimised Storefronts",
    subline: "Sell More. Retain Longer. Scale Faster.",
    color: "#2563EB",
    intro:
      "E-commerce success is built on three things: a brand that creates desire, a platform that removes friction, and a marketing engine that keeps traffic flowing. We engineer all three — together — into one compounding growth system.",
    challenges: [
      "High cart abandonment rates",
      "Building repeat purchase behaviour",
      "Competing against larger brands on trust",
      "Scaling traffic while maintaining ROAS",
    ],
    howWeHelp: [
      "Custom e-commerce platform development",
      "Conversion rate optimisation & UX design",
      "Brand identity that creates desire",
      "Performance marketing across Meta & Google",
      "Email & SMS retention automation",
      "Product photography & campaign content",
    ],
    layers: ["Brand", "Technology", "Growth", "Media"],
    metrics: [
      { val: "₦120M", label: "Revenue Generated", icon: BarChart3 },
      { val: "340%", label: "Traffic Increase", icon: TrendingUp },
      { val: "4.2×", label: "Return on Ad Spend", icon: Zap },
    ],
    caseStudy: {
      title: "Lagos Fashion Label Scale-Up",
      result: "₦120M revenue, 340% traffic growth, 4.2× ROAS in 6 months",
    },
    capabilities: [
      "Custom e-commerce development",
      "Shopify & headless commerce builds",
      "Conversion rate optimisation",
      "Performance advertising",
      "Email marketing & automation",
      "Brand & product content creation",
    ],
    href: "/industries/ecommerce",
  },
  {
    id: "enterprise",
    icon: Factory,
    label: "Corporate & Enterprise",
    headline: "Scalable Enterprise Ecosystems",
    subline: "Govern. Integrate. Dominate.",
    color: "#0369A1",
    intro:
      "Enterprise organisations need more than a website — they need a complete digital infrastructure that governs brand consistency, integrates complex systems, and positions them as the undisputed authority in their sector. We operate as a dedicated digital division at this level.",
    challenges: [
      "Brand inconsistency across divisions & markets",
      "Legacy system integration complexity",
      "Internal digital transformation resistance",
      "Maintaining authority across multiple channels",
    ],
    howWeHelp: [
      "Enterprise brand governance systems",
      "ERP/CRM/SaaS platform engineering",
      "Internal tools & employee-facing portals",
      "Multi-market digital marketing strategy",
      "Executive thought leadership content",
      "Annual brand audit & evolution strategy",
    ],
    layers: ["Strategy", "Brand", "Technology", "Growth"],
    metrics: [
      { val: "98%", label: "Brand Consistency Score", icon: Award },
      { val: "5×", label: "Digital Reach Growth", icon: TrendingUp },
      { val: "12mo", label: "Average Partnership", icon: Users },
    ],
    caseStudy: {
      title: "Corporate Group Digital Transformation",
      result: "Full brand governance, 5× digital reach, enterprise platform launched in 3 months",
    },
    capabilities: [
      "Enterprise web platforms",
      "Brand governance systems",
      "ERP & CRM integrations",
      "Internal digital tools",
      "Multi-market marketing",
      "Executive content strategy",
    ],
    href: "/industries/enterprise",
  },
];

const LAYER_LABELS = {
  Strategy: { icon: Target, color: "#0818A8" },
  Experience: { icon: Eye, color: "#1D4ED8" },
  Technology: { icon: GitBranch, color: "#2563EB" },
  Brand: { icon: Award, color: "#000080" },
  Media: { icon: Video, color: "#0369A1" },
  Growth: { icon: TrendingUp, color: "#1E40AF" },
};

// ─── HERO ─────────────────────────────────────────────────────────────────────
function IndustriesHero() {
  return (
    <section
      className="relative bg-[#04040e] pt-32 pb-24 lg:pt-44 lg:pb-32 overflow-hidden"
      aria-labelledby="industries-hero-heading"
    >
      {/* Hex grid */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none">
        <svg width="100%" height="100%" aria-hidden="true">
          <defs>
            <pattern id="ind-hex" x="0" y="0" width="80" height="69" patternUnits="userSpaceOnUse">
              <path d="M40 0 L74.64 20 L74.64 49 L40 69 L5.36 49 L5.36 20 Z"
                fill="none" stroke="rgba(99,149,255,0.9)" strokeWidth="0.8" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#ind-hex)" />
        </svg>
      </div>

      {/* Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse, rgba(37,99,235,0.13) 0%, transparent 65%)" }} />

      {/* Noise */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`, backgroundSize: "180px 180px" }} />

      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent 0%, rgba(59,130,246,0.6) 30%, rgba(147,197,253,0.9) 50%, rgba(59,130,246,0.6) 70%, transparent 100%)" }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-blue-400 text-[15px] font-black tracking-[0.24em] uppercase mb-5 flex items-center gap-2">
            <Target size={13} strokeWidth={2.5} />
            Specialists, Not Generalists
          </p>

          <h1
            id="industries-hero-heading"
            className="text-4xl sm:text-5xl lg:text-7xl xl:text-[5.5rem] font-black text-white uppercase leading-[0.9] tracking-tight mb-8"
            itemProp="name"
          >
            INDUSTRIES
            <br />
            <span style={{
              background: "linear-gradient(135deg, #3b82f6 0%, #93c5fd 50%, #60a5fa 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}>
              WE POWER
            </span>
          </h1>

          <p className="text-white/45 text-[17px] lg:text-[17px] leading-relaxed max-w-2xl mb-10">
            We don't work with everyone. We go deep in the industries where our
            layered approach creates the most measurable, lasting impact. Deep
            expertise beats broad generalisation — every time.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link href="/contact/project"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-white hover:bg-white/90 text-[#000080] font-black text-[17px] rounded-xl transition-all duration-200 shadow-lg group">
              Start a Project
              <ArrowRight size={14} strokeWidth={3} className="group-hover:translate-x-0.5 transition-transform" />
            </Link>
            <Link href="#industries"
              className="inline-flex items-center gap-2 px-7 py-3.5 border border-white/15 hover:border-blue-400/40 bg-white/5 hover:bg-blue-500/10 text-white/70 hover:text-white font-bold text-[17px] rounded-xl transition-all duration-300">
              Explore Industries
            </Link>
          </div>
        </motion.div>

        {/* Industry quick nav */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 lg:mt-20 flex items-center gap-0 overflow-x-auto pb-1 scrollbar-none"
        >
          {INDUSTRIES.map((ind) => {
            const Icon = ind.icon;
            return (
              <a key={ind.id} href={`#industry-${ind.id}`}
                className="flex-shrink-0 flex items-center gap-2.5 px-5 py-3 border-b-2 border-white/8 hover:border-blue-400/50 text-white/30 hover:text-white/80 transition-all duration-200 group">
                <Icon size={13} strokeWidth={2} className="group-hover:text-blue-400 transition-colors" />
                <span className="text-[16px] font-bold hidden sm:inline whitespace-nowrap">{ind.label}</span>
              </a>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

// ─── INDUSTRY DEEP DIVE ───────────────────────────────────────────────────────
function IndustrySection({ industry, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const Icon = industry.icon;
  const isEven = index % 2 === 0;

  return (
    <section
      id={`industry-${industry.id}`}
      ref={ref}
      className={`py-20 lg:py-28 overflow-hidden ${isEven ? "bg-white" : "bg-gray-50"}`}
      itemScope
      itemType="https://schema.org/Service"
      aria-labelledby={`ind-${industry.id}-heading`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">

        {/* Top label row */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
          className="flex items-center gap-3 mb-10"
        >
          <div className="w-10 h-10 rounded-xl flex items-center justify-center"
            style={{ backgroundColor: industry.color + "15" }}>
            <Icon size={19} strokeWidth={1.75} style={{ color: industry.color }} />
          </div>
          <span className="text-[15px] font-black tracking-[0.22em] uppercase"
            style={{ color: industry.color }}>{industry.label}</span>
          <div className="flex-1 h-px" style={{ backgroundColor: industry.color + "20" }} />
          <Link href={industry.href}
            className="hidden sm:inline-flex items-center gap-1.5 text-[15px] font-black uppercase tracking-wide transition-colors"
            style={{ color: industry.color }}>
            View Industry Page <ArrowUpRight size={11} strokeWidth={3} />
          </Link>
        </motion.div>

        <div className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-start ${!isEven ? "lg:[direction:rtl]" : ""}`}>

          {/* Left — identity block */}
          <motion.div
            initial={{ opacity: 0, x: isEven ? -28 : 28 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className={!isEven ? "lg:[direction:ltr]" : ""}
          >
            <h2
              id={`ind-${industry.id}-heading`}
              className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#000080] uppercase leading-[0.92] tracking-tight mb-3"
              itemProp="name"
            >
              {industry.headline}
            </h2>
            <p className="text-black/80 text-[17px] font-bold uppercase tracking-widest mb-6">
              {industry.subline}
            </p>
            <p className="text-black/80 text-[17px] leading-relaxed mb-8 max-w-md" itemProp="description">
              {industry.intro}
            </p>

            {/* Challenges */}
            <div className="mb-8">
              <p className="text-[15px] font-black tracking-[0.2em] text-gray-300 uppercase mb-4">
                Industry Challenges We Solve
              </p>
              <ul className="space-y-2.5">
                {industry.challenges.map((c, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                      style={{ backgroundColor: industry.color + "15" }}>
                      <ChevronRight size={11} strokeWidth={3} style={{ color: industry.color }} />
                    </div>
                    <span className="text-black/80 text-[17px] font-medium">{c}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Layers activated */}
            <div className="mb-8">
              <p className="text-[15px] font-black tracking-[0.2em] text-gray-300 uppercase mb-3">
                Layers We Activate
              </p>
              <div className="flex flex-wrap gap-2">
                {industry.layers.map((l, i) => {
                  const layerInfo = LAYER_LABELS[l];
                  const LIcon = layerInfo?.icon;
                  return (
                    <span key={i}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[15px] font-black border"
                      style={{ borderColor: (layerInfo?.color || industry.color) + "30", color: layerInfo?.color || industry.color, backgroundColor: (layerInfo?.color || industry.color) + "08" }}>
                      {LIcon && <LIcon size={10} strokeWidth={2.5} />}
                      {l} Layer
                    </span>
                  );
                })}
              </div>
            </div>

            {/* CTA */}
            <Link href={industry.href}
              className="inline-flex items-center gap-2 px-6 py-3 font-black text-[17px] text-white rounded-xl transition-all duration-200 hover:opacity-90 shadow-lg group"
              style={{ background: `linear-gradient(135deg, ${industry.color} 0%, ${industry.color}cc 100%)`, boxShadow: `0 8px 24px ${industry.color}28` }}>
              Explore {industry.label} Solutions
              <ArrowRight size={14} strokeWidth={3} className="group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </motion.div>

          {/* Right — how we help + metrics + case study */}
          <motion.div
            initial={{ opacity: 0, x: isEven ? 28 : -28 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.65, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className={!isEven ? "lg:[direction:ltr]" : ""}
          >
            {/* How we help */}
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-1 h-4 rounded-full" style={{ backgroundColor: industry.color }} />
                <p className="text-[15px] font-black tracking-[0.2em] text-black/80 uppercase">How We Help</p>
              </div>
              <div className="grid grid-cols-2 gap-2.5">
                {industry.howWeHelp.map((h, i) => (
                  <div key={i} className="flex items-start gap-2.5 p-3 bg-gray-50 rounded-xl hover:bg-white border border-transparent hover:border-gray-100 hover:shadow-sm transition-all duration-200">
                    <CheckCircle2 size={13} strokeWidth={2.5} style={{ color: industry.color }} className="flex-shrink-0 mt-0.5" />
                    <span className="text-black/80 text-[16px] font-semibold leading-tight">{h}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Capabilities */}
            <div className="mb-6 p-5 border border-gray-100 bg-white rounded-xl">
              <p className="text-[15px] font-black tracking-[0.2em] text-black/80 uppercase mb-3">Capabilities</p>
              <div className="grid grid-cols-2 gap-2">
                {industry.capabilities.map((c, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: industry.color }} />
                    <span className="text-black/80 text-[16px] font-semibold">{c}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Metrics */}
            <div className="grid grid-cols-3 gap-3 mb-5">
              {industry.metrics.map((m, i) => {
                const MIcon = m.icon;
                return (
                  <div key={i} className="p-4 border border-gray-100 bg-white rounded-xl"
                    style={{ borderTopColor: industry.color, borderTopWidth: 3 }}>
                    <div className="w-7 h-7 rounded-lg flex items-center justify-center mb-2"
                      style={{ backgroundColor: industry.color + "12" }}>
                      <MIcon size={14} strokeWidth={2} style={{ color: industry.color }} />
                    </div>
                    <p className="font-black text-[20px] leading-none text-[#000080] mb-1">{m.val}</p>
                    <p className="text-black/80 text-[15px] font-semibold uppercase tracking-wider leading-tight">{m.label}</p>
                  </div>
                );
              })}
            </div>

            {/* Case study snippet */}
            <div className="p-5 bg-[#04040e] rounded-xl relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-[3px]"
                style={{ background: `linear-gradient(90deg, ${industry.color} 0%, ${industry.color}88 100%)` }} />
              <p className="text-[15px] font-black tracking-[0.18em] uppercase text-white/30 mb-2">Case Study</p>
              <p className="text-white font-black text-[16px] uppercase tracking-tight leading-tight mb-2">
                {industry.caseStudy.title}
              </p>
              <p className="text-white/40 text-[16px] leading-relaxed mb-4">{industry.caseStudy.result}</p>
              <Link href="/work/success-stories"
                className="inline-flex items-center gap-1.5 text-[15px] font-black uppercase tracking-wide transition-colors"
                style={{ color: industry.color }}>
                Read Full Case Study <ArrowRight size={11} strokeWidth={3} />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ─── CROSS-INDUSTRY STATS ─────────────────────────────────────────────────────
function CrossIndustryStats() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const stats = [
    { val: "5", label: "Industries Served", icon: Globe },
    { val: "500+", label: "Projects Delivered", icon: Package },
    { val: "98%", label: "Client Retention", icon: Users },
    { val: "250%", label: "Average ROI", icon: TrendingUp },
    { val: "₦5B+", label: "Revenue Generated", icon: BarChart3 },
    { val: "6", label: "Integrated Layers", icon: Layers },
  ];

  return (
    <section className="bg-[#000080] py-16 lg:py-20 overflow-hidden relative">
      {/* Diagonal texture */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.06]">
        <svg width="100%" height="100%" aria-hidden="true">
          <defs>
            <pattern id="stats-diag" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
              <line x1="0" y1="60" x2="60" y2="0" stroke="white" strokeWidth="0.8" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#stats-diag)" />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <motion.div
          ref={ref}
          variants={stagger(0.08)}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-px bg-white/10"
        >
          {stats.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div key={i} variants={fadeUp}
                className="bg-[#000080] px-6 py-8 flex flex-col items-center text-center hover:bg-[#0818A8]/80 transition-colors duration-200">
                <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center mb-3">
                  <Icon size={16} strokeWidth={2} className="text-white/60" />
                </div>
                <p className="text-white font-black text-[26px] lg:text-[30px] leading-none mb-1">{s.val}</p>
                <p className="text-white/35 text-[15px] font-semibold uppercase tracking-widest">{s.label}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

// ─── DON'T SEE YOUR INDUSTRY CTA ─────────────────────────────────────────────
function IndustriesCTA() {
  return (
    <section
      className="bg-[#04040e] py-24 lg:py-32 overflow-hidden relative"
      aria-labelledby="ind-cta-heading"
    >
      {/* Hex grid */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none">
        <svg width="100%" height="100%" aria-hidden="true">
          <defs>
            <pattern id="cta-hex2" x="0" y="0" width="80" height="69" patternUnits="userSpaceOnUse">
              <path d="M40 0 L74.64 20 L74.64 49 L40 69 L5.36 49 L5.36 20 Z"
                fill="none" stroke="rgba(99,149,255,0.8)" strokeWidth="0.8" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#cta-hex2)" />
        </svg>
      </div>

      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse, rgba(37,99,235,0.1) 0%, transparent 65%)" }} />

      {/* Top line */}
      <div className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(59,130,246,0.5) 30%, rgba(147,197,253,0.8) 50%, rgba(59,130,246,0.5) 70%, transparent)" }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left */}
          <FadeIn direction="right">
            <p className="text-blue-400 text-[15px] font-black tracking-[0.22em] uppercase mb-5 flex items-center gap-2">
              <Layers size={13} strokeWidth={2.5} />
              The Layered Approach Adapts
            </p>
            <h2 id="ind-cta-heading"
              className="text-4xl sm:text-5xl lg:text-6xl font-black text-white uppercase leading-[0.92] tracking-tight mb-6">
              DON'T SEE
              <br />
              <span style={{ background: "linear-gradient(135deg, #3b82f6 0%, #93c5fd 50%, #60a5fa 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                YOUR INDUSTRY?
              </span>
            </h2>
            <p className="text-white/45 text-[17px] leading-relaxed max-w-md mb-8">
              Our layered approach isn't limited to the sectors above. If your
              business has a digital challenge, we have a layer for it. Tell us
              where you're headed and we'll map the system that gets you there.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact/project"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-white hover:bg-white/90 text-[#000080] font-black text-[17px] rounded-xl transition-all duration-200 shadow-lg group">
                Start a Conversation
                <ArrowRight size={14} strokeWidth={3} className="group-hover:translate-x-0.5 transition-transform" />
              </Link>
              <Link href="/contact/call"
                className="inline-flex items-center gap-2 px-7 py-3.5 border border-white/15 hover:border-blue-400/40 bg-white/5 hover:bg-blue-500/10 text-white/70 hover:text-white font-bold text-[17px] rounded-xl transition-all duration-300">
                Book a Strategy Call
              </Link>
            </div>
          </FadeIn>

          {/* Right — layer grid teaser */}
          <FadeIn delay={0.15} direction="left">
            <div className="grid grid-cols-2 gap-3">
              {[
                { icon: Target,    label: "Strategy",    desc: "Vision & market position"    },
                { icon: Eye,       label: "Experience",  desc: "UI/UX that converts"         },
                { icon: GitBranch, label: "Technology",  desc: "Scalable digital products"   },
                { icon: Award,     label: "Brand",       desc: "Identity that commands"      },
                { icon: Video,     label: "Media",       desc: "Commercial & ad production"  },
                { icon: TrendingUp,label: "Growth",      desc: "Marketing that compounds"    },
              ].map((l, i) => {
                const Icon = l.icon;
                return (
                  <div key={i}
                    className="flex items-start gap-3 p-4 bg-white/[0.04] border border-white/6 hover:bg-white/[0.08] transition-colors duration-200 rounded-xl">
                    <div className="w-8 h-8 rounded-lg bg-blue-500/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Icon size={14} strokeWidth={2} className="text-blue-400" />
                    </div>
                    <div>
                      <p className="text-white font-black text-[16px] uppercase tracking-tight">{l.label}</p>
                      <p className="text-white/30 text-[15px] font-medium">{l.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

// ─── ROOT EXPORT ──────────────────────────────────────────────────────────────
export default function IndustriesPage() {
  return (
    <>
      {/* SEO Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Industries — BitLayerX",
            description:
              "BitLayerX builds layered digital ecosystems for Fintech, Logistics, Real Estate, E-commerce, and Corporate & Enterprise organisations across Nigeria and beyond.",
            url: "https://bitlayerx.com/industries",
            provider: { "@type": "Organization", name: "BitLayerX", url: "https://bitlayerx.com" },
            about: INDUSTRIES.map((ind) => ({
              "@type": "Thing",
              name: ind.label,
              description: ind.intro,
              url: `https://bitlayerx.com${ind.href}`,
            })),
          }),
        }}
      />

      <main itemScope itemType="https://schema.org/WebPage">
        <IndustriesHero />
        <div id="industries">
          {INDUSTRIES.map((industry, i) => (
            <IndustrySection key={industry.id} industry={industry} index={i} />
          ))}
        </div>
        <CrossIndustryStats />
        <IndustriesCTA />
      </main>
    </>
  );
}