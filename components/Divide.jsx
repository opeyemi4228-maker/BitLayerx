"use client";

import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight, Landmark, Truck, Home, ShoppingCart,
  Factory, ChevronRight, Target, Layers,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
};

const stagger = (d = 0.11) => ({
  hidden: {},
  show: { transition: { staggerChildren: d } },
});

function FadeIn({ children, className = "", delay = 0, direction = "up" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-70px" });
  return (
    <motion.div ref={ref}
      initial={{ opacity: 0, y: direction === "up" ? 28 : direction === "down" ? -28 : 0, x: direction === "left" ? 28 : direction === "right" ? -28 : 0 }}
      animate={inView ? { opacity: 1, y: 0, x: 0 } : {}}
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}>
      {children}
    </motion.div>
  );
}

const INDUSTRIES = [
  {
    icon: Landmark,     label: "Fintech",
    description: "Payment infrastructure, investment apps and digital banking, built to pass review and survive a bad network.",
    stats: ["Payment platforms", "KYC & compliance systems"],
    color: "#0040FF",
    href: "/industries",
  },
  {
    icon: Truck,        label: "Logistics",
    description: "Fleet management, real-time tracking and dispatch automation for operations that outgrew spreadsheets.",
    stats: ["Fleet management", "Client portals"],
    color: "#0040FF",
    href: "/industries",
  },
  {
    icon: Home,         label: "Real Estate",
    description: "Listing platforms, developer brand identities and project films that let you compete at the top of the market.",
    stats: ["Property platforms", "Brand & film"],
    color: "#0040FF",
    href: "/industries",
  },
  {
    icon: ShoppingCart, label: "E-commerce",            
    description: "Storefronts and marketplaces built to convert, with the marketing that feeds them run by the same team.",
    stats: ["Custom storefronts", "Performance ads"],
    color: "#0040FF",
    href: "/industries",
  },
  {
    icon: Factory,      label: "Corporate & Enterprise", 
    description: "Internal systems, ERP integrations and brand governance, long engagements with procurement in the room.",
    stats: ["Enterprise platforms", "ERP integrations"],
    color: "#0040FF",
    href: "/industries",
  },
];

// ─── INDUSTRIES ───────────────────────────────────────────────────────────────
function IndustriesSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [hovered, setHovered] = useState(null);

  return (
    <section className="bg-white py-24 lg:py-32 overflow-hidden" aria-labelledby="industries-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">

        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16 lg:mb-20">
          <FadeIn direction="right">
            <p className="text-[#0040FF] text-[15px] font-black tracking-[0.22em] uppercase mb-4 flex items-center gap-2">
              <Target size={13} strokeWidth={2.5} /> Specialists, Not Generalists
            </p>
            <h2 id="industries-heading"
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-[#0040FF] uppercase leading-[0.92] tracking-tight">
              INDUSTRIES<br /><span className="text-[#0040FF]">WE POWER</span>
            </h2>
          </FadeIn>
          <FadeIn direction="left" delay={0.1} className="lg:max-w-sm">
            <p className="text-black/80 text-[16px] leading-relaxed lg:text-right">
              We don't work with everyone, we go deep in the industries where
              our layered approach creates the most measurable impact.
            </p>
          </FadeIn>
        </div>

        <motion.div ref={ref} variants={stagger(0.1)} initial="hidden" animate={inView ? "show" : "hidden"}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-100">
          {INDUSTRIES.map((ind, i) => {
            const Icon = ind.icon;
            const isHovered = hovered === i;
            return (
              <motion.div key={i} variants={fadeUp}
                onMouseEnter={() => setHovered(i)} onMouseLeave={() => setHovered(null)}
                className={`relative bg-white overflow-hidden transition-all duration-300 ${isHovered ? "shadow-2xl shadow-[#0040FF]/10 z-10" : ""} ${i === 0 ? "sm:col-span-2 lg:col-span-1" : ""}`}>
                <div className="absolute top-0 left-0 right-0 h-[3px] transition-transform duration-300 origin-left"
                  style={{ backgroundColor: ind.color, transform: isHovered ? "scaleX(1)" : "scaleX(0.3)", opacity: isHovered ? 1 : 0.4 }} />
                <Link href={ind.href} className="block p-8 lg:p-9 h-full group">
                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300"
                    style={{ backgroundColor: isHovered ? ind.color : ind.color + "12" }}>
                    <Icon size={22} strokeWidth={1.75} className="transition-colors duration-300"
                      style={{ color: isHovered ? "#fff" : ind.color }} />
                  </div>
                  <p className="text-[15px] font-black tracking-[0.2em] uppercase mb-2 transition-colors duration-300" style={{ color: ind.color }}>
                    {ind.label}
                  </p>
                  <p className="text-black/80 text-[17px] leading-relaxed mb-6 transition-colors duration-300 group-hover:text-black/80">
                    {ind.description}
                  </p>
                  <ul className="space-y-2 mb-8">
                    {ind.stats.map((s, j) => (
                      <li key={j} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: ind.color }} />
                        <span className="text-black/80 text-[16px] font-semibold">{s}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center gap-1.5 text-[15px] font-black uppercase tracking-wide transition-all duration-300"
                    style={{ color: isHovered ? ind.color : "#D1D5DB" }}>
                    Explore
                    <ChevronRight size={13} strokeWidth={3} className={`transition-transform duration-300 ${isHovered ? "translate-x-1" : ""}`} />
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Industries CTA strip */}
        <FadeIn delay={0.2}>
          <div className="mt-px bg-gray-100 p-px">
            <div className="bg-black p-8 lg:p-10 flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-blue-500/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Layers size={18} strokeWidth={2} className="text-blue-400" />
                </div>
                <div>
                  <p className="text-white font-black text-[17px] uppercase tracking-tight mb-1">Don't see your industry?</p>
                  <p className="text-white/35 text-[17px]">Our layered approach adapts to any sector. Let's talk about yours.</p>
                </div>
              </div>
              <div className="flex items-center gap-3 flex-shrink-0">
                <Link href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white hover:bg-white/90 text-[#0040FF] font-black text-[17px] rounded-xl transition-all duration-200 shadow-lg shadow-white/5 group">
                  Start a Conversation
                  <ArrowRight size={13} strokeWidth={3} className="group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </FadeIn>

      </div>
    </section>
  );
}

export default function FeaturedWorkAndIndustries() {
  return (
    <>
     
      <IndustriesSection />
    </>
  );
}