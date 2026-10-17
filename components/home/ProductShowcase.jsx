"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/ui/primitives";
import { PRODUCTS, PRODUCT_LOGOS } from "@/content/company";
import ProductVisual from "./ProductVisuals";

/**
 * The product display.
 *
 * BMW's model finder: a row of names across the top, one model shown large
 * beneath, the details beside it. Seven products, grouped as they ship:
 * three live today, four launching in 2027. Each product leads with the one
 * question it answers, because that is how a buyer recognises their problem.
 */

const GROUPS = [
  { key: "live", label: "Available now", sub: "Cloud and field intelligence" },
  { key: "2027", label: "Launching 2027", sub: "Logistics and intelligence" },
];

function StatusPill({ status }) {
  return status === "live" ? (
    <span className="inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[12px] font-medium text-[#0A7D3E] ring-1 ring-[#0A7D3E]/25">
      <span className="h-1.5 w-1.5 rounded-full bg-[#0A7D3E]" /> Live
    </span>
  ) : (
    <span className="inline-flex items-center rounded-full px-2.5 py-1 text-[12px] font-medium text-[#5E5E5E] ring-1 ring-black/[0.14]">
      Launching 2027
    </span>
  );
}

export default function ProductShowcase() {
  const [activeId, setActiveId] = useState(PRODUCTS[0].id);
  const p = PRODUCTS.find((x) => x.id === activeId) ?? PRODUCTS[0];

  return (
    <section
      id="products"
      aria-labelledby="products-heading"
      className="scroll-mt-24 border-t border-black/[0.08] bg-white py-[clamp(4.5rem,9vw,8rem)]"
    >
      <Container width="wide">
        <div className="grid gap-6 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <p className="text-[14px] font-semibold text-[#0040FF]">Our products</p>
            <h2
              id="products-heading"
              className="mt-4 text-[clamp(2rem,4.6vw,3.6rem)] font-semibold leading-[1.05] tracking-[-0.04em] text-[#111111]"
            >
              Seven products. One ecosystem.
            </h2>
          </div>
          <p className="max-w-[46ch] text-[clamp(1.05rem,1.4vw,1.2rem)] leading-[1.55] text-[#5E5E5E] lg:col-span-5 lg:pb-2">
            Each answers one question a leader asks. Together they keep a
            single record of what happened, where it is and what it means.
          </p>
        </div>

        {/* The product marks, visible before any tab is opened. A mark tied
            to a product opens that product below. */}
        <ul aria-label="Product logos" className="mt-12 grid grid-cols-1 gap-px overflow-hidden rounded-[24px] bg-black/[0.08] ring-1 ring-black/[0.08] sm:grid-cols-3">
          {PRODUCT_LOGOS.map((l) => {
            const img = (
              <Image
                src={l.src}
                alt={l.name}
                width={l.width}
                height={l.height}
                sizes="(max-width: 640px) 70vw, 300px"
                className="h-[clamp(2.5rem,4vw,3.5rem)] w-auto max-w-full"
              />
            );
            return (
              <li key={l.name} className="bg-white">
                {l.product ? (
                  <button
                    type="button"
                    onClick={() => setActiveId(l.product)}
                    aria-label={`Show ${l.name}`}
                    className="flex h-full w-full items-center justify-center px-8 py-10 transition-colors hover:bg-black/[0.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#0040FF]"
                  >
                    {img}
                  </button>
                ) : (
                  <div className="flex h-full items-center justify-center px-8 py-10">{img}</div>
                )}
              </li>
            );
          })}
        </ul>

        {/* Selector. Two groups side by side on wide screens, each a row of
            names; the active one is underlined like a tab. */}
        <div
          role="tablist"
          aria-label="Products"
          className="mt-12 grid gap-8 border-b border-black/[0.08] md:grid-cols-2"
        >
          {GROUPS.map((g) => (
            <div key={g.key}>
              <p className="text-[13px] text-[#5E5E5E]">
                <span className="font-semibold text-[#111111]">{g.label}</span> · {g.sub}
              </p>
              <div className="mt-3 flex flex-wrap gap-x-7">
                {PRODUCTS.filter((x) => x.status === g.key).map((x) => {
                  const on = x.id === activeId;
                  return (
                    <button
                      key={x.id}
                      role="tab"
                      id={`tab-${x.id}`}
                      aria-selected={on}
                      aria-controls="product-panel"
                      onClick={() => setActiveId(x.id)}
                      className={`relative -mb-px border-b-2 pb-4 pt-1 text-[clamp(1.1rem,1.6vw,1.35rem)] font-semibold tracking-[-0.02em] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0040FF] ${
                        on
                          ? "border-[#111111] text-[#111111]"
                          : "border-transparent text-[#111111]/40 hover:text-[#111111]"
                      }`}
                    >
                      {x.name}
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        <div
          id="product-panel"
          role="tabpanel"
          aria-labelledby={`tab-${p.id}`}
          className="mt-12 grid gap-10 lg:grid-cols-12 lg:gap-14"
        >
          <div className="lg:col-span-5">
            <div className="flex flex-wrap items-center gap-3">
              <StatusPill status={p.status} />
            </div>
            {/* A product with a finished mark shows it; the name stays the
                heading's accessible text through the image's alt. */}
            <h3 className="mt-5 text-[clamp(2rem,3.6vw,3rem)] font-semibold leading-[1.02] tracking-[-0.04em] text-[#111111]">
              {p.logo ? (
                <Image
                  key={p.id}
                  src={p.logo.src}
                  alt={p.name}
                  width={p.logo.width}
                  height={p.logo.height}
                  sizes="260px"
                  className="h-[clamp(3.25rem,5vw,4.25rem)] w-auto max-w-full"
                />
              ) : (
                p.name
              )}
            </h3>
            <p className="mt-3 text-[clamp(1.1rem,1.5vw,1.3rem)] font-medium tracking-[-0.01em] text-[#0040FF]">
              {p.question}
            </p>
            <p className="mt-5 text-[1.0625rem] leading-relaxed text-[#5E5E5E]">
              {p.summary}
            </p>
            {p.partner && (
              <p className="mt-6 text-[14px] text-[#5E5E5E]">
                Delivered in partnership with{" "}
                <span className="font-semibold text-[#111111]">{p.partner}</span>.
              </p>
            )}
            {p.note && <p className="mt-4 text-[13px] leading-relaxed text-[#5E5E5E]">{p.note}</p>}

            <div className="mt-8 flex flex-wrap items-center gap-x-7 gap-y-4">
              <a
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-[#0040FF] px-7 py-[0.85rem] text-[1rem] font-medium text-white transition-colors hover:bg-black"
              >
                {p.status === "live" ? "Book a demo" : "Join the launch list"}
              </a>
              {p.page && (
                <Link
                  href={p.page}
                  className="group inline-flex items-center gap-1 text-[1rem] font-medium text-[#0040FF] hover:text-[#111111]"
                >
                  About {p.name}
                  <span aria-hidden="true" className="transition-transform group-hover:translate-x-[3px]">›</span>
                </Link>
              )}
              {p.url && (
                <a
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-1 text-[1rem] font-medium text-[#0040FF] hover:text-[#111111]"
                >
                  Visit {p.name}
                  <span aria-hidden="true" className="transition-transform group-hover:-translate-y-[2px] group-hover:translate-x-[2px]">↗</span>
                </a>
              )}
            </div>
          </div>

          <div key={p.id} className="blx-fade-in min-h-[380px] lg:col-span-7 lg:min-h-[520px]">
            <ProductVisual kind={p.visual} />
          </div>
        </div>
      </Container>
    </section>
  );
}
