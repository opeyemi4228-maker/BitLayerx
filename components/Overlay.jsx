"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import {
  ArrowRight, Target, Eye, GitBranch, Award, Video, TrendingUp,
} from "lucide-react";
import Figure from "./Figure";
import { MEDIA } from "@/lib/media";

// ─── The six practices ────────────────────────────────────────────────────────
// Deliberately called "practices", not "layers". The word *layer* belongs to
// the five-layer teaching framework; using it for both models forces a reader
// to reconcile two different numbered systems with the same name.
const PRACTICES = [
  { id: "strategy",   short: "Strategy",    icon: Target,     title: "Strategy & Positioning",     color: "#0040FF", href: "/services#service-01"   },
  { id: "experience", short: "Design",      icon: Eye,        title: "UI/UX & Product Design",     color: "#0040FF", href: "/design"      },
  { id: "technology", short: "Engineering", icon: GitBranch,  title: "Web, Mobile & Software",     color: "#0040FF", href: "/solutions" },
  { id: "brand",      short: "Brand",       icon: Award,      title: "Branding & Identity",        color: "#0040FF", href: "/design"   },
  { id: "media",      short: "Film",        icon: Video,      title: "Commercials & Video",        color: "#0040FF", href: "/services#service-05"      },
  { id: "growth",     short: "Growth",      icon: TrendingUp, title: "Digital Marketing & Growth", color: "#0040FF", href: "/marketing"  },
];

// ─── The method ───────────────────────────────────────────────────────────────
// Six steps, one sentence each. A named, concrete method is what turns an
// agency into a firm, and it is the thing this section used to only promise.
const METHOD = [
  {
    step: "01",
    title: "Understand the ground",
    body: "We talk to your customers before anyone opens a laptop.",
  },
  {
    step: "02",
    title: "Define the layers",
    body: "We map what needs to exist, and in what order.",
  },
  {
    step: "03",
    title: "Design before code",
    body: "Decisions get made on paper, where changing them is cheap.",
  },
  {
    step: "04",
    title: "Build for the hard day",
    body: "No power, weak network, three times the traffic.",
  },
  {
    step: "05",
    title: "Ship to real hands",
    body: "Tested with actual users, not in a meeting room.",
  },
  {
    step: "06",
    title: "Measure and compound",
    body: "We track what changed, and improve it.",
  },
];

// ─── Reveal on scroll ─────────────────────────────────────────────────────────
function useInViewOnce(margin = "-70px") {
  const ref = useRef(null);
  const [seen, setSeen] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setSeen(true);
          obs.disconnect();
        }
      },
      { rootMargin: margin, threshold: 0.05 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [margin]);

  return [ref, seen];
}

// ─── Method step card ─────────────────────────────────────────────────────────
function MethodStep({ item, index, visible }) {
  return (
    <li
      className="group relative bg-white p-7 lg:p-8 transition-colors duration-300 hover:bg-black/[0.02]"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(18px)",
        transition: `opacity 0.6s ${0.06 * index}s cubic-bezier(0.22,1,0.36,1), transform 0.6s ${0.06 * index}s cubic-bezier(0.22,1,0.36,1), background-color 0.3s`,
      }}
    >
      {/* Left rule that fills in on hover, a small, quiet reward */}
      <span
        aria-hidden="true"
        className="absolute left-0 top-0 bottom-0 w-[2px] bg-[#0040FF] origin-top scale-y-0 group-hover:scale-y-100 transition-transform duration-300"
      />

      <div className="flex items-baseline gap-4 mb-3">
        <span
          className="text-[13px] font-black tracking-[0.14em] text-[#0040FF]/45 tabular-nums"
          aria-hidden="true"
        >
          {item.step}
        </span>
        <h3 className="text-[17px] lg:text-[18px] font-black text-[#1d1d1f] tracking-tight leading-snug">
          {item.title}
        </h3>
      </div>
      <p className="text-[15.5px] leading-relaxed text-gray-600 pl-[42px]">
        {item.body}
      </p>
    </li>
  );
}

