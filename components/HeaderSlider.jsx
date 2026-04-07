"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Star, Play, ChevronDown } from "lucide-react";

// ─── Typing Lines ──────────────────────────────────────────────────────────────
const LINES = [
  { verb: "Build.",    rest: "Your Digital Future."  },
  { verb: "Scale.",    rest: "Without Limits."        },
  { verb: "Dominate.", rest: "Your Market."           },
];

// ─── Stats ─────────────────────────────────────────────────────────────────────
const STATS = [
  { value: "500+", label: "Brands Scaled"    },
  { value: "98%",  label: "Client Retention" },
  { value: "6",    label: "Service Layers"   },
  { value: "4.9★", label: "Average Rating"   },
];

// ─── SEO Schema ───────────────────────────────────────────────────────────────
const SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "BitLayerX",
  url: "https://bitlayerx.com",
  description: "BitLayerX is a forward-thinking digital innovation company delivering layered digital ecosystems — strategy, design, technology, brand, media, and growth.",
  aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", reviewCount: "127" },
};

// ─── Animated Canvas Grid ────────────────────────────────────────────────────
function AnimatedGrid() {
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

      ctx.strokeStyle = "rgba(0,0,102,0.052)";
      ctx.lineWidth   = 0.5;
      ctx.beginPath();
      for (let c = 0; c <= cols; c++) { const x = c * CELL; ctx.moveTo(x, 0); ctx.lineTo(x, H); }
      for (let r = 0; r <= rows; r++) { const y = r * CELL; ctx.moveTo(0, y); ctx.lineTo(W, y); }
      ctx.stroke();

      WAVES.forEach(({ ax, ay, sr, sc, r, rgb }) => {
        const cx = W * (ax + 0.13 * Math.sin(t * sr));
        const cy = H * (ay + 0.09 * Math.cos(t * sc));
        const grd = ctx.createRadialGradient(cx, cy, 0, cx, cy, r);
        grd.addColorStop(0,    `rgba(${rgb},0.16)`);
        grd.addColorStop(0.45, `rgba(${rgb},0.06)`);
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
            const alpha = wave * prox * 0.72;
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
      sg.addColorStop(0.5, "rgba(59,130,246,0.10)");
      sg.addColorStop(1,   "rgba(59,130,246,0)");
      ctx.fillStyle = sg; ctx.fillRect(0, scanY - 28, W, 56);
      ctx.strokeStyle = "rgba(99,163,255,0.22)"; ctx.lineWidth = 1;
      ctx.beginPath(); ctx.moveTo(0, scanY); ctx.lineTo(W, scanY); ctx.stroke();

      const fade = ctx.createLinearGradient(0, H * 0.52, 0, H);
      fade.addColorStop(0, "rgba(255,255,255,0)");
      fade.addColorStop(1, "rgba(255,255,255,1)");
      ctx.fillStyle = fade; ctx.fillRect(0, H * 0.52, W, H * 0.48);

      rafRef.current = requestAnimationFrame(draw);
    };
    rafRef.current = requestAnimationFrame(draw);
    return () => { cancelAnimationFrame(rafRef.current); ro.disconnect(); };
  }, []);

  return (
    <canvas ref={canvasRef} aria-hidden="true"
      className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 0 }} />
  );
}

