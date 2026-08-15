import Link from "next/link";
import { notFound } from "next/navigation";
import { SITE, MARKETS } from "@/lib/seo";
import {
  Section,
  Container,
  Heading,
  Lede,
  ActionLink,
  SectionHeader,
} from "@/components/ui/primitives";

export function generateStaticParams() {
  return MARKETS.map((m) => ({ slug: m.slug }));
}

function market(slug) {
  return MARKETS.find((m) => m.slug === slug) ?? null;
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const m = market(slug);

  if (!m) {
    return { title: "Location not found", robots: { index: false, follow: true } };
  }

  const url = `${SITE.url}/locations/${m.slug}`;
  const title = `Digital Agency in ${m.city}, Design, Engineering & Growth`;
  const description = `BitLayerX builds websites, software, brands and growth programmes for companies in ${m.city}, ${m.country}. One team across strategy, design, engineering, brand, film and marketing.`;

  return {
    title,
    description,
    keywords: [
      `web design ${m.city}`,
      `software development ${m.city}`,
      `digital agency ${m.city}`,
      `app developers ${m.city}`,
      `branding agency ${m.city}`,
      `SEO agency ${m.city}`,
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
    twitter: {
      card: "summary_large_image",
      title,
      description,
      site: SITE.twitter,
    },
  };
}

const PRACTICES = [
  {
    title: "Websites & marketing sites",
    body: "Fast, indexed, and built so your team can update them without calling us.",
    href: "/services",
  },
  {
    title: "Web & mobile applications",
    body: "Accounts, payments, dashboards and the architecture to survive real usage.",
    href: "/solutions",
  },
  {
    title: "Brand identity",
    body: "Naming, logo systems and the guidelines that keep it consistent afterwards.",
    href: "/design",
  },
  {
    title: "Commercial film",
    body: "Brand films and ad creative shot and cut in-house, not subcontracted.",
    href: "/services",
  },
  {
    title: "Marketing & growth",
    body: "SEO, paid acquisition and lifecycle email measured against revenue.",
    href: "/marketing",
  },
  {
    title: "Enterprise engineering",
    body: "Integration, security and support for organisations where downtime has a board-level cost.",
    href: "/enterprise",
  },
];

export default async function LocationPage({ params }) {
  const { slug } = await params;
  const m = market(slug);

  if (!m) notFound();

  const others = MARKETS.filter((x) => x.slug !== m.slug);
  const url = `${SITE.url}/locations/${m.slug}`;

  const schema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${url}#service`,
    name: `BitLayerX, ${m.city}`,
    url,
    description: `Design, engineering, brand and growth services for companies in ${m.city}, ${m.country}.`,
    parentOrganization: { "@id": `${SITE.url}/#organization` },
    telephone: SITE.phone,
    email: SITE.email,
    priceRange: "$$$",
    areaServed: {
      "@type": "City",
      name: m.city,
      containedInPlace: { "@type": "Country", name: m.country },
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: m.city,
      addressRegion: m.region,
      addressCountry: m.countryCode,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* ── Hero ───────────────────────────────────────────────────────── */}
      <Section tone="white" rhythm="tight">
        <Container width="narrow">
          <nav aria-label="Breadcrumb" className="mb-6 text-[13.5px] text-[#6e6e73]">
            <Link href="/" className="hover:text-[#1d1d1f]">Home</Link>
            <span aria-hidden="true" className="mx-2">›</span>
            <span>Locations</span>
          </nav>

          <p className="text-[12px] font-bold uppercase tracking-[0.18em] text-[#0040FF]">
            {m.country}
          </p>
          <Heading as="h1" size="xl" className="mt-4">
            A digital team for {m.city}.
          </Heading>
          <Lede className="mt-5 max-w-[620px]">{m.blurb}</Lede>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Link
              href="/start-a-project"
              className="inline-flex items-center rounded-full bg-[#0040FF] px-7 py-[0.85rem] text-[1.0625rem] font-medium text-white transition-colors hover:bg-black"
            >
              Request a session
            </Link>
            <ActionLink href="/portfolio">See live work</ActionLink>
          </div>
        </Container>
      </Section>

      {/* ── What we do there ───────────────────────────────────────────── */}
      <Section tone="offwhite">
        <Container width="default">
          <SectionHeader
            align="left"
            eyebrow="Practices"
            heading={`What we build for ${m.city} companies`}
            lede="Six practices under one roof and one contract, so nothing falls into the gap between two agencies."
            size="lg"
          />

          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-black/10 rounded-2xl overflow-hidden">
            {PRACTICES.map((p) => (
              <Link
                key={p.title}
                href={p.href}
                className="group bg-white p-7 transition-colors hover:bg-[#f5f5f7] focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#0040FF]"
              >
                <h3 className="flex items-center gap-1.5 text-[1.0625rem] font-bold text-[#1d1d1f] transition-colors group-hover:text-[#0040FF]">
                  {p.title}
                  <span
                    aria-hidden="true"
                    className="transition-transform duration-200 group-hover:translate-x-[3px]"
                  >
                    ›
                  </span>
                </h3>
                <p className="mt-2 text-[14.5px] leading-relaxed text-[#6e6e73]">
                  {p.body}
                </p>
              </Link>
            ))}
          </div>
        </Container>
      </Section>

      {/* ── How working with us works from there ───────────────────────── */}
      <Section tone="white">
        <Container width="narrow">
          <SectionHeader
            align="left"
            eyebrow="Practicalities"
            heading={`Working with us from ${m.city}`}
            size="lg"
          />

          <dl className="mt-10 divide-y divide-black/10 border-y border-black/10">
            <div className="grid sm:grid-cols-[180px_1fr] gap-2 sm:gap-8 py-5">
              <dt className="text-[14px] font-bold text-[#1d1d1f]">Time zone</dt>
              <dd className="text-[15.5px] leading-relaxed text-[#6e6e73]">
                Our studio runs on GMT+1. {m.timezone}
              </dd>
            </div>

            <div className="grid sm:grid-cols-[180px_1fr] gap-2 sm:gap-8 py-5">
              <dt className="text-[14px] font-bold text-[#1d1d1f]">Meetings</dt>
              <dd className="text-[15.5px] leading-relaxed text-[#6e6e73]">
                {m.meetings}
              </dd>
            </div>

            <div className="grid sm:grid-cols-[180px_1fr] gap-2 sm:gap-8 py-5">
              <dt className="text-[14px] font-bold text-[#1d1d1f]">Contracting</dt>
              <dd className="text-[15.5px] leading-relaxed text-[#6e6e73]">
                {m.contracting}
              </dd>
            </div>

            <div className="grid sm:grid-cols-[180px_1fr] gap-2 sm:gap-8 py-5">
              <dt className="text-[14px] font-bold text-[#1d1d1f]">First step</dt>
              <dd className="text-[15.5px] leading-relaxed text-[#6e6e73]">
                One 45-minute session, then a written plan with scope, timeline
                and price within 48 hours, yours to keep either way.
              </dd>
            </div>
          </dl>

          <p className="mt-8 text-[15.5px] leading-relaxed text-[#6e6e73]">
            More on how we run delivery across time zones in{" "}
            <Link
              href="/blog/delivery-across-time-zones"
              className="font-medium text-[#0040FF] underline underline-offset-4"
            >
              this piece on working from Abuja to London and Dubai
            </Link>
            .
          </p>
        </Container>
      </Section>

      {/* ── Other markets ──────────────────────────────────────────────── */}
      <Section tone="offwhite" rhythm="tight">
        <Container width="default">
          <h2 className="text-[12px] font-bold uppercase tracking-[0.16em] text-[#1d1d1f] pb-3 mb-7 border-b-2 border-[#1d1d1f]">
            We also work with companies in
          </h2>
          <div className="flex flex-wrap gap-3">
            {others.map((o) => (
              <Link
                key={o.slug}
                href={`/locations/${o.slug}`}
                className="rounded-full border border-black/15 bg-white px-5 py-2.5 text-[14.5px] font-medium text-[#1d1d1f] transition-colors hover:border-[#0040FF] hover:text-[#0040FF]"
              >
                {o.city}, {o.country}
              </Link>
            ))}
          </div>
        </Container>
      </Section>

      {/* ── CTA ────────────────────────────────────────────────────────── */}
      <Section tone="dark">
        <Container width="narrow" className="text-center">
          <Heading as="h2" size="lg">
            Building something in {m.city}?
          </Heading>
          <Lede tone="light" className="mt-5 mx-auto max-w-[540px]">
            Tell us what it is. You will have a written plan within 48 hours,
            whether or not you go ahead with us.
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
