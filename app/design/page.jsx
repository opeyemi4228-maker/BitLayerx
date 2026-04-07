'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

export default function BitLayerxDesignPage() {
  const [activeFaq, setActiveFaq] = useState(null);

  const designServices = [
    {
      id: 'identity',
      title: 'Brand Identity Design',
      subtitle: 'Logo & Visual Systems',
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
      ),
      description: 'Build a professional brand identity that commands attention and trust—from logo design to complete visual systems.',
      longDescription: 'Your brand is more than a logo—it\'s the entire visual language that communicates who you are. Our brand identity service creates memorable, professional identities that differentiate you from competitors and build instant credibility. From initial concepts to complete brand guidelines, we ensure every visual element works together to tell your story.',
      features: [
        'Logo Design (3 unique concepts)',
        'Unlimited revisions on chosen concept',
        'Color Palette Development',
        'Typography Selection & Pairing',
        'Comprehensive Brand Style Guide (PDF)',
        'Business Card Design',
        'Letterhead & Email Signature',
        'Social Media Profile Images',
        'Brand Pattern/Texture Elements',
        'All Source Files (AI, PSD, SVG, PNG)',
        'File Formats for Print & Web',
        'Brand Usage Guidelines Document'
      ],
      benefits: [
        'Professional, memorable brand identity',
        'Consistent visual presence everywhere',
        'Increased brand recognition and trust',
        'Foundation for all future marketing',
        'Stand out from competitors',
        'Scalable across all mediums'
      ],
      pricing: {
        nigeria: '₦500k - ₦1.5M',
        uk: '£1,500 - £4,000'
      },
      deliverables: [
        'Primary logo + variations',
        'Brand color palette with codes',
        'Typography system',
        'Brand style guide (20-30 pages)',
        'Business stationery designs',
        'Social media templates',
        'All files in multiple formats'
      ],
      results: 'Professional brand that builds trust and increases perceived value by 40-60%',
      timeline: '2-3 weeks from kickoff to final delivery',
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1200&h=800&fit=crop&q=80',
      process: [
        { step: 'Discovery', desc: 'Brand questionnaire & competitor analysis' },
        { step: 'Concepts', desc: '3 unique logo directions presented' },
        { step: 'Refinement', desc: 'Unlimited revisions on chosen concept' },
        { step: 'Delivery', desc: 'Complete brand package & guidelines' }
      ]
    },
    {
      id: 'collateral',
      title: 'Marketing Collateral Design',
      subtitle: 'Unlimited Design Requests',
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
      ),
      description: 'Professional design on demand—unlimited requests for all your marketing materials with fast 2-3 day turnaround.',
      longDescription: 'Stop struggling with DIY design tools or waiting weeks for freelancers. Our unlimited design service gives you access to professional designers whenever you need them. Submit as many requests as you want, get high-quality designs back in 2-3 days, and never worry about design bottlenecks again. It\'s like having an in-house design team without the overhead.',
      features: [
        'Unlimited Design Requests (queue-based)',
        'Social Media Graphics (posts, stories, covers)',
        'Flyer & Poster Design',
        'Brochure & One-Pager Design',
        'Presentation Deck Templates',
        'Email Newsletter Graphics',
        'Web Banners & Display Ads',
        'Infographic Design',
        'Ebook & Report Design',
        'Menu & Price List Design',
        '2-3 Business Day Average Turnaround',
        'Unlimited Revisions'
      ],
      benefits: [
        'Always-ready professional marketing materials',
        'Faster campaign launches',
        'Consistent brand presentation',
        'No more design bottlenecks',
        'Predictable monthly cost',
        'Focus on strategy, not design execution'
      ],
      pricing: {
        nigeria: '₦150k - ₦400k/month',
        uk: '£400 - £1,200/month'
      },
      deliverables: [
        'Unlimited design requests',
        'Print-ready files (PDF, AI)',
        'Web-optimized files (PNG, JPG)',
        'Source files when needed',
        'Design revisions as needed',
        'Slack/Trello integration'
      ],
      results: '5-10x faster design turnaround, consistent brand quality, no design delays',
      timeline: 'Ongoing monthly service, 2-3 day turnaround per request',
      image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?w=1200&h=800&fit=crop&q=80',
      process: [
        { step: 'Submit', desc: 'Add requests via portal or email' },
        { step: 'Queue', desc: 'Requests processed in order' },
        { step: 'Design', desc: 'Professional design delivered in 2-3 days' },
        { step: 'Revise', desc: 'Unlimited revisions until perfect' }
      ]
    },
    {
      id: 'ad-creative',
      title: 'Ad Creative Design',
      subtitle: 'High-Converting Visuals',
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
      ),
      description: 'Scroll-stopping ad creative that drives clicks and conversions across Meta, Google, LinkedIn, and TikTok.',
      longDescription: 'Your ads are competing with thousands of others for attention. Generic creative won\'t cut it. Our ad creative service combines data-driven design with psychological triggers to create ads that stop the scroll, grab attention, and drive action. We create platform-specific creative optimized for each channel\'s best practices and constantly test variations to maximize performance.',
      features: [
        'Ad Creative Strategy & Concepts',
        'Static Ad Designs (all platform formats)',
        'Animated/Motion Graphics Ads',
        'Carousel Ad Designs',
        'Video Ad Editing & Production',
        'Landing Page Design (if needed)',
        'A/B Testing Creative Variations',
        'Platform-Specific Optimization',
        'Meta Ads (Facebook/Instagram)',
        'Google Display Ads',
        'LinkedIn Ads',
        'TikTok Ads',
        'Performance-Based Iteration'
      ],
      benefits: [
        'Higher click-through rates (CTR)',
        'Lower cost per click (CPC)',
        'Better ad performance and ROAS',
        'Scroll-stopping creative that converts',
        'Platform-optimized designs',
        'Data-driven improvements'
      ],
      pricing: {
        nigeria: '₦200k - ₦500k/month',
        uk: '£500 - £1,500/month'
      },
      deliverables: [
        'Monthly ad creative strategy',
        '10-20 ad variations per month',
        'All platform sizes & formats',
        'Static + animated options',
        'A/B testing recommendations',
        'Performance reports'
      ],
      results: 'Average 2-3x improvement in CTR, 30-40% reduction in CPC',
      timeline: 'Initial creative within 5-7 days, ongoing optimization',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=800&fit=crop&q=80',
      process: [
        { step: 'Strategy', desc: 'Analyze target audience & competitors' },
        { step: 'Create', desc: 'Design multiple ad variations' },
        { step: 'Test', desc: 'Launch A/B tests across platforms' },
        { step: 'Optimize', desc: 'Scale winners, eliminate losers' }
      ]
    },
    {
      id: 'print',
      title: 'Print & Large Format Design',
      subtitle: 'Physical Brand Presence',
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      ),
      description: 'Command attention in the physical world with professional print design—from business cards to billboards.',
      longDescription: 'Digital is essential, but physical materials still matter—especially for events, trade shows, retail, and local marketing. Our print design service ensures your brand looks just as good in the physical world as it does online. We handle everything from small-format business cards to large-format billboards, ensuring print-ready files that translate perfectly from screen to paper.',
      features: [
        'Billboard & Outdoor Advertising Design',
        'Trade Show Booth Graphics',
        'Banners & Signage (all sizes)',
        'Vehicle Wraps & Decals',
        'Point-of-Sale Displays',
        'Magazine/Newspaper Ads',
        'Print Catalog Design',
        'Packaging Design (boxes, bags, labels)',
        'Print-Ready Files with Bleed & Specs',
        'CMYK Color Conversion',
        'Printer Coordination (if needed)',
        'Material Recommendations'
      ],
      benefits: [
        'Maximum visibility at physical locations',
        'Professional impression at events',
        'Seamless brand experience offline',
        'Higher foot traffic and inquiries',
        'Print-ready files that work first time',
        'No costly printing mistakes'
      ],
      pricing: {
        nigeria: '₦100k - ₦500k per project',
        uk: '£300 - £1,500 per project'
      },
      deliverables: [
        'Print-ready PDF files',
        'Files with proper bleed & trim marks',
        'CMYK color profiles',
        'Multiple size variations',
        'Mockups for visualization',
        'Printer specifications document'
      ],
      results: 'Professional physical materials that match digital quality, 100% print-ready',
      timeline: '1-2 weeks depending on project complexity',
      image: 'https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?w=1200&h=800&fit=crop&q=80',
      process: [
        { step: 'Specs', desc: 'Gather size, material & printer requirements' },
        { step: 'Design', desc: 'Create print-optimized designs' },
        { step: 'Proof', desc: 'Digital mockups for approval' },
        { step: 'Files', desc: 'Print-ready files with specifications' }
      ]
    }
  ];

  const faqs = [
    {
      question: 'What\'s the difference between Brand Identity and Marketing Collateral?',
      answer: 'Brand Identity is a one-time project that creates your core visual system (logo, colors, fonts, guidelines). Marketing Collateral is an ongoing monthly service for creating individual marketing materials using that brand system. Most clients start with Brand Identity, then add Collateral for ongoing needs.'
    },
    {
      question: 'How does the unlimited design service work?',
      answer: 'Submit as many design requests as you want through our portal. We process them one at a time (or two for higher tiers) with 2-3 day turnaround each. Unlimited revisions until you\'re happy. Pause or cancel anytime with 30 days notice.'
    },
    {
      question: 'Do you provide the source files?',
      answer: 'Yes! All projects include source files in appropriate formats: AI, PSD, SVG for editable files; PNG, JPG, PDF for final files. You own all the work we create for you.'
    },
    {
      question: 'Can you work with our existing brand guidelines?',
      answer: 'Absolutely! If you already have brand guidelines, we\'ll follow them precisely. If they need updating or expansion, we can help with that too.'
    },
    {
      question: 'What if we need print production help?',
      answer: 'We provide 100% print-ready files and can recommend trusted printers. For an additional fee, we can coordinate directly with your printer to ensure perfect results.'
    },
    {
      question: 'Do you offer logo redesign for existing businesses?',
      answer: 'Yes! We call this a brand refresh. We\'ll modernize your existing identity while maintaining brand equity and recognition. Great for businesses that have outgrown their original logo.'
    }
  ];

  const portfolio = [
    {
      category: 'Brand Identity',
      client: 'TechHub Africa',
      image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?w=600&h=400&fit=crop&q=80',
      description: 'Complete rebrand for Nigeria\'s leading tech incubator'
    },
    {
      category: 'Marketing Collateral',
      client: 'FreshMart',
      image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=600&h=400&fit=crop&q=80',
      description: 'Monthly design support for social media & campaigns'
    },
    {
      category: 'Ad Creative',
      client: 'Lagos Financial',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop&q=80',
      description: 'High-converting ad campaigns across Meta & Google'
    },
    {
      category: 'Print Design',
      client: 'Heritage Hotels',
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&h=400&fit=crop&q=80',
      description: 'Large-format signage and environmental graphics'
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#000080] via-[#0818A8] to-[#4682B4] py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'linear-gradient(30deg, white 12%, transparent 12.5%, transparent 87%, white 87.5%, white), linear-gradient(150deg, white 12%, transparent 12.5%, transparent 87%, white 87.5%, white)',
            backgroundSize: '80px 140px'
          }}></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block px-6 py-2 bg-white/20 backdrop-blur-sm text-white text-sm font-bold uppercase tracking-wider mb-8"
            >
              Graphics & Branding
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl lg:text-7xl font-light text-white mb-6 leading-tight"
            >
              Design That{' '}
              <span className="font-bold">Commands Attention</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl lg:text-2xl text-white/90 leading-relaxed mb-12"
            >
              From brand identities that build trust to marketing materials that convert—professional design that elevates your business.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link href="#services">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-10 py-4 bg-white text-[#0818A8] text-lg font-semibold"
                >
                  View Design Services
                </motion.button>
              </Link>
              
              <Link href="/portfolio">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-10 py-4 bg-transparent text-white text-lg font-semibold border-2 border-white"
                >
                  See Our Work
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Quick Nav */}
      <section className="bg-gray-50 py-6 sticky top-20 z-40 border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex flex-wrap gap-3 justify-center">
            {designServices.map((service) => (
              <a
                key={service.id}
                href={`#${service.id}`}
                className="px-6 py-3 bg-white text-black/80 font-semibold hover:bg-[#0818A8] hover:text-white transition-all duration-300 text-sm"
              >
                {service.title}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Design Services Sections */}
      {designServices.map((service, index) => (
        <section
          key={service.id}
          id={service.id}
          className={`py-20 lg:py-28 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}
        >
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Content */}
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className={index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}
              >
                <svg className="w-16 h-16 text-[#0818A8] mb-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  {service.icon}
                </svg>

                <h2 className="text-4xl lg:text-5xl font-light text-gray-900 mb-4 leading-tight">
                  {service.title}
                </h2>
                <p className="text-xl text-[#4682B4] font-semibold mb-6">{service.subtitle}</p>
                
                <p className="text-lg text-black/80 leading-relaxed mb-8">
                  {service.longDescription}
                </p>

                {/* Pricing */}
                <div className="mb-8 p-6 bg-gradient-to-r from-[#0818A8]/10 to-[#4682B4]/10 border-l-4 border-[#0818A8]">
                  <div className="text-sm text-black/80 mb-2">Investment</div>
                  <div className="text-3xl font-bold text-[#0818A8] mb-2">{service.pricing.nigeria}</div>
                  <div className="text-sm text-black/80">{service.pricing.uk} (UK pricing)</div>
                </div>

                {/* Process */}
                <div className="mb-8">
                  <h4 className="font-bold text-gray-900 mb-4">Our Process:</h4>
                  <div className="grid grid-cols-2 gap-4">
                    {service.process.map((step, idx) => (
                      <div key={idx} className="flex gap-3">
                        <div className="flex-shrink-0 w-8 h-8 bg-[#0818A8] text-white rounded-full flex items-center justify-center font-bold text-sm">
                          {idx + 1}
                        </div>
                        <div>
                          <div className="font-semibold text-gray-900 text-sm">{step.step}</div>
                          <div className="text-xs text-black/80">{step.desc}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <Link href="/contact">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="px-10 py-4 bg-gradient-to-r from-[#0818A8] to-[#4682B4] text-white text-lg font-semibold hover:shadow-xl transition-all duration-300"
                  >
                    Get Started
                  </motion.button>
                </Link>
              </motion.div>

              {/* Image */}
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className={index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}
              >
                <div className="relative h-[600px] overflow-hidden shadow-2xl">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Deliverables Card */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                  className="mt-8 bg-white p-6 border-2 border-gray-200"
                >
                  <h4 className="font-bold text-gray-900 mb-4">What You'll Receive:</h4>
                  <ul className="space-y-2">
                    {service.deliverables.slice(0, 4).map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-black/80">
                        <svg className="w-5 h-5 text-[#4682B4] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                  {service.deliverables.length > 4 && (
                    <div className="text-xs text-black/80 mt-3">+ {service.deliverables.length - 4} more deliverables</div>
                  )}
                </motion.div>
              </motion.div>
            </div>

            {/* Features Grid */}
            <div className="grid md:grid-cols-2 gap-12 mt-20">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Complete Features</h3>
                <ul className="grid grid-cols-1 gap-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-[#4682B4] flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                      </svg>
                      <span className="text-black/80">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Key Benefits</h3>
                <ul className="space-y-3">
                  {service.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-[#0818A8] flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                      </svg>
                      <span className="text-black/80">{benefit}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8 p-6 bg-gradient-to-br from-[#0818A8] to-[#4682B4] text-white">
                  <div className="flex items-start gap-3 mb-3">
                    <svg className="w-6 h-6 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                    </svg>
                    <div>
                      <div className="font-bold mb-1">Expected Results:</div>
                      <p className="text-white/90 text-sm">{service.results}</p>
                      <div className="mt-2 flex items-center gap-2 text-xs text-white/80">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"/>
                        </svg>
                        {service.timeline}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      ))}

      {/* Portfolio Showcase */}
      <section className="py-20 lg:py-28 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-light mb-4">
              Recent <span className="font-bold">Design Work</span>
            </h2>
            <p className="text-lg text-white/80">Real projects from real clients</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {portfolio.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="group cursor-pointer"
              >
                <div className="relative h-64 overflow-hidden mb-4">
                  <Image
                    src={item.image}
                    alt={item.client}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="text-sm text-[#4682B4] font-semibold mb-1">{item.category}</div>
                <div className="font-bold text-white mb-2">{item.client}</div>
                <div className="text-sm text-white/70">{item.description}</div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/portfolio">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-4 bg-white text-gray-900 font-semibold hover:bg-gray-100 transition-colors"
              >
                View Full Portfolio
              </motion.button>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-light text-gray-900 mb-4">
              Design <span className="font-bold text-[#0818A8]">FAQs</span>
            </h2>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white border-l-4 border-[#0818A8] p-6"
              >
                <button
                  onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                  className="w-full flex items-center justify-between text-left"
                >
                  <span className="font-bold text-lg text-gray-900 pr-4">{faq.question}</span>
                  <svg
                    className={`w-6 h-6 text-[#0818A8] flex-shrink-0 transition-transform ${
                      activeFaq === index ? 'rotate-180' : ''
                    }`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"/>
                  </svg>
                </button>
                {activeFaq === index && (
                  <motion.p
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mt-4 text-black/80 leading-relaxed"
                  >
                    {faq.answer}
                  </motion.p>
                )}
              </motion.div>
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
            Ready for <span className="font-bold">Professional Design?</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl mb-12 text-white/90"
          >
            Let's create something exceptional together
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
                Start Your Project
              </motion.button>
            </Link>
            
            <Link href="/portfolio">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-12 py-5 bg-transparent text-white text-xl font-bold border-2 border-white transition-all duration-300"
              >
                View Portfolio
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}