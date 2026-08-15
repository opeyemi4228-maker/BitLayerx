import Link from "next/link";
import { readAll } from "@/lib/store";
import { readLeads } from "@/lib/leads";
import { getAllPosts } from "@/lib/blog";
import { MARKETS, PAGES, SITE } from "@/lib/seo";
import { TESTIMONIALS } from "@/content/testimonials";
import { locationLabel } from "@/lib/geo";
import SignOutButton from "./SignOutButton";
import AdminTabs from "./AdminTabs";
import {
  Stat,
  StatRow,
  Panel,
  Ranking,
  EmptyState,
  EnquiryTable,
  formatDateTime,
} from "./panels";

export const metadata = {
  title: "Admin",
  robots: { index: false, follow: false, nocache: true },
};

// Never cache: an operator looking at enquiries must see the current list.
export const dynamic = "force-dynamic";

const DAY = 24 * 60 * 60 * 1000;

/** Count occurrences of a field across rows. */
function tally(rows, pick) {
  return rows.reduce((acc, r) => {
    const key = pick(r) || "Unknown";
    acc[key] = (acc[key] || 0) + 1;
    return acc;
  }, {});
}

function within(rows, field, days) {
  const cutoff = Date.now() - days * DAY;
  return rows.filter((r) => new Date(r[field]).getTime() >= cutoff);
}