// ─── Main Section ─────────────────────────────────────────────────────────────
export default function MethodAndPractices() {
  const [gridRef, gridVisible] = useInViewOnce();
  const [introRef, introVisible] = useInViewOnce();

  return (
    <section
      id="method"
      className="bg-[#f5f5f7] py-20 lg:py-28"
      aria-labelledby="method-heading"
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-10">

        {/* ── Intro ─────────────────────────────────────────────────── */}
        <div
          ref={introRef}
          className="grid lg:grid-cols-[1.15fr_1fr] gap-10 lg:gap-16 items-start mb-14 lg:mb-16"
          style={{
            opacity: introVisible ? 1 : 0,
            transform: introVisible ? "translateY(0)" : "translateY(20px)",
            transition:
              "opacity 0.7s cubic-bezier(0.22,1,0.36,1), transform 0.7s cubic-bezier(0.22,1,0.36,1)",
          }}
        >
          <div>
            <p className="text-[11.5px] font-black tracking-[0.22em] uppercase text-[#0040FF] mb-4">
              The BitLayerX Method
            </p>
            <h2
              id="method-heading"
              className="text-[30px] sm:text-[38px] lg:text-[44px] font-black text-[#1d1d1f] leading-[1.05] tracking-[-0.03em] mb-6"
            >
              Six steps. The same six,
              <br className="hidden sm:block" /> every single time.
            </h2>
            <p className="text-[16px] leading-relaxed text-gray-600 max-w-[48ch] mb-7">
              No two projects look alike. The way we get there does.
            </p>

            {/* The reconciliation note, makes two frameworks look deliberate */}
            <div className="bg-white border-l-2 border-[#0040FF] p-6">
              <p className="text-[15px] leading-relaxed text-gray-700">
                We <span className="font-bold text-[#1d1d1f]">teach five layers</span>{" "}
                of a product. We{" "}
                <span className="font-bold text-[#1d1d1f]">
                  deliver across six practices
                </span>
                . The first is how we think. The second is how we're organised.
              </p>
              <Link
                href="/services"
                className="inline-flex items-center gap-1.5 mt-4 text-[13px] font-black uppercase tracking-wide text-[#0040FF] hover:text-[#1d1d1f] transition-colors group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1d1d1f] focus-visible:ring-offset-2 rounded"
              >
                See the practices
                <ArrowRight
                  size={12}
                  strokeWidth={3}
                  className="transition-transform duration-200 group-hover:translate-x-0.5"
                />
              </Link>
            </div>
          </div>

          <Figure
            src={MEDIA.method.src}
            alt={MEDIA.method.alt}
            caption={MEDIA.method.caption}
            ratio="4 / 3"
            seed={2}
            sizes="(max-width: 1024px) 100vw, 46vw"
          />
        </div>

        {/* The six steps */}
        <ul
          ref={gridRef}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-200 border border-gray-200"
        >
          {METHOD.map((item, i) => (
            <MethodStep
              key={item.step}
              item={item}
              index={i}
              visible={gridVisible}
            />
          ))}
        </ul>

        {/* Practice strip */}
        <div className="mt-12 lg:mt-14">
          <p className="text-[12px] font-black tracking-[0.22em] uppercase text-gray-400 mb-5">
            Six practices, one team
          </p>
          <div className="flex flex-wrap items-center gap-2">
            {PRACTICES.map((practice) => {
              const Icon = practice.icon;
              return (
                <Link
                  key={practice.id}
                  href={practice.href}
                  className="group flex items-center gap-2 pl-3.5 pr-4 py-2.5 bg-white border border-gray-200 rounded-full hover:border-[#0040FF]/40 hover:shadow-sm transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1d1d1f] focus-visible:ring-offset-2"
                >
                  <Icon
                    size={13}
                    strokeWidth={2.5}
                    style={{ color: practice.color }}
                    className="flex-shrink-0"
                  />
                  <span className="text-[13.5px] font-bold text-gray-700 group-hover:text-[#1d1d1f] transition-colors whitespace-nowrap">
                    {practice.short}
                  </span>
                  <span className="text-[12.5px] font-semibold text-gray-400 group-hover:text-gray-500 transition-colors whitespace-nowrap hidden sm:inline">
                    {practice.title}
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
