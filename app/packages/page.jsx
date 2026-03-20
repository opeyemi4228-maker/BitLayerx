'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

export default function BitLayerxPackagesPage() {
  const [billingCycle, setBillingCycle] = useState('project'); // project or monthly
  const [activeTab, setActiveTab] = useState('all');

  const packageCategories = [
    { id: 'all', label: 'All Packages' },
    { id: 'core', label: 'Core Packages' },
    { id: 'marketing', label: 'Marketing' },
    { id: 'design', label: 'Design' }
  ];

  const corePackages = [
    {
      id: 'starter',
      category: 'core',
      name: 'Digital Growth Starter',
      tagline: 'Optimize Your Digital Presence',
      price: { project: '₦1.5M - ₦3M', monthly: null },
      priceUK: { project: '£2,500 - £5,000', monthly: null },
      timeline: '3-4 weeks',
      bestFor: 'SMEs & Growth-Stage Businesses',
      description: 'Transform your underperforming website into a conversion machine',
      features: [
        'Comprehensive Website Audit',
        'UX/UI Improvements',
        'Mobile Optimization',
        'Foundational SEO Setup',
        'Analytics & Tracking',
        'Performance Optimization',
        'Content Strategy Framework'
      ],
      outcomes: [
        '20-50% increase in conversion rate',
        'Faster, cleaner website',
        'Better search visibility',
        'Actionable analytics'
      ],
      popular: false
    },
    {
      id: 'authority',
      category: 'core',
      name: 'Brand Authority & Visibility',
      tagline: 'Command Attention. Build Trust.',
      price: { project: '₦4M - ₦8M', monthly: null },
      priceUK: { project: '£7,500 - £15,000', monthly: null },
      timeline: '5-8 weeks',
      bestFor: 'Ambitious Brands Ready to Lead',
      description: 'Look like the market leader with video, brand strategy & web excellence',
      features: [
        'Brand Strategy & Identity',
        'Professional Video Production',
        'Website Redesign/Enhancement',
        'Social Media Video Assets',
        'Content Marketing Foundation',
        'Brand Guidelines Document',
        'Visual Storytelling System'
      ],
      outcomes: [
        'Strong brand credibility',
        'Higher engagement rates',
        'Clear market differentiation',
        'Professional visual presence'
      ],
      popular: true
    },
    {
      id: 'automation',
      category: 'core',
      name: 'AI Business Automation',
      tagline: 'Scale Without Scaling Costs',
      price: { project: '₦2M - ₦5M', monthly: null },
      priceUK: { project: '£4,000 - £10,000', monthly: null },
      timeline: '4-6 weeks',
      bestFor: 'Companies Ready to Automate',
      description: 'Reduce costs 30-50% with intelligent automation',
      features: [
        'AI Chatbot Development',
        'Lead Qualification System',
        'CRM Integration',
        'Workflow Automation',
        'Custom AI Solutions',
        'Training & Documentation',
        '3 Months Support Included'
      ],
      outcomes: [
        '30-50% cost reduction',
        'Faster response times',
        'Higher conversion rates',
        'Scalable operations'
      ],
      popular: false
    },
    {
      id: 'partner',
      category: 'core',
      name: 'Full Digital Partner',
      tagline: 'Your Dedicated Digital Team',
      price: { project: null, monthly: '₦800k - ₦2M+/mo' },
      priceUK: { project: null, monthly: '£2,500 - £6,000+/mo' },
      timeline: 'Ongoing',
      bestFor: 'Companies Wanting Complete Outsourcing',
      description: 'One trusted partner for all digital needs—no vendor chaos',
      features: [
        'End-to-End Website Management',
        'Continuous Branding & Content',
        'Ongoing Video Production',
        'Technical & IT Support',
        'Strategic Growth Guidance',
        'Dedicated Account Manager',
        'Priority Support & Execution'
      ],
      outcomes: [
        'One partner vs 5+ vendors',
        'Faster execution',
        'Consistent quality',
        'Strategic alignment'
      ],
      popular: false
    }
  ];

  const marketingPackages = [
    {
      id: 'social',
      category: 'marketing',
      name: 'Social Media Management',
      price: { project: null, monthly: '₦200k - ₦500k/mo' },
      priceUK: { project: null, monthly: '£500 - £1,500/mo' },
      timeline: 'Monthly Retainer',
      features: [
        'Content Strategy & Calendar',
        'Daily Posting (2-3 platforms)',
        'Community Management',
        'Monthly Analytics Reports',
        'Hashtag Research',
        'Engagement Optimization'
      ]
    },
    {
      id: 'ads',
      category: 'marketing',
      name: 'Paid Advertising',
      price: { project: null, monthly: '₦300k - ₦800k/mo' },
      priceUK: { project: null, monthly: '£800 - £2,500/mo' },
      timeline: 'Monthly + Ad Spend',
      features: [
        'Meta & Google Ads Setup',
        'Audience Targeting Strategy',
        'A/B Testing & Optimization',
        'Conversion Tracking',
        'Weekly Performance Reports',
        'Monthly Strategy Reviews'
      ]
    },
    {
      id: 'seo',
      category: 'marketing',
      name: 'Content & SEO',
      price: { project: null, monthly: '₦250k - ₦600k/mo' },
      priceUK: { project: null, monthly: '£600 - £2,000/mo' },
      timeline: 'Monthly Retainer',
      features: [
        'SEO Audit & Strategy',
        'Blog/Article Writing (4-8/mo)',
        'On-Page Optimization',
        'Technical SEO',
        'Backlink Strategy',
        'Monthly Ranking Reports'
      ]
    },
    {
      id: 'email',
      category: 'marketing',
      name: 'Email Marketing',
      price: { project: null, monthly: '₦150k - ₦400k/mo' },
      priceUK: { project: null, monthly: '£400 - £1,200/mo' },
      timeline: 'Monthly Retainer',
      features: [
        'Email Platform Setup',
        'List Segmentation',
        'Automated Sequences',
        'Newsletter Creation (2-4/mo)',
        'A/B Testing',
        'Performance Analytics'
      ]
    }
  ];

  const designPackages = [
    {
      id: 'identity',
      category: 'design',
      name: 'Brand Identity Design',
      price: { project: '₦500k - ₦1.5M', monthly: null },
      priceUK: { project: '£1,500 - £4,000', monthly: null },
      timeline: '2-3 weeks',
      features: [
        'Logo Design (3 concepts)',
        'Color Palette Development',
        'Typography Selection',
        'Brand Style Guide',
        'Business Card Design',
        'Social Media Templates',
        'All Source Files'
      ]
    },
    {
      id: 'collateral',
      category: 'design',
      name: 'Marketing Collateral',
      price: { project: null, monthly: '₦150k - ₦400k/mo' },
      priceUK: { project: null, monthly: '£400 - £1,200/mo' },
      timeline: 'Monthly Unlimited',
      features: [
        'Unlimited Design Requests',
        'Social Media Graphics',
        'Flyers & Posters',
        'Brochures & One-Pagers',
        'Email Graphics',
        'Web Banners',
        '2-3 Day Turnaround'
      ]
    },
    {
      id: 'video',
      category: 'design',
      name: 'Video Production',
      price: { project: '₦2M - ₦5M', monthly: null },
      priceUK: { project: '£5,000 - £12,000', monthly: null },
      timeline: '3-4 weeks',
      features: [
        'Brand/Commercial Video',
        'Professional Filming',
        'Scriptwriting Support',
        'Professional Editing',
        'Social Media Cuts',
        'Multiple Format Delivery',
        '2 Revision Rounds'
      ]
    }
  ];

  const allPackages = [...corePackages, ...marketingPackages, ...designPackages];
  const filteredPackages = activeTab === 'all' 
    ? allPackages 
    : allPackages.filter(pkg => pkg.category === activeTab);

  const comparisonFeatures = [
    { category: 'Core Services', features: [
      'Website Development/Optimization',
      'Brand Strategy & Identity',
      'Video Production',
      'AI Automation & Chatbots',
      'Technical Support'
    ]},
    { category: 'Marketing Services', features: [
      'Performance Marketing (Ads)',
      'Social Media Management',
      'SEO & Content Marketing',
      'Email Marketing Automation',
      'Analytics & Reporting'
    ]},
    { category: 'Support & Management', features: [
      'Dedicated Account Manager',
      'Priority Support',
      'Monthly Strategy Sessions',
      'Ongoing Optimization',
      'Training & Documentation'
    ]}
  ];

  const faqs = [
    {
      question: 'Can I combine multiple packages?',
      answer: 'Absolutely! Most clients combine packages for comprehensive solutions. For example, pairing Brand Authority with Social Media Management creates a powerful market presence. We offer package bundles with discounted pricing.'
    },
    {
      question: 'What payment plans do you offer?',
      answer: 'We offer flexible milestone-based payments. Typically 50% upfront, 30% at project midpoint, and 20% upon completion. Monthly retainers are billed at the beginning of each month. Custom payment plans available for enterprise clients.'
    },
    {
      question: 'How quickly can you start?',
      answer: 'Most projects kick off within 5-7 business days after contract signing. For urgent needs, we offer expedited onboarding (additional fee may apply). Monthly retainers can start as soon as the next billing cycle.'
    },
    {
      question: 'What happens if I need to pause or cancel?',
      answer: 'Project-based packages have clear milestones with defined exit points. Monthly retainers require 30 days notice for cancellation. We can pause retainers for up to 2 months without penalty, perfect for seasonal businesses.'
    },
    {
      question: 'Do you work with international clients?',
      answer: 'Yes! We serve clients across Nigeria, UK, and internationally. All packages are available globally with pricing adjusted for your region. We accommodate different time zones and work remotely with complete transparency.'
    },
    {
      question: 'What results can I expect?',
      answer: 'Typical results include 20-50% increase in website conversions, 30-50% reduction in operational costs through automation, and 250% average ROI across marketing campaigns. Specific KPIs are defined during strategy sessions.'
    }
  ];

  const testimonials = [
    {
      name: 'Chidi Okonkwo',
      company: 'TechHub Africa',
      role: 'CEO',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&q=80',
      package: 'Brand Authority Package',
      quote: 'BitLayerx transformed our entire digital presence. The video production was world-class, and our new website converts 3x better than before. Best investment we made this year.'
    },
    {
      name: 'Amara Johnson',
      company: 'FreshMart Nigeria',
      role: 'Marketing Director',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop&q=80',
      package: 'Full Digital Partner',
      quote: 'Having one partner instead of five vendors changed everything. Faster execution, consistent quality, and the strategic guidance helped us grow 200% this year.'
    },
    {
      name: 'David Adebayo',
      company: 'Lagos Financial Services',
      role: 'Operations Manager',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&q=80',
      package: 'AI Automation Package',
      quote: 'The AI chatbot reduced our customer service costs by 45% while improving response times. ROI was achieved in just 3 months. Incredible results.'
    }
  ];

  return (
    <div className="bg-white">
      {/* SEO Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "BitLayerx Packages & Pricing - Digital Solutions for Nigerian & UK Businesses",
            "description": "Transparent pricing for web development, AI automation, brand identity, and digital marketing. Pre-structured packages from ₦800k to ₦20M+ with proven ROI.",
            "url": "https://bitlayerx.com/packages",
            "publisher": {
              "@type": "Organization",
              "name": "BitLayerx",
              "url": "https://bitlayerx.com",
              "logo": "https://bitlayerx.com/logo.png"
            },
            "breadcrumb": {
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Home",
                  "item": "https://bitlayerx.com"
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": "Packages",
                  "item": "https://bitlayerx.com/packages"
                }
              ]
            },
            "mainEntity": {
              "@type": "FAQPage",
              "mainEntity": faqs.map(faq => ({
                "@type": "Question",
                "name": faq.question,
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": faq.answer
                }
              }))
            }
          }),
        }}
      />

      {/* IMPROVED HERO SECTION - Production Ready & SEO Optimized */}
      <section className="relative bg-gradient-to-br from-[#0818A8] via-[#000080] to-[#0818A8] pt-32 md:pt-40 pb-24 md:pb-32 overflow-hidden">
        {/* Enhanced Background Patterns */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Hexagon Grid Pattern */}
          <div className="absolute inset-0 opacity-[0.08]">
            <svg width="100%" height="100%">
              <defs>
                <pattern id="hexagons-hero" x="0" y="0" width="100" height="86.6" patternUnits="userSpaceOnUse">
                  <path 
                    d="M50 0 L93.3 25 L93.3 61.6 L50 86.6 L6.7 61.6 L6.7 25 Z" 
                    fill="none" 
                    stroke="white" 
                    strokeWidth="1.5"
                  />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#hexagons-hero)" />
            </svg>
          </div>

          {/* Circuit Pattern */}
          <div className="absolute inset-0 opacity-[0.05]">
            <svg width="100%" height="100%">
              <defs>
                <pattern id="circuit-hero" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
                  <circle cx="20" cy="20" r="2.5" fill="white"/>
                  <circle cx="180" cy="20" r="2.5" fill="white"/>
                  <circle cx="100" cy="100" r="2.5" fill="white"/>
                  <circle cx="20" cy="180" r="2.5" fill="white"/>
                  <circle cx="180" cy="180" r="2.5" fill="white"/>
                  <line x1="20" y1="20" x2="100" y2="100" stroke="white" strokeWidth="0.5"/>
                  <line x1="180" y1="20" x2="100" y2="100" stroke="white" strokeWidth="0.5"/>
                  <line x1="20" y1="180" x2="100" y2="100" stroke="white" strokeWidth="0.5"/>
                  <line x1="180" y1="180" x2="100" y2="100" stroke="white" strokeWidth="0.5"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#circuit-hero)" />
            </svg>
          </div>

          {/* Animated Gradient Orbs */}
          <motion.div
            animate={{
              y: [0, -40, 0],
              x: [0, 30, 0],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute top-20 right-[10%] w-[600px] h-[600px] rounded-full"
            style={{
              background: 'radial-gradient(circle, rgba(70, 130, 180, 0.15) 0%, transparent 70%)',
            }}
          />
          <motion.div
            animate={{
              y: [0, 50, 0],
              x: [0, -40, 0],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute bottom-20 left-[8%] w-[700px] h-[700px] rounded-full"
            style={{
              background: 'radial-gradient(circle, rgba(255, 255, 255, 0.08) 0%, transparent 70%)',
            }}
          />

          {/* Rotating Geometric Shapes */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute top-1/4 left-[12%] w-24 h-24 border-2 border-white/10"
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-1/3 right-[15%] w-20 h-20 border-2 border-[#4682B4]/15 rotate-45"
          />
          
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0818A8]/20"></div>
        </div>

        {/* Main Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="max-w-5xl mx-auto text-center">
            
            {/* Trust Badge with Animation */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
              className="inline-flex items-center gap-3 mb-8"
            >
              <motion.div
                animate={{ 
                  scale: [1, 1.2, 1],
                  rotate: [0, 10, -10, 0]
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <svg className="w-6 h-6 text-[#fbbf24]" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                </svg>
              </motion.div>
              <span className="px-5 py-2.5 bg-white/15 backdrop-blur-md text-white text-sm font-bold rounded-full border border-white/25 shadow-lg">
                Transparent Pricing • No Hidden Fees • 500+ Happy Clients
              </span>
            </motion.div>

            {/* Main Headline with Gradient Animation */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white mb-6 leading-[1.05] tracking-tight">
                <span className="block mb-3">Complete Digital</span>
                <span className="block">Solutions,</span>
                <span className="block bg-gradient-to-r from-[#4682B4] via-white to-[#4682B4] bg-clip-text text-transparent">
                  Clear Pricing
                </span>
              </h1>
            </motion.div>

            {/* Enhanced Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl sm:text-2xl md:text-3xl text-white/95 max-w-4xl mx-auto mb-10 leading-relaxed font-light"
            >
              Pre-structured packages designed to solve specific business challenges.{' '}
              <span className="font-semibold text-[#4682B4]">No surprises</span>,{' '}
              <span className="font-semibold text-[#4682B4]">no hidden fees</span>—just{' '}
              <span className="font-semibold text-white">measurable results</span>.
            </motion.p>

            {/* Value Props Pills */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-wrap gap-3 justify-center mb-12"
            >
              {[
                { icon: '✓', text: '30-Day Guarantee' },
                { icon: '⚡', text: 'Fast Delivery' },
                { icon: '🎯', text: 'Clear ROI' },
                { icon: '💰', text: 'Flexible Payment' }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.7 + index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="flex items-center gap-2 px-4 py-2.5 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full shadow-lg"
                >
                  <span className="text-lg">{item.icon}</span>
                  <span className="text-sm font-semibold text-white">{item.text}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* Enhanced CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
            >
              <Link href="#packages" className="w-full sm:w-auto">
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative px-12 py-5 bg-white text-[#0818A8] font-black text-lg rounded-xl transition-all duration-300 flex items-center gap-3 shadow-2xl shadow-black/30 overflow-hidden w-full sm:w-auto justify-center"
                >
                  <span className="relative z-10 flex items-center gap-3">
                    View Packages
                    <motion.svg 
                      className="w-5 h-5"
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                      fill="currentColor" 
                      viewBox="0 0 20 20"
                    >
                      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"/>
                    </motion.svg>
                  </span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-[#4682B4]/20 to-[#0818A8]/20 opacity-0 group-hover:opacity-100"
                    transition={{ duration: 0.3 }}
                  />
                </motion.button>
              </Link>

              <Link href="/contact" className="w-full sm:w-auto">
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-12 py-5 bg-transparent text-white font-bold text-lg rounded-xl border-2 border-white/40 hover:border-white hover:bg-white/10 backdrop-blur-sm transition-all duration-300 w-full sm:w-auto flex items-center gap-2 justify-center"
                >
                  Get Custom Quote
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                  </svg>
                </motion.button>
              </Link>
            </motion.div>

            {/* Social Proof Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 max-w-4xl mx-auto pt-12 border-t border-white/20"
            >
              {[
                { value: '500+', label: 'Projects Delivered' },
                { value: '₦50B+', label: 'Revenue Generated' },
                { value: '98%', label: 'Client Retention' },
                { value: '250%', label: 'Average ROI' }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 1.1 + index * 0.1 }}
                  whileHover={{ scale: 1.1, y: -5 }}
                  className="text-center group cursor-pointer"
                >
                  <motion.div 
                    className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-2 group-hover:text-[#4682B4] transition-colors"
                  >
                    {stat.value}
                  </motion.div>
                  <div className="text-sm md:text-base text-white/80 font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>

          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-xs font-bold text-white/60 uppercase tracking-wider">
            Scroll to Explore
          </span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2"
          >
            <motion.div 
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-3 bg-white rounded-full"
            />
          </motion.div>
        </motion.div>
      </section>

      {/* Trust Bar */}
      <section className="bg-gray-50 py-8 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-gray-700">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-[#4682B4]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
              </svg>
              <span className="font-semibold">No Hidden Fees</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-[#4682B4]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
              </svg>
              <span className="font-semibold">Flexible Payment Plans</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-[#4682B4]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
              </svg>
              <span className="font-semibold">30-Day Satisfaction Guarantee</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-[#4682B4]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
              </svg>
              <span className="font-semibold">500+ Happy Clients</span>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section id="packages" className="bg-white py-8 sticky top-0 z-40 border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex flex-wrap gap-3 justify-center">
            {packageCategories.map((category) => (
              <motion.button
                key={category.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveTab(category.id)}
                className={`px-6 py-3 font-semibold transition-all duration-300 ${
                  activeTab === category.id
                    ? 'bg-[#0818A8] text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.label}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Core Packages - Full Featured */}
      {(activeTab === 'all' || activeTab === 'core') && (
        <section className="py-20 lg:py-28">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl lg:text-5xl font-light text-gray-900 mb-4">
                Core <span className="font-bold text-[#0818A8]">Packages</span>
              </h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                Comprehensive solutions designed to solve specific business challenges
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-8 mb-16">
              {corePackages.map((pkg, index) => (
                <motion.div
                  key={pkg.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -8 }}
                  className={`relative bg-white border-2 p-8 lg:p-10 hover:shadow-2xl transition-all duration-300 ${
                    pkg.popular ? 'border-[#0818A8] shadow-lg' : 'border-gray-200'
                  }`}
                >
                  {pkg.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-6 py-2 bg-gradient-to-r from-[#0818A8] to-[#4682B4] text-white text-sm font-bold uppercase tracking-wider">
                      Most Popular
                    </div>
                  )}

                  <div className="mb-6">
                    <h3 className="text-3xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
                    <p className="text-lg text-[#4682B4] font-semibold mb-4">{pkg.tagline}</p>
                    <p className="text-gray-700 mb-6">{pkg.description}</p>
                    
                    <div className="flex items-baseline gap-2 mb-2">
                      <span className="text-4xl font-bold text-[#0818A8]">
                        {pkg.price.project || pkg.price.monthly}
                      </span>
                      {pkg.price.monthly && <span className="text-gray-600">/month</span>}
                    </div>
                    <div className="text-sm text-gray-600 mb-2">{pkg.priceUK.project || pkg.priceUK.monthly} (UK pricing)</div>
                    <div className="inline-block px-3 py-1 bg-gray-100 text-sm font-semibold text-gray-700 mb-6">
                      {pkg.timeline}
                    </div>
                  </div>

                  <div className="mb-6 p-4 bg-blue-50 border-l-4 border-[#0818A8]">
                    <p className="text-sm font-semibold text-gray-900 mb-1">Best For:</p>
                    <p className="text-sm text-gray-700">{pkg.bestFor}</p>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-bold text-gray-900 mb-3">What's Included:</h4>
                    <ul className="space-y-2">
                      {pkg.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <svg className="w-5 h-5 text-[#4682B4] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                          </svg>
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-8 p-4 bg-gray-50">
                    <h4 className="font-bold text-gray-900 mb-3">Expected Outcomes:</h4>
                    <ul className="space-y-2">
                      {pkg.outcomes.map((outcome, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <svg className="w-5 h-5 text-[#0818A8] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                          </svg>
                          <span className="text-gray-700 text-sm">{outcome}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex gap-3">
                    <Link href="/contact" className="flex-1">
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className={`w-full py-4 font-semibold transition-all duration-300 ${
                          pkg.popular
                            ? 'bg-gradient-to-r from-[#0818A8] to-[#4682B4] text-white hover:shadow-xl'
                            : 'bg-gray-900 text-white hover:bg-gray-800'
                        }`}
                      >
                        Get Started
                      </motion.button>
                    </Link>
                    <Link href={`/packages/${pkg.id}`}>
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="px-6 py-4 border-2 border-gray-300 text-gray-700 font-semibold hover:border-[#0818A8] hover:text-[#0818A8] transition-all duration-300"
                      >
                        Learn More
                      </motion.button>
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Marketing & Design Packages - Compact Grid */}
      {(activeTab === 'all' || activeTab === 'marketing' || activeTab === 'design') && (
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            {activeTab === 'marketing' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <h2 className="text-4xl lg:text-5xl font-light text-gray-900 mb-4">
                  Marketing <span className="font-bold text-[#0818A8]">Packages</span>
                </h2>
                <p className="text-lg text-gray-700">Monthly retainers for ongoing growth</p>
              </motion.div>
            )}

            {activeTab === 'design' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <h2 className="text-4xl lg:text-5xl font-light text-gray-900 mb-4">
                  Design <span className="font-bold text-[#0818A8]">Packages</span>
                </h2>
                <p className="text-lg text-gray-700">Professional graphics, brand, and video</p>
              </motion.div>
            )}

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {activeTab === 'all' && [...marketingPackages, ...designPackages].map((pkg, index) => (
                <PackageCard key={pkg.id} pkg={pkg} index={index} />
              ))}
              {activeTab === 'marketing' && marketingPackages.map((pkg, index) => (
                <PackageCard key={pkg.id} pkg={pkg} index={index} />
              ))}
              {activeTab === 'design' && designPackages.map((pkg, index) => (
                <PackageCard key={pkg.id} pkg={pkg} index={index} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Testimonials */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-light text-gray-900 mb-4">
              Client <span className="font-bold text-[#0818A8]">Success Stories</span>
            </h2>
            <p className="text-lg text-gray-700">Real results from real businesses</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-8 border-2 border-gray-200 hover:border-[#0818A8] hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-bold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.role}</div>
                    <div className="text-sm text-[#4682B4]">{testimonial.company}</div>
                  </div>
                </div>

                <p className="text-gray-700 leading-relaxed mb-4">"{testimonial.quote}"</p>

                <div className="text-xs text-gray-500 font-semibold uppercase tracking-wider">
                  Package: {testimonial.package}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-light text-gray-900 mb-4">
              Frequently Asked <span className="font-bold text-[#0818A8]">Questions</span>
            </h2>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.details
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group bg-white p-6 border-l-4 border-[#0818A8]"
              >
                <summary className="flex items-center justify-between cursor-pointer list-none font-bold text-lg text-gray-900 hover:text-[#0818A8] transition-colors">
                  <span>{faq.question}</span>
                  <svg className="w-6 h-6 group-open:rotate-180 transition-transform text-[#0818A8]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"/>
                  </svg>
                </summary>
                <p className="mt-4 text-gray-700 leading-relaxed">{faq.answer}</p>
              </motion.details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#000080] via-[#0818A8] to-[#4682B4]" />
        
        <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-12 text-center text-white">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl lg:text-6xl font-light mb-6 leading-tight"
          >
            Not Sure Which <span className="font-bold">Package?</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl mb-12 text-white/90"
          >
            Schedule a free consultation and we'll recommend the perfect solution for your goals
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.05, backgroundColor: '#ffffff', color: '#0818A8' }}
                whileTap={{ scale: 0.95 }}
                className="px-12 py-5 bg-white text-[#0818A8] text-xl font-bold transition-all duration-300"
              >
                Book Free Consultation
              </motion.button>
            </Link>
            
            <a href="https://wa.me/2348034567890">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-12 py-5 bg-transparent text-white text-xl font-bold border-2 border-white transition-all duration-300"
              >
                Chat on WhatsApp
              </motion.button>
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

// Compact Package Card Component
function PackageCard({ pkg, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      whileHover={{ y: -8 }}
      className="bg-white p-6 border-2 border-gray-200 hover:border-[#0818A8] hover:shadow-xl transition-all duration-300"
    >
      <h3 className="text-xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
      <div className="text-2xl font-bold text-[#0818A8] mb-1">
        {pkg.price.project || pkg.price.monthly}
      </div>
      <div className="text-xs text-gray-600 mb-4">{pkg.priceUK.project || pkg.priceUK.monthly}</div>
      <div className="text-sm text-gray-600 mb-4">{pkg.timeline}</div>

      <ul className="space-y-2 mb-6">
        {pkg.features.map((feature, idx) => (
          <li key={idx} className="flex items-start gap-2 text-sm">
            <svg className="w-4 h-4 text-[#4682B4] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
            </svg>
            <span className="text-gray-700">{feature}</span>
          </li>
        ))}
      </ul>

      <Link href="/contact">
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full py-3 bg-gray-900 text-white font-semibold hover:bg-[#0818A8] transition-all duration-300"
        >
          Get Started
        </motion.button>
      </Link>
    </motion.div>
  );
}