export default async function AdminDashboard() {
  const leads = readLeads();
  const subscribers = readAll("subscribers");
  const views = readAll("pageviews");
  const posts = getAllPosts();

  // Split enquiries by which form produced them. They are different
  // conversations: a project brief needs a plan, a contact note needs a reply.
  const projectLeads = leads.filter(
    (l) => (l.source || "").includes("start-a-project") || l.budget || l.timeline
  );
  const contactLeads = leads.filter((l) => !projectLeads.includes(l));

  const views7 = within(views, "at", 7);
  const views30 = within(views, "at", 30);
  const leads30 = within(leads, "receivedAt", 30);

  // Unique-ish visitors. Without a cookie this can only ever be an estimate,
  // and it is labelled as one rather than dressed up as a headcount.
  const uniqueish = new Set(views.map((v) => `${v.ip}|${v.device}`)).size;

  const conversion =
    views.length > 0 ? ((leads.length / views.length) * 100).toFixed(1) : null;

  const routeCount = Object.keys(PAGES).length + posts.length + MARKETS.length + 6;

  // ── Page visitors ───────────────────────────────────────────────────────
  const visitorsTab = (
    <>
      <StatRow>
        <Stat label="Page views" value={views.length} sub="All time" />
        <Stat label="Last 7 days" value={views7.length} sub="Page views" />
        <Stat label="Last 30 days" value={views30.length} sub="Page views" />
        <Stat label="Visitors" value={uniqueish} sub="Estimate, no cookies used" />
      </StatRow>

      {views.length === 0 ? (
        <div className="mt-8">
          <EmptyState
            title="No page views recorded yet."
            body="Every page sends one beacon after it paints. Nothing appears here until somebody visits, and anyone with Do Not Track enabled is never recorded. Bots and admin pages are excluded so the numbers describe customers rather than crawlers. On a serverless host this store cannot persist, so use Google Analytics for durable figures."
            actions={
              <Link
                href="/"
                className="rounded-full bg-[#0040FF] px-6 py-2.5 text-[14.5px] font-medium text-white transition-colors hover:bg-black"
              >
                Open the site
              </Link>
            }
          />
        </div>
      ) : (
        <>
          <div className="mt-8 grid gap-8 lg:grid-cols-3">
            <Panel title="Most visited pages">
              <Ranking data={tally(views, (v) => v.path)} />
            </Panel>
            <Panel title="Countries">
              <Ranking data={tally(views, (v) => v.countryName || v.country)} />
            </Panel>
            <Panel title="Cities">
              <Ranking data={tally(views, (v) => v.city)} />
            </Panel>
          </div>

          <div className="mt-8 grid gap-8 lg:grid-cols-3">
            <Panel title="How they found us">
              <Ranking data={tally(views, (v) => v.channel)} />
            </Panel>
            <Panel title="Device">
              <Ranking data={tally(views, (v) => v.device)} />
            </Panel>
            <Panel title="Language">
              <Ranking data={tally(views, (v) => v.language)} />
            </Panel>
          </div>

          <div className="mt-8">
            <Panel title="Recent visits" note="Newest first, most recent 40.">
              <div className="overflow-hidden rounded-2xl border border-black/[0.07] bg-white">
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-[14.5px]">
                    <thead>
                      <tr className="border-b border-black/[0.09] bg-[#f5f5f7]">
                        {["When", "Page", "Location", "IP", "Device", "Came from"].map((h) => (
                          <th key={h} className="whitespace-nowrap px-5 py-3 font-bold text-[#1d1d1f]">
                            {h}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {views.slice(0, 40).map((v) => (
                        <tr key={v.id} className="border-b border-black/[0.06] last:border-0">
                          <td className="whitespace-nowrap px-5 py-3 text-[13px] text-[#6e6e73]">
                            {formatDateTime(v.at)}
                          </td>
                          <td className="max-w-[240px] px-5 py-3">
                            <span className="block truncate text-[#1d1d1f]">{v.path}</span>
                          </td>
                          <td className="whitespace-nowrap px-5 py-3 text-[#6e6e73]">
                            {locationLabel(v)}
                          </td>
                          <td className="whitespace-nowrap px-5 py-3 font-mono text-[12px] text-[#6e6e73]">
                            {v.ip}
                          </td>
                          <td className="whitespace-nowrap px-5 py-3 text-[#6e6e73]">{v.device}</td>
                          <td className="whitespace-nowrap px-5 py-3 text-[#6e6e73]">{v.channel}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </Panel>
          </div>
        </>
      )}
    </>
  );

  // ── Project briefs ──────────────────────────────────────────────────────
  const projectsTab = (
    <>
      <StatRow>
        <Stat label="Project briefs" value={projectLeads.length} sub="All time" />
        <Stat
          label="New"
          value={projectLeads.filter((l) => l.status === "new").length}
          sub="Not yet actioned"
        />
        <Stat
          label="Last 30 days"
          value={within(projectLeads, "receivedAt", 30).length}
          sub="Received"
        />
        <Stat
          label="Conversion"
          value={conversion ? `${conversion}%` : "N/A"}
          sub="Enquiries per page view"
        />
      </StatRow>

      <div className="mt-8">
        {projectLeads.length === 0 ? (
          <EmptyState
            title="No project briefs yet."
            body="Submissions from the start a project form appear here with budget, timeline, location and the page they came from."
            actions={
              <Link
                href="/start-a-project"
                className="rounded-full bg-[#0040FF] px-6 py-2.5 text-[14.5px] font-medium text-white transition-colors hover:bg-black"
              >
                Open the form
              </Link>
            }
          />
        ) : (
          <EnquiryTable rows={projectLeads} />
        )}
      </div>

      {projectLeads.length > 0 && (
        <div className="mt-8 grid gap-8 lg:grid-cols-3">
          <Panel title="What they want">
            <Ranking data={tally(projectLeads, (l) => l.service)} />
          </Panel>
          <Panel title="Budgets">
            <Ranking data={tally(projectLeads, (l) => l.budget)} />
          </Panel>
          <Panel title="Timelines">
            <Ranking data={tally(projectLeads, (l) => l.timeline)} />
          </Panel>
        </div>
      )}
    </>
  );

  // ── Contact messages ────────────────────────────────────────────────────
  const contactsTab = (
    <>
      <StatRow>
        <Stat label="Contact messages" value={contactLeads.length} sub="All time" />
        <Stat
          label="Last 30 days"
          value={within(contactLeads, "receivedAt", 30).length}
          sub="Received"
        />
        <Stat label="All enquiries" value={leads.length} sub="Contact plus projects" />
        <Stat label="Last 30 days" value={leads30.length} sub="All enquiries" />
      </StatRow>

      <div className="mt-8">
        {contactLeads.length === 0 ? (
          <EmptyState
            title="No contact messages yet."
            body="Messages sent from the contact page appear here, with the location and the page they were sent from."
            actions={
              <Link
                href="/contact"
                className="rounded-full bg-[#0040FF] px-6 py-2.5 text-[14.5px] font-medium text-white transition-colors hover:bg-black"
              >
                Open the contact page
              </Link>
            }
          />
        ) : (
          <EnquiryTable rows={contactLeads} />
        )}
      </div>

      {leads.length > 0 && (
        <div className="mt-8 grid gap-8 lg:grid-cols-3">
          <Panel title="Countries">
            <Ranking data={tally(leads, (l) => l.origin?.countryName || l.origin?.country)} />
          </Panel>
          <Panel title="Cities">
            <Ranking data={tally(leads, (l) => l.origin?.city)} />
          </Panel>
          <Panel title="Page they enquired from" note="Which page actually sells.">
            <Ranking
              data={tally(leads, (l) =>
                l.source && l.source !== "direct"
                  ? l.source.replace(/^https?:\/\/[^/]+/, "") || "/"
                  : "Direct"
              )}
            />
          </Panel>
        </div>
      )}
    </>
  );

  // ── Subscribers ─────────────────────────────────────────────────────────
  const subscribersTab = (
    <>
      <StatRow>
        <Stat label="Subscribers" value={subscribers.length} sub="Active" />
        <Stat
          label="Last 7 days"
          value={within(subscribers, "subscribedAt", 7).length}
          sub="New signups"
        />
        <Stat
          label="Last 30 days"
          value={within(subscribers, "subscribedAt", 30).length}
          sub="New signups"
        />
        <Stat
          label="Signup rate"
          value={
            views.length > 0
              ? `${((subscribers.length / views.length) * 100).toFixed(1)}%`
              : "N/A"
          }
          sub="Per page view"
        />
      </StatRow>

      <div className="mt-8">
        {subscribers.length === 0 ? (
          <EmptyState
            title="No subscribers yet."
            body="Addresses appear here when somebody types one into the newsletter form. There is no other way an address can reach this list."
          />
        ) : (
          <>
            <div className="overflow-hidden rounded-2xl border border-black/[0.07] bg-white">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-[14.5px]">
                  <thead>
                    <tr className="border-b border-black/[0.09] bg-[#f5f5f7]">
                      {["Subscribed", "Email", "Location", "Device", "From page"].map((h) => (
                        <th key={h} className="whitespace-nowrap px-5 py-3 font-bold text-[#1d1d1f]">
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {subscribers.map((s) => (
                      <tr key={s.id} className="border-b border-black/[0.06] last:border-0">
                        <td className="whitespace-nowrap px-5 py-3 text-[13px] text-[#6e6e73]">
                          {formatDateTime(s.subscribedAt)}
                        </td>
                        <td className="px-5 py-3">
                          <a
                            href={`mailto:${s.email}`}
                            className="break-all font-medium text-[#0040FF] underline underline-offset-2"
                          >
                            {s.email}
                          </a>
                        </td>
                        <td className="whitespace-nowrap px-5 py-3 text-[#6e6e73]">
                          {locationLabel(s.origin)}
                        </td>
                        <td className="whitespace-nowrap px-5 py-3 text-[#6e6e73]">
                          {s.origin?.device || "Unknown"}
                        </td>
                        <td className="max-w-[220px] px-5 py-3 text-[12.5px] text-[#6e6e73]">
                          <span className="block truncate">
                            {s.source && s.source !== "direct"
                              ? s.source.replace(/^https?:\/\/[^/]+/, "") || "/"
                              : "Direct"}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <p className="mt-5 text-[13px] leading-relaxed text-[#6e6e73]">
              Copy every address:{" "}
              <span className="select-all break-all font-mono text-[12px] text-[#1d1d1f]">
                {subscribers.map((s) => s.email).join(", ")}
              </span>
            </p>
          </>
        )}
      </div>
    </>
  );

  // ── Site ────────────────────────────────────────────────────────────────
  const siteTab = (
    <>
      <StatRow>
        <Stat label="Live pages" value={routeCount} sub="In the sitemap" />
        <Stat label="Blog posts" value={posts.length} sub="Published" />
        <Stat label="Markets" value={MARKETS.length} sub="Location pages" />
        <Stat
          label="Testimonials"
          value={TESTIMONIALS.length}
          sub={TESTIMONIALS.length === 0 ? "Add real quotes to enable" : "Published"}
        />
      </StatRow>

      <div className="mt-8 grid gap-8 lg:grid-cols-2">
        <Panel title="Blog posts">
          <ul className="divide-y divide-black/[0.07] overflow-hidden rounded-2xl border border-black/[0.07] bg-white">
            {posts.map((p) => (
              <li key={p.slug} className="px-5 py-4">
                <Link
                  href={`/blog/${p.slug}`}
                  className="block font-semibold text-[#1d1d1f] hover:text-[#0040FF]"
                >
                  {p.title}
                </Link>
                <p className="mt-1 text-[13px] text-[#6e6e73]">
                  {p.published} · {p.readingTime} min · {p.category}
                  {p.cover ? " · has cover" : " · no cover"}
                </p>
              </li>
            ))}
          </ul>
        </Panel>

        <Panel
          title="Configuration"
          note="Each item is off until the matching variable is set in .env."
        >
          <dl className="divide-y divide-black/[0.07] overflow-hidden rounded-2xl border border-black/[0.07] bg-white">
            {[
              ["Google Analytics", "NEXT_PUBLIC_GA_ID", process.env.NEXT_PUBLIC_GA_ID],
              ["Microsoft Clarity", "NEXT_PUBLIC_CLARITY_ID", process.env.NEXT_PUBLIC_CLARITY_ID],
              ["Meta Pixel", "NEXT_PUBLIC_FB_PIXEL_ID", process.env.NEXT_PUBLIC_FB_PIXEL_ID],
              [
                "Search Console",
                "NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION",
                process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
              ],
              ["Lead webhook", "LEAD_WEBHOOK_URL", process.env.LEAD_WEBHOOK_URL],
              ["GitHub token", "GITHUB_TOKEN", process.env.GITHUB_TOKEN],
            ].map(([label, key, value]) => (
              <div key={key} className="flex items-center justify-between gap-4 px-5 py-3.5">
                <div>
                  <dt className="text-[14.5px] font-semibold text-[#1d1d1f]">{label}</dt>
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
        </Panel>
      </div>
    </>
  );

  return (
    <div className="min-h-screen bg-[#f5f5f7]">
      <header className="border-b border-black/[0.07] bg-white">
        <div className="mx-auto flex max-w-[1280px] items-center justify-between gap-4 px-5 py-5 sm:px-8">
          <div>
            <h1 className="text-[1.5rem] font-extrabold tracking-[-0.03em] text-[#1d1d1f]">
              Admin
            </h1>
            <p className="mt-0.5 text-[13.5px] text-[#6e6e73]">
              Everything the site is collecting, in one place.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <Link
              href="/"
              className="rounded-full border border-black/15 px-5 py-2 text-[14.5px] font-medium text-[#1d1d1f] transition-colors hover:border-black/40"
            >
              View site
            </Link>
            <SignOutButton />
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-[1280px] px-5 py-8 sm:px-8">
        <AdminTabs
          tabs={[
            { id: "visitors", label: "Page visitors", count: views.length, content: visitorsTab },
            { id: "projects", label: "Project briefs", count: projectLeads.length, content: projectsTab },
            { id: "contacts", label: "Contact messages", count: contactLeads.length, content: contactsTab },
            { id: "subscribers", label: "Subscribers", count: subscribers.length, content: subscribersTab },
            { id: "site", label: "Site", content: siteTab },
          ]}
        />

        <p className="mt-10 text-[13px] text-[#6e6e73]">
          {SITE.name} admin. Sessions expire after 12 hours.
        </p>
      </main>
    </div>
  );
}
