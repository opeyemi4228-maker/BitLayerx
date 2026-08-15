/**
 * Image manifest  -  one place to wire real photography into the site.
 *
 * Every entry points at a file in /public/images. Until that file exists, the
 * <Figure> component renders a branded generated visual in its place, so a
 * missing photograph never becomes a broken image or, worse, a stock photo
 * standing in for something real.
 *
 * To go live with a photograph: drop the file at the path below and it appears.
 * Nothing else needs to change.
 *
 * Recommended exports  -  2400px on the long edge, JPEG or WebP, quality ~80.
 */

import FounderPhoto from "../assets/Opeyemi.jpeg";

export const MEDIA = {
  // Hero
  hero: {
    src: "/images/hero-work.jpg",
    alt: "A BitLayerX product interface shown on a laptop and a phone.",
    caption: "Recent work",
  },

  // The method
  method: {
    src: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=2100&q=80",
    alt: "A team reviewing wireframes and digital strategy together.",
    caption: "Step 03  -  decisions made on paper, where changing them is cheap.",
  },

  // Founder
  founder: {
    src: FounderPhoto,
    alt: "Opeyemi T. Ojurongbe, founder and CEO of BitLayerX.",
    caption: "Opeyemi T. Ojurongbe · Founder & CEO",
  },

  // Practices
  practices: {
    src: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=2100&q=80",
    alt: "A collaborative digital team working together on a strategic project.",
    caption: "One team, six practices.",
  },

  // Selected work  -  live deployment previews for the homepage
  work: [
    {
      homepage: "https://gcsa-consulting.vercel.app",
      label: "Fintech",
      title: "Live website preview",
    },
    {
      homepage: "https://digital-library-vert.vercel.app",
      label: "Logistics",
      title: "Live website preview",
    },
    {
      homepage: "https://bitlayerx-real-estate.vercel.app",
      label: "Real estate",
      title: "Live website preview",
    },
  ],
};
