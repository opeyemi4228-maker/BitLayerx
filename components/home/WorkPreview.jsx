import fs from "node:fs";
import path from "node:path";
import { Section, Container, ActionLink } from "@/components/ui/primitives";
import { getGithubProjects } from "@/lib/github";
import ProjectTile from "./ProjectTile";

/**
 * Selected work.
 *
 * Every tile links to a URL you can open right now. That constraint does real
 * persuasive work: a portfolio of screenshots proves someone can produce
 * screenshots, whereas a list of running sites cannot be faked and takes a
 * reader four seconds to check.
 *
 * Tiles show a real screenshot when one exists at
 * /public/images/work/<slug>.jpg, and a drawn placeholder otherwise.
 */

/** Which projects have a real screenshot saved. Checked once, at build time. */
function screenshotFor(slug) {
  if (!slug) return null;
  const rel = `/images/work/${slug.toLowerCase()}.jpg`;
  const abs = path.join(process.cwd(), "public", rel);
  try {
    return fs.existsSync(abs) ? rel : null;
  } catch {
    return null;
  }
}

export default async function WorkPreview() {
  let projects = [];

  try {
    projects = (await getGithubProjects()).slice(0, 6);
  } catch {
    projects = [];
  }

  if (projects.length === 0) return null;

  return (
    <Section tone="dark" labelledBy="work-heading">
      <Container width="default">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-[620px]">
            <p className="text-[12px] font-bold uppercase tracking-[0.18em] text-[#5C86FF]">
              Selected work
            </p>
            <h2
              id="work-heading"
              className="mt-4 text-[clamp(2.1rem,5vw,3.9rem)] font-extrabold leading-[1.03] tracking-[-0.035em]"
            >
              Things we built. Still running.
            </h2>
            <p className="mt-5 text-[1.0625rem] leading-relaxed text-white/60">
              These are live websites, not pictures. Click any one and it opens.
            </p>
          </div>

          <ActionLink href="/portfolio" tone="light">
            All work
          </ActionLink>
        </div>

        <div className="mt-14 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <a
              key={p.id}
              href={p.homepage}
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-[#5C86FF] focus-visible:ring-offset-4 focus-visible:ring-offset-[#0B0B0F]"
            >
              <ProjectTile project={p} screenshot={screenshotFor(p.slug)} />

              <div className="mt-4 flex items-start justify-between gap-3">
                <div className="min-w-0">
                  <h3 className="truncate text-[1.15rem] font-bold tracking-[-0.02em] text-white transition-colors group-hover:text-[#5C86FF]">
                    {p.title}
                  </h3>
                  <p className="mt-1 truncate text-[13.5px] text-white/45">
                    {p.homepage?.replace(/^https?:\/\//, "")}
                  </p>
                </div>
                <span
                  aria-hidden="true"
                  className="mt-1 flex-shrink-0 text-white/40 transition-all duration-200 group-hover:translate-x-[3px] group-hover:-translate-y-[3px] group-hover:text-[#5C86FF]"
                >
                  ↗
                </span>
              </div>
            </a>
          ))}
        </div>

        <p className="mt-9 text-[14px] text-white/45">
          This list updates itself from GitHub every hour. New sites appear here
          on their own.
        </p>
      </Container>
    </Section>
  );
}
