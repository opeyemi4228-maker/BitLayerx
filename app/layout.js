import { Montserrat } from "next/font/google";
import "./globals.css";
import { AppContextProvider } from "@/context/AppContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ToastProvider from "@/components/ToastProvider";
import Script from "next/script";

const montserrat = Montserrat({ 
  subsets: ['latin'], 
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
  display: 'swap',
  variable: '--font-montserrat',
  preload: true,
  adjustFontFallback: true,
})

const HOTJAR_ID = process.env.NEXT_PUBLIC_HOTJAR_ID;

export const metadata = {
  metadataBase: new URL('https://bitlayerx.com'),
  
  title: {
    default: "BitLayerx - Digital Growth Partner | Web Development, AI & Marketing in Nigeria",
    template: "%s | BitLayerx - Digital Growth Partner"
  },
  
  description: "Transform your business with BitLayerx. Expert web development, AI automation, brand identity & performance marketing. Trusted by 500+ businesses in Nigeria, UK & globally. Get 20% off Enterprise packages.",
  
  keywords: [
    "web development Nigeria",
    "AI automation services",
    "performance marketing agency",
    "digital agency Nigeria",
    "BitLayerx",
    "enterprise web solutions",
    "startup MVP development",
    "brand identity design Nigeria",
    "video production Lagos",
    "SEO services Nigeria",
    "e-commerce development",
    "mobile app development",
    "digital transformation",
    "Lagos web developers",
    "Abuja digital agency"
  ],
  
  authors: [{ name: "BitLayerx Digital Solutions", url: "https://bitlayerx.com" }],
  creator: "BitLayerx Digital Solutions",
  publisher: "BitLayerx Digital Solutions",
  
  applicationName: "BitLayerx",
  
  category: "Technology",
  classification: "Business Services",
  
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://bitlayerx.com",
    siteName: "BitLayerx - Digital Growth Partner",
    title: "BitLayerx - Web Development, AI Automation & Marketing in Nigeria",
    description: "Expert web development, AI automation & performance marketing. Trusted by 500+ businesses. Transform your digital presence today.",
    images: [
      {
        url: "https://bitlayerx.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "BitLayerx - Digital Growth Partner",
        type: "image/png",
      },
      {
        url: "https://bitlayerx.com/og-image-square.png",
        width: 800,
        height: 800,
        alt: "BitLayerx Logo",
        type: "image/png",
      }
    ],
  },
  
  twitter: {
    card: "summary_large_image",
    title: "BitLayerx - Digital Growth Partner",
    description: "Expert web development, AI automation & performance marketing. Trusted by 500+ businesses.",
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
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon.ico', sizes: 'any' },
    ],
    shortcut: '/favicon.ico',
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      { rel: 'mask-icon', url: '/safari-pinned-tab.svg', color: '#0818A8' },
    ],
  },
  
  manifest: '/site.webmanifest',
  
  verification: {
    google: 'your-google-site-verification-code',
    yandex: 'your-yandex-verification-code',
    bing: 'your-bing-verification-code',
  },
  
  alternates: {
    canonical: 'https://bitlayerx.com',
    languages: {
      'en-US': 'https://bitlayerx.com',
      'en-GB': 'https://bitlayerx.com/en-gb',
    },
  },
  
  other: {
    'mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'black-translucent',
    'format-detection': 'telephone=no',
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  minimumScale: 1,
  userScalable: true,
  viewportFit: 'cover',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#0818A8' },
    { media: '(prefers-color-scheme: dark)', color: '#000080' },
  ],
}

