"use client";

import React, { useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Play, Target, Eye, GitBranch, Award, Video, TrendingUp, Layers, CheckCircle2 } from "lucide-react";

// ─── Font injection ─────────────────────────────────────────────────────────
const FONT_URL =
  "https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400&display=swap";

// ─── Layer Data (from existing LayeredApproachPreview) ──────────────────────
const LAYERS = [
  {
    number: "01",
    id: "strategy",
    icon: Target,
    label: "Strategy Layer",
    title: "Strategy & Positioning",
    tagline: "Vision. Roadmap. Direction.",
    benefit:
      "Every great digital system starts with clarity. We define your market position, growth roadmap, and strategic blueprint before a single pixel is designed or line of code is written.",
    outcomes: [
      "Brand & market positioning",
      "Digital growth roadmap",
      "Competitive intelligence",
      "Revenue strategy",
    ],
    color: "#0818A8",
    href: "/layered-approach/strategy",
  },
  {
    number: "02",
    id: "experience",
    icon: Eye,
    label: "Experience Layer",
    title: "UI/UX & Product Design",
    tagline: "Intuitive. Engaging. Converting.",
    benefit:
      "We design digital experiences around how your users think, feel, and decide. Every interface is a carefully engineered journey — from first impression to loyal customer.",
    outcomes: [
      "User research & journey mapping",
      "Wireframing & prototyping",
      "Conversion-first design",
      "Product strategy",
    ],
    color: "#1D4ED8",
    href: "/layered-approach/experience",
  },
  {
    number: "03",
    id: "technology",
    icon: GitBranch,
    label: "Technology Layer",
    title: "Web, Mobile & Software",
    tagline: "Fast. Scalable. Engineered.",
    benefit:
      "We build the digital infrastructure your business runs on — from high-performance websites to complex custom applications and enterprise-grade software systems.",
    outcomes: [
      "Custom web & mobile apps",
      "Scalable cloud architecture",
      "API development & integrations",
      "Software engineering",
    ],
    color: "#2563EB",
    href: "/layered-approach/technology",
  },
  {
    number: "04",
    id: "brand",
    icon: Award,
    label: "Brand Layer",
    title: "Branding & Identity",
    tagline: "Memorable. Differentiated. Powerful.",
    benefit:
      "A brand that commands attention, builds trust, and communicates value before a word is spoken. We craft complete brand systems that make you the obvious choice.",
    outcomes: [
      "Logo & visual identity system",
      "Brand guidelines & voice",
      "Messaging & positioning",
      "Brand evolution strategy",
    ],
    color: "#000080",
    href: "/layered-approach/brand",
  },
  {
    number: "05",
    id: "media",
    icon: Video,
    label: "Media Layer",
    title: "Commercials & Video",
    tagline: "Cinematic. Compelling. Impactful.",
    benefit:
      "Nothing builds trust and drives action faster than great video. We produce high-impact commercials, brand films, and ad creatives that make your brand impossible to ignore.",
    outcomes: [
      "Brand & commercial films",
      "Performance ad creatives",
      "Social content production",
      "Product launch campaigns",
    ],
    color: "#0369A1",
    href: "/layered-approach/media",
  },
  {
    number: "06",
    id: "growth",
    icon: TrendingUp,
    label: "Growth Layer",
    title: "Digital Marketing & Growth",
    tagline: "Data-Driven. Relentless. Compounding.",
    benefit:
      "We deploy performance marketing systems that grow more powerful every month — combining SEO, paid advertising, email, and content into one compounding growth engine.",
    outcomes: [
      "SEO & content marketing",
      "Paid advertising (Meta, Google)",
      "Email & automation campaigns",
      "Analytics & optimisation",
    ],
    color: "#1E40AF",
    href: "/layered-approach/growth",
  },
];

// ─── Partner / credential logos (text-based, matching reference style) ───────
const PARTNERS = [
  { name: "Strategy", weight: "700" },
  { name: "Design", weight: "400" },
  { name: "Technology", weight: "700" },
];

