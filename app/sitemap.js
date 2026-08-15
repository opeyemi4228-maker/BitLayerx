import { SITE, PAGES, MARKETS } from "@/lib/seo";
import { getAllPosts, CATEGORIES } from "@/lib/blog";

/**
 * sitemap.xml, generated at build time.
 *
 * Accurate `lastModified` dates matter more than most people expect: Google
 * uses them to decide how often to come back. Sitemaps that claim everything
 * changed today get trusted less, so posts report their real publication date
 * and static pages report the build date.
 */
export default function sitemap() {
  const now = new Date();

  const staticPages = Object.entries(PAGES).map(([path, meta]) => ({
    url: `${SITE.url}${path === "/" ? "" : path}`,
    lastModified: now,
    changeFrequency: meta.changeFrequency ?? "monthly",
    priority: meta.priority ?? 0.5,
  }));

  const posts = getAllPosts().map((post) => ({
    url: `${SITE.url}/blog/${post.slug}`,
    lastModified: new Date(post.updated),
    changeFrequency: "monthly",
    priority: post.featured ? 0.8 : 0.7,
  }));

  const categories = CATEGORIES.map((c) => ({
    url: `${SITE.url}/blog/category/${c.slug}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.6,
  }));

  const locations = MARKETS.map((m) => ({
    url: `${SITE.url}/locations/${m.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: m.primary ? 0.8 : 0.7,
  }));

  // Routes that exist but are not part of the PAGES keyword map: the
  // conversion page, the locations index, and the legal pages. They still need
  // to be crawlable, and /start-a-project in particular is the page every CTA
  // on the site points at.
  const extras = [
    { path: "/start-a-project", priority: 0.9, changeFrequency: "monthly" },
    { path: "/locations", priority: 0.7, changeFrequency: "monthly" },
    { path: "/privacy", priority: 0.3, changeFrequency: "yearly" },
    { path: "/terms", priority: 0.3, changeFrequency: "yearly" },
  ].map((e) => ({
    url: `${SITE.url}${e.path}`,
    lastModified: now,
    changeFrequency: e.changeFrequency,
    priority: e.priority,
  }));

  return [...staticPages, ...posts, ...categories, ...locations, ...extras];
}
