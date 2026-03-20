'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import {
  Target, Users, Zap, Award, TrendingUp, Globe, Heart,
  Rocket, Shield, Star, CheckCircle, ArrowRight, Quote,
  Lightbulb, Briefcase, Code, Palette, BarChart3, MessageCircle,
  Clock, ThumbsUp, Eye, Sparkles
} from 'lucide-react';

export default function AboutUsPage() {
  const [activeValue, setActiveValue] = useState(null);

  // Company Stats
  const stats = [
    { value: '500+', label: 'Projects Delivered', icon: Briefcase, color: 'from-[#0818A8] to-[#000080]' },
    { value: '₦50B+', label: 'Revenue Generated', icon: TrendingUp, color: 'from-[#00A651] to-[#00875a]' },
    { value: '98%', label: 'Client Retention', icon: Heart, color: 'from-[#dc2626] to-[#b91c1c]' },
    { value: '24', label: 'Countries Served', icon: Globe, color: 'from-[#4682B4] to-[#0818A8]' },
  ];

  // Core Values
  const coreValues = [
    {
      id: 1,
      icon: Target,
      title: 'Results-Driven',
      subtitle: 'Your success is our success',
      description: 'Every strategy, every line of code, every design decision is made with one goal: driving measurable business results. We don\'t just build—we build to win.',
      color: 'from-[#0818A8] to-[#000080]',
    },
    {
      id: 2,
      icon: Sparkles,
      title: 'Innovation First',
      subtitle: 'Always ahead of the curve',
      description: 'We leverage cutting-edge technology—AI, automation, advanced analytics—to give you a competitive edge. Your growth is powered by tomorrow\'s solutions, today.',
      color: 'from-[#fbbf24] to-[#f59e0b]',
    },
    {
      id: 3,
      icon: Shield,
      title: 'Transparency',
      subtitle: 'No smoke and mirrors',
      description: 'Clear pricing, honest timelines, real reporting. You always know what you\'re getting, when you\'re getting it, and exactly what it costs. No surprises.',
      color: 'from-[#4682B4] to-[#0818A8]',
    },
    {
      id: 4,
      icon: Users,
      title: 'Partnership Mindset',
      subtitle: 'We\'re in this together',
      description: 'You\'re not just a client—you\'re a partner. We invest in your success as if it were our own, providing strategic guidance that goes beyond the project scope.',
      color: 'from-[#00A651] to-[#00875a]',
    },
  ];

  // Team Members
  const team = [
    {
      name: 'Adewale Ogunleye',
      role: 'Founder & CEO',
      image: '👨🏿‍💼',
      bio: 'Serial entrepreneur with 15+ years building digital businesses across Africa.',
      expertise: ['Strategy', 'Business Growth', 'Leadership'],
    },
    {
      name: 'Chiamaka Nwosu',
      role: 'Chief Technology Officer',
      image: '👩🏿‍💻',
      bio: 'Former Google engineer specializing in AI/ML and scalable systems.',
      expertise: ['AI & Automation', 'Cloud Architecture', 'Technical Innovation'],
    },
    {
      name: 'Daniel Martinez',
      role: 'Creative Director',
      image: '👨🏽‍🎨',
      bio: 'Award-winning designer with work featured in Forbes and TechCrunch.',
      expertise: ['Brand Strategy', 'Video Production', 'UX/UI Design'],
    },
    {
      name: 'Fatima Abubakar',
      role: 'Head of Marketing',
      image: '👩🏾‍💼',
      bio: 'Growth hacker who scaled 3 startups to 7-figure revenue in 18 months.',
      expertise: ['Performance Marketing', 'SEO', 'Growth Strategy'],
    },
  ];

  // Company Timeline
  const timeline = [
    {
      year: '2020',
      title: 'The Beginning',
      description: 'Founded in Lagos with a mission to bridge Africa\'s digital divide. Started with just 3 people and a dream.',
      icon: Rocket,
    },
    {
      year: '2021',
      title: 'First 100 Clients',
      description: 'Reached our first major milestone. Expanded to serve businesses across Nigeria, Ghana, and Kenya.',
      icon: Users,
    },
    {
      year: '2022',
      title: 'International Expansion',
      description: 'Opened UK office. Started serving clients in Europe and North America. Team grew to 30+ professionals.',
      icon: Globe,
    },
    {
      year: '2023',
      title: 'Innovation Labs',
      description: 'Launched AI innovation division. Became the go-to partner for business automation in West Africa.',
      icon: Zap,
    },
    {
      year: '2024',
      title: 'Industry Recognition',
      description: 'Named "Top Digital Agency in Nigeria" by Tech Magazine. ₦50B+ in client revenue generated.',
      icon: Award,
    },
    {
      year: '2025',
      title: 'The Future',
      description: 'Scaling to serve 1,000+ businesses. Building the future of digital transformation in Africa.',
      icon: TrendingUp,
    },
  ];

  // Why Choose Us
  const whyChooseUs = [
    {
      icon: CheckCircle,
      title: 'Proven Track Record',
      description: '500+ successful projects with 98% client retention rate',
    },
    {
      icon: Zap,
      title: 'Fast Execution',
      description: 'Average project delivery 30% faster than industry standard',
    },
    {
      icon: Target,
      title: 'ROI Focused',
      description: 'Average 250% ROI across all marketing campaigns',
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'ISO certified with bank-grade data protection',
    },
    {
      icon: Users,
      title: 'Dedicated Support',
      description: '24/7 support with dedicated account managers',
    },
    {
      icon: Award,
      title: 'Industry Awards',
      description: 'Recognized by Forbes, TechCrunch, and Vogue Business',
    },
  ];

  // Client Testimonials
  const testimonials = [
    {
      quote: 'BitLayerx didn\'t just build us a website—they transformed our entire business model. Revenue tripled in 8 months.',
      author: 'Chidi Okonkwo',
      role: 'CEO',
      company: 'TechHub Lagos',
      image: '👨🏾‍💼',
    },
    {
      quote: 'The AI automation they built saved us ₦15M annually in operational costs. ROI was achieved in 90 days.',
      author: 'Amara Johnson',
      role: 'COO',
      company: 'FreshMart Nigeria',
      image: '👩🏽‍💼',
    },
    {
      quote: 'Working with BitLayerx feels like having an entire digital department in-house. Best partner we\'ve ever had.',
      author: 'David Adebayo',
      role: 'Marketing Director',
      company: 'Lagos Financial',
      image: '👨🏿‍💼',
    },
  ];

  return (
    <>
      {/* SEO Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AboutPage",
            "name": "About BitLayerx - Digital Growth Partner for African & Global Businesses",
            "description": "Learn about BitLayerx, the leading digital transformation partner serving 500+ businesses across 24 countries with web development, AI automation, and performance marketing.",
            "url": "https://bitlayerx.com/about",
            "mainEntity": {
              "@type": "Organization",
              "name": "BitLayerx",
              "url": "https://bitlayerx.com",
              "logo": "https://bitlayerx.com/logo.png",
              "foundingDate": "2020",
              "founders": [
                {
                  "@type": "Person",
                  "name": "Adewale Ogunleye"
                }
              ],
              "numberOfEmployees": "50+",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Lagos",
                "addressCountry": "NG"
              },
              "sameAs": [
                "https://twitter.com/bitlayerx",
                "https://linkedin.com/company/bitlayerx",
                "https://facebook.com/bitlayerx"
              ]
            }
          }),
        }}
      />

      <div className="bg-white">
        
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-[#0818A8] via-[#000080] to-[#0818A8] pt-32 md:pt-40 pb-24 md:pb-32 overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute inset-0 opacity-[0.08]">
              <svg width="100%" height="100%">
                <defs>
                  <pattern id="about-hexagons" x="0" y="0" width="100" height="86.6" patternUnits="userSpaceOnUse">
                    <path d="M50 0 L93.3 25 L93.3 61.6 L50 86.6 L6.7 61.6 L6.7 25 Z" fill="none" stroke="white" strokeWidth="1.5"/>
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#about-hexagons)" />
              </svg>
            </div>

            <motion.div
              animate={{ y: [0, -40, 0], x: [0, 30, 0] }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-20 right-[10%] w-[600px] h-[600px] rounded-full"
              style={{ background: 'radial-gradient(circle, rgba(70, 130, 180, 0.15) 0%, transparent 70%)' }}
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
                <Sparkles size={18} className="text-[#fbbf24]" strokeWidth={2.5} />
                <span>Trusted by 500+ Businesses • 24 Countries • ₦50B+ Revenue Generated</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white mb-6 leading-[1.05]"
              >
                <span className="block mb-3">Building Digital</span>
                <span className="block bg-gradient-to-r from-[#4682B4] via-white to-[#4682B4] bg-clip-text text-transparent">
                  Empires in Africa
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-xl sm:text-2xl md:text-3xl text-white/95 max-w-4xl mx-auto mb-12 leading-relaxed"
              >
                We're not just a digital agency—we're your growth partner. From Lagos to London, we help businesses <span className="font-bold text-[#4682B4]">transform</span>, <span className="font-bold text-[#4682B4]">scale</span>, and <span className="font-bold text-white">dominate</span> their markets.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
                <Link href="/contact">
                  <motion.button
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-10 py-5 bg-white text-[#0818A8] font-black text-lg rounded-xl shadow-2xl flex items-center gap-2 justify-center"
                  >
                    Start Your Project
                    <ArrowRight size={20} strokeWidth={3} />
                  </motion.button>
                </Link>
                <Link href="/portfolio">
                  <motion.button
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-10 py-5 bg-transparent text-white font-bold text-lg rounded-xl border-2 border-white/40 hover:border-white hover:bg-white/10 backdrop-blur-sm transition-all"
                  >
                    View Our Work
                  </motion.button>
                </Link>
              </motion.div>

            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-gray-50 border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -8 }}
                    className="text-center group cursor-pointer"
                  >
                    <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${stat.color} mb-4 group-hover:scale-110 transition-transform`}>
                      <Icon size={32} className="text-white" strokeWidth={2} />
                    </div>
                    <div className="text-4xl md:text-5xl font-black text-gray-900 mb-2 group-hover:text-[#0818A8] transition-colors">
                      {stat.value}
                    </div>
                    <div className="text-sm md:text-base text-gray-600 font-medium">
                      {stat.label}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-20 md:py-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <div className="inline-block px-4 py-2 bg-[#0818A8]/10 text-[#0818A8] text-sm font-bold rounded-full mb-6">
                  OUR STORY
                </div>
                <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
                  From Garage Startup to <span className="text-[#0818A8]">Industry Leader</span>
                </h2>
                <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                  <p>
                    BitLayerx started in 2020 with a simple observation: African businesses had world-class ambitions but lacked access to world-class digital solutions.
                  </p>
                  <p>
                    We set out to change that. From a small office in Lagos, we began building websites, automating processes, and running marketing campaigns that actually drove revenue—not just vanity metrics.
                  </p>
                  <p>
                    Today, we're proud to serve over 500 businesses across 24 countries, from ambitious startups to Fortune 500 companies. We've helped generate over ₦50 billion in client revenue and counting.
                  </p>
                  <p className="font-semibold text-[#0818A8]">
                    But we're just getting started. Our mission: to power Africa's digital revolution, one business at a time.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                <div className="aspect-square bg-gradient-to-br from-[#0818A8] to-[#4682B4] rounded-2xl p-8 flex items-center justify-center">
                  <div className="text-center text-white">
                    <Rocket size={120} strokeWidth={1.5} className="mx-auto mb-6 opacity-80" />
                    <div className="text-6xl font-black mb-4">2020</div>
                    <div className="text-2xl font-bold">Founded in Lagos</div>
                  </div>
                </div>
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#fbbf24] rounded-2xl flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-3xl font-black text-gray-900">500+</div>
                    <div className="text-xs font-bold text-gray-900">Clients</div>
                  </div>
                </div>
              </motion.div>

            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-20 md:py-28 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <div className="inline-block px-4 py-2 bg-[#0818A8]/10 text-[#0818A8] text-sm font-bold rounded-full mb-6">
                CORE VALUES
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
                What We <span className="text-[#0818A8]">Stand For</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                These aren't just words on a wall—they're the principles that guide every decision, every project, every client relationship.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {coreValues.map((value, index) => {
                const Icon = value.icon;
                return (
                  <motion.div
                    key={value.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -8 }}
                    onClick={() => setActiveValue(activeValue === value.id ? null : value.id)}
                    className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all cursor-pointer border-2 border-gray-100 hover:border-[#0818A8]"
                  >
                    <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${value.color} mb-6`}>
                      <Icon size={32} className="text-white" strokeWidth={2} />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{value.title}</h3>
                    <p className="text-lg text-[#4682B4] font-semibold mb-4">{value.subtitle}</p>
                    <p className="text-gray-700 leading-relaxed">{value.description}</p>
                  </motion.div>
                );
              })}
            </div>

          </div>
        </section>

        {/* Timeline */}
        <section className="py-20 md:py-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <div className="inline-block px-4 py-2 bg-[#0818A8]/10 text-[#0818A8] text-sm font-bold rounded-full mb-6">
                OUR JOURNEY
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
                The <span className="text-[#0818A8]">BitLayerx</span> Story
              </h2>
            </motion.div>

            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#0818A8] to-[#4682B4] hidden md:block"></div>

              <div className="space-y-12">
                {timeline.map((item, index) => {
                  const Icon = item.icon;
                  const isEven = index % 2 === 0;
                  
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6 }}
                      className={`relative grid md:grid-cols-2 gap-8 items-center ${
                        isEven ? '' : 'md:flex-row-reverse'
                      }`}
                    >
                      <div className={isEven ? 'md:text-right' : 'md:col-start-2'}>
                        <div className="inline-block px-4 py-2 bg-[#0818A8] text-white text-sm font-bold rounded-full mb-4">
                          {item.year}
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">{item.title}</h3>
                        <p className="text-gray-700 leading-relaxed">{item.description}</p>
                      </div>

                      {/* Center Icon */}
                      <div className="absolute left-1/2 -translate-x-1/2 w-16 h-16 bg-gradient-to-br from-[#0818A8] to-[#4682B4] rounded-full flex items-center justify-center shadow-lg hidden md:flex">
                        <Icon size={28} className="text-white" strokeWidth={2} />
                      </div>

                      <div className={isEven ? 'md:col-start-2' : ''}></div>
                    </motion.div>
                  );
                })}
              </div>
            </div>

          </div>
        </section>

        {/* Team */}
        <section className="py-20 md:py-28 bg-gradient-to-br from-gray-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <div className="inline-block px-4 py-2 bg-[#0818A8]/10 text-[#0818A8] text-sm font-bold rounded-full mb-6">
                LEADERSHIP TEAM
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
                Meet the <span className="text-[#0818A8]">Visionaries</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                World-class talent from Google, Forbes, and leading tech companies—united by one mission: your success.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -8 }}
                  className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all border-2 border-gray-100 hover:border-[#0818A8]"
                >
                  <div className="text-6xl mb-4 text-center">{member.image}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-1 text-center">{member.name}</h3>
                  <p className="text-[#4682B4] font-semibold mb-4 text-center">{member.role}</p>
                  <p className="text-sm text-gray-700 mb-4 text-center leading-relaxed">{member.bio}</p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {member.expertise.map((skill, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-semibold rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 md:py-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <div className="inline-block px-4 py-2 bg-[#0818A8]/10 text-[#0818A8] text-sm font-bold rounded-full mb-6">
                WHY BITLAYERX
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
                Why Businesses <span className="text-[#0818A8]">Trust Us</span>
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {whyChooseUs.map((reason, index) => {
                const Icon = reason.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    whileHover={{ y: -5 }}
                    className="flex gap-4"
                  >
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-gradient-to-br from-[#0818A8] to-[#4682B4] rounded-lg flex items-center justify-center">
                        <Icon size={24} className="text-white" strokeWidth={2} />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">{reason.title}</h3>
                      <p className="text-gray-600">{reason.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 md:py-28 bg-gradient-to-br from-[#0818A8] to-[#000080] text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-black mb-6">
                What Our <span className="text-[#4682B4]">Clients Say</span>
              </h2>
              <p className="text-xl text-white/90">Real results. Real businesses. Real impact.</p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20 hover:bg-white/15 transition-all"
                >
                  <Quote size={40} className="text-[#4682B4] mb-4" strokeWidth={1.5} />
                  <p className="text-white/95 leading-relaxed mb-6 text-lg">
                    "{testimonial.quote}"
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="text-4xl">{testimonial.image}</div>
                    <div>
                      <div className="font-bold text-white">{testimonial.author}</div>
                      <div className="text-sm text-white/70">{testimonial.role}, {testimonial.company}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 md:py-28 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-12 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-6">
                Ready to <span className="text-[#0818A8]">Transform</span> Your Business?
              </h2>
              <p className="text-xl text-gray-600 mb-12">
                Join 500+ businesses that trust BitLayerx to power their digital growth. Let's build something extraordinary together.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <motion.button
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-12 py-5 bg-gradient-to-r from-[#0818A8] to-[#000080] text-white font-black text-xl rounded-xl shadow-2xl flex items-center gap-3 justify-center"
                  >
                    Start Your Project
                    <ArrowRight size={24} strokeWidth={3} />
                  </motion.button>
                </Link>
                
                <Link href="/packages">
                  <motion.button
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-12 py-5 bg-white text-[#0818A8] font-bold text-xl rounded-xl border-2 border-[#0818A8] hover:bg-[#0818A8] hover:text-white transition-all"
                  >
                    View Packages
                  </motion.button>
                </Link>
              </div>

              <div className="mt-12 flex items-center justify-center gap-8 text-gray-500">
                <div className="flex items-center gap-2">
                  <Shield size={20} />
                  <span className="text-sm">ISO Certified</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award size={20} />
                  <span className="text-sm">Award Winning</span>
                </div>
                <div className="flex items-center gap-2">
                  <ThumbsUp size={20} />
                  <span className="text-sm">98% Retention</span>
                </div>
              </div>

            </motion.div>
          </div>
        </section>

      </div>
    </>
  );
}