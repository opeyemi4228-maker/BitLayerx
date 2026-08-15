"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight, CalendarCheck, Radio } from "lucide-react";
import { assets } from "@/assets/assets";

// ─── Navigation ───────────────────────────────────────────────────────────────
// The logo is the route home, so "Home" is not repeated here. "Industries" is
// in the bar because those pages exist and used to be orphaned.
const NAV_ITEMS = [
  { label: "Home",       href: "/"           },
  { label: "About",      href: "/about"      },
  { label: "Services",   href: "/services"   },
  { label: "Industries", href: "/industries" },
  { label: "Work",       href: "/portfolio"  },
  { label: "Packages",   href: "/packages"   },
  { label: "Blog",       href: "/blog"       },
  { label: "Contact",    href: "/contact"    },
];

// Where the founder's Design Engineering series lives.
const SERIES_URL = "https://opeyemiojurongbe.com";

// ─── Wordmark / Logo ──────────────────────────────────────────────────────────
function BitLayerXLogo({ className = "" }) {
  return (
    <div className={`flex items-center gap-2.5 select-none ${className}`}>
      <Image
        src={assets.logo}
        alt=""
        width={60}
        height={45}
        className="h-9 w-auto object-contain"
        priority
      />
      <span
        className="font-black text-[17px] sm:text-[20px] text-[#0B0B0F] tracking-[-0.03em] whitespace-nowrap"
      >
        BitLayerX
      </span>
    </div>
  );
}

// ─── Announcement Bar ─────────────────────────────────────────────────────────
// An authority signal rather than a discount. A permanent "limited offer"
// teaches returning visitors that our scarcity claims aren't real.
function AnnouncementBar({ onClose }) {
  return (
    <div className="relative bg-[#0040FF]">
      <div className="relative mx-auto flex max-w-[1600px] items-center justify-center px-10 py-2.5 sm:px-12">
        <Link
          href="/packages"
          className="group flex min-w-0 items-center gap-2.5 rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0040FF]"
        >
          {/* A concrete offer beats a slogan. "Websites from ₦500,000" tells a
              visitor in four words whether this company is in their budget,
              which is the question they are actually holding. */}
          <span className="flex-shrink-0 rounded-full bg-white/15 px-2.5 py-0.5 text-[10.5px] font-bold uppercase tracking-[0.12em] text-white">
            Now
          </span>

          <span className="truncate text-[13.5px] font-medium leading-tight text-white/85 sm:text-[14px]">
            <span className="font-bold text-white">
              Websites from ₦500,000.
            </span>{" "}
            <span className="hidden sm:inline">
              Every price published, no call required.
            </span>
          </span>

          <span className="hidden items-center gap-1 whitespace-nowrap text-[13.5px] font-bold text-white sm:inline-flex">
            See packages
            <ArrowRight
              size={12}
              strokeWidth={3}
              className="transition-transform duration-200 group-hover:translate-x-0.5"
            />
          </span>
        </Link>
      </div>

      <button
        onClick={onClose}
        className="absolute right-2 top-1/2 -translate-y-1/2 rounded p-1.5 transition-colors hover:bg-white/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 sm:right-4"
        aria-label="Dismiss announcement"
      >
        <X size={13} className="text-white/70" strokeWidth={2.5} />
      </button>
    </div>
  );
}

function NavLink({ item, pathname }) {
  const isActive =
    pathname === item.href || pathname.startsWith(item.href + "/");

  return (
    <Link
      href={item.href}
      aria-current={isActive ? "page" : undefined}
      className={`
        relative px-3.5 py-2 rounded-lg text-[15px] font-semibold transition-colors duration-150
        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0B0B0F] focus-visible:ring-offset-2
        ${isActive
          ? "text-[#0B0B0F]"
          : "text-black/60 hover:text-[#0B0B0F] hover:bg-[#0B0B0F]/[0.04]"}
      `}
      style={{ letterSpacing: "-0.01em" }}
    >
      {item.label}
      <span
        aria-hidden="true"
        className="absolute left-3.5 right-3.5 -bottom-[1px] h-[2px] rounded-full bg-[#0B0B0F] origin-left transition-transform duration-200"
        style={{ transform: isActive ? "scaleX(1)" : "scaleX(0)" }}
      />
    </Link>
  );
}

