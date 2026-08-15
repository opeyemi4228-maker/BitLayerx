import Link from "next/link";
import { notFound } from "next/navigation";
import { SITE } from "@/lib/seo";
import {
  getPost,
  getAllPosts,
  getRelatedPosts,
  categoryBySlug,
} from "@/lib/blog";
import { Section, Container, Heading, Lede, ActionLink } from "@/components/ui/primitives";
import PostCover from "@/components/blog/PostCover";

/** Every post is rendered to static HTML at build time. */
export function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = getPost(slug);

  if (!post) {
    return { title: "Article not found", robots: { index: false, follow: true } };
  }

  const url = `${SITE.url}/blog/${post.slug}`;

  return {
    title: post.title,
    description: post.excerpt,
    keywords: post.tags,
    authors: [{ name: post.author, url: SITE.founderUrl }],

    // Self-referencing canonical, same as every other route.
    alternates: { canonical: url },

    openGraph: {
      type: "article",
      url,
      title: post.title,
      description: post.excerpt,
      siteName: SITE.name,
      publishedTime: post.published,
      modifiedTime: post.updated,
      authors: [post.author],
      tags: post.tags,
      images: [{ url: `${SITE.url}/opengraph-image`, width: 1200, height: 630 }],
    },

    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      site: SITE.twitter,
      images: [`${SITE.url}/opengraph-image`],
    },
  };
}

function formatDate(iso) {
  return new Date(iso).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default async function ArticlePage({ params }) {
  const { slug } = await params;
  const post = getPost(slug);

  if (!post) notFound();

  const category = categoryBySlug(post.category);
  const related = getRelatedPosts(slug, 3);
  const url = `${SITE.url}/blog/${post.slug}`;

  /**
   * BlogPosting plus a BreadcrumbList.
   *
   * The breadcrumb is what produces the "Home › Insight › Article" trail under
   * a search result instead of a raw URL, and it measurably improves how often
   * people click.
   */
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        "@id": `${url}#article`,
        headline: post.title,
        description: post.excerpt,
        datePublished: post.published,
        dateModified: post.updated,
        wordCount: post.content.trim().split(/\s+/).length,
        articleSection: category?.name ?? "Engineering",
        keywords: post.tags.join(", "),
        inLanguage: "en",
        image: `${SITE.url}/opengraph-image`,
        author: {
          "@type": "Person",
          name: post.author,
          jobTitle: post.authorRole,
          url: SITE.founderUrl,
        },
        publisher: { "@id": `${SITE.url}/#organization` },
        mainEntityOfPage: { "@type": "WebPage", "@id": url },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: SITE.url },
          { "@type": "ListItem", position: 2, name: "Insight", item: `${SITE.url}/blog` },
          { "@type": "ListItem", position: 3, name: post.title, item: url },
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* ── Header ─────────────────────────────────────────────────────── */}
      <Section tone="white" rhythm="tight">
        <Container width="narrow">
          <nav aria-label="Breadcrumb" className="mb-7 text-[13.5px] text-[#6e6e73]">
            <Link href="/" className="hover:text-[#1d1d1f]">Home</Link>
            <span aria-hidden="true" className="mx-2">›</span>
            <Link href="/blog" className="hover:text-[#1d1d1f]">Insight</Link>
            {category && (
              <>
                <span aria-hidden="true" className="mx-2">›</span>
                <Link
                  href={`/blog/category/${category.slug}`}
                  className="hover:text-[#1d1d1f]"
                >
                  {category.name}
                </Link>
              </>
            )}
          </nav>

          {category && (
            <p
              className="text-[12px] font-bold uppercase tracking-[0.12em]"
              style={{ color: category.tone }}
            >
              {category.name}
            </p>
          )}

          <Heading as="h1" size="xl" className="mt-3">
            {post.title}
          </Heading>

          <Lede className="mt-5">{post.excerpt}</Lede>

          <div className="mt-8 pt-6 border-t border-black/10 flex flex-wrap items-center gap-x-3 gap-y-1 text-[14px] text-[#6e6e73]">
            <span className="font-semibold text-[#1d1d1f]">{post.author}</span>
            <span aria-hidden="true">·</span>
            <span>{post.authorRole}</span>
            <span aria-hidden="true">·</span>
            <time dateTime={post.published}>{formatDate(post.published)}</time>
            <span aria-hidden="true">·</span>
            <span>{post.readingTime} min read</span>
          </div>
        </Container>
      </Section>

      {/* ── Cover ──────────────────────────────────────────────────────── */}
      <Container width="narrow">
        <PostCover post={post} ratio="21 / 9" priority sizes="(max-width: 980px) 100vw, 980px" />
      </Container>

      {/* ── Body ───────────────────────────────────────────────────────── */}
      <Section tone="white" rhythm="tight">
        <Container width="text">
          <div
            className="blx-prose"
            dangerouslySetInnerHTML={{ __html: post.html }}
          />

          {post.tags.length > 0 && (
            <div className="mt-14 pt-7 border-t border-black/10 flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-full bg-black/[0.05] text-[12.5px] font-medium text-[#6e6e73]"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </Container>
      </Section>

      {/* ── Conversion block, placed where intent is highest ───────────── */}
      <Section tone="offwhite" rhythm="tight">
        <Container width="text">
          <div className="rounded-2xl bg-white p-8 sm:p-10 border border-black/[0.07]">
            <Heading as="h2" size="md">
              Want this handled properly?
            </Heading>
            <p className="mt-3 text-[1.0625rem] leading-relaxed text-[#6e6e73]">
              We do this work for a living, strategy, design, engineering,
              brand, film and growth, from one team. Tell us what you are
              building and you will have a written plan within 48 hours.
            </p>
            <div className="mt-7 flex flex-wrap items-center gap-4">
              <Link
                href="/start-a-project"
                className="inline-flex items-center justify-center rounded-full bg-[#0040FF] px-7 py-[0.8rem] text-[1.0625rem] font-medium text-white hover:bg-black transition-colors"
              >
                Request a session
              </Link>
              <ActionLink href="/packages">See packages and prices</ActionLink>
            </div>
          </div>
        </Container>
      </Section>

      {/* ── Related ────────────────────────────────────────────────────── */}
      {related.length > 0 && (
        <Section tone="white" rhythm="tight">
          <Container width="wide">
            <h2 className="text-[12px] font-bold uppercase tracking-[0.16em] text-[#1d1d1f] pb-3 mb-8 border-b-2 border-[#1d1d1f]">
              Read next
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {related.map((r) => (
                <article key={r.slug} className="group">
                  <Link
                    href={`/blog/${r.slug}`}
                    className="block focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0040FF] focus-visible:ring-offset-4 rounded-xl"
                  >
                    <PostCover post={r} ratio="16 / 10" sizes="(max-width: 640px) 100vw, 33vw" />
                    <h3 className="mt-4 text-[1.15rem] font-bold tracking-[-0.02em] leading-snug text-[#1d1d1f] group-hover:text-[#0040FF] transition-colors">
                      {r.title}
                    </h3>
                    <p className="mt-2 text-[13px] text-[#6e6e73]">
                      {formatDate(r.published)} · {r.readingTime} min read
                    </p>
                  </Link>
                </article>
              ))}
            </div>
          </Container>
        </Section>
      )}
    </>
  );
}
