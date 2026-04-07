"use client";

import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

// ─── Feature boxes — pulled from insights section content ──────────────────
const FEATURES = [
  {
    label: "Digital Growth",
    title: "Expert strategies to turn your website into a revenue machine",
  },
  {
    label: "AI Automation",
    title: "Reduce customer service costs by 30–50% with AI solutions",
  },
  {
    label: "Marketing Strategy",
    title: "Performance marketing systems that compound every month",
  },
  {
    label: "Brand Authority",
    title: "Video production and content that makes your brand unmissable",
  },
];

// ─── SEO Schema ────────────────────────────────────────────────────────────
const SCHEMA = {
  "@context": "https://schema.org",
  "@type": "WebPageElement",
  name: "BitLayerX Insights — The Engine of Growth",
  description:
    "Expert strategies, actionable tips, and real-world case studies to help you dominate your market through web development, marketing automation, and AI-powered solutions.",
};

export default function InsightsBanner() {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.08 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <>
      {/* Montserrat font */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800;900&display=swap"
      />

      {/* SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }}
      />

      {/* ── Outer wrapper — light gray page bg ────────────────────────────── */}
      <section
        className="bg-[#F3F4F6] py-8 sm:py-10 px-4 sm:px-6 lg:px-10"
        aria-labelledby="insights-banner-heading"
        style={{ fontFamily: "'Montserrat', sans-serif" }}
      >
        {/* ── The blue card ──────────────────────────────────────────────────── */}
        <div
          ref={ref}
          className="relative w-full overflow-hidden"
          style={{
            borderRadius: 24,
            background:
              "linear-gradient(130deg, #3B82F6 0%, #2563EB 30%, #1D4ED8 55%, #1E40AF 80%, #1a3ab8 100%)",
            minHeight: 320,
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(28px)",
            transition:
              "opacity 0.75s cubic-bezier(0.22,1,0.36,1), transform 0.75s cubic-bezier(0.22,1,0.36,1)",
          }}
        >
          {/* Subtle radial glow — top-left lightness */}
          <div
            aria-hidden="true"
            style={{
              position: "absolute",
              inset: 0,
              background:
                "radial-gradient(ellipse 65% 80% at 10% 20%, rgba(147,197,253,0.35) 0%, transparent 70%)",
              pointerEvents: "none",
            }}
          />

          {/* ── Inner content grid ────────────────────────────────────────── */}
          <div className="relative z-10 flex flex-col lg:flex-row lg:items-stretch w-full h-full">

            {/* ── LEFT: Text content ──────────────────────────────────────── */}
            <div
              className="flex flex-col justify-between px-8 sm:px-10 lg:px-12 pt-10 pb-8 lg:pb-10"
              style={{ flex: "0 0 auto", width: "100%", maxWidth: 660 }}
            >
              {/* Headline */}
              <div>
                <h2
                  id="insights-banner-heading"
                  className="text-white font-black uppercase leading-[0.92] tracking-tight mb-5"
                  style={{
                    fontSize: "clamp(1.9rem, 4.5vw, 3.6rem)",
                    letterSpacing: "-0.02em",
                  }}
                  itemProp="headline"
                >
                  BitLayerX Insights —<br />
                  The Engine of<br />
                  Your Growth
                </h2>

                <p
                  className="text-white/75 font-normal leading-relaxed mb-8"
                  style={{ fontSize: "clamp(12px, 1.4vw, 14px)", maxWidth: 480 }}
                  itemProp="description"
                >
                  Expert strategies, actionable tips, and real-world case studies to help you
                  dominate your market through web development, marketing automation, and AI-powered solutions.
                </p>
              </div>

              {/* ── Four feature boxes ─────────────────────────────────── */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 w-full">
                {FEATURES.map((f, i) => (
                  <div
                    key={i}
                    className="flex flex-col gap-2 p-4 rounded-xl"
                    style={{
                      background: "rgba(255,255,255,0.1)",
                      border: "1px solid rgba(255,255,255,0.15)",
                      backdropFilter: "blur(8px)",
                      opacity: visible ? 1 : 0,
                      transform: visible ? "translateY(0)" : "translateY(12px)",
                      transition: `opacity 0.6s ${0.15 + i * 0.08}s cubic-bezier(0.22,1,0.36,1), transform 0.6s ${0.15 + i * 0.08}s cubic-bezier(0.22,1,0.36,1)`,
                    }}
                  >
                    {/* Small all-caps label — exactly as in reference */}
                    <span
                      className="text-white/55 font-semibold uppercase tracking-[0.16em]"
                      style={{ fontSize: 9 }}
                    >
                      {f.label}
                    </span>

                    {/* Description text */}
                    <p
                      className="text-white font-medium leading-snug"
                      style={{ fontSize: "clamp(11px, 1.1vw, 13px)" }}
                    >
                      {f.title}
                    </p>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="mt-7 flex items-center gap-4">
                <Link
                  href="/blog"
                  className="group inline-flex items-center gap-0 rounded-full overflow-hidden font-bold text-[15px] text-[#1D4ED8] bg-white hover:bg-white/95 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#2563EB]"
                  style={{
                    boxShadow: "0 4px 20px rgba(0,0,80,0.25)",
                  }}
                  aria-label="Browse all BitLayerX insights and articles"
                >
                  <span className="pl-6 pr-3 py-3.5 tracking-wide">
                    Browse All Insights
                  </span>
                  <span
                    className="flex items-center justify-center w-11 h-11 rounded-full flex-shrink-0 mr-0.5 my-0.5 bg-[#1D4ED8] group-hover:bg-[#1E40AF] transition-colors duration-200"
                    aria-hidden="true"
                  >
                    <ArrowRight size={15} strokeWidth={2.5} className="text-white group-hover:translate-x-0.5 transition-transform duration-200" />
                  </span>
                </Link>

                <Link
                  href="/blog"
                  className="text-white/70 hover:text-white font-semibold text-[14px] tracking-wide transition-colors underline underline-offset-4"
                >
                  View All Articles
                </Link>
              </div>
            </div>

            {/* ── RIGHT: 3D visual — bleeds to right edge ─────────────────── */}
            <div
              className="hidden lg:block relative flex-1 overflow-hidden"
              aria-hidden="true"
              style={{ minHeight: 320 }}
            >
              {/* Main image — globe/tech visual */}
              <div
                style={{
                  position: "absolute",
                  top: "-8%",
                  right: "-5%",
                  width: "115%",
                  height: "116%",
                  opacity: visible ? 1 : 0,
                  transform: visible ? "translateX(0)" : "translateX(40px)",
                  transition: "opacity 0.9s 0.2s cubic-bezier(0.22,1,0.36,1), transform 0.9s 0.2s cubic-bezier(0.22,1,0.36,1)",
                }}
              >
                <Image
                  src="https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=900&h=700&fit=crop&q=90"
                  alt="Digital growth network — global reach and technology"
                  fill
                  className="object-cover object-center"
                  sizes="50vw"
                  priority
                />
                {/* Left-side gradient fade to merge with blue card */}
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background:
                      "linear-gradient(to right, #1D4ED8 0%, rgba(29,78,216,0.7) 15%, rgba(29,78,216,0.1) 40%, transparent 65%)",
                  }}
                />
                {/* Top-fade */}
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background:
                      "linear-gradient(to bottom, rgba(29,78,216,0.5) 0%, transparent 30%, transparent 70%, rgba(29,78,216,0.4) 100%)",
                  }}
                />
              </div>

              {/* Floating insight cards — overlaid on the image, matching reference */}
              <div
                className="absolute bottom-8 right-6 flex flex-col gap-2.5 z-10"
                style={{
                  opacity: visible ? 1 : 0,
                  transform: visible ? "translateY(0)" : "translateY(16px)",
                  transition: "opacity 0.7s 0.4s ease, transform 0.7s 0.4s ease",
                }}
              >
                {[
                  { cat: "Digital Growth", reads: "5 min read" },
                  { cat: "AI Automation", reads: "7 min read" },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 px-4 py-3 rounded-xl"
                    style={{
                      background: "rgba(255,255,255,0.14)",
                      border: "1px solid rgba(255,255,255,0.2)",
                      backdropFilter: "blur(12px)",
                      minWidth: 200,
                    }}
                  >
                    <div
                      className="w-2 h-2 rounded-full flex-shrink-0"
                      style={{ background: "rgba(255,255,255,0.9)" }}
                    />
                    <div>
                      <p className="text-white font-bold text-[14px]">{item.cat}</p>
                      <p className="text-white/50 text-[13.5px] font-medium">{item.reads}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ── Mobile image strip ────────────────────────────────────────── */}
          <div className="lg:hidden relative h-44 w-full overflow-hidden" aria-hidden="true">
            <Image
              src="https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&h=400&fit=crop&q=85"
              alt=""
              fill
              className="object-cover object-center"
              sizes="100vw"
            />
            <div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(to bottom, #2563EB 0%, rgba(37,99,235,0.4) 40%, transparent 100%)",
              }}
            />
          </div>
        </div>
      </section>
    </>
  );
}