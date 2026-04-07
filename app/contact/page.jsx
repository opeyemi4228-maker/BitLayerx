"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight, Mail, Phone, MessageCircle, MapPin,
  CheckCircle2, ChevronDown, Send, Clock, Layers,
  CalendarCheck, Rocket, Shield, Award, Loader2,
  ArrowUpRight, Star,
} from "lucide-react";

// ─── Font ─────────────────────────────────────────────────────────────────────
const FONT_URL =
  "https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,400&display=swap";

const ease = [0.22, 1, 0.36, 1];

// ─── DATA ─────────────────────────────────────────────────────────────────────
const CONTACT_METHODS = [
  {
    icon: Mail, title: "Email Us",
    desc: "Response within 24 hours",
    value: "hello@bitlayerx.com",
    href: "mailto:hello@bitlayerx.com",
    cta: "Send Email",
    color: "#0818A8",
  },
  {
    icon: Phone, title: "Call Us",
    desc: "Mon–Fri · 9am–6pm WAT",
    value: "+234 802 540 1891",
    href: "tel:+2348025401891",
    cta: "Call Now",
    color: "#1D4ED8",
  },
  {
    icon: MessageCircle, title: "WhatsApp",
    desc: "Chat with us instantly",
    value: "+234 802 540 1891",
    href: "https://wa.me/2348025401891",
    cta: "Start Chat",
    color: "#059669",
  },
  {
    icon: MapPin, title: "Visit Office",
    desc: "Gwarinpa, Abuja · Nigeria",
    value: "Get Directions",
    href: "#offices",
    cta: "View Offices",
    color: "#0369A1",
  },
];

const SERVICES = [
  "Web Development",
  "UI/UX & Product Design",
  "Branding & Identity",
  "Software Engineering",
  "Commercials & Video",
  "Digital Marketing & Growth",
  "Complete Digital Partnership",
  "Other / Not Sure",
];

const BUDGETS = [
  "Under ₦500k",
  "₦500k – ₦1M",
  "₦1M – ₦3M",
  "₦3M – ₦5M",
  "₦5M – ₦10M",
  "Over ₦10M",
];

const OFFICES = [
  {
    city: "Abuja", country: "Nigeria", flag: "🇳🇬",
    address: "6th Avenue, Gwarinpa, Abuja, FCT",
    phone: "+234 802 540 1891",
    email: "abuja@bitlayerx.com",
    hours: "Mon–Fri: 9:00 AM – 6:00 PM WAT",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=500&fit=crop&q=85",
    color: "#0818A8",
  },
  {
    city: "London", country: "United Kingdom", flag: "🇬🇧",
    address: "85 Great Portland Street, London, W1W 7LT",
    phone: "+44 20 1234 5678",
    email: "london@bitlayerx.com",
    hours: "Mon–Fri: 9:00 AM – 5:00 PM GMT",
    image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800&h=500&fit=crop&q=85",
    color: "#1D4ED8",
  },
];

const FAQS = [
  { q: "How long does a typical project take?", a: "Project timelines vary based on scope. A basic website takes 3–4 weeks, while comprehensive packages can take 8–12 weeks. We provide detailed timelines during our initial consultation." },
  { q: "Do you offer payment plans?", a: "Yes — we offer flexible milestone-based payments: typically 50% upfront, 30% at midpoint, and 20% upon completion. Monthly retainer options are also available." },
  { q: "Can you work with our existing systems?", a: "Absolutely. We integrate seamlessly with existing platforms, CRMs, and tools. Our team has experience with virtually all major business software and platforms." },
  { q: "What happens after project completion?", a: "We provide ongoing support and maintenance packages. You'll also receive training documentation and have access to our support team for any questions or updates." },
];

const TRUST_POINTS = [
  { icon: CheckCircle2, label: "24-hour response on all enquiries"     },
  { icon: CheckCircle2, label: "Free strategy consultation included"   },
  { icon: CheckCircle2, label: "Custom proposal tailored to your goals"},
  { icon: CheckCircle2, label: "No obligation — just clarity"          },
];