// ─── Wordmark Canvas (bottom section) ────────────────────────────────────────
// Renders "BitLayerX" in huge 3D-perspective text with:
//  - animated light-sweep across strokes
//  - letter-by-letter reveal on mount
//  - per-character glow pulses
//  - extrusion shadow for depth
//  - scan-line passing through the text
//  - all at very low opacity so it never distracts
function WordmarkCanvas() {
  const canvasRef = useRef(null);
  const rafRef    = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let W, H;

    const resize = () => {
      W = canvas.width  = canvas.offsetWidth;
      H = canvas.height = canvas.offsetHeight;
    };
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    const WORD = "BitLayerX";
    let startTs = null;
    // Each letter gets a random glow phase offset
    const phaseOffsets = WORD.split("").map(() => Math.random() * Math.PI * 2);

    const draw = (ts) => {
      if (!startTs) startTs = ts;
      const t = (ts - startTs) / 1000;

      ctx.clearRect(0, 0, W, H);

      // ── Responsive font size filling ~90% of canvas width ────────────────
      const fontSize = Math.min(W * 0.135, H * 0.62);

      // ── 3D perspective skew transform ────────────────────────────────────
      // We'll draw letters individually to apply per-char effects, but first
      // measure total width to center.
      ctx.font = `900 ${fontSize}px 'Montserrat', sans-serif`;
      ctx.textBaseline = "alphabetic";

      // Measure full word
      const totalW = ctx.measureText(WORD).width;
      const startX = (W - totalW) / 2;
      const baseY  = H * 0.78;

      // ── Letter-by-letter reveal (each char fades in over 0.4s, staggered 0.12s) ─
      const REVEAL_START = 0.6; // seconds after mount
      const STAGGER      = 0.12;
      const FADE_DUR     = 0.45;

      // ── Extrusion: draw layered shadow copies slightly offset ─────────────
      // (gives 3D depth). Use very low alpha.
      const EXTRUSION_LAYERS = 12;
      for (let layer = EXTRUSION_LAYERS; layer >= 1; layer--) {
        const alpha = (0.006 * (1 - layer / EXTRUSION_LAYERS));
        ctx.fillStyle = `rgba(0,0,60,${alpha})`;
        ctx.font = `900 ${fontSize}px 'Montserrat', sans-serif`;
        // Draw each character with cumulative x offset
        let curX = startX;
        for (let ci = 0; ci < WORD.length; ci++) {
          const ch = WORD[ci];
          const charW = ctx.measureText(ch).width;
          const elapsed = t - REVEAL_START - ci * STAGGER;
          const progress = Math.min(1, Math.max(0, elapsed / FADE_DUR));
          if (progress > 0) {
            ctx.globalAlpha = alpha * progress;
            ctx.fillText(ch, curX + layer * 1.2, baseY + layer * 0.8);
          }
          curX += charW;
        }
        ctx.globalAlpha = 1;
      }

      // ── Main text: stroke + fill per character ────────────────────────────
      let curX = startX;
      for (let ci = 0; ci < WORD.length; ci++) {
        const ch = WORD[ci];
        ctx.font = `900 ${fontSize}px 'Montserrat', sans-serif`;
        const charW = ctx.measureText(ch).width;

        // Reveal alpha
        const elapsed  = t - REVEAL_START - ci * STAGGER;
        const progress = Math.min(1, Math.max(0, elapsed / FADE_DUR));
        if (progress === 0) { curX += charW; continue; }

        // Per-character glow pulse (sin wave with offset)
        const pulse = (Math.sin(t * 1.4 + phaseOffsets[ci]) + 1) * 0.5; // 0→1

        // Fill: near-transparent navy
        const fillAlpha = (0.045 + pulse * 0.025) * progress;
        ctx.fillStyle = `rgba(8,18,168,${fillAlpha.toFixed(3)})`;
        ctx.fillText(ch, curX, baseY);

        // Stroke: slightly brighter, thin
        const strokeAlpha = (0.1 + pulse * 0.08) * progress;
        ctx.strokeStyle = `rgba(37,99,235,${strokeAlpha.toFixed(3)})`;
        ctx.lineWidth   = Math.max(0.5, fontSize * 0.008);
        ctx.strokeText(ch, curX, baseY);

        // Glow: wide soft stroke on top
        const glowAlpha = (0.04 + pulse * 0.055) * progress;
        ctx.shadowColor = `rgba(59,130,246,${glowAlpha})`;
        ctx.shadowBlur  = fontSize * 0.18 * (0.5 + pulse * 0.5);
        ctx.strokeStyle = `rgba(99,163,255,${glowAlpha.toFixed(3)})`;
        ctx.lineWidth   = fontSize * 0.04;
        ctx.strokeText(ch, curX, baseY);
        ctx.shadowBlur  = 0;
        ctx.shadowColor = "transparent";

        curX += charW;
      }

      // ── Light-sweep (horizontal shine moving left→right) ─────────────────
      const sweepX = ((t * 0.38) % 1.6 - 0.3) * W;
      const sweepW = W * 0.22;
      const sweepGrd = ctx.createLinearGradient(sweepX - sweepW, 0, sweepX + sweepW, 0);
      sweepGrd.addColorStop(0,   "rgba(147,197,253,0)");
      sweepGrd.addColorStop(0.5, "rgba(147,197,253,0.055)");
      sweepGrd.addColorStop(1,   "rgba(147,197,253,0)");
      ctx.fillStyle = sweepGrd;
      ctx.fillRect(0, 0, W, H);

      // ── Horizontal scan-line through the text ────────────────────────────
      const scanY = baseY - fontSize + ((t * 28) % (fontSize + 20)) - 10;
      const scanG = ctx.createLinearGradient(0, scanY - 2, 0, scanY + 2);
      scanG.addColorStop(0, "rgba(99,163,255,0)");
      scanG.addColorStop(0.5, "rgba(99,163,255,0.07)");
      scanG.addColorStop(1, "rgba(99,163,255,0)");
      ctx.fillStyle = scanG;
      ctx.fillRect(0, scanY - 2, W, 4);

      // ── Top white fade ────────────────────────────────────────────────────
      const topFade = ctx.createLinearGradient(0, 0, 0, H * 0.38);
      topFade.addColorStop(0, "rgba(255,255,255,1)");
      topFade.addColorStop(1, "rgba(255,255,255,0)");
      ctx.fillStyle = topFade;
      ctx.fillRect(0, 0, W, H * 0.38);

      // ── Bottom white fade ─────────────────────────────────────────────────
      const botFade = ctx.createLinearGradient(0, H * 0.72, 0, H);
      botFade.addColorStop(0, "rgba(255,255,255,0)");
      botFade.addColorStop(1, "rgba(255,255,255,1)");
      ctx.fillStyle = botFade;
      ctx.fillRect(0, H * 0.72, W, H * 0.28);

      // ── Side fades ────────────────────────────────────────────────────────
      const leftFade = ctx.createLinearGradient(0, 0, W * 0.08, 0);
      leftFade.addColorStop(0, "rgba(255,255,255,1)");
      leftFade.addColorStop(1, "rgba(255,255,255,0)");
      ctx.fillStyle = leftFade; ctx.fillRect(0, 0, W * 0.08, H);

      const rightFade = ctx.createLinearGradient(W * 0.92, 0, W, 0);
      rightFade.addColorStop(0, "rgba(255,255,255,0)");
      rightFade.addColorStop(1, "rgba(255,255,255,1)");
      ctx.fillStyle = rightFade; ctx.fillRect(W * 0.92, 0, W * 0.08, H);

      rafRef.current = requestAnimationFrame(draw);
    };

    rafRef.current = requestAnimationFrame(draw);
    return () => { cancelAnimationFrame(rafRef.current); ro.disconnect(); };
  }, []);

  return (
    <canvas ref={canvasRef} aria-hidden="true"
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 1 }} />
  );
}

