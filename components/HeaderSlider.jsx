"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowUpRight, ArrowRight, Check, ChevronDown, Sparkles } from "lucide-react";

// ─── Motion preference ────────────────────────────────────────────────────────
function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const apply = () => setReduced(mq.matches);
    apply();
    mq.addEventListener("change", apply);
    return () => mq.removeEventListener("change", apply);
  }, []);
  return reduced;
}

// ─── Animated Canvas Grid ─────────────────────────────────────────────────────
// Pauses when the hero scrolls out of view, and never starts if the reader has
// asked for reduced motion.
function AnimatedGrid({ paused }) {
  const canvasRef = useRef(null);
  const rafRef = useRef(null);
  const pausedRef = useRef(paused);

  useEffect(() => {
    pausedRef.current = paused;
  }, [paused]);

  useEffect(() => {
    if (paused) return;
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
      { ax: 0.18, ay: 0.22, sr: 0.43, sc: 0.61, r: 270, rgb: "37,99,235"  },
      { ax: 0.72, ay: 0.32, sr: 0.29, sc: 0.52, r: 210, rgb: "29,78,216"  },
      { ax: 0.44, ay: 0.65, sr: 0.55, sc: 0.78, r: 190, rgb: "59,130,246" },
    ];
    let startTs = null;

    const draw = (ts) => {
      if (pausedRef.current) {
        rafRef.current = requestAnimationFrame(draw);
        return;
      }
      if (!startTs) startTs = ts;
      const t = (ts, startTs) / 1000;
      ctx.clearRect(0, 0, W, H);

      ctx.strokeStyle = "rgba(0, 64, 255,0.052)";
      ctx.lineWidth = 0.5;
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
            const dx = ix, cx, dy = iy, cy;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist > r) continue;
            const phase = dist * 0.02, t * sr * 3.5;
            const wave = (Math.sin(phase) + 1) * 0.5;
            const prox = 1, dist / r;
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
  }, [paused]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 0 }}
    />
  );
}

// ─── Typewriter ───────────────────────────────────────────────────────────────
// Matches the About hero, so the two pages read as one brand.
function useTypewriter(words, speed = 110, delSpeed = 58, pause = 1900) {
  const [idx, setIdx] = useState(0);
  const [text, setText] = useState("");
  const [del, setDel] = useState(false);
  const [pausing, setPausing] = useState(false);

  useEffect(() => {
    if (pausing) return;
    const word = words[idx];
    const ms = del ? delSpeed : speed;
    const t = setTimeout(() => {
      if (!del) {
        const next = word.slice(0, text.length + 1);
        setText(next);
        if (next === word) {
          setPausing(true);
          setTimeout(() => {
            setPausing(false);
            setDel(true);
          }, pause);
        }
      } else {
        const next = word.slice(0, text.length - 1);
        setText(next);
        if (next === "") {
          setDel(false);
          setIdx((i) => (i + 1) % words.length);
        }
      }
    }, ms);
    return () => clearTimeout(t);
  }, [text, del, pausing, idx, words, speed, delSpeed, pause]);

  return text;
}

function Cursor() {
  const [on, setOn] = useState(true);
  useEffect(() => {
    const iv = setInterval(() => setOn((v) => !v), 520);
    return () => clearInterval(iv);
  }, []);
  return (
    <span
      aria-hidden="true"
      style={{
        display: "inline-block",
        width: "clamp(3px,0.44vw,6px)",
        height: "0.88em",
        background: "linear-gradient(180deg,#0040FF,#0B0B0F)",
        marginLeft: "0.05em",
        verticalAlign: "text-bottom",
        opacity: on ? 1 : 0,
        transition: "opacity 0.08s",
      }}
    />
  );
}

// ─── Reveal ───────────────────────────────────────────────────────────────────
function Reveal({ delay = 0, children, className = "", as: Tag = "div" }) {
  const isSpan = Tag === "span";
  const [show, setShow] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setShow(true), delay * 1000);
    return () => clearTimeout(t);
  }, [delay]);
  return (
    <Tag
      className={className}
      style={{
        display: isSpan ? "block" : undefined,
        opacity: show ? 1 : 0,
        transform: show ? "translateY(0)" : "translateY(18px)",
        transition:
          "opacity 0.7s cubic-bezier(0.22,1,0.36,1), transform 0.7s cubic-bezier(0.22,1,0.36,1)",
      }}
    >
      {children}
    </Tag>
  );
}

// The three things a first-time visitor most needs to believe. Each one is
// specific and keepable, no superlatives, nothing that needs a footnote.
const PROMISES = [
  "A clear plan within 48 hours",
  "One point of accountability",
  "You work with the people building it",
];

const BUILDS = ["Products", "Brands", "Systems", "Platforms"];

