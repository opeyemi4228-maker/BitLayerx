'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Link from 'next/link';
import {
  Target, Eye, GitBranch, Award, Video, TrendingUp,
  ArrowRight, CheckCircle2, BarChart3,
  ShieldCheck, Layers, Star,
} from 'lucide-react';

import FeaturedProduct from './FeaturedProduct';
import Figure from './Figure';
import { MEDIA } from '@/lib/media';

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

const stagger = (delay = 0.1) => ({
  hidden: {},
  show: { transition: { staggerChildren: delay } },
});

function FadeIn({ children, className = '', delay = 0, direction = 'up' }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const variants = {
    hidden: {
      opacity: 0,
      y: direction === 'up' ? 28 : direction === 'down' ? -28 : 0,
      x: direction === 'left' ? 28 : direction === 'right' ? -28 : 0,
    },
    show: { opacity: 1, y: 0, x: 0, transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] } },
  };
  return (
    <motion.div ref={ref} variants={variants} initial="hidden" animate={inView ? 'show' : 'hidden'} className={className}>
      {children}
    </motion.div>
  );
}

// ─── DATA ─────────────────────────────────────────────────────────────────────
// Accountability leads. It is the sentence most likely to make a business
// owner sit forward, because it names a pain they lived through last year.
const ADVANTAGES = [
  {
    icon: ShieldCheck,
    title: 'One Point of Accountability',
    description:
      'Replace five vendors with a single partner. No coordination headaches, no one blaming the other agency  -  and you work directly with the people building it.',
  },
  {
    icon: Layers,
    title: 'A System, Not a Set of Parts',
    description:
      'Design, engineering, brand, film and growth are planned together and shipped together. Every piece is built knowing what the others are doing.',
  },
  {
    icon: BarChart3,
    title: 'Measured in Revenue, Not Deliverables',
    description:
      'Every engagement is tracked against agreed business metrics  -  and we report them whether or not they flatter us.',
  },
  {
    icon: Star,
    title: 'Built to Last, Built to Compound',
    description:
      'Everything we make is an asset you own: documented, handed over, and engineered to keep working when we are not in the room.',
  },
];

// Each practice states one concrete deliverable, not a category name.
// "Wireframing & prototyping" is a claim; "a clickable prototype your team can
// test before we write code" is a commitment.
const PRACTICES = [
  {
    number: '01', icon: Target, label: 'Strategy', title: 'Strategy & Positioning',
    benefit: 'Every engagement starts with clarity  -  your market position, your audience, and the order things need to happen in.',
    deliverable: 'A written positioning statement you could hand a new hire.',
    color: '#0040FF', href: '/services/strategy',
  },
  {
    number: '02', icon: Eye, label: 'Design', title: 'UI/UX & Product Design',
    benefit: 'Interfaces designed around how your customers actually think, decide and get interrupted.',
    deliverable: 'A clickable prototype your team can test before we write code.',
    color: '#0040FF', href: '/services/ui-ux',
  },
  {
    number: '03', icon: GitBranch, label: 'Engineering', title: 'Web, Mobile & Software',
    benefit: 'The infrastructure your business runs on  -  built for weak networks, real traffic and the day something goes wrong.',
    deliverable: 'Production code in your repository, documented and handed over.',
    color: '#0040FF', href: '/services/web-mobile',
  },
  {
    number: '04', icon: Award, label: 'Brand', title: 'Branding & Identity',
    benefit: 'A brand system that communicates value before a word is spoken  -  and holds up as the company grows.',
    deliverable: 'A logo system that works at 16px and on a building  -  source files yours.',
    color: '#0040FF', href: '/services/branding',
  },
  {
    number: '05', icon: Video, label: 'Film', title: 'Commercials & Video',
    benefit: 'Nothing builds trust faster than seeing the thing work. We produce films that carry weight, not just polish.',
    deliverable: 'A finished film, cut down for every platform you post on.',
    color: '#0040FF', href: '/services/video',
  },
  {
    number: '06', icon: TrendingUp, label: 'Growth', title: 'Digital Marketing & Growth',
    benefit: 'Search, paid, email and content run as one plan, so each month’s work makes the next month cheaper.',
    deliverable: 'A dashboard you can read without us in the room.',
    color: '#0040FF', href: '/services/marketing',
  },
];

// ─── ADVANTAGES ───────────────────────────────────────────────────────────────
function AdvantagesSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="bg-white py-24 lg:py-32" aria-labelledby="advantages-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid lg:grid-cols-[420px_1fr] gap-14 lg:gap-24 items-start">

          <FadeIn direction="right" className="lg:sticky lg:top-28 lg:self-start">
            <p className="text-[#0040FF] text-[12.5px] font-black tracking-[0.22em] uppercase mb-4">
              Why BitLayerX
            </p>
            <h2
              id="advantages-heading"
              className="text-[34px] sm:text-[42px] lg:text-[52px] font-black text-[#0B0B0F] leading-[0.98] tracking-[-0.035em] mb-6"
            >
              Most agencies
              <br />
              deliver parts.
              <br />
              <span className="text-[#0040FF]">We deliver the whole.</span>
            </h2>
            <p className="text-gray-600 text-[16px] leading-relaxed max-w-sm">
              Four reasons companies move their whole digital programme to one
              team.
            </p>

            <Figure
              src={MEDIA.practices.src}
              alt={MEDIA.practices.alt}
              ratio="5 / 4"
              seed={1}
              sizes="(max-width: 1024px) 100vw, 420px"
              className="mt-9 max-w-sm"
            />
          </FadeIn>

          <motion.div
            ref={ref}
            variants={stagger(0.11)}
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
                  className="group flex gap-5 p-7 lg:p-8 bg-gray-50 hover:bg-white border-l-[3px] border-transparent hover:border-[#0040FF] hover:shadow-xl hover:shadow-[#0040FF]/[0.06] transition-all duration-300"
                >
                  <div className="w-11 h-11 rounded-xl bg-[#0040FF]/[0.07] group-hover:bg-[#0040FF]/[0.12] flex items-center justify-center flex-shrink-0 transition-colors duration-300 mt-0.5">
                    <Icon size={20} strokeWidth={2} className="text-[#0040FF]" />
                  </div>
                  <div>
                    <h3 className="text-[17px] font-black text-[#0B0B0F] tracking-tight mb-2 group-hover:text-[#0040FF] transition-colors">
                      {adv.title}
                    </h3>
                    <p className="text-gray-600 text-[15.5px] leading-relaxed">{adv.description}</p>
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

