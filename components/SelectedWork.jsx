"use client";

import React, { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { MEDIA } from "@/lib/media";

/**
 * Selected work.
 *
 * Deliberately free of numbers. A result claimed without a named client and a
 * verifiable source is worth less than a clear statement of what was built, * and costs more if a reader doubts it. Metrics belong on the case study page,
 * next to the client who agreed to them.
 */
function hostOf(url) {
  try {
    return new URL(url).hostname.replace(/^www\./, "");
  } catch {
    return url;
  }
}

function LiveWebsitePreview({ homepage, label }) {
  return (
    <div className="relative rounded-3xl overflow-hidden border border-[#E5E7EB] bg-white shadow-sm">
      <div className="absolute inset-x-0 top-0 h-12 bg-[#0040FF] px-4 flex items-center justify-between text-[12px] font-black uppercase tracking-[0.18em] text-white">
        <span className="truncate max-w-[70%]">{hostOf(homepage)}</span>
        <span className="rounded-full bg-white/15 px-3 py-1 text-[10px] tracking-[0.22em] uppercase">
          {label}
        </span>
      </div>
      <div className="pt-[56.25%] relative">
        <iframe
          src={homepage}
          title={`Live preview of ${hostOf(homepage)}`}
          loading="lazy"
          sandbox="allow-scripts allow-same-origin allow-popups"
          className="absolute inset-0 w-full h-full border-0 pointer-events-none bg-white"
        />
      </div>
    </div>
  );
}

export default function SelectedWork() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="bg-white py-24 lg:py-32" aria-labelledby="work-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">

        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12 lg:mb-14">
          <div>
            <p className="text-[#0040FF] text-[12.5px] font-black tracking-[0.22em] uppercase mb-4">
              Selected work
            </p>
            <h2
              id="work-heading"
              className="text-[32px] sm:text-[40px] lg:text-[48px] font-black text-[#0B0B0F] leading-[1] tracking-[-0.035em]"
            >
              Things we built, <span className="text-[#0040FF]">still running.</span>
            </h2>
          </div>

          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 text-[13.5px] font-black uppercase tracking-wide text-[#0040FF] hover:text-[#0B0B0F] transition-colors group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0B0B0F] focus-visible:ring-offset-2 rounded self-start sm:self-auto"
          >
            All case studies
            <ArrowUpRight
              size={14}
              strokeWidth={3}
              className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </Link>
        </div>

        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {MEDIA.work.map((item, i) => (
            <motion.article
              key={`${item.label}-${i}`}
              variants={{
                hidden: { opacity: 0, y: 26 },
                show: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
                },
              }}
            >
              <a
                href={item.homepage}
                target="_blank"
                rel="noopener noreferrer"
                className="group block focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0B0B0F] focus-visible:ring-offset-4 rounded-2xl"
                aria-label={`Open live preview of ${item.title}`}
              >
                <LiveWebsitePreview homepage={item.homepage} label={item.label} />
                <h3 className="mt-5 text-[17px] font-black text-[#0B0B0F] leading-snug tracking-tight group-hover:text-[#0040FF] transition-colors">
                  {item.title}
                </h3>
              </a>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
