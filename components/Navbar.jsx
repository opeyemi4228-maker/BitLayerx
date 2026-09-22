"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight, CalendarCheck } from "lucide-react";
import BrandMark from "@/components/BrandMark";

// ─── Navigation ───────────────────────────────────────────────────────────────
// The logo is the route home, so "Home" is not repeated here. "Industries" is
// in the bar because those pages exist and used to be orphaned.
const NAV_ITEMS = [
  { label: "About",      href: "/about"      },
  { label: "Services",   href: "/services"   },
  { label: "Industries", href: "/industries" },
  { label: "Work",       href: "/portfolio"  },
  { label: "Packages",   href: "/packages"   },
  { label: "Blog",       href: "/blog"       },
  { label: "Contact",    href: "/contact"    },
];

// ─── Wordmark / Logo ──────────────────────────────────────────────────────────
const BitLayerXLogo = BrandMark;

// ─── Announcement Bar ─────────────────────────────────────────────────────────
// An authority signal rather than a discount. A permanent "limited offer"
// teaches returning visitors that our scarcity claims aren't real. It sits on
// white with a hairline, so the top of every page stays one clean colour.
function AnnouncementBar({ onClose }) {
  return (
    <div className="relative h-10 border-b border-black/[0.08] bg-white">
      <div className="relative mx-auto flex h-full max-w-[1440px] items-center justify-center px-10 sm:px-12">
        <Link
          href="/packages"
          className="group flex min-w-0 items-center gap-2 rounded text-[13px] leading-tight focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0040FF] focus-visible:ring-offset-2"
        >
          {/* A concrete offer beats a slogan. "Websites from ₦800,000" tells a
              visitor in four words whether this company is in their budget,
              which is the question they are actually holding. */}
          <span className="truncate text-[#5E5E5E]">
            <span className="font-semibold text-[#111111]">
              Websites from ₦800,000.
            </span>{" "}
            <span className="hidden sm:inline">
              Every price published, no call required.
            </span>
          </span>

          <span className="hidden items-center gap-0.5 whitespace-nowrap font-medium text-[#0040FF] sm:inline-flex">
            See packages
            <span
              aria-hidden="true"
              className="transition-transform duration-200 group-hover:translate-x-[3px]"
            >
              ›
            </span>
          </span>
        </Link>
      </div>

      <button
        onClick={onClose}
        className="absolute right-2 top-1/2 -translate-y-1/2 rounded p-1.5 transition-colors hover:bg-black/[0.05] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0040FF] sm:right-4"
        aria-label="Dismiss announcement"
      >
        <X size={13} className="text-black/45" strokeWidth={2.5} />
      </button>
    </div>
  );
}