// ─── Animated Canvas Grid (consistent with other pages) ───────────────────────
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

      ctx.strokeStyle = `rgba(0,0,102,${0.052 * intensity})`;
      ctx.lineWidth = 0.5;
      ctx.beginPath();
      for (let c = 0; c <= cols; c++) { const x = c * CELL; ctx.moveTo(x, 0); ctx.lineTo(x, H); }
      for (let r = 0; r <= rows; r++) { const y = r * CELL; ctx.moveTo(0, y); ctx.lineTo(W, y); }
      ctx.stroke();

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

      const scanY = ((t * 36) % (H + 80)) - 40;
      const sg = ctx.createLinearGradient(0, scanY - 28, 0, scanY + 28);
      sg.addColorStop(0,   "rgba(59,130,246,0)");
      sg.addColorStop(0.5, `rgba(59,130,246,${0.10 * intensity})`);
      sg.addColorStop(1,   "rgba(59,130,246,0)");
      ctx.fillStyle = sg; ctx.fillRect(0, scanY - 28, W, 56);
      ctx.strokeStyle = `rgba(99,163,255,${0.22 * intensity})`; ctx.lineWidth = 1;
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

  return (
    <canvas ref={canvasRef} aria-hidden="true"
      className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 0 }} />
  );
}

// ─── Helpers ──────────────────────────────────────────────────────────────────
function useVisible(margin = "-50px") {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin });
  return [ref, inView];
}