// ─── Floating Accent Squares ───────────────────────────────────────────────────
const ACCENTS = [
  { size: 18, top: "22%",  right: "10%",  delay: 0,    opacity: 0.9,  glow: true  },
  { size: 9,  top: "20%",  right: "5.5%", delay: 0.2,  opacity: 0.55, glow: true  },
  { size: 24, top: "58%",  left: "5%",    delay: 0.1,  opacity: 0.07, glow: false },
  { size: 12, top: "68%",  left: "20%",   delay: 0.3,  opacity: 0.06, glow: false },
  { size: 8,  top: "40%",  left: "12%",   delay: 0.45, opacity: 0.07, glow: false },
  { size: 6,  top: "75%",  right: "18%",  delay: 0.35, opacity: 0.06, glow: false },
];

// ─── Reveal ───────────────────────────────────────────────────────────────────
function Reveal({ delay = 0, children, className = "", style = {} }) {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setShow(true), delay * 1000);
    return () => clearTimeout(t);
  }, [delay]);
  return (
    <div className={className} style={{
      opacity: show ? 1 : 0,
      transform: show ? "translateY(0)" : "translateY(22px)",
      transition: "opacity 0.75s cubic-bezier(0.22,1,0.36,1), transform 0.75s cubic-bezier(0.22,1,0.36,1)",
      ...style,
    }}>
      {children}
    </div>
  );
}

