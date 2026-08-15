import { SITE } from "@/lib/seo";

/**
 * Web app manifest, served at /manifest.webmanifest.
 *
 * This replaces the /site.webmanifest that layout.js used to reference and
 * that never existed in /public  -  one of the 404s Search Console was counting.
 */
export default function manifest() {
  return {
    name: `${SITE.name}  -  Digital Products, Brands & Systems`,
    short_name: SITE.name,
    description:
      "BitLayerX designs and builds the products, brands and systems companies run on.",
    start_url: "/",
    scope: "/",
    display: "standalone",
    orientation: "portrait-primary",
    background_color: "#ffffff",
    theme_color: "#0040FF",
    categories: ["business", "productivity", "technology"],
    lang: "en",
    dir: "ltr",
    // The company mark, generated from assets/logo.png by app/icon.png.
    icons: [
      { src: "/icon.png", sizes: "512x512", type: "image/png", purpose: "any" },
      { src: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
  };
}