// ─── Abstract Blue Shape (SVG — matches the 3D ribbon/wave in reference) ─────
function BlueShape() {
  return (
    <svg
      viewBox="0 0 420 520"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="g1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1D4ED8" />
          <stop offset="50%" stopColor="#2563EB" />
          <stop offset="100%" stopColor="#3B82F6" />
        </linearGradient>
        <linearGradient id="g2" x1="100%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#1E40AF" />
          <stop offset="60%" stopColor="#2563EB" />
          <stop offset="100%" stopColor="#60A5FA" />
        </linearGradient>
        <linearGradient id="g3" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#1D4ED8" stopOpacity="0.7" />
          <stop offset="100%" stopColor="#93C5FD" stopOpacity="0.9" />
        </linearGradient>
        <filter id="blur1">
          <feGaussianBlur stdDeviation="2" />
        </filter>
      </defs>

      {/* Outer ribbon — main body */}
      <path
        d="M 380 60
           C 420 80, 440 160, 400 240
           C 360 320, 280 340, 240 400
           C 200 460, 220 510, 180 530
           L 120 520
           C 100 500, 140 450, 160 390
           C 180 330, 120 290, 100 220
           C 80 150, 140 80, 200 50
           C 260 20, 340 40, 380 60 Z"
        fill="url(#g1)"
        opacity="0.95"
      />

      {/* Middle ribbon band — lighter highlight */}
      <path
        d="M 350 80
           C 390 110, 400 180, 360 255
           C 320 330, 245 350, 210 410
           C 190 450, 200 500, 165 520
           L 145 518
           C 175 498, 168 450, 185 408
           C 210 348, 285 325, 320 250
           C 356 175, 345 105, 310 78
           Z"
        fill="url(#g2)"
        opacity="0.7"
      />

      {/* Inner highlight strip */}
      <path
        d="M 310 95
           C 345 130, 345 200, 305 275
           C 275 335, 225 358, 200 408
           C 185 438, 190 475, 168 505
           L 155 508
           C 174 478, 170 440, 183 410
           C 208 358, 258 334, 288 272
           C 325 196, 323 126, 288 93
           Z"
        fill="url(#g3)"
        opacity="0.85"
      />

      {/* Edge glow / reflection */}
      <path
        d="M 270 108
           C 298 138, 298 205, 262 278
           C 245 315, 220 338, 205 372
           L 195 368
           C 210 334, 234 312, 250 275
           C 285 200, 283 132, 255 103
           Z"
        fill="#93C5FD"
        opacity="0.5"
        filter="url(#blur1)"
      />

      {/* Top highlight dot */}
      <ellipse cx="345" cy="85" rx="18" ry="10" fill="#BFDBFE" opacity="0.6" transform="rotate(-30 345 85)" />
    </svg>
  );
}

// ─── Video Thumbnail Card (LEFT card) ────────────────────────────────────────
function VideoCard() {
  const [hovered, setHovered] = useState(false);

  return (
    <article
      className="relative bg-white border border-gray-200 rounded-2xl overflow-hidden flex flex-col h-full"
      style={{ boxShadow: "0 2px 16px rgba(0,0,80,0.06)" }}
      aria-label="BitLayerX — The Layered Approach video"
    >
      {/* Top label */}
      <div className="px-6 pt-6 pb-4">
        <p
          className="text-[15px] font-semibold tracking-[0.22em] text-black/80 uppercase mb-3"
          style={{ fontFamily: "'Montserrat', sans-serif" }}
        >
          The BitLayerX Method
        </p>
        <h2
          className="text-[17px] sm:text-[19px] font-bold leading-snug"
          style={{ fontFamily: "'Montserrat', sans-serif" }}
        >
          <span className="text-[#0818A8]">Watch How BitLayerX Builds</span>{" "}
          <span className="text-gray-900">the Digital Ecosystem of Tomorrow</span>
        </h2>
      </div>

      {/* Video thumbnail */}
      <div
        className="relative flex-1 mx-4 mb-4 rounded-xl overflow-hidden cursor-pointer min-h-[220px] sm:min-h-[260px] group"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        role="button"
        tabIndex={0}
        aria-label="Play BitLayerX overview video"
        onKeyDown={(e) => e.key === "Enter" && e.currentTarget.click()}
      >
        <Image
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=500&fit=crop&q=85"
          alt="BitLayerX team building digital ecosystems — strategy, design, technology"
          fill
          className="object-cover transition-transform duration-700"
          style={{ transform: hovered ? "scale(1.04)" : "scale(1)" }}
          sizes="(max-width: 768px) 100vw, 50vw"
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

        {/* Overlay text — matches "Fully automated system" from reference */}
        <div className="absolute inset-0 flex flex-col justify-end p-5">
          <p
            className="text-white/60 text-[15px] font-semibold uppercase tracking-widest mb-1"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            Six Precision
          </p>
          <p
            className="text-white font-black leading-none uppercase"
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontSize: "clamp(1.6rem, 4vw, 2.4rem)",
              textShadow: "0 2px 12px rgba(0,0,0,0.4)",
            }}
          >
            Layers.
            <br />
            One Engine.
          </p>
        </div>

        {/* Play button — red circle matching reference */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div
            className="w-14 h-14 rounded-full flex items-center justify-center transition-transform duration-300 shadow-2xl"
            style={{
              background: "#DC2626",
              transform: hovered ? "scale(1.12)" : "scale(1)",
              boxShadow: "0 8px 32px rgba(220,38,38,0.5)",
            }}
          >
            <Play size={20} strokeWidth={0} className="fill-white ml-1" />
          </div>
        </div>

        {/* Corner arrow icon — matches reference */}
        <div
          className="absolute top-3 left-3 w-8 h-8 rounded-full border border-white/40 flex items-center justify-center"
          aria-hidden="true"
        >
          <ArrowRight size={12} className="text-white/70 -rotate-45" strokeWidth={2} />
        </div>
      </div>
    </article>
  );
}

