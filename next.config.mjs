/** @type {import('next').NextConfig} */
const nextConfig = {
  /**
   * Build output directory.
   *
   * `next dev` and `next build` share `.next` by default, so running a
   * production build while a dev server is up writes over the cache that dev
   * server is actively reading. Turbopack's persistent cache does not survive
   * that: it surfaces as "Failed to deserialize AMQF ... ArrayLengthMismatch",
   * every route starts returning 500, and the browser falls into the
   * "missing required error components, refreshing..." loop.
   *
   * Setting NEXT_BUILD_DIR sends a verification build somewhere else, so it
   * can never disturb a running dev server:
   *
   *   NEXT_BUILD_DIR=.next-verify npm run build
   */
  distDir: process.env.NEXT_BUILD_DIR || ".next",

  images: {
    // Modern formats first. Next serves AVIF where supported and falls back to
    // WebP, which is typically a 30-50% saving over the JPEG equivalent  -  and
    // image weight is the usual reason a page fails Largest Contentful Paint.
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      { protocol: "https", hostname: "res.cloudinary.com", pathname: "**" },
      { protocol: "https", hostname: "raw.githubusercontent.com", pathname: "**" },
      { protocol: "https", hostname: "images.unsplash.com", pathname: "**" },
      { protocol: "https", hostname: "img.icons8.com", pathname: "**" },
      { protocol: "https", hostname: "unsplash.com", pathname: "**" },
    ],
  },

  // Trailing-slash drift makes /about and /about/ look like two URLs to
  // Google, which is one of the ways "Duplicate without user-selected
  // canonical" appears. Pick one form and let Next redirect the other.
  trailingSlash: false,

  poweredByHeader: false,
  compress: true,

  /**
   * Permanent redirects for the storefront routes this site used to carry.
   *
   * These are the URLs behind the "Not found (404)" report: Google crawled
   * them while they existed and keeps checking. A 301 hands whatever ranking
   * signal they accumulated to a live page. A 404 throws it away.
   */
  async redirects() {
    return [
      { source: "/cart", destination: "/contact", permanent: true },
      { source: "/all-products", destination: "/services", permanent: true },
      { source: "/my-orders", destination: "/contact", permanent: true },
      { source: "/add-address", destination: "/contact", permanent: true },
      { source: "/order-placed", destination: "/contact", permanent: true },
      { source: "/product/:id", destination: "/portfolio", permanent: true },
      { source: "/seller", destination: "/admin", permanent: true },
      { source: "/seller/:path*", destination: "/admin", permanent: true },

      // Common variants people and old links use for pages that do exist.
      { source: "/work", destination: "/portfolio", permanent: true },
      { source: "/case-studies", destination: "/portfolio", permanent: true },
      { source: "/pricing", destination: "/packages", permanent: true },
      { source: "/team", destination: "/about", permanent: true },
      { source: "/news", destination: "/blog", permanent: true },
      { source: "/articles", destination: "/blog", permanent: true },
      { source: "/insights", destination: "/blog", permanent: true },
      { source: "/get-a-quote", destination: "/start-a-project", permanent: true },
      { source: "/quote", destination: "/start-a-project", permanent: true },

      // These four were linked from the site itself for a long time and never
      // existed, so Google has them recorded as 404s. Point them somewhere real.
      { source: "/contact/project", destination: "/start-a-project", permanent: true },
      { source: "/contact/proposal", destination: "/start-a-project", permanent: true },
      { source: "/contact/call", destination: "/contact", permanent: true },
      { source: "/work/success-stories", destination: "/portfolio", permanent: true },
    ];
  },

  /**
   * Security headers.
   *
   * Google does not rank on these directly, but they are part of what a
   * professional audit checks, and HSTS plus a sane referrer policy cost
   * nothing to add.
   */
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
