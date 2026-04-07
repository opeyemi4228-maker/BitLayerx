"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  Target, Users, Zap, Award, TrendingUp, Globe, Heart,
  Rocket, Shield, Star, CheckCircle2, ArrowRight, Quote,
  Lightbulb, Briefcase, Sparkles, ThumbsUp, CalendarCheck,
  ArrowUpRight, ChevronDown, Layers, Package, Phone,
} from "lucide-react";

// ─── Font ─────────────────────────────────────────────────────────────────────
const FONT_URL =
  "https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,400&display=swap";

const ease = [0.22, 1, 0.36, 1];

// ─── DATA ─────────────────────────────────────────────────────────────────────
const STATS = [
  { value: "500+",  label: "Projects Delivered",  icon: Briefcase,  color: "#0818A8" },
  { value: "₦50B+", label: "Revenue Generated",   icon: TrendingUp, color: "#059669" },
  { value: "98%",   label: "Client Retention",    icon: Heart,      color: "#DC2626" },
  { value: "24",    label: "Countries Served",    icon: Globe,      color: "#0369A1" },
];

const CORE_VALUES = [
  {
    icon: Target, title: "Results-Driven", subtitle: "Your success is our success",
    description: "Every strategy, every line of code, every design decision is made with one goal: driving measurable business results. We don't just build — we build to win.",
    color: "#0818A8",
  },
  {
    icon: Sparkles, title: "Innovation First", subtitle: "Always ahead of the curve",
    description: "We leverage cutting-edge technology — AI, automation, advanced analytics — to give you a competitive edge. Your growth is powered by tomorrow's solutions, today.",
    color: "#1D4ED8",
  },
  {
    icon: Shield, title: "Transparency", subtitle: "No smoke and mirrors",
    description: "Clear pricing, honest timelines, real reporting. You always know what you're getting, when you're getting it, and exactly what it costs. No surprises.",
    color: "#0369A1",
  },
  {
    icon: Users, title: "Partnership Mindset", subtitle: "We're in this together",
    description: "You're not just a client — you're a partner. We invest in your success as if it were our own, providing strategic guidance that goes beyond the project scope.",
    color: "#000080",
  },
];

const TIMELINE = [
  { year: "2020", title: "The Beginning",          description: "Founded in Lagos with a mission to bridge Africa's digital divide. Started with just 3 people and a dream.",                                          icon: Rocket },
  { year: "2021", title: "First 100 Clients",      description: "Reached our first major milestone. Expanded to serve businesses across Nigeria, Ghana, and Kenya.",                                                    icon: Users },
  { year: "2022", title: "International Expansion",description: "Opened UK office. Started serving clients in Europe and North America. Team grew to 30+ professionals.",                                               icon: Globe },
  { year: "2023", title: "Innovation Labs",         description: "Launched AI innovation division. Became the go-to partner for business automation in West Africa.",                                                   icon: Zap },
  { year: "2024", title: "Industry Recognition",   description: "Named 'Top Digital Agency in Nigeria' by Tech Magazine. ₦50B+ in client revenue generated.",                                                          icon: Award },
  { year: "2025", title: "The Future",             description: "Scaling to serve 1,000+ businesses. Building the future of digital transformation in Africa.",                                                        icon: TrendingUp },
];

const TEAM = [
  { name: "Adewale Ogunleye",  role: "Founder & CEO",            bio: "Serial entrepreneur with 15+ years building digital businesses across Africa.", skills: ["Strategy", "Business Growth", "Leadership"],               initials: "AO", hue: "#0818A8" },
  { name: "Chiamaka Nwosu",    role: "Chief Technology Officer",  bio: "Former Google engineer specializing in AI/ML and scalable systems.",           skills: ["AI & Automation", "Cloud Architecture", "Engineering"],      initials: "CN", hue: "#1D4ED8" },
  { name: "Daniel Martinez",   role: "Creative Director",         bio: "Award-winning designer with work featured in Forbes and TechCrunch.",         skills: ["Brand Strategy", "Video Production", "UX/UI Design"],        initials: "DM", hue: "#0369A1" },
  { name: "Fatima Abubakar",   role: "Head of Marketing",         bio: "Growth hacker who scaled 3 startups to 7-figure revenue in 18 months.",       skills: ["Performance Marketing", "SEO", "Growth Strategy"],           initials: "FA", hue: "#000080" },
];

const WHY_US = [
  { icon: CheckCircle2, title: "Proven Track Record",   desc: "500+ successful projects with 98% client retention rate"           },
  { icon: Zap,          title: "Fast Execution",        desc: "Average project delivery 30% faster than industry standard"        },
  { icon: Target,       title: "ROI Focused",           desc: "Average 250% ROI across all marketing campaigns"                   },
  { icon: Shield,       title: "Enterprise Security",   desc: "ISO certified with bank-grade data protection"                     },
  { icon: Users,        title: "Dedicated Support",     desc: "24/7 support with dedicated account managers"                      },
  { icon: Award,        title: "Industry Awards",       desc: "Recognized by Forbes, TechCrunch, and Vogue Business"              },
];