// ─── Blinking cursor ──────────────────────────────────────────────────────────
function Cursor() {
  const [on, setOn] = useState(true);
  useEffect(() => { const iv = setInterval(() => setOn(v => !v), 520); return () => clearInterval(iv); }, []);
  return (
    <span aria-hidden="true" style={{
      display: "inline-block",
      width: "clamp(3px, 0.44vw, 6px)",
      height: "0.88em",
      background: "linear-gradient(180deg,#1D4ED8,#000066)",
      marginLeft: "0.05em",
      verticalAlign: "text-bottom",
      opacity: on ? 1 : 0,
      transition: "opacity 0.08s",
    }} />
  );
}

// ─── Trust Badge ──────────────────────────────────────────────────────────────
function TrustBadge() {
  const AVATARS = [
    "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=40&h=40&fit=crop&crop=face&q=80",
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=40&h=40&fit=crop&crop=face&q=80",
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face&q=80",
    "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face&q=80",
  ];
  return (
    <div className="flex items-center gap-3" style={{ fontFamily: "'Montserrat', sans-serif" }}>
      <div className="flex -space-x-2">
        {AVATARS.map((src, i) => (
          <div key={i} className="w-7 h-7 rounded-full border-2 border-white overflow-hidden" style={{ zIndex: 4 - i }}>
            <Image src={src} alt="" width={28} height={28} className="object-cover w-full h-full" />
          </div>
        ))}
      </div>
      <div>
        <div className="flex gap-0.5 mb-0.5">
          {[...Array(5)].map((_, i) => <Star key={i} size={9} className="text-amber-400 fill-amber-400" />)}
        </div>
        <p className="text-[11px] text-gray-500 font-medium leading-none">
          <span className="text-[#000066] font-black">500+</span> businesses trust us
        </p>
      </div>
    </div>
  );
}

