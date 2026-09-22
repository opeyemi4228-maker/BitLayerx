import Link from "next/link";
import { notFound } from "next/navigation";
import { SITE } from "@/lib/seo";
import { CATEGORIES, categoryBySlug, getPostsByCategory } from "@/lib/blog";
import { Section, Container, Heading, Lede, ActionLink, ClosingCTA } from "@/components/ui/primitives";
import PostCover from "@/components/blog/PostCover";

export function generateStaticParams() {
  return CATEGORIES.map((c) => ({ category: c.slug }));
}

export async function generateMetadata({ params }) {
  const { category: slug } = await params;
  const category = categoryBySlug(slug);

  if (!category) {
    return { title: "Section not found", robots: { index: false, follow: true } };
  }

  const url = `${SITE.url}/blog/category/${category.slug}`;
  const title = `${category.name}, Insight`;
  const description = `Writing from the BitLayerX team on ${category.name.toLowerCase()}. Practical notes from the work itself.`;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: { type: "website", url, title, description, siteName: SITE.name },
    twitter: { card: "summary_large_image", title, description, site: SITE.twitter },
  };
}

function formatDate(iso) {
  return new Date(iso).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default async function CategoryPage({ params }) {
  const { category: slug } = await params;
  const category = categoryBySlug(slug);

  if (!category) notFound();

  const posts = getPostsByCategory(slug);

  return (
    <>
      <Section tone="white" rhythm="tight" className="border-b border-black/10">
        <Container width="wide">
          <nav aria-label="Breadcrumb" className="mb-6 text-[13.5px] text-[#5E5E5E]">
            <Link href="/" className="hover:text-[#111111]">Home</Link>
            <span aria-hidden="true" className="mx-2">›</span>
            <Link href="/blog" className="hover:text-[#111111]">Insight</Link>
          </nav>

          <p
            className="text-[12px] font-bold uppercase tracking-[0.14em]"
            style={{ color: category.tone }}
          >
            Section
          </p>
          <Heading as="h1" size="lg" className="mt-2">
            {category.name}
          </Heading>

          <nav aria-label="Blog categories" className="mt-8 -mb-px flex gap-6 overflow-x-auto">
            {CATEGORIES.map((c) => {
              const active = c.slug === category.slug;
              return (
                <Link
                  key={c.slug}
                  href={`/blog/category/${c.slug}`}
                  aria-current={active ? "page" : undefined}
                  className={`whitespace-nowrap pb-3 text-[14.5px] font-semibold border-b-2 transition-colors ${
                    active
                      ? "text-[#111111] border-[#111111]"
                      : "text-[#111111]/60 hover:text-[#111111] border-transparent hover:border-[#111111]"
                  }`}
                >
                  {c.name}
                </Link>
              );
            })}
          </nav>
        </Container>
      </Section>

      <Section tone="white">
        <Container width="wide">
          {posts.length === 0 ? (
            <div className="max-w-[560px]">
              <Heading as="h2" size="md">Nothing filed here yet.</Heading>
              <Lede className="mt-4">
                We have not published in this section so far. The other sections
                have plenty, start with{" "}
                <Link href="/blog" className="text-[#0040FF] underline underline-offset-4">
                  the latest writing
                </Link>
                .
              </Lede>
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
              {posts.map((post) => (
                <article key={post.slug} className="group">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="block focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0040FF] focus-visible:ring-offset-4 rounded-xl"
                  >
                    <PostCover post={post} ratio="16 / 10" sizes="(max-width: 640px) 100vw, 33vw" />
                    <h2 className="mt-4 text-[1.2rem] font-bold tracking-[-0.02em] leading-snug text-[#111111] group-hover:text-[#0040FF] transition-colors">
                      {post.title}
                    </h2>
                    <p className="mt-2 text-[0.95rem] leading-relaxed text-[#5E5E5E]">
                      {post.excerpt}
                    </p>
                    <p className="mt-3 text-[13px] text-[#5E5E5E]">
                      {formatDate(post.published)} · {post.readingTime} min read
                    </p>
                  </Link>
                </article>
              ))}
            </div>
          )}
        </Container>
      </Section>

      <ClosingCTA
        heading="Have a project in mind?"
        primary={{ href: "/start-a-project", label: "Request a session" }}
        secondary={{ href: "/blog", label: "Back to all writing" }}
      />
    </>
  );
}