const TESTIMONIALS = [
  { quote: "BitLayerX didn't just build us a website — they transformed our entire business model. Revenue tripled in 8 months.",                        author: "Chidi Okonkwo",   role: "CEO, TechHub Lagos"           },
  { quote: "The AI automation they built saved us ₦15M annually in operational costs. ROI was achieved in 90 days.",                                     author: "Amara Johnson",   role: "COO, FreshMart Nigeria"       },
  { quote: "Working with BitLayerX feels like having an entire digital department in-house. Best partner we've ever had.",                               author: "David Adebayo",   role: "Marketing Director, Lagos Financial" },
];

// ─── Animated Canvas Grid (same system as Hero) ───────────────────────────────
function AnimatedGrid({ intensity = 1 }) {
  const canvasRef = useRef(null);
  const rafRef    = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const CELL = 56;
    let W, H, cols, rows;

    const resize = () => {
      W = canvas.width  = canvas.offsetWidth;
      H = canvas.height = canvas.offsetHeight;
      cols = Math.ceil(W / CELL) + 1;
      rows = Math.ceil(H / CELL) + 1;
    };
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    const WAVES = [
      { ax: 0.18, ay: 0.22, sr: 0.43, sc: 0.61, r: 270, rgb: "37,99,235"  },
      { ax: 0.72, ay: 0.32, sr: 0.29, sc: 0.52, r: 210, rgb: "29,78,216"  },
      { ax: 0.44, ay: 0.65, sr: 0.55, sc: 0.78, r: 190, rgb: "59,130,246" },
    ];

    let startTs = null;

    const draw = (ts) => {
      if (!startTs) startTs = ts;
      const t = (ts - startTs) / 1000;
      ctx.clearRect(0, 0, W, H);

      // Base grid
      ctx.strokeStyle = `rgba(0,0,102,${0.052 * intensity})`;
      ctx.lineWidth   = 0.5;
      ctx.beginPath();
      for (let c = 0; c <= cols; c++) { const x = c * CELL; ctx.moveTo(x, 0); ctx.lineTo(x, H); }
      for (let r = 0; r <= rows; r++) { const y = r * CELL; ctx.moveTo(0, y); ctx.lineTo(W, y); }
      ctx.stroke();

      // Drifting glows + ripple dots
      WAVES.forEach(({ ax, ay, sr, sc, r, rgb }) => {
        const cx = W * (ax + 0.13 * Math.sin(t * sr));
        const cy = H * (ay + 0.09 * Math.cos(t * sc));
        const grd = ctx.createRadialGradient(cx, cy, 0, cx, cy, r);
        grd.addColorStop(0,    `rgba(${rgb},${0.16 * intensity})`);
        grd.addColorStop(0.45, `rgba(${rgb},${0.06 * intensity})`);
        grd.addColorStop(1,    `rgba(${rgb},0)`);
        ctx.fillStyle = grd;
        ctx.fillRect(0, 0, W, H);

        for (let c = 0; c <= cols; c++) {
          for (let r2 = 0; r2 <= rows; r2++) {
            const ix = c * CELL, iy = r2 * CELL;
            const dx = ix - cx, dy = iy - cy;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist > r) continue;
            const phase = dist * 0.02 - t * sr * 3.5;
            const wave  = (Math.sin(phase) + 1) * 0.5;
            const prox  = 1 - dist / r;
            const alpha = wave * prox * 0.72 * intensity;
            if (alpha < 0.035) continue;
            ctx.beginPath();
            ctx.arc(ix, iy, 1.0 + wave * prox * 2.4, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(${rgb},${alpha.toFixed(3)})`;
            ctx.fill();
          }
        }
      });

      // Scan-line
      const scanY = ((t * 36) % (H + 80)) - 40;
      const scanGrd = ctx.createLinearGradient(0, scanY - 28, 0, scanY + 28);
      scanGrd.addColorStop(0,   "rgba(59,130,246,0)");
      scanGrd.addColorStop(0.5, `rgba(59,130,246,${0.10 * intensity})`);
      scanGrd.addColorStop(1,   "rgba(59,130,246,0)");
      ctx.fillStyle = scanGrd;
      ctx.fillRect(0, scanY - 28, W, 56);
      ctx.strokeStyle = `rgba(99,163,255,${0.22 * intensity})`;
      ctx.lineWidth = 1;
      ctx.beginPath(); ctx.moveTo(0, scanY); ctx.lineTo(W, scanY); ctx.stroke();

      // Bottom fade
      const fade = ctx.createLinearGradient(0, H * 0.52, 0, H);
      fade.addColorStop(0, "rgba(255,255,255,0)");
      fade.addColorStop(1, "rgba(255,255,255,1)");
      ctx.fillStyle = fade;
      ctx.fillRect(0, H * 0.52, W, H * 0.48);

      rafRef.current = requestAnimationFrame(draw);
    };
    rafRef.current = requestAnimationFrame(draw);
    return () => { cancelAnimationFrame(rafRef.current); ro.disconnect(); };
  }, [intensity]);

  return (
    <canvas ref={canvasRef} aria-hidden="true"
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 0 }} />
  );
}

// ─── Blinking cursor ──────────────────────────────────────────────────────────
function Cursor() {
  const [on, setOn] = useState(true);
  useEffect(() => { const iv = setInterval(() => setOn(v => !v), 520); return () => clearInterval(iv); }, []);
  return (
    <span aria-hidden="true" style={{
      display: "inline-block", width: "clamp(3px,0.44vw,6px)", height: "0.88em",
      background: "linear-gradient(180deg,#1D4ED8,#000066)",
      marginLeft: "0.05em", verticalAlign: "text-bottom",
      opacity: on ? 1 : 0, transition: "opacity 0.08s",
    }} />
  );
}

// ─── Typewriter ───────────────────────────────────────────────────────────────
function useTypewriter(words, speed = 110, delSpeed = 58, pause = 1900) {
  const [idx, setIdx]   = useState(0);
  const [text, setText] = useState("");
  const [del, setDel]   = useState(false);
  const [pausing, setPausing] = useState(false);
  useEffect(() => {
    if (pausing) return;
    const word = words[idx];
    const ms   = del ? delSpeed : speed;
    const t = setTimeout(() => {
      if (!del) {
        const next = word.slice(0, text.length + 1);
        setText(next);
        if (next === word) { setPausing(true); setTimeout(() => { setPausing(false); setDel(true); }, pause); }
      } else {
        const next = word.slice(0, text.length - 1);
        setText(next);
        if (next === "") { setDel(false); setIdx(i => (i + 1) % words.length); }
      }
    }, ms);
    return () => clearTimeout(t);
  }, [text, del, pausing, idx, words, speed, delSpeed, pause]);
  return text;
}

// ─── useVisible helper ────────────────────────────────────────────────────────
function useVisible(margin = "-60px") {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin });
  return [ref, inView];
}

// ─── Reveal wrapper ───────────────────────────────────────────────────────────
function Reveal({ children, delay = 0, y = 24, className = "" }) {
  const [ref, inView] = useVisible();
  return (
    <motion.div ref={ref} className={className}
      initial={{ opacity: 0, y }} animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease }}>
      {children}
    </motion.div>
  );
}

// ─── Section label pill ───────────────────────────────────────────────────────
function Pill({ children }) {
  return (
    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-5"
      style={{ background: "rgba(8,24,168,0.07)", border: "1px solid rgba(8,24,168,0.12)" }}>
      <span className="text-[#0818A8] text-[10px] font-black tracking-[0.26em] uppercase">{children}</span>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// HERO
// ═══════════════════════════════════════════════════════════════════════════════
function AboutHero() {
  const typed = useTypewriter(["Transform.", "Scale.", "Dominate.", "Lead."]);

  return (
    <section className="relative bg-white overflow-hidden min-h-[88vh] flex flex-col"
      aria-labelledby="about-hero-heading"
      style={{ fontFamily: "'Montserrat', sans-serif" }}>

      {/* Animated grid */}
      <AnimatedGrid intensity={1} />

      {/* Navy top bar */}
      <div className="absolute top-0 left-0 right-0 z-20" style={{ height: 3,
        background: "linear-gradient(90deg,transparent 0%,#0818A8 25%,#2563EB 50%,#0818A8 75%,transparent 100%)" }} />

      {/* Radial vignette */}
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none z-[1]"
        style={{ background: "radial-gradient(ellipse 80% 60% at 50% 0%,rgba(255,255,255,0.5) 0%,transparent 80%)" }} />

      <style>{`
        @keyframes blx-float-a{0%,100%{transform:translateY(0) rotate(0deg)}50%{transform:translateY(-9px) rotate(3deg)}}
        @keyframes blx-float-b{0%,100%{transform:translateY(0)}50%{transform:translateY(-6px)}}
        @keyframes blx-glow-p{0%,100%{box-shadow:0 0 8px 2px rgba(37,99,235,0.28)}50%{box-shadow:0 0 22px 7px rgba(37,99,235,0.52)}}
      `}</style>

      {/* Accent squares */}
      {[
        { size: 18, top: "28%", right: "8%",  delay: 0,   glow: true  },
        { size: 9,  top: "26%", right: "4%",  delay: 0.2, glow: true  },
        { size: 22, top: "62%", left: "5%",   delay: 0.1, glow: false },
        { size: 10, top: "55%", left: "18%",  delay: 0.3, glow: false },
      ].map((a, i) => (
        <div key={i} aria-hidden="true" className="absolute pointer-events-none z-10"
          style={{
            width: a.size, height: a.size,
            background: a.glow ? "linear-gradient(135deg,#000066,#1D4ED8)" : "#000066",
            opacity: a.glow ? 0.85 : 0.07,
            top: a.top, left: a.left, right: a.right,
            animation: [
              `blx-float-${i % 2 === 0 ? "a" : "b"} ${3.6 + i * 0.4}s ease-in-out infinite`,
              a.glow ? `blx-glow-p ${2.2 + i * 0.4}s ease-in-out infinite` : "",
            ].filter(Boolean).join(", "),
            animationDelay: `${a.delay}s`,
          }} />
      ))}

      {/* Corner bracket */}
      <div aria-hidden="true" className="absolute top-24 right-10 z-10 pointer-events-none hidden lg:block">
        <div style={{ width: 32, height: 32, border: "1px solid rgba(0,0,102,0.14)" }} />
        <div style={{ width: 20, height: 20, background: "rgba(0,0,102,0.04)", margin: "4px 0 0 4px" }} />
      </div>

      {/* Content */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-5 sm:px-10 lg:px-16 pt-36 sm:pt-44 pb-20 text-center">

        {/* Trust badge */}
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease }}
          className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full backdrop-blur-sm mb-10"
          style={{ background: "rgba(255,255,255,0.82)", border: "1px solid rgba(0,0,102,0.1)", boxShadow: "0 2px 12px rgba(0,0,102,0.07)" }}>
          <Sparkles size={13} strokeWidth={2.5} className="text-amber-400" />
          <span className="text-[11.5px] font-bold text-gray-600">
            Trusted by <span className="text-[#000066] font-black">500+</span> Businesses ·{" "}
            <span className="text-[#000066] font-black">24</span> Countries ·{" "}
            <span className="text-[#000066] font-black">₦50B+</span> Revenue Generated
          </span>
        </motion.div>

        {/* Headline */}
        <div className="mb-7">
          <motion.p initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.3, ease }}
            className="font-black uppercase leading-[0.88] tracking-[-0.03em] text-[#080c20]"
            style={{ fontSize: "clamp(2.4rem, 7vw, 7rem)" }}>
            Building Digital
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.4, ease }}
            className="flex items-baseline justify-center" aria-live="polite">
            <h1 id="about-hero-heading"
              className="font-black uppercase leading-[0.88] tracking-[-0.03em]"
              style={{
                fontSize: "clamp(2.4rem, 7vw, 7rem)",
                background: "linear-gradient(135deg,#000066 0%,#1D4ED8 45%,#3B82F6 100%)",
                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
              }}>
              {typed || "\u00A0"}
            </h1>
            <Cursor />
          </motion.div>
          <motion.p initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.5, ease }}
            className="font-black uppercase leading-[0.88] tracking-[-0.03em] text-[#080c20]"
            style={{ fontSize: "clamp(2.4rem, 7vw, 7rem)" }}>
            Empires in Africa.
          </motion.p>
        </div>

        {/* Sub */}
        <motion.p initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.6, ease }}
          className="text-gray-500 text-[15px] sm:text-[16px] leading-relaxed max-w-xl font-medium mb-10">
          We're not just a digital agency — we're your growth partner. From Lagos to London, we help businesses{" "}
          <span className="text-[#000066] font-black">transform</span>, scale, and dominate their markets.
        </motion.p>

        {/* CTAs */}
        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.7, ease }}
          className="flex flex-col sm:flex-row items-center gap-3">
          <Link href="/contact/project"
            className="group flex items-center overflow-hidden focus:outline-none focus:ring-2 focus:ring-[#000066] focus:ring-offset-2"
            style={{ background: "#000066", minWidth: 240 }}>
            <span className="flex-1 text-white font-black text-[13px] tracking-[0.16em] uppercase pl-7 pr-4 py-4">
              Start Your Project
            </span>
            <div className="flex items-center justify-center w-14 h-14 flex-shrink-0 border-l group-hover:bg-white/10 transition-colors"
              style={{ borderColor: "rgba(255,255,255,0.15)", background: "rgba(255,255,255,0.07)" }}>
              <ArrowUpRight size={18} strokeWidth={2.5} className="text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </div>
          </Link>
          <Link href="/packages"
            className="flex items-center gap-2 px-7 py-4 font-semibold text-[13px] text-gray-600 hover:text-[#000066] transition-colors tracking-wide uppercase backdrop-blur-sm"
            style={{ border: "1px solid rgba(0,0,102,0.12)", minWidth: 190, justifyContent: "center", background: "rgba(255,255,255,0.72)" }}>
            View Packages
            <ArrowRight size={12} strokeWidth={2.5} />
          </Link>
        </motion.div>

        {/* Stats strip */}
        <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.9, ease }}
          className="mt-16 w-full max-w-2xl overflow-hidden backdrop-blur-sm"
          style={{ border: "1px solid rgba(0,0,102,0.08)", background: "rgba(255,255,255,0.78)", boxShadow: "0 2px 20px rgba(0,0,102,0.06)" }}>
          <div className="grid grid-cols-4">
            {STATS.map((s, i) => {
              const Icon = s.icon;
              return (
                <div key={i} className="flex flex-col items-center py-4 sm:py-5"
                  style={{ borderRight: i < 3 ? "1px solid rgba(0,0,102,0.08)" : "none" }}>
                  <span className="font-black leading-none" style={{ fontSize: "clamp(1.1rem,2.5vw,1.6rem)", color: s.color }}>
                    {s.value}
                  </span>
                  <span className="text-[10px] sm:text-[11px] text-gray-400 font-semibold uppercase tracking-widest mt-1 text-center px-1">
                    {s.label}
                  </span>
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* Scroll hint */}
        <div className="mt-10 flex flex-col items-center gap-1.5" aria-hidden="true">
          <div className="w-px bg-gray-200" style={{ height: 32 }} />
          <ChevronDown size={14} className="text-gray-300" strokeWidth={2} />
        </div>
      </div>
    </section>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// OUR STORY
// ═══════════════════════════════════════════════════════════════════════════════
function OurStory() {
  const [ref, inView] = useVisible("-40px");

  return (
    <section className="bg-white py-24 lg:py-32 relative overflow-hidden"
      aria-labelledby="story-heading"
      style={{ fontFamily: "'Montserrat', sans-serif" }}>
      <div className="absolute top-0 left-0 right-0 h-px bg-gray-100" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">

          {/* Left */}
          <motion.div ref={ref} initial={{ opacity: 0, x: -28 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.75, ease }}>
            <Pill>Our Story</Pill>
            <h2 id="story-heading"
              className="font-black text-[#080c20] uppercase leading-[0.9] tracking-tight mb-5"
              style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)" }}>
              From Garage Startup<br />
              to <span style={{
                background: "linear-gradient(135deg,#0818A8,#2563EB)",
                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
              }}>Industry Leader</span>
            </h2>
            <div className="space-y-4 text-gray-500 text-[14px] leading-relaxed">
              <p>BitLayerX started in 2020 with a simple observation: African businesses had world-class ambitions but lacked access to world-class digital solutions.</p>
              <p>We set out to change that. From a small office in Lagos, we began building websites, automating processes, and running marketing campaigns that actually drove revenue — not just vanity metrics.</p>
              <p>Today, we're proud to serve over 500 businesses across 24 countries, from ambitious startups to Fortune 500 companies. We've helped generate over ₦50 billion in client revenue.</p>
              <p className="font-bold text-[#0818A8]">But we're just getting started. Our mission: to power Africa's digital revolution, one business at a time.</p>
            </div>
            <div className="mt-8">
              <Link href="/contact/call"
                className="group inline-flex items-center gap-2 px-6 py-3.5 bg-[#000066] hover:bg-[#000080] text-white font-black text-[12.5px] uppercase tracking-wide rounded-xl transition-all duration-200">
                <CalendarCheck size={13} strokeWidth={2} />
                Book a Strategy Call
                <ArrowRight size={12} strokeWidth={3} className="group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>
          </motion.div>

          {/* Right — visual card */}
          <motion.div initial={{ opacity: 0, x: 28 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.75, delay: 0.1, ease }}
            className="relative">

            {/* Main card */}
            <div className="relative rounded-2xl overflow-hidden aspect-square max-w-md mx-auto"
              style={{ background: "linear-gradient(135deg,#000055,#0818A8 50%,#1D4ED8)" }}>

              {/* Grid overlay */}
              <div className="absolute inset-0 pointer-events-none opacity-[0.07]"
                style={{ backgroundImage: "linear-gradient(rgba(255,255,255,1) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,1) 1px,transparent 1px)", backgroundSize: "48px 48px" }} />

              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <Rocket size={100} strokeWidth={1.2} className="text-white/20 mb-4" />
                <p className="text-white/40 text-[11px] font-black tracking-[0.3em] uppercase mb-1">Founded</p>
                <p className="font-black text-white leading-none" style={{ fontSize: "clamp(3rem,8vw,5rem)" }}>2020</p>
                <p className="text-white/60 font-semibold text-[14px] mt-2">Lagos, Nigeria</p>
              </div>

              {/* Radial glow inside card */}
              <div className="absolute inset-0 pointer-events-none"
                style={{ background: "radial-gradient(ellipse 60% 60% at 50% 40%,rgba(99,163,255,0.18) 0%,transparent 70%)" }} />
            </div>

            {/* Floating badge — bottom right */}
            <div className="absolute -bottom-5 -right-5 sm:bottom-4 sm:right-4 px-5 py-4 rounded-xl bg-white"
              style={{ border: "1px solid rgba(0,0,102,0.1)", boxShadow: "0 8px 24px rgba(0,0,102,0.1)" }}>
              <p className="font-black text-[#000066] text-[22px] leading-none">500+</p>
              <p className="text-gray-400 text-[11px] font-semibold uppercase tracking-widest mt-0.5">Clients</p>
            </div>

            {/* Top-left badge */}
            <div className="absolute -top-4 -left-4 sm:top-4 sm:left-4 px-4 py-3 rounded-xl bg-white"
              style={{ border: "1px solid rgba(0,0,102,0.1)", boxShadow: "0 8px 24px rgba(0,0,102,0.08)" }}>
              <p className="font-black text-[#059669] text-[18px] leading-none">₦50B+</p>
              <p className="text-gray-400 text-[11px] font-semibold uppercase tracking-widest mt-0.5">Revenue</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// CORE VALUES
// ═══════════════════════════════════════════════════════════════════════════════
function CoreValues() {
  const [ref, inView] = useVisible("-40px");

  return (
    <section className="bg-[#f8f9fc] py-24 lg:py-32 relative"
      aria-labelledby="values-heading"
      style={{ fontFamily: "'Montserrat', sans-serif" }}>
      <div className="absolute top-0 left-0 right-0 h-px bg-gray-100" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">

        <Reveal className="text-center mb-14">
          <Pill>Core Values</Pill>
          <h2 id="values-heading"
            className="font-black text-[#080c20] uppercase leading-[0.9] tracking-tight mb-4"
            style={{ fontSize: "clamp(2rem, 4.5vw, 3.5rem)" }}>
            What We <span style={{
              background: "linear-gradient(135deg,#0818A8,#2563EB)",
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
            }}>Stand For</span>
          </h2>
          <p className="text-gray-500 text-[14px] leading-relaxed max-w-xl mx-auto">
            These aren't just words on a wall — they're the principles that guide every decision, every project, every client relationship.
          </p>
        </Reveal>

        <div ref={ref} className="grid md:grid-cols-2 gap-4">
          {CORE_VALUES.map((v, i) => {
            const Icon = v.icon;
            return (
              <motion.div key={i}
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.65, delay: i * 0.09, ease }}
                className="group relative bg-white border border-gray-100 rounded-2xl p-8 overflow-hidden hover:shadow-lg hover:shadow-gray-100 transition-all duration-300"
                style={{ boxShadow: "0 2px 12px rgba(0,0,80,0.04)" }}>

                {/* Colored top bar on hover */}
                <div className="absolute top-0 left-0 right-0 h-[3px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: v.color }} />

                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: `${v.color}12` }}>
                    <Icon size={22} strokeWidth={1.75} style={{ color: v.color }} />
                  </div>
                  <div>
                    <h3 className="font-black text-[#080c20] uppercase tracking-tight text-[16px] mb-0.5">{v.title}</h3>
                    <p className="text-[12px] font-bold italic mb-3" style={{ color: v.color }}>{v.subtitle}</p>
                    <p className="text-gray-500 text-[13.5px] leading-relaxed">{v.description}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// TIMELINE
// ═══════════════════════════════════════════════════════════════════════════════
function Timeline() {
  const [ref, inView] = useVisible("-40px");

  return (
    <section className="bg-white py-24 lg:py-32 relative"
      aria-labelledby="timeline-heading"
      style={{ fontFamily: "'Montserrat', sans-serif" }}>
      <div className="absolute top-0 left-0 right-0 h-px bg-gray-100" />
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-12">

        <Reveal className="text-center mb-14">
          <Pill>Our Journey</Pill>
          <h2 id="timeline-heading"
            className="font-black text-[#080c20] uppercase leading-[0.9] tracking-tight"
            style={{ fontSize: "clamp(2rem, 4.5vw, 3.5rem)" }}>
            The <span style={{
              background: "linear-gradient(135deg,#0818A8,#2563EB)",
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
            }}>BitLayerX</span> Story
          </h2>
        </Reveal>

        <div ref={ref} className="relative">
          {/* Vertical line */}
          <div className="absolute left-8 sm:left-1/2 top-0 bottom-0 w-px"
            style={{ background: "linear-gradient(180deg,#0818A8 0%,#2563EB 60%,rgba(37,99,235,0) 100%)", transform: "translateX(-50%)" }} />

          <div className="space-y-10">
            {TIMELINE.map((item, i) => {
              const Icon = item.icon;
              const isRight = i % 2 !== 0;
              return (
                <motion.div key={i}
                  initial={{ opacity: 0, x: isRight ? 24 : -24 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: i * 0.08, ease }}
                  className={`relative grid sm:grid-cols-2 gap-6 items-center ${isRight ? "" : ""}`}>

                  {/* Content */}
                  <div className={`pl-16 sm:pl-0 ${isRight ? "sm:col-start-2 sm:pl-10" : "sm:text-right sm:pr-10"}`}>
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full mb-3"
                      style={{ background: "rgba(8,24,168,0.08)" }}>
                      <span className="text-[#0818A8] text-[10px] font-black tracking-[0.2em]">{item.year}</span>
                    </div>
                    <h3 className="font-black text-[#080c20] uppercase tracking-tight text-[15px] mb-2">{item.title}</h3>
                    <p className="text-gray-500 text-[13px] leading-relaxed">{item.description}</p>
                  </div>

                  {/* Center icon */}
                  <div className="absolute left-0 sm:left-1/2 top-1/2 -translate-y-1/2 sm:-translate-x-1/2 z-10">
                    <div className="w-16 h-16 rounded-full flex items-center justify-center border-4 border-white"
                      style={{ background: "linear-gradient(135deg,#0818A8,#2563EB)", boxShadow: "0 4px 16px rgba(8,24,168,0.25)" }}>
                      <Icon size={22} strokeWidth={1.75} className="text-white" />
                    </div>
                  </div>

                  {/* Empty right col for even items */}
                  {!isRight && <div className="hidden sm:block" />}
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// TEAM
// ═══════════════════════════════════════════════════════════════════════════════
function TeamSection() {
  const [ref, inView] = useVisible("-40px");

  return (
    <section className="bg-[#f8f9fc] py-24 lg:py-32 relative"
      aria-labelledby="team-heading"
      style={{ fontFamily: "'Montserrat', sans-serif" }}>
      <div className="absolute top-0 left-0 right-0 h-px bg-gray-100" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">

        <Reveal className="text-center mb-14">
          <Pill>Leadership Team</Pill>
          <h2 id="team-heading"
            className="font-black text-[#080c20] uppercase leading-[0.9] tracking-tight mb-4"
            style={{ fontSize: "clamp(2rem, 4.5vw, 3.5rem)" }}>
            Meet the <span style={{
              background: "linear-gradient(135deg,#0818A8,#2563EB)",
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
            }}>Visionaries</span>
          </h2>
          <p className="text-gray-500 text-[14px] max-w-xl mx-auto leading-relaxed">
            World-class talent from Google, Forbes, and leading tech companies — united by one mission: your success.
          </p>
        </Reveal>

        <div ref={ref} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {TEAM.map((m, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.65, delay: i * 0.09, ease }}
              className="group relative bg-white border border-gray-100 rounded-2xl overflow-hidden hover:shadow-lg hover:shadow-gray-100 transition-all duration-300"
              style={{ boxShadow: "0 2px 12px rgba(0,0,80,0.04)" }}>

              {/* Colored top bar */}
              <div className="h-[4px]" style={{ background: `linear-gradient(90deg,${m.hue},${m.hue}aa)` }} />

              <div className="p-6">
                {/* Avatar */}
                <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-5 font-black text-white text-[18px]"
                  style={{ background: `linear-gradient(135deg,${m.hue},${m.hue}cc)` }}>
                  {m.initials}
                </div>

                <h3 className="font-black text-[#080c20] text-[14px] uppercase tracking-tight mb-0.5">{m.name}</h3>
                <p className="text-[12px] font-bold mb-3" style={{ color: m.hue }}>{m.role}</p>
                <p className="text-gray-400 text-[12px] leading-relaxed mb-4">{m.bio}</p>

                <div className="flex flex-wrap gap-1.5">
                  {m.skills.map((s, j) => (
                    <span key={j} className="px-2 py-1 text-[10px] font-bold rounded-lg"
                      style={{ background: `${m.hue}0d`, color: m.hue }}>
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// WHY US
// ═══════════════════════════════════════════════════════════════════════════════
function WhyUs() {
  const [ref, inView] = useVisible("-40px");

  return (
    <section className="bg-white py-24 lg:py-32 relative"
      aria-labelledby="why-heading"
      style={{ fontFamily: "'Montserrat', sans-serif" }}>
      <div className="absolute top-0 left-0 right-0 h-px bg-gray-100" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">

        <Reveal className="text-center mb-14">
          <Pill>Why BitLayerX</Pill>
          <h2 id="why-heading"
            className="font-black text-[#080c20] uppercase leading-[0.9] tracking-tight"
            style={{ fontSize: "clamp(2rem, 4.5vw, 3.5rem)" }}>
            Why Businesses <span style={{
              background: "linear-gradient(135deg,#0818A8,#2563EB)",
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
            }}>Trust Us</span>
          </h2>
        </Reveal>

        <div ref={ref} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {WHY_US.map((r, i) => {
            const Icon = r.icon;
            return (
              <motion.div key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.55, delay: i * 0.07, ease }}
                className="group flex items-start gap-4 p-5 bg-white border border-gray-100 rounded-xl hover:border-gray-200 hover:shadow-md transition-all duration-200"
                style={{ boxShadow: "0 1px 6px rgba(0,0,80,0.03)" }}>
                <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: "rgba(8,24,168,0.08)" }}>
                  <Icon size={18} strokeWidth={2} className="text-[#0818A8]" />
                </div>
                <div>
                  <h3 className="font-black text-[#080c20] text-[13px] uppercase tracking-wide mb-1">{r.title}</h3>
                  <p className="text-gray-500 text-[12.5px] leading-snug">{r.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// TESTIMONIALS
// ═══════════════════════════════════════════════════════════════════════════════
function Testimonials() {
  const [ref, inView] = useVisible("-40px");
  const COLORS = ["#0818A8", "#1D4ED8", "#0369A1"];

  return (
    <section className="bg-[#f8f9fc] py-24 lg:py-32 relative"
      aria-labelledby="testimonials-heading"
      style={{ fontFamily: "'Montserrat', sans-serif" }}>
      <div className="absolute top-0 left-0 right-0 h-px bg-gray-100" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">

        <Reveal className="text-center mb-14">
          <Pill>Client Stories</Pill>
          <h2 id="testimonials-heading"
            className="font-black text-[#080c20] uppercase leading-[0.9] tracking-tight mb-3"
            style={{ fontSize: "clamp(2rem, 4.5vw, 3.5rem)" }}>
            What Our <span style={{
              background: "linear-gradient(135deg,#0818A8,#2563EB)",
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
            }}>Clients Say</span>
          </h2>
          <p className="text-gray-400 text-[13.5px]">Real results. Real businesses. Real impact.</p>
        </Reveal>

        <div ref={ref} className="grid md:grid-cols-3 gap-4">
          {TESTIMONIALS.map((t, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.65, delay: i * 0.1, ease }}
              className="relative bg-white border border-gray-100 rounded-2xl p-7 overflow-hidden"
              style={{ boxShadow: "0 2px 12px rgba(0,0,80,0.04)" }}>

              {/* Colored top bar */}
              <div className="absolute top-0 left-0 right-0 h-[3px]" style={{ background: COLORS[i] }} />

              {/* Quote icon */}
              <div className="w-8 h-8 rounded-lg flex items-center justify-center mb-5"
                style={{ background: `${COLORS[i]}10` }}>
                <Quote size={14} strokeWidth={2} style={{ color: COLORS[i] }} />
              </div>

              <p className="text-gray-600 text-[13.5px] leading-relaxed mb-6 italic">"{t.quote}"</p>

              <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                <div className="w-9 h-9 rounded-full flex items-center justify-center font-black text-[12px] text-white"
                  style={{ background: COLORS[i] }}>
                  {t.author.split(" ").map(n => n[0]).join("")}
                </div>
                <div>
                  <p className="font-bold text-[#080c20] text-[13px]">{t.author}</p>
                  <p className="text-gray-400 text-[11.5px]">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// FINAL CTA (blue banner card — matches design system)
// ═══════════════════════════════════════════════════════════════════════════════
function AboutCTA() {
  const [ref, inView] = useVisible();

  return (
    <section className="bg-white py-20 lg:py-28 overflow-hidden"
      aria-labelledby="about-cta-heading"
      style={{ fontFamily: "'Montserrat', sans-serif" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">

        <motion.div ref={ref}
          initial={{ opacity: 0, y: 28 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.75, ease }}
          className="relative rounded-2xl overflow-hidden"
          style={{ background: "linear-gradient(135deg,#000055 0%,#000080 35%,#0818A8 65%,#1D4ED8 100%)" }}>

          {/* Dot texture */}
          <div className="absolute inset-0 pointer-events-none opacity-[0.06]"
            style={{ backgroundImage: "radial-gradient(circle,white 1px,transparent 1px)", backgroundSize: "28px 28px" }} />
          {/* Radial glow */}
          <div className="absolute top-0 right-0 w-96 h-96 pointer-events-none"
            style={{ background: "radial-gradient(circle at top right,rgba(147,197,253,0.18) 0%,transparent 60%)" }} />

          <div className="relative z-10 grid lg:grid-cols-2 gap-0">

            {/* Left */}
            <div className="p-10 sm:p-12 lg:p-16 border-b lg:border-b-0 lg:border-r border-white/10">
              <p className="text-blue-300 text-[10px] font-black tracking-[0.28em] uppercase mb-5 flex items-center gap-2">
                <Layers size={11} strokeWidth={2.5} /> Ready to Build Together?
              </p>
              <h2 id="about-cta-heading"
                className="font-black text-white uppercase leading-[0.9] tracking-tight mb-5"
                style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)" }}>
                Ready to<br />Transform<br />Your Business?
              </h2>
              <p className="text-white/55 text-[13.5px] leading-relaxed mb-8 max-w-sm">
                Join 500+ businesses that trust BitLayerX to power their digital growth. Let's build something extraordinary together.
              </p>
              <div className="flex items-center gap-2 text-white/25 text-[11.5px]">
                <Phone size={11} strokeWidth={2} />
                <span>+234 802 540 1891 · Gwarinpa, Abuja</span>
              </div>
            </div>

            {/* Right */}
            <div className="p-10 sm:p-12 lg:p-16 flex flex-col gap-3">
              {[
                { icon: Rocket,        label: "Start Your Project",   sub: "Tell us what you're building. We'll define your layers.",     href: "/contact/project", primary: true  },
                { icon: CalendarCheck, label: "Book a Strategy Call",  sub: "30 mins with a senior strategist. Free.",                    href: "/contact/call",    primary: false },
                { icon: Package,       label: "View Our Packages",     sub: "Five pre-designed layer stacks for every stage of growth.",  href: "/packages",        primary: false },
              ].map((a, i) => {
                const Icon = a.icon;
                return (
                  <motion.div key={i}
                    initial={{ opacity: 0, x: 18 }} animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.55, delay: 0.15 + i * 0.09, ease }}>
                    <Link href={a.href}
                      className={`group flex items-center gap-4 p-5 rounded-xl transition-all duration-200 ${a.primary ? "bg-white hover:bg-white/95" : "bg-white/8 hover:bg-white/14 border border-white/10"}`}
                      style={a.primary ? { boxShadow: "0 4px 16px rgba(0,0,80,0.2)" } : {}}>
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${a.primary ? "bg-[#000066]/8" : "bg-white/10"}`}>
                        <Icon size={18} strokeWidth={2} className={a.primary ? "text-[#000066]" : "text-white"} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className={`font-black text-[13px] uppercase tracking-wide mb-0.5 ${a.primary ? "text-[#000066]" : "text-white"}`}>{a.label}</p>
                        <p className={`text-[11.5px] leading-snug ${a.primary ? "text-gray-500" : "text-white/40"}`}>{a.sub}</p>
                      </div>
                      <ArrowRight size={14} strokeWidth={2.5}
                        className={`flex-shrink-0 group-hover:translate-x-0.5 transition-transform ${a.primary ? "text-[#000066]" : "text-white/40"}`} />
                    </Link>
                  </motion.div>
                );
              })}

              {/* Trust indicators */}
              <div className="flex items-center gap-5 pt-2">
                {[
                  { icon: Shield,    label: "ISO Certified"   },
                  { icon: Award,     label: "Award Winning"   },
                  { icon: ThumbsUp,  label: "98% Retention"   },
                ].map((t, i) => {
                  const Icon = t.icon;
                  return (
                    <div key={i} className="flex items-center gap-1.5">
                      <Icon size={12} strokeWidth={2} className="text-white/30" />
                      <span className="text-[11px] text-white/30 font-semibold">{t.label}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// PAGE ROOT
// ═══════════════════════════════════════════════════════════════════════════════
export default function AboutUsPage() {
  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="stylesheet" href={FONT_URL} />

      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "AboutPage",
          name: "About BitLayerX — Digital Growth Partner",
          description: "BitLayerX: the leading digital transformation partner serving 500+ businesses across 24 countries with web development, AI automation, and performance marketing.",
          url: "https://bitlayerx.com/about",
          mainEntity: {
            "@type": "Organization",
            name: "BitLayerX",
            url: "https://bitlayerx.com",
            logo: "https://bitlayerx.com/logo.png",
            foundingDate: "2020",
            founders: [{ "@type": "Person", name: "Adewale Ogunleye" }],
            numberOfEmployees: "50+",
            address: { "@type": "PostalAddress", addressLocality: "Lagos", addressCountry: "NG" },
          },
        }),
      }} />

      <main id="main-content" itemScope itemType="https://schema.org/AboutPage"
        style={{ fontFamily: "'Montserrat', sans-serif" }}>
        <AboutHero />
        <OurStory />
        <CoreValues />
        <Timeline />
        <TeamSection />
        <WhyUs />
        <Testimonials />
        <AboutCTA />
      </main>
    </>
  );
}