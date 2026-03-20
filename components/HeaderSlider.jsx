'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, useMotionValue, useTransform, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import {
  ArrowRight,
  Star,
  Zap,
  TrendingUp,
  CheckCircle2,
  Rocket,
  Play,
} from 'lucide-react';

// ─── Typing words ──────────────────────────────────────────────────────────────
const LINES = [
  { typed: 'Build.',    static: 'Your Digital Future.' },
  { typed: 'Scale.',    static: 'Without Limits.'       },
  { typed: 'Dominate.', static: 'Your Market.'          },
];

// ─── Trust logos ───────────────────────────────────────────────────────────────
const LOGOS = [
  'Forbes Africa',
  'TechCabal',
  'Nairametrics',
  'BusinessDay',
  'The Guardian',
];

// ─── Particle ─────────────────────────────────────────────────────────────────
function Particle({ x, y, size, duration, delay }) {
  return (
    <motion.div
      className="absolute rounded-full pointer-events-none"
      style={{
        left: `${x}%`,
        top: `${y}%`,
        width: size,
        height: size,
        backgroundColor: 'rgba(147,197,253,0.25)',
      }}
      animate={{ y: [0, -50, 0], opacity: [0, 0.6, 0] }}
      transition={{ duration, delay, repeat: Infinity, ease: 'easeInOut' }}
    />
  );
}

