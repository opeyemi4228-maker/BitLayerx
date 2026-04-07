'use client';
import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import {
  ArrowRight, Sparkles, Zap, Rocket, TrendingUp, ChevronDown, Menu, X,
  Code, Palette, Building2, Users, Globe, BarChart3, Phone, Mail,
  Award, TrendingUp as TrendingUpIcon, Facebook, Twitter, Instagram, Linkedin, Github
} from 'lucide-react';
import { Montserrat } from 'next/font/google';

// Import additional components
import HeaderSlider from "@/components/HeaderSlider";
import HomeProducts from "@/components/HomeProducts";
import Banner from "@/components/Banner";
import NewsLetter from "@/components/NewsLetter";
import FeaturedProduct from "@/components/FeaturedProduct";
import Corporate from "@/components/Corporate";
import Divide from "@/components/Divide";
import Overlay from "@/components/Overlay";
import Check from "@/components/Check";

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-montserrat',
  display: 'swap',
});

// ═══════════════════════════════════════════════════════════════════════════
// NAVBAR COMPONENT
// ═══════════════════════════════════════════════════════════════════════════

const NAV_ITEMS = [
  {
    label: "Services",
    href: "/services",
    dropdown: [
      { label: "Web Development", href: "/services/web-development", icon: Code },
      { label: "AI Automation", href: "/services/ai-automation", icon: Zap },
      { label: "Brand & Video", href: "/services/brand-video", icon: Palette },
      { label: "Performance Marketing", href: "/services/marketing", icon: TrendingUp },
      { label: "SEO & Content", href: "/services/seo", icon: BarChart3 },
    ],
  },
  {
    label: "Solutions",
    href: "/solutions",
    dropdown: [
      { label: "For Startups", href: "/solutions/startups", icon: Rocket },
      { label: "For Enterprises", href: "/solutions/enterprise", icon: Building2 },
      { label: "For Agencies", href: "/solutions/agencies", icon: Users },
    ],
  },
  {
    label: "Portfolio",
    href: "/portfolio",
  },
  {
    label: "Packages",
    href: "/packages",
  },
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];

function AnnouncementBar({ isTransparent }) {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <motion.div
      initial={{ height: 0, opacity: 0 }}
      animate={{ height: "auto", opacity: 1 }}
      exit={{ height: 0, opacity: 0 }}
      className="relative overflow-hidden bg-gradient-to-r from-[#fbbf24] via-[#f59e0b] to-[#fbbf24]"
    >
      <div className="max-w-[1600px] mx-auto px-8 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2 flex-1 justify-center">
          <Sparkles size={16} className="text-gray-900 flex-shrink-0" strokeWidth={2.5} />
          <p className="text-gray-900 text-[17px] font-semibold text-center">
            <span className="font-bold">Limited Offer:</span> Get 20% off on all Enterprise packages this month — Transform your business today!
          </p>
        </div>
        <button
          onClick={() => setIsVisible(false)}
          className="p-1 hover:bg-black/10 rounded transition-colors ml-4 flex-shrink-0"
        >
          <X size={16} className="text-gray-900" strokeWidth={2.5} />
        </button>
      </div>
    </motion.div>
  );
}