export default function RootLayout({ children }) {
  return (
    <html 
      lang="en" 
      className={montserrat.variable}
      suppressHydrationWarning
    >
      <head>
        {/* Performance Optimization - Resource Hints */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        
        {/* SEO - Rich Snippets & Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Organization",
                  "@id": "https://bitlayerx.com/#organization",
                  "name": "BitLayerx",
                  "url": "https://bitlayerx.com",
                  "logo": {
                    "@type": "ImageObject",
                    "url": "https://bitlayerx.com/logo.png",
                    "width": 512,
                    "height": 512
                  },
                  "description": "Digital growth partner specializing in web development, AI automation, and performance marketing for businesses in Nigeria and globally.",
                  "foundingDate": "2020",
                  "founders": [
                    {
                      "@type": "Person",
                      "name": "BitLayerx Founders"
                    }
                  ],
                  "address": {
                    "@type": "PostalAddress",
                    "addressLocality": "Lagos",
                    "addressRegion": "Lagos State",
                    "addressCountry": "NG"
                  },
                  "contactPoint": [
                    {
                      "@type": "ContactPoint",
                      "telephone": "+234-803-456-7890",
                      "contactType": "customer service",
                      "email": "info@bitlayerx.com",
                      "areaServed": ["NG", "GB", "US"],
                      "availableLanguage": ["en"],
                      "contactOption": "TollFree"
                    },
                    {
                      "@type": "ContactPoint",
                      "telephone": "+234-803-456-7890",
                      "contactType": "sales",
                      "areaServed": ["NG", "GB", "US"],
                      "availableLanguage": ["en"]
                    }
                  ],
                  "sameAs": [
                    "https://twitter.com/bitlayerx",
                    "https://linkedin.com/company/bitlayerx",
                    "https://facebook.com/bitlayerx",
                    "https://instagram.com/bitlayerx",
                    "https://github.com/bitlayerx"
                  ],
                  "aggregateRating": {
                    "@type": "AggregateRating",
                    "ratingValue": "4.9",
                    "reviewCount": "127",
                    "bestRating": "5",
                    "worstRating": "1"
                  },
                  "numberOfEmployees": {
                    "@type": "QuantitativeValue",
                    "value": "50"
                  },
                  "areaServed": {
                    "@type": "GeoCircle",
                    "geoMidpoint": {
                      "@type": "GeoCoordinates",
                      "latitude": "6.5244",
                      "longitude": "3.3792"
                    },
                    "geoRadius": "100000"
                  }
                },
                {
                  "@type": "WebSite",
                  "@id": "https://bitlayerx.com/#website",
                  "url": "https://bitlayerx.com",
                  "name": "BitLayerx",
                  "description": "Digital Growth Partner",
                  "publisher": {
                    "@id": "https://bitlayerx.com/#organization"
                  },
                  "potentialAction": {
                    "@type": "SearchAction",
                    "target": {
                      "@type": "EntryPoint",
                      "urlTemplate": "https://bitlayerx.com/search?q={search_term_string}"
                    },
                    "query-input": "required name=search_term_string"
                  }
                },
                {
                  "@type": "ProfessionalService",
                  "@id": "https://bitlayerx.com/#service",
                  "name": "BitLayerx Digital Solutions",
                  "image": "https://bitlayerx.com/logo.png",
                  "priceRange": "₦₦₦",
                  "telephone": "+234-803-456-7890",
                  "address": {
                    "@type": "PostalAddress",
                    "addressLocality": "Lagos",
                    "addressCountry": "NG"
                  },
                  "hasOfferCatalog": {
                    "@type": "OfferCatalog",
                    "name": "Digital Services",
                    "itemListElement": [
                      {
                        "@type": "Offer",
                        "itemOffered": {
                          "@type": "Service",
                          "name": "Web Development",
                          "description": "Custom web application development"
                        }
                      },
                      {
                        "@type": "Offer",
                        "itemOffered": {
                          "@type": "Service",
                          "name": "AI Automation",
                          "description": "Intelligent business automation solutions"
                        }
                      },
                      {
                        "@type": "Offer",
                        "itemOffered": {
                          "@type": "Service",
                          "name": "Performance Marketing",
                          "description": "ROI-driven digital marketing campaigns"
                        }
                      }
                    ]
                  }
                }
              ]
            })
          }}
        />

        {/* Breadcrumb Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Home",
                  "item": "https://bitlayerx.com"
                }
              ]
            })
          }}
        />
      </head>
      
      <body 
        className={`${montserrat.className} antialiased`}
        suppressHydrationWarning
      >
        {/* Google Analytics - Replace with your GA4 ID */}
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

        {/* Facebook Pixel - Replace with your Pixel ID */}
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

        {/* Microsoft Clarity - Replace with your Project ID */}
        <Script id="microsoft-clarity" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "YOUR_CLARITY_ID");
          `}
        </Script>

        {/* Hotjar - Replace with your Hotjar ID (set NEXT_PUBLIC_HOTJAR_ID) */}
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

        {/* Toast Notifications (client-only) */}
        <ToastProvider />

        {/* Main App Wrapper - Overflow Prevention */}
        <AppContextProvider>
          <div 
            id="root-wrapper"
            style={{
              width: '100%',
              maxWidth: '100vw',
              overflowX: 'hidden',
              position: 'relative',
              minHeight: '100vh',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            {/* Skip to main content - Accessibility */}
            <a 
              href="#main-content" 
              className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-[#0818A8] focus:text-white focus:rounded-lg"
            >
              Skip to main content
            </a>

            {/* Navigation */}
            <Navbar />
            
            {/* Main Content */}
            <main 
              id="main-content"
              className="flex-1"
              style={{
                width: '100%',
                maxWidth: '100vw',
                overflowX: 'hidden',
                position: 'relative',
                minHeight: 'calc(100vh - 200px)',
              }}
              role="main"
            >
              {children}
            </main>
            
            {/* Footer */}
            <Footer />
          </div>
        </AppContextProvider>

        {/* Anti-Scroll Protection Script */}
        <Script id="prevent-horizontal-scroll" strategy="beforeInteractive">
          {`
            (function() {
              'use strict';
              
              function preventHorizontalScroll() {
                const html = document.documentElement;
                const body = document.body;
                
                // Force overflow hidden on html and body
                html.style.overflowX = 'hidden';
                html.style.width = '100%';
                html.style.maxWidth = '100vw';
                
                body.style.overflowX = 'hidden';
                body.style.width = '100%';
                body.style.maxWidth = '100vw';
                body.style.position = 'relative';
                
                // Check for overflow and fix
                const checkOverflow = () => {
                  if (body.scrollWidth > window.innerWidth) {
                    console.warn('Horizontal overflow detected');
                    const allElements = document.querySelectorAll('*');
                    allElements.forEach(el => {
                      if (el.scrollWidth > window.innerWidth) {
                        el.style.maxWidth = '100%';
                        el.style.overflowX = 'hidden';
                      }
                    });
                  }
                };
                
                // Run checks
                setTimeout(checkOverflow, 100);
                setTimeout(checkOverflow, 500);
                setTimeout(checkOverflow, 1000);
              }
              
              // Execute on different load states
              if (document.readyState === 'loading') {
                document.addEventListener('DOMContentLoaded', preventHorizontalScroll);
              } else {
                preventHorizontalScroll();
              }
              
              // Re-run on resize (debounced)
              let resizeTimer;
              window.addEventListener('resize', function() {
                clearTimeout(resizeTimer);
                resizeTimer = setTimeout(preventHorizontalScroll, 250);
              }, { passive: true });
              
              // Re-run on route changes
              window.addEventListener('popstate', preventHorizontalScroll);
            })();
          `}
        </Script>

        {/* Performance Monitoring */}
        <Script id="performance-monitoring" strategy="afterInteractive">
          {`
            if ('PerformanceObserver' in window) {
              // Monitor Largest Contentful Paint
              const lcpObserver = new PerformanceObserver((list) => {
                const entries = list.getEntries();
                const lastEntry = entries[entries.length - 1];
                console.log('LCP:', lastEntry.renderTime || lastEntry.loadTime);
              });
              lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

              // Monitor First Input Delay
              const fidObserver = new PerformanceObserver((list) => {
                const entries = list.getEntries();
                entries.forEach((entry) => {
                  console.log('FID:', entry.processingStart - entry.startTime);
                });
              });
              fidObserver.observe({ entryTypes: ['first-input'] });

              // Monitor Cumulative Layout Shift
              let clsValue = 0;
              const clsObserver = new PerformanceObserver((list) => {
                for (const entry of list.getEntries()) {
                  if (!entry.hadRecentInput) {
                    clsValue += entry.value;
                    console.log('CLS:', clsValue);
                  }
                }
              });
              clsObserver.observe({ entryTypes: ['layout-shift'] });
            }
          `}
        </Script>
      </body>
    </html>
  );
}