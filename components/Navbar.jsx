"use client";

import Image from "next/image";
import { Montserrat } from "next/font/google";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  ChevronDown,
  Menu,
  X,
  Code2,
  Palette,
  Zap,
  TrendingUp,
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
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { assets } from "@/assets/assets";

// ─── Font ─────────────────────────────────────────────────────────────────────
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-montserrat",
  display: "swap",
});

// ─── Navigation Data ──────────────────────────────────────────────────────────
const NAV_ITEMS = [
  {
    label: "Home",
    href: "/",
  },

  // ── Packages ──────────────────────────────────────────────────────────────
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

  // ── Services ──────────────────────────────────────────────────────────────
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

  // ── Work ──────────────────────────────────────────────────────────────────
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

  // ── Industries ────────────────────────────────────────────────────────────
  {
    label: "Industries",
    href: "/industries",
    dropdown: [
      {
        label: "Fintech",
        href: "/industries/fintech",
        icon: Landmark,
        desc: "Finance-grade digital products",
      },
      {
        label: "Logistics",
        href: "/industries/logistics",
        icon: Truck,
        desc: "Operations-optimised platforms",
      },
      {
        label: "Real Estate",
        href: "/industries/real-estate",
        icon: Home,
        desc: "Property tech & digital presence",
      },
      {
        label: "E-commerce",
        href: "/industries/ecommerce",
        icon: ShoppingCart,
        desc: "Conversion-optimised storefronts",
      },
      {
        label: "Corporate & Enterprise",
        href: "/industries/enterprise",
        icon: Factory,
        desc: "Scalable enterprise ecosystems",
      },
    ],
  },

  // ── About ─────────────────────────────────────────────────────────────────
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

  // ── Contact ───────────────────────────────────────────────────────────────
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

// ─── Announcement Bar — Yellow Gradient ───────────────────────────────────────
function AnnouncementBar() {
  const [isVisible, setIsVisible] = useState(true);
  if (!isVisible) return null;

  return (
    <motion.div
      initial={{ height: 0, opacity: 0 }}
      animate={{ height: "auto", opacity: 1 }}
      exit={{ height: 0, opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="relative overflow-hidden"
      style={{
        background: "linear-gradient(90deg, #f59e0b 0%, #fbbf24 30%, #fde68a 50%, #fbbf24 70%, #f59e0b 100%)",
      }}
    >
      {/* Subtle shimmer overlay */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background:
            "linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.45) 50%, transparent 60%)",
          backgroundSize: "200% 100%",
          animation: "shimmer 3s infinite linear",
        }}
      />
      <style>{`
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
      `}</style>

      <div className="relative max-w-[1600px] mx-auto px-4 sm:px-8 py-2.5 flex items-center justify-between">
        <div className="flex items-center gap-2 flex-1 justify-center">
          <Sparkles size={14} className="text-amber-900/80 flex-shrink-0" strokeWidth={2.5} />
          <p className="text-amber-950 text-[12px] sm:text-[13px] font-semibold text-center leading-tight">
            <span className="font-black">Limited Offer:</span> Get 20% off on all Enterprise
            packages this month —{" "}
            <Link
              href="/packages"
              className="font-black underline underline-offset-2 hover:text-amber-800 transition-colors"
            >
              Transform your business today!
            </Link>
          </p>
        </div>
        <button
          onClick={() => setIsVisible(false)}
          className="p-1 hover:bg-black/10 rounded transition-colors ml-3 flex-shrink-0"
          aria-label="Close announcement"
        >
          <X size={14} className="text-amber-900/70" strokeWidth={2.5} />
        </button>
      </div>
    </motion.div>
  );
}

// ─── Standard Dropdown ────────────────────────────────────────────────────────
function DropdownMenu({ items, isOpen, onClose }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className="absolute left-0 top-full mt-3 min-w-[285px] bg-white rounded-2xl shadow-[0_24px_60px_rgba(0,0,80,0.18)] border border-blue-50 overflow-hidden z-50"
          onMouseLeave={onClose}
        >
          <div className="p-2">
            {items.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className="flex items-center gap-3 px-3 py-3 rounded-xl text-gray-700 hover:bg-gradient-to-r hover:from-[#000066] hover:to-[#0818A8] hover:text-white transition-all duration-200 group"
                  onClick={onClose}
                >
                  {Icon && (
                    <div className="w-9 h-9 rounded-xl bg-[#000080]/8 group-hover:bg-white/15 flex items-center justify-center flex-shrink-0 transition-all duration-200">
                      <Icon
                        size={17}
                        strokeWidth={2}
                        className="text-[#000080] group-hover:text-white transition-colors duration-200"
                      />
                    </div>
                  )}
                  <div className="flex flex-col min-w-0">
                    <span className="font-semibold text-[13px] leading-snug">
                      {item.label}
                    </span>
                    {item.desc && (
                      <span className="text-[11px] text-gray-400 group-hover:text-white/60 font-medium leading-snug mt-0.5 transition-colors truncate">
                        {item.desc}
                      </span>
                    )}
                  </div>
                  <ArrowRight
                    size={13}
                    strokeWidth={2.5}
                    className="ml-auto flex-shrink-0 text-gray-300 group-hover:text-white/80 opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all duration-200"
                  />
                </Link>
              );
            })}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// ─── Desktop Nav Link ─────────────────────────────────────────────────────────