// ─── Main Hero ─────────────────────────────────────────────────────────────────
export default function HeroSection() {
  const [lineIndex, setLineIndex]   = useState(0);
  const [typedText, setTypedText]   = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [showStatic, setShowStatic] = useState(false);
  const [particles] = useState(() =>
    Array.from({ length: 14 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1.5,
      duration: Math.random() * 5 + 4,
      delay: Math.random() * 4,
    }))
  );

  const heroRef = useRef(null);
  const mouseX  = useMotionValue(0);
  const mouseY  = useMotionValue(0);
  const overlayX = useTransform(mouseX, [-800, 800], [-12, 12]);
  const overlayY = useTransform(mouseY, [-600, 600], [-8, 8]);

  // Mouse parallax
  useEffect(() => {
    const onMove = (e) => {
      if (!heroRef.current) return;
      const r = heroRef.current.getBoundingClientRect();
      mouseX.set(e.clientX - r.left - r.width  / 2);
      mouseY.set(e.clientY - r.top  - r.height / 2);
    };
    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, [mouseX, mouseY]);

  // Typing logic
  useEffect(() => {
    const word  = LINES[lineIndex].typed;
    const speed = isDeleting ? 60 : 110;
    const t = setTimeout(() => {
      if (!isDeleting) {
        const next = word.slice(0, typedText.length + 1);
        setTypedText(next);
        if (next === word) {
          setTimeout(() => setIsDeleting(true), 2200);
        }
      } else {
        const next = word.slice(0, typedText.length - 1);
        setTypedText(next);
        if (next === '') {
          setIsDeleting(false);
          setLineIndex((p) => (p + 1) % LINES.length);
        }
      }
    }, speed);
    return () => clearTimeout(t);
  }, [typedText, isDeleting, lineIndex]);

  const currentLine = LINES[lineIndex];

  return (
    <div className="w-full overflow-hidden">
      {/* SEO Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'BitLayerX',
            url: 'https://bitlayerx.com',
            description:
              'BitLayerX is a forward-thinking digital innovation company delivering layered digital ecosystems — strategy, design, technology, brand, media, and growth.',
            aggregateRating: { '@type': 'AggregateRating', ratingValue: '4.9', reviewCount: '127' },
          }),
        }}
      />

      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <section
        ref={heroRef}
        className="hero-section relative w-full min-h-screen flex flex-col overflow-hidden"
        itemScope
        itemType="https://schema.org/WebPageElement"
        aria-label="BitLayerX Hero"
      >

        {/* ── Background image layer (parallax) ─────────────────────────── */}
        <motion.div
          className="absolute inset-0 scale-110"
          style={{ x: overlayX, y: overlayY }}
        >
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&h=1080&fit=crop&q=85')`,
            }}
          />
        </motion.div>

        {/* ── Layered overlays ──────────────────────────────────────────── */}

        {/* Base dark overlay */}
        <div className="absolute inset-0 bg-black/55" />

        {/* Blue-tinted bottom gradient — anchors headline */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(to top, rgba(0,0,80,0.85) 0%, rgba(0,0,40,0.5) 35%, rgba(0,0,0,0.1) 65%, transparent 100%)',
          }}
        />

        {/* Left edge vignette */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(to right, rgba(0,0,0,0.35) 0%, transparent 60%)',
          }}
        />

        {/* Noise grain */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.04]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
            backgroundSize: '180px 180px',
          }}
        />

        {/* Hex grid — very subtle */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
          <svg width="100%" height="100%" aria-hidden="true">
            <defs>
              <pattern id="hero-hex" x="0" y="0" width="80" height="69" patternUnits="userSpaceOnUse">
                <path d="M40 0 L74.64 20 L74.64 49 L40 69 L5.36 49 L5.36 20 Z"
                  fill="none" stroke="rgba(255,255,255,1)" strokeWidth="0.8" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#hero-hex)" />
          </svg>
        </div>

        {/* Top accent line */}
        <div
          className="absolute top-0 left-0 right-0 h-px pointer-events-none z-20"
          style={{
            background:
              'linear-gradient(90deg, transparent 0%, rgba(59,130,246,0.7) 30%, rgba(147,197,253,1) 50%, rgba(59,130,246,0.7) 70%, transparent 100%)',
          }}
        />

        {/* Particles */}
        {particles.map((p) => (
          <Particle key={p.id} {...p} />
        ))}

        {/* Animated rotating rings — desktop only */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
          className="absolute top-16 right-[8%] pointer-events-none hidden xl:block opacity-20"
          aria-hidden="true"
        >
          <svg width="160" height="160" viewBox="0 0 160 160">
            <circle cx="80" cy="80" r="72" fill="none" stroke="rgba(147,197,253,0.5)"
              strokeWidth="1" strokeDasharray="10 8" />
            <circle cx="80" cy="80" r="50" fill="none" stroke="rgba(99,149,255,0.3)"
              strokeWidth="1" strokeDasharray="5 10" />
          </svg>
        </motion.div>

        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 22, repeat: Infinity, ease: 'linear' }}
          className="absolute top-[30%] right-[5%] w-16 h-16 border border-blue-400/15 rotate-45 pointer-events-none hidden xl:block"
          aria-hidden="true"
        />

        {/* ── Main content — bottom-anchored editorial layout ────────────── */}
        <div className="relative z-10 flex flex-col justify-end flex-1 w-full max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16 pb-0">

          {/* ── Top-right: trust badge (subtle) ───────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="absolute top-32 right-6 sm:right-10 lg:right-16 flex items-center gap-2"
          >
            <div className="flex items-center gap-2 px-3.5 py-2 rounded-full border border-white/15 bg-black/30 backdrop-blur-md">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={11} className="text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <span className="text-white/70 text-[12px] font-semibold">4.9 · 127 Reviews</span>
            </div>
          </motion.div>

          {/* ── HEADLINE BLOCK — full-bleed editorial ─────────────────────── */}
          <div className="mt-auto pt-32 sm:pt-40 pb-8 lg:pb-10">

            {/* Eyebrow label */}
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="text-[11px] sm:text-[12px] font-black tracking-[0.28em] text-blue-300/80 uppercase mb-4 sm:mb-5 flex items-center gap-3"
            >
              <span
                className="inline-block w-8 h-px"
                style={{ backgroundColor: 'rgba(147,197,253,0.5)' }}
              />
              BitLayerX · Digital Innovation Company
            </motion.p>

            {/* ── Giant headline — typing on line 1, static on line 2 ─────── */}
            <div className="overflow-visible">
              <motion.h1
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="font-black text-white uppercase leading-[0.88] tracking-tight"
                style={{
                  fontSize: 'clamp(3.2rem, 9.5vw, 9rem)',
                  textShadow: '0 2px 40px rgba(0,0,0,0.5)',
                }}
                itemProp="headline"
              >
                {/* Line 1 — typing */}
                <span className="block">
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={lineIndex + '-typed'}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="relative"
                      style={{
                        background: 'linear-gradient(135deg, #ffffff 0%, #bfdbfe 45%, #93c5fd 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                      }}
                    >
                      {typedText || '\u00A0'}
                    </motion.span>
                  </AnimatePresence>
                  {/* Blinking cursor */}
                  <motion.span
                    animate={{ opacity: [1, 0, 1] }}
                    transition={{ duration: 0.85, repeat: Infinity }}
                    className="inline-block align-bottom ml-1 rounded-sm bg-blue-400"
                    style={{
                      width: 'clamp(3px, 0.55vw, 6px)',
                      height: 'clamp(2.8rem, 8.5vw, 8.2rem)',
                    }}
                    aria-hidden="true"
                  />
                </span>

                {/* Line 2 — static white */}
                <motion.span
                  key={lineIndex + '-static'}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.55, delay: 0.1 }}
                  className="block text-white/90"
                >
                  {currentLine.static}
                </motion.span>
              </motion.h1>
            </div>

            {/* ── Bottom bar: description left, CTAs right ──────────────── */}
            <div className="mt-10 sm:mt-12 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-8">

              {/* Left — description + stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
                className="max-w-sm"
              >
                <p
                  className="text-white/55 text-[13px] sm:text-[14px] leading-relaxed mb-5 font-medium"
                  itemProp="description"
                >
                  We architect layered digital ecosystems — strategy, design,
                  technology, brand, media & growth — working as one unified
                  system to make your brand dominant and future-ready.
                </p>

                {/* Mini stats */}
                <div className="flex items-center gap-5">
                  {[
                    { val: '500+', lbl: 'Brands' },
                    { val: '6',    lbl: 'Layers'  },
                    { val: '98%',  lbl: 'Retention' },
                  ].map((s, i) => (
                    <div key={i} className="flex flex-col">
                      <span className="text-white font-black text-[17px] leading-none">{s.val}</span>
                      <span className="text-white/35 text-[10px] font-semibold uppercase tracking-widest mt-0.5">{s.lbl}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Right — CTA buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 1.05, ease: [0.22, 1, 0.36, 1] }}
                className="flex items-center gap-3 flex-wrap sm:flex-nowrap flex-shrink-0"
              >
                {/* Primary CTA */}
                <Link href="/contact/project" aria-label="Start your project with BitLayerX">
                  <motion.button
                    whileHover={{ scale: 1.04, y: -2 }}
                    whileTap={{ scale: 0.97 }}
                    className="group relative flex items-center gap-2.5 px-7 py-3.5 font-black text-[13px] rounded-full overflow-hidden text-white tracking-wide transition-all duration-300"
                    style={{
                      background: 'linear-gradient(135deg, #1d4ed8 0%, #2563eb 50%, #1e40af 100%)',
                      boxShadow: '0 8px 32px rgba(37,99,235,0.45)',
                    }}
                  >
                    {/* Shimmer */}
                    <motion.div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100"
                      style={{
                        background:
                          'linear-gradient(105deg, transparent 30%, rgba(255,255,255,0.14) 50%, transparent 70%)',
                        transition: 'opacity 0.4s',
                      }}
                      animate={{ x: ['-100%', '200%'] }}
                      transition={{ duration: 1.4, repeat: Infinity, ease: 'easeInOut', repeatDelay: 1.2 }}
                    />
                    <Rocket
                      size={15}
                      strokeWidth={2.5}
                      className="relative z-10 group-hover:rotate-12 transition-transform duration-300"
                    />
                    <span className="relative z-10">Start Your Project</span>
                    <ArrowRight
                      size={14}
                      strokeWidth={3}
                      className="relative z-10 group-hover:translate-x-1 transition-transform duration-200"
                    />
                  </motion.button>
                </Link>

                {/* Secondary CTA — outlined pill (matches reference) */}
                <Link href="/work" aria-label="View BitLayerX portfolio">
                  <motion.button
                    whileHover={{ scale: 1.04, y: -2, backgroundColor: 'rgba(255,255,255,0.12)' }}
                    whileTap={{ scale: 0.97 }}
                    className="group flex items-center gap-2.5 px-7 py-3.5 font-bold text-[13px] rounded-full border border-white/30 hover:border-white/60 bg-black/20 backdrop-blur-md text-white/80 hover:text-white tracking-wide transition-all duration-300"
                  >
                    <div className="w-6 h-6 rounded-full bg-white/15 group-hover:bg-white/25 flex items-center justify-center transition-colors duration-300 flex-shrink-0">
                      <Play size={9} className="text-white ml-0.5" fill="currentColor" strokeWidth={0} />
                    </div>
                    View Our Work
                  </motion.button>
                </Link>
              </motion.div>
            </div>
          </div>
        </div>

        {/* ── "Featured In" logos strip — bottom edge ────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.3, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10 w-full border-t border-white/8 bg-black/35 backdrop-blur-md"
        >
          <div className="max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16 py-4 flex flex-col sm:flex-row items-center gap-5 sm:gap-8">

            {/* Label */}
            <div className="flex items-center gap-2.5 flex-shrink-0">
              <div className="w-1.5 h-1.5 rounded-full bg-blue-400" />
              <span className="text-white/30 text-[10px] font-black tracking-[0.22em] uppercase">
                Featured In
              </span>
            </div>

            {/* Separator */}
            <div className="hidden sm:block w-px h-4 bg-white/10" />

            {/* Logo list */}
            <div className="flex items-center gap-6 sm:gap-8 overflow-x-auto pb-0.5 scrollbar-none">
              {LOGOS.map((logo, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.4 + i * 0.06, duration: 0.5 }}
                  className="text-white/25 hover:text-white/55 font-black text-[11px] sm:text-[12px] tracking-widest uppercase whitespace-nowrap transition-colors duration-200 cursor-default flex-shrink-0"
                >
                  {logo}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* ── Scroll indicator ──────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 0.8 }}
          className="absolute bottom-20 right-6 sm:right-10 lg:right-16 z-10 hidden lg:flex flex-col items-center gap-2"
          aria-hidden="true"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
            className="w-5 h-9 border border-white/20 rounded-full flex items-start justify-center pt-1.5"
          >
            <motion.div
              animate={{ opacity: [0.3, 1, 0.3], scaleY: [0.5, 1, 0.5] }}
              transition={{ duration: 1.8, repeat: Infinity }}
              className="w-1 h-2.5 rounded-full bg-blue-400"
            />
          </motion.div>
          <span className="text-[9px] font-bold text-white/25 uppercase tracking-[0.22em] rotate-90 origin-center mt-1">
            Scroll
          </span>
        </motion.div>

      </section>
    </div>
  );
}