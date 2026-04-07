import { Montserrat } from "next/font/google";
import "./globals.css";
import { AppContextProvider } from "@/context/AppContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ToastProvider from "@/components/ToastProvider";
import Script from "next/script";

// ─── Font ──────────────────────────────────────────────────────────────────────
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
  variable: "--font-montserrat",
  preload: true,
  adjustFontFallback: true,
});

const HOTJAR_ID = process.env.NEXT_PUBLIC_HOTJAR_ID;

// ─── Metadata ─────────────────────────────────────────────────────────────────
export const metadata = {
  metadataBase: new URL("https://bitlayerx.com"),

  title: {
    default:
      "BitLayerX — Digital Innovation Company | Web, Brand, Video & Growth in Nigeria",
    template: "%s | BitLayerX — Digital Innovation Company",
  },

  description:
    "BitLayerX architects layered digital ecosystems — strategy, design, technology, brand, media & growth — working as one unified system. Trusted by 500+ businesses across Nigeria and beyond. Build. Scale. Dominate.",

  keywords: [
    "digital innovation company Nigeria",
    "web development Nigeria",
    "UI UX design agency Nigeria",
    "branding agency Abuja",
    "commercial video production Nigeria",
    "performance marketing Nigeria",
    "software engineering Nigeria",
    "mobile app development Nigeria",
    "digital marketing agency Abuja",
    "BitLayerX",
    "layered digital ecosystem",
    "enterprise web solutions Nigeria",
    "fintech app development",
    "e-commerce development Nigeria",
    "startup MVP Nigeria",
    "brand identity Lagos",
    "SEO agency Nigeria",
    "digital transformation Nigeria",
    "Abuja web developers",
    "Lagos digital agency",
  ],

  authors: [
    { name: "BitLayerX", url: "https://bitlayerx.com" },
  ],
  creator: "BitLayerX",
  publisher: "BitLayerX",

  applicationName: "BitLayerX",
  category: "Technology",
  classification: "Business Services",

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://bitlayerx.com",
    siteName: "BitLayerX — Digital Innovation Company",
    title:
      "BitLayerX — Web Development, Branding, Video & Digital Marketing in Nigeria",
    description:
      "We architect layered digital ecosystems — strategy, design, technology, brand, media & growth — as one unified system. Trusted by 500+ businesses.",
    images: [
      {
        url: "https://bitlayerx.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "BitLayerX — Digital Innovation Company",
        type: "image/png",
      },
      {
        url: "https://bitlayerx.com/og-image-square.png",
        width: 800,
        height: 800,
        alt: "BitLayerX Logo",
        type: "image/png",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "BitLayerX — Digital Innovation Company",
    description:
      "Strategy, design, technology, brand, media & growth — working as one layered system. Trusted by 500+ businesses.",
    images: ["https://bitlayerx.com/twitter-image.png"],
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

  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    shortcut: "/favicon.ico",
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      { rel: "mask-icon", url: "/safari-pinned-tab.svg", color: "#000080" },
    ],
  },

  manifest: "/site.webmanifest",

  verification: {
    google: "your-google-site-verification-code",
    yandex: "your-yandex-verification-code",
    bing: "your-bing-verification-code",
  },

  alternates: {
    canonical: "https://bitlayerx.com",
    languages: {
      "en-US": "https://bitlayerx.com",
      "en-GB": "https://bitlayerx.com/en-gb",
    },
  },

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
    { media: "(prefers-color-scheme: light)", color: "#0818A8" },
    { media: "(prefers-color-scheme: dark)", color: "#000080" },
  ],
};

