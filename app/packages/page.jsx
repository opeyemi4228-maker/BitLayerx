"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight, Rocket, Zap, Crown, Monitor, Globe2,
  CheckCircle2, ChevronDown, Layers, Target, CalendarCheck,
  Send, Phone, Package, Star, Clock,
} from "lucide-react";

const FONT_URL = "https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,400&display=swap";
const ease = [0.22, 1, 0.36, 1];

const PACKAGES = [
  {
    id: "launchpad", icon: Rocket, name: "Launchpad",
    tagline: "Your First Step Into the Digital World — Done Right",
    price: "₦350,000", priceNote: "Website priced separately",
    timeline: "2–3 weeks", bestFor: "Startups, New Businesses, First Digital Presence",
    color: "#0818A8", popular: false,
    intro: "Every great digital brand starts with a solid foundation. The Launchpad package establishes your digital identity, builds your online presence from the ground up, and ensures your business gets found from day one.",
    layers: ["Brand Layer", "Technology Layer", "Growth Layer"],
    features: [
      { label: "Brand Identity & Logo Design", note: "Colours, typography, visual language" },
      { label: "Website Development", note: "WordPress from ₦750k · Coded from ₦1M" },
      { label: "Basic SEO Setup & Google Indexing", note: "Found from day one" },
      { label: "Social Media Setup (2 platforms)", note: "Professional, consistent presence" },
      { label: "1 Month Post-Launch Support", note: "Peace of mind as you go live" },
    ],
    outcomes: ["Professional brand identity", "24/7 business-ready website", "Google-indexed presence", "Consistent social media setup"],
  },
  {
    id: "growth-engine", icon: Zap, name: "Growth Engine",
    tagline: "Stop Being the Best-Kept Secret in Your Industry",
    price: "₦500,000", priceNote: "Website priced separately",
    timeline: "4–6 weeks", bestFor: "Growing SMEs, Competitive Markets, Revenue-Focused Brands",
    color: "#1D4ED8", popular: true,
    intro: "You have a great business but you're not getting enough enquiries. Growth Engine layers brand, website, content, marketing, and video into one results-driven system — each feeding the next.",
    layers: ["Brand Layer", "Experience Layer", "Technology Layer", "Media Layer", "Growth Layer"],
    features: [
      { label: "Full Brand Identity System", note: "Logo, typography, colour, brand guide" },
      { label: "UI/UX Design & Product Strategy", note: "Every page designed for conversions" },
      { label: "Website (up to 10 pages)", note: "WordPress from ₦1M · Coded from ₦1.25M" },
      { label: "3-Month Performance Marketing", note: "SEO, paid ads, content marketing" },
      { label: "30-Day Social Media Calendar", note: "Daily posts, engagement, platform growth" },
      { label: "2 Promotional Videos (30–60s)", note: "Trust-building video content" },
      { label: "Monthly Performance Reports", note: "Data-backed decision making" },
    ],
    outcomes: ["Increased qualified enquiries", "Consistent brand across all platforms", "Measurable marketing ROI", "Video-backed trust & authority"],
  },
  {
    id: "brand-authority", icon: Crown, name: "Brand Authority",
    tagline: "Become the Brand Everyone Recognises, Respects & Chooses First",
    price: "₦1,000,000", priceNote: "Website priced separately",
    timeline: "6–10 weeks", bestFor: "Established Brands, Premium Positioning, Market Leaders",
    color: "#000080", popular: false,
    intro: "At this level, you're no longer competing on price — you're competing on perception. We engineer your full market position with premium branding, world-class web experience, 6-month marketing, automation, video, and a dedicated account manager.",
    layers: ["Strategy Layer", "Brand Layer", "Experience Layer", "Technology Layer", "Media Layer", "Growth Layer"],
    features: [
      { label: "Premium Brand System", note: "Logo suite, colour palette, icon library, style guide" },
      { label: "Deep UI/UX Design & Research", note: "User research, journey mapping, prototypes" },
      { label: "Advanced Website", note: "WordPress from ₦1.5M · Coded from ₦2M" },
      { label: "CRM & Email Automation", note: "Leads captured, nurtured, followed up automatically" },
      { label: "6-Month Full Marketing Strategy", note: "SEO, Google Ads, content, email campaigns" },
      { label: "6-Month Social Media Management", note: "Full strategy, content, community management" },
      { label: "3 High-Quality Commercial Videos", note: "Concept, scripting, production, delivery" },
      { label: "Influencer & PR Outreach Strategy", note: "Quarterly reviews, growth consulting" },
      { label: "Dedicated Account Manager (6 months)", note: "Your single point of contact" },
    ],
    outcomes: ["Premium market positioning", "Automated lead nurturing", "Authority video content", "6 months of compounding marketing"],
  },
  {
    id: "tech-powerhouse", icon: Monitor, name: "Tech Powerhouse",
    tagline: "Build the Digital Infrastructure That Scales Without Limits",
    price: "₦2,000,000", priceNote: "Full app + website: ₦3.5M – ₦9M based on scope",
    timeline: "8–20 weeks", bestFor: "Tech Products, SaaS, Fintech, Logistics, Enterprise Apps",
    color: "#0369A1", popular: false,
    intro: "Standard solutions won't get you there. Tech Powerhouse is BitLayerX at full engineering power — building custom digital infrastructure from the ground up.",
    layers: ["Strategy Layer", "Experience Layer", "Technology Layer", "Brand Layer", "Media Layer"],
    features: [
      { label: "Full UX Research & Product Design", note: "User research, wireframing, interactive prototyping" },
      { label: "Custom Web & Mobile Applications", note: "iOS, Android, Web — engineered to perform at any scale" },
      { label: "Custom App + Website", note: "₦3.5M – ₦9M based on complexity & scope" },
      { label: "Cloud Infrastructure (AWS/Azure/GCP)", note: "API development, ERP/CRM, AI features, cybersecurity" },
      { label: "Brand Identity for the Product", note: "Consistent, premium, market-ready visual identity" },
      { label: "Launch Campaign Video Package", note: "Intro your product to the market" },
      { label: "QA Testing & Full Documentation", note: "All devices, browsers, and use cases" },
      { label: "12 Months Post-Launch Support", note: "What we build, we stand behind" },
    ],
    outcomes: ["Production-grade custom platform", "Scales from 100 to 10M users", "Enterprise-ready infrastructure", "12 months of dedicated support"],
  },
  {
    id: "digital-dominance", icon: Globe2, name: "Digital Dominance",
    tagline: "When You're Ready to Own Your Market — Completely and Permanently",
    price: "Custom Quote", priceNote: "Scoped based on team size, services, markets & engagement length",
    timeline: "Ongoing Partnership", bestFor: "Enterprise Brands, Organisations, Market Leaders, Multi-Market Operations",
    color: "#000080", popular: false, isEnterprise: true,
    intro: "This is not a package. This is a partnership at the highest level. BitLayerX becomes your dedicated digital division — sitting inside your growth strategy, contributing to business decisions, building your technology, running your marketing, managing your brand.",
    layers: ["All Six Layers — Activated Simultaneously"],
    features: [
      { label: "Annual Brand Audits & Evolution", note: "Full identity management across all markets" },
      { label: "Ongoing Product Design & UX Optimisation", note: "Continuous user research & digital product improvement" },
      { label: "Dedicated Engineering Team", note: "Unlimited feature development, integrations, platform evolution" },
      { label: "Enterprise Web Platforms", note: "Unlimited updates, new sections, landing pages" },
      { label: "2–5 Dedicated Engineers", note: "AI dashboards, automation, cloud management, cybersecurity" },
      { label: "Monthly Commercial Video Production", note: "Brand films, launches, advertising, social content" },
      { label: "Full-Service Marketing Retainer", note: "SEO, Google Ads, programmatic, email, influencers, PR" },
      { label: "Complete Social Media Management (365 days)", note: "Strategy, content, community, trends" },
      { label: "Quarterly Board-Level Strategy Consulting", note: "Annual reviews, competitive intelligence" },
      { label: "Senior Account Lead + 24/7 Priority Support", note: "White-glove onboarding & partnership" },
    ],
    outcomes: ["Total digital market leadership", "Your own digital division", "Continuous compounding growth", "Board-level strategic alignment"],
  },
];

