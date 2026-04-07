"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight, Target, Eye, GitBranch, Award, Video, TrendingUp,
  CheckCircle2, ChevronDown, Layers, Rocket, RefreshCw, HeartHandshake,
  Package, Phone, CalendarCheck,
} from "lucide-react";

// ─── Font ─────────────────────────────────────────────────────────────────────
const FONT_URL = "https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,400&display=swap";

const ease = [0.22, 1, 0.36, 1];

// ─── Typewriter words ─────────────────────────────────────────────────────────
const TYPED_WORDS = ["SERVICES.", "SYSTEMS.", "LAYERS.", "RESULTS.", "FUTURES."];

// ─── DATA ─────────────────────────────────────────────────────────────────────
const LAYERS = [
  {
    number: "01", id: "strategy", icon: Target, layer: "Strategy Layer",
    title: "Strategy & Positioning", tagline: "Vision. Roadmap. Direction.",
    intro: "Before a single pixel is designed or line of code is written, we define the strategic blueprint that makes every other layer more powerful.",
    color: "#0818A8", lightBg: "#EFF6FF",
    capabilities: ["Market & competitive analysis", "Brand positioning strategy", "Digital growth roadmap", "Revenue model planning", "Audience research & personas", "KPI framework design"],
    deliverables: ["Strategy document", "Competitive intelligence report", "12-month growth roadmap", "Brand positioning brief"],
    tools: ["Miro", "Notion", "SEMrush", "Google Analytics", "Hotjar"],
    href: "/services/strategy",
  },
  {
    number: "02", id: "experience", icon: Eye, layer: "Experience Layer",
    title: "UI/UX & Product Design", tagline: "Intuitive. Engaging. Converting.",
    intro: "We design digital experiences around how your users think, feel, and decide — every interface a carefully engineered journey from first impression to loyal customer.",
    color: "#1D4ED8", lightBg: "#EFF6FF",
    capabilities: ["User research & journey mapping", "Information architecture", "Wireframing & prototyping", "Conversion-rate optimisation", "Usability testing", "Design system creation"],
    deliverables: ["UX research report", "Interactive Figma prototype", "Design system & component library", "Annotated wireframes"],
    tools: ["Figma", "FigJam", "Maze", "Hotjar", "Lottie", "Framer"],
    href: "/services/ui-ux",
  },
  {
    number: "03", id: "technology", icon: GitBranch, layer: "Technology Layer",
    title: "Web, Mobile & Software", tagline: "Fast. Scalable. Engineered.",
    intro: "We build the digital infrastructure your business runs on — from high-performance websites to complex custom applications and enterprise-grade software.",
    color: "#2563EB", lightBg: "#EFF6FF",
    capabilities: ["Custom web application development", "iOS & Android mobile apps", "API development & integrations", "E-commerce platforms", "CMS & headless architecture", "Performance & security audits"],
    deliverables: ["Production-ready codebase", "Technical documentation", "Deployment & CI/CD pipeline", "QA test report"],
    tools: ["Next.js", "React Native", "Node.js", "PostgreSQL", "AWS", "Vercel"],
    href: "/services/web-mobile",
  },
  {
    number: "04", id: "brand", icon: Award, layer: "Brand Layer",
    title: "Branding & Identity", tagline: "Memorable. Differentiated. Powerful.",
    intro: "A brand that commands attention, builds trust, and communicates value before a word is spoken. We craft complete brand systems built to last for decades.",
    color: "#000080", lightBg: "#EFF6FF",
    capabilities: ["Brand strategy & positioning", "Logo & visual identity design", "Brand voice & messaging", "Typography & colour systems", "Brand guidelines documentation", "Brand evolution strategy"],
    deliverables: ["Master logo suite", "Full brand guidelines", "Messaging & tone-of-voice guide", "Brand asset library"],
    tools: ["Adobe Illustrator", "Figma", "Fontlab", "Adobe InDesign", "Brandpad"],
    href: "/services/branding",
  },
  {
    number: "05", id: "media", icon: Video, layer: "Media Layer",
    title: "Commercials & Video Production", tagline: "Cinematic. Compelling. Impactful.",
    intro: "Nothing builds trust and drives action faster than great video. We produce high-impact commercials, brand films, and ad creatives that make your brand impossible to ignore.",
    color: "#0369A1", lightBg: "#F0F9FF",
    capabilities: ["Brand & corporate films", "Commercial video production", "Performance ad creatives", "Product launch videos", "Social content production", "Motion graphics & animation"],
    deliverables: ["Master video files (4K)", "Platform-optimised cuts", "Motion graphic assets", "Raw footage library"],
    tools: ["Adobe Premiere Pro", "After Effects", "DaVinci Resolve", "Cinema 4D", "Lottie"],
    href: "/services/video",
  },
  {
    number: "06", id: "growth", icon: TrendingUp, layer: "Growth Layer",
    title: "Digital Marketing & Growth", tagline: "Data-Driven. Relentless. Compounding.",
    intro: "We deploy performance marketing systems that grow more powerful every month — combining SEO, paid advertising, email, and content into one compounding growth engine.",
    color: "#1E40AF", lightBg: "#EFF6FF",
    capabilities: ["Search engine optimisation (SEO)", "Paid advertising (Meta, Google, TikTok)", "Email marketing & automation", "Content marketing strategy", "Conversion rate optimisation", "Analytics & attribution"],
    deliverables: ["Marketing strategy document", "Monthly performance report", "Ad creative library", "SEO audit & action plan"],
    tools: ["Google Ads", "Meta Ads Manager", "Klaviyo", "Ahrefs", "Hotjar", "GA4"],
    href: "/services/marketing",
  },
];