// ─── Root Layout ──────────────────────────────────────────────────────────────
export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={montserrat.variable}
      suppressHydrationWarning
    >
      <head>
        {/* ── Performance — Resource Hints ──────────────────────────────── */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />

        {/* ── Primary SEO Schema — Organization + WebSite + Service ─────── */}
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
                  alternateName: "BitLayerX Digital Innovation",
                  url: "https://bitlayerx.com",
                  logo: {
                    "@type": "ImageObject",
                    url: "https://bitlayerx.com/logo.png",
                    width: 512,
                    height: 512,
                  },
                  description:
                    "BitLayerX is a forward-thinking digital innovation company delivering layered digital ecosystems — strategy, design, technology, brand, media, and growth — as one unified system.",
                  foundingDate: "2020",
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
                    "https://twitter.com/bitlayerx",
                    "https://linkedin.com/company/bitlayerx",
                    "https://facebook.com/bitlayerx",
                    "https://instagram.com/bitlayerx",
                  ],
                  aggregateRating: {
                    "@type": "AggregateRating",
                    ratingValue: "4.9",
                    reviewCount: "127",
                    bestRating: "5",
                    worstRating: "1",
                  },
                  numberOfEmployees: {
                    "@type": "QuantitativeValue",
                    value: "50",
                  },
                },
                {
                  "@type": "WebSite",
                  "@id": "https://bitlayerx.com/#website",
                  url: "https://bitlayerx.com",
                  name: "BitLayerX",
                  description:
                    "Digital Innovation Company — Layered Digital Ecosystems",
                  publisher: {
                    "@id": "https://bitlayerx.com/#organization",
                  },
                  potentialAction: {
                    "@type": "SearchAction",
                    target: {
                      "@type": "EntryPoint",
                      urlTemplate:
                        "https://bitlayerx.com/search?q={search_term_string}",
                    },
                    "query-input": "required name=search_term_string",
                  },
                },
                {
                  "@type": "ProfessionalService",
                  "@id": "https://bitlayerx.com/#service",
                  name: "BitLayerX Digital Innovation",
                  image: "https://bitlayerx.com/logo.png",
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
              image: "https://bitlayerx.com/logo.png",
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
              servesCuisine: null,
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.9",
                reviewCount: "127",
              },
            }),
          }}
        />
      </head>

      <body
        className={`${montserrat.className} antialiased`}
        suppressHydrationWarning
      >
        {/* ── Google Analytics — Replace G-XXXXXXXXXX with your GA4 ID ──── */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXXXXXXXXX', {
              page_path: window.location.pathname,
              anonymize_ip: true,
              cookie_flags: 'SameSite=None;Secure'
            });
          `}
        </Script>

        {/* ── Facebook Pixel — Replace YOUR_PIXEL_ID ────────────────────── */}
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
            fbq('init', 'YOUR_PIXEL_ID');
            fbq('track', 'PageView');
          `}
        </Script>

        {/* ── Microsoft Clarity — Replace YOUR_CLARITY_ID ──────────────── */}
        <Script id="microsoft-clarity" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "YOUR_CLARITY_ID");
          `}
        </Script>

        {/* ── Hotjar — Set NEXT_PUBLIC_HOTJAR_ID in .env ───────────────── */}
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
        <AppContextProvider>
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
        </AppContextProvider>

        {/* ── Core Web Vitals Monitor (dev/analytics) ───────────────────── */}
        <Script id="web-vitals-monitor" strategy="afterInteractive">
          {`
            if ('PerformanceObserver' in window) {
              try {
                new PerformanceObserver((list) => {
                  const last = list.getEntries().slice(-1)[0];
                  if (last) console.log('[BitLayerX] LCP:', last.renderTime || last.loadTime, 'ms');
                }).observe({ entryTypes: ['largest-contentful-paint'] });

                new PerformanceObserver((list) => {
                  list.getEntries().forEach(e => {
                    console.log('[BitLayerX] FID:', e.processingStart - e.startTime, 'ms');
                  });
                }).observe({ entryTypes: ['first-input'] });

                let cls = 0;
                new PerformanceObserver((list) => {
                  list.getEntries().forEach(e => {
                    if (!e.hadRecentInput) {
                      cls += e.value;
                      console.log('[BitLayerX] CLS:', cls.toFixed(4));
                    }
                  });
                }).observe({ entryTypes: ['layout-shift'] });
              } catch(e) {}
            }
          `}
        </Script>
      </body>
    </html>
  );
}