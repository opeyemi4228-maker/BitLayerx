"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  ChevronDown,
  Menu,
  X,
  Code2,
  Palette,
  Zap,
  Rocket,
  Building2,
  Users,
  Sparkles,
  ArrowRight,
  Phone,
  Layers,
  Megaphone,
  BrainCircuit,
  Briefcase,
  Lightbulb,
  Landmark,
  Truck,
  Home,
  ShoppingCart,
  Factory,
  CalendarCheck,
  Send,
  Award,
  HeartHandshake,
  Video,
  PenTool,
  Crown,
  Monitor,
  Globe2,
  Hammer,
  BarChart2,
} from "lucide-react";
import { assets } from "@/assets/assets";

// ─── SEO Schema ───────────────────────────────────────────────────────────────
const ORG_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "BitLayerX",
  url: "https://bitlayerx.com",
  logo: "https://bitlayerx.com/logo.png",
  description:
    "BitLayerX is a forward-thinking digital innovation company delivering layered digital ecosystems — strategy, design, technology, brand, media, and growth.",
  sameAs: [
    "https://twitter.com/bitlayerx",
    "https://linkedin.com/company/bitlayerx",
    "https://instagram.com/bitlayerx",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+234-802-540-1891",
    contactType: "customer service",
    availableLanguage: "English",
  },
};

// ─── Navigation Data ──────────────────────────────────────────────────────────
const NAV_ITEMS = [
  { label: "Home", href: "/" },
  {
    label: "Packages",
    href: "/packages",
    dropdown: [
      {
        label: "Launchpad",
        href: "/packages/launchpad",
        icon: Rocket,
        desc: "Your first step into the digital world — done right",
      },
      {
        label: "Growth Engine",
        href: "/packages/growth-engine",
        icon: Zap,
        desc: "Stop being the best-kept secret in your industry",
      },
      {
        label: "Brand Authority",
        href: "/packages/brand-authority",
        icon: Crown,
        desc: "Become the brand everyone recognises and chooses first",
      },
      {
        label: "Tech Powerhouse",
        href: "/packages/tech-powerhouse",
        icon: Monitor,
        desc: "Digital infrastructure that scales without limits",
      },
      {
        label: "Digital Dominance",
        href: "/packages/digital-dominance",
        icon: Globe2,
        desc: "Enterprise partnership for total market leadership",
      },
    ],
  },
  {
    label: "Services",
    href: "/services",
    dropdown: [
      {
        label: "Web & Mobile Development",
        href: "/services/web-mobile",
        icon: Code2,
        desc: "Fast, scalable digital platforms",
      },
      {
        label: "UI/UX & Product Design",
        href: "/services/ui-ux",
        icon: PenTool,
        desc: "User-centred digital experiences",
      },
      {
        label: "Branding & Identity",
        href: "/services/branding",
        icon: Palette,
        desc: "Identities that command attention",
      },
      {
        label: "Software Engineering",
        href: "/services/software",
        icon: BrainCircuit,
        desc: "Scalable, secure architectures",
      },
      {
        label: "Commercials & Video",
        href: "/services/video",
        icon: Video,
        desc: "High-impact brand films & ads",
      },
      {
        label: "Digital Marketing & Growth",
        href: "/services/marketing",
        icon: Megaphone,
        desc: "Performance-driven campaigns",
      },
    ],
  },
  {
    label: "Work",
    href: "/work",
    dropdown: [
      {
        label: "Featured Projects",
        href: "/work/featured",
        icon: Briefcase,
        desc: "Our finest executions",
      },
      {
        label: "Success Stories",
        href: "/work/success-stories",
        icon: Award,
        desc: "Real results, real brands",
      },
      {
        label: "Before & After",
        href: "/work/transformations",
        icon: Layers,
        desc: "Proof of transformation",
      },
    ],
  },
  {
    label: "About",
    href: "/about",
    dropdown: [
      {
        label: "Company Overview",
        href: "/about",
        icon: Building2,
        desc: "Who we are & what we stand for",
      },
      {
        label: "Our Philosophy",
        href: "/about/philosophy",
        icon: Lightbulb,
        desc: "The layered thinking behind everything",
      },
      {
        label: "Leadership & Team",
        href: "/about/team",
        icon: Users,
        desc: "The people driving innovation",
      },
      {
        label: "Why BitLayerX",
        href: "/about/why",
        icon: HeartHandshake,
        desc: "What makes us different",
      },
    ],
  },
  {
    label: "Contact",
    href: "/contact",
    dropdown: [
      {
        label: "Start a Project",
        href: "/contact/project",
        icon: Rocket,
        desc: "Tell us what you're building",
      },
      {
        label: "Book a Call",
        href: "/contact/call",
        icon: CalendarCheck,
        desc: "Schedule a strategy session",
      },
      {
        label: "Request Proposal",
        href: "/contact/proposal",
        icon: Send,
        desc: "Get a tailored proposal",
      },
    ],
  },
];