// ─── Text + CTA Card (RIGHT card) ─────────────────────────────────────────────
function TextCard() {
  return (
    <article
      className="relative bg-white border border-gray-200 rounded-2xl overflow-hidden flex h-full"
      style={{ boxShadow: "0 2px 16px rgba(0,0,80,0.06)" }}
      aria-label="BitLayerX — Digital innovation company overview"
      itemScope
      itemType="https://schema.org/Organization"
    >
      {/* LEFT: Text content */}
      <div className="flex flex-col justify-between p-7 sm:p-8 xl:p-10 flex-1 min-w-0">

        {/* Body text — mixed color like reference */}
        <div>
          <h2
            className="text-[22px] sm:text-[26px] xl:text-[30px] font-normal leading-[1.25] text-gray-800 mb-5"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
            itemProp="description"
          >
            <span className="font-black text-[#0818A8]" itemProp="name">BitLayerX</span>{" "}
            is a{" "}
            <span className="text-gray-800 font-normal">forward-thinking digital</span>{" "}
            <span className="font-bold text-[#0818A8]">innovation company</span>{" "}
            <span className="text-gray-800 font-normal">
              delivering layered digital ecosystems.
            </span>
          </h2>

          <p
            className="text-black/80 text-[15px] sm:text-[16px] leading-relaxed mb-6 max-w-sm"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            We combine strategy, design, technology, brand, media and growth —
            all in one cohesive, compounding ecosystem built to dominate your market.
          </p>

          {/* Partner-style credential strip — matches "From those who built: Binance, Morgan Stanley, Revolut" */}
          <div className="mb-8">
            <p
              className="text-[15px] text-black/80 font-semibold uppercase tracking-[0.18em] mb-3"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              Six service layers:
            </p>
            <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
              {LAYERS.map((layer) => {
                const Icon = layer.icon;
                return (
                  <div key={layer.id} className="flex items-center gap-1.5">
                    <Icon size={11} strokeWidth={2.5} style={{ color: layer.color }} />
                    <span
                      className="text-[16px] font-bold text-black/80"
                      style={{ fontFamily: "'Montserrat', sans-serif" }}
                    >
                      {layer.title.split(" ")[0]}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* CTA button — pill with arrow, matching reference exactly */}
        <div>
          <Link
            href="/layered-approach"
            className="group inline-flex items-center justify-between w-full max-w-[280px] sm:max-w-[320px] rounded-full font-bold text-[16px] text-white overflow-hidden transition-all duration-200 hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-[#0818A8] focus:ring-offset-2"
            style={{
              background: "linear-gradient(90deg, #1D4ED8 0%, #2563EB 100%)",
              boxShadow: "0 4px 20px rgba(29,78,216,0.35)",
              fontFamily: "'Montserrat', sans-serif",
            }}
            aria-label="Explore the BitLayerX layered approach"
          >
            <span className="flex-1 text-center pl-7 pr-2 py-4 text-[16px] font-semibold tracking-wide">
              Explore Our Approach
            </span>
            <span
              className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center mr-1 my-1 transition-transform duration-200 group-hover:translate-x-0.5"
              style={{ background: "rgba(255,255,255,0.2)" }}
              aria-hidden="true"
            >
              <ArrowRight size={18} strokeWidth={2.5} className="text-white" />
            </span>
          </Link>
        </div>
      </div>

      {/* RIGHT: Abstract blue shape — overflowing, exactly as in reference */}
      <div
        className="hidden lg:block relative flex-shrink-0 overflow-hidden"
        style={{ width: "clamp(140px, 22%, 200px)" }}
        aria-hidden="true"
      >
        {/* Shape bleeds off the right edge */}
        <div
          className="absolute"
          style={{
            top: "-10%",
            right: "-35%",
            width: "160%",
            height: "120%",
          }}
        >
          <BlueShape />
        </div>
      </div>
    </article>
  );
}

// ─── Main Section ─────────────────────────────────────────────────────────────
export default function LayeredApproachShowcase() {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);

  // Simple intersection observer (no Framer Motion dependency for scroll)
  React.useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  return (
    <>
      {/* Font */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="stylesheet" href={FONT_URL} />

      {/* SEO Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "BitLayerX",
            url: "https://bitlayerx.com",
            description:
              "BitLayerX is a forward-thinking digital innovation company delivering layered digital ecosystems — strategy, design, technology, brand, media, and growth.",
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "Six Service Layers",
              numberOfItems: 6,
            },
          }),
        }}
      />

      <section
        ref={sectionRef}
        className="bg-[#F3F4F6] py-10 sm:py-14"
        aria-labelledby="approach-heading"
        style={{ fontFamily: "'Montserrat', sans-serif" }}
      >
        {/* Visually-hidden heading for SEO/a11y */}
        <h2 id="approach-heading" className="sr-only">
          BitLayerX — The Layered Approach to Digital Innovation
        </h2>

        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">

          {/* ── Two-card grid — exactly matching reference layout ─────────── */}
          <div
            className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-5"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(24px)",
              transition: "opacity 0.7s cubic-bezier(0.22,1,0.36,1), transform 0.7s cubic-bezier(0.22,1,0.36,1)",
            }}
          >
            {/* LEFT — Video card */}
            <div
              className="min-h-[420px] sm:min-h-[480px]"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(20px)",
                transition: "opacity 0.7s 0.05s cubic-bezier(0.22,1,0.36,1), transform 0.7s 0.05s cubic-bezier(0.22,1,0.36,1)",
              }}
            >
              <VideoCard />
            </div>

            {/* RIGHT — Text + shape card */}
            <div
              className="min-h-[420px] sm:min-h-[480px]"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(20px)",
                transition: "opacity 0.7s 0.12s cubic-bezier(0.22,1,0.36,1), transform 0.7s 0.12s cubic-bezier(0.22,1,0.36,1)",
              }}
            >
              <TextCard />
            </div>
          </div>

          {/* ── Layer pills strip below cards ─────────────────────────────── */}
          <div
            className="mt-5 flex flex-wrap items-center gap-2"
            style={{
              opacity: visible ? 1 : 0,
              transition: "opacity 0.6s 0.3s ease",
            }}
          >
            {LAYERS.map((layer) => {
              const Icon = layer.icon;
              return (
                <Link
                  key={layer.id}
                  href={layer.href}
                  className="group flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-full hover:border-[#0818A8]/30 hover:shadow-md transition-all duration-200"
                  style={{ boxShadow: "0 1px 4px rgba(0,0,80,0.04)" }}
                  aria-label={`Explore ${layer.title}`}
                >
                  <Icon
                    size={12}
                    strokeWidth={2.5}
                    style={{ color: layer.color }}
                    className="flex-shrink-0"
                  />
                  <span
                    className="text-[11.5px] font-semibold text-black/80 group-hover:text-[#0818A8] transition-colors whitespace-nowrap"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    {layer.title}
                  </span>
                  <span
                    className="text-[15px] font-black text-gray-300 group-hover:text-[#0818A8]/40 transition-colors"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    {layer.number}
                  </span>
                </Link>
              );
            })}

            {/* See all link */}
            <Link
              href="/layered-approach"
              className="flex items-center gap-1.5 px-4 py-2 text-[11.5px] font-bold text-[#0818A8] hover:underline transition-all"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              See all layers
              <ArrowRight size={11} strokeWidth={3} />
            </Link>
          </div>

        </div>
      </section>
    </>
  );
}