// ─── MAIN HERO ────────────────────────────────────────────────────────────────
export default function HeroSection() {
  const [lineIdx, setLineIdx]   = useState(0);
  const [typed, setTyped]       = useState("");
  const [deleting, setDeleting] = useState(false);
  const sectionRef = useRef(null);

  // Typewriter
  useEffect(() => {
    const word  = LINES[lineIdx].verb;
    const speed = deleting ? 55 : 115;
    const t = setTimeout(() => {
      if (!deleting) {
        const next = word.slice(0, typed.length + 1);
        setTyped(next);
        if (next === word) setTimeout(() => setDeleting(true), 1800);
      } else {
        const next = word.slice(0, typed.length - 1);
        setTyped(next);
        if (next === "") { setDeleting(false); setLineIdx(p => (p + 1) % LINES.length); }
      }
    }, speed);
    return () => clearTimeout(t);
  }, [typed, deleting, lineIdx]);

  const currentLine = LINES[lineIdx];

  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800;900&display=swap" />
      <script type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }} />

      <style>{`
        @keyframes blx-float-a{0%,100%{transform:translateY(0) rotate(0deg)}50%{transform:translateY(-9px) rotate(3deg)}}
        @keyframes blx-float-b{0%,100%{transform:translateY(0)}50%{transform:translateY(-6px)}}
        @keyframes blx-float-c{0%,100%{transform:translateY(0) rotate(0deg)}50%{transform:translateY(-13px) rotate(-2deg)}}
        @keyframes blx-glow-pulse{0%,100%{box-shadow:0 0 8px 2px rgba(37,99,235,0.3)}50%{box-shadow:0 0 20px 6px rgba(37,99,235,0.55)}}
        @keyframes blx-wordmark-in{from{opacity:0;transform:perspective(800px) rotateX(14deg) translateY(30px)}to{opacity:1;transform:perspective(800px) rotateX(6deg) translateY(0)}}
        .blx-stat:not(:last-child){border-right:1px solid rgba(0,0,102,0.08);}
      `}</style>

      <section ref={sectionRef} id="hero"
        className="hero-section relative w-full min-h-screen bg-white flex flex-col overflow-hidden"
        aria-label="BitLayerX — Digital Innovation Agency"
        itemScope itemType="https://schema.org/WebPageElement"
        style={{ fontFamily: "'Montserrat', sans-serif" }}>

        {/* Animated canvas grid */}
        <AnimatedGrid />

        {/* Vignette */}
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none z-[1]"
          style={{ background: "radial-gradient(ellipse 70% 60% at 50% 0%, rgba(255,255,255,0.45) 0%, transparent 80%)" }} />

        {/* Navy accent bar */}
        <div aria-hidden="true" className="absolute top-0 left-0 right-0 z-20"
          style={{ height: 3, background: "linear-gradient(90deg,transparent 0%,#0818A8 25%,#2563EB 50%,#0818A8 75%,transparent 100%)" }} />

        {/* Floating accent squares */}
        {ACCENTS.map((a, i) => (
          <div key={i} aria-hidden="true" className="absolute pointer-events-none z-10"
            style={{
              width: a.size, height: a.size,
              background: a.glow ? "linear-gradient(135deg,#000066,#1D4ED8)" : "#000066",
              opacity: a.opacity,
              top: a.top, left: a.left, right: a.right,
              animation: [
                `blx-float-${["a","b","c"][i%3]} ${3.5+i*0.4}s ease-in-out infinite`,
                a.glow ? `blx-glow-pulse ${2.2+i*0.4}s ease-in-out infinite` : ""
              ].filter(Boolean).join(", "),
              animationDelay: `${a.delay}s`,
            }} />
        ))}

        {/* Corner bracket — top right */}
        <div aria-hidden="true" className="absolute top-24 right-10 z-10 pointer-events-none hidden lg:block">
          <div style={{ width: 32, height: 32, border: "1px solid rgba(0,0,102,0.14)" }} />
          <div style={{ width: 20, height: 20, background: "rgba(0,0,102,0.04)", margin: "4px 0 0 4px" }} />
        </div>
        {/* Corner bracket — top left */}
        <div aria-hidden="true" className="absolute top-32 left-8 z-10 pointer-events-none hidden lg:block">
          <div style={{ width: 14, height: 14, borderTop: "1.5px solid rgba(0,0,102,0.18)", borderLeft: "1.5px solid rgba(0,0,102,0.18)" }} />
        </div>

        {/* ── MAIN CONTENT ─────────────────────────────────────────────── */}
        <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-5 sm:px-10 lg:px-16 pt-36 sm:pt-40 pb-0">

          {/* Trust badge */}
          <Reveal delay={0.25} className="mb-8 sm:mb-10">
            <div className="flex items-center gap-2 px-4 py-2.5 rounded-full backdrop-blur-sm"
              style={{ background: "rgba(255,255,255,0.82)", border: "1px solid rgba(0,0,102,0.1)", boxShadow: "0 2px 12px rgba(0,0,102,0.07)" }}>
              <TrustBadge />
            </div>
          </Reveal>

          {/* Headline */}
          <Reveal delay={0.4} className="w-full text-center">
            <h1 className="font-black text-center leading-[0.9] tracking-[-0.03em] uppercase"
              style={{ fontSize: "clamp(2.6rem, 9vw, 9.2rem)" }}
              itemProp="headline">
              <span className="block" aria-live="polite">
                <span style={{
                  background: "linear-gradient(135deg,#000066 0%,#1D4ED8 45%,#3B82F6 100%)",
                  WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
                }}>
                  {typed || "\u00A0"}
                </span>
                <Cursor />
              </span>
              <span className="block text-[#080c20]">{currentLine.rest}</span>
            </h1>
          </Reveal>

          {/* Sub-tagline */}
          <Reveal delay={0.58} className="mt-6 sm:mt-7 max-w-xl text-center">
            <p className="text-[15px] sm:text-[16px] leading-relaxed text-gray-500 font-medium" itemProp="description">
              Strategy · Design · Technology · Brand · Media · Growth
              <br />
              <span className="text-gray-400 text-[13.5px]">
                End-to-end digital ecosystems that compound over time.
              </span>
            </p>
          </Reveal>

          {/* CTA row */}
          <Reveal delay={0.72} className="mt-9 sm:mt-10 flex flex-col sm:flex-row items-center gap-3">
            <Link href="/contact/project" aria-label="Start your project with BitLayerX"
              className="group relative flex items-center overflow-hidden focus:outline-none focus:ring-2 focus:ring-[#000066] focus:ring-offset-2"
              style={{ background: "#000066", minWidth: 260 }}>
              <span className="flex-1 text-white font-black text-[13.5px] tracking-[0.16em] uppercase pl-7 pr-4 py-4">
                Start Your Project
              </span>
              <div className="flex items-center justify-center w-14 h-14 flex-shrink-0 border-l transition-colors duration-300 group-hover:bg-white/10"
                style={{ borderColor: "rgba(255,255,255,0.15)", background: "rgba(255,255,255,0.07)" }}>
                <ArrowUpRight size={18} strokeWidth={2.5}
                  className="text-white transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </Link>
            <Link href="/work" aria-label="View BitLayerX portfolio"
              className="group flex items-center gap-2.5 px-7 py-4 font-semibold text-[13.5px] text-gray-600 hover:text-[#000066] transition-all duration-200 tracking-wide uppercase backdrop-blur-sm"
              style={{ border: "1px solid rgba(0,0,102,0.12)", minWidth: 200, justifyContent: "center", background: "rgba(255,255,255,0.72)" }}>
              <Play size={13} strokeWidth={2.5} className="fill-current" />
              View Our Work
            </Link>
          </Reveal>

          {/* Stats strip */}
          <Reveal delay={1.0} className="mt-14 sm:mt-16 w-full max-w-2xl">
            <div className="grid grid-cols-4 overflow-hidden backdrop-blur-sm"
              style={{ border: "1px solid rgba(0,0,102,0.08)", background: "rgba(255,255,255,0.78)", boxShadow: "0 2px 20px rgba(0,0,102,0.06)" }}>
              {STATS.map((s, i) => (
                <div key={i} className="blx-stat flex flex-col items-center py-4 sm:py-5">
                  <span className="font-black text-[#000066] leading-none" style={{ fontSize: "clamp(1.1rem, 2.5vw, 1.6rem)" }}>
                    {s.value}
                  </span>
                  <span className="text-[10px] sm:text-[11px] text-gray-400 font-semibold uppercase tracking-widest mt-1 text-center">
                    {s.label}
                  </span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        {/* ── BOTTOM WORDMARK SECTION ──────────────────────────────────── */}
        {/* Replaces the photo — animated "BitLayerX" canvas in 3D perspective */}
        <div className="relative w-full mt-6 overflow-hidden z-10"
          style={{ height: "clamp(180px, 32vh, 380px)" }}>

          {/* The animated wordmark canvas */}
          <WordmarkCanvas />

          {/* 3D perspective wrapper for the text label inside the canvas */}
          {/* (The canvas itself handles all the drawing; this div adds CSS perspective as a layer cue) */}
          <div aria-hidden="true" className="absolute inset-0 pointer-events-none z-[2]"
            style={{
              perspective: "900px",
              perspectiveOrigin: "50% 40%",
            }}>
            {/* Thin horizontal rules — grid lines through the wordmark area */}
            {[0.25, 0.5, 0.72].map((frac, i) => (
              <div key={i}
                style={{
                  position: "absolute",
                  left: "8%", right: "8%",
                  top: `${frac * 100}%`,
                  height: 1,
                  background: `rgba(0,0,102,${[0.04, 0.06, 0.035][i]})`,
                  transform: `perspective(900px) rotateX(${[4, 6, 8][i]}deg)`,
                }} />
            ))}
          </div>

          {/* Subtle overlay info strip — bottom left */}
          <div className="absolute bottom-5 left-0 right-0 z-20 hidden md:flex items-end justify-between px-10 lg:px-16">
            <div className="backdrop-blur-sm px-5 py-3"
              style={{ background: "rgba(255,255,255,0.88)", border: "1px solid rgba(0,0,102,0.09)" }}>
              <p className="text-[10px] text-gray-400 font-semibold uppercase tracking-[0.2em] mb-0.5">Powering</p>
              <p className="text-[13px] text-[#000066] font-black uppercase tracking-wide">Digital Innovation</p>
            </div>
            {/* Scroll indicator */}
            <div className="flex flex-col items-center gap-2 pb-1">
              <div className="w-px bg-gray-300" style={{ height: 40, animation: "blx-float-b 2.2s ease-in-out infinite" }} />
              <ChevronDown size={14} className="text-gray-400" strokeWidth={2} />
            </div>
          </div>
        </div>

        {/* Mobile scroll hint */}
        <div className="flex md:hidden justify-center pb-6 pt-2 z-10" aria-hidden="true">
          <div className="flex flex-col items-center gap-1">
            <ChevronDown size={16} className="text-gray-300" strokeWidth={2} />
            <span className="text-[9px] text-gray-300 font-semibold uppercase tracking-[0.2em]">Scroll</span>
          </div>
        </div>

      </section>
    </>
  );
}