function NavLink({ item, pathname }) {
  const [isOpen, setIsOpen] = useState(false);
  const timeoutRef = useRef(null);

  const isActive =
    pathname === item.href || pathname.startsWith(item.href + "/");

  const open = () => {
    if (item.dropdown) {
      clearTimeout(timeoutRef.current);
      setIsOpen(true);
    }
  };

  const close = () => {
    if (item.dropdown) {
      timeoutRef.current = setTimeout(() => setIsOpen(false), 120);
    }
  };

  useEffect(() => () => clearTimeout(timeoutRef.current), []);

  return (
    <div className="relative" onMouseEnter={open} onMouseLeave={close}>
      <Link
        href={item.href}
        className={`
          flex items-center gap-1 px-3.5 py-2 text-[13.5px] font-semibold rounded-lg
          transition-all duration-200 tracking-wide
          ${
            isActive
              ? "text-white bg-white/20"
              : "text-white/85 hover:text-white hover:bg-white/10"
          }
        `}
      >
        {item.label}
        {item.dropdown && (
          <ChevronDown
            size={13}
            strokeWidth={2.5}
            className={`transition-transform duration-200 ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        )}
      </Link>

      {item.dropdown && (
        <DropdownMenu
          items={item.dropdown}
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
        />
      )}
    </div>
  );
}

// ─── Mobile Menu ──────────────────────────────────────────────────────────────
function MobileMenu({ isOpen, onClose, pathname }) {
  const [expanded, setExpanded] = useState(null);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const toggle = (label) =>
    setExpanded((prev) => (prev === label ? null : label));

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Drawer */}
          <motion.div
            className={`
              ${montserrat.variable} font-[family-name:var(--font-montserrat)]
              fixed top-0 right-0 bottom-0 w-full max-w-[360px]
              flex flex-col z-50 lg:hidden shadow-2xl
            `}
            style={{
              background:
                "linear-gradient(160deg, #00003a 0%, #000066 40%, #00008a 70%, #000050 100%)",
            }}
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-white/10">
              <Link
                href="/"
                onClick={onClose}
                className="flex items-center gap-2.5"
              >
                <Image
                  src={assets.logo}
                  alt="BitLayerX logo"
                  width={34}
                  height={34}
                />
                <span className="font-black text-white text-[17px] tracking-wide">
                  BitLayerX
                </span>
              </Link>
              <button
                onClick={onClose}
                className="p-2 hover:bg-white/10 rounded-xl transition-colors"
                aria-label="Close menu"
              >
                <X size={22} className="text-white/80" strokeWidth={2} />
              </button>
            </div>

            {/* Nav Items */}
            <nav
              className="flex-1 overflow-y-auto px-4 py-5 space-y-1"
              aria-label="Mobile navigation"
            >
              {NAV_ITEMS.map((item) => {
                const hasMenu = !!item.dropdown;
                const subItems = item.dropdown || [];
                const isExp = expanded === item.label;
                const isActive =
                  pathname === item.href ||
                  pathname.startsWith(item.href + "/");

                return (
                  <div key={item.label}>
                    {hasMenu ? (
                      <>
                        <button
                          onClick={() => toggle(item.label)}
                          className="flex items-center justify-between w-full px-4 py-3 rounded-xl font-semibold text-[14px] text-white/80 hover:text-white hover:bg-white/8 transition-colors"
                        >
                          <span>{item.label}</span>
                          <ChevronDown
                            size={15}
                            strokeWidth={2.5}
                            className={`transition-transform duration-300 text-white/40 ${
                              isExp ? "rotate-180" : ""
                            }`}
                          />
                        </button>

                        <AnimatePresence>
                          {isExp && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.25 }}
                              className="overflow-hidden"
                            >
                              <div className="pl-3 pr-1 pb-2 pt-1 space-y-0.5">
                                {subItems.map((sub) => {
                                  const Icon = sub.icon;
                                  return (
                                    <Link
                                      key={sub.href}
                                      href={sub.href}
                                      onClick={onClose}
                                      className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-white/60 hover:text-white hover:bg-white/8 transition-all group"
                                    >
                                      {Icon && (
                                        <div className="w-7 h-7 rounded-lg bg-white/8 flex items-center justify-center flex-shrink-0 group-hover:bg-white/15 transition-colors">
                                          <Icon
                                            size={14}
                                            strokeWidth={2}
                                            className="text-white/60 group-hover:text-white transition-colors"
                                          />
                                        </div>
                                      )}
                                      <span className="text-[13px] font-medium">
                                        {sub.label}
                                      </span>
                                    </Link>
                                  );
                                })}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </>
                    ) : (
                      <Link
                        href={item.href}
                        onClick={onClose}
                        className={`
                          block px-4 py-3 rounded-xl font-semibold text-[14px] transition-colors
                          ${
                            isActive
                              ? "text-white bg-white/15"
                              : "text-white/80 hover:text-white hover:bg-white/8"
                          }
                        `}
                      >
                        {item.label}
                      </Link>
                    )}
                  </div>
                );
              })}
            </nav>

            {/* Footer CTAs */}
            <div className="px-5 py-5 border-t border-white/10 space-y-3">
              <Link
                href="/contact/project"
                onClick={onClose}
                className="flex items-center justify-center gap-2 w-full px-6 py-3.5 bg-white hover:bg-white/90 text-[#000066] font-black text-[14px] rounded-xl transition-all shadow-lg shadow-white/10"
              >
                Build With Us
                <Hammer size={16} strokeWidth={2.5} />
              </Link>
              <Link
                href="/contact/call"
                onClick={onClose}
                className="flex items-center justify-center gap-2 w-full px-6 py-3 border border-white/15 text-white/70 hover:text-white hover:border-white/30 font-semibold text-[13px] rounded-xl transition-all"
              >
                <CalendarCheck size={15} strokeWidth={2} />
                Book a Strategy Call
              </Link>
              <div className="flex items-center justify-center gap-2 text-white/30 text-[12px]">
                <Phone size={12} strokeWidth={2} />
                <span>+234 802 540 1891</span>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

// ─── Main Navbar Export ───────────────────────────────────────────────────────
export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hasHero, setHasHero] = useState(false);

  const isHome = pathname === "/";

  useEffect(() => {
    if (typeof window === "undefined") return;
    const check = () =>
      setHasHero(!!document.querySelector(".hero-section"));
    check();
    const obs = new MutationObserver(check);
    obs.observe(document.body, { childList: true, subtree: true });
    return () => obs.disconnect();
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isTransparent = (isHome || hasHero) && !scrolled;

  // Scrolled: deep dark navy-to-midnight gradient — richer than plain navy
  const scrolledBg =
    "linear-gradient(135deg, #00002e 0%, #000055 35%, #00007a 65%, #000044 100%)";

  return (
    <>
      {/* ── SEO Schema ────────────────────────────────────────────────── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
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
          }),
        }}
      />

      <div className="fixed top-0 left-0 right-0 z-30 w-full">
        {/* Announcement Bar */}
        <AnimatePresence>
          <AnnouncementBar />
        </AnimatePresence>

        {/* ── Main Header ───────────────────────────────────────────── */}
        <motion.header
          className={`${montserrat.variable} font-[family-name:var(--font-montserrat)]`}
          animate={{
            background: isTransparent ? "rgba(0,0,0,0)" : scrolledBg,
            backdropFilter: isTransparent ? "blur(0px)" : "blur(18px)",
            borderBottom: isTransparent
              ? "1px solid rgba(255,255,255,0)"
              : "1px solid rgba(100,130,255,0.12)",
            boxShadow: isTransparent
              ? "none"
              : "0 8px 48px rgba(0, 0, 60, 0.65), 0 2px 0px rgba(80,120,255,0.15)",
          }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
        >
          <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-10">
            <div className="flex items-center justify-between h-[72px] lg:h-[78px]">

              {/* ── Logo ────────────────────────────────────────────── */}
              <Link
                href="/"
                className="flex items-center gap-2.5 flex-shrink-0"
                aria-label="BitLayerX Home"
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.55, ease: "easeInOut" }}
                  className="flex-shrink-0"
                >
                  <Image
                    src={assets.logo}
                    alt="BitLayerX logo"
                    width={40}
                    height={40}
                    priority
                  />
                </motion.div>
                <span className="font-black text-white text-[18px] tracking-wide hidden sm:block">
                  BitLayerX
                </span>
              </Link>

              {/* ── Desktop Navigation ──────────────────────────────── */}
              <nav
                className="hidden xl:flex items-center gap-0.5 flex-1 justify-center"
                aria-label="Primary navigation"
              >
                {NAV_ITEMS.map((item) => (
                  <NavLink key={item.label} item={item} pathname={pathname} />
                ))}
              </nav>

              {/* ── Right CTA ───────────────────────────────────────── */}
              <div className="flex items-center gap-2.5">
                {/* Desktop CTA */}
                <Link
                  href="/contact/project"
                  className="hidden xl:flex items-center gap-2 px-5 py-2.5 bg-white hover:bg-white/90 text-[#000055] text-[13px] font-black rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl group"
                >
                  Build With Us
                  <Hammer
                    size={14}
                    strokeWidth={2.5}
                    className="group-hover:rotate-12 transition-transform duration-200"
                  />
                </Link>

                {/* Mobile hamburger */}
                <button
                  onClick={() => setMobileOpen(true)}
                  className="xl:hidden p-2.5 hover:bg-white/10 rounded-xl transition-colors"
                  aria-label="Open menu"
                  aria-expanded={mobileOpen}
                >
                  <Menu size={24} className="text-white" strokeWidth={2} />
                </button>
              </div>

            </div>
          </div>
        </motion.header>
      </div>

      {/* ── Mobile Drawer ─────────────────────────────────────────────── */}
      <MobileMenu
        isOpen={mobileOpen}
        onClose={() => setMobileOpen(false)}
        pathname={pathname}
      />
    </>
  );
}