const FAQS = [
  { q: "Can I combine multiple packages?", a: "Absolutely. Most clients combine packages for comprehensive results. We offer bundle pricing for combined services." },
  { q: "What payment plans do you offer?", a: "We offer flexible milestone-based payments: typically 50% upfront, 30% at project midpoint, and 20% on completion. Monthly retainers are billed at the start of each month." },
  { q: "How quickly can you start?", a: "Most projects kick off within 5–7 business days of contract signing. For urgent requirements, we offer expedited onboarding." },
  { q: "Why is website development priced separately?", a: "Website scope varies significantly — from a clean 5-page site to a complex 50-page platform. We price development separately to ensure you only pay for exactly what you need." },
  { q: "What results can I realistically expect?", a: "Our clients typically see 20–50% increases in conversion rates, 30–50% reduction in operational costs through automation, and 250%+ average ROI across marketing campaigns." },
  { q: "Do you work with international clients?", a: "Yes — we serve clients across Nigeria, the UK, and internationally. All packages are available globally. We accommodate different time zones and work with full transparency remotely." },
];

const PHRASES = [
  "Startups launching their first brand.",
  "SMEs ready to dominate their market.",
  "Established brands demanding authority.",
  "Tech products built to scale millions.",
  "Enterprises owning their digital future.",
];

