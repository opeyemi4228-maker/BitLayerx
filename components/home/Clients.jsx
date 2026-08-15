import { Section, Container, ActionLink } from "@/components/ui/primitives";
import { getGithubProjects } from "@/lib/github";

/**
 * Clients.
 *
 * Real social proof that needs nobody's permission and cannot be disputed:
 * the names of organisations whose sites we built and which are running right
 * now. A visitor can click through and check every one in about four seconds.
 *
 * This is not a substitute for testimonials. It is what we can honestly show
 * while we wait for clients to give us words we are allowed to quote.
 */
export default async function Clients() {
  let projects = [];
  try {
    projects = await getGithubProjects();
  } catch {
    projects = [];
  }

  if (projects.length < 3) return null;

  return (
    <Section tone="white" rhythm="tight" labelledBy="clients-heading" className="border-b border-black/[0.07]">
      <Container width="default">
        <p
          id="clients-heading"
          className="text-center text-[13px] font-semibold text-[#6e6e73]"
        >
          Businesses running on something we built
        </p>

        <ul className="mt-8 flex flex-wrap items-center justify-center gap-x-10 gap-y-5 sm:gap-x-14">
          {projects.slice(0, 8).map((p) => (
            <li key={p.id}>
              <a
                href={p.homepage}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[1.05rem] font-bold tracking-[-0.02em] text-[#0B0B0F]/45 transition-colors hover:text-[#0040FF] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0040FF] focus-visible:ring-offset-2 rounded"
              >
                {p.title}
              </a>
            </li>
          ))}
        </ul>

        <p className="mt-8 text-center">
          <ActionLink href="/portfolio">Open any of them</ActionLink>
        </p>
      </Container>
    </Section>
  );
}
