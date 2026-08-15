import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { marked } from "marked";

/**
 * The blog content layer.
 *
 * Posts are Markdown files on disk, read at build time and rendered to static
 * HTML. That is the fastest thing a blog can be: no database round trip, no
 * client-side fetch, nothing between Googlebot and the words. Pages that are
 * already HTML when the crawler arrives are the ones that get indexed quickly,
 * which is the whole point of the exercise.
 *
 * To publish: drop a .md file in content/blog/ with the frontmatter below.
 */

const BLOG_DIR = path.join(process.cwd(), "content", "blog");

/** Editorial sections. Order here is the order they appear on the index. */
export const CATEGORIES = [
  { slug: "engineering", name: "Engineering", tone: "#0040FF" },
  { slug: "design",      name: "Design",      tone: "#0040FF" },
  { slug: "growth",      name: "Growth",      tone: "#0040FF" },
  { slug: "business",    name: "Business",    tone: "#0040FF" },
  { slug: "nigeria",     name: "Nigeria & Africa", tone: "#0040FF" },
];

export function categoryBySlug(slug) {
  return CATEGORIES.find((c) => c.slug === slug) ?? null;
}

/** ~200 wpm is the usual reading speed assumption for prose of this kind. */
function readingTime(markdown) {
  const words = markdown.trim().split(/\s+/).length;
  return Math.max(1, Math.round(words / 200));
}

/**
 * Normalise a frontmatter date to a plain YYYY-MM-DD string.
 *
 * YAML parses an unquoted `published: 2026-08-11` into a Date object, not a
 * string. Comparing that Date to a string date silently coerces it to
 * "Tue Aug 11 2026 …", which sorts after any ISO string  -  so a publish-date
 * filter written against strings quietly drops every post. Normalising once,
 * here, means the rest of the module can assume strings.
 */
function toISODate(value, fallback = "1970-01-01") {
  if (!value) return fallback;
  if (value instanceof Date) return value.toISOString().slice(0, 10);
  return String(value).slice(0, 10);
}

function parseFile(filename) {
  const slug = filename.replace(/\.md$/, "");
  const raw = fs.readFileSync(path.join(BLOG_DIR, filename), "utf8");
  const { data, content } = matter(raw);

  const published = toISODate(data.published);

  return {
    slug,
    title: data.title ?? slug,
    excerpt: data.excerpt ?? "",
    category: data.category ?? "engineering",
    author: data.author ?? "Opeyemi T. Ojurongbe",
    authorRole: data.authorRole ?? "Founder & CEO",
    published,
    updated: toISODate(data.updated, published),
    cover: data.cover ?? null,
    coverAlt: data.coverAlt ?? "",
    featured: Boolean(data.featured),
    tags: data.tags ?? [],
    readingTime: readingTime(content),
    content,
  };
}

/** Every post, newest first. Drafts (published in the future) are excluded. */
export function getAllPosts() {
  if (!fs.existsSync(BLOG_DIR)) return [];

  const today = new Date().toISOString().slice(0, 10);

  return fs
    .readdirSync(BLOG_DIR)
    .filter((f) => f.endsWith(".md"))
    .map(parseFile)
    .filter((p) => p.published <= today)
    .sort((a, b) => (a.published < b.published ? 1 : -1));
}

export function getPost(slug) {
  const post = getAllPosts().find((p) => p.slug === slug);
  if (!post) return null;
  return { ...post, html: marked.parse(post.content) };
}

export function getPostsByCategory(categorySlug) {
  return getAllPosts().filter((p) => p.category === categorySlug);
}

/**
 * Related posts: same category first, then anything else, never the post
 * itself. Internal links between articles are how a new post inherits
 * authority from an older one, so every article gets at least a few.
 */
export function getRelatedPosts(slug, limit = 3) {
  const all = getAllPosts();
  const current = all.find((p) => p.slug === slug);
  if (!current) return [];

  const sameCategory = all.filter(
    (p) => p.slug !== slug && p.category === current.category
  );
  const rest = all.filter(
    (p) => p.slug !== slug && p.category !== current.category
  );

  return [...sameCategory, ...rest].slice(0, limit);
}
