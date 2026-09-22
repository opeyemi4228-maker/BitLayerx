"use client";

import { useRef } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import { Container, ActionLink } from "@/components/ui/primitives";
import { PACKAGES } from "@/content/packages";

/**
 * The range.
 *
 * BMW lays its models out as a row of cards: a picture of the car, its name,
 * its starting price, two actions. Buyers compare products that way, so the
 * packages are laid out the same way: name, promise, starting price, what is
 * in it, and the next step.
 */
export default function ProductRange() {
  const rail = useRef(null);

  const scroll = (dir) => {
    const el = rail.current;
    if (!el) return;
    const card = el.querySelector("li");
    const step = card ? card.getBoundingClientRect().width + 24 : el.clientWidth * 0.8;
    el.scrollBy({ left: dir * step, behavior: "smooth" });
  };

  return (
    <section
      aria-labelledby="range-heading"
      className="border-t border-black/[0.08] bg-white py-[clamp(4.5rem,9vw,8rem)]"
    >
      <Container width="wide">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-[640px]">
            <p className="text-[14px] font-semibold text-[#0040FF]">Packages</p>
            <h2
              id="range-heading"
              className="mt-4 text-[clamp(2rem,4.6vw,3.6rem)] font-semibold leading-[1.05] tracking-[-0.04em] text-[#111111]"
            >
              Pick a starting point. Every price is published.
            </h2>
          </div>

          <div className="flex items-center gap-5">
            <ActionLink href="/packages">Compare all</ActionLink>
            <div className="hidden gap-2 sm:flex">
              <button
                onClick={() => scroll(-1)}
                aria-label="Previous packages"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-black/[0.14] text-[#111111] transition-colors hover:border-black hover:bg-black hover:text-white"
              >
                <ArrowLeft size={17} strokeWidth={1.75} />
              </button>
              <button
                onClick={() => scroll(1)}
                aria-label="More packages"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-black/[0.14] text-[#111111] transition-colors hover:border-black hover:bg-black hover:text-white"
              >
                <ArrowRight size={17} strokeWidth={1.75} />
              </button>
            </div>
          </div>
        </div>
      </Container>

      {/* The rail runs to the viewport edge on the right, as BMW's does, so
          the half-visible last card says "there is more" without a label. */}
      <div className="mx-auto mt-11 max-w-[1440px]">
        <ul
          ref={rail}
          className="blx-rail flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth px-5 pt-1 pb-4 sm:px-8 lg:px-10"
        >
          {PACKAGES.map((p, i) => (
            <li
              key={p.slug}
              className="w-[82%] flex-shrink-0 snap-start sm:w-[46%] lg:w-[31%] xl:w-[29%]"
            >
              <article
                className={`flex h-full flex-col rounded-[24px] bg-white p-7 sm:p-8 ${
                  p.featured ? "ring-2 ring-[#0040FF]" : "ring-1 ring-black/[0.1]"
                }`}
              >
                <p className="flex h-7 items-center text-[13px] text-[#5E5E5E]">
                  {p.featured ? (
                    <span className="rounded-full bg-[#0040FF] px-3 py-1 text-[12px] font-medium text-white">
                      Most popular
                    </span>
                  ) : (
                    <span className="tabular-nums">0{i + 1}</span>
                  )}
                </p>

                <h3 className="mt-5 text-[1.75rem] font-semibold tracking-[-0.03em] text-[#111111]">
                  {p.name}
                </h3>
                <p className="mt-1 text-[15.5px] leading-snug text-[#5E5E5E]">
                  {p.tagline}
                </p>

                <p className="mt-5 flex items-baseline gap-2 border-t border-black/[0.08] pt-5">
                  <span className="text-[13px] text-[#5E5E5E]">From</span>
                  <span className="text-[1.5rem] font-semibold tracking-[-0.03em] text-[#111111]">
                    {p.price}
                  </span>
                </p>

                <ul className="mt-4 flex-1 space-y-2">
                  {p.includes.slice(0, 3).map((item) => (
                    <li key={item} className="flex gap-2.5 text-[14.5px] leading-snug text-[#111111]">
                      <Check size={15} strokeWidth={2.25} className="mt-[3px] flex-shrink-0 text-[#0040FF]" />
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3">
                  <Link
                    href="/start-a-project"
                    className="inline-flex items-center justify-center rounded-full bg-[#0040FF] px-6 py-[0.7rem] text-[15px] font-medium text-white transition-colors hover:bg-black"
                  >
                    Get a price
                  </Link>
                  <ActionLink href={`/packages#${p.slug}`} className="text-[15px]">
                    What is included
                  </ActionLink>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