function NavLink({ item, pathname }) {
  const isActive =
    pathname === item.href || pathname.startsWith(item.href + "/");

  // The active marker sits on the header's bottom edge rather than under the
  // word, so it reads as "you are in this section" instead of as a link style.
  return (
    <Link
      href={item.href}
      aria-current={isActive ? "page" : undefined}
      className="group relative flex h-full items-center px-3.5 text-[15px] font-medium text-[#111111] transition-colors duration-150 hover:text-[#0040FF] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#0040FF]"
      style={{ letterSpacing: "-0.01em" }}
    >
      {item.label}
      <span
        aria-hidden="true"
        className={`absolute inset-x-3.5 -bottom-px h-[2px] origin-left bg-[#111111] transition-transform duration-200 ${
          isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100 group-hover:bg-[#0040FF]"
        }`}
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
        className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm xl:hidden"
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
          boxShadow: "-4px 0 40px rgba(0,0,0,0.12)",
        }}
      >
        <div className="flex items-center justify-between px-5 py-4 border-b border-black/[0.08]">
          <Link href="/" onClick={onClose} aria-label="BitLayerX Technologies home">
            <BitLayerXLogo />
          </Link>
          <button
            onClick={onClose}
            className="p-2 hover:bg-black/[0.05] rounded-full transition-colors"
            aria-label="Close navigation"
          >
            <X size={20} className="text-black/70" strokeWidth={2} />
          </button>
        </div>

        <nav
          className="flex-1 overflow-y-auto px-5 py-2"
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
                className={`flex items-center justify-between border-b border-black/[0.06] px-2 py-4 text-[17px] font-medium tracking-[-0.01em] transition-colors ${
                  isActive
                    ? "text-[#0040FF]"
                    : "text-[#111111] hover:text-[#0040FF]"
                }`}
              >
                {item.label}
                <span aria-hidden="true" className="text-black/30">›</span>
              </Link>
            );
          })}
        </nav>

        <div className="px-5 py-5 border-t border-black/[0.08] space-y-2.5">
          <Link
            href="/start-a-project"
            onClick={onClose}
            className="flex items-center justify-center gap-2 w-full px-6 py-3.5 bg-[#0040FF] hover:bg-black text-white font-medium text-[15px] rounded-full transition-colors"
          >
            Start a project
            <ArrowRight size={14} strokeWidth={3} />
          </Link>
          <Link
            href="/contact"
            onClick={onClose}
            className="flex items-center justify-center gap-2 w-full px-6 py-3.5 border border-black/[0.14] text-[#111111] hover:border-black/40 font-medium text-[15px] rounded-full transition-colors"
          >
            <CalendarCheck size={14} strokeWidth={2} />
            Book a strategy call
          </Link>
          <p className="text-center text-[12.5px] text-[#5E5E5E] pt-1">
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

  useEffect(() => {
    let frame = null;
    const handler = () => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        setScrolled(window.scrollY > 8);
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
            maxHeight: showAnnouncement ? 40 : 0,
            overflow: "hidden",
            transition: "max-height 0.3s cubic-bezier(0.22,1,0.36,1)",
          }}
        >
          <AnnouncementBar onClose={() => setAnnouncementVisible(false)} />
        </div>

        {/* Solid white with one hairline, always. A translucent, blurred bar
            picks up the colour of whatever scrolls beneath it, which is what
            made the old one look grey-blue instead of white. */}
        <header
          className="border-b border-black/[0.08] bg-white"
          style={{
            boxShadow: scrolled ? "0 1px 12px rgba(0,0,0,0.04)" : "none",
            transition: "box-shadow 0.25s ease",
          }}
          role="banner"
        >
          <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-10">
            <div className="flex h-[64px] items-center justify-between gap-6 lg:h-[72px]">
              <Link
                href="/"
                className="flex-shrink-0 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0040FF] focus-visible:ring-offset-2"
                aria-label="BitLayerX Technologies, back to homepage"
              >
                <BitLayerXLogo />
              </Link>

              <nav
                className="hidden h-full flex-1 items-stretch justify-center xl:flex"
                aria-label="Primary navigation"
              >
                {NAV_ITEMS.map((item) => (
                  <NavLink key={item.href} item={item} pathname={pathname} />
                ))}
              </nav>

              <div className="flex items-center gap-1 sm:gap-2">
                <Link
                  href="/contact"
                  className="hidden items-center gap-1.5 rounded-full px-4 py-2.5 text-[15px] font-medium text-[#111111] transition-colors hover:text-[#0040FF] xl:flex"
                  style={{ letterSpacing: "-0.01em" }}
                >
                  <CalendarCheck size={15} strokeWidth={1.75} />
                  Book a call
                </Link>

                <Link
                  href="/start-a-project"
                  className="group hidden items-center gap-1.5 rounded-full bg-[#0040FF] px-5 py-2.5 text-[14.5px] font-medium text-white transition-colors hover:bg-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0040FF] focus-visible:ring-offset-2 sm:flex"
                >
                  Start a project
                  <ArrowRight
                    size={14}
                    strokeWidth={2.25}
                    className="transition-transform duration-200 group-hover:translate-x-0.5"
                  />
                </Link>

                <button
                  onClick={() => setMobileOpen(true)}
                  className="rounded-full p-2.5 transition-colors hover:bg-black/[0.05] xl:hidden"
                  aria-label="Open navigation menu"
                  aria-expanded={mobileOpen}
                  aria-controls="mobile-nav"
                >
                  <Menu size={22} className="text-[#111111]" strokeWidth={1.75} />
                </button>
              </div>
            </div>
          </div>
        </header>
      </div>

      {/*
        Spacer.

        The bar above is `position: fixed`, which takes it out of normal flow,
        so without this every page's first section renders underneath it. The
        height tracks the bar exactly: the header is 64px (72px from `lg`) plus
        its 1px hairline, plus 40px while the announcement is showing, and it
        animates on the same curve so the page does not jump when the
        announcement collapses.
      */}
      <div
        aria-hidden="true"
        className="h-[65px] lg:h-[73px]"
        style={{
          marginTop: showAnnouncement ? 40 : 0,
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
