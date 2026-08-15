import { SITE } from "@/lib/seo";

/**
 * robots.txt.
 *
 * The admin area is disallowed for tidiness, not for security  -  the middleware
 * gate is what actually protects it. Never rely on robots.txt to hide
 * anything: it is a public file that advertises exactly which paths you would
 * prefer nobody looked at.
 */
export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/admin", "/admin/", "/api/"],
      },
      {
        // Explicitly welcome the crawlers that matter, with no crawl delay.
        userAgent: ["Googlebot", "Bingbot"],
        allow: "/",
        disallow: ["/admin", "/admin/", "/api/"],
      },
    ],
    sitemap: `${SITE.url}/sitemap.xml`,
    host: SITE.url,
  };
}