// ─── PRACTICES SNAPSHOT ───────────────────────────────────────────────────────
function PracticesSnapshot() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className="bg-[#0B0B0F] py-24 lg:py-32 overflow-hidden relative" aria-labelledby="practices-heading">
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none">
        <svg width="100%" height="100%" aria-hidden="true">
          <defs>
            <pattern id="svc-hex" x="0" y="0" width="80" height="69" patternUnits="userSpaceOnUse">
              <path d="M40 0 L74.64 20 L74.64 49 L40 69 L5.36 49 L5.36 20 Z" fill="none" stroke="rgba(99,149,255,0.8)" strokeWidth="0.8" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#svc-hex)" />
        </svg>
      </div>
      <div
        className="absolute top-0 left-0 right-0 h-px pointer-events-none"
        style={{ background: 'linear-gradient(90deg, transparent 0%, rgba(59,130,246,0.5) 30%, rgba(99,149,255,0.7) 50%, rgba(59,130,246,0.5) 70%, transparent 100%)' }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <FadeIn className="max-w-2xl mb-16 lg:mb-20">
          <p className="text-blue-400 text-[12.5px] font-black tracking-[0.22em] uppercase mb-4">
            Six practices
          </p>
          <h2
            id="practices-heading"
            className="text-[34px] sm:text-[42px] lg:text-[56px] font-black text-white leading-[0.98] tracking-[-0.035em] mb-6"
          >
            What we build, and{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #0040FF 0%, #8FAEFF 50%, #5C86FF 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              what you actually receive
            </span>
          </h2>
          <p className="text-white/45 text-[16px] leading-relaxed">
            Every practice below lists what lands in your hands at the end of it.
            Not the category  -  the deliverable.
          </p>
        </FadeIn>

        <motion.div
          ref={ref}
          variants={stagger(0.08)}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/[0.06]"
        >
          {PRACTICES.map((practice, i) => {
            const Icon = practice.icon;
            return (
              <motion.div
                key={i}
                variants={fadeUp}
                className="group bg-[#0B0B0F] hover:bg-[#0B0B0F] p-8 lg:p-9 relative overflow-hidden transition-colors duration-300 flex flex-col"
              >
                <div
                  className="absolute left-0 top-0 bottom-0 w-[3px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ backgroundColor: practice.color }}
                />
                <div
                  className="absolute top-6 right-7 text-[48px] font-black leading-none pointer-events-none select-none opacity-[0.07] group-hover:opacity-[0.12] transition-opacity tabular-nums"
                  style={{ color: practice.color }}
                  aria-hidden="true"
                >
                  {practice.number}
                </div>

                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center mb-5"
                  style={{ backgroundColor: practice.color + '20' }}
                >
                  <Icon size={20} strokeWidth={2} style={{ color: practice.color }} />
                </div>

                <p className="text-[12px] font-black tracking-[0.2em] uppercase mb-2" style={{ color: practice.color }}>
                  {practice.label}
                </p>
                <h3 className="text-[18px] lg:text-[19px] font-black text-white leading-tight mb-3 tracking-tight">
                  {practice.title}
                </h3>
                <p className="text-white/45 text-[15px] leading-relaxed mb-6 flex-1 group-hover:text-white/60 transition-colors">
                  {practice.benefit}
                </p>

                {/* One deliverable. A claim becomes a commitment when it names
                    the thing that lands in your hands. */}
                <div className="flex items-start gap-2.5 mb-6 pt-5 border-t border-white/[0.07]">
                  <CheckCircle2
                    size={14}
                    strokeWidth={2.5}
                    style={{ color: practice.color }}
                    className="flex-shrink-0 mt-[3px]"
                  />
                  <span className="text-white/65 text-[14.5px] leading-snug">
                    {practice.deliverable}
                  </span>
                </div>

                <Link
                  href={practice.href}
                  className="inline-flex items-center gap-1.5 text-[13px] font-black uppercase tracking-wide transition-all duration-300 opacity-60 group-hover:opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B0B0F] rounded"
                  style={{ color: practice.color }}
                >
                  {practice.label} in detail
                  <ArrowRight size={12} strokeWidth={3} />
                </Link>
              </motion.div>
            );
          })}
        </motion.div>

        <FadeIn className="text-center mt-14" delay={0.15}>
          <Link
            href="/services"
            className="inline-flex items-center gap-2.5 px-8 py-4 border border-white/15 hover:border-blue-400/50 bg-white/5 hover:bg-blue-500/10 text-white/75 hover:text-white font-bold text-[15px] rounded-xl transition-all duration-300 group focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B0B0F]"
          >
            See all six practices
            <ArrowRight size={15} strokeWidth={2.5} className="group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </FadeIn>
      </div>
    </section>
  );
}

export default function AdvantagesAndPracticesSection() {
  return (
    <>
      <AdvantagesSection />
      <PracticesSnapshot />
      <FeaturedProduct />
    </>
  );
}
