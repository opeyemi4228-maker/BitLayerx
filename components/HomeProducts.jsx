'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Link from 'next/link';
import {
  Target,
  Eye,
  GitBranch,
  Award,
  Video,
  TrendingUp,
  ArrowRight,
  CheckCircle2,
  BarChart3,
  Users,
  Zap,
  ShieldCheck,
  Globe,
  Layers,
  Star,
  ExternalLink,
} from 'lucide-react';

// ─── Animation helpers ────────────────────────────────────────────────────────
const fadeUp = {
  hidden: { opacity: 0, y: 36 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  },
};

const stagger = (delay = 0.12) => ({
  hidden: {},
  show: { transition: { staggerChildren: delay } },
});

function FadeIn({ children, className = '', delay = 0, direction = 'up' }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const variants = {
    hidden: {
      opacity: 0,
      y: direction === 'up' ? 32 : direction === 'down' ? -32 : 0,
      x: direction === 'left' ? 32 : direction === 'right' ? -32 : 0,
    },
    show: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] },
    },
  };
  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={inView ? 'show' : 'hidden'}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ─── DATA ─────────────────────────────────────────────────────────────────────

const ADVANTAGES = [
  {
    icon: Layers,
    title: 'Complete Digital Ecosystem',
    description:
      'Integrated solutions — not isolated services. Web, video, branding, marketing, and automation working together as one system.',
  },
  {
    icon: BarChart3,
    title: 'Revenue-Focused Approach',
    description:
      'We measure success in business results and revenue impact — turning your digital presence into a compounding growth engine.',
  },
  {
    icon: ShieldCheck,
    title: 'One Trusted Partner',
    description:
      'Replace 5+ vendors with a single strategic partner. No coordination headaches — just cohesive execution across every channel.',
  },
  {
    icon: Star,
    title: 'Proven Track Record',
    description:
      'We help ambitious brands build authority, automate operations, and dominate their markets through strategic digital transformation.',
  },
];

const LAYERS = [
  {
    number: '01',
    icon: Target,
    label: 'Strategy Layer',
    title: 'Strategy & Positioning',
    benefit: 'Every project starts with a clear vision, roadmap, and market positioning — so every decision compounds toward your goals.',
    outcomes: ['Brand positioning', 'Market research', 'Growth roadmap'],
    color: '#2563EB',
    bg: '#EFF6FF',
    href: '/layered-approach/strategy',
  },
  {
    number: '02',
    icon: Eye,
    label: 'Experience Layer',
    title: 'UI/UX & Product Design',
    benefit: 'Intuitive, high-converting user journeys designed around your customers — not templates.',
    outcomes: ['User research', 'Wireframing & prototyping', 'Conversion-first design'],
    color: '#0EA5E9',
    bg: '#F0F9FF',
    href: '/layered-approach/experience',
  },
  {
    number: '03',
    icon: GitBranch,
    label: 'Technology Layer',
    title: 'Web, Mobile & Software',
    benefit: 'Custom platforms built for speed, scale, and security — from landing pages to enterprise-grade applications.',
    outcomes: ['Custom web & mobile apps', 'Scalable architecture', 'API & integrations'],
    color: '#1D4ED8',
    bg: '#EFF6FF',
    href: '/layered-approach/technology',
  },
  {
    number: '04',
    icon: Award,
    label: 'Brand Layer',
    title: 'Branding & Identity',
    benefit: 'A brand system that makes you unforgettable — logo, voice, visual identity, and guidelines built to last.',
    outcomes: ['Logo & identity system', 'Brand guidelines', 'Messaging & tone of voice'],
    color: '#3B82F6',
    bg: '#EFF6FF',
    href: '/layered-approach/brand',
  },
  {
    number: '05',
    icon: Video,
    label: 'Media Layer',
    title: 'Commercials & Video',
    benefit: 'High-impact commercial videos, brand films, and ad creatives that capture attention and drive action across every screen.',
    outcomes: ['Brand & product films', 'Ad creatives', 'Social content production'],
    color: '#0369A1',
    bg: '#F0F9FF',
    href: '/layered-approach/media',
  },
  {
    number: '06',
    icon: TrendingUp,
    label: 'Growth Layer',
    title: 'Digital Marketing & Growth',
    benefit: 'Data-driven campaigns across SEO, paid ads, email, and social — designed to compound in effectiveness every month.',
    outcomes: ['SEO & content marketing', 'Paid advertising', 'Analytics & optimisation'],
    color: '#1E40AF',
    bg: '#EFF6FF',
    href: '/layered-approach/growth',
  },
];