function DropdownMenu({ items, isOpen, onClose }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
          className="absolute left-0 top-full mt-2 min-w-[260px] bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden z-50"
          onMouseLeave={onClose}
        >
          <div className="p-2">
            {items.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gradient-to-r hover:from-[#0818A8] hover:to-[#000080] hover:text-white rounded-lg transition-all duration-200 group"
                >
                  {Icon && (
                    <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[#0818A8]/10 to-[#4682B4]/10 group-hover:from-white/20 group-hover:to-white/10 flex items-center justify-center flex-shrink-0 transition-all">
                      <Icon size={18} strokeWidth={2} className="text-[#0818A8] group-hover:text-white transition-colors" />
                    </div>
                  )}
                  <span className="font-medium text-[16px]">{item.label}</span>
                </Link>
              );
            })}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function NavLink({ item, pathname, isTransparent }) {
  const [isOpen, setIsOpen] = useState(false);
  const timeoutRef = useRef(null);

  const isActive = pathname === item.href || pathname.startsWith(item.href + "/");

  const handleMouseEnter = () => {
    if (item.dropdown) {
      clearTimeout(timeoutRef.current);
      setIsOpen(true);
    }
  };

  const handleMouseLeave = () => {
    if (item.dropdown) {
      timeoutRef.current = setTimeout(() => setIsOpen(false), 150);
    }
  };

  useEffect(() => {
    return () => clearTimeout(timeoutRef.current);
  }, []);

  return (
    <div
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Link
        href={item.href}
        className={`
          flex items-center gap-1.5 px-4 py-2 text-[16px] font-medium rounded-lg transition-all duration-200
          ${isActive 
            ? "text-white bg-white/15" 
            : "text-white/90 hover:text-white hover:bg-white/10"
          }
        `}
      >
        {item.label}
        {item.dropdown && (
          <ChevronDown
            size={14}
            strokeWidth={2.5}
            className={`transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
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

function MobileMenu({ isOpen, onClose, pathname }) {
  const [expanded, setExpanded] = useState(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          <motion.div
            className={`
              ${montserrat.variable} font-[family-name:var(--font-montserrat)]
              fixed top-0 right-0 bottom-0 w-full max-w-sm
              bg-gradient-to-br from-[#0818A8] via-[#000080] to-[#0818A8]
              flex flex-col z-50 lg:hidden shadow-2xl
            `}
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <div className="flex items-center justify-between p-6 border-b border-white/10">
              <Link href="/" onClick={onClose} className="flex items-center gap-2.5">
                <span className="font-black text-white text-lg tracking-wide">BITLAYERX</span>
              </Link>
              <button
                onClick={onClose}
                className="p-2 hover:bg-white/10 rounded-lg transition-colors"
              >
                <X size={24} className="text-white" strokeWidth={2} />
              </button>
            </div>

            <nav className="flex-1 overflow-y-auto p-6">
              <div className="space-y-2">
                {NAV_ITEMS.map((item) => (
                  <div key={item.label}>
                    {item.dropdown ? (
                      <div>
                        <button
                          onClick={() =>
                            setExpanded(expanded === item.label ? null : item.label)
                          }
                          className="flex items-center justify-between w-full px-4 py-3 text-white font-medium rounded-lg hover:bg-white/10 transition-colors"
                        >
                          {item.label}
                          <ChevronDown
                            size={16}
                            strokeWidth={2.5}
                            className={`transition-transform ${
                              expanded === item.label ? "rotate-180" : ""
                            }`}
                          />
                        </button>
                        <AnimatePresence>
                          {expanded === item.label && (
                            <motion.div
                              initial={{ height: 0 }}
                              animate={{ height: "auto" }}
                              exit={{ height: 0 }}
                              className="overflow-hidden"
                            >
                              <div className="pl-4 pt-2 space-y-1">
                                {item.dropdown.map((sub) => {
                                  const Icon = sub.icon;
                                  return (
                                    <Link
                                      key={sub.href}
                                      href={sub.href}
                                      onClick={onClose}
                                      className="flex items-center gap-3 px-4 py-2.5 text-white/80 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                                    >
                                      {Icon && <Icon size={16} className="text-[#4682B4]" strokeWidth={2} />}
                                      <span className="text-[16px]">{sub.label}</span>
                                    </Link>
                                  );
                                })}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <Link
                        href={item.href}
                        onClick={onClose}
                        className={`
                          block px-4 py-3 rounded-lg font-medium transition-colors
                          ${pathname === item.href 
                            ? "text-white bg-white/20" 
                            : "text-white/80 hover:text-white hover:bg-white/10"
                          }
                        `}
                      >
                        {item.label}
                      </Link>
                    )}
                  </div>
                ))}
              </div>
            </nav>

            <div className="p-6 border-t border-white/10 space-y-3">
              <Link
                href="/contact"
                onClick={onClose}
                className="flex items-center justify-center gap-2 w-full px-6 py-3.5 bg-white text-[#0818A8] font-bold rounded-xl hover:bg-white/90 transition-all shadow-lg"
              >
                Contact Us Now
                <ArrowRight size={18} strokeWidth={3} />
              </Link>
              <div className="flex items-center justify-center gap-2 text-white/70 text-sm">
                <Phone size={14} />
                <span>+234 803 456 7890</span>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hasHero, setHasHero] = useState(false);

  const isHome = pathname === "/";

  useEffect(() => {
    if (typeof window === "undefined") return;
    const check = () => setHasHero(!!document.querySelector(".hero-section"));
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

  return (
    <div className="fixed top-0 left-0 right-0 z-30 w-full">
      <AnnouncementBar isTransparent={isTransparent} />

      <motion.header
        className={`${montserrat.variable} font-[family-name:var(--font-montserrat)]`}
        animate={{
          backgroundColor: isTransparent
            ? "rgba(0, 0, 0, 0)"
            : "rgba(0, 0, 128, 1)",
          boxShadow: isTransparent
            ? "none"
            : "0 4px 30px rgba(0, 0, 0, 0.15)",
        }}
        transition={{ duration: 0.3 }}
      >
        <div className="max-w-[1600px] mx-auto px-8">
          <div className="flex items-center justify-between h-[76px]">
            
            <Link href="/" className="flex items-center gap-3 flex-shrink-0">
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <div className="w-[42px] h-[42px] bg-white rounded-lg flex items-center justify-center">
                  <span className="text-[#0818A8] font-black text-xl">B</span>
                </div>
              </motion.div>
              <span className="font-black text-white text-[19px] tracking-wide hidden sm:block">
                BitLayerx
              </span>
            </Link>

            <nav className="hidden lg:flex items-center gap-2 flex-1 justify-center">
              {NAV_ITEMS.map((item) => (
                <NavLink
                  key={item.label}
                  item={item}
                  pathname={pathname}
                  isTransparent={isTransparent}
                />
              ))}
            </nav>

            <div className="flex items-center gap-3">
              <button className="hidden md:flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 text-white text-[17px] font-medium rounded-lg transition-all backdrop-blur-sm">
                <Globe size={16} strokeWidth={2} />
                <span>EN</span>
              </button>

              <Link
                href="/contact"
                className="hidden lg:flex items-center gap-2 px-6 py-2.5 bg-white hover:bg-white/95 text-[#0818A8] text-[16px] font-bold rounded-lg transition-all shadow-lg hover:shadow-xl group"
              >
                Contact Us Now
                <ArrowRight size={16} strokeWidth={3} className="group-hover:translate-x-1 transition-transform" />
              </Link>

              <button
                onClick={() => setMobileOpen(true)}
                className="lg:hidden p-2.5 hover:bg-white/10 rounded-lg transition-colors"
              >
                <Menu size={26} className="text-white" strokeWidth={2} />
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      <MobileMenu
        isOpen={mobileOpen}
        onClose={() => setMobileOpen(false)}
        pathname={pathname}
      />
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════════════
// HERO SECTION COMPONENT
// ═══════════════════════════════════════════════════════════════════════════

function HeroSection() {
  const [typedText, setTypedText] = useState('');
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const words = ['Build.', 'Scale.', 'Dominate.'];

  useEffect(() => {
    const word = words[currentWordIndex];
    let currentIndex = 0;

    const typingInterval = setInterval(() => {
      if (currentIndex <= word.length) {
        setTypedText(word.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
        setTimeout(() => {
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
        }, 2000);
      }
    }, 150);

    return () => clearInterval(typingInterval);
  }, [currentWordIndex]);

  const features = [
    { icon: Zap, text: '2-Week Launch' },
    { icon: Rocket, text: '99.9% Uptime' },
    { icon: TrendingUp, text: 'ROI Focused' },
  ];

  return (
    <div className="w-full overflow-hidden">
      <section 
        className="hero-section relative bg-gradient-to-br from-[#0818A8] via-[#000080] to-[#0818A8] pt-32 md:pt-40 pb-24 md:pb-36 overflow-hidden w-full"
      >
        {/* Background Patterns */}
        <div className="absolute inset-0 overflow-hidden w-full h-full">
          <div className="absolute inset-0 opacity-[0.07]">
            <svg width="100%" height="100%">
              <defs>
                <pattern id="hexagons" x="0" y="0" width="100" height="86.6" patternUnits="userSpaceOnUse">
                  <path d="M50 0 L93.3 25 L93.3 61.6 L50 86.6 L6.7 61.6 L6.7 25 Z" 
                    fill="none" 
                    stroke="white" 
                    strokeWidth="1"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#hexagons)" />
            </svg>
          </div>

          <motion.div
            animate={{
              y: [0, -30, 0],
              x: [0, 20, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute top-20 right-[10%] w-[500px] h-[500px] rounded-full"
            style={{
              background: 'radial-gradient(circle, rgba(70, 130, 180, 0.15) 0%, transparent 70%)',
            }}
          />

          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute top-32 left-[8%] w-24 h-24 border-2 border-white/15"
          />
        </div>

        {/* Main Content */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="w-full max-w-5xl mx-auto text-center">
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, type: "spring", stiffness: 200 }}
              className="inline-flex items-center gap-2 mb-8"
            >
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              >
                <Sparkles size={18} className="text-[#fbbf24]" strokeWidth={2.5} />
              </motion.div>
              <span className="px-5 py-2.5 bg-white/10 backdrop-blur-sm text-white text-sm font-bold rounded-full border border-white/20 shadow-lg">
                Trusted by 500+ Businesses Worldwide
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mb-8"
            >
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black text-white leading-[1.05] tracking-tight">
                <span className="block mb-2">
                  {typedText}
                  <motion.span
                    animate={{ opacity: [1, 0] }}
                    transition={{ duration: 0.8, repeat: Infinity }}
                    className="inline-block w-1.5 h-16 sm:h-20 md:h-24 lg:h-28 bg-[#4682B4] ml-2 align-middle"
                  />
                </span>
                <span className="block bg-gradient-to-r from-[#4682B4] via-white to-[#4682B4] bg-clip-text text-transparent">
                  Your Digital Future
                </span>
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-xl sm:text-2xl md:text-3xl text-white/90 mb-10 max-w-4xl mx-auto leading-relaxed"
            >
              We transform businesses with{' '}
              <span className="font-bold text-[#4682B4]">web development</span>,{' '}
              <span className="font-bold text-[#4682B4]">AI automation</span>, and{' '}
              <span className="font-bold text-[#4682B4]">performance marketing</span>{' '}
              that drive measurable growth.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-3 justify-center mb-12"
            >
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="flex items-center gap-2 px-4 py-2.5 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full"
                  >
                    <Icon size={16} className="text-[#4682B4]" strokeWidth={2.5} />
                    <span className="text-sm font-semibold text-white">{feature.text}</span>
                  </motion.div>
                );
              })}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-20"
            >
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative px-10 py-5 bg-white text-[#0818A8] font-black text-lg rounded-xl transition-all duration-300 flex items-center gap-2 shadow-2xl shadow-black/30 overflow-hidden w-full sm:w-auto justify-center"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Start Your Project
                    <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" strokeWidth={3} />
                  </span>
                </motion.button>
              </Link>

              <Link href="/portfolio">
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-10 py-5 bg-transparent text-white font-bold text-lg rounded-xl border-2 border-white/30 hover:border-white hover:bg-white/10 backdrop-blur-sm transition-all duration-300 w-full sm:w-auto"
                >
                  View Portfolio
                </motion.button>
              </Link>
            </motion.div>

          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-xs font-bold text-white/60 uppercase tracking-wider">
            Scroll
          </span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2"
          >
            <motion.div 
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-2.5 bg-white rounded-full"
            />
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════════════
// TRUSTED BRANDS SECTION COMPONENT
// ═══════════════════════════════════════════════════════════════════════════

function TrustedBrandsSection() {
  const stats = [
    {
      icon: TrendingUpIcon,
      value: '₦50B+',
      label: 'Revenue Generated',
      color: 'from-[#00A651] to-[#00875a]',
    },
    {
      icon: Award,
      value: '500+',
      label: 'Projects Delivered',
      color: 'from-[#0818A8] to-[#000080]',
    },
    {
      icon: Users,
      value: '98%',
      label: 'Client Retention',
      color: 'from-[#4682B4] to-[#0818A8]',
    },
    {
      icon: Zap,
      value: '24',
      label: 'Countries Served',
      color: 'from-[#fbbf24] to-[#f59e0b]',
    },
  ];

  const brands = [
    { name: 'Dangote Group', industry: 'Manufacturing' },
    { name: 'FirstBank', industry: 'Banking' },
    { name: 'GTBank', industry: 'Banking' },
    { name: 'Zenith Bank', industry: 'Banking' },
    { name: 'MTN Nigeria', industry: 'Telecommunications' },
    { name: 'Flutterwave', industry: 'Fintech' },
    { name: 'Nigerian Breweries', industry: 'FMCG' },
    { name: 'Access Bank', industry: 'Banking' },
  ];

  return (
    <section className="relative bg-white py-20 md:py-28 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0818A805_1px,transparent_1px),linear-gradient(to_bottom,#0818A805_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
        <div 
          className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full opacity-30"
          style={{
            background: 'radial-gradient(circle, rgba(8, 24, 168, 0.08) 0%, transparent 70%)',
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block mb-4"
          >
            <span className="px-4 py-2 bg-gradient-to-r from-[#0818A8]/10 to-[#4682B4]/10 border border-[#0818A8]/20 rounded-full text-sm font-bold text-[#0818A8] tracking-wide">
              TRUSTED BY INDUSTRY LEADERS
            </span>
          </motion.div>
          
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-gray-900 mb-6 leading-tight">
            Powering Africa's
            <span className="block bg-gradient-to-r from-[#0818A8] to-[#4682B4] bg-clip-text text-transparent">
              Digital Revolution
            </span>
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From startups to Fortune 500 companies, we deliver digital solutions that drive measurable growth across Africa and beyond.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-20"
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                whileHover={{ scale: 1.05, y: -8 }}
                className="relative group"
              >
                <div className="relative bg-white border-2 border-gray-100 rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                  
                  <div className="relative mb-4">
                    <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${stat.color} bg-opacity-10`}>
                      <Icon size={28} className="text-gray-900" strokeWidth={2} />
                    </div>
                  </div>
                  
                  <div className="relative text-4xl md:text-5xl font-black text-gray-900 mb-2">
                    {stat.value}
                  </div>
                  
                  <div className="relative text-sm md:text-base text-gray-600 font-medium">
                    {stat.label}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
              Trusted by Leading African Brands
            </h3>
            <p className="text-lg text-gray-600">
              Join 500+ companies transforming their digital presence
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {brands.map((brand, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.05 * index }}
                whileHover={{ scale: 1.05, y: -4 }}
                className="group"
              >
                <div className="relative bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-xl p-6 md:p-8 hover:border-[#0818A8]/30 hover:shadow-xl transition-all duration-300">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#0818A8]/5 to-[#4682B4]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
                  
                  <div className="relative text-center">
                    <div className="text-xl md:text-2xl font-black text-gray-900 mb-2 group-hover:text-[#0818A8] transition-colors">
                      {brand.name}
                    </div>
                    <div className="text-xs md:text-sm text-gray-500 font-medium uppercase tracking-wider">
                      {brand.industry}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-20 pt-16 border-t border-gray-200"
        >
          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 mb-4 bg-gradient-to-br from-[#0818A8]/10 to-[#4682B4]/10 rounded-full">
                <Award size={32} className="text-[#0818A8]" strokeWidth={2} />
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">ISO Certified</h4>
              <p className="text-gray-600">Quality management systems meeting international standards</p>
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 mb-4 bg-gradient-to-br from-[#00A651]/10 to-[#00875a]/10 rounded-full">
                <Zap size={32} className="text-[#00A651]" strokeWidth={2} />
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">99.9% Uptime</h4>
              <p className="text-gray-600">Enterprise-grade infrastructure with guaranteed reliability</p>
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 mb-4 bg-gradient-to-br from-[#fbbf24]/10 to-[#f59e0b]/10 rounded-full">
                <Users size={32} className="text-[#fbbf24]" strokeWidth={2} />
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">24/7 Support</h4>
              <p className="text-gray-600">Dedicated team ready to assist you anytime, anywhere</p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

// ═══════════════════════════════════════════════════════════════════════════
// FOOTER COMPONENT
// ═══════════════════════════════════════════════════════════════════════════

function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Services: [
      { label: 'Web Development', href: '/services/web-development' },
      { label: 'AI Automation', href: '/services/ai-automation' },
      { label: 'Brand & Video', href: '/services/brand-video' },
      { label: 'Performance Marketing', href: '/services/marketing' },
      { label: 'SEO & Content', href: '/services/seo' },
    ],
    Solutions: [
      { label: 'For Startups', href: '/solutions/startups' },
      { label: 'For Enterprises', href: '/solutions/enterprise' },
      { label: 'For Agencies', href: '/solutions/agencies' },
    ],
    Company: [
      { label: 'About Us', href: '/about' },
      { label: 'Portfolio', href: '/portfolio' },
      { label: 'Packages', href: '/packages' },
      { label: 'Contact', href: '/contact' },
      { label: 'Careers', href: '/careers' },
    ],
    Legal: [
      { label: 'Privacy Policy', href: '/privacy' },
      { label: 'Terms of Service', href: '/terms' },
      { label: 'Cookie Policy', href: '/cookies' },
    ],
  };

  const socialLinks = [
    { icon: Facebook, href: 'https://facebook.com/bitlayerx', label: 'Facebook' },
    { icon: Twitter, href: 'https://twitter.com/bitlayerx', label: 'Twitter' },
    { icon: Instagram, href: 'https://instagram.com/bitlayerx', label: 'Instagram' },
    { icon: Linkedin, href: 'https://linkedin.com/company/bitlayerx', label: 'LinkedIn' },
    { icon: Github, href: 'https://github.com/bitlayerx', label: 'Github' },
  ];

  return (
    <footer className="bg-gradient-to-br from-[#0818A8] via-[#000080] to-[#0818A8] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-12 md:py-16">
        
        {/* Top Section */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          
          {/* Brand */}
          <div className="col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                <span className="text-[#0818A8] font-black text-lg">B</span>
              </div>
              <span className="font-black text-xl">BitLayerx</span>
            </div>
            <p className="text-white/80 mb-4 max-w-sm">
              Digital growth partner specializing in web development, AI automation, and performance marketing.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-colors"
                    aria-label={social.label}
                  >
                    <Icon size={18} strokeWidth={2} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-bold text-lg mb-4">{category}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-white/70 hover:text-white transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact Info */}
        <div className="border-t border-white/10 pt-8 mb-8">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="flex items-start gap-3">
              <Phone size={20} className="text-[#4682B4] mt-1" strokeWidth={2} />
              <div>
                <p className="font-semibold mb-1">Phone</p>
                <a href="tel:+2348034567890" className="text-white/70 hover:text-white">
                  +234 803 456 7890
                </a>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Mail size={20} className="text-[#4682B4] mt-1" strokeWidth={2} />
              <div>
                <p className="font-semibold mb-1">Email</p>
                <a href="mailto:info@bitlayerx.com" className="text-white/70 hover:text-white">
                  info@bitlayerx.com
                </a>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Globe size={20} className="text-[#4682B4] mt-1" strokeWidth={2} />
              <div>
                <p className="font-semibold mb-1">Location</p>
                <p className="text-white/70">Lagos, Nigeria</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/60 text-sm text-center md:text-left">
            © {currentYear} BitLayerx. All rights reserved.
          </p>
          <p className="text-white/60 text-sm text-center md:text-right">
            Built with ❤️ in Nigeria
          </p>
        </div>
      </div>
    </footer>
  );
}

// ═══════════════════════════════════════════════════════════════════════════
// MAIN PAGE COMPONENT
// ═══════════════════════════════════════════════════════════════════════════

export default function BitLayerxHomePage() {
  return (
    <div className={`${montserrat.variable} font-[family-name:var(--font-montserrat)]`}>
      
      {/* Additional Sections - Replace with actual components */}
      <HeaderSlider />
      <Overlay />
      <HomeProducts />
     
      <Divide />
      <Corporate />
      <Banner />
      <NewsLetter />
     
    </div>
  );
}