// ─── Wordmark / Logo ──────────────────────────────────────────────────────────
function BitLayerXLogo({ className = "" }) {
  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      <Image
        src={assets.logo}
        alt="BitLayerX"
        width={60}
        height={45}
        className="h-13 w-auto object-contain"
        priority
      />
      <span
        className="font-black text-[22px] text-[#000066] tracking-tight hidden sm:block"
        style={{ letterSpacing: "-0.03em", fontFamily: "'Montserrat', sans-serif" }}
      >
        BitLayerX
      </span>
    </div>
  );
}

// ─── Announcement Bar ─────────────────────────────────────────────────────────
function AnnouncementBar({ onClose }) {
  return (
    <div
      className="relative overflow-hidden"
      style={{ background: "linear-gradient(90deg,#000066,#0818A8 50%,#000066)" }}
    >
      {/* Animated shimmer */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(105deg,transparent 40%,rgba(255,255,255,0.08) 50%,transparent 60%)",
          backgroundSize: "200% 100%",
          animation: "blx-shimmer 3.5s linear infinite",
        }}
      />
      <style>{`
        @keyframes blx-shimmer{0%{background-position:-200% 0}100%{background-position:200% 0}}
      `}</style>
      <div className="relative max-w-[1600px] mx-auto px-4 sm:px-8 py-2 flex items-center justify-between gap-4">
        <div className="flex items-center gap-2 flex-1 justify-center min-w-0">
          <Sparkles size={13} className="text-amber-300 flex-shrink-0" strokeWidth={2.5} />
          <p className="text-white text-[14px] sm:text-[15px] font-semibold text-center leading-tight truncate">
            <span className="font-black text-amber-300">Limited Offer:</span>{" "}
            20% off Enterprise packages this month —{" "}
            <Link
              href="/packages"
              className="font-black underline underline-offset-2 hover:text-amber-300 transition-colors"
            >
              Transform your business
            </Link>
          </p>
        </div>
        <button
          onClick={onClose}
          className="p-1 hover:bg-white/10 rounded transition-colors flex-shrink-0"
          aria-label="Close announcement"
        >
          <X size={13} className="text-white/60" strokeWidth={2.5} />
        </button>
      </div>
    </div>
  );
}