const CASE_STUDIES = [
  {
    tag: 'E-commerce · Brand · Marketing',
    title: 'Scaling a Lagos Fashion Brand to ₦120M Revenue',
    description:
      'A homegrown fashion label had great products but zero digital presence. We rebuilt their brand, launched a custom e-commerce platform, and ran a 6-month performance marketing campaign.',
    metrics: [
      { value: '₦120M', label: 'Revenue Generated', icon: BarChart3 },
      { value: '340%',  label: 'Traffic Increase',  icon: TrendingUp },
      { value: '4.2×',  label: 'ROAS on Ad Spend',  icon: Zap },
    ],
    layers: ['Brand', 'Technology', 'Growth'],
    industry: 'E-commerce',
    duration: '6 months',
    dark: true,
  },
  {
    tag: 'Fintech · UI/UX · Engineering',
    title: 'Building a Payments Platform Serving 50,000+ Users',
    description:
      'A Nigerian fintech startup needed a scalable payments infrastructure and consumer mobile app — built from scratch, production-ready, and CBN-compliant.',
    metrics: [
      { value: '50K+', label: 'Active Users',        icon: Users },
      { value: '99.9%', label: 'Platform Uptime',    icon: ShieldCheck },
      { value: '2 Wks', label: 'MVP to Launch',      icon: Zap },
    ],
    layers: ['Strategy', 'Experience', 'Technology'],
    industry: 'Fintech',
    duration: '4 months',
    dark: false,
  },
  {
    tag: 'Real Estate · Brand · Video',
    title: 'Positioning a Property Group as Abuja\'s Premium Brand',
    description:
      'A real estate developer wanted to move upmarket. We delivered a full rebrand, cinematic property videos, and a luxury digital presence that commanded premium pricing.',
    metrics: [
      { value: '65%',   label: 'Increase in Enquiries', icon: TrendingUp },
      { value: '3',     label: 'Commercial Videos',     icon: Video },
      { value: '₦2.1B', label: 'Properties Sold',       icon: BarChart3 },
    ],
    layers: ['Brand', 'Media', 'Experience'],
    industry: 'Real Estate',
    duration: '3 months',
    dark: true,
  },
  {
    tag: 'Logistics · Software · Automation',
    title: 'Automating Operations for a 200-Vehicle Fleet Company',
    description:
      'A logistics firm was drowning in manual processes. We engineered a custom fleet management system with real-time tracking, automated dispatch, and a client-facing portal.',
    metrics: [
      { value: '47%',  label: 'Cost Reduction',       icon: BarChart3 },
      { value: '200+', label: 'Vehicles Managed',      icon: Globe },
      { value: '30hr', label: 'Saved Per Week',        icon: Zap },
    ],
    layers: ['Strategy', 'Technology', 'Growth'],
    industry: 'Logistics',
    duration: '5 months',
    dark: false,
  },
];

