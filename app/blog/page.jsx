import Link from "next/link";
import { pageMetadata, SITE } from "@/lib/seo";
import { getAllPosts, CATEGORIES, categoryBySlug } from "@/lib/blog";
import { Section, Container, Heading, Lede, ActionLink } from "@/components/ui/primitives";
import PostCover from "@/components/blog/PostCover";

export const metadata = pageMetadata("/blog");

// Posts are files on disk, so the index only changes when the site rebuilds.
export const revalidate = 3600;

function formatDate(iso) {
  return new Date(iso).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

/** The coloured section label BBC puts above every headline. */
function CategoryTag({ slug, className = "" }) {
  const category = categoryBySlug(slug);
  if (!category) return null;

  return (
    <span
      className={`text-[11.5px] font-bold uppercase tracking-[0.1em] ${className}`}
      style={{ color: category.tone }}
    >
      {category.name}
    </span>
  );
}

function Meta({ post, className = "" }) {
  return (
    <p className={`text-[13px] text-[#6e6e73] ${className}`}>
      <time dateTime={post.published}>{formatDate(post.published)}</time>
      <span aria-hidden="true"> · </span>
      {post.readingTime} min read
    </p>
  );
}

/** The lead story: one headline given far more weight than anything else. */
function LeadStory({ post }) {
  return (
    <article className="group">
      <Link href={`/blog/${post.slug}`} className="block focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0040FF] focus-visible:ring-offset-4 rounded-xl">
        <PostCover post={post} ratio="16 / 9" priority sizes="(max-width: 1024px) 100vw, 62vw" />
        <div className="mt-6">
          <CategoryTag slug={post.category} />
          <h2 className="mt-2 text-[clamp(1.9rem,3.4vw,2.9rem)] font-extrabold tracking-[-0.035em] leading-[1.05] text-[#1d1d1f] group-hover:text-[#0040FF] transition-colors">
            {post.title}
          </h2>
          <p className="mt-3 text-[1.0625rem] leading-relaxed text-[#6e6e73] max-w-[640px]">
            {post.excerpt}
          </p>
          <Meta post={post} className="mt-4" />
        </div>
      </Link>
    </article>
  );
}

/** Sidebar items: headline-first, no image  -  BBC's "more top stories" column. */
function SecondaryStory({ post, showRule = true }) {
  return (
    <article className={showRule ? "pb-5 border-b border-black/10" : ""}>
      <Link href={`/blog/${post.slug}`} className="group block focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0040FF] focus-visible:ring-offset-2 rounded">
        <CategoryTag slug={post.category} />
        <h3 className="mt-1.5 text-[1.15rem] font-bold tracking-[-0.02em] leading-snug text-[#1d1d1f] group-hover:text-[#0040FF] transition-colors">
          {post.title}
        </h3>
        <Meta post={post} className="mt-2" />
      </Link>
    </article>
  );
}

/** Grid card used in the category rails below the fold. */
function StoryCard({ post }) {
  return (
    <article className="group">
      <Link href={`/blog/${post.slug}`} className="block focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0040FF] focus-visible:ring-offset-4 rounded-xl">
        <PostCover post={post} ratio="16 / 10" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" />
        <div className="mt-4">
          <CategoryTag slug={post.category} />
          <h3 className="mt-1.5 text-[1.2rem] font-bold tracking-[-0.02em] leading-snug text-[#1d1d1f] group-hover:text-[#0040FF] transition-colors">
            {post.title}
          </h3>
          <p className="mt-2 text-[0.95rem] leading-relaxed text-[#6e6e73] line-clamp-3">
            {post.excerpt}
          </p>
          <Meta post={post} className="mt-3" />
        </div>
      </Link>
    </article>
  );
}

export default function BlogIndex() {
  const posts = getAllPosts();

  if (posts.length === 0) {
    return (
      <Section tone="white">
        <Container width="text" className="text-center">
          <Heading as="h1" size="xl">Insight</Heading>
          <Lede className="mt-5">
            The first pieces are being written. Check back shortly, or{" "}
            <Link href="/contact" className="text-[#0040FF] underline underline-offset-4">
              tell us what you would find useful
            </Link>
            .
          </Lede>
        </Container>
      </Section>
    );
  }

  const [lead, ...rest] = posts;
  const secondary = rest.slice(0, 4);
  const remainder = rest.slice(4);

  // Structured data for the index. A Blog node with an itemList gives Google
  // an explicit map of the section rather than making it infer one.
  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "@id": `${SITE.url}/blog#blog`,
    name: "BitLayerX Insight",
    description:
      "Practical writing on building software, designing products and growing companies.",
    url: `${SITE.url}/blog`,
    publisher: { "@id": `${SITE.url}/#organization` },
    blogPost: posts.slice(0, 10).map((p) => ({
      "@type": "BlogPosting",
      headline: p.title,
      description: p.excerpt,
      datePublished: p.published,
      dateModified: p.updated,
      url: `${SITE.url}/blog/${p.slug}`,
      author: { "@type": "Person", name: p.author },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
      />

      {/* ── Masthead ───────────────────────────────────────────────────── */}
      <Section tone="white" rhythm="tight" className="border-b border-black/10">
        <Container width="wide">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <div>
              <Heading as="h1" size="lg">Insight</Heading>
              <Lede className="mt-3 max-w-[560px]">
                Writing on building software, designing products and growing
                companies  -  from the people doing the work.
              </Lede>
            </div>
            <ActionLink href="/contact">Work with us</ActionLink>
          </div>

          {/* Section nav, the way a newspaper indexes its sections. */}
          <nav aria-label="Blog categories" className="mt-8 -mb-px flex gap-6 overflow-x-auto">
            {CATEGORIES.map((c) => (
              <Link
                key={c.slug}
                href={`/blog/category/${c.slug}`}
                className="whitespace-nowrap pb-3 text-[14.5px] font-semibold text-[#1d1d1f]/70 hover:text-[#1d1d1f] border-b-2 border-transparent hover:border-[#1d1d1f] transition-colors"
              >
                {c.name}
              </Link>
            ))}
          </nav>
        </Container>
      </Section>

      {/* ── Lead + secondary column ────────────────────────────────────── */}
      <Section tone="white" rhythm="tight">
        <Container width="wide">
          <div className="grid lg:grid-cols-[1.65fr_1fr] gap-10 lg:gap-14">
            <LeadStory post={lead} />

            {secondary.length > 0 && (
              <div>
                <h2 className="text-[12px] font-bold uppercase tracking-[0.16em] text-[#1d1d1f] pb-3 mb-5 border-b-2 border-[#1d1d1f]">
                  More stories
                </h2>
                <div className="space-y-5">
                  {secondary.map((post, i) => (
                    <SecondaryStory
                      key={post.slug}
                      post={post}
                      showRule={i < secondary.length - 1}
                    />
                  ))}
                </div>
              </div>
            )}
          </div>
        </Container>
      </Section>

      {/* ── Everything else ────────────────────────────────────────────── */}
      {remainder.length > 0 && (
        <Section tone="offwhite">
          <Container width="wide">
            <h2 className="text-[12px] font-bold uppercase tracking-[0.16em] text-[#1d1d1f] pb-3 mb-8 border-b-2 border-[#1d1d1f]">
              Latest
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
              {remainder.map((post) => (
                <StoryCard key={post.slug} post={post} />
              ))}
            </div>
          </Container>
        </Section>
      )}

      {/* ── Conversion rail ────────────────────────────────────────────── */}
      <Section tone="dark" rhythm="default">
        <Container width="narrow" className="text-center">
          <Heading as="h2" size="lg">
            Reading about it is cheaper than learning it the hard way.
          </Heading>
          <Lede tone="light" className="mt-5 mx-auto max-w-[560px]">
            If any of the above described a problem you currently have, the next
            step is a conversation  -  and a written plan within 48 hours.
          </Lede>
          <div className="mt-9 flex flex-wrap gap-3 justify-center">
            <Link
              href="/start-a-project"
              className="inline-flex items-center justify-center rounded-full bg-white px-7 py-[0.85rem] text-[1.0625rem] font-medium text-[#1d1d1f] hover:bg-white/90 transition-colors"
            >
              Request a session
            </Link>
            <ActionLink href="/packages" tone="light" className="px-4">
              See packages and prices
            </ActionLink>
          </div>
        </Container>
      </Section>
    </>
  );
}
