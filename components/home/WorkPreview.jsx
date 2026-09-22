import fs from "node:fs";
import path from "node:path";
import Image from "next/image";
import { Container, ActionLink } from "@/components/ui/primitives";
import { getGithubProjects } from "@/lib/github";

/**
 * Selected work.
 *
 * Every tile links to a URL you can open right now. That constraint does real
 * persuasive work: a portfolio of screenshots proves someone can produce
 * screenshots, whereas a list of running sites cannot be faked and takes a
 * reader four seconds to check.
 *
 * Laid out as an editorial spread on white: one project at full width, then
 * the rest in pairs, each with a large picture and a plain caption. Only
 * projects with a real screenshot at /public/images/work/<slug>.jpg are shown
 * here; the full list, drawn placeholders included, lives on /portfolio.
 */

/** Which projects have a real screenshot saved. Checked on the server. */
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

function host(url) {
  return (url || "").replace(/^https?:\/\//, "").replace(/\/$/, "");
}

function Tile({ project, large = false }) {
  return (
    <a
      href={project.homepage}
      target="_blank"
      rel="noopener noreferrer"
      className="group block rounded-[20px] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0040FF] focus-visible:ring-offset-4"
    >
      <div
        className={`relative overflow-hidden rounded-[20px] ring-1 ring-black/[0.08] ${
          large ? "aspect-[16/10] lg:aspect-[21/9]" : "aspect-[16/10]"
        }`}
      >
        <Image
          src={project.screenshot}
          alt={`The ${project.title} website, built by BitLayerX.`}
          fill
          sizes={large ? "(max-width: 1440px) 100vw, 1360px" : "(max-width: 640px) 100vw, 50vw"}
          className="object-cover object-top transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.03]"
        />
      </div>

      <div className="mt-5 flex items-start justify-between gap-4">
        <div className="min-w-0">
          <h3
            className={`font-semibold tracking-[-0.025em] text-[#111111] transition-colors group-hover:text-[#0040FF] ${
              large ? "text-[clamp(1.4rem,2.2vw,1.9rem)]" : "text-[1.3rem]"
            }`}
          >
            {project.title}
          </h3>
          <p className="mt-1 truncate text-[14px] text-[#5E5E5E]">
            {project.description || host(project.homepage)}
          </p>
        </div>
        <span className="mt-1 inline-flex flex-shrink-0 items-center gap-1.5 text-[14.5px] font-medium text-[#0040FF]">
          Visit
          <span
            aria-hidden="true"
            className="transition-transform duration-200 group-hover:-translate-y-[2px] group-hover:translate-x-[2px]"
          >
            ↗
          </span>
        </span>
      </div>
    </a>
  );
}

export default async function WorkPreview() {
  let projects = [];

  try {
    projects = await getGithubProjects();
  } catch {
    projects = [];
  }

  const shown = projects
    .map((p) => ({ ...p, screenshot: screenshotFor(p.slug) }))
    .filter((p) => p.screenshot && p.homepage)
    .slice(0, 5);

  if (shown.length === 0) return null;

  const [lead, ...rest] = shown;

  return (
    <section
      aria-labelledby="work-heading"
      className="border-t border-black/[0.08] bg-white py-[clamp(4.5rem,9vw,8rem)]"
    >
      <Container width="wide">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-[640px]">
            <p className="text-[14px] font-semibold text-[#0040FF]">Selected work</p>
            <h2
              id="work-heading"
              className="mt-4 text-[clamp(2rem,4.6vw,3.6rem)] font-semibold leading-[1.05] tracking-[-0.04em] text-[#111111]"
            >
              Things we built. Still running.
            </h2>
            <p className="mt-5 max-w-[48ch] text-[clamp(1.05rem,1.4vw,1.2rem)] leading-[1.55] text-[#5E5E5E]">
              These are live websites, not pictures of them. Click any one and
              it opens.
            </p>
          </div>

          <ActionLink href="/portfolio">All work</ActionLink>
        </div>

        <div className="mt-12 lg:mt-16">
          <Tile project={lead} large />
        </div>

        {rest.length > 0 && (
          <div className="mt-14 grid gap-x-8 gap-y-14 sm:grid-cols-2">
            {rest.map((p) => (
              <Tile key={p.id} project={p} />
            ))}
          </div>
        )}

        <p className="mt-14 border-t border-black/[0.08] pt-6 text-[14px] text-[#5E5E5E]">
          This list updates itself from GitHub every hour. New sites appear here
          on their own.
        </p>
      </Container>
    </section>
  );
}
