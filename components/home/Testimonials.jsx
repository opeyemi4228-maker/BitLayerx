import Image from "next/image";
import Link from "next/link";
import { Section, Container, SectionHeader, ActionLink } from "@/components/ui/primitives";
import { TESTIMONIALS } from "@/content/testimonials";

/**
 * Testimonials.
 *
 * Renders nothing at all while content/testimonials.js is empty, so the page
 * never shows a hollow section waiting to be filled. Add one real quote and
 * the whole band appears.
 */

function initials(name) {
  if (!name) return "•";
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase();
}

export default function Testimonials() {
  if (!TESTIMONIALS || TESTIMONIALS.length === 0) return null;

  return (
    <Section tone="white" labelledBy="testimonials-heading">
      <Container width="default">
        <SectionHeader
          id="testimonials-heading"
          eyebrow="What clients say"
          heading="In their words."
          lede="Every quote below is from a real client about real work. We do not publish anything nobody said."
        />

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <figure
              key={`${t.company}-${i}`}
              className="flex flex-col rounded-2xl bg-white p-8 ring-1 ring-black/[0.07]"
            >
              <blockquote className="flex-1">
                <p className="text-[1.0625rem] leading-relaxed text-[#1d1d1f]">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </blockquote>

              <figcaption className="mt-7 flex items-center gap-4 border-t border-black/[0.08] pt-6">
                {t.avatar ? (
                  <Image
                    src={t.avatar}
                    alt=""
                    width={44}
                    height={44}
                    className="h-11 w-11 rounded-full object-cover"
                  />
                ) : (
                  <span
                    aria-hidden="true"
                    className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-[#0040FF]/10 text-[13px] font-bold text-[#0040FF]"
                  >
                    {initials(t.name)}
                  </span>
                )}

                <span className="min-w-0">
                  {t.name && (
                    <span className="block truncate text-[15px] font-bold text-[#1d1d1f]">
                      {t.name}
                    </span>
                  )}
                  <span className="block truncate text-[13.5px] text-[#6e6e73]">
                    {t.role}
                    {t.role && t.company ? ", " : ""}
                    {t.company}
                  </span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="mt-12 text-center">
          <ActionLink href="/portfolio">See the work behind these</ActionLink>
        </div>
      </Container>
    </Section>
  );
}