function Reveal({ children, delay = 0, y = 22, className = "" }) {
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

function Pill({ children }) {
  return (
    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-5"
      style={{ background: "rgba(8,24,168,0.07)", border: "1px solid rgba(8,24,168,0.12)" }}>
      <span className="text-[#0818A8] text-[10px] font-black tracking-[0.26em] uppercase">{children}</span>
    </div>
  );
}

// ─── Input component ──────────────────────────────────────────────────────────
function Field({ label, required, children, hint }) {
  return (
    <div>
      <label className="block text-[11px] font-black uppercase tracking-[0.18em] text-gray-500 mb-2">
        {label}{required && <span className="text-[#0818A8] ml-0.5">*</span>}
      </label>
      {children}
      {hint && <p className="text-[11px] text-gray-400 mt-1 font-medium">{hint}</p>}
    </div>
  );
}

const inputCls =
  "w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-[15px] font-medium text-gray-800 placeholder-gray-300 transition-all duration-200 outline-none focus:border-[#0818A8] focus:ring-2 focus:ring-[#0818A8]/10 hover:border-gray-300";

// ─── FAQ accordion ────────────────────────────────────────────────────────────
function FAQItem({ faq, isOpen, onToggle }) {
  return (
    <div className="border border-gray-100 rounded-xl overflow-hidden"
      style={{ boxShadow: "0 1px 4px rgba(0,0,80,0.03)" }}>
      <button onClick={onToggle}
        className={`w-full flex items-center justify-between px-5 py-4 text-left transition-colors duration-200 ${isOpen ? "bg-[#000066]" : "bg-white hover:bg-gray-50"}`}>
        <span className={`font-bold text-[15px] pr-4 ${isOpen ? "text-white" : "text-gray-800"}`}>{faq.q}</span>
        <div className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 ${isOpen ? "bg-white/15 rotate-180" : "bg-gray-100"}`}>
          <ChevronDown size={13} strokeWidth={2.5} className={isOpen ? "text-white" : "text-gray-400"} />
        </div>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div initial={{ height: 0 }} animate={{ height: "auto" }} exit={{ height: 0 }}
            transition={{ duration: 0.3, ease }} className="overflow-hidden">
            <div className="px-5 py-4 bg-gray-50 border-t border-gray-100">
              <p className="text-gray-500 text-[15px] leading-relaxed">{faq.a}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// HERO
// ═══════════════════════════════════════════════════════════════════════════════
function ContactHero() {
  return (
    <section className="relative bg-white overflow-hidden"
      style={{ fontFamily: "'Montserrat', sans-serif" }}>

      <AnimatedGrid intensity={1} />

      {/* Navy top bar */}
      <div className="absolute top-0 left-0 right-0 z-20" style={{ height: 3,
        background: "linear-gradient(90deg,transparent 0%,#0818A8 25%,#2563EB 50%,#0818A8 75%,transparent 100%)" }} />

      {/* Vignette */}
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none z-[1]"
        style={{ background: "radial-gradient(ellipse 80% 60% at 50% 0%,rgba(255,255,255,0.55) 0%,transparent 80%)" }} />

      <style>{`
        @keyframes blx-float-a{0%,100%{transform:translateY(0) rotate(0deg)}50%{transform:translateY(-9px) rotate(3deg)}}
        @keyframes blx-float-b{0%,100%{transform:translateY(0)}50%{transform:translateY(-6px)}}
        @keyframes blx-glow-p{0%,100%{box-shadow:0 0 8px 2px rgba(37,99,235,0.28)}50%{box-shadow:0 0 22px 7px rgba(37,99,235,0.52)}}
      `}</style>

      {[
        { size: 18, top: "30%", right: "8%",  delay: 0,   glow: true  },
        { size: 9,  top: "28%", right: "4%",  delay: 0.2, glow: true  },
        { size: 20, top: "65%", left: "6%",   delay: 0.1, glow: false },
        { size: 10, top: "58%", left: "22%",  delay: 0.3, glow: false },
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

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 pt-36 sm:pt-44 pb-20">
        <div className="max-w-3xl">

          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15, ease }}
            className="flex items-center gap-3 mb-7">
            <div className="w-8 h-8 rounded-lg bg-[#000080]/8 flex items-center justify-center">
              <Layers size={15} strokeWidth={2.5} className="text-[#0818A8]" />
            </div>
            <p className="text-[#0818A8] text-[11px] font-black tracking-[0.28em] uppercase">
              Let's Build Together
            </p>
          </motion.div>

          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25, ease }}
            className="font-black text-[#080c20] uppercase leading-[0.88] tracking-[-0.025em] mb-6"
            style={{ fontSize: "clamp(2.4rem, 6.5vw, 6rem)" }}>
            Let's Build<br />
            Something <span style={{
              background: "linear-gradient(135deg,#000066 0%,#1D4ED8 45%,#3B82F6 100%)",
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
            }}>Exceptional.</span>
          </motion.h1>

          <motion.p initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.38, ease }}
            className="text-gray-500 text-[17px] sm:text-[16px] leading-relaxed font-medium max-w-lg mb-10">
            Ready to transform your digital presence? Get in touch — a senior BitLayerX strategist will respond within 24 hours with a clear, tailored plan.
          </motion.p>

          {/* Quick contact pills */}
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.5, ease }}
            className="flex flex-wrap gap-3">
            {[
              { href: "mailto:hello@bitlayerx.com", label: "hello@bitlayerx.com", icon: Mail },
              { href: "tel:+2348025401891",           label: "+234 802 540 1891",   icon: Phone },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <a key={i} href={item.href}
                  className="group flex items-center gap-2 px-4 py-2.5 rounded-full backdrop-blur-sm transition-all duration-200 hover:border-[#000066]/30"
                  style={{ background: "rgba(255,255,255,0.82)", border: "1px solid rgba(0,0,102,0.1)", boxShadow: "0 2px 8px rgba(0,0,102,0.06)" }}>
                  <Icon size={13} strokeWidth={2.5} className="text-[#0818A8]" />
                  <span className="text-[12.5px] font-bold text-gray-700 group-hover:text-[#000066] transition-colors">{item.label}</span>
                </a>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// CONTACT METHODS STRIP
// ═══════════════════════════════════════════════════════════════════════════════
function ContactMethods() {
  const [ref, inView] = useVisible();

  return (
    <section className="bg-[#f8f9fc] py-14 relative"
      style={{ fontFamily: "'Montserrat', sans-serif" }}>
      <div className="absolute top-0 left-0 right-0 h-px bg-gray-100" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div ref={ref} className="grid grid-cols-2 lg:grid-cols-4 gap-3">
          {CONTACT_METHODS.map((m, i) => {
            const Icon = m.icon;
            return (
              <motion.a key={i} href={m.href}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.55, delay: i * 0.08, ease }}
                className="group relative bg-white border border-gray-100 rounded-2xl p-6 overflow-hidden hover:shadow-lg hover:shadow-gray-100 transition-all duration-300"
                style={{ boxShadow: "0 2px 12px rgba(0,0,80,0.04)" }}>
                {/* Colored top bar */}
                <div className="absolute top-0 left-0 right-0 h-[3px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: m.color }} />
                <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 transition-colors duration-200"
                  style={{ background: `${m.color}10` }}>
                  <Icon size={18} strokeWidth={2} style={{ color: m.color }} />
                </div>
                <p className="font-black text-[#080c20] text-[15px] uppercase tracking-tight mb-0.5">{m.title}</p>
                <p className="text-gray-400 text-[11.5px] font-medium mb-2">{m.desc}</p>
                <p className="font-bold text-[12.5px] mb-3" style={{ color: m.color }}>{m.value}</p>
                <div className="flex items-center gap-1.5 text-[11px] font-black uppercase tracking-wide transition-colors"
                  style={{ color: m.color }}>
                  {m.cta}
                  <ArrowRight size={10} strokeWidth={3} className="group-hover:translate-x-0.5 transition-transform" />
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// MAIN FORM + SIDEBAR
// ═══════════════════════════════════════════════════════════════════════════════
function ContactForm() {
  const [formData, setFormData] = useState({
    name: "", email: "", phone: "", company: "",
    service: "", budget: "", message: "", consent: false,
  });
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess]       = useState(false);
  const [openFAQ, setOpenFAQ]       = useState(null);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(p => ({ ...p, [name]: type === "checkbox" ? checked : value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    await new Promise(r => setTimeout(r, 2000));
    setSubmitting(false);
    setSuccess(true);
    setFormData({ name: "", email: "", phone: "", company: "", service: "", budget: "", message: "", consent: false });
  };

  const [formRef, formInView] = useVisible("-40px");
  const [sideRef, sideInView] = useVisible("-40px");

  return (
    <section className="bg-white py-24 lg:py-32 relative"
      style={{ fontFamily: "'Montserrat', sans-serif" }}>
      <div className="absolute top-0 left-0 right-0 h-px bg-gray-100" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid lg:grid-cols-[1fr_400px] xl:grid-cols-[1fr_440px] gap-10 xl:gap-16 items-start">

          {/* ── FORM ───────────────────────────────────────────────────── */}
          <motion.div ref={formRef}
            initial={{ opacity: 0, x: -24 }} animate={formInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.75, ease }}>

            <Pill>Start a Project</Pill>
            <h2 className="font-black text-[#080c20] uppercase leading-[0.9] tracking-tight mb-3"
              style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)" }}>
              Tell Us About<br />
              <span style={{
                background: "linear-gradient(135deg,#0818A8,#2563EB)",
                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
              }}>Your Project</span>
            </h2>
            <p className="text-gray-500 text-[15px] leading-relaxed mb-9 max-w-md">
              Fill in the form below and we'll get back to you within 24 hours with a tailored strategy.
            </p>

            {/* Success state */}
            <AnimatePresence>
              {success && (
                <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
                  className="mb-8 p-5 rounded-xl border border-green-200 bg-green-50 flex items-start gap-3">
                  <CheckCircle2 size={18} strokeWidth={2.5} className="text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-black text-green-800 text-[15px] uppercase tracking-wide mb-0.5">Message Sent!</p>
                    <p className="text-green-700 text-[12.5px]">We'll be in touch within 24 hours with a clear plan.</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name + Email */}
              <div className="grid sm:grid-cols-2 gap-5">
                <Field label="Full Name" required>
                  <input type="text" name="name" value={formData.name} onChange={handleChange}
                    required placeholder="John Doe" className={inputCls}
                    style={{ fontFamily: "'Montserrat', sans-serif" }} />
                </Field>
                <Field label="Email Address" required>
                  <input type="email" name="email" value={formData.email} onChange={handleChange}
                    required placeholder="john@company.com" className={inputCls}
                    style={{ fontFamily: "'Montserrat', sans-serif" }} />
                </Field>
              </div>

              {/* Phone + Company */}
              <div className="grid sm:grid-cols-2 gap-5">
                <Field label="Phone Number">
                  <input type="tel" name="phone" value={formData.phone} onChange={handleChange}
                    placeholder="+234 802 540 1891" className={inputCls}
                    style={{ fontFamily: "'Montserrat', sans-serif" }} />
                </Field>
                <Field label="Company Name">
                  <input type="text" name="company" value={formData.company} onChange={handleChange}
                    placeholder="Your Company" className={inputCls}
                    style={{ fontFamily: "'Montserrat', sans-serif" }} />
                </Field>
              </div>

              {/* Service + Budget */}
              <div className="grid sm:grid-cols-2 gap-5">
                <Field label="Service Interested In" required>
                  <select name="service" value={formData.service} onChange={handleChange} required
                    className={inputCls} style={{ fontFamily: "'Montserrat', sans-serif" }}>
                    <option value="">Select a service</option>
                    {SERVICES.map((s, i) => <option key={i} value={s}>{s}</option>)}
                  </select>
                </Field>
                <Field label="Budget Range">
                  <select name="budget" value={formData.budget} onChange={handleChange}
                    className={inputCls} style={{ fontFamily: "'Montserrat', sans-serif" }}>
                    <option value="">Select budget</option>
                    {BUDGETS.map((b, i) => <option key={i} value={b}>{b}</option>)}
                  </select>
                </Field>
              </div>

              {/* Message */}
              <Field label="Tell Us About Your Project" required>
                <textarea name="message" value={formData.message} onChange={handleChange}
                  required rows={5} placeholder="Describe your goals, challenges, and what you want to achieve..."
                  className={inputCls + " resize-none"} style={{ fontFamily: "'Montserrat', sans-serif" }} />
              </Field>

              {/* Consent */}
              <label className="flex items-start gap-3 cursor-pointer group">
                <div className="relative flex-shrink-0 mt-0.5">
                  <input type="checkbox" name="consent" checked={formData.consent} onChange={handleChange}
                    required className="sr-only" />
                  <div className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-colors ${formData.consent ? "bg-[#000066] border-[#000066]" : "border-gray-300 group-hover:border-gray-400"}`}>
                    {formData.consent && <CheckCircle2 size={12} strokeWidth={3} className="text-white" />}
                  </div>
                </div>
                <span className="text-[12.5px] text-gray-500 leading-relaxed">
                  I agree to BitLayerX storing my information and contacting me about my enquiry. View our{" "}
                  <Link href="/privacy" className="text-[#0818A8] font-semibold hover:underline">Privacy Policy</Link>.
                </span>
              </label>

              {/* Submit */}
              <button type="submit" disabled={submitting || !formData.consent}
                className="group w-full flex items-center overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-[#000066] focus:ring-offset-2 transition-all duration-200"
                style={{ background: submitting ? "#000066" : "#000066" }}>
                <span className="flex-1 text-white font-black text-[15px] tracking-[0.16em] uppercase pl-7 pr-4 py-4 text-left">
                  {submitting ? "Sending Your Message…" : "Send Message & Get Started"}
                </span>
                <div className="flex items-center justify-center w-14 h-14 flex-shrink-0 border-l group-hover:bg-white/10 transition-colors"
                  style={{ borderColor: "rgba(255,255,255,0.15)", background: "rgba(255,255,255,0.07)" }}>
                  {submitting
                    ? <Loader2 size={18} strokeWidth={2.5} className="text-white animate-spin" />
                    : <Send size={16} strokeWidth={2.5} className="text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  }
                </div>
              </button>

              <p className="text-gray-400 text-[11.5px] text-center font-medium">
                🔒 Your information is kept 100% confidential. No spam, ever.
              </p>
            </form>
          </motion.div>

          {/* ── SIDEBAR ─────────────────────────────────────────────────── */}
          <motion.div ref={sideRef}
            initial={{ opacity: 0, x: 24 }} animate={sideInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.75, delay: 0.1, ease }}
            className="space-y-4 lg:sticky lg:top-28">

            {/* Promise card */}
            <div className="relative rounded-2xl overflow-hidden"
              style={{ background: "linear-gradient(135deg,#000055 0%,#0818A8 60%,#1D4ED8 100%)" }}>
              <div className="absolute inset-0 pointer-events-none opacity-[0.06]"
                style={{ backgroundImage: "radial-gradient(circle,white 1px,transparent 1px)", backgroundSize: "24px 24px" }} />
              <div className="absolute top-0 right-0 w-48 h-48 pointer-events-none"
                style={{ background: "radial-gradient(circle at top right,rgba(147,197,253,0.2) 0%,transparent 65%)" }} />
              <div className="relative z-10 p-7">
                <p className="text-blue-300 text-[10px] font-black tracking-[0.26em] uppercase mb-4 flex items-center gap-2">
                  <CalendarCheck size={11} strokeWidth={2.5} /> Quick Response Guaranteed
                </p>
                <h3 className="font-black text-white uppercase tracking-tight text-[16px] mb-5">
                  What Happens<br />Next?
                </h3>
                <div className="space-y-3">
                  {[
                    "We review your message within 24 hours",
                    "A senior strategist schedules a call",
                    "We build a custom proposal for your goals",
                    "You get full clarity — no obligation",
                  ].map((step, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 font-black text-[9px] text-[#000066] bg-white">
                        {i + 1}
                      </div>
                      <p className="text-white/70 text-[12.5px] font-medium leading-snug">{step}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Trust points */}
            <div className="bg-white border border-gray-100 rounded-2xl p-6"
              style={{ boxShadow: "0 2px 12px rgba(0,0,80,0.04)" }}>
              <p className="text-[10px] font-black tracking-[0.24em] uppercase text-gray-300 mb-4">Why Businesses Choose Us</p>
              <div className="space-y-3">
                {TRUST_POINTS.map((t, i) => (
                  <div key={i} className="flex items-start gap-2.5">
                    <CheckCircle2 size={13} strokeWidth={2.5} className="text-[#0818A8] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600 text-[12.5px] font-semibold">{t.label}</span>
                  </div>
                ))}
              </div>

              {/* Rating */}
              <div className="mt-5 pt-5 border-t border-gray-100 flex items-center gap-3">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => <Star key={i} size={12} className="text-amber-400 fill-amber-400" />)}
                </div>
                <p className="text-gray-500 text-[12px] font-medium">
                  <span className="font-black text-[#000066]">4.9/5</span> from 500+ clients
                </p>
              </div>
            </div>

            {/* FAQ */}
            <div className="bg-[#f8f9fc] border border-gray-100 rounded-2xl p-6">
              <p className="text-[10px] font-black tracking-[0.24em] uppercase text-gray-300 mb-4">Quick Answers</p>
              <div className="space-y-2">
                {FAQS.map((faq, i) => (
                  <FAQItem key={i} faq={faq} isOpen={openFAQ === i} onToggle={() => setOpenFAQ(openFAQ === i ? null : i)} />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// OFFICES
// ═══════════════════════════════════════════════════════════════════════════════
function Offices() {
  const [ref, inView] = useVisible("-40px");

  return (
    <section id="offices" className="bg-[#f8f9fc] py-24 lg:py-32 relative"
      aria-labelledby="offices-heading"
      style={{ fontFamily: "'Montserrat', sans-serif" }}>
      <div className="absolute top-0 left-0 right-0 h-px bg-gray-100" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">

        <Reveal className="text-center mb-14">
          <Pill>Our Offices</Pill>
          <h2 id="offices-heading"
            className="font-black text-[#080c20] uppercase leading-[0.9] tracking-tight"
            style={{ fontSize: "clamp(2rem, 4.5vw, 3.5rem)" }}>
            Find Us <span style={{
              background: "linear-gradient(135deg,#0818A8,#2563EB)",
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
            }}>In Person</span>
          </h2>
        </Reveal>

        <div ref={ref} className="grid md:grid-cols-2 gap-5">
          {OFFICES.map((o, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.65, delay: i * 0.1, ease }}
              className="group bg-white border border-gray-100 rounded-2xl overflow-hidden hover:shadow-lg hover:shadow-gray-100 transition-all duration-300"
              style={{ boxShadow: "0 2px 12px rgba(0,0,80,0.04)" }}>

              {/* Image */}
              <div className="relative h-52 overflow-hidden">
                <Image src={o.image} alt={`${o.city} office`} fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105" sizes="(max-width:768px) 100vw, 50vw" />
                <div className="absolute inset-0" style={{ background: "linear-gradient(to top,rgba(0,0,80,0.5) 0%,transparent 60%)" }} />
                <div className="absolute bottom-4 left-5 flex items-center gap-2">
                  <span className="text-xl">{o.flag}</span>
                  <div>
                    <p className="text-white font-black text-[16px] uppercase tracking-tight leading-none">{o.city}</p>
                    <p className="text-white/70 text-[11px] font-medium">{o.country}</p>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="absolute top-0 left-0 right-0 h-[3px] opacity-0 group-hover:opacity-100 transition-opacity" style={{ background: o.color }} />

                <div className="space-y-3 mb-5">
                  {[
                    { icon: MapPin, value: o.address  },
                    { icon: Phone,  value: o.phone    },
                    { icon: Mail,   value: o.email    },
                    { icon: Clock,  value: o.hours    },
                  ].map((row, j) => {
                    const Icon = row.icon;
                    return (
                      <div key={j} className="flex items-start gap-3">
                        <div className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0"
                          style={{ background: `${o.color}10` }}>
                          <Icon size={12} strokeWidth={2.5} style={{ color: o.color }} />
                        </div>
                        <span className="text-gray-600 text-[12.5px] font-medium leading-snug">{row.value}</span>
                      </div>
                    );
                  })}
                </div>

                <a href="#"
                  className="group/link inline-flex items-center gap-1.5 text-[11.5px] font-black uppercase tracking-wide transition-colors"
                  style={{ color: o.color }}>
                  Get Directions
                  <ArrowRight size={11} strokeWidth={3} className="group-hover/link:translate-x-0.5 transition-transform" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// MAP
// ═══════════════════════════════════════════════════════════════════════════════
function MapSection() {
  return (
    <section className="relative" style={{ height: 420 }}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3939.9872088894675!2d7.490445614771795!3d9.057458091114095!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e0ba90d82c411%3A0xa7d3d6b89e59e3c5!2sAbuja%2C%20Nigeria!5e0!3m2!1sen!2s!4v1234567890123!5m2!1sen!2s"
        width="100%" height="100%" style={{ border: 0, display: "block" }}
        allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"
        title="BitLayerX Abuja office location" />
      {/* Top fade */}
      <div className="absolute top-0 left-0 right-0 h-12 pointer-events-none z-10"
        style={{ background: "linear-gradient(to bottom,white,transparent)" }} />
    </section>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// PAGE ROOT
// ═══════════════════════════════════════════════════════════════════════════════
export default function ContactPage() {
  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="stylesheet" href={FONT_URL} />

      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ContactPage",
          name: "Contact BitLayerX — Start Your Digital Project",
          description: "Get in touch with BitLayerX. Start a project, book a strategy call, or request a proposal. Response within 24 hours.",
          url: "https://bitlayerx.com/contact",
          mainEntity: {
            "@type": "Organization",
            name: "BitLayerX",
            url: "https://bitlayerx.com",
            contactPoint: [
              { "@type": "ContactPoint", telephone: "+234-802-540-1891", contactType: "customer service", availableLanguage: "English" },
              { "@type": "ContactPoint", email: "hello@bitlayerx.com",   contactType: "sales" },
            ],
          },
        }),
      }} />

      <main id="main-content" style={{ fontFamily: "'Montserrat', sans-serif" }}>
        <ContactHero />
        <ContactMethods />
        <ContactForm />
        <Offices />
        <MapSection />
      </main>
    </>
  );
}