function MobileDrawer({ open, onClose, pathname }) {
  const panelRef = useRef(null);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Escape closes the drawer; focus lands inside it when it opens.
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    panelRef.current?.focus();
    return () => document.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  return (
    <>
      <div
        aria-hidden="true"
        onClick={onClose}
        className="fixed inset-0 z-40 bg-[#0B0B0F]/40 backdrop-blur-sm xl:hidden"
        style={{
          opacity: open ? 1 : 0,
          pointerEvents: open ? "auto" : "none",
          transition: "opacity 0.25s ease",
        }}
      />

      <div
        id="mobile-nav"
        ref={panelRef}
        tabIndex={-1}
        role="dialog"
        aria-modal="true"
        aria-label="Site navigation"
        className="fixed top-0 right-0 bottom-0 z-50 w-full max-w-[360px] flex flex-col bg-white xl:hidden focus:outline-none"
        style={{
          transform: open ? "translateX(0)" : "translateX(100%)",
          visibility: open ? "visible" : "hidden",
          transition:
            "transform 0.3s cubic-bezier(0.25,0.46,0.45,0.94), visibility 0.3s",
          boxShadow: "-4px 0 40px rgba(0,0,80,0.12)",
        }}
      >
        <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
          <Link href="/" onClick={onClose} aria-label="BitLayerX home">
            <BitLayerXLogo />
          </Link>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-xl transition-colors"
            aria-label="Close navigation"
          >
            <X size={20} className="text-black/70" strokeWidth={2} />
          </button>
        </div>

        <nav
          className="flex-1 overflow-y-auto px-4 py-4 space-y-0.5"
          aria-label="Mobile navigation"
        >
          {NAV_ITEMS.map((item) => {
            const isActive =
              pathname === item.href || pathname.startsWith(item.href + "/");
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={onClose}
                aria-current={isActive ? "page" : undefined}
                className={`flex items-center justify-between px-4 py-3.5 rounded-xl font-semibold text-[16px] transition-colors ${
                  isActive
                    ? "text-[#0B0B0F] bg-[#0B0B0F]/[0.06]"
                    : "text-black/70 hover:text-[#0B0B0F] hover:bg-[#0B0B0F]/[0.04]"
                }`}
              >
                {item.label}
                <ArrowRight size={14} strokeWidth={2.5} className="text-black/20" />
              </Link>
            );
          })}
        </nav>

        <div className="px-5 py-5 border-t border-gray-100 space-y-2.5">
          <Link
            href="/start-a-project"
            onClick={onClose}
            className="flex items-center justify-center gap-2 w-full px-6 py-3.5 bg-[#0B0B0F] hover:bg-[#0040FF] text-white font-bold text-[15px] rounded-xl transition-colors"
          >
            Start a project
            <ArrowRight size={14} strokeWidth={3} />
          </Link>
          <Link
            href="/contact"
            onClick={onClose}
            className="flex items-center justify-center gap-2 w-full px-6 py-3.5 border border-gray-200 text-black/70 hover:text-[#0B0B0F] hover:border-[#0B0B0F]/30 font-semibold text-[15px] rounded-xl transition-all"
          >
            <CalendarCheck size={14} strokeWidth={2} />
            Book a strategy call
          </Link>
          <p className="text-center text-[12.5px] text-black/40 pt-1">
            We reply within 48 hours.
          </p>
        </div>
      </div>
    </>
  );
}


