"use client";

import React, { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import Link from "next/link";
import {
  Target,
  Eye,
  GitBranch,
  Award,
  Video,
  TrendingUp,
  ArrowRight,
  CheckCircle2,
  Layers,
  ChevronRight,
} from "lucide-react";

// ─── Layer Data ───────────────────────────────────────────────────────────────
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
    lightColor: "#EFF6FF",
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
    lightColor: "#EFF6FF",
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
    lightColor: "#EFF6FF",
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
    lightColor: "#EFF6FF",
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
    lightColor: "#F0F9FF",
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
    lightColor: "#EFF6FF",
    href: "/layered-approach/growth",
  },
];

// ─── Animation helpers ────────────────────────────────────────────────────────
const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09 } },
};

// ─── Layer Card ───────────────────────────────────────────────────────────────
function LayerCard({ layer, index, isActive, onClick }) {
  const Icon = layer.icon;

  return (
    <motion.button
      variants={fadeUp}
      onClick={() => onClick(index)}
      className={`group relative w-full text-left border transition-all duration-300 overflow-hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0818A8] focus-visible:ring-offset-2 ${
        isActive
          ? "border-[#0818A8] shadow-xl shadow-[#000080]/12 bg-white"
          : "border-gray-100 bg-white hover:border-gray-200 hover:shadow-lg hover:shadow-gray-100/80"
      }`}
      aria-expanded={isActive}
      aria-label={`${layer.label}: ${layer.title}`}
    >
      {/* Active left accent bar */}
      <div
        className={`absolute left-0 top-0 bottom-0 w-[3px] transition-all duration-300 ${
          isActive ? "opacity-100" : "opacity-0 group-hover:opacity-40"
        }`}
        style={{ backgroundColor: layer.color }}
      />

      {/* Card header — always visible */}
      <div className="flex items-center gap-4 p-5 lg:p-6">
        {/* Number */}
        <span
          className={`font-black font-mono text-[11px] tracking-widest flex-shrink-0 transition-colors duration-300 ${
            isActive ? "opacity-100" : "opacity-30"
          }`}
          style={{ color: layer.color }}
        >
          {layer.number}
        </span>

        {/* Icon */}
        <div
          className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
            isActive ? "shadow-md" : ""
          }`}
          style={{
            backgroundColor: isActive ? layer.color + "18" : "#F3F4F6",
          }}
        >
          <Icon
            size={18}
            strokeWidth={2}
            className="transition-colors duration-300"
            style={{ color: isActive ? layer.color : "#9CA3AF" }}
          />
        </div>

        {/* Label + title */}
        <div className="flex-1 min-w-0">
          <p
            className="text-[10px] font-black tracking-[0.16em] uppercase mb-0.5 transition-colors duration-300"
            style={{ color: isActive ? layer.color : "#9CA3AF" }}
          >
            {layer.label}
          </p>
          <p
            className={`text-[14px] font-bold leading-tight truncate transition-colors duration-300 ${
              isActive ? "text-[#000080]" : "text-gray-600 group-hover:text-gray-800"
            }`}
          >
            {layer.title}
          </p>
        </div>

        {/* Chevron */}
        <ChevronRight
          size={16}
          strokeWidth={2.5}
          className={`flex-shrink-0 transition-all duration-300 ${
            isActive
              ? "rotate-90 text-[#0818A8]"
              : "text-gray-300 group-hover:text-gray-400"
          }`}
        />
      </div>

      {/* Expandable content (mobile accordion) */}
      <AnimatePresence initial={false}>
        {isActive && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden lg:hidden"
          >
            <div className="px-5 pb-6 pt-1 border-t border-gray-50">
              <p className="text-gray-500 text-[13px] leading-relaxed mb-4">
                {layer.benefit}
              </p>
              <ul className="space-y-2 mb-4">
                {layer.outcomes.map((o, j) => (
                  <li key={j} className="flex items-center gap-2">
                    <CheckCircle2
                      size={13}
                      strokeWidth={2.5}
                      style={{ color: layer.color }}
                      className="flex-shrink-0"
                    />
                    <span className="text-gray-600 text-[12px] font-medium">{o}</span>
                  </li>
                ))}
              </ul>
              <Link
                href={layer.href}
                className="inline-flex items-center gap-1.5 text-[12px] font-black uppercase tracking-wide hover:opacity-80 transition-opacity"
                style={{ color: layer.color }}
                onClick={(e) => e.stopPropagation()}
              >
                Explore Layer <ArrowRight size={12} strokeWidth={3} />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.button>
  );
}

// ─── Detail Panel (desktop) ───────────────────────────────────────────────────
function DetailPanel({ layer }) {
  const Icon = layer.icon;

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={layer.id}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -20 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="hidden lg:flex flex-col justify-between h-full p-10 xl:p-12 relative overflow-hidden bg-white border border-gray-100 shadow-xl shadow-gray-100/80"
      >
        {/* Large background number */}
        <div
          className="absolute top-6 right-8 text-[160px] xl:text-[200px] font-black leading-none select-none pointer-events-none"
          style={{ color: layer.color + "06" }}
          aria-hidden="true"
        >
          {layer.number}
        </div>

        {/* Top accent bar */}
        <div
          className="absolute top-0 left-0 right-0 h-[3px]"
          style={{
            background: `linear-gradient(90deg, ${layer.color} 0%, ${layer.color}60 60%, transparent 100%)`,
          }}
        />

        <div className="relative z-10 flex flex-col h-full">
          {/* Icon + label */}
          <div className="flex items-center gap-4 mb-8">
            <div
              className="w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg flex-shrink-0"
              style={{ backgroundColor: layer.color + "15" }}
            >
              <Icon size={26} strokeWidth={1.75} style={{ color: layer.color }} />
            </div>
            <div>
              <p
                className="text-[10px] font-black tracking-[0.2em] uppercase mb-1"
                style={{ color: layer.color }}
              >
                {layer.label}
              </p>
              <p className="text-gray-300 text-[12px] font-semibold tracking-wide">
                {layer.tagline}
              </p>
            </div>
          </div>

          {/* Title */}
          <h3 className="text-3xl xl:text-4xl font-black text-[#000080] uppercase leading-tight tracking-tight mb-5">
            {layer.title}
          </h3>

          {/* Benefit */}
          <p className="text-gray-500 text-[15px] leading-relaxed mb-8 max-w-md">
            {layer.benefit}
          </p>

          {/* Outcomes */}
          <div className="grid grid-cols-2 gap-2.5 mb-auto">
            {layer.outcomes.map((o, j) => (
              <motion.div
                key={j}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: j * 0.07, duration: 0.4 }}
                className="flex items-center gap-2.5 p-3 rounded-xl bg-gray-50"
              >
                <CheckCircle2
                  size={14}
                  strokeWidth={2.5}
                  style={{ color: layer.color }}
                  className="flex-shrink-0"
                />
                <span className="text-gray-600 text-[12px] font-semibold leading-tight">
                  {o}
                </span>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-10 pt-7 border-t border-gray-100 flex items-center justify-between">
            <Link
              href={layer.href}
              className="inline-flex items-center gap-2.5 px-6 py-3 font-black text-[13px] text-white rounded-xl transition-all duration-200 hover:opacity-90 shadow-lg group"
              style={{
                background: `linear-gradient(135deg, ${layer.color} 0%, ${layer.color}dd 100%)`,
                boxShadow: `0 8px 24px ${layer.color}30`,
              }}
            >
              Explore {layer.title}
              <ArrowRight
                size={14}
                strokeWidth={3}
                className="group-hover:translate-x-0.5 transition-transform"
              />
            </Link>

            {/* Layer dot indicators */}
            <div className="flex items-center gap-1.5">
              {LAYERS.map((l, i) => (
                <div
                  key={i}
                  className="rounded-full transition-all duration-300"
                  style={{
                    width: l.id === layer.id ? 20 : 6,
                    height: 6,
                    backgroundColor:
                      l.id === layer.id ? layer.color : "#E5E7EB",
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

// ─── Connection line (decorative, desktop) ────────────────────────────────────
function LayerConnector({ color }) {
  return (
    <div className="hidden lg:flex items-center justify-center h-px my-0 relative overflow-hidden">
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="absolute inset-0"
        style={{ backgroundColor: color + "20", transformOrigin: "left" }}
      />
    </div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────
export default function LayeredApproachPreview() {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, margin: "-80px" });
  const activeLayer = LAYERS[activeIndex];

  return (
    <section
      ref={sectionRef}
      className="bg-white py-24 lg:py-32 overflow-hidden"
      aria-labelledby="layers-heading"
      itemScope
      itemType="https://schema.org/ItemList"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">

        {/* ── Section header ─────────────────────────────────────────────── */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-8 rounded-lg bg-[#000080]/8 flex items-center justify-center">
                <Layers size={16} strokeWidth={2} className="text-[#0818A8]" />
              </div>
              <p className="text-[#0818A8] text-[11px] font-black tracking-[0.22em] uppercase">
                The BitLayerX Method
              </p>
            </div>

            <h2
              id="layers-heading"
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-[#000080] uppercase leading-[0.92] tracking-tight"
            >
              EVERYTHING
              <br />
              IS A{" "}
              <span
                style={{
                  background:
                    "linear-gradient(135deg, #0818A8 0%, #2563EB 50%, #0818A8 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                LAYER
              </span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 28 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.65, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="lg:max-w-xs"
          >
            <p className="text-gray-400 text-[14px] leading-relaxed mb-5 lg:text-right">
              Six precision layers, engineered to integrate seamlessly — creating
              one cohesive digital engine, not fragmented solutions.
            </p>
            <div className="lg:flex lg:justify-end">
              <Link
                href="/layered-approach"
                className="inline-flex items-center gap-2 text-[#000080] font-black text-[13px] uppercase tracking-wide hover:text-[#0818A8] transition-colors group"
              >
                See Full Approach
                <ArrowRight
                  size={14}
                  strokeWidth={3}
                  className="group-hover:translate-x-0.5 transition-transform"
                />
              </Link>
            </div>
          </motion.div>
        </div>

        {/* ── Layer counter strip ─────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="flex items-center gap-0 mb-8 overflow-x-auto pb-2 scrollbar-none"
        >
          {LAYERS.map((layer, i) => {
            const Icon = layer.icon;
            const isActive = i === activeIndex;
            return (
              <button
                key={layer.id}
                onClick={() => setActiveIndex(i)}
                className={`flex-shrink-0 flex items-center gap-2 px-4 py-2 border-b-2 transition-all duration-300 text-[12px] font-bold ${
                  isActive
                    ? "border-[#0818A8] text-[#000080]"
                    : "border-transparent text-gray-300 hover:text-gray-500 hover:border-gray-200"
                }`}
                aria-label={layer.label}
              >
                <Icon
                  size={13}
                  strokeWidth={2.5}
                  style={{ color: isActive ? layer.color : undefined }}
                />
                <span className="hidden sm:inline whitespace-nowrap">{layer.label}</span>
                <span className="sm:hidden font-mono">{layer.number}</span>
              </button>
            );
          })}
          {/* Progress bar */}
          <div className="flex-1 border-b-2 border-gray-100" />
        </motion.div>

        {/* ── Main grid: Cards + Detail ───────────────────────────────────── */}
        <div className="grid lg:grid-cols-[1fr_480px] xl:grid-cols-[1fr_520px] gap-4 lg:gap-6 items-start">

          {/* Left: card list */}
          <motion.div
            variants={stagger}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            className="space-y-2"
          >
            {LAYERS.map((layer, i) => (
              <LayerCard
                key={layer.id}
                layer={layer}
                index={i}
                isActive={activeIndex === i}
                onClick={setActiveIndex}
              />
            ))}
          </motion.div>

          {/* Right: detail panel (desktop only) */}
          <div className="sticky top-28 self-start">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="min-h-[560px] xl:min-h-[600px]"
            >
              <DetailPanel layer={activeLayer} />
            </motion.div>
          </div>

        </div>

        {/* ── Bottom CTA ──────────────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 flex flex-col sm:flex-row items-center justify-between gap-6 p-8 bg-gray-50 border border-gray-100"
        >
          <div>
            <p className="text-[#000080] font-black text-[16px] lg:text-[18px] uppercase tracking-tight mb-1">
              Ready to build your layered digital ecosystem?
            </p>
            <p className="text-gray-400 text-[13px]">
              Every layer we add strengthens the one beneath it.
            </p>
          </div>
          <div className="flex items-center gap-3 flex-shrink-0">
            <Link
              href="/packages"
              className="inline-flex items-center gap-2 px-6 py-3 border border-[#000080]/20 text-[#000080] font-bold text-[13px] hover:border-[#000080]/50 hover:bg-[#000080]/4 transition-all duration-200 rounded-xl"
            >
              View Packages
            </Link>
            <Link
              href="/contact/project"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#000080] hover:bg-[#0818A8] text-white font-black text-[13px] rounded-xl transition-all duration-200 shadow-lg shadow-[#000080]/20 group"
            >
              Start Building
              <ArrowRight
                size={14}
                strokeWidth={3}
                className="group-hover:translate-x-0.5 transition-transform"
              />
            </Link>
          </div>
        </motion.div>

      </div>
    </section>
  );
}