import Link from "next/link";
import { Section, Container, Heading, Lede } from "@/components/ui/primitives";

/**
 * The 404 page.
 *
 * A dead end is the most expensive page on a site: the visitor arrived with
 * intent and found nothing. So this one routes rather than apologises, it
 * offers the destinations people are actually looking for when a URL breaks.
 */
export const metadata = {
  title: "Page not found",
  robots: { index: false, follow: true },
};

const DESTINATIONS = [
  { href: "/services", label: "Services", note: "What we do, and how it is priced" },
  { href: "/portfolio", label: "Work", note: "Live projects you can open right now" },
  { href: "/packages", label: "Packages", note: "Scopes and prices, published" },
  { href: "/blog", label: "Insight", note: "Writing from the team" },
  { href: "/about", label: "About", note: "Who you would be working with" },
  { href: "/contact", label: "Contact", note: "Start a conversation" },
];

export default function NotFound() {
  return (
    <Section tone="white">
      <Container width="narrow">
        <p className="text-[12px] font-bold uppercase tracking-[0.18em] text-[#0040FF]">
          Error 404
        </p>
        <Heading as="h1" size="xl" className="mt-4">
          That page is not here.
        </Heading>
        <Lede className="mt-5 max-w-[560px]">
          The link may be old, or we may have moved something. Nothing is
          broken on your side, here is where most people were heading.
        </Lede>

        <div className="mt-12 grid sm:grid-cols-2 gap-px bg-black/10 rounded-2xl overflow-hidden">
          {DESTINATIONS.map((d) => (
            <Link
              key={d.href}
              href={d.href}
              className="group bg-white p-6 hover:bg-[#f5f5f7] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#0040FF]"
            >
              <span className="flex items-center gap-1.5 text-[1.0625rem] font-semibold text-[#1d1d1f] group-hover:text-[#0040FF] transition-colors">
                {d.label}
                <span
                  aria-hidden="true"
                  className="transition-transform duration-200 group-hover:translate-x-[3px]"
                >
                  ›
                </span>
              </span>
              <span className="mt-1 block text-[14.5px] text-[#6e6e73]">
                {d.note}
              </span>
            </Link>
          ))}
        </div>

        <p className="mt-10 text-[15px] text-[#6e6e73]">
          Arrived from a link that should work?{" "}
          <Link
            href="/contact"
            className="text-[#0040FF] font-medium underline underline-offset-4"
          >
            Tell us where it was
          </Link>{" "}
          and we will fix it.
        </p>
      </Container>
    </Section>
  );
}