const ENGAGEMENT_MODELS = [
  {
    icon: Rocket, id: "project", title: "Project-Based",
    tagline: "One goal. One timeline. Full focus.",
    description: "Ideal for defined scopes — a new website, a brand identity, a mobile app, a video campaign. We define the layers, scope the work, and deliver a complete outcome.",
    includes: ["Dedicated project team", "Fixed scope & timeline", "Clear milestone delivery", "Post-launch handover"],
    best: "Businesses with a specific, defined need", color: "#0818A8",
  },
  {
    icon: RefreshCw, id: "retainer", title: "Retainer",
    tagline: "Continuous execution. Compounding results.",
    description: "Monthly engagement covering ongoing services — marketing, social media, content, SEO, and strategic support. Your digital engine stays running, improving every month.",
    includes: ["Monthly strategy sessions", "Dedicated account manager", "Continuous optimisation", "Priority response times"],
    best: "Businesses ready to scale consistently", color: "#1D4ED8", popular: true,
  },
  {
    icon: HeartHandshake, id: "partnership", title: "Full Partnership",
    tagline: "We become your digital division.",
    description: "Total outsourcing of your digital ecosystem. Strategy, design, technology, brand, media, and growth — all handled by BitLayerX as your dedicated digital partner.",
    includes: ["All six layers activated", "Senior account lead", "Board-level strategy input", "White-glove support"],
    best: "Enterprise brands & high-growth companies", color: "#000080",
  },
];

// ─── Helpers ──────────────────────────────────────────────────────────────────
function useVisible(margin = "-60px") {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin });
  return [ref, inView];
}

function Reveal({ children, delay = 0, y = 24, className = "" }) {
  const [ref, inView] = useVisible();
  return (
    <motion.div ref={ref} className={className}
      initial={{ opacity: 0, y }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease }}>
      {children}
    </motion.div>
  );
}

// ─── Typewriter Hook ──────────────────────────────────────────────────────────
function useTypewriter(words, typingSpeed = 110, deletingSpeed = 60, pauseMs = 2000) {
  const [wordIndex, setWordIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);
  const [pausing, setPausing] = useState(false);

  useEffect(() => {
    if (pausing) return;
    const word = words[wordIndex];
    const speed = deleting ? deletingSpeed : typingSpeed;
    const timer = setTimeout(() => {
      if (!deleting) {
        const next = word.slice(0, displayed.length + 1);
        setDisplayed(next);
        if (next === word) {
          setPausing(true);
          setTimeout(() => { setPausing(false); setDeleting(true); }, pauseMs);
        }
      } else {
        const next = word.slice(0, displayed.length - 1);
        setDisplayed(next);
        if (next === "") {
          setDeleting(false);
          setWordIndex((i) => (i + 1) % words.length);
        }
      }
    }, speed);
    return () => clearTimeout(timer);
  }, [displayed, deleting, pausing, wordIndex, words, typingSpeed, deletingSpeed, pauseMs]);

  return displayed;
}

