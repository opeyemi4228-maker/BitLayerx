import { Poppins, Newsreader } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ToastProvider from "@/components/ToastProvider";
import Script from "next/script";

// Poppins, the face the UK Labour Party serves on labour.org.uk (Light through
// Black). A geometric sans built on near-perfect circles, so it reads open and
// confident rather than institutional, and it holds its shape at Black weight
// where display headlines live.
const sans = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
  variable: "--font-sans",
  preload: true,
  adjustFontFallback: true,
});

// Newsreader for long-form journalism only, the blog. A serif signals
// "reported piece" rather than "landing page", which is exactly the cue the BBC
// and every publication of record leans on. Never used for UI.
const serif = Newsreader({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-serif",
  preload: false,
  adjustFontFallback: true,
});

const HOTJAR_ID  = process.env.NEXT_PUBLIC_HOTJAR_ID;
const GA_ID      = process.env.NEXT_PUBLIC_GA_ID;
const FB_PIXEL   = process.env.NEXT_PUBLIC_FB_PIXEL_ID;
const CLARITY_ID = process.env.NEXT_PUBLIC_CLARITY_ID;

// Verification codes live in env so a placeholder can never ship to production.
const VERIFICATION = Object.fromEntries(
  Object.entries({
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
    yandex: process.env.NEXT_PUBLIC_YANDEX_VERIFICATION,
    other: process.env.NEXT_PUBLIC_BING_VERIFICATION
      ? { "msvalidate.01": process.env.NEXT_PUBLIC_BING_VERIFICATION }
      : undefined,
  }).filter(([, v]) => Boolean(v))
);

const CANONICAL_TITLE =
  "BitLayerX, Digital Products, Brands & Systems Built to Last";

const CANONICAL_DESCRIPTION =
  "BitLayerX designs and builds the products, brands and systems companies run on. Strategy, design, engineering, brand, film and growth, one team, in Abuja, working globally.";

export const metadata = {
  metadataBase: new URL("https://bitlayerx.com"),

  title: {
    default: CANONICAL_TITLE,
    template: "%s | BitLayerX",
  },

  description: CANONICAL_DESCRIPTION,

  authors: [
    { name: "Opeyemi T. Ojurongbe", url: "https://opeyemiojurongbe.com" },
  ],
  creator: "BitLayerX",
  publisher: "BitLayerX",

  applicationName: "BitLayerX",
  category: "Technology",
  classification: "Business Services",

  openGraph: {
    type: "website",
    locale: "en_NG",
    url: "https://bitlayerx.com",
    siteName: "BitLayerX",
    title: CANONICAL_TITLE,
    description: CANONICAL_DESCRIPTION,
    // A single designed 1200×630 card, a square logo makes a weak link preview.
    images: [
      {
        url: "https://bitlayerx.com/opengraph-image",
        width: 1200,
        height: 630,
        alt: "BitLayerX, design, engineering, brand, film and growth, one team.",
        type: "image/png",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: CANONICAL_TITLE,
    description: CANONICAL_DESCRIPTION,
    images: ["https://bitlayerx.com/opengraph-image"],
    creator: "@bitlayerx",
    site: "@bitlayerx",
  },

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // Icons and the manifest are produced by app/icon.png, app/apple-icon.png and
  // app/manifest.js, the company mark, not a stand-in.
  // They were previously declared here pointing at files that did not exist in
  // /public, six guaranteed 404s on every page load, all of them counted by
  // Search Console. File conventions cannot drift from reality this way.

  verification: VERIFICATION,

  // No canonical here on purpose. A canonical set on the root layout is
  // inherited by every route that does not override it, which tells Google
  // that /services, /packages and the rest are all duplicates of the homepage:
  // the "Duplicate without user-selected canonical" report. Each page declares
  // its own via pageMetadata() in lib/seo.js instead.

  other: {
    "mobile-web-app-capable": "yes",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "black-translucent",
    "format-detection": "telephone=no",
  },
};

// ─── Viewport ─────────────────────────────────────────────────────────────────
export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  minimumScale: 1,
  userScalable: true,
  viewportFit: "cover",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#0040FF" },
    { media: "(prefers-color-scheme: dark)", color: "#0040FF" },
  ],
};

