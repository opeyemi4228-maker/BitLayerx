import Link from "next/link";
import { Section, Container, ActionLink } from "@/components/ui/primitives";
import { getAllPosts, categoryBySlug } from "@/lib/blog";
import PostCover from "@/components/blog/PostCover";

/**
 * Writing, on the homepage.
 *
 * This is here for search as much as for persuasion. Articles linked from the
 * homepage get crawled far sooner than ones reachable only from a sitemap, and
 * a homepage that links out to genuinely useful writing is also the cheapest
 * expertise signal a services company has.
 */
export default function InsightPreview() {
  const posts = getAllPosts().slice(0, 3);
  if (posts.length === 0) return null;

  return (
    <Section tone="offwhite" labelledBy="insight-heading">
      <Container width="default">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          {/* Wide enough that the heading sets on two lines rather than three.
              `text-wrap: balance` in globals.css then evens the two out. */}
          <div className="max-w-[760px]">
            <p className="text-[12px] font-bold uppercase tracking-[0.18em] text-[#0040FF]">
              Insight
            </p>
            <h2
              id="insight-heading"
              className="mt-4 text-[clamp(2.1rem,5vw,3.9rem)] font-extrabold leading-[1.03] tracking-[-0.035em] text-[#1d1d1f]"
            >
              What we have learned, written down.
            </h2>
            <p className="mt-5 text-[1.0625rem] leading-relaxed text-[#6e6e73]">
              Including the things most agencies here will not put in
              writing, like what the work actually costs.
            </p>
          </div>

          <ActionLink href="/blog">All writing</ActionLink>
        </div>

        <div className="mt-14 grid gap-9 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => {
            const category = categoryBySlug(post.category);
            return (
              <article key={post.slug} className="group">
                <Link
                  href={`/blog/${post.slug}`}
                  className="block rounded-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0040FF] focus-visible:ring-offset-4"
                >
                  <PostCover
                    post={post}
                    ratio="16 / 10"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  {category && (
                    <span
                      className="mt-4 block text-[11.5px] font-bold uppercase tracking-[0.1em]"
                      style={{ color: category.tone }}
                    >
                      {category.name}
                    </span>
                  )}
                  <h3 className="mt-1.5 text-[1.2rem] font-bold leading-snug tracking-[-0.02em] text-[#1d1d1f] transition-colors group-hover:text-[#0040FF]">
                    {post.title}
                  </h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-[#6e6e73]">
                    {post.excerpt}
                  </p>
                  <p className="mt-3 text-[13px] text-[#6e6e73]">
                    {post.readingTime} min read
                  </p>
                </Link>
              </article>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
