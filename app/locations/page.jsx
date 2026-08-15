import Link from "next/link";
import { SITE, MARKETS } from "@/lib/seo";
import {
  Section,
  Container,
  Heading,
  Lede,
  SectionHeader,
} from "@/components/ui/primitives";

const url = `${SITE.url}/locations`;
const title = "Where We Work  -  Nigeria, UK, USA, UAE, South Africa & Beyond";
const description =
  "BitLayerX works with companies in Abuja, Lagos, London, Dubai, Johannesburg, New York and beyond. One team, GMT+1, overlapping most of the working world.";

export const metadata = {
  title,
  description,
  keywords: [
    "digital agency Nigeria",
    "software company UK",
    "web development Dubai",
    "digital agency South Africa",
    "offshore development team Africa",
  ],
  alternates: { canonical: url },
  openGraph: {
    type: "website",
    url,
    title,
    description,
    siteName: SITE.name,
    images: [{ url: `${SITE.url}/opengraph-image`, width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image", title, description, site: SITE.twitter },
};

/** Group markets by country so the list reads as a map rather than a pile. */
function groupByCountry(markets) {
  const groups = new Map();
  for (const m of markets) {
    if (!groups.has(m.country)) groups.set(m.country, []);
    groups.get(m.country).push(m);
  }
  return [...groups.entries()];
}

export default function LocationsIndex() {
  const groups = groupByCountry(MARKETS);

  return (
    <>
      <Section tone="white" rhythm="tight">
        <Container width="narrow">
          <p className="text-[12px] font-bold uppercase tracking-[0.18em] text-[#0040FF]">
            Where we work
          </p>
          <Heading as="h1" size="xl" className="mt-4">
            One studio. Most of the working world.
          </Heading>
          <Lede className="mt-5 max-w-[620px]">
            We build from Abuja on GMT+1  -  the same working day as London, one
            hour from Accra and Johannesburg, three from Dubai, and a clean
            morning overlap with the US East Coast. Distance has not been the
            hard part for a long time.
          </Lede>
        </Container>
      </Section>

      <Section tone="offwhite">
        <Container width="default">
          <SectionHeader
            align="left"
            eyebrow="Markets"
            heading="Companies we build for"
            lede="Every market below has a page covering how delivery, meetings and contracting actually work from there."
            size="lg"
          />

          <div className="mt-12 space-y-12">
            {groups.map(([country, markets]) => (
              <div key={country}>
                <h2 className="text-[12px] font-bold uppercase tracking-[0.16em] text-[#1d1d1f] pb-3 mb-6 border-b-2 border-[#1d1d1f]">
                  {country}
                </h2>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-black/10 rounded-2xl overflow-hidden">
                  {markets.map((m) => (
                    <Link
                      key={m.slug}
                      href={`/locations/${m.slug}`}
                      className="group bg-white p-7 transition-colors hover:bg-[#fbfbfd] focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#0040FF]"
                    >
                      <h3 className="flex items-center gap-1.5 text-[1.125rem] font-bold text-[#1d1d1f] transition-colors group-hover:text-[#0040FF]">
                        {m.city}
                        {m.primary && (
                          <span className="ml-1 rounded-full bg-[#0040FF]/10 px-2 py-0.5 text-[10.5px] font-bold uppercase tracking-wider text-[#0040FF]">
                            Studio
                          </span>
                        )}
                        <span
                          aria-hidden="true"
                          className="transition-transform duration-200 group-hover:translate-x-[3px]"
                        >
                          ›
                        </span>
                      </h3>
                      <p className="mt-2 text-[14.5px] leading-relaxed text-[#6e6e73]">
                        {m.blurb}
                      </p>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section tone="dark">
        <Container width="narrow" className="text-center">
          <Heading as="h2" size="lg">Not on the list?</Heading>
          <Lede tone="light" className="mt-5 mx-auto max-w-[520px]">
            We work with companies well beyond these cities. If you can hold a
            call between 8am and 6pm GMT+1 at least twice a week, distance is
            not going to be what stops this.
          </Lede>
          <div className="mt-9">
            <Link
              href="/start-a-project"
              className="inline-flex items-center rounded-full bg-white px-8 py-[0.9rem] text-[1.0625rem] font-medium text-[#1d1d1f] transition-colors hover:bg-white/90"
            >
              Request a session
            </Link>
          </div>
        </Container>
      </Section>
    </>
  );
}