// ─── Blinking Cursor ──────────────────────────────────────────────────────────
function Cursor({ color = "#2563EB" }) {
  const [on, setOn] = useState(true);
  useEffect(() => {
    const iv = setInterval(() => setOn(v => !v), 530);
    return () => clearInterval(iv);
  }, []);
  return (
    <span aria-hidden="true" style={{
      display: "inline-block",
      width: "clamp(3px, 0.5vw, 7px)",
      height: "0.88em",
      background: color,
      marginLeft: "0.05em",
      verticalAlign: "text-bottom",
      opacity: on ? 1 : 0,
      transition: "opacity 0.08s",
    }} />
  );
}

// ─── HERO ─────────────────────────────────────────────────────────────────────
function ServicesHero() {
  const typed = useTypewriter(TYPED_WORDS, 105, 55, 1800);
  const [activeLayer, setActiveLayer] = useState(0);

  // Cycle active layer for the animated strip
  useEffect(() => {
    const iv = setInterval(() => setActiveLayer(i => (i + 1) % LAYERS.length), 2000);
    return () => clearInterval(iv);
  }, []);

  return (
    <section className="relative bg-white overflow-hidden"
      aria-labelledby="services-hero-heading"
      style={{ fontFamily: "'Montserrat', sans-serif" }}>

      {/* ── Grid background ──────────────────────────────────────────────── */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true"
        style={{
          backgroundImage: "linear-gradient(rgba(0,0,102,0.045) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,102,0.045) 1px, transparent 1px)",
          backgroundSize: "52px 52px",
        }} />
      {/* Radial white wipe over grid */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 90% 70% at 50% -10%, white 35%, transparent 100%)" }} />

      {/* ── Navy top accent bar ───────────────────────────────────────────── */}
      <div className="absolute top-0 left-0 right-0 h-[3px]"
        style={{ background: "linear-gradient(90deg, transparent 0%, #0818A8 25%, #2563EB 50%, #0818A8 75%, transparent 100%)" }} />

      {/* ── Hero content ─────────────────────────────────────────────────── */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 pt-36 sm:pt-44 pb-0">

        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease }}
          className="flex items-center gap-3 mb-7">
          <div className="w-8 h-8 rounded-lg bg-[#000080]/8 flex items-center justify-center">
            <Layers size={15} strokeWidth={2.5} className="text-[#0818A8]" />
          </div>
          <p className="text-[#0818A8] text-[11px] font-black tracking-[0.28em] uppercase">
            Six Layers · One Unified System
          </p>
        </motion.div>

        {/* ── Giant headline with typewriter ────────────────────────────── */}
        <div className="mb-8">
          {/* Static lines */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.2, ease }}
            className="font-black text-[#080c20] uppercase leading-[0.88] tracking-[-0.025em]"
            style={{ fontSize: "clamp(2.4rem, 6.8vw, 6.5rem)" }}>
            We Don't Offer
          </motion.p>

          {/* Typed line */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.32, ease }}
            className="flex items-baseline"
            aria-live="polite"
            aria-label={`We don't offer ${typed}`}>
            <h1 id="services-hero-heading"
              className="font-black uppercase leading-[0.88] tracking-[-0.025em]"
              style={{
                fontSize: "clamp(2.4rem, 6.8vw, 6.5rem)",
                background: "linear-gradient(135deg, #0818A8 0%, #2563EB 45%, #60A5FA 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}>
              {typed || "\u00A0"}
            </h1>
            <Cursor color="#2563EB" />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.42, ease }}
            className="font-black text-[#080c20] uppercase leading-[0.88] tracking-[-0.025em]"
            style={{ fontSize: "clamp(2.4rem, 6.8vw, 6.5rem)" }}>
            We Build Layers.
          </motion.p>
        </div>

        {/* Sub-copy */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.52, ease }}
          className="text-gray-500 text-[17px] sm:text-[16px] leading-relaxed max-w-xl mb-10 font-medium"
          itemProp="description">
          Every capability we offer is engineered as an interconnected layer — not an isolated service.
          When strategy, design, technology, brand, media, and growth operate as one system, the results compound.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.6, ease }}
          className="flex flex-wrap gap-3 mb-16 sm:mb-20">
          <Link href="/contact/project"
            className="group inline-flex items-center gap-2 px-7 py-3.5 bg-[#000066] hover:bg-[#000080] text-white font-black text-[15px] uppercase tracking-wide rounded-xl transition-all duration-200 shadow-lg shadow-[#000080]/20">
            Start a Project
            <ArrowRight size={13} strokeWidth={3} className="group-hover:translate-x-0.5 transition-transform" />
          </Link>
          <Link href="#layers"
            className="inline-flex items-center gap-2 px-7 py-3.5 border border-[#000066]/15 hover:border-[#000066]/35 text-[#000066] font-bold text-[15px] uppercase tracking-wide rounded-xl transition-all duration-200 hover:bg-[#000066]/4">
            Explore All Layers
            <ChevronDown size={13} strokeWidth={2.5} />
          </Link>
        </motion.div>

        {/* ── Animated layer strip ──────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.72, ease }}
          className="flex items-stretch border-t border-gray-100 overflow-x-auto"
          style={{ scrollbarWidth: "none" }}>
          {LAYERS.map((l, i) => {
            const Icon = l.icon;
            const isActive = activeLayer === i;
            return (
              <a key={l.id} href={`#layer-${l.id}`}
                onMouseEnter={() => setActiveLayer(i)}
                className={`group flex-shrink-0 relative flex flex-col gap-1.5 px-5 py-5 border-t-2 transition-all duration-300 cursor-pointer ${isActive ? "border-[#0818A8]" : "border-transparent hover:border-gray-200"}`}>
                <div className="flex items-center gap-2">
                  <Icon size={13} strokeWidth={2.5}
                    style={{ color: isActive ? l.color : undefined }}
                    className={isActive ? "" : "text-gray-300 group-hover:text-gray-500 transition-colors"} />
                  <span className={`text-[12px] font-black uppercase tracking-wide whitespace-nowrap transition-colors ${isActive ? "text-[#000080]" : "text-gray-300 group-hover:text-gray-600"}`}>
                    {l.layer}
                  </span>
                </div>
                <span className={`text-[10px] font-semibold tracking-wide transition-colors hidden sm:block ${isActive ? "text-gray-500" : "text-gray-200"}`}>
                  {l.tagline}
                </span>
                {/* Active bottom pulse */}
                {isActive && (
                  <motion.div
                    layoutId="layer-indicator"
                    className="absolute bottom-0 left-0 right-0 h-[2px]"
                    style={{ background: l.color }}
                    transition={{ type: "spring", stiffness: 400, damping: 35 }} />
                )}
              </a>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