function AnimatedGrid({ intensity = 1 }) {
  const canvasRef = useRef(null);
  const rafRef = useRef(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const CELL = 56;
    let W, H, cols, rows;
    const resize = () => {
      W = canvas.width = canvas.offsetWidth;
      H = canvas.height = canvas.offsetHeight;
      cols = Math.ceil(W / CELL) + 1;
      rows = Math.ceil(H / CELL) + 1;
    };
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);
    const WAVES = [
      { ax: 0.18, ay: 0.22, sr: 0.43, sc: 0.61, r: 270, rgb: "37,99,235" },
      { ax: 0.72, ay: 0.32, sr: 0.29, sc: 0.52, r: 210, rgb: "29,78,216" },
      { ax: 0.44, ay: 0.65, sr: 0.55, sc: 0.78, r: 190, rgb: "59,130,246" },
    ];
    let startTs = null;
    const draw = (ts) => {
      if (!startTs) startTs = ts;
      const t = (ts - startTs) / 1000;
      ctx.clearRect(0, 0, W, H);
      ctx.strokeStyle = `rgba(0,0,102,${0.05 * intensity})`;
      ctx.lineWidth = 0.5;
      ctx.beginPath();
      for (let c = 0; c <= cols; c++) { const x = c * CELL; ctx.moveTo(x, 0); ctx.lineTo(x, H); }
      for (let r = 0; r <= rows; r++) { const y = r * CELL; ctx.moveTo(0, y); ctx.lineTo(W, y); }
      ctx.stroke();
      WAVES.forEach(({ ax, ay, sr, sc, r, rgb }) => {
        const cx = W * (ax + 0.13 * Math.sin(t * sr));
        const cy = H * (ay + 0.09 * Math.cos(t * sc));
        const grd = ctx.createRadialGradient(cx, cy, 0, cx, cy, r);
        grd.addColorStop(0, `rgba(${rgb},${0.16 * intensity})`);
        grd.addColorStop(0.45, `rgba(${rgb},${0.06 * intensity})`);
        grd.addColorStop(1, `rgba(${rgb},0)`);
        ctx.fillStyle = grd;
        ctx.fillRect(0, 0, W, H);
        for (let c = 0; c <= cols; c++) {
          for (let r2 = 0; r2 <= rows; r2++) {
            const ix = c * CELL, iy = r2 * CELL;
            const dx = ix - cx, dy = iy - cy;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist > r) continue;
            const phase = dist * 0.02 - t * sr * 3.5;
            const wave = (Math.sin(phase) + 1) * 0.5;
            const prox = 1 - dist / r;
            const alpha = wave * prox * 0.72 * intensity;
            if (alpha < 0.035) continue;
            ctx.beginPath();
            ctx.arc(ix, iy, 1.0 + wave * prox * 2.4, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(${rgb},${alpha.toFixed(3)})`;
            ctx.fill();
          }
        }
      });
      const scanY = ((t * 36) % (H + 80)) - 40;
      const sg = ctx.createLinearGradient(0, scanY - 28, 0, scanY + 28);
      sg.addColorStop(0, "rgba(59,130,246,0)");
      sg.addColorStop(0.5, `rgba(59,130,246,${0.10 * intensity})`);
      sg.addColorStop(1, "rgba(59,130,246,0)");
      ctx.fillStyle = sg; ctx.fillRect(0, scanY - 28, W, 56);
      ctx.strokeStyle = `rgba(99,163,255,${0.20 * intensity})`; ctx.lineWidth = 1;
      ctx.beginPath(); ctx.moveTo(0, scanY); ctx.lineTo(W, scanY); ctx.stroke();
      const fade = ctx.createLinearGradient(0, H * 0.52, 0, H);
      fade.addColorStop(0, "rgba(255,255,255,0)");
      fade.addColorStop(1, "rgba(255,255,255,1)");
      ctx.fillStyle = fade; ctx.fillRect(0, H * 0.52, W, H * 0.48);
      rafRef.current = requestAnimationFrame(draw);
    };
    rafRef.current = requestAnimationFrame(draw);
    return () => { cancelAnimationFrame(rafRef.current); ro.disconnect(); };
  }, [intensity]);
  return <canvas ref={canvasRef} aria-hidden="true" className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 0 }} />;
}

function TypingText() {
  const [idx, setIdx] = useState(0);
  const [text, setText] = useState("");
  const [del, setDel] = useState(false);
  const [pausing, setPausing] = useState(false);
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);
  useEffect(() => {
    if (!mounted || pausing) return;
    const word = PHRASES[idx];
    const t = setTimeout(() => {
      if (!del) {
        const next = word.slice(0, text.length + 1);
        setText(next);
        if (next === word) { setPausing(true); setTimeout(() => { setPausing(false); setDel(true); }, 2200); }
      } else {
        const next = word.slice(0, text.length - 1);
        setText(next);
        if (next === "") { setDel(false); setIdx(i => (i + 1) % PHRASES.length); }
      }
    }, del ? 22 : 45);
    return () => clearTimeout(t);
  }, [text, del, pausing, idx, mounted]);
  if (!mounted) return null;
  return (
    <span className="font-black" style={{ background: "linear-gradient(135deg,#000066 0%,#1D4ED8 45%,#3B82F6 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
      {text}
      <span className="inline-block w-[2px] h-[0.9em] align-middle ml-[2px]" style={{ background: "#1D4ED8", animation: "blx-blink 0.9s step-end infinite" }} />
    </span>
  );
}

function useVisible(margin = "-50px") {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin });
  return [ref, inView];
}

function Reveal({ children, delay = 0, y = 22, className = "" }) {
  const [ref, inView] = useVisible();
  return (
    <motion.div ref={ref} className={className} initial={{ opacity: 0, y }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, delay, ease }}>
      {children}
    </motion.div>
  );
}

function Pill({ children }) {
  return (
    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-5" style={{ background: "rgba(8,24,168,0.07)", border: "1px solid rgba(8,24,168,0.12)" }}>
      <span className="text-[#0818A8] text-[10px] font-black tracking-[0.26em] uppercase">{children}</span>
    </div>
  );
}

function PackagesHero() {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <section className="relative bg-white overflow-hidden" aria-labelledby="packages-hero-heading" style={{ fontFamily: "'Montserrat', sans-serif" }}>
      <AnimatedGrid intensity={1} />
      <div className="absolute top-0 left-0 right-0 z-20" style={{ height: 3, background: "linear-gradient(90deg,transparent 0%,#0818A8 25%,#2563EB 50%,#0818A8 75%,transparent 100%)" }} />
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none z-[1]" style={{ background: "radial-gradient(ellipse 85% 65% at 50% 0%,rgba(255,255,255,0.55) 0%,transparent 80%)" }} />
      <style>{`@keyframes blx-blink{0%,100%{opacity:1}50%{opacity:0}} @keyframes blx-float-a{0%,100%{transform:translateY(0) rotate(0deg)}50%{transform:translateY(-9px) rotate(3deg)}} @keyframes blx-float-b{0%,100%{transform:translateY(0)}50%{transform:translateY(-6px)}} @keyframes blx-glow-p{0%,100%{box-shadow:0 0 8px 2px rgba(37,99,235,0.28)}50%{box-shadow:0 0 22px 7px rgba(37,99,235,0.52)}}`}</style>
      {[{ size: 18, top: "26%", right: "9%", delay: 0, glow: true }, { size: 9, top: "24%", right: "4.5%", delay: 0.2, glow: true }, { size: 22, top: "62%", left: "5%", delay: 0.1, glow: false }, { size: 10, top: "55%", left: "19%", delay: 0.3, glow: false }].map((a, i) => (
        <div key={i} aria-hidden="true" className="absolute pointer-events-none z-10" style={{ width: a.size, height: a.size, background: a.glow ? "linear-gradient(135deg,#000066,#1D4ED8)" : "#000066", opacity: a.glow ? 0.85 : 0.07, top: a.top, left: a.left, right: a.right, animation: [`blx-float-${i % 2 === 0 ? "a" : "b"} ${3.6 + i * 0.4}s ease-in-out infinite`, a.glow ? `blx-glow-p ${2.2 + i * 0.4}s ease-in-out infinite` : ""].filter(Boolean).join(", "), animationDelay: `${a.delay}s` }} />
      ))}
      <div aria-hidden="true" className="absolute top-24 right-10 z-10 pointer-events-none hidden lg:block">
        <div style={{ width: 32, height: 32, border: "1px solid rgba(0,0,102,0.14)" }} />
        <div style={{ width: 20, height: 20, background: "rgba(0,0,102,0.04)", margin: "4px 0 0 4px" }} />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 pt-36 sm:pt-44 pb-0">
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1, ease }} className="flex items-center gap-3 mb-6">
          <div className="w-8 h-8 rounded-lg bg-[#000080]/8 flex items-center justify-center"><Package size={15} strokeWidth={2.5} className="text-[#0818A8]" /></div>
          <p className="text-[#0818A8] text-[11px] font-black tracking-[0.28em] uppercase">Five Packages · One Philosophy · Infinite Layers</p>
        </motion.div>
        <motion.h1 id="packages-hero-heading" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2, ease }} className="font-black text-[#080c20] uppercase leading-[0.88] tracking-[-0.025em] mb-5" style={{ fontSize: "clamp(2.8rem, 7.5vw, 7rem)" }} itemProp="name">
          Building the<br />
          <span style={{ background: "linear-gradient(135deg,#0818A8 0%,#2563EB 50%,#0818A8 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Future,</span><br />
          One Layer at a Time.
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65, delay: 0.32, ease }} className="text-gray-500 text-[15px] sm:text-[16px] font-medium mb-2 min-h-[1.6em]">
          Built for <TypingText />
        </motion.p>
        <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65, delay: 0.4, ease }} className="text-gray-400 text-[14px] sm:text-[15px] leading-relaxed max-w-xl mb-10 font-medium" itemProp="description">
          Five strategic packages — each a carefully engineered stack of layers designed to match your stage of growth. No hidden fees. No generic deliverables. Just measurable results.
        </motion.p>
        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65, delay: 0.48, ease }} className="flex flex-wrap gap-3 mb-16">
          <a href="#growth-engine" className="group flex items-center overflow-hidden focus:outline-none focus:ring-2 focus:ring-[#000066] focus:ring-offset-2" style={{ background: "#000066" }}>
            <span className="flex-1 text-white font-black text-[13px] tracking-[0.16em] uppercase pl-7 pr-4 py-4">Explore Packages</span>
            <div className="flex items-center justify-center w-14 h-14 flex-shrink-0 border-l group-hover:bg-white/10 transition-colors" style={{ borderColor: "rgba(255,255,255,0.15)", background: "rgba(255,255,255,0.07)" }}>
              <ArrowRight size={16} strokeWidth={2.5} className="text-white group-hover:translate-x-0.5 transition-transform" />
            </div>
          </a>
          <Link href="/contact/call" className="inline-flex items-center gap-2 px-7 py-4 border border-[#000066]/15 hover:border-[#000066]/35 bg-white/80 backdrop-blur-sm text-[#000066] font-bold text-[13px] uppercase tracking-wide transition-all duration-200 hover:bg-white">
            <CalendarCheck size={13} strokeWidth={2} />Book a Free Call
          </Link>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65, delay: 0.56, ease }} className="flex items-stretch border-t border-gray-100 overflow-x-auto" style={{ scrollbarWidth: "none" }}>
          {PACKAGES.map((pkg, i) => {
            const Icon = pkg.icon;
            const active = activeTab === i;
            return (
              <a key={pkg.id} href={`#${pkg.id}`} onClick={() => setActiveTab(i)} className={`group flex-shrink-0 flex flex-col items-start gap-1.5 px-5 py-4 border-t-2 transition-all duration-200 cursor-pointer ${active ? "border-[#0818A8]" : "border-transparent hover:border-gray-200"}`}>
                <div className="flex items-center gap-2">
                  <Icon size={13} strokeWidth={2.5} style={{ color: active ? pkg.color : undefined }} className={active ? "" : "text-gray-300 group-hover:text-gray-500 transition-colors"} />
                  <span className={`text-[12px] font-black uppercase tracking-wide whitespace-nowrap transition-colors ${active ? "text-[#000080]" : "text-gray-300 group-hover:text-gray-600"}`}>{pkg.name}</span>
                </div>
                <span className={`text-[10px] font-semibold transition-colors hidden sm:block ${active ? "text-[#0818A8]" : "text-gray-200"}`}>{pkg.price}</span>
              </a>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

function ComparisonStrip() {
  const [ref, inView] = useVisible();
  return (
    <section className="bg-[#000066] py-12 overflow-hidden" ref={ref} style={{ fontFamily: "'Montserrat', sans-serif" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-px bg-white/10 rounded-2xl overflow-hidden border border-white/10">
          {PACKAGES.map((pkg, i) => {
            const Icon = pkg.icon;
            return (
              <motion.a key={pkg.id} href={`#${pkg.id}`} initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: i * 0.07, ease }} className="group flex flex-col items-center gap-3 p-6 bg-[#000066] hover:bg-[#000080] transition-colors duration-200 cursor-pointer text-center">
                <div className="w-10 h-10 rounded-xl bg-white/10 group-hover:bg-white/20 flex items-center justify-center transition-colors"><Icon size={18} strokeWidth={2} className="text-white" /></div>
                <div>
                  <p className="text-white font-black text-[12px] uppercase tracking-wide">{pkg.name}</p>
                  <p className="text-white/40 text-[11px] font-medium mt-0.5">{pkg.price}</p>
                </div>
                {pkg.popular && <span className="px-2.5 py-0.5 bg-white text-[#000066] text-[9px] font-black uppercase tracking-widest rounded-full">Popular</span>}
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function PackageSection({ pkg, index }) {
  const [ref, inView] = useVisible("-40px");
  const [featuresOpen, setFeaturesOpen] = useState(false);
  const Icon = pkg.icon;
  const isEven = index % 2 === 0;
  return (
    <section id={pkg.id} ref={ref} className="scroll-mt-24 relative" aria-labelledby={`pkg-${pkg.id}-heading`} itemScope itemType="https://schema.org/Offer" style={{ fontFamily: "'Montserrat', sans-serif" }}>
      <div className="absolute top-0 left-0 right-0 h-px bg-gray-100" />
      <div className={`py-20 lg:py-28 ${isEven ? "bg-white" : "bg-[#f8f9fc]"}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <motion.div initial={{ opacity: 0, y: 32 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.75, ease }} className="relative bg-white border border-gray-100 rounded-2xl overflow-hidden" style={{ boxShadow: "0 4px 32px rgba(0,0,80,0.06), 0 1px 4px rgba(0,0,80,0.04)" }}>
            <div className="absolute top-0 left-0 right-0 h-[4px]" style={{ background: `linear-gradient(90deg,${pkg.color} 0%,${pkg.color}99 100%)` }} />
            {pkg.popular && (
              <div className="absolute top-4 right-6 flex items-center gap-1.5 px-3 py-1.5 rounded-full z-10" style={{ background: pkg.color }}>
                <Star size={10} strokeWidth={2.5} className="fill-white text-white" />
                <span className="text-white text-[10px] font-black uppercase tracking-widest">Most Popular</span>
              </div>
            )}
            <div className="grid lg:grid-cols-[1fr_340px] xl:grid-cols-[1fr_380px] gap-0">
              <div className="p-8 sm:p-10 lg:p-12 border-b lg:border-b-0 lg:border-r border-gray-100">
                <div className="flex items-center gap-4 mb-7">
                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0" style={{ background: `${pkg.color}12` }}><Icon size={22} strokeWidth={1.75} style={{ color: pkg.color }} /></div>
                  <div>
                    <p className="text-[10px] font-black tracking-[0.25em] uppercase mb-0.5" style={{ color: pkg.color }}>Package {String(index + 1).padStart(2, "0")}</p>
                    <p className="text-gray-300 text-[11px] font-semibold">BitLayerX</p>
                  </div>
                </div>
                <h2 id={`pkg-${pkg.id}-heading`} className="font-black text-[#080c20] uppercase leading-[0.9] tracking-tight mb-3" style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)" }} itemProp="name">{pkg.name}</h2>
                <p className="text-[13.5px] font-semibold italic text-gray-500 mb-5 leading-snug max-w-sm">{pkg.tagline}</p>
                <p className="text-gray-500 text-[14px] leading-relaxed mb-8 max-w-lg" itemProp="description">{pkg.intro}</p>
                <div className="mb-7">
                  <p className="text-[10px] font-black tracking-[0.22em] uppercase text-gray-300 mb-2.5">Layers Activated</p>
                  <div className="flex flex-wrap gap-2">
                    {pkg.layers.map((l, i) => <span key={i} className="px-3 py-1 text-[11px] font-bold rounded-full border" style={{ borderColor: `${pkg.color}30`, color: pkg.color, background: `${pkg.color}08` }}>{l}</span>)}
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 rounded-xl border-l-[3px]" style={{ background: `${pkg.color}06`, borderLeftColor: pkg.color }}>
                  <Target size={14} strokeWidth={2.5} style={{ color: pkg.color }} className="flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 mb-0.5">Best For</p>
                    <p className="text-gray-800 text-[13px] font-bold">{pkg.bestFor}</p>
                  </div>
                </div>
              </div>
              <div className="p-8 sm:p-10 flex flex-col gap-5 bg-[#fafbff]">
                <div>
                  <p className="text-[10px] font-black tracking-[0.22em] uppercase text-gray-300 mb-2">{pkg.isEnterprise ? "Investment" : "Base Package"}</p>
                  <p className="font-black text-[#000080] leading-none mb-1" style={{ fontSize: pkg.isEnterprise ? "1.75rem" : "2.4rem" }} itemProp="price">{pkg.price}</p>
                  <p className="text-gray-400 text-[12.5px] font-medium leading-snug">{pkg.priceNote}</p>
                </div>
                <div className="flex items-center gap-2 pb-5 border-b border-gray-100">
                  <Clock size={13} strokeWidth={2.5} className="text-gray-300 flex-shrink-0" />
                  <span className="text-gray-600 text-[13px] font-semibold">Timeline: {pkg.timeline}</span>
                </div>
                <div>
                  <p className="text-[10px] font-black tracking-[0.22em] uppercase text-gray-300 mb-3">Expected Outcomes</p>
                  <div className="space-y-2">
                    {pkg.outcomes.map((o, i) => (
                      <div key={i} className="flex items-start gap-2.5">
                        <CheckCircle2 size={13} strokeWidth={2.5} style={{ color: pkg.color }} className="flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 text-[12.5px] font-semibold leading-snug">{o}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="space-y-2.5 mt-auto pt-2">
                  <Link href={pkg.isEnterprise ? "/contact/proposal" : "/contact/project"} className="group flex items-center justify-between w-full px-5 py-4 text-white font-black text-[13px] uppercase tracking-wide rounded-xl transition-all duration-200" style={{ background: `linear-gradient(135deg,${pkg.color} 0%,${pkg.color}dd 100%)`, boxShadow: `0 6px 20px ${pkg.color}28` }}>
                    <span>{pkg.isEnterprise ? "Request a Proposal" : "Get Started"}</span>
                    <span className="w-8 h-8 rounded-lg bg-white/15 flex items-center justify-center flex-shrink-0"><ArrowRight size={13} strokeWidth={3} className="group-hover:translate-x-0.5 transition-transform" /></span>
                  </Link>
                  <Link href="/contact/call" className="flex items-center justify-center gap-2 w-full py-3 border border-gray-200 hover:border-[#000066]/25 bg-white hover:bg-[#000066]/3 text-gray-600 hover:text-[#000066] font-bold text-[12.5px] uppercase tracking-wide rounded-xl transition-all duration-200">
                    <CalendarCheck size={13} strokeWidth={2} />Book a Strategy Call
                  </Link>
                </div>
              </div>
            </div>
            <div className="border-t border-gray-100">
              <button onClick={() => setFeaturesOpen(v => !v)} className="w-full flex items-center justify-between px-8 sm:px-10 lg:px-12 py-5 hover:bg-gray-50/50 transition-colors group">
                <div className="flex items-center gap-3">
                  <div className="w-1 h-4 rounded-full" style={{ background: pkg.color }} />
                  <p className="text-[12px] font-black uppercase tracking-[0.18em] text-gray-700 group-hover:text-[#000080] transition-colors">What's Included <span className="ml-2 font-semibold text-gray-400 normal-case tracking-normal">({pkg.features.length} deliverables)</span></p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[11px] font-semibold text-gray-400 group-hover:text-gray-600 transition-colors">{featuresOpen ? "Collapse" : "Expand all"}</span>
                  <ChevronDown size={15} strokeWidth={2.5} className={`text-gray-300 group-hover:text-gray-500 transition-all duration-300 ${featuresOpen ? "rotate-180" : ""}`} />
                </div>
              </button>
              <AnimatePresence initial={false}>
                {featuresOpen && (
                  <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.4, ease }}>
                    <div className="px-8 sm:px-10 lg:px-12 pb-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                      {pkg.features.map((f, i) => (
                        <motion.div key={i} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05, duration: 0.4, ease }} className="flex items-start gap-3 p-4 rounded-xl bg-gray-50 border border-gray-100 hover:border-gray-200 hover:shadow-sm transition-all duration-200">
                          <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5" style={{ background: `${pkg.color}15` }}><CheckCircle2 size={12} strokeWidth={2.5} style={{ color: pkg.color }} /></div>
                          <div>
                            <p className="text-gray-800 text-[13px] font-bold leading-snug">{f.label}</p>
                            {f.note && <p className="text-gray-400 text-[11.5px] mt-0.5 leading-snug font-medium">{f.note}</p>}
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
              {!featuresOpen && (
                <div className="px-8 sm:px-10 lg:px-12 pb-8 flex flex-wrap gap-2">
                  {pkg.features.slice(0, 4).map((f, i) => (
                    <span key={i} className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gray-50 border border-gray-100 text-[11.5px] font-semibold text-gray-600">
                      <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: pkg.color }} />{f.label}
                    </span>
                  ))}
                  {pkg.features.length > 4 && <button onClick={() => setFeaturesOpen(true)} className="px-3 py-1.5 rounded-lg border border-dashed border-gray-200 text-[11.5px] font-bold text-gray-400 hover:text-[#000080] hover:border-[#000080]/20 transition-colors">+{pkg.features.length - 4} more</button>}
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function FAQSection() {
  const [open, setOpen] = useState(null);
  const [ref, inView] = useVisible();
  return (
    <section className="bg-white py-24 lg:py-32" aria-labelledby="faq-heading" itemScope itemType="https://schema.org/FAQPage" style={{ fontFamily: "'Montserrat', sans-serif" }}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid lg:grid-cols-[1fr_2fr] gap-12 lg:gap-20 items-start">
          <Reveal className="lg:sticky lg:top-28">
            <Pill>Got Questions?</Pill>
            <h2 id="faq-heading" className="font-black text-[#080c20] uppercase leading-[0.9] tracking-tight mb-5" style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}>
              Frequently<br /><span style={{ background: "linear-gradient(135deg,#0818A8,#2563EB)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Asked</span>
            </h2>
            <p className="text-gray-500 text-[13.5px] leading-relaxed mb-7">Everything you need to know before getting started.</p>
            <Link href="/contact" className="inline-flex items-center gap-2 text-[#0818A8] font-black text-[12px] uppercase tracking-wide hover:opacity-70 transition-opacity">Ask us directly <ArrowRight size={12} strokeWidth={3} /></Link>
          </Reveal>
          <motion.div ref={ref} className="space-y-2">
            {FAQS.map((faq, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: i * 0.07, ease }} className="border border-gray-100 rounded-xl overflow-hidden" itemScope itemType="https://schema.org/Question" itemProp="mainEntity">
                <button onClick={() => setOpen(open === i ? null : i)} className={`w-full flex items-center justify-between px-6 py-4 text-left transition-all duration-200 ${open === i ? "bg-[#000066]" : "bg-white hover:bg-gray-50"}`}>
                  <span className={`font-bold text-[13.5px] pr-4 ${open === i ? "text-white" : "text-gray-800"}`} itemProp="name">{faq.q}</span>
                  <div className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 ${open === i ? "bg-white/15 rotate-180" : "bg-gray-100"}`}><ChevronDown size={13} strokeWidth={2.5} className={open === i ? "text-white" : "text-gray-400"} /></div>
                </button>
                <AnimatePresence initial={false}>
                  {open === i && (
                    <motion.div initial={{ height: 0 }} animate={{ height: "auto" }} exit={{ height: 0 }} transition={{ duration: 0.3, ease }} className="overflow-hidden" itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
                      <div className="px-6 py-4 bg-gray-50 border-t border-gray-100"><p className="text-gray-600 text-[13.5px] leading-relaxed" itemProp="text">{faq.a}</p></div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function PackagesCTA() {
  const [ref, inView] = useVisible();
  return (
    <section className="bg-[#f8f9fc] py-20 lg:py-28 overflow-hidden" aria-labelledby="pkg-cta-heading" style={{ fontFamily: "'Montserrat', sans-serif" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <motion.div ref={ref} initial={{ opacity: 0, y: 28 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.75, ease }} className="relative rounded-2xl overflow-hidden" style={{ background: "linear-gradient(135deg,#000055 0%,#000080 35%,#0818A8 65%,#1D4ED8 100%)" }}>
          <div className="absolute inset-0 pointer-events-none opacity-[0.06]" style={{ backgroundImage: "radial-gradient(circle,white 1px,transparent 1px)", backgroundSize: "28px 28px" }} />
          <div className="absolute top-0 right-0 w-96 h-96 pointer-events-none" style={{ background: "radial-gradient(circle at top right,rgba(147,197,253,0.18) 0%,transparent 60%)" }} />
          <div className="relative z-10 grid lg:grid-cols-2 gap-0">
            <div className="p-10 sm:p-12 lg:p-16 border-b lg:border-b-0 lg:border-r border-white/10">
              <p className="text-blue-300 text-[10px] font-black tracking-[0.28em] uppercase mb-6 flex items-center gap-2"><Layers size={11} strokeWidth={2.5} /> Ready to Build in Layers?</p>
              <h2 id="pkg-cta-heading" className="font-black text-white uppercase leading-[0.9] tracking-tight mb-6" style={{ fontSize: "clamp(2rem, 4.5vw, 3.5rem)" }}>Not Sure<br />Which<br />Package?</h2>
              <p className="text-white/50 text-[14px] leading-relaxed max-w-xs mb-8">Book a free 30-minute strategy call. No pitch. Just clarity on your biggest digital challenge and which layers to activate.</p>
              <div className="flex items-center gap-2 text-white/25 text-[12px]"><Phone size={12} strokeWidth={2} /><span>+234 802 540 1891 · Gwarinpa, Abuja</span></div>
            </div>
            <div className="p-10 sm:p-12 lg:p-16 flex flex-col gap-4">
              {[
                { icon: CalendarCheck, label: "Book a Strategy Call", desc: "30 mins with a senior BitLayerX strategist. Free.", href: "/contact/call", primary: true },
                { icon: Rocket, label: "Start a Project", desc: "Tell us what you're building. We'll define your layers.", href: "/contact/project", primary: false },
                { icon: Send, label: "Request a Proposal", desc: "Know what you need? Get a tailored proposal in 48hrs.", href: "/contact/proposal", primary: false },
              ].map((action, i) => {
                const Icon = action.icon;
                return (
                  <motion.div key={i} initial={{ opacity: 0, x: 20 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.55, delay: 0.15 + i * 0.09, ease }}>
                    <Link href={action.href} className={`group flex items-center gap-4 p-5 rounded-xl transition-all duration-200 ${action.primary ? "bg-white hover:bg-white/95" : "bg-white/8 hover:bg-white/14 border border-white/10"}`} style={action.primary ? { boxShadow: "0 4px 16px rgba(0,0,80,0.2)" } : {}}>
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${action.primary ? "bg-[#000066]/8" : "bg-white/10"}`}><Icon size={18} strokeWidth={2} className={action.primary ? "text-[#000066]" : "text-white"} /></div>
                      <div className="flex-1 min-w-0">
                        <p className={`font-black text-[13px] uppercase tracking-wide mb-0.5 ${action.primary ? "text-[#000066]" : "text-white"}`}>{action.label}</p>
                        <p className={`text-[12px] leading-snug ${action.primary ? "text-gray-500" : "text-white/40"}`}>{action.desc}</p>
                      </div>
                      <ArrowRight size={14} strokeWidth={2.5} className={`flex-shrink-0 group-hover:translate-x-0.5 transition-transform ${action.primary ? "text-[#000066]" : "text-white/40"}`} />
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default function PackagesPage() {
  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="stylesheet" href={FONT_URL} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "WebPage", name: "Packages — BitLayerX", description: "Five strategic digital packages from BitLayerX.", url: "https://bitlayerx.com/packages", publisher: { "@type": "Organization", name: "BitLayerX", url: "https://bitlayerx.com" }, mainEntity: { "@type": "FAQPage", mainEntity: FAQS.map(f => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) } }) }} />
      <main id="main-content" itemScope itemType="https://schema.org/WebPage" style={{ fontFamily: "'Montserrat', sans-serif" }}>
        <PackagesHero />
        <ComparisonStrip />
        {PACKAGES.map((pkg, i) => <PackageSection key={pkg.id} pkg={pkg} index={i} />)}
        <FAQSection />
        <PackagesCTA />
      </main>
    </>
  );
}