// ─── MAIN HERO ────────────────────────────────────────────────────────────────
export default function HeroSection() {
  const sectionRef = useRef(null);
  const reducedMotion = usePrefersReducedMotion();
  const [offscreen, setOffscreen] = useState(false);

  // Stop painting canvases once the hero has scrolled away.
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => setOffscreen(!entry.isIntersecting),
      { threshold: 0 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const paused = reducedMotion || offscreen;
  const typed = useTypewriter(BUILDS);

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="hero-section relative w-full bg-white flex flex-col overflow-hidden min-h-[88vh]"
      aria-labelledby="hero-heading"
    >
      <AnimatedGrid paused={paused} />

      {/* Vignette */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none z-[1]"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 50% 0%, rgba(255,255,255,0.45) 0%, transparent 80%)",
        }}
      />

      {/* Navy accent bar */}
      <div
        aria-hidden="true"
        className="absolute top-0 left-0 right-0 z-20"
        style={{
          height: 3,
          background:
            "linear-gradient(90deg,transparent 0%,#0040FF 25%,#0040FF 50%,#0040FF 75%,transparent 100%)",
        }}
      />

      {/* Floating marks, the same accent language as the About hero */}
      <style>{`
        @keyframes blx-float-a{0%,100%{transform:translateY(0) rotate(0deg)}50%{transform:translateY(-9px) rotate(3deg)}}
        @keyframes blx-float-b{0%,100%{transform:translateY(0)}50%{transform:translateY(-6px)}}
        @keyframes blx-glow-p{0%,100%{box-shadow:0 0 8px 2px rgba(37,99,235,0.28)}50%{box-shadow:0 0 22px 7px rgba(37,99,235,0.52)}}
      `}</style>

      {[
        { size: 18, top: "26%", right: "8%", delay: 0, glow: true },
        { size: 9, top: "24%", right: "4%", delay: 0.2, glow: true },
        { size: 22, top: "60%", left: "5%", delay: 0.1, glow: false },
        { size: 10, top: "53%", left: "18%", delay: 0.3, glow: false },
      ].map((a, i) => (
        <div
          key={i}
          aria-hidden="true"
          className="absolute pointer-events-none z-10 hidden sm:block"
          style={{
            width: a.size,
            height: a.size,
            background: a.glow ? "linear-gradient(135deg,#0B0B0F,#0040FF)" : "#0B0B0F",
            opacity: a.glow ? 0.85 : 0.07,
            top: a.top,
            left: a.left,
            right: a.right,
            animation: reducedMotion
              ? "none"
              : [
                  `blx-float-${i % 2 === 0 ? "a" : "b"} ${3.6 + i * 0.4}s ease-in-out infinite`,
                  a.glow ? `blx-glow-p ${2.2 + i * 0.4}s ease-in-out infinite` : "",
                ]
                  .filter(Boolean)
                  .join(", "),
            animationDelay: `${a.delay}s`,
          }}
        />
      ))}

      <div aria-hidden="true" className="absolute top-24 right-10 z-10 pointer-events-none hidden lg:block">
        <div style={{ width: 32, height: 32, border: "1px solid rgba(0, 64, 255,0.14)" }} />
        <div style={{ width: 20, height: 20, background: "rgba(0, 64, 255,0.04)", margin: "4px 0 0 4px" }} />
      </div>

      {/* MAIN CONTENT */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-5 sm:px-10 lg:px-16 pt-36 sm:pt-44 pb-16 text-center">

        {/* Badge, verifiable facts only */}
        <Reveal delay={0.15}>
          <div
            className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full backdrop-blur-sm mb-10"
            style={{
              background: "rgba(255,255,255,0.82)",
              border: "1px solid rgba(0, 64, 255,0.1)",
              boxShadow: "0 2px 12px rgba(0, 64, 255,0.07)",
            }}
          >
            <Sparkles size={13} strokeWidth={2.5} className="text-amber-400" />
            <span className="text-[13.5px] font-bold text-gray-600">
              Headquartered in{" "}
              <span className="text-[#0B0B0F] font-black">Abuja, Nigeria</span> ·
              Operational since{" "}
              <span className="text-[#0B0B0F] font-black">May 2026</span>
            </span>
          </div>
        </Reveal>

        {/* Headline.
            The visible headline animates one word, so the h1 carries the whole
            sentence for screen readers and crawlers and the animated lines are
            presentational. */}
        <h1 id="hero-heading" className="mb-8">
          <span className="sr-only">
            We build the products, brands, systems and platforms companies
            run on.
          </span>

          <span aria-hidden="true">
            <Reveal delay={0.28} as="span">
              <span
                className="block font-black uppercase leading-[0.9] tracking-[-0.03em] text-[#0B0B0F]"
                style={{ fontSize: "clamp(2.1rem, 6vw, 5.6rem)" }}
              >
                We build the
              </span>
            </Reveal>

            <Reveal delay={0.38} as="span">
              <span className="flex items-baseline justify-center">
                <span
                  className="font-black uppercase leading-[0.9] tracking-[-0.03em]"
                  style={{
                    fontSize: "clamp(2.1rem, 6vw, 5.6rem)",
                    background:
                      "linear-gradient(135deg,#0B0B0F 0%,#0040FF 45%,#0040FF 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  {typed || "\u00A0"}
                </span>
                <Cursor />
              </span>
            </Reveal>

            <Reveal delay={0.48} as="span">
              <span
                className="block font-black uppercase leading-[0.9] tracking-[-0.03em] text-[#0B0B0F]"
                style={{ fontSize: "clamp(2.1rem, 6vw, 5.6rem)" }}
              >
                Companies run on.
              </span>
            </Reveal>
          </span>
        </h1>

        {/* Sub */}
        <Reveal delay={0.58}>
          <p className="text-gray-500 text-[16px] sm:text-[17px] leading-relaxed max-w-2xl font-medium mb-10">
            Strategy, design, engineering, brand, film and growth, {" "}
            <span className="text-[#0B0B0F] font-bold">
              one team, one standard, one person accountable to you.
            </span>{" "}
            Replace five vendors with a studio that owns the whole outcome.
          </p>
        </Reveal>

        {/* CTAs */}
        <Reveal delay={0.68}>
          <div className="flex flex-col sm:flex-row items-center gap-3">
            <Link
              href="/portfolio"
              aria-label="See BitLayerX work"
              className="group flex items-center overflow-hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0B0B0F] focus-visible:ring-offset-2"
              style={{ background: "#0B0B0F", minWidth: 240 }}
            >
              <span className="flex-1 text-white font-black text-[15px] tracking-[0.16em] uppercase pl-7 pr-4 py-4">
                See our work
              </span>
              <div
                className="flex items-center justify-center w-14 h-14 flex-shrink-0 border-l group-hover:bg-white/10 transition-colors"
                style={{
                  borderColor: "rgba(255,255,255,0.15)",
                  background: "rgba(255,255,255,0.07)",
                }}
              >
                <ArrowUpRight
                  size={18}
                  strokeWidth={2.5}
                  className="text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                />
              </div>
            </Link>

            <Link
              href="/contact"
              aria-label="Book a strategy call with BitLayerX"
              className="flex items-center gap-2 px-7 py-4 font-semibold text-[15px] text-gray-600 hover:text-[#0B0B0F] transition-colors tracking-wide uppercase backdrop-blur-sm"
              style={{
                border: "1px solid rgba(0, 64, 255,0.12)",
                minWidth: 210,
                justifyContent: "center",
                background: "rgba(255,255,255,0.72)",
              }}
            >
              Book a strategy call
              <ArrowRight size={12} strokeWidth={2.5} />
            </Link>
          </div>
        </Reveal>

        {/* Three promises. Specific, verifiable, keepable. */}
        <Reveal delay={0.8}>
          <ul className="flex flex-wrap justify-center gap-x-7 gap-y-2.5 mt-11">
            {PROMISES.map((promise) => (
              <li
                key={promise}
                className="flex items-center gap-2 text-[13px] font-medium text-gray-500"
              >
                <Check
                  size={13}
                  strokeWidth={3}
                  className="text-[#0040FF] flex-shrink-0"
                  aria-hidden="true"
                />
                {promise}
              </li>
            ))}
          </ul>
        </Reveal>

        {/* Scroll hint */}
        <div className="mt-12 flex flex-col items-center gap-1.5" aria-hidden="true">
          <div className="w-px bg-gray-200" style={{ height: 32 }} />
          <ChevronDown size={14} className="text-gray-300" strokeWidth={2} />
        </div>
      </div>

      {/* Bottom strip: who is behind it, and who it is for */}
      <div className="relative z-10 w-full max-w-[1180px] mx-auto px-5 sm:px-8 lg:px-10 mt-14 lg:mt-20 pb-12">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 pt-7 border-t border-[#0B0B0F]/[0.08]">
          <div className="flex items-center gap-3.5">
            <span
              aria-hidden="true"
              className="w-9 h-9 rounded-full bg-[#0B0B0F]/[0.06] flex items-center justify-center flex-shrink-0"
            >
              <span className="text-[12px] font-black text-[#0B0B0F]">OO</span>
            </span>
            <p className="text-[13px] leading-snug text-gray-500">
              <span className="block text-[10.5px] font-bold tracking-[0.18em] uppercase text-gray-400">
                Founded and led by
              </span>
              <a
                href="https://opeyemiojurongbe.com"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-[#0B0B0F] hover:text-[#0040FF] transition-colors underline-offset-4 hover:underline"
              >
                Opeyemi T. Ojurongbe
              </a>
              <span className="text-gray-400"> · Design engineer</span>
            </p>
          </div>

          <p className="text-[12.5px] text-gray-500 md:text-right max-w-[40ch]">
            <span className="font-bold tracking-[0.16em] uppercase text-gray-400">
              Sectors
            </span>
            <span className="mx-2 text-gray-300" aria-hidden="true">·</span>
            Fintech, logistics, real estate, e-commerce, healthcare
          </p>
        </div>
      </div>

    </section>
  );
}
