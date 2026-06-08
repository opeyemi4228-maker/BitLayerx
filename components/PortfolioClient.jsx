'use client';
import React, { useState, useMemo, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import {
  ExternalLink, ArrowRight, CheckCircle, Award, Github,
  Filter, X, Code2, Globe, Calendar, Star, ArrowUpRight
} from 'lucide-react';

function formatDate(iso) {
  if (!iso) return null;
  try {
    return new Date(iso).toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
  } catch {
    return null;
  }
}

// Pretty hostname for the live URL chip, e.g. "gcsa-consulting.vercel.app"
function hostOf(url) {
  try {
    return new URL(url).hostname;
  } catch {
    return url.replace(/^https?:\/\//, '');
  }
}

// Deterministic brand gradient per project (used behind every preview).
const GRADIENTS = [
  'from-[#0818A8] to-[#000080]',
  'from-[#4682B4] to-[#0818A8]',
  'from-[#0818A8] to-[#4682B4]',
  'from-[#00A651] to-[#00875a]',
  'from-[#7c3aed] to-[#4f46e5]',
  'from-[#0ea5e9] to-[#0818A8]',
];

function initialsOf(title) {
  return title.split(' ').slice(0, 2).map((w) => w[0]).join('');
}

// Lightweight branded avatar (used for the hero proof row + as a fallback).
function BrandAvatar({ project, index, className = '', textClass = 'text-4xl' }) {
  const gradient = GRADIENTS[index % GRADIENTS.length];
  return (
    <div className={`bg-gradient-to-br ${gradient} flex items-center justify-center ${className}`}>
      <span className={`text-white font-black tracking-tight ${textClass}`}>
        {initialsOf(project.title)}
      </span>
    </div>
  );
}

// Live, embedded preview of the actual deployed website — shows the real
// hero section of each site (no paid screenshot service). The site is
// rendered in an iframe, scaled down to fit and anchored to the top so the
// hero is what shows. A branded gradient sits behind it as a fallback.
function LivePreview({ project, index }) {
  const ref = useRef(null);
  const [scale, setScale] = useState(0.3);
  const BASE_W = 1280; // viewport width we render the site at, then scale down

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const update = () => setScale(el.clientWidth / BASE_W);
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  return (
    <div ref={ref} className="absolute inset-0 overflow-hidden">
      {/* Branded fallback (shows if the site is slow / blocks embedding) */}
      <BrandAvatar project={project} index={index} className="absolute inset-0" />

      {project.homepage && (
        <iframe
          src={project.homepage}
          title={`Live preview of ${project.title}`}
          loading="lazy"
          scrolling="no"
          tabIndex={-1}
          aria-hidden="true"
          sandbox="allow-scripts allow-same-origin allow-popups"
          className="absolute top-0 left-0 origin-top-left border-0 pointer-events-none bg-white"
          style={{
            width: `${BASE_W}px`,
            height: `${Math.round(BASE_W * 0.7)}px`,
            transform: `scale(${scale})`,
          }}
        />
      )}
    </div>
  );
}

export default function PortfolioClient({ projects = [] }) {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selected, setSelected] = useState(null);

  // Filter chips are derived from the live data, so they auto-update too.
  const filterCategories = useMemo(() => {
    const counts = projects.reduce((acc, p) => {
      acc[p.language] = (acc[p.language] || 0) + 1;
      return acc;
    }, {});
    const langs = Object.entries(counts)
      .sort((a, b) => b[1] - a[1])
      .map(([id, count]) => ({ id, label: id, count }));
    return [{ id: 'all', label: 'All Projects', count: projects.length }, ...langs];
  }, [projects]);

  const filtered = activeFilter === 'all'
    ? projects
    : projects.filter((p) => p.language === activeFilter);

  const stats = [
    { value: `${projects.length}`, label: 'Live Sites' },
    { value: '98%', label: 'Success Rate' },
  ];

  return (
    <>
      <div className="bg-white">

        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-[#0818A8] via-[#000080] to-[#0818A8] pt-32 md:pt-40 pb-24 md:pb-32 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute inset-0 opacity-[0.08]">
              <svg width="100%" height="100%">
                <defs>
                  <pattern id="portfolio-hexagons" x="0" y="0" width="100" height="86.6" patternUnits="userSpaceOnUse">
                    <path d="M50 0 L93.3 25 L93.3 61.6 L50 86.6 L6.7 61.6 L6.7 25 Z" fill="none" stroke="white" strokeWidth="1.5" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#portfolio-hexagons)" />
              </svg>
            </div>
            <motion.div
              animate={{ y: [0, -40, 0], x: [0, 30, 0] }}
              transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute top-20 right-[10%] w-[600px] h-[600px] rounded-full"
              style={{ background: 'radial-gradient(circle, rgba(70, 130, 180, 0.18) 0%, transparent 70%)' }}
            />
            <motion.div
              animate={{ y: [0, 40, 0], x: [0, -30, 0] }}
              transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -bottom-32 -left-20 w-[520px] h-[520px] rounded-full"
              style={{ background: 'radial-gradient(circle, rgba(251, 191, 36, 0.12) 0%, transparent 70%)' }}
            />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
            <div className="max-w-5xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/15 backdrop-blur-md text-white text-sm font-bold rounded-full border border-white/25 shadow-lg mb-8"
              >
                <Award size={18} className="text-[#fbbf24]" strokeWidth={2.5} />
                <span>{projects.length}+ Live Projects • 98% Success Rate • Updated in Real Time</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white mb-6 leading-[1.05]"
              >
                <span className="block mb-3">Real Projects.</span>
                <span className="block bg-gradient-to-r from-[#4682B4] via-white to-[#4682B4] bg-clip-text text-transparent">
                  Real Results.
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-xl sm:text-2xl md:text-3xl text-white/95 max-w-4xl mx-auto mb-12 leading-relaxed"
              >
                Every project below is <span className="font-bold text-[#4682B4]">live and deployed</span>. Explore real products we've shipped for businesses across Africa and beyond.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
                <Link href="#projects">
                  <motion.button
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-10 py-5 bg-white text-[#0818A8] font-black text-lg rounded-xl shadow-2xl flex items-center gap-2 justify-center"
                  >
                    Explore Projects
                    <ArrowRight size={20} strokeWidth={3} />
                  </motion.button>
                </Link>
                <Link href="/contact">
                  <motion.button
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-10 py-5 bg-transparent text-white font-bold text-lg rounded-xl border-2 border-white/40 hover:border-white hover:bg-white/10 backdrop-blur-sm transition-all"
                  >
                    Start Your Project
                  </motion.button>
                </Link>
              </motion.div>

              {/* Live deployments social proof — driven by real project data */}
              {projects.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                  className="mt-12 flex items-center justify-center gap-4 flex-wrap"
                >
                  <div className="flex -space-x-3">
                    {projects.slice(0, 5).map((p, i) => (
                      <div
                        key={p.id}
                        className="w-12 h-12 rounded-full border-2 border-white/70 overflow-hidden shadow-lg bg-[#000080]"
                        style={{ zIndex: 5 - i }}
                      >
                        <BrandAvatar project={p} index={i} className="w-full h-full" textClass="text-base" />
                      </div>
                    ))}
                  </div>
                  <div className="text-left">
                    <div className="flex items-center gap-1.5 text-white font-bold">
                      <span className="w-2 h-2 rounded-full bg-[#00A651] animate-pulse" />
                      {projects.length}+ live deployments
                    </div>
                    <div className="text-white/70 text-sm">Shipped &amp; running in production</div>
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        </section>

        {/* Stats Bar */}
        <section className="py-12 bg-gray-50 border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
            <div className="grid grid-cols-2 gap-8 max-w-md mx-auto">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-4xl md:text-5xl font-black text-[#0818A8] mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm md:text-base text-black/80 font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Filter Section */}
        {filterCategories.length > 2 && (
          <section id="projects" className="py-8 bg-white sticky top-0 z-40 border-b border-gray-200 shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
              <div className="flex items-center gap-4 mb-4">
                <Filter size={20} className="text-black/80" />
                <span className="text-sm font-bold text-gray-900 uppercase tracking-wider">
                  Filter by Stack
                </span>
              </div>
              <div className="flex flex-wrap gap-3">
                {filterCategories.map((category) => (
                  <motion.button
                    key={category.id}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setActiveFilter(category.id)}
                    className={`flex items-center gap-2 px-5 py-3 font-semibold rounded-lg transition-all ${
                      activeFilter === category.id
                        ? 'bg-[#0818A8] text-white shadow-lg'
                        : 'bg-gray-100 text-black/80 hover:bg-gray-200'
                    }`}
                  >
                    {category.label}
                    <span className="text-sm opacity-75">({category.count})</span>
                  </motion.button>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Projects Grid */}
        <section id={filterCategories.length > 2 ? undefined : 'projects'} className="py-20 md:py-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeFilter}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {filtered.map((project, index) => (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                    whileHover={{ y: -8 }}
                    onClick={() => setSelected(project)}
                    className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all cursor-pointer border-2 border-gray-100 hover:border-[#0818A8] flex flex-col"
                  >
                    {/* Live embedded preview of the real website hero */}
                    <div className="relative h-52 overflow-hidden bg-gray-100">
                      <div className="absolute inset-0 transition-transform duration-500 group-hover:scale-105">
                        <LivePreview project={project} index={index} />
                      </div>
                      <div className="absolute top-4 left-4 px-3 py-1 bg-[#00A651] text-white rounded-full text-xs font-bold flex items-center gap-1.5 shadow-lg">
                        <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                        LIVE
                      </div>
                      <div className="absolute top-4 right-4 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-bold text-gray-900 flex items-center gap-1.5">
                        <Code2 size={13} strokeWidth={2.5} />
                        {project.language}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 flex flex-col flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-[#0818A8] transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-black/70 text-sm leading-relaxed mb-4 line-clamp-2 flex-1">
                        {project.description}
                      </p>

                      <div className="flex items-center gap-2 text-[#4682B4] font-semibold text-sm mb-5">
                        <Globe size={15} strokeWidth={2.5} />
                        <span className="truncate">{hostOf(project.homepage)}</span>
                      </div>

                      <div className="flex items-center gap-3 mt-auto">
                        <a
                          href={project.homepage}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-[#0818A8] text-white font-bold text-sm rounded-lg hover:bg-[#000080] transition-colors"
                        >
                          Visit Site
                          <ArrowUpRight size={16} strokeWidth={3} />
                        </a>
                        <a
                          href={project.repoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          aria-label={`${project.title} source code`}
                          className="flex items-center justify-center w-11 h-11 bg-gray-100 text-gray-900 rounded-lg hover:bg-gray-200 transition-colors"
                        >
                          <Github size={18} strokeWidth={2} />
                        </a>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>

            {filtered.length === 0 && (
              <p className="text-center text-black/60 py-20">No projects in this category yet.</p>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 md:py-28 bg-gradient-to-br from-[#0818A8] via-[#000080] to-[#0818A8] text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-12 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-6xl font-black mb-6">
                Ready to Be Our <span className="text-[#4682B4]">Next Success Story?</span>
              </h2>
              <p className="text-xl mb-12 text-white/90">
                Join the growing list of businesses that have transformed their digital presence with BitLayerx
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <motion.button
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-12 py-5 bg-white text-[#0818A8] font-black text-xl rounded-xl shadow-2xl flex items-center gap-3 justify-center"
                  >
                    Start Your Project
                    <ArrowRight size={24} strokeWidth={3} />
                  </motion.button>
                </Link>
                <Link href="/packages">
                  <motion.button
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-12 py-5 bg-transparent text-white font-bold text-xl rounded-xl border-2 border-white hover:bg-white/10 transition-all"
                  >
                    View Packages
                  </motion.button>
                </Link>
              </div>

              <div className="mt-12 flex items-center justify-center gap-8 text-white/80 flex-wrap">
                <div className="flex items-center gap-2"><CheckCircle size={20} /><span className="text-sm">Free Consultation</span></div>
                <div className="flex items-center gap-2"><CheckCircle size={20} /><span className="text-sm">Custom Proposal</span></div>
                <div className="flex items-center gap-2"><CheckCircle size={20} /><span className="text-sm">Transparent Pricing</span></div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto relative"
            >
              <button
                onClick={() => setSelected(null)}
                className="absolute top-6 right-6 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-100 transition-colors z-10"
              >
                <X size={24} strokeWidth={2} />
              </button>

              {/* Live embedded preview of the real website hero */}
              <div className="relative h-72 md:h-80 overflow-hidden bg-gray-100">
                <LivePreview project={selected} index={0} />
                <div className="absolute top-6 left-6 px-3 py-1 bg-[#00A651] text-white rounded-full text-xs font-bold flex items-center gap-1.5 shadow-lg">
                  <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                  LIVE DEPLOYMENT
                </div>
              </div>

              <div className="p-8 md:p-12">
                <div className="flex flex-wrap items-center gap-3 mb-6">
                  <span className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#0818A8]/10 text-[#0818A8] text-sm font-bold rounded-full">
                    <Code2 size={15} strokeWidth={2.5} /> {selected.language}
                  </span>
                  {formatDate(selected.updatedAt) && (
                    <span className="inline-flex items-center gap-1.5 px-4 py-2 bg-gray-100 text-black/70 text-sm font-bold rounded-full">
                      <Calendar size={15} strokeWidth={2.5} /> Updated {formatDate(selected.updatedAt)}
                    </span>
                  )}
                  {selected.stars > 0 && (
                    <span className="inline-flex items-center gap-1.5 px-4 py-2 bg-gray-100 text-black/70 text-sm font-bold rounded-full">
                      <Star size={15} strokeWidth={2.5} /> {selected.stars}
                    </span>
                  )}
                </div>

                <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
                  {selected.title}
                </h2>
                <p className="text-lg text-black/75 leading-relaxed mb-6">{selected.description}</p>

                <div className="flex items-center gap-2 text-[#4682B4] font-semibold mb-8">
                  <Globe size={18} strokeWidth={2.5} />
                  <a href={selected.homepage} target="_blank" rel="noopener noreferrer" className="hover:underline break-all">
                    {hostOf(selected.homepage)}
                  </a>
                </div>

                {selected.topics?.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-8">
                    {selected.topics.map((t) => (
                      <span key={t} className="px-3 py-1 bg-gray-100 text-black/80 text-sm font-semibold rounded-full">
                        #{t}
                      </span>
                    ))}
                  </div>
                )}

                <div className="flex flex-col sm:flex-row gap-4">
                  <a href={selected.homepage} target="_blank" rel="noopener noreferrer" className="flex-1">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full py-4 bg-gradient-to-r from-[#0818A8] to-[#000080] text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2"
                    >
                      Visit Live Site <ExternalLink size={18} strokeWidth={2.5} />
                    </motion.button>
                  </a>
                  <a href={selected.repoUrl} target="_blank" rel="noopener noreferrer" className="flex-1">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full py-4 bg-white text-[#0818A8] font-bold rounded-xl border-2 border-[#0818A8] hover:bg-[#0818A8] hover:text-white transition-all flex items-center justify-center gap-2"
                    >
                      <Github size={18} strokeWidth={2} /> View Source
                    </motion.button>
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
