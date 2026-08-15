import fs from "node:fs";
import path from "node:path";
import Link from "next/link";
import {
  Section,
  Container,
  Heading,
  Lede,
  ActionLink,
  PageHero,
} from "@/components/ui/primitives";
import ProjectTile from "@/components/home/ProjectTile";

/**
 * The work index.
 *
 * Every entry is a live URL. Tiles use a real screenshot when one exists at
 * /public/images/work/<slug>.jpg, otherwise a drawn placeholder. To refresh
 * the screenshots, recapture them and overwrite the files.
 */

function screenshotFor(slug) {
  if (!slug) return null;
  const rel = `/images/work/${slug.toLowerCase()}.jpg`;
  try {
    return fs.existsSync(path.join(process.cwd(), "public", rel)) ? rel : null;
  } catch {
    return null;
  }
}

export default function PortfolioClient({ projects = [] }) {
  const withShots = projects.map((p) => ({
    ...p,
    shot: screenshotFor(p.slug),
  }));

  return (
    <>
      <PageHero
        eyebrow="Our work"
        before="Every one of these is"
        highlight="live"
        after="."
        lede="Not mockups and not case study pictures. These are real websites and apps running right now. Click any one and it opens."
        primary={{ href: "/start-a-project", label: "Start a project" }}
        secondary={{ href: "/services", label: "See what we do" }}
      />

      {/* Grid */}
      <Section tone="white">
        <Container width="wide">
          {withShots.length === 0 ? (
            <div className="mx-auto max-w-[560px] text-center">
              <Heading as="h2" size="md">The index is refreshing.</Heading>
              <Lede className="mt-4">
                This list syncs from GitHub every hour and is briefly empty
                while it updates.{" "}
                <Link
                  href="/contact"
                  className="text-[#0040FF] underline underline-offset-4"
                >
                  Ask us for examples
                </Link>{" "}
                and we will send them straight over.
              </Lede>
            </div>
          ) : (
            <>
              <div className="mb-10 flex items-end justify-between gap-6 border-b-2 border-[#0B0B0F] pb-3">
                <h2 className="text-[12px] font-bold uppercase tracking-[0.16em] text-[#0B0B0F]">
                  {withShots.length} live {withShots.length === 1 ? "project" : "projects"}
                </h2>
                <p className="text-[13px] text-[#6e6e73]">Updated hourly</p>
              </div>

              <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {withShots.map((p) => (
                  <a
                    key={p.id}
                    href={p.homepage}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group rounded-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0040FF] focus-visible:ring-offset-4"
                  >
                    <div className="ring-1 ring-black/[0.08] rounded-lg overflow-hidden">
                      <ProjectTile project={p} screenshot={p.shot} />
                    </div>

                    <div className="mt-4 flex items-start justify-between gap-3">
                      <div className="min-w-0">
                        <h3 className="truncate text-[1.15rem] font-bold tracking-[-0.02em] text-[#0B0B0F] transition-colors group-hover:text-[#0040FF]">
                          {p.title}
                        </h3>
                        <p className="mt-1 truncate text-[13.5px] text-[#6e6e73]">
                          {p.homepage?.replace(/^https?:\/\//, "")}
                        </p>
                      </div>
                      <span
                        aria-hidden="true"
                        className="mt-1 flex-shrink-0 text-[#6e6e73] transition-all duration-200 group-hover:translate-x-[3px] group-hover:-translate-y-[3px] group-hover:text-[#0040FF]"
                      >
                        ↗
                      </span>
                    </div>

                    {p.description && (
                      <p className="mt-2 text-[14.5px] leading-relaxed text-[#6e6e73]">
                        {p.description}
                      </p>
                    )}

                    {p.language && (
                      <span className="mt-3 inline-block rounded-full bg-black/[0.05] px-3 py-1 text-[11.5px] font-medium text-[#6e6e73]">
                        {p.language}
                      </span>
                    )}
                  </a>
                ))}
              </div>
            </>
          )}
        </Container>
      </Section>

      {/* CTA */}
      <Section tone="brand">
        <Container width="narrow" className="text-center">
          <Heading as="h2" size="xl" className="mx-auto max-w-[16ch]">
            Yours could be next.
          </Heading>
          <Lede tone="light" className="mx-auto mt-6 max-w-[48ch]">
            Tell us what you need and we will send you a written plan in 48
            hours, with what it will cost and how long it will take.
          </Lede>
          <div className="mt-10">
            <Link
              href="/start-a-project"
              className="inline-flex items-center justify-center rounded-full bg-white px-8 py-[0.95rem] text-[1.0625rem] font-medium text-[#0B0B0F] transition-colors hover:bg-white/90"
            >
              Start a project
            </Link>
          </div>
        </Container>
      </Section>
    </>
  );
}