// ─── LAYER SECTION ────────────────────────────────────────────────────────────
function LayerSection({ layer, index }) {
  const [ref, inView] = useVisible("-40px");
  const [toolsExpanded, setToolsExpanded] = useState(false);
  const Icon = layer.icon;
  const isEven = index % 2 === 0;

  return (
    <section id={`layer-${layer.id}`} ref={ref}
      className={`scroll-mt-24 relative ${isEven ? "bg-white" : "bg-[#f8f9fc]"}`}
      aria-labelledby={`layer-${layer.id}-heading`}
      itemScope itemType="https://schema.org/Service"
      style={{ fontFamily: "'Montserrat', sans-serif" }}>

      <div className="absolute top-0 left-0 right-0 h-px bg-gray-100" />

      <div className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">

          {/* ── CARD ────────────────────────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.75, ease }}
            className="relative bg-white border border-gray-100 rounded-2xl overflow-hidden"
            style={{ boxShadow: "0 4px 32px rgba(0,0,80,0.06), 0 1px 4px rgba(0,0,80,0.04)" }}>

            {/* Colored top bar */}
            <div className="absolute top-0 left-0 right-0 h-[4px]"
              style={{ background: `linear-gradient(90deg, ${layer.color} 0%, ${layer.color}aa 100%)` }} />

            {/* ── TOP GRID ────────────────────────────────────────────── */}
            <div className="grid lg:grid-cols-[1fr_400px] xl:grid-cols-[1fr_440px]">

              {/* LEFT: Identity */}
              <div className="p-8 sm:p-10 lg:p-12 border-b lg:border-b-0 lg:border-r border-gray-100">

                {/* Number tag */}
                <div className="flex items-center gap-3 mb-7">
                  <span className="font-mono font-black text-[11px] tracking-[0.25em]"
                    style={{ color: layer.color }}>{layer.number}</span>
                  <div className="h-px w-8" style={{ background: `${layer.color}40` }} />
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center"
                    style={{ background: `${layer.color}12` }}>
                    <Icon size={16} strokeWidth={2} style={{ color: layer.color }} />
                  </div>
                  <span className="text-[10px] font-black tracking-[0.22em] uppercase"
                    style={{ color: layer.color }}>{layer.layer}</span>
                </div>

                {/* Heading */}
                <h2 id={`layer-${layer.id}-heading`}
                  className="font-black text-[#080c20] uppercase leading-[0.9] tracking-tight mb-3"
                  style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)" }}
                  itemProp="name">
                  {layer.title}
                </h2>

                {/* Tagline */}
                <p className="text-[12.5px] font-black uppercase tracking-[0.18em] mb-5"
                  style={{ color: layer.color }}>
                  {layer.tagline}
                </p>

                {/* Intro */}
                <p className="text-gray-500 text-[16px] leading-relaxed mb-8 max-w-lg"
                  itemProp="description">
                  {layer.intro}
                </p>

                {/* CTA */}
                <Link href={layer.href}
                  className="group inline-flex items-center gap-2.5 px-6 py-3.5 font-black text-[12.5px] uppercase tracking-wide text-white rounded-xl transition-all duration-200"
                  style={{
                    background: `linear-gradient(135deg, ${layer.color} 0%, ${layer.color}cc 100%)`,
                    boxShadow: `0 6px 20px ${layer.color}28`,
                  }}>
                  Explore {layer.title}
                  <span className="w-7 h-7 rounded-lg bg-white/15 flex items-center justify-center flex-shrink-0">
                    <ArrowRight size={12} strokeWidth={3}
                      className="group-hover:translate-x-0.5 transition-transform" />
                  </span>
                </Link>
              </div>

              {/* RIGHT: Deliverables + Tools */}
              <div className="p-8 sm:p-10 bg-[#fafbff] flex flex-col gap-7">

                {/* Deliverables */}
                <div>
                  <p className="text-[10px] font-black tracking-[0.24em] uppercase text-gray-300 mb-3">
                    What You Receive
                  </p>
                  <div className="space-y-2.5">
                    {layer.deliverables.map((d, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                          style={{ background: `${layer.color}15` }}>
                          <CheckCircle2 size={11} strokeWidth={2.5} style={{ color: layer.color }} />
                        </div>
                        <span className="text-gray-700 text-[15px] font-semibold">{d}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tools */}
                <div>
                  <p className="text-[10px] font-black tracking-[0.24em] uppercase text-gray-300 mb-3">
                    Tools & Technology
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {layer.tools.map((t, i) => (
                      <span key={i}
                        className="px-3 py-1.5 text-[11.5px] font-bold rounded-lg border"
                        style={{ borderColor: `${layer.color}25`, color: layer.color, background: `${layer.color}08` }}>
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Timeline hint */}
                <div className="mt-auto pt-5 border-t border-gray-100 flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full" style={{ background: layer.color }} />
                  <p className="text-gray-400 text-[12px] font-semibold">
                    Integrated with {layer.number === "01" ? "all layers" : "preceding layers"} for maximum impact
                  </p>
                </div>
              </div>
            </div>

            {/* ── CAPABILITIES GRID ────────────────────────────────────── */}
            <div className="border-t border-gray-100">
              <button
                onClick={() => setToolsExpanded(v => !v)}
                className="w-full flex items-center justify-between px-8 sm:px-10 lg:px-12 py-4 hover:bg-gray-50/60 transition-colors group">
                <div className="flex items-center gap-3">
                  <div className="w-1 h-4 rounded-full" style={{ background: layer.color }} />
                  <p className="text-[11.5px] font-black uppercase tracking-[0.18em] text-gray-700 group-hover:text-[#000080] transition-colors">
                    Capabilities
                    <span className="ml-2 text-gray-300 font-semibold normal-case tracking-normal">
                      ({layer.capabilities.length} areas)
                    </span>
                  </p>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="text-[11px] font-semibold text-gray-300 group-hover:text-gray-500 transition-colors">
                    {toolsExpanded ? "Collapse" : "View all"}
                  </span>
                  <ChevronDown size={14} strokeWidth={2.5}
                    className={`text-gray-300 group-hover:text-gray-400 transition-all duration-300 ${toolsExpanded ? "rotate-180" : ""}`} />
                </div>
              </button>

              <AnimatePresence initial={false}>
                {toolsExpanded && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.38, ease }}>
                    <div className="px-8 sm:px-10 lg:px-12 pb-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
                      {layer.capabilities.map((c, i) => (
                        <motion.div key={i}
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: i * 0.045, duration: 0.35, ease }}
                          className="flex items-start gap-2.5 p-3.5 rounded-xl bg-gray-50 border border-gray-100 hover:border-gray-200 hover:shadow-sm transition-all group">
                          <CheckCircle2 size={12} strokeWidth={2.5} style={{ color: layer.color }}
                            className="flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700 text-[12.5px] font-semibold leading-snug">{c}</span>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Collapsed preview pills */}
              {!toolsExpanded && (
                <div className="px-8 sm:px-10 lg:px-12 pb-6 flex flex-wrap gap-2">
                  {layer.capabilities.slice(0, 3).map((c, i) => (
                    <span key={i}
                      className="px-3 py-1.5 rounded-lg bg-gray-50 border border-gray-100 text-[11.5px] font-semibold text-gray-500">
                      {c}
                    </span>
                  ))}
                  <button onClick={() => setToolsExpanded(true)}
                    className="px-3 py-1.5 rounded-lg border border-dashed border-gray-200 text-[11.5px] font-bold text-gray-400 hover:text-[#000080] hover:border-[#000080]/20 transition-colors">
                    +{layer.capabilities.length - 3} more
                  </button>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ─── ENGAGEMENT MODELS ────────────────────────────────────────────────────────
function EngagementModels() {
  const [ref, inView] = useVisible("-60px");

  return (
    <section className="bg-[#f8f9fc] py-24 lg:py-32 overflow-hidden"
      aria-labelledby="engagement-heading"
      style={{ fontFamily: "'Montserrat', sans-serif" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">

        {/* Header */}
        <div className="grid lg:grid-cols-[1fr_auto] gap-8 items-end mb-14">
          <Reveal>
            <p className="text-[#0818A8] text-[10px] font-black tracking-[0.28em] uppercase mb-4 flex items-center gap-2">
              <Layers size={11} strokeWidth={2.5} /> How We Work Together
            </p>
            <h2 id="engagement-heading"
              className="font-black text-[#080c20] uppercase leading-[0.9] tracking-tight"
              style={{ fontSize: "clamp(2rem, 4.5vw, 3.8rem)" }}>
              Engagement<br />
              <span style={{
                background: "linear-gradient(135deg, #0818A8 0%, #2563EB 50%, #60A5FA 100%)",
                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
              }}>Models</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="lg:max-w-xs">
            <p className="text-gray-500 text-[15px] leading-relaxed">
              Three flexible ways to engage — each designed for a different stage of growth and scope of ambition.
            </p>
          </Reveal>
        </div>

        {/* Cards */}
        <div ref={ref} className="grid md:grid-cols-3 gap-4">
          {ENGAGEMENT_MODELS.map((model, i) => {
            const Icon = model.icon;
            return (
              <motion.div key={model.id}
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.65, delay: i * 0.1, ease }}
                className="relative bg-white border border-gray-100 rounded-2xl overflow-hidden hover:shadow-lg hover:shadow-gray-100 transition-all duration-300 group"
                style={{ boxShadow: "0 2px 12px rgba(0,0,80,0.04)" }}>

                {/* Colored top bar */}
                <div className="absolute top-0 left-0 right-0 h-[3px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: model.color }} />
                {/* Always show for popular */}
                {model.popular && (
                  <div className="absolute top-0 left-0 right-0 h-[3px]"
                    style={{ background: model.color }} />
                )}

                {model.popular && (
                  <div className="absolute top-4 right-4 px-2.5 py-1 rounded-full text-[9px] font-black uppercase tracking-widest text-white"
                    style={{ background: model.color }}>
                    Most Popular
                  </div>
                )}

                <div className="p-8">
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-6"
                    style={{ background: `${model.color}12` }}>
                    <Icon size={20} strokeWidth={1.75} style={{ color: model.color }} />
                  </div>

                  <p className="text-[10px] font-black tracking-[0.22em] uppercase mb-2"
                    style={{ color: model.color }}>{model.id}</p>
                  <h3 className="font-black text-[#080c20] uppercase tracking-tight text-[18px] mb-1">{model.title}</h3>
                  <p className="text-gray-400 text-[12.5px] font-semibold italic mb-5">{model.tagline}</p>
                  <p className="text-gray-500 text-[15px] leading-relaxed mb-6">{model.description}</p>

                  <div className="space-y-2.5 mb-7">
                    {model.includes.map((item, j) => (
                      <div key={j} className="flex items-center gap-2.5">
                        <CheckCircle2 size={12} strokeWidth={2.5} style={{ color: model.color }} className="flex-shrink-0" />
                        <span className="text-gray-600 text-[12.5px] font-semibold">{item}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-5 border-t border-gray-100">
                    <p className="text-[9.5px] font-black uppercase tracking-[0.2em] text-gray-300 mb-1">Best for</p>
                    <p className="text-gray-600 text-[12.5px] font-bold">{model.best}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <Reveal className="text-center mt-12" delay={0.2}>
          <p className="text-gray-400 text-[15px] mb-5 font-medium">
            Not sure which model fits? Let's talk it through.
          </p>
          <Link href="/contact/call"
            className="group inline-flex items-center gap-2 px-7 py-3.5 bg-[#000066] hover:bg-[#000080] text-white font-black text-[15px] uppercase tracking-wide rounded-xl transition-all duration-200 shadow-lg shadow-[#000080]/20">
            <CalendarCheck size={13} strokeWidth={2} />
            Book a Free Strategy Call
            <ArrowRight size={13} strokeWidth={3} className="group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

// ─── SERVICES CTA ─────────────────────────────────────────────────────────────
function ServicesCTA() {
  const [ref, inView] = useVisible();

  return (
    <section className="bg-white py-20 lg:py-28 overflow-hidden"
      aria-labelledby="services-cta-heading"
      style={{ fontFamily: "'Montserrat', sans-serif" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">

        {/* Blue banner card */}
        <motion.div ref={ref}
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.75, ease }}
          className="relative rounded-2xl overflow-hidden"
          style={{ background: "linear-gradient(135deg, #000055 0%, #000080 35%, #0818A8 65%, #1D4ED8 100%)" }}>

          {/* Dot texture */}
          <div className="absolute inset-0 pointer-events-none opacity-[0.06]"
            style={{ backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)", backgroundSize: "28px 28px" }} />
          {/* Radial glow */}
          <div className="absolute top-0 right-0 w-96 h-96 pointer-events-none"
            style={{ background: "radial-gradient(circle at top right, rgba(147,197,253,0.18) 0%, transparent 60%)" }} />

          <div className="relative z-10 grid lg:grid-cols-2 gap-0">

            {/* Left */}
            <div className="p-10 sm:p-12 lg:p-16 border-b lg:border-b-0 lg:border-r border-white/10">
              <p className="text-blue-300 text-[10px] font-black tracking-[0.28em] uppercase mb-5 flex items-center gap-2">
                <Package size={11} strokeWidth={2.5} /> Pre-Built Bundles
              </p>
              <h2 id="services-cta-heading"
                className="font-black text-white uppercase leading-[0.9] tracking-tight mb-5"
                style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)" }}>
                See Our<br />Packages
              </h2>
              <p className="text-white/55 text-[15px] leading-relaxed mb-8 max-w-sm">
                Explore our Launchpad, Growth Engine, Brand Authority, Tech Powerhouse, and Digital Dominance packages — pre-designed layer stacks for every stage of growth.
              </p>
              <Link href="/packages"
                className="group inline-flex items-center gap-2 px-6 py-3.5 bg-white hover:bg-white/95 text-[#000066] font-black text-[15px] uppercase tracking-wide rounded-xl transition-all duration-200"
                style={{ boxShadow: "0 4px 20px rgba(0,0,80,0.25)" }}>
                View All Packages
                <ArrowRight size={13} strokeWidth={3} className="group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>

            {/* Right */}
            <div className="p-10 sm:p-12 lg:p-16 flex flex-col gap-4">
              <p className="text-blue-300 text-[10px] font-black tracking-[0.28em] uppercase mb-1 flex items-center gap-2">
                <Layers size={11} strokeWidth={2.5} /> Bespoke Build
              </p>
              <h3 className="font-black text-white uppercase leading-[0.9] tracking-tight mb-3"
                style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)" }}>
                Custom<br />Project
              </h3>
              <p className="text-white/50 text-[15px] leading-relaxed mb-7 max-w-sm">
                Have a specific vision? Tell us the layers you need, the outcome you're targeting, and the timeline you're working to. We'll scope it and come back in 48 hours.
              </p>

              {[
                { icon: Rocket, label: "Start a Project", href: "/contact/project" },
                { icon: CalendarCheck, label: "Book a Strategy Call", href: "/contact/call" },
              ].map((a, i) => {
                const Icon = a.icon;
                return (
                  <Link key={i} href={a.href}
                    className={`group flex items-center gap-3 px-5 py-4 rounded-xl font-bold text-[15px] uppercase tracking-wide transition-all duration-200 ${i === 0 ? "bg-white text-[#000066] hover:bg-white/95" : "bg-white/10 text-white hover:bg-white/16 border border-white/10"}`}
                    style={i === 0 ? { boxShadow: "0 4px 16px rgba(0,0,80,0.2)" } : {}}>
                    <Icon size={14} strokeWidth={2} />
                    {a.label}
                    <ArrowRight size={12} strokeWidth={3} className="ml-auto group-hover:translate-x-0.5 transition-transform" />
                  </Link>
                );
              })}

              <div className="flex items-center gap-2 text-white/25 text-[11.5px] mt-2">
                <Phone size={11} strokeWidth={2} />
                <span>+234 802 540 1891 · Gwarinpa, Abuja</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ─── PAGE ROOT ────────────────────────────────────────────────────────────────
export default function ServicesPage() {
  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="stylesheet" href={FONT_URL} />

      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "Services — BitLayerX",
          description: "BitLayerX builds layered digital ecosystems across strategy, UI/UX, web & mobile development, branding, video production, and digital marketing.",
          url: "https://bitlayerx.com/services",
          provider: { "@type": "Organization", name: "BitLayerX", url: "https://bitlayerx.com" },
          hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: "BitLayerX Services",
            itemListElement: LAYERS.map((l, i) => ({
              "@type": "Offer", position: i + 1, name: l.title,
              description: l.intro, url: `https://bitlayerx.com${l.href}`,
            })),
          },
        }),
      }} />

      <main id="main-content" itemScope itemType="https://schema.org/WebPage"
        style={{ fontFamily: "'Montserrat', sans-serif" }}>
        <ServicesHero />
        <div id="layers">
          {LAYERS.map((layer, i) => (
            <LayerSection key={layer.id} layer={layer} index={i} />
          ))}
        </div>
        <EngagementModels />
        <ServicesCTA />
      </main>
    </>
  );
}