export default function Navbar() {
  const pathname = usePathname();
  const [announcementVisible, setAnnouncementVisible] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let frame = null;
    const handler = () => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        const y = window.scrollY;
        const max =
          document.documentElement.scrollHeight - window.innerHeight;
        setScrolled(y > 8);
        setProgress(max > 0 ? Math.min(1, y / max) : 0);
        frame = null;
      });
    };
    window.addEventListener("scroll", handler, { passive: true });
    handler();
    return () => {
      window.removeEventListener("scroll", handler);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  // The announcement collapses out of the way once the reader starts reading.
  const showAnnouncement = announcementVisible && !scrolled;

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-30">
        <div
          style={{
            maxHeight: showAnnouncement ? 48 : 0,
            overflow: "hidden",
            transition: "max-height 0.3s cubic-bezier(0.22,1,0.36,1)",
          }}
        >
          <AnnouncementBar onClose={() => setAnnouncementVisible(false)} />
        </div>

        <header
          className="bg-white/95"
          style={{
            backdropFilter: "saturate(180%) blur(12px)",
            WebkitBackdropFilter: "saturate(180%) blur(12px)",
            borderBottom: scrolled
              ? "1px solid rgba(0, 64, 255,0.08)"
              : "1px solid transparent",
            boxShadow: scrolled
              ? "0 4px 24px -6px rgba(0, 64, 255,0.10)"
              : "none",
            transition: "border-color 0.25s ease, box-shadow 0.25s ease",
          }}
          role="banner"
        >
          <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-10">
            <div className="flex items-center justify-between h-[64px] lg:h-[72px]">
              <Link
                href="/"
                className="flex-shrink-0 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0B0B0F] focus-visible:ring-offset-2"
                aria-label="BitLayerX, back to homepage"
              >
                <BitLayerXLogo />
              </Link>

              <nav
                className="hidden xl:flex items-center gap-1 flex-1 justify-center"
                aria-label="Primary navigation"
              >
                {NAV_ITEMS.map((item) => (
                  <NavLink key={item.href} item={item} pathname={pathname} />
                ))}
              </nav>

              <div className="flex items-center gap-2">
                <Link
                  href="/contact"
                  className="hidden xl:flex items-center gap-1.5 px-4 py-2.5 text-[14.5px] font-semibold text-black/70 hover:text-[#0B0B0F] rounded-xl hover:bg-[#0B0B0F]/[0.04] transition-colors"
                >
                  <CalendarCheck size={14} strokeWidth={2} />
                  Book a call
                </Link>

                <Link
                  href="/start-a-project"
                  className="hidden sm:flex items-center gap-2 px-5 py-2.5 bg-[#0B0B0F] hover:bg-[#0040FF] text-white text-[14.5px] font-bold rounded-xl transition-colors group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0B0B0F] focus-visible:ring-offset-2"
                >
                  Start a project
                  <ArrowRight
                    size={14}
                    strokeWidth={3}
                    className="transition-transform duration-200 group-hover:translate-x-0.5"
                  />
                </Link>

                <button
                  onClick={() => setMobileOpen(true)}
                  className="xl:hidden p-2.5 hover:bg-gray-100 rounded-xl transition-colors"
                  aria-label="Open navigation menu"
                  aria-expanded={mobileOpen}
                  aria-controls="mobile-nav"
                >
                  <Menu size={22} className="text-black/70" strokeWidth={2} />
                </button>
              </div>
            </div>
          </div>

          {/* Reading progress, orientation, not decoration. */}
          <div
            aria-hidden="true"
            className="absolute bottom-0 left-0 h-[2px] bg-[#0040FF] origin-left"
            style={{
              width: "100%",
              transform: `scaleX(${progress})`,
              opacity: scrolled ? 1 : 0,
              transition: "opacity 0.25s ease",
            }}
          />
        </header>
      </div>

      {/*
        Spacer.

        The bar above is `position: fixed`, which takes it out of normal flow, so without this, every page's first section renders underneath it. The
        height tracks the bar exactly: the header is 64px (72px from `lg`), plus
        48px while the announcement is showing, and it animates on the same
        curve so the page does not jump when the announcement collapses.
      */}
      <div
        aria-hidden="true"
        className="h-[64px] lg:h-[72px]"
        style={{
          marginTop: showAnnouncement ? 48 : 0,
          transition: "margin-top 0.3s cubic-bezier(0.22,1,0.36,1)",
        }}
      />

      <MobileDrawer
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        pathname={pathname}
      />
    </>
  );
}
