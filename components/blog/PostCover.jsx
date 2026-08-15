import Image from "next/image";
import { categoryBySlug } from "@/lib/blog";

/**
 * A post's cover.
 *
 * When a real cover image exists it is used. When one does not, this draws a
 * generated plate keyed to the post's category rather than reaching for a
 * stock photograph, a stock image of strangers at a whiteboard attached to an
 * article about your own work is the thing that quietly costs a reader's
 * trust, and it is never worth the visual filler.
 */
export default function PostCover({
  post,
  ratio = "16 / 9",
  sizes = "(max-width: 768px) 100vw, 50vw",
  priority = false,
  className = "",
  rounded = "rounded-xl",
}) {
  const category = categoryBySlug(post.category);
  const tone = category?.tone ?? "#0040FF";

  return (
    <div
      className={`relative w-full overflow-hidden ${rounded} bg-[#fbfbfd] ${className}`}
      style={{ aspectRatio: ratio }}
    >
      {post.cover ? (
        <Image
          src={post.cover}
          alt={post.coverAlt || ""}
          fill
          sizes={sizes}
          priority={priority}
          className="object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.03]"
        />
      ) : (
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{
            background: `linear-gradient(135deg, ${tone} 0%, ${tone}CC 45%, #0B0B0F 140%)`,
          }}
        >
          <svg
            className="absolute inset-0 w-full h-full opacity-[0.16]"
            preserveAspectRatio="xMidYMid slice"
          >
            <defs>
              <pattern
                id={`grid-${post.slug}`}
                width="28"
                height="28"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M28 0 L0 0 0 28"
                  fill="none"
                  stroke="#ffffff"
                  strokeWidth="0.6"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill={`url(#grid-${post.slug})`} />
          </svg>

          {/* The layer mark, drawn once and quietly. */}
          <svg
            className="absolute right-5 bottom-5 w-16 h-16 opacity-30"
            viewBox="0 0 64 64"
            fill="none"
            stroke="#ffffff"
            strokeWidth="2.6"
            strokeLinejoin="round"
          >
            <path d="M32 14 L50 24 L32 34 L14 24 Z" />
            <path d="M14 32 L32 42 L50 32" opacity="0.7" />
            <path d="M14 40 L32 50 L50 40" opacity="0.45" />
          </svg>
        </div>
      )}
    </div>
  );
}
