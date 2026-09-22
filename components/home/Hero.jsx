import Image from "next/image";
import Link from "next/link";
import { Container, ActionLink } from "@/components/ui/primitives";

/**
 * The hero.
 *
 * Built the way Ventures Platform and BMW open: a large, left-aligned headline
 * on pure white, the supporting line and the actions beside it, then the
 * flagship product at full width. The product is real: Poll360, live.
 *
 * The headline is the company's promise. The line beside it says what that
 * promise is made of, and the dream it is building towards.
 */

export default function Hero() {
  return (
    <section className="bg-white pt-[clamp(2.5rem,6vw,5.5rem)] pb-[clamp(3.5rem,7vw,6.5rem)]">
      <Container width="wide">
        <p className="text-[14px] font-semibold tracking-[-0.005em] text-[#0040FF]">
          BitLayerX Technologies · Built in Nigeria. Built for Africa.
        </p>

        <div className="mt-5 grid items-end gap-8 lg:grid-cols-12 lg:gap-12">
          {/* One accent only: the full stop. */}
          <h1 className="max-w-[12ch] text-[clamp(3rem,7.6vw,7rem)] font-semibold leading-[0.98] tracking-[-0.05em] text-[#111111] lg:col-span-8">
            Your digital growth partner<span className="text-[#0040FF]">.</span>
          </h1>

          <div className="lg:col-span-4 lg:pb-4">
            <p className="max-w-[42ch] text-[clamp(1.08rem,1.45vw,1.25rem)] leading-[1.55] text-[#5E5E5E]">
              We build the cloud, field intelligence, logistics and digital
              services African businesses and institutions run on, and the
              websites, stores and apps that put them online.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-x-7 gap-y-4">
              <Link
                href="/start-a-project"
                className="inline-flex items-center justify-center rounded-full bg-[#0040FF] px-8 py-[0.95rem] text-[1.0625rem] font-medium text-white transition-colors hover:bg-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0040FF] focus-visible:ring-offset-2"
              >
                Start a project
              </Link>
              <ActionLink href="#products">Explore our products</ActionLink>
            </div>
          </div>
        </div>

        {/* The stage: the flagship product, large, as BMW shows the car. */}
        <figure className="mt-[clamp(2.5rem,5vw,4.5rem)]">
          <a
            href="https://poll-360.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative block overflow-hidden rounded-[20px] ring-1 ring-black/[0.08] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0040FF] sm:rounded-[28px]"
          >
            <div className="relative aspect-[1200/633]">
              <Image
                src="/images/products/poll360.jpg"
                alt="Poll360 by BitLayerX Technologies: From the booth to the broadcast."
                fill
                priority
                quality={90}
                sizes="(max-width: 1440px) 100vw, 1360px"
                className="object-cover object-top transition-transform duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.015]"
              />
            </div>
            <span className="absolute bottom-4 right-4 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2.5 text-[13.5px] font-medium text-[#111111] shadow-[0_6px_24px_rgba(0,0,0,0.14)] transition-colors group-hover:text-[#0040FF] sm:bottom-6 sm:right-6 sm:text-[14.5px]">
              Open Poll360 <span aria-hidden="true">↗</span>
            </span>
          </a>
          <figcaption className="mt-5 flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
            <span className="text-[15px] font-semibold tracking-[-0.01em] text-[#111111]">
              Poll360{" "}
              <span className="ml-2 inline-flex items-center gap-1.5 align-middle text-[12.5px] font-medium text-[#0A7D3E]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#0A7D3E]" /> Live
              </span>
            </span>
            <span className="text-[14px] text-[#5E5E5E]">
              The collation engine: every polling unit, one clear picture.
            </span>
          </figcaption>
        </figure>
      </Container>
    </section>
  );
}
