import Link from "next/link";
import { SITE } from "@/lib/seo";
import { Section, Container, Heading, Lede } from "@/components/ui/primitives";

const url = `${SITE.url}/accessibility`;

export const metadata = {
  title: "Accessibility",
  description:
    "What we have done to make this site usable by everyone, what we know is imperfect, and how to tell us when we get it wrong.",
  alternates: { canonical: url },
  openGraph: {
    type: "website",
    url,
    title: "Accessibility, BitLayerX",
    description: "What we have done, what is imperfect, and how to tell us.",
    siteName: SITE.name,
  },
};

const LAST_UPDATED = "15 August 2026";

export default function AccessibilityPage() {
  return (
    <>
      <Section tone="white" rhythm="tight">
        <Container width="text">
          <nav aria-label="Breadcrumb" className="mb-6 text-[13.5px] text-[#6e6e73]">
            <Link href="/" className="hover:text-[#1d1d1f]">Home</Link>
            <span aria-hidden="true" className="mx-2">›</span>
            <span>Accessibility</span>
          </nav>

          <Heading as="h1" size="xl">Accessibility</Heading>
          <Lede className="mt-5">
            We build for everyone, including people using a screen reader, a
            keyboard only, or a phone on a bad connection. This page says what
            we have done and, more usefully, what we know is still imperfect.
          </Lede>
          <p className="mt-6 text-[14px] text-[#6e6e73]">
            Last updated {LAST_UPDATED}
          </p>
        </Container>
      </Section>

      <Section tone="white" rhythm="tight">
        <Container width="text">
          <div className="blx-prose">
            <h2>What we have done</h2>

            <ul>
              <li><strong>Keyboard access.</strong> Every link, button and form field can be reached and used with a keyboard alone, and the focus ring is always visible.</li>
              <li><strong>Skip link.</strong> The first thing a keyboard user reaches is a link that jumps straight past the navigation to the content.</li>
              <li><strong>Headings in order.</strong> One h1 per page, then h2 and h3 nested properly, so a screen reader can navigate by structure.</li>
              <li><strong>Alt text on images.</strong> Photographs are described. Decorative graphics are marked so a screen reader skips them rather than reading noise.</li>
              <li><strong>Colour contrast.</strong> Body text and interface text meet the WCAG AA contrast ratio against their background.</li>
              <li><strong>Colour is never the only signal.</strong> Anything shown in colour is also shown in words or shape.</li>
              <li><strong>Text scales.</strong> The page stays usable when text is enlarged to 200 per cent, and pinch zoom is not disabled.</li>
              <li><strong>Forms are labelled.</strong> Every field has a real label, and errors are announced rather than only shown in red.</li>
              <li><strong>Motion is restrained.</strong> Nothing flashes, auto plays with sound, or moves in a way that could trigger discomfort.</li>
            </ul>

            <h2>What we know is imperfect</h2>

            <p>Publishing this part matters more than the list above, because
            every site claims the list above.</p>

            <ul>
              <li>Some older pages have not yet been rebuilt on our current design system, and their heading order is less tidy than it should be.</li>
              <li>A small number of decorative graphics could carry richer descriptions.</li>
              <li>We have tested with VoiceOver and keyboard navigation. We have not yet completed a full audit with JAWS or NVDA.</li>
            </ul>

            <p>We fix these as we rebuild each page rather than waiting for a
            single push, because a fix shipped this month helps more than a
            perfect plan next year.</p>

            <h2>Standard we aim at</h2>

            <p>WCAG 2.2 Level AA. We are not claiming full certified
            conformance, because we have not paid for an independent audit. We
            would rather say that plainly than display a badge that implies more
            than it means.</p>

            <h2>Tell us when we get it wrong</h2>

            <p>If any part of this site is difficult or impossible for you to
            use, email <a href={`mailto:${SITE.email}`}>{SITE.email}</a> or call{" "}
            <a href={`tel:${SITE.phone.replace(/-/g, "")}`}>{SITE.phone}</a>.
            Tell us the page and what happened. We reply within one working day
            and we will send you the information another way in the meantime.</p>

            <p>This is not a formality. Reports from real users have found more
            problems for us than any automated checker.</p>
          </div>

          <div className="mt-12 rounded-2xl border border-black/[0.07] bg-[#f5f5f7] p-7">
            <p className="text-[15.5px] leading-relaxed text-[#6e6e73]">
              We build accessibility into client work for the same reason. If
              that matters for your project,{" "}
              <Link
                href="/contact"
                className="font-medium text-[#0040FF] underline underline-offset-4"
              >
                say so on the first call
              </Link>
              .
            </p>
          </div>
        </Container>
      </Section>
    </>
  );
}
