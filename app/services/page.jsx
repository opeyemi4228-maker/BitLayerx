"use client";

import React, { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  Target,
  Eye,
  GitBranch,
  Award,
  Video,
  TrendingUp,
  Code2,
  PenTool,
  Palette,
  BrainCircuit,
  Megaphone,
  CheckCircle2,
  ChevronDown,
  ChevronRight,
  Layers,
  Rocket,
  RefreshCw,
  HeartHandshake,
  Figma,
  Globe,
  Smartphone,
  Database,
  Cloud,
  Shield,
  BarChart3,
  Mail,
  Search,
  Play,
  Zap,
  Package,
  ArrowUpRight,
  Star,
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

// ─── DATA ─────────────────────────────────────────────────────────────────────

const LAYERS = [
  {
    number: "01",
    id: "strategy",
    icon: Target,
    layer: "Strategy Layer",
    title: "Strategy & Positioning",
    tagline: "Vision. Roadmap. Direction.",
    intro:
      "Before a single pixel is designed or line of code is written, we define the strategic blueprint that makes every other layer more powerful.",
    color: "#0818A8",
    lightBg: "#EFF6FF",
    capabilities: [
      "Market & competitive analysis",
      "Brand positioning strategy",
      "Digital growth roadmap",
      "Revenue model planning",
      "Audience research & personas",
      "KPI framework design",
    ],
    deliverables: [
      "Strategy document",
      "Competitive intelligence report",
      "12-month growth roadmap",
      "Brand positioning brief",
    ],
    tools: ["Miro", "Notion", "SEMrush", "Google Analytics", "Hotjar"],
    href: "/services/strategy",
  },
  {
    number: "02",
    id: "experience",
    icon: Eye,
    layer: "Experience Layer",
    title: "UI/UX & Product Design",
    tagline: "Intuitive. Engaging. Converting.",
    intro:
      "We design digital experiences around how your users think, feel, and decide — every interface a carefully engineered journey from first impression to loyal customer.",
    color: "#1D4ED8",
    lightBg: "#EFF6FF",
    capabilities: [
      "User research & journey mapping",
      "Information architecture",
      "Wireframing & prototyping",
      "Conversion-rate optimisation",
      "Usability testing",
      "Design system creation",
    ],
    deliverables: [
      "UX research report",
      "Interactive Figma prototype",
      "Design system & component library",
      "Annotated wireframes",
    ],
    tools: ["Figma", "FigJam", "Maze", "Hotjar", "Lottie", "Framer"],
    href: "/services/ui-ux",
  },
  {
    number: "03",
    id: "technology",
    icon: GitBranch,
    layer: "Technology Layer",
    title: "Web, Mobile & Software",
    tagline: "Fast. Scalable. Engineered.",
    intro:
      "We build the digital infrastructure your business runs on — from high-performance websites to complex custom applications and enterprise-grade software.",
    color: "#2563EB",
    lightBg: "#EFF6FF",
    capabilities: [
      "Custom web application development",
      "iOS & Android mobile apps",
      "API development & integrations",
      "E-commerce platforms",
      "CMS & headless architecture",
      "Performance & security audits",
    ],
    deliverables: [
      "Production-ready codebase",
      "Technical documentation",
      "Deployment & CI/CD pipeline",
      "QA test report",
    ],
    tools: ["Next.js", "React Native", "Node.js", "PostgreSQL", "AWS", "Vercel"],
    href: "/services/web-mobile",
  },
  {
    number: "04",
    id: "brand",
    icon: Award,
    layer: "Brand Layer",
    title: "Branding & Identity",
    tagline: "Memorable. Differentiated. Powerful.",
    intro:
      "A brand that commands attention, builds trust, and communicates value before a word is spoken. We craft complete brand systems built to last for decades.",
    color: "#000080",
    lightBg: "#EFF6FF",
    capabilities: [
      "Brand strategy & positioning",
      "Logo & visual identity design",
      "Brand voice & messaging",
      "Typography & colour systems",
      "Brand guidelines documentation",
      "Brand evolution strategy",
    ],
    deliverables: [
      "Master logo suite",
      "Full brand guidelines",
      "Messaging & tone-of-voice guide",
      "Brand asset library",
    ],
    tools: ["Adobe Illustrator", "Figma", "Fontlab", "Adobe InDesign", "Brandpad"],
    href: "/services/branding",
  },
  {
    number: "05",
    id: "media",
    icon: Video,
    layer: "Media Layer",
    title: "Commercials & Video Production",
    tagline: "Cinematic. Compelling. Impactful.",
    intro:
      "Nothing builds trust and drives action faster than great video. We produce high-impact commercials, brand films, and ad creatives that make your brand impossible to ignore.",
    color: "#0369A1",
    lightBg: "#F0F9FF",
    capabilities: [
      "Brand & corporate films",
      "Commercial video production",
      "Performance ad creatives",
      "Product launch videos",
      "Social content production",
      "Motion graphics & animation",
    ],
    deliverables: [
      "Master video files (4K)",
      "Platform-optimised cuts",
      "Motion graphic assets",
      "Raw footage library",
    ],
    tools: ["Adobe Premiere Pro", "After Effects", "DaVinci Resolve", "Cinema 4D", "Lottie"],
    href: "/services/video",
  },
  {
    number: "06",
    id: "growth",
    icon: TrendingUp,
    layer: "Growth Layer",
    title: "Digital Marketing & Growth",
    tagline: "Data-Driven. Relentless. Compounding.",
    intro:
      "We deploy performance marketing systems that grow more powerful every month — combining SEO, paid advertising, email, and content into one compounding growth engine.",
    color: "#1E40AF",
    lightBg: "#EFF6FF",
    capabilities: [
      "Search engine optimisation (SEO)",
      "Paid advertising (Meta, Google, TikTok)",
      "Email marketing & automation",
      "Content marketing strategy",
      "Conversion rate optimisation",
      "Analytics & attribution",
    ],
    deliverables: [
      "Marketing strategy document",
      "Monthly performance report",
      "Ad creative library",
      "SEO audit & action plan",
    ],
    tools: ["Google Ads", "Meta Ads Manager", "Klaviyo", "Ahrefs", "Hotjar", "GA4"],
    href: "/services/marketing",
  },
];

const ENGAGEMENT_MODELS = [
  {
    icon: Rocket,
    id: "project",
    title: "Project-Based",
    tagline: "One goal. One timeline. Full focus.",
    description:
      "Ideal for defined scopes — a new website, a brand identity, a mobile app, a video campaign. We define the layers, scope the work, and deliver a complete outcome.",
    includes: [
      "Dedicated project team",
      "Fixed scope & timeline",
      "Clear milestone delivery",
      "Post-launch handover",
    ],
    best: "Businesses with a specific, defined need",
    color: "#0818A8",
  },
  {
    icon: RefreshCw,
    id: "retainer",
    title: "Retainer",
    tagline: "Continuous execution. Compounding results.",
    description:
      "Monthly engagement covering ongoing services — marketing, social media, content, SEO, and strategic support. Your digital engine stays running, improving every month.",
    includes: [
      "Monthly strategy sessions",
      "Dedicated account manager",
      "Continuous optimisation",
      "Priority response times",
    ],
    best: "Businesses ready to scale consistently",
    color: "#1D4ED8",
    popular: true,
  },
  {
    icon: HeartHandshake,
    id: "partnership",
    title: "Full Partnership",
    tagline: "We become your digital division.",
    description:
      "Total outsourcing of your digital ecosystem. Strategy, design, technology, brand, media, and growth — all handled by BitLayerX as your dedicated digital partner.",
    includes: [
      "All six layers activated",
      "Senior account lead",
      "Board-level strategy input",
      "White-glove support",
    ],
    best: "Enterprise brands & high-growth companies",
    color: "#000080",
  },
];

// ─── HERO ─────────────────────────────────────────────────────────────────────
function ServicesHero() {
  return (
    <section
      className="relative bg-[#04040e] pt-32 pb-24 lg:pt-44 lg:pb-32 overflow-hidden"
      aria-labelledby="services-hero-heading"
    >
      {/* Hex grid */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none">
        <svg width="100%" height="100%" aria-hidden="true">
          <defs>
            <pattern id="sh-hex" x="0" y="0" width="80" height="69" patternUnits="userSpaceOnUse">
              <path d="M40 0 L74.64 20 L74.64 49 L40 69 L5.36 49 L5.36 20 Z"
                fill="none" stroke="rgba(99,149,255,0.9)" strokeWidth="0.8" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#sh-hex)" />
        </svg>
      </div>

      {/* Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse, rgba(37,99,235,0.13) 0%, transparent 65%)" }} />

      {/* Top line */}
      <div className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent 0%, rgba(59,130,246,0.6) 30%, rgba(147,197,253,0.9) 50%, rgba(59,130,246,0.6) 70%, transparent 100%)" }} />

      {/* Noise */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundSize: "180px 180px",
        }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-blue-400 text-[11px] font-black tracking-[0.24em] uppercase mb-5 flex items-center gap-2">
            <Layers size={13} strokeWidth={2.5} />
            Six Layers. One Unified System.
          </p>

          <h1
            id="services-hero-heading"
            className="text-4xl sm:text-5xl lg:text-7xl xl:text-[5.5rem] font-black text-white uppercase leading-[0.9] tracking-tight mb-8"
            itemProp="name"
          >
            WE DON'T OFFER
            <br />
            <span style={{
              background: "linear-gradient(135deg, #3b82f6 0%, #93c5fd 50%, #60a5fa 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}>
              SERVICES.
            </span>
            <br />
            WE BUILD LAYERS.
          </h1>

          <p className="text-white/45 text-[15px] lg:text-[17px] leading-relaxed max-w-2xl mb-10">
            Every capability we offer is engineered as an interconnected layer —
            not an isolated service. When strategy, design, technology, brand,
            media, and growth operate as one system, the results compound.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link href="/contact/project"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-white hover:bg-white/90 text-[#000080] font-black text-[13px] rounded-xl transition-all duration-200 shadow-lg group">
              Start a Project
              <ArrowRight size={14} strokeWidth={3} className="group-hover:translate-x-0.5 transition-transform" />
            </Link>
            <Link href="#layers"
              className="inline-flex items-center gap-2 px-7 py-3.5 border border-white/15 hover:border-blue-400/40 bg-white/5 hover:bg-blue-500/10 text-white/70 hover:text-white font-bold text-[13px] rounded-xl transition-all duration-300">
              Explore All Layers
            </Link>
          </div>
        </motion.div>

        {/* Layer number strip */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 lg:mt-20 flex items-center gap-0 overflow-x-auto pb-1 scrollbar-none"
        >
          {LAYERS.map((l, i) => {
            const Icon = l.icon;
            return (
              <a key={l.id} href={`#layer-${l.id}`}
                className="flex-shrink-0 flex items-center gap-2.5 px-5 py-3 border-b-2 border-white/8 hover:border-blue-400/50 text-white/30 hover:text-white/80 transition-all duration-200 group">
                <Icon size={13} strokeWidth={2} className="group-hover:text-blue-400 transition-colors" />
                <span className="text-[12px] font-bold hidden sm:inline whitespace-nowrap">{l.layer}</span>
                <span className="text-[11px] font-mono sm:hidden">{l.number}</span>
              </a>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

// ─── LAYER DEEP DIVE ──────────────────────────────────────────────────────────
function LayerSection({ layer, index }) {
  const [expanded, setExpanded] = useState(false);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const Icon = layer.icon;
  const isEven = index % 2 === 0;

  return (
    <section
      id={`layer-${layer.id}`}
      ref={ref}
      className={`py-20 lg:py-28 overflow-hidden ${isEven ? "bg-white" : "bg-gray-50"}`}
      itemScope
      itemType="https://schema.org/Service"
      aria-labelledby={`layer-${layer.id}-heading`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-start ${!isEven ? "lg:[direction:rtl]" : ""}`}>

          {/* Left — identity */}
          <motion.div
            initial={{ opacity: 0, x: isEven ? -28 : 28 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className={!isEven ? "lg:[direction:ltr]" : ""}
          >
            {/* Number + layer tag */}
            <div className="flex items-center gap-3 mb-6">
              <span className="font-mono font-black text-[11px] tracking-[0.2em]"
                style={{ color: layer.color }}>{layer.number}</span>
              <div className="w-8 h-px" style={{ backgroundColor: layer.color + "50" }} />
              <span className="text-[11px] font-black tracking-[0.16em] uppercase"
                style={{ color: layer.color }}>{layer.layer}</span>
            </div>

            {/* Heading */}
            <h2
              id={`layer-${layer.id}-heading`}
              className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#000080] uppercase leading-[0.92] tracking-tight mb-4"
              itemProp="name"
            >
              {layer.title}
            </h2>
            <p className="text-gray-400 text-[13px] font-bold uppercase tracking-widest mb-5">
              {layer.tagline}
            </p>
            <p className="text-gray-500 text-[15px] leading-relaxed mb-8 max-w-md" itemProp="description">
              {layer.intro}
            </p>

            {/* Icon block */}
            <div className="flex items-center gap-4 mb-8">
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg"
                style={{ backgroundColor: layer.color + "15" }}>
                <Icon size={26} strokeWidth={1.75} style={{ color: layer.color }} />
              </div>
              <div>
                <p className="text-[#000080] font-black text-[13px] uppercase tracking-tight">
                  {layer.title}
                </p>
                <p className="text-gray-400 text-[11px] font-semibold">{layer.tagline}</p>
              </div>
            </div>

            {/* CTA */}
            <Link href={layer.href}
              className="inline-flex items-center gap-2 px-6 py-3 font-black text-[13px] text-white rounded-xl transition-all duration-200 hover:opacity-90 shadow-lg group"
              style={{ background: `linear-gradient(135deg, ${layer.color} 0%, ${layer.color}cc 100%)`, boxShadow: `0 8px 24px ${layer.color}28` }}>
              Explore {layer.title}
              <ArrowRight size={14} strokeWidth={3} className="group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </motion.div>

          {/* Right — capabilities, deliverables, tools */}
          <motion.div
            initial={{ opacity: 0, x: isEven ? 28 : -28 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.65, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className={!isEven ? "lg:[direction:ltr]" : ""}
          >
            {/* Capabilities */}
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-1 h-4 rounded-full" style={{ backgroundColor: layer.color }} />
                <p className="text-[11px] font-black tracking-[0.2em] text-gray-400 uppercase">Capabilities</p>
              </div>
              <div className="grid grid-cols-2 gap-2.5">
                {layer.capabilities.map((c, i) => (
                  <div key={i} className="flex items-start gap-2.5 p-3 bg-gray-50 rounded-xl hover:bg-white border border-transparent hover:border-gray-100 hover:shadow-sm transition-all duration-200">
                    <CheckCircle2 size={13} strokeWidth={2.5} style={{ color: layer.color }} className="flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600 text-[12px] font-semibold leading-tight">{c}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Deliverables */}
            <div className="mb-6 p-5 border border-gray-100 bg-white rounded-xl">
              <p className="text-[11px] font-black tracking-[0.2em] text-gray-400 uppercase mb-3">What You Receive</p>
              <div className="grid grid-cols-2 gap-2">
                {layer.deliverables.map((d, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: layer.color }} />
                    <span className="text-gray-600 text-[12px] font-semibold">{d}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tools */}
            <div>
              <p className="text-[11px] font-black tracking-[0.2em] text-gray-400 uppercase mb-3">Tools & Technology</p>
              <div className="flex flex-wrap gap-2">
                {layer.tools.map((t, i) => (
                  <span key={i} className="px-3 py-1.5 text-[11px] font-bold rounded-full border"
                    style={{ borderColor: layer.color + "25", color: layer.color, backgroundColor: layer.color + "08" }}>
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ─── ENGAGEMENT MODELS ────────────────────────────────────────────────────────
function EngagementModels() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      className="bg-[#04040e] py-24 lg:py-32 overflow-hidden relative"
      aria-labelledby="engagement-heading"
    >
      {/* Diagonal texture */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.025]">
        <svg width="100%" height="100%" aria-hidden="true">
          <defs>
            <pattern id="eng-diag" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
              <line x1="0" y1="60" x2="60" y2="0" stroke="white" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#eng-diag)" />
        </svg>
      </div>

      <div className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(59,130,246,0.5) 30%, rgba(147,197,253,0.8) 50%, rgba(59,130,246,0.5) 70%, transparent)" }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16">
          <FadeIn direction="right">
            <p className="text-blue-400 text-[11px] font-black tracking-[0.22em] uppercase mb-4">
              How We Work Together
            </p>
            <h2 id="engagement-heading"
              className="text-4xl sm:text-5xl lg:text-6xl font-black text-white uppercase leading-[0.92] tracking-tight">
              ENGAGEMENT
              <br />
              <span style={{ background: "linear-gradient(135deg, #3b82f6 0%, #93c5fd 50%, #60a5fa 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                MODELS
              </span>
            </h2>
          </FadeIn>
          <FadeIn direction="left" delay={0.1} className="lg:max-w-xs">
            <p className="text-white/35 text-[14px] leading-relaxed lg:text-right">
              Three flexible ways to engage — each designed for a different stage of growth and scope of ambition.
            </p>
          </FadeIn>
        </div>

        <motion.div
          ref={ref}
          variants={stagger(0.13)}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="grid md:grid-cols-3 gap-px bg-white/5"
        >
          {ENGAGEMENT_MODELS.map((model, i) => {
            const Icon = model.icon;
            return (
              <motion.div
                key={model.id}
                variants={fadeUp}
                className="relative bg-[#04040e] hover:bg-[#070720] p-8 lg:p-10 transition-colors duration-300 group"
              >
                {model.popular && (
                  <div className="absolute top-5 right-5 px-3 py-1 bg-white/10 border border-white/15 text-white/60 text-[10px] font-black tracking-widest uppercase rounded-full">
                    Most Popular
                  </div>
                )}

                {/* Top accent */}
                <div className="absolute top-0 left-0 right-0 h-[3px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ backgroundColor: model.color }} />

                <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-6"
                  style={{ backgroundColor: model.color + "18" }}>
                  <Icon size={22} strokeWidth={1.75} style={{ color: model.color }} />
                </div>

                <p className="text-[11px] font-black tracking-[0.18em] uppercase mb-2"
                  style={{ color: model.color }}>{model.id}</p>
                <h3 className="text-[20px] font-black text-white uppercase tracking-tight mb-1">{model.title}</h3>
                <p className="text-white/35 text-[12px] font-semibold italic mb-5">{model.tagline}</p>
                <p className="text-white/50 text-[13px] leading-relaxed mb-6">{model.description}</p>

                <ul className="space-y-2.5 mb-8">
                  {model.includes.map((item, j) => (
                    <li key={j} className="flex items-center gap-2.5">
                      <CheckCircle2 size={13} strokeWidth={2.5} style={{ color: model.color }} className="flex-shrink-0" />
                      <span className="text-white/55 text-[12px] font-medium">{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="pt-5 border-t border-white/6">
                  <p className="text-white/25 text-[11px] font-semibold mb-1 uppercase tracking-wider">Best for</p>
                  <p className="text-white/50 text-[12px] font-semibold">{model.best}</p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        <FadeIn className="text-center mt-14" delay={0.2}>
          <p className="text-white/30 text-[13px] mb-5">Not sure which model fits? Let's talk it through.</p>
          <Link href="/contact/call"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white hover:bg-white/90 text-[#000080] font-black text-[13px] rounded-xl transition-all duration-200 shadow-lg group">
            Book a Free Strategy Call
            <ArrowRight size={14} strokeWidth={3} className="group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </FadeIn>
      </div>
    </section>
  );
}

// ─── SERVICES CTA ─────────────────────────────────────────────────────────────
function ServicesCTA() {
  return (
    <section
      className="bg-white py-20 lg:py-28"
      aria-labelledby="services-cta-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-px bg-gray-100">

          {/* Left — packages CTA */}
          <FadeIn direction="right">
            <div className="bg-white p-10 lg:p-14 h-full flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#000080]/8 flex items-center justify-center mb-6">
                  <Package size={22} strokeWidth={2} className="text-[#0818A8]" />
                </div>
                <p className="text-[#0818A8] text-[11px] font-black tracking-[0.2em] uppercase mb-3">Pre-Built Bundles</p>
                <h2 id="services-cta-heading" className="text-3xl lg:text-4xl font-black text-[#000080] uppercase leading-tight tracking-tight mb-4">
                  See Our Packages
                </h2>
                <p className="text-gray-500 text-[14px] leading-relaxed mb-8">
                  Explore our Launchpad, Growth Engine, Brand Authority, Tech Powerhouse, and Digital Dominance packages — pre-designed stacks of layers for every stage of growth.
                </p>
              </div>
              <Link href="/packages"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#000080] hover:bg-[#0818A8] text-white font-black text-[13px] rounded-xl transition-all duration-200 shadow-lg shadow-[#000080]/20 w-fit group">
                View All Packages
                <ArrowRight size={14} strokeWidth={3} className="group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>
          </FadeIn>

          {/* Right — custom project CTA */}
          <FadeIn direction="left" delay={0.1}>
            <div className="bg-[#04040e] p-10 lg:p-14 h-full flex flex-col justify-between relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-[3px]"
                style={{ background: "linear-gradient(90deg, #0818A8 0%, #2563EB 50%, #0818A8 100%)" }} />
              <div>
                <div className="w-12 h-12 rounded-2xl bg-blue-500/15 flex items-center justify-center mb-6">
                  <Layers size={22} strokeWidth={2} className="text-blue-400" />
                </div>
                <p className="text-blue-400 text-[11px] font-black tracking-[0.2em] uppercase mb-3">Bespoke Build</p>
                <h3 className="text-3xl lg:text-4xl font-black text-white uppercase leading-tight tracking-tight mb-4">
                  Custom Project
                </h3>
                <p className="text-white/40 text-[14px] leading-relaxed mb-8">
                  Have a specific vision? Tell us the layers you need, the outcome you're targeting, and the timeline you're working to. We'll scope it and come back in 48 hours.
                </p>
              </div>
              <Link href="/contact/project"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-white hover:bg-white/90 text-[#000080] font-black text-[13px] rounded-xl transition-all duration-200 shadow-lg w-fit group">
                Start a Custom Project
                <ArrowRight size={14} strokeWidth={3} className="group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

// ─── ROOT EXPORT ──────────────────────────────────────────────────────────────
export default function ServicesPage() {
  return (
    <>
      {/* SEO metadata via script — supplement with Next.js metadata API in layout */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Services — BitLayerX",
            description:
              "BitLayerX builds layered digital ecosystems across strategy, UI/UX, web & mobile development, branding, video production, and digital marketing.",
            url: "https://bitlayerx.com/services",
            provider: {
              "@type": "Organization",
              name: "BitLayerX",
              url: "https://bitlayerx.com",
            },
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "BitLayerX Services",
              itemListElement: LAYERS.map((l, i) => ({
                "@type": "Offer",
                position: i + 1,
                name: l.title,
                description: l.intro,
                url: `https://bitlayerx.com${l.href}`,
              })),
            },
          }),
        }}
      />

      <main itemScope itemType="https://schema.org/WebPage">
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