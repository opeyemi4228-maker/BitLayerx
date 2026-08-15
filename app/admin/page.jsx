import Link from "next/link";
import { readLeads } from "@/lib/leads";
import { getAllPosts, CATEGORIES } from "@/lib/blog";
import { MARKETS, PAGES, SITE } from "@/lib/seo";
import { getGithubProjects } from "@/lib/github";
import { TESTIMONIALS } from "@/content/testimonials";
import SignOutButton from "./SignOutButton";

export const metadata = {
  title: "Admin",
  robots: { index: false, follow: false, nocache: true },
};

// Always read fresh: an admin looking at enquiries must never see a cached list.
export const dynamic = "force-dynamic";

function formatDateTime(iso) {
  try {
    return new Date(iso).toLocaleString("en-GB", {
      day: "numeric",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  } catch {
    return iso;
  }
}

function Stat({ label, value, sub, href }) {
  const body = (
    <>
      <span className="block text-[12px] font-semibold uppercase tracking-[0.12em] text-[#6e6e73]">
        {label}
      </span>
      <span className="mt-2 block text-[2.25rem] font-extrabold leading-none tracking-[-0.035em] text-[#0B0B0F]">
        {value}
      </span>
      {sub && (
        <span className="mt-2 block text-[13px] text-[#6e6e73]">{sub}</span>
      )}
    </>
  );

  return href ? (
    <Link
      href={href}
      className="block bg-white p-6 transition-colors hover:bg-[#fbfbfd] focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#0040FF]"
    >
      {body}
    </Link>
  ) : (
    <div className="bg-white p-6">{body}</div>
  );
}

export default async function AdminDashboard() {
  const leads = readLeads();
  const posts = getAllPosts();

  let projects = [];
  try {
    projects = await getGithubProjects();
  } catch {
    projects = [];
  }

  const now = Date.now();
  const dayMs = 24 * 60 * 60 * 1000;
  const leads7 = leads.filter(
    (l) => now - new Date(l.receivedAt).getTime() < 7 * dayMs
  );
  const leads30 = leads.filter(
    (l) => now - new Date(l.receivedAt).getTime() < 30 * dayMs
  );
  const newLeads = leads.filter((l) => l.status === "new");

  // Which services people actually ask for. This is the single most useful
  // number on the page: it tells you what to put at the top of the site.
  const byService = leads.reduce((acc, l) => {
    const key = l.service || "Not stated";
    acc[key] = (acc[key] || 0) + 1;
    return acc;
  }, {});
  const serviceRanking = Object.entries(byService).sort((a, b) => b[1] - a[1]);

  const byBudget = leads.reduce((acc, l) => {
    const key = l.budget || "Not stated";
    acc[key] = (acc[key] || 0) + 1;
    return acc;
  }, {});

  const routeCount =
    Object.keys(PAGES).length +
    posts.length +
    CATEGORIES.length +
    MARKETS.length +
    4;

  return (
    <div className="min-h-screen bg-[#fbfbfd]">
      {/* Header */}
      <header className="border-b border-black/[0.07] bg-white">
        <div className="mx-auto flex max-w-[1280px] items-center justify-between gap-4 px-5 py-5 sm:px-8">
          <div>
            <h1 className="text-[1.5rem] font-extrabold tracking-[-0.03em] text-[#0B0B0F]">
              Admin
            </h1>
            <p className="mt-0.5 text-[13.5px] text-[#6e6e73]">
              Everything the site is collecting, in one place.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <Link
              href="/"
              className="rounded-full border border-black/15 px-5 py-2 text-[14.5px] font-medium text-[#0B0B0F] transition-colors hover:border-black/40"
            >
              View site
            </Link>
            <SignOutButton />
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-[1280px] px-5 py-8 sm:px-8">
        {/* Numbers */}
        <div className="grid gap-px overflow-hidden rounded-2xl bg-black/10 sm:grid-cols-2 lg:grid-cols-4">
          <Stat
            label="New enquiries"
            value={newLeads.length}
            sub={`${leads.length} total, all time`}
          />
          <Stat label="Last 7 days" value={leads7.length} sub="Enquiries received" />
          <Stat label="Last 30 days" value={leads30.length} sub="Enquiries received" />
          <Stat
            label="Live pages"
            value={routeCount}
            sub="Indexed by the sitemap"
          />
        </div>

        <div className="mt-px grid gap-px overflow-hidden rounded-2xl bg-black/10 sm:grid-cols-2 lg:grid-cols-4">
          <Stat label="Blog posts" value={posts.length} sub="Published" href="/blog" />
          <Stat
            label="Live projects"
            value={projects.length}
            sub="Synced from GitHub"
            href="/portfolio"
          />
          <Stat label="Markets" value={MARKETS.length} sub="Location pages" href="/locations" />
          <Stat
            label="Testimonials"
            value={TESTIMONIALS.length}
            sub={TESTIMONIALS.length === 0 ? "Add real quotes to enable" : "Published"}
          />
        </div>

        {/* Enquiries */}
        <section className="mt-10">
          <h2 className="border-b-2 border-[#0B0B0F] pb-3 text-[12px] font-bold uppercase tracking-[0.16em] text-[#0B0B0F]">
            Enquiries
          </h2>

          {leads.length === 0 ? (
            <div className="mt-6 rounded-2xl border border-black/[0.07] bg-white p-8">
              <p className="text-[1.0625rem] font-semibold text-[#0B0B0F]">
                No enquiries captured yet.
              </p>
              <p className="mt-2 max-w-[70ch] text-[14.5px] leading-relaxed text-[#6e6e73]">
                Every submission from the project form and the contact form
                lands here. Note that serverless hosts have a read only file
                system, so on Vercel this list stays empty unless you set
                LEAD_WEBHOOK_URL to forward enquiries somewhere durable. Every
                enquiry is also written to the server log as a line beginning
                [LEAD], which your host retains either way.
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                <Link
                  href="/start-a-project"
                  className="rounded-full bg-[#0040FF] px-6 py-2.5 text-[14.5px] font-medium text-white transition-colors hover:bg-[#0B0B0F]"
                >
                  Open the project form
                </Link>
                <Link
                  href="/contact"
                  className="rounded-full border border-black/15 px-6 py-2.5 text-[14.5px] font-medium text-[#0B0B0F] transition-colors hover:border-black/40"
                >
                  Open the contact form
                </Link>
              </div>
            </div>
          ) : (
            <div className="mt-6 overflow-hidden rounded-2xl border border-black/[0.07] bg-white">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-[14.5px]">
                  <thead>
                    <tr className="border-b border-black/[0.09] bg-[#fbfbfd]">
                      <th className="whitespace-nowrap px-5 py-3 font-bold text-[#0B0B0F]">Received</th>
                      <th className="whitespace-nowrap px-5 py-3 font-bold text-[#0B0B0F]">Name</th>
                      <th className="whitespace-nowrap px-5 py-3 font-bold text-[#0B0B0F]">Contact</th>
                      <th className="whitespace-nowrap px-5 py-3 font-bold text-[#0B0B0F]">Wants</th>
                      <th className="whitespace-nowrap px-5 py-3 font-bold text-[#0B0B0F]">Budget</th>
                      <th className="whitespace-nowrap px-5 py-3 font-bold text-[#0B0B0F]">Timeline</th>
                      <th className="px-5 py-3 font-bold text-[#0B0B0F]">Message</th>
                    </tr>
                  </thead>
                  <tbody>
                    {leads.map((l) => (
                      <tr key={l.id} className="border-b border-black/[0.06] align-top last:border-0">
                        <td className="whitespace-nowrap px-5 py-4 text-[13px] text-[#6e6e73]">
                          {formatDateTime(l.receivedAt)}
                        </td>
                        <td className="px-5 py-4">
                          <span className="block font-semibold text-[#0B0B0F]">{l.name}</span>
                          {l.company && (
                            <span className="mt-0.5 block text-[13px] text-[#6e6e73]">{l.company}</span>
                          )}
                        </td>
                        <td className="px-5 py-4">
                          <a
                            href={`mailto:${l.email}`}
                            className="block break-all font-medium text-[#0040FF] underline underline-offset-2"
                          >
                            {l.email}
                          </a>
                          {l.phone && (
                            <a
                              href={`tel:${l.phone.replace(/\s/g, "")}`}
                              className="mt-0.5 block text-[13px] text-[#6e6e73]"
                            >
                              {l.phone}
                            </a>
                          )}
                        </td>
                        <td className="px-5 py-4 text-[#0B0B0F]">{l.service || "Not stated"}</td>
                        <td className="px-5 py-4 text-[#6e6e73]">{l.budget || "Not stated"}</td>
                        <td className="px-5 py-4 text-[#6e6e73]">{l.timeline || "Not stated"}</td>
                        <td className="max-w-[420px] px-5 py-4 text-[#6e6e73]">{l.message}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </section>

        {/* Demand breakdown */}
        {leads.length > 0 && (
          <section className="mt-10 grid gap-8 lg:grid-cols-2">
            <div>
              <h2 className="border-b-2 border-[#0B0B0F] pb-3 text-[12px] font-bold uppercase tracking-[0.16em] text-[#0B0B0F]">
                What people ask for
              </h2>
              <dl className="mt-5 divide-y divide-black/[0.07] rounded-2xl border border-black/[0.07] bg-white">
                {serviceRanking.map(([service, count]) => (
                  <div key={service} className="flex items-center justify-between px-5 py-3.5">
                    <dt className="text-[14.5px] text-[#0B0B0F]">{service}</dt>
                    <dd className="text-[14.5px] font-bold tabular-nums text-[#0040FF]">{count}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div>
              <h2 className="border-b-2 border-[#0B0B0F] pb-3 text-[12px] font-bold uppercase tracking-[0.16em] text-[#0B0B0F]">
                Budgets stated
              </h2>
              <dl className="mt-5 divide-y divide-black/[0.07] rounded-2xl border border-black/[0.07] bg-white">
                {Object.entries(byBudget)
                  .sort((a, b) => b[1] - a[1])
                  .map(([budget, count]) => (
                    <div key={budget} className="flex items-center justify-between px-5 py-3.5">
                      <dt className="text-[14.5px] text-[#0B0B0F]">{budget}</dt>
                      <dd className="text-[14.5px] font-bold tabular-nums text-[#0040FF]">{count}</dd>
                    </div>
                  ))}
              </dl>
            </div>
          </section>
        )}

        {/* Content */}
        <section className="mt-10 grid gap-8 lg:grid-cols-2">
          <div>
            <h2 className="border-b-2 border-[#0B0B0F] pb-3 text-[12px] font-bold uppercase tracking-[0.16em] text-[#0B0B0F]">
              Blog posts
            </h2>
            <ul className="mt-5 divide-y divide-black/[0.07] rounded-2xl border border-black/[0.07] bg-white">
              {posts.map((p) => (
                <li key={p.slug} className="px-5 py-4">
                  <Link
                    href={`/blog/${p.slug}`}
                    className="block font-semibold text-[#0B0B0F] hover:text-[#0040FF]"
                  >
                    {p.title}
                  </Link>
                  <p className="mt-1 text-[13px] text-[#6e6e73]">
                    {p.published} · {p.readingTime} min · {p.category}
                    {p.cover ? " · has cover image" : " · no cover image"}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="border-b-2 border-[#0B0B0F] pb-3 text-[12px] font-bold uppercase tracking-[0.16em] text-[#0B0B0F]">
              Live projects
            </h2>
            <ul className="mt-5 divide-y divide-black/[0.07] rounded-2xl border border-black/[0.07] bg-white">
              {projects.map((p) => (
                <li key={p.id} className="px-5 py-4">
                  <a
                    href={p.homepage}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block font-semibold text-[#0B0B0F] hover:text-[#0040FF]"
                  >
                    {p.title}
                  </a>
                  <p className="mt-1 break-all text-[13px] text-[#6e6e73]">
                    {p.homepage?.replace(/^https?:\/\//, "")}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Configuration health */}
        <section className="mt-10">
          <h2 className="border-b-2 border-[#0B0B0F] pb-3 text-[12px] font-bold uppercase tracking-[0.16em] text-[#0B0B0F]">
            Configuration
          </h2>
          <p className="mt-4 max-w-[70ch] text-[14.5px] leading-relaxed text-[#6e6e73]">
            Each item below is off until you set the matching variable in .env.
            Nothing here is required for the site to run, but analytics and the
            lead webhook are what turn this dashboard from a list into a
            measurement tool.
          </p>
          <dl className="mt-5 divide-y divide-black/[0.07] overflow-hidden rounded-2xl border border-black/[0.07] bg-white">
            {[
              ["Google Analytics", "NEXT_PUBLIC_GA_ID", process.env.NEXT_PUBLIC_GA_ID],
              ["Microsoft Clarity", "NEXT_PUBLIC_CLARITY_ID", process.env.NEXT_PUBLIC_CLARITY_ID],
              ["Meta Pixel", "NEXT_PUBLIC_FB_PIXEL_ID", process.env.NEXT_PUBLIC_FB_PIXEL_ID],
              ["Search Console", "NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION", process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION],
              ["Lead webhook", "LEAD_WEBHOOK_URL", process.env.LEAD_WEBHOOK_URL],
              ["GitHub token", "GITHUB_TOKEN", process.env.GITHUB_TOKEN],
            ].map(([label, key, value]) => (
              <div key={key} className="flex items-center justify-between gap-4 px-5 py-3.5">
                <div>
                  <dt className="text-[14.5px] font-semibold text-[#0B0B0F]">{label}</dt>
                  <dd className="mt-0.5 font-mono text-[12px] text-[#6e6e73]">{key}</dd>
                </div>
                <span
                  className={`flex-shrink-0 rounded-full px-3 py-1 text-[11.5px] font-bold uppercase tracking-wider ${
                    value ? "bg-[#0040FF]/10 text-[#0040FF]" : "bg-black/[0.06] text-[#6e6e73]"
                  }`}
                >
                  {value ? "Configured" : "Not set"}
                </span>
              </div>
            ))}
          </dl>
        </section>

        <p className="mt-10 text-[13px] text-[#6e6e73]">
          {SITE.name} admin. Sessions expire after 12 hours.
        </p>
      </main>
    </div>
  );
}