// ─── ADVANTAGES SECTION ───────────────────────────────────────────────────────
function AdvantagesSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      className="bg-white py-24 lg:py-32"
      aria-labelledby="advantages-heading"
      itemScope
      itemType="https://schema.org/ItemList"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid lg:grid-cols-[420px_1fr] gap-16 lg:gap-24 items-start">

          {/* Sticky header */}
          <FadeIn direction="right" className="lg:sticky lg:top-28 lg:self-start">
            <p className="text-[#0818A8] text-[14px] font-black tracking-[0.2em] uppercase mb-4">
              Why BitLayerX
            </p>
            <h2
              id="advantages-heading"
              className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#000080] uppercase leading-[0.95] tracking-tight mb-6"
            >
              OUR
              <br />
              <span className="text-[#0818A8]">ADVANTAGES</span>
            </h2>
            <p className="text-black/80 text-[15px] leading-relaxed max-w-sm">
              Most agencies deliver parts. We deliver the whole system — and the
              results prove it.
            </p>
            <div className="mt-8 flex items-center gap-3">
              <div className="flex -space-x-2">
                {['#1d4ed8','#2563eb','#3b82f6','#60a5fa'].map((c, i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full border-2 border-white flex items-center justify-center text-white text-[13.5px] font-bold"
                    style={{ backgroundColor: c }}
                  >
                    {String.fromCharCode(65 + i)}
                  </div>
                ))}
              </div>
              <div>
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={12} className="text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-black/80 text-[13.5px] font-medium">500+ brands transformed</p>
              </div>
            </div>
          </FadeIn>

          {/* Advantages list */}
          <motion.div
            ref={ref}
            variants={stagger(0.13)}
            initial="hidden"
            animate={inView ? 'show' : 'hidden'}
            className="grid gap-4"
          >
            {ADVANTAGES.map((adv, i) => {
              const Icon = adv.icon;
              return (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  whileHover={{ x: 6 }}
                  className="group flex gap-5 p-7 lg:p-8 bg-gray-50 hover:bg-white border-l-[3px] border-transparent hover:border-[#0818A8] hover:shadow-xl hover:shadow-[#000080]/8 transition-all duration-300 cursor-default"
                  itemProp="itemListElement"
                  itemScope
                  itemType="https://schema.org/ListItem"
                >
                  <div className="w-11 h-11 rounded-xl bg-[#000080]/8 group-hover:bg-[#000080]/12 flex items-center justify-center flex-shrink-0 transition-colors duration-300 mt-0.5">
                    <Icon
                      size={20}
                      strokeWidth={2}
                      className="text-[#0818A8]"
                    />
                  </div>
                  <div>
                    <h3
                      className="text-[15px] lg:text-[17px] font-black text-[#000080] uppercase tracking-tight mb-2 group-hover:text-[#0818A8] transition-colors"
                      itemProp="name"
                    >
                      {adv.title}
                    </h3>
                    <p className="text-black/80 text-[14px] leading-relaxed" itemProp="description">
                      {adv.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

        </div>
      </div>
    </section>
  );
}

// ─── SERVICES SNAPSHOT (What We Build) ───────────────────────────────────────
function ServicesSnapshot() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      className="bg-[#04040e] py-24 lg:py-32 overflow-hidden relative"
      aria-labelledby="services-heading"
      itemScope
      itemType="https://schema.org/Service"
    >
      {/* Background hex grid */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none">
        <svg width="100%" height="100%" aria-hidden="true">
          <defs>
            <pattern id="svc-hex" x="0" y="0" width="80" height="69" patternUnits="userSpaceOnUse">
              <path
                d="M40 0 L74.64 20 L74.64 49 L40 69 L5.36 49 L5.36 20 Z"
                fill="none"
                stroke="rgba(99,149,255,0.8)"
                strokeWidth="0.8"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#svc-hex)" />
        </svg>
      </div>

      {/* Top accent line */}
      <div
        className="absolute top-0 left-0 right-0 h-px pointer-events-none"
        style={{
          background:
            'linear-gradient(90deg, transparent 0%, rgba(59,130,246,0.5) 30%, rgba(99,149,255,0.7) 50%, rgba(59,130,246,0.5) 70%, transparent 100%)',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">

        {/* Header */}
        <FadeIn className="text-center mb-20">
          <p className="text-blue-400 text-[14px] font-black tracking-[0.2em] uppercase mb-4">
            Structured by Layers
          </p>
          <h2
            id="services-heading"
            className="text-4xl sm:text-5xl lg:text-7xl font-black text-white uppercase leading-[0.92] tracking-tight mb-6"
          >
            WHAT WE
            <br />
            <span
              style={{
                background: 'linear-gradient(135deg, #3b82f6 0%, #93c5fd 50%, #60a5fa 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              BUILD
            </span>
          </h2>
          <p className="text-white/40 text-[15px] max-w-xl mx-auto leading-relaxed">
            Six precision layers. Each one engineered to compound the value of the others.
          </p>
        </FadeIn>

        {/* Layers grid */}
        <motion.div
          ref={ref}
          variants={stagger(0.1)}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5"
        >
          {LAYERS.map((layer, i) => {
            const Icon = layer.icon;
            return (
              <motion.div
                key={i}
                variants={fadeUp}
                className="group bg-[#04040e] hover:bg-[#070720] p-8 lg:p-9 relative overflow-hidden transition-colors duration-300 cursor-pointer"
              >
                {/* Left accent bar */}
                <div
                  className="absolute left-0 top-0 bottom-0 w-[3px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ backgroundColor: layer.color }}
                />

                {/* Layer number */}
                <div
                  className="absolute top-6 right-7 text-[48px] font-black leading-none pointer-events-none select-none opacity-[0.06] group-hover:opacity-[0.1] transition-opacity"
                  style={{ color: layer.color }}
                  aria-hidden="true"
                >
                  {layer.number}
                </div>

                {/* Icon */}
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center mb-5 transition-all duration-300"
                  style={{ backgroundColor: layer.color + '20' }}
                >
                  <Icon
                    size={20}
                    strokeWidth={2}
                    style={{ color: layer.color }}
                  />
                </div>

                {/* Layer tag */}
                <p
                  className="text-[13.5px] font-black tracking-[0.18em] uppercase mb-2"
                  style={{ color: layer.color }}
                >
                  {layer.label}
                </p>

                {/* Title */}
                <h3 className="text-[17px] lg:text-[19px] font-black text-white uppercase leading-tight mb-3 tracking-tight">
                  {layer.title}
                </h3>

                {/* Benefit */}
                <p className="text-white/45 text-[15px] leading-relaxed mb-5 group-hover:text-white/60 transition-colors">
                  {layer.benefit}
                </p>

                {/* Outcomes */}
                <ul className="space-y-1.5 mb-6">
                  {layer.outcomes.map((o, j) => (
                    <li key={j} className="flex items-center gap-2">
                      <CheckCircle2
                        size={13}
                        strokeWidth={2.5}
                        style={{ color: layer.color }}
                        className="flex-shrink-0"
                      />
                      <span className="text-white/50 text-[14px] font-medium">{o}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Link
                  href={layer.href}
                  className="inline-flex items-center gap-1.5 text-[14px] font-bold opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-y-1 group-hover:translate-y-0"
                  style={{ color: layer.color }}
                  aria-label={`Learn more about ${layer.title}`}
                >
                  Explore Layer
                  <ArrowRight size={12} strokeWidth={3} />
                </Link>

              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom CTA */}
        <FadeIn className="text-center mt-14" delay={0.2}>
          <Link
            href="/services"
            className="inline-flex items-center gap-2.5 px-8 py-4 border border-white/15 hover:border-blue-400/50 bg-white/5 hover:bg-blue-500/10 text-white/75 hover:text-white font-bold text-[14px] rounded-xl transition-all duration-300 group"
          >
            See All Services
            <ArrowRight
              size={15}
              strokeWidth={2.5}
              className="group-hover:translate-x-0.5 transition-transform"
            />
          </Link>
        </FadeIn>

      </div>
    </section>
  );
}

// ─── FEATURED WORK ────────────────────────────────────────────────────────────
function FeaturedWork() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      className="bg-white py-24 lg:py-32"
      aria-labelledby="work-heading"
      itemScope
      itemType="https://schema.org/CreativeWork"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">

        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
          <FadeIn direction="right">
            <p className="text-[#0818A8] text-[14px] font-black tracking-[0.2em] uppercase mb-4">
              Proof of Execution
            </p>
            <h2
              id="work-heading"
              className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#000080] uppercase leading-[0.95] tracking-tight"
            >
              FEATURED
              <br />
              <span className="text-[#0818A8]">WORK</span>
            </h2>
          </FadeIn>
          <FadeIn direction="left" delay={0.1}>
            <p className="text-black/80 text-[14px] max-w-xs leading-relaxed lg:text-right">
              Results over visuals. Every project below is measured in impact, not aesthetics.
            </p>
          </FadeIn>
        </div>

        {/* Case studies */}
        <motion.div
          ref={ref}
          variants={stagger(0.15)}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
          className="grid gap-px bg-gray-100"
        >
          {CASE_STUDIES.map((cs, i) => (
            <motion.article
              key={i}
              variants={fadeUp}
              className={`group grid lg:grid-cols-2 min-h-[420px] ${
                i % 2 === 1 ? 'lg:[direction:rtl]' : ''
              }`}
              itemProp="workExample"
            >
              {/* Metrics panel */}
              <div
                className={`relative flex flex-col justify-between p-8 lg:p-12 overflow-hidden ${
                  i % 2 === 1 ? 'lg:[direction:ltr]' : ''
                } ${cs.dark ? 'bg-[#000080]' : 'bg-[#04040e]'}`}
              >
                {/* Subtle grid bg */}
                <div className="absolute inset-0 opacity-[0.05] pointer-events-none">
                  <svg width="100%" height="100%" aria-hidden="true">
                    <defs>
                      <pattern id={`grid-${i}`} x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                        <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.8" />
                      </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill={`url(#grid-${i})`} />
                  </svg>
                </div>

                <div className="relative z-10">
                  {/* Tag */}
                  <p className="text-blue-300/70 text-[13.5px] font-bold tracking-[0.15em] uppercase mb-5">
                    {cs.tag}
                  </p>

                  {/* Index */}
                  <div
                    className="text-[80px] lg:text-[100px] font-black leading-none text-white/5 mb-2 select-none"
                    aria-hidden="true"
                  >
                    {String(i + 1).padStart(2, '0')}
                  </div>

                  {/* Metrics */}
                  <div className="grid grid-cols-3 gap-4">
                    {cs.metrics.map((m, j) => {
                      const Icon = m.icon;
                      return (
                        <div key={j} className="flex flex-col gap-2">
                          <div className="w-8 h-8 rounded-lg bg-blue-400/15 flex items-center justify-center flex-shrink-0">
                            <Icon size={15} strokeWidth={2} className="text-blue-300" />
                          </div>
                          <div>
                            <p className="text-white font-black text-[22px] lg:text-[28px] leading-none">
                              {m.value}
                            </p>
                            <p className="text-white/40 text-[13.5px] font-semibold leading-tight mt-0.5">
                              {m.label}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Layers used */}
                <div className="relative z-10 mt-8 flex flex-wrap gap-2">
                  {cs.layers.map((l, j) => (
                    <span
                      key={j}
                      className="px-3 py-1 border border-blue-400/20 text-blue-300/70 text-[13.5px] font-bold tracking-wider uppercase rounded-full"
                    >
                      {l} Layer
                    </span>
                  ))}
                </div>
              </div>

              {/* Content panel */}
              <div
                className={`flex flex-col justify-between p-8 lg:p-12 bg-white group-hover:bg-gray-50 transition-colors duration-300 ${
                  i % 2 === 1 ? 'lg:[direction:ltr]' : ''
                }`}
              >
                <div>
                  {/* Industry + duration */}
                  <div className="flex items-center gap-3 mb-6">
                    <span className="px-3 py-1 bg-[#000080]/8 text-[#000080] text-[13.5px] font-black tracking-wider uppercase rounded-full">
                      {cs.industry}
                    </span>
                    <span className="text-gray-300 text-[13.5px]">·</span>
                    <span className="text-black/80 text-[13.5px] font-semibold">{cs.duration}</span>
                  </div>

                  {/* Title */}
                  <h3
                    className="text-[20px] lg:text-[26px] font-black text-[#000080] uppercase leading-tight tracking-tight mb-5"
                    itemProp="name"
                  >
                    {cs.title}
                  </h3>

                  {/* Description */}
                  <p
                    className="text-black/80 text-[14px] leading-relaxed mb-8"
                    itemProp="description"
                  >
                    {cs.description}
                  </p>
                </div>

                {/* CTA */}
                <div className="flex items-center justify-between pt-6 border-t border-gray-100">
                  <Link
                    href="/work"
                    className="inline-flex items-center gap-2 text-[#000080] font-black text-[15px] uppercase tracking-wide hover:text-[#0818A8] transition-colors group/link"
                  >
                    View Case Study
                    <ArrowRight
                      size={15}
                      strokeWidth={3}
                      className="group-hover/link:translate-x-1 transition-transform"
                    />
                  </Link>
                  <ExternalLink
                    size={16}
                    strokeWidth={2}
                    className="text-gray-200 group-hover:text-gray-300 transition-colors"
                  />
                </div>
              </div>

            </motion.article>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <FadeIn className="text-center mt-14" delay={0.2}>
          <Link
            href="/work"
            className="inline-flex items-center gap-2.5 px-9 py-4 bg-[#000080] hover:bg-[#0818A8] text-white font-black text-[14px] rounded-xl transition-all duration-300 shadow-lg shadow-[#000080]/25 hover:shadow-[#000080]/40 group"
          >
            See All Case Studies
            <ArrowRight
              size={15}
              strokeWidth={3}
              className="group-hover:translate-x-0.5 transition-transform"
            />
          </Link>
        </FadeIn>

      </div>
    </section>
  );
}

// ─── ROOT EXPORT ──────────────────────────────────────────────────────────────
export default function AdvantagesServicesSection() {
  return (
    <main>
      <AdvantagesSection />
      <ServicesSnapshot />
      <FeaturedWork />
    </main>
  );
}