// ─── Dropdown Menu ────────────────────────────────────────────────────────────
function DropdownPanel({ items, visible, onClose }) {
  return (
    <div
      aria-hidden={!visible}
      className="absolute left-0 top-full pt-2 z-50"
      style={{
        pointerEvents: visible ? "auto" : "none",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(-6px)",
        transition: "opacity 0.18s ease, transform 0.18s ease",
      }}
    >
      <div
        className="min-w-[272px] bg-white rounded-2xl overflow-hidden"
        style={{
          boxShadow:
            "0 4px 6px -1px rgba(0,0,102,0.06),0 20px 48px -8px rgba(0,0,102,0.16)",
          border: "1px solid rgba(0,0,102,0.08)",
        }}
      >
        <div className="p-2">
          {items.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={onClose}
                className="flex items-center gap-3 px-3 py-2.5 rounded-xl group transition-all duration-150 hover:bg-[#000066] text-black/80 hover:text-white"
              >
                {Icon && (
                  <div className="w-8 h-8 rounded-lg bg-[#000066]/6 group-hover:bg-white/15 flex items-center justify-center flex-shrink-0 transition-colors">
                    <Icon
                      size={15}
                      strokeWidth={2}
                      className="text-[#000066] group-hover:text-white transition-colors"
                    />
                  </div>
                )}
                <div className="flex flex-col min-w-0">
                  <span className="font-semibold text-[15px] leading-snug">
                    {item.label}
                  </span>
                  {item.desc && (
                    <span className="text-[11.5px] text-black/80 group-hover:text-white/60 leading-snug mt-0.5 transition-colors">
                      {item.desc}
                    </span>
                  )}
                </div>
                <ArrowRight
                  size={12}
                  strokeWidth={2.5}
                  className="ml-auto flex-shrink-0 text-gray-300 group-hover:text-white/70 opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all duration-150"
                />
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}

// ─── Desktop Nav Link ─────────────────────────────────────────────────────────
function NavLink({ item, pathname }) {
  const [open, setOpen] = useState(false);
  const timerRef = useRef(null);

  const isActive =
    item.href === "/"
      ? pathname === "/"
      : pathname === item.href || pathname.startsWith(item.href + "/");

  const show = () => {
    clearTimeout(timerRef.current);
    if (item.dropdown) setOpen(true);
  };
  const hide = () => {
    timerRef.current = setTimeout(() => setOpen(false), 100);
  };

  useEffect(() => () => clearTimeout(timerRef.current), []);

  return (
    <div className="relative" onMouseEnter={show} onMouseLeave={hide}>
      <Link
        href={item.href}
        className={`
          flex items-center gap-1 px-3 py-2 rounded-lg text-[13.5px] font-semibold transition-all duration-150
          ${isActive
            ? "text-[#000066] bg-[#000066]/8"
            : "text-black/80 hover:text-[#000066] hover:bg-[#000066]/5"
          }
        `}
        style={{ fontFamily: "'Montserrat',sans-serif", letterSpacing: "-0.01em" }}
      >
        {item.label}
        {item.dropdown && (
          <ChevronDown
            size={13}
            strokeWidth={2.5}
            className={`text-black/80 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          />
        )}
      </Link>

      {/* Active underline */}
      {isActive && (
        <div
          className="absolute bottom-0 left-3 right-3 h-[2px] rounded-full bg-[#000066]"
          style={{ transform: "translateY(1px)" }}
        />
      )}

      {item.dropdown && (
        <DropdownPanel items={item.dropdown} visible={open} onClose={() => setOpen(false)} />
      )}
    </div>
  );
}

// ─── Mobile Accordion Item ────────────────────────────────────────────────────
function MobileNavItem({ item, pathname, onClose }) {
  const [expanded, setExpanded] = useState(false);
  const hasMenu = !!item.dropdown;
  const isActive =
    item.href === "/"
      ? pathname === "/"
      : pathname === item.href || pathname.startsWith(item.href + "/");

  return (
    <div>
      {hasMenu ? (
        <>
          <button
            onClick={() => setExpanded((v) => !v)}
            className="flex items-center justify-between w-full px-4 py-3 rounded-xl font-semibold text-[14px] text-black/80 hover:text-[#000066] hover:bg-[#000066]/5 transition-colors"
            style={{ fontFamily: "'Montserrat',sans-serif" }}
            aria-expanded={expanded}
          >
            <span>{item.label}</span>
            <ChevronDown
              size={14}
              strokeWidth={2.5}
              className={`text-black/80 transition-transform duration-250 ${expanded ? "rotate-180" : ""}`}
            />
          </button>
          <div
            style={{
              maxHeight: expanded ? "600px" : "0",
              overflow: "hidden",
              transition: "max-height 0.28s ease",
            }}
          >
            <div className="pl-3 pr-1 pb-2 pt-1 space-y-0.5">
              {item.dropdown.map((sub) => {
                const Icon = sub.icon;
                return (
                  <Link
                    key={sub.href}
                    href={sub.href}
                    onClick={onClose}
                    className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-black/80 hover:text-[#000066] hover:bg-[#000066]/5 transition-all group"
                  >
                    {Icon && (
                      <div className="w-7 h-7 rounded-lg bg-gray-100 group-hover:bg-[#000066]/8 flex items-center justify-center flex-shrink-0 transition-colors">
                        <Icon size={14} strokeWidth={2} className="text-black/80 group-hover:text-[#000066] transition-colors" />
                      </div>
                    )}
                    <div className="flex flex-col min-w-0">
                      <span className="text-[15px] font-semibold">{sub.label}</span>
                      {sub.desc && (
                        <span className="text-[13.5px] text-black/80 leading-snug mt-0.5">{sub.desc}</span>
                      )}
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </>
      ) : (
        <Link
          href={item.href}
          onClick={onClose}
          className={`block px-4 py-3 rounded-xl font-semibold text-[14px] transition-colors ${
            isActive
              ? "text-[#000066] bg-[#000066]/8"
              : "text-black/80 hover:text-[#000066] hover:bg-[#000066]/5"
          }`}
          style={{ fontFamily: "'Montserrat',sans-serif" }}
        >
          {item.label}
        </Link>
      )}
    </div>
  );
}

// ─── Mobile Drawer ────────────────────────────────────────────────────────────
function MobileDrawer({ open, onClose, pathname }) {
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      {/* Backdrop */}
      <div
        aria-hidden={!open}
        onClick={onClose}
        className="fixed inset-0 z-40 bg-black/30 backdrop-blur-sm xl:hidden"
        style={{
          opacity: open ? 1 : 0,
          pointerEvents: open ? "auto" : "none",
          transition: "opacity 0.25s ease",
        }}
      />

      {/* Drawer */}
      <div
        id="mobile-nav"
        role="dialog"
        aria-modal="true"
        aria-label="Site navigation"
        className="fixed top-0 right-0 bottom-0 z-50 w-full max-w-[360px] flex flex-col bg-white xl:hidden"
        style={{
          transform: open ? "translateX(0)" : "translateX(100%)",
          transition: "transform 0.3s cubic-bezier(0.25,0.46,0.45,0.94)",
          boxShadow: "-4px 0 40px rgba(0,0,80,0.12)",
        }}
      >
        {/* Drawer header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
          <Link href="/" onClick={onClose} aria-label="BitLayerX home">
            <BitLayerXLogo />
          </Link>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-xl transition-colors"
            aria-label="Close navigation"
          >
            <X size={20} className="text-black/80" strokeWidth={2} />
          </button>
        </div>

        {/* Nav items */}
        <nav
          className="flex-1 overflow-y-auto px-4 py-4 space-y-0.5"
          aria-label="Mobile navigation"
        >
          {NAV_ITEMS.map((item) => (
            <MobileNavItem
              key={item.label}
              item={item}
              pathname={pathname}
              onClose={onClose}
            />
          ))}
        </nav>

        {/* Footer CTAs */}
        <div className="px-5 py-5 border-t border-gray-100 space-y-3">
          <Link
            href="/contact/call"
            onClick={onClose}
            className="flex items-center justify-center gap-2 w-full px-6 py-3 border border-gray-200 text-black/80 hover:text-[#000066] hover:border-[#000066]/30 font-semibold text-[15px] rounded-xl transition-all"
          >
            <CalendarCheck size={14} strokeWidth={2} />
            Book a Strategy Call
          </Link>
        </div>
      </div>
    </>
  );
}

// ─── Divider ──────────────────────────────────────────────────────────────────
function NavDivider() {
  return <div className="w-px h-4 bg-gray-200 mx-1" aria-hidden="true" />;
}

// ─── Main Navbar ──────────────────────────────────────────────────────────────
export default function Navbar() {
  const pathname = usePathname();
  const [announcementVisible, setAnnouncementVisible] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", handler, { passive: true });
    handler();
    return () => window.removeEventListener("scroll", handler);
  }, []);

  // Close mobile on route change
  useEffect(() => { setMobileOpen(false); }, [pathname]);

  return (
    <>
      {/* ── SEO Structured Data ──────────────────────────────────────── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ORG_SCHEMA) }}
      />

      {/* ── Skip to content ──────────────────────────────────────────── */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-[100] focus:px-4 focus:py-2 focus:bg-[#000066] focus:text-white focus:rounded-lg focus:text-sm focus:font-semibold"
      >
        Skip to content
      </a>

      <div className="fixed top-0 left-0 right-0 z-30">
        {/* Announcement bar */}
        {announcementVisible && (
          <AnnouncementBar onClose={() => setAnnouncementVisible(false)} />
        )}

        {/* Main header */}
        <header
          className="bg-white"
          style={{
            borderBottom: scrolled
              ? "1px solid rgba(0,0,102,0.08)"
              : "1px solid transparent",
            boxShadow: scrolled
              ? "0 1px 0 0 rgba(0,0,102,0.04), 0 4px 20px -4px rgba(0,0,102,0.08)"
              : "none",
            transition: "border-color 0.25s ease, box-shadow 0.25s ease",
          }}
          role="banner"
        >
          <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-10">
            <div className="flex items-center justify-between h-[68px] lg:h-[72px]">

              {/* Logo */}
              <Link
                href="/"
                className="flex-shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#000066] focus-visible:ring-offset-2 rounded-lg"
                aria-label="BitLayerX – back to homepage"
              >
                <BitLayerXLogo />
              </Link>

              {/* Desktop nav */}
              <nav
                className="hidden xl:flex items-center gap-0.5 flex-1 justify-center"
                aria-label="Primary navigation"
              >
                {NAV_ITEMS.map((item, i) => (
                  <NavLink key={item.label} item={item} pathname={pathname} />
                ))}
              </nav>

              {/* Right actions */}
              <div className="flex items-center gap-2">

                {/* Book a call — desktop */}
                <Link
                  href="/contact/call"
                  className="hidden xl:flex items-center gap-1.5 px-4 py-2 border border-[#000066]/20 text-[#000066] text-[15px] font-semibold rounded-xl hover:bg-[#000066]/5 transition-all duration-150"
                >
                  <CalendarCheck size={14} strokeWidth={2} />
                  Book a call
                </Link>

                {/* Mobile hamburger */}
                <button
                  onClick={() => setMobileOpen(true)}
                  className="xl:hidden p-2.5 hover:bg-gray-100 rounded-xl transition-colors"
                  aria-label="Open navigation menu"
                  aria-expanded={mobileOpen}
                  aria-controls="mobile-nav"
                >
                  <Menu size={22} className="text-black/80" strokeWidth={2} />
                </button>
              </div>
            </div>
          </div>
        </header>
      </div>

      {/* Mobile drawer */}
      <MobileDrawer
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        pathname={pathname}
      />
    </>
  );
}