// ─── Root Layout ──────────────────────────────────────────────────────────────
export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${sans.variable} ${serif.variable}`}
      suppressHydrationWarning
    >
      <head>
        {/* ── Performance, Resource Hints ──────────────────────────────── */}
        {/* No font preconnects: next/font self-hosts Inter and Newsreader at
            build time, so there is no Google Fonts request to warm up. */}
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />

        {/* ── Primary SEO Schema, Organization + WebSite + Service ─────── */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Organization",
                  "@id": "https://bitlayerx.com/#organization",
                  name: "BitLayerX",
                  legalName: "BitLayerX Technologies",
                  alternateName: "BitLayerX Technologies",
                  url: "https://bitlayerx.com",
                  logo: {
                    "@type": "ImageObject",
                    url: "https://bitlayerx.com/icon.png",
                    width: 512,
                    height: 512,
                  },
                  description:
                    "BitLayerX designs and builds the products, brands and systems companies run on, strategy, design, engineering, brand, film and growth, delivered by one team.",
                  founder: {
                    "@type": "Person",
                    name: "Opeyemi T. Ojurongbe",
                    jobTitle: "Team Lead",
                    url: "https://opeyemiojurongbe.com",
                  },
                  address: {
                    "@type": "PostalAddress",
                    streetAddress: "6th Avenue, Gwarinpa",
                    addressLocality: "Abuja",
                    addressRegion: "FCT",
                    addressCountry: "NG",
                  },
                  contactPoint: [
                    {
                      "@type": "ContactPoint",
                      telephone: "+234-802-540-1891",
                      contactType: "customer service",
                      email: "hello@bitlayerx.com",
                      areaServed: ["NG", "GB", "US"],
                      availableLanguage: ["en"],
                    },
                    {
                      "@type": "ContactPoint",
                      telephone: "+234-802-540-1891",
                      contactType: "sales",
                      areaServed: ["NG", "GB", "US"],
                      availableLanguage: ["en"],
                    },
                  ],
                  sameAs: [
                    "https://www.linkedin.com/company/bitlayerx",
                    "https://x.com/bitlayerx",
                    "https://www.instagram.com/bitlayerx",
                    "https://www.facebook.com/bitlayerx",
                    "https://opeyemiojurongbe.com",
                  ],
                },
                {
                  "@type": "WebSite",
                  "@id": "https://bitlayerx.com/#website",
                  url: "https://bitlayerx.com",
                  name: "BitLayerX",
                  description: CANONICAL_DESCRIPTION,
                  publisher: {
                    "@id": "https://bitlayerx.com/#organization",
                  },
                },
                {
                  "@type": "ProfessionalService",
                  "@id": "https://bitlayerx.com/#service",
                  name: "BitLayerX Digital Innovation",
                  image: "https://bitlayerx.com/icon.png",
                  priceRange: "₦₦₦",
                  telephone: "+234-802-540-1891",
                  address: {
                    "@type": "PostalAddress",
                    streetAddress: "6th Avenue, Gwarinpa",
                    addressLocality: "Abuja",
                    addressRegion: "FCT",
                    addressCountry: "NG",
                  },
                  hasOfferCatalog: {
                    "@type": "OfferCatalog",
                    name: "BitLayerX Digital Services",
                    itemListElement: [
                      {
                        "@type": "Offer",
                        itemOffered: {
                          "@type": "Service",
                          name: "Web & Mobile Development",
                          description:
                            "Custom web applications, mobile apps, and digital platforms",
                        },
                      },
                      {
                        "@type": "Offer",
                        itemOffered: {
                          "@type": "Service",
                          name: "UI/UX & Product Design",
                          description:
                            "User-centred interface design and digital product strategy",
                        },
                      },
                      {
                        "@type": "Offer",
                        itemOffered: {
                          "@type": "Service",
                          name: "Branding & Digital Identity",
                          description:
                            "Brand identity systems, logo design, and visual communication",
                        },
                      },
                      {
                        "@type": "Offer",
                        itemOffered: {
                          "@type": "Service",
                          name: "Commercials & Video Production",
                          description:
                            "High-impact commercial videos, brand films, and ad creatives",
                        },
                      },
                      {
                        "@type": "Offer",
                        itemOffered: {
                          "@type": "Service",
                          name: "Digital Marketing & Growth",
                          description:
                            "SEO, paid advertising, email marketing, and performance campaigns",
                        },
                      },
                      {
                        "@type": "Offer",
                        itemOffered: {
                          "@type": "Service",
                          name: "Software Engineering & Architecture",
                          description:
                            "Scalable system architecture, APIs, and enterprise software",
                        },
                      },
                    ],
                  },
                },
              ],
            }),
          }}
        />

        {/* ── Breadcrumb Schema ─────────────────────────────────────────── */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Home",
                  item: "https://bitlayerx.com",
                },
              ],
            }),
          }}
        />

        {/* ── Local Business Schema ─────────────────────────────────────── */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "BitLayerX",
              image: "https://bitlayerx.com/icon.png",
              "@id": "https://bitlayerx.com/#localbusiness",
              url: "https://bitlayerx.com",
              telephone: "+234-802-540-1891",
              address: {
                "@type": "PostalAddress",
                streetAddress: "6th Avenue, Gwarinpa",
                addressLocality: "Abuja",
                addressRegion: "FCT",
                postalCode: "900108",
                addressCountry: "NG",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 9.0765,
                longitude: 7.3986,
              },
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                  ],
                  opens: "08:00",
                  closes: "18:00",
                },
              ],
              priceRange: "₦₦₦",
            }),
          }}
        />
      </head>

      <body
        className={`${sans.className} antialiased`}
        suppressHydrationWarning
      >
        {/* ── Google Analytics, set NEXT_PUBLIC_GA_ID in .env ─────────── */}
        {GA_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_ID}', {
                  page_path: window.location.pathname,
                  anonymize_ip: true,
                  cookie_flags: 'SameSite=None;Secure'
                });
              `}
            </Script>
          </>
        )}

        {/* ── Facebook Pixel, set NEXT_PUBLIC_FB_PIXEL_ID in .env ──────── */}
        {FB_PIXEL && (
          <Script id="facebook-pixel" strategy="afterInteractive">
            {`
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '${FB_PIXEL}');
              fbq('track', 'PageView');
            `}
          </Script>
        )}

        {/* ── Microsoft Clarity, set NEXT_PUBLIC_CLARITY_ID in .env ────── */}
        {CLARITY_ID && (
          <Script id="microsoft-clarity" strategy="afterInteractive">
            {`
              (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "${CLARITY_ID}");
            `}
          </Script>
        )}

        {/* ── Hotjar, Set NEXT_PUBLIC_HOTJAR_ID in .env ───────────────── */}
        {HOTJAR_ID && (
          <Script id="hotjar" strategy="afterInteractive">
            {`
              (function(h,o,t,j,a,r){
                h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
                h._hjSettings={hjid:${HOTJAR_ID},hjsv:6};
                a=o.getElementsByTagName('head')[0];
                r=o.createElement('script');r.async=1;
                r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
                a.appendChild(r);
              })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
            `}
          </Script>
        )}

        {/* ── Toast Notifications ───────────────────────────────────────── */}
        <ToastProvider />

        {/* ── App Shell ─────────────────────────────────────────────────── */}
        <div
          id="root-wrapper"
          suppressHydrationWarning
          style={{
            width: "100%",
            maxWidth: "100vw",
            overflowX: "hidden",
            position: "relative",
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
          }}
        >
          {/* Skip link, first tab stop for keyboard and screen-reader users */}
          <a href="#main-content" className="blx-skip-link">
            Skip to main content
          </a>

          {/* Navbar */}
          <Navbar />

          {/* Main Content */}
          <main
            id="main-content"
            className="flex-1"
            style={{
              width: "100%",
              maxWidth: "100vw",
              overflowX: "hidden",
              position: "relative",
              minHeight: "calc(100vh - 200px)",
            }}
            role="main"
            aria-label="Main content"
          >
            {children}
          </main>

          {/* Footer */}
          <Footer />
        </div>

        {/* ── Core Web Vitals, reported to GA4, never to the console ───── */}
        {GA_ID && (
          <Script id="web-vitals-monitor" strategy="afterInteractive">
            {`
              if ('PerformanceObserver' in window) {
                var send = function (name, value) {
                  if (typeof window.gtag === 'function') {
                    window.gtag('event', name, {
                      value: Math.round(value),
                      metric_value: value,
                      non_interaction: true,
                    });
                  }
                };
                try {
                  new PerformanceObserver(function (list) {
                    var last = list.getEntries().slice(-1)[0];
                    if (last) send('LCP', last.renderTime || last.loadTime);
                  }).observe({ type: 'largest-contentful-paint', buffered: true });

                  new PerformanceObserver(function (list) {
                    list.getEntries().forEach(function (e) {
                      send('INP', e.processingStart, e.startTime);
                    });
                  }).observe({ type: 'first-input', buffered: true });

                  var cls = 0;
                  new PerformanceObserver(function (list) {
                    list.getEntries().forEach(function (e) {
                      if (!e.hadRecentInput) cls += e.value;
                    });
                  }).observe({ type: 'layout-shift', buffered: true });
                  addEventListener('visibilitychange', function () {
                    if (document.visibilityState === 'hidden') send('CLS', cls * 1000);
                  }, { once: true });
                } catch (e) {}
              }
            `}
          </Script>
        )}
      </body>
    </html>
  );
}