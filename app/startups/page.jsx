'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

export default function BitLayerxStartupsPage() {
  const [selectedStage, setSelectedStage] = useState('pre-seed');

  const startupStages = [
    { id: 'pre-seed', label: 'Pre-Seed/Idea', icon: '💡' },
    { id: 'seed', label: 'Seed Stage', icon: '🌱' },
    { id: 'series-a', label: 'Series A+', icon: '🚀' }
  ];

  const challenges = [
    {
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      ),
      title: 'Limited Budget',
      problem: 'Need professional quality but can\'t afford enterprise prices',
      solution: 'Startup-friendly pricing with payment plans that grow with you'
    },
    {
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      ),
      title: 'Need Speed',
      problem: 'Race against time to launch, validate, and secure next funding',
      solution: 'Rapid 2-4 week deployment with agile methodology'
    },
    {
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      ),
      title: 'Pivot Ready',
      problem: 'Business model might change as you learn and iterate',
      solution: 'Flexible architecture built for rapid changes and iterations'
    },
    {
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      ),
      title: 'Small Team',
      problem: 'Wearing multiple hats, no dedicated tech or marketing team',
      solution: 'We become your digital team—design, dev, marketing, all-in-one'
    }
  ];

  const packages = {
    'pre-seed': {
      name: 'Launch MVP',
      price: '₦800k - ₦2M',
      priceUK: '£1,500 - £4,000',
      timeline: '2-3 weeks',
      description: 'Get to market fast with a professional MVP',
      features: [
        'Landing page + waitlist',
        'Core product MVP (web/mobile)',
        'Basic brand identity (logo + colors)',
        'Payment integration',
        'Analytics setup',
        'Launch support',
        '1 month post-launch support'
      ],
      outcomes: [
        'Live product in 2-3 weeks',
        'Ready for user testing',
        'Investor-ready presentation',
        'Foundation for growth'
      ]
    },
    'seed': {
      name: 'Growth Package',
      price: '₦2.5M - ₦5M',
      priceUK: '£5,000 - £12,000',
      timeline: '4-6 weeks',
      description: 'Scale your validated idea with growth infrastructure',
      features: [
        'Full product development',
        'Professional brand identity',
        'Marketing automation setup',
        'User dashboard + analytics',
        'Email & SMS integration',
        'Payment & subscription system',
        'App store deployment',
        'Growth marketing foundation',
        '3 months support & iteration'
      ],
      outcomes: [
        'Production-ready platform',
        'Scalable to 10k+ users',
        'Automated marketing',
        'Ready for Series A metrics'
      ]
    },
    'series-a': {
      name: 'Scale Package',
      price: '₦5M - ₦15M',
      priceUK: '£12,000 - £35,000',
      timeline: '6-12 weeks',
      description: 'Enterprise-grade platform for rapid scaling',
      features: [
        'Scalable platform architecture',
        'Complete brand system',
        'Multi-channel marketing automation',
        'Advanced analytics & BI',
        'API development',
        'Mobile apps (iOS + Android)',
        'Team collaboration tools',
        'Security & compliance',
        'Dedicated support team',
        '6 months optimization & growth'
      ],
      outcomes: [
        'Handle 100k+ users',
        'Ready for international expansion',
        'Institutional-grade security',
        'Series B ready infrastructure'
      ]
    }
  };

  const successStories = [
    {
      startup: 'PayFlow',
      founder: 'Chioma Adeleke',
      stage: 'Pre-Seed → Seed (₦50M raise)',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&h=300&fit=crop&q=80',
      quote: 'BitLayerx got us from idea to live product in 3 weeks. We used that MVP to raise ₦50M seed round 2 months later.',
      results: '3 weeks to MVP, ₦50M raised, 5,000+ users in 6 months'
    },
    {
      startup: 'AgriConnect',
      founder: 'Tunde Okafor',
      stage: 'Seed → Series A (₦200M raise)',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=300&h=300&fit=crop&q=80',
      quote: 'They built our platform for 50,000 farmers. When we raised Series A, investors were impressed by our tech infrastructure.',
      results: 'Scaled to 50k users, ₦200M Series A, 200% MoM growth'
    },
    {
      startup: 'EduTech Nigeria',
      founder: 'Amara Ibrahim',
      stage: 'Bootstrapped → Profitable',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&h=300&fit=crop&q=80',
      quote: 'Started with ₦1.5M budget. Now we\'re profitable with 20,000 students. BitLayerx scaled with us every step.',
      results: '₦1.5M → ₦15M revenue, 20k students, profitable in 18 months'
    }
  ];

  const perks = [
    {
      icon: '💰',
      title: 'Startup Pricing',
      description: '40-60% off enterprise rates'
    },
    {
      icon: '⚡',
      title: 'Rapid Deployment',
      description: '2-4 week launch timelines'
    },
    {
      icon: '🔄',
      title: 'Equity Options',
      description: 'Consider equity + cash deals'
    },
    {
      icon: '📈',
      title: 'Growth as You Go',
      description: 'Pay more only as you scale'
    },
    {
      icon: '🎓',
      title: 'Founder Support',
      description: 'Pitch deck & investor materials'
    },
    {
      icon: '🤝',
      title: 'Startup Network',
      description: 'Access to investors & mentors'
    }
  ];

  const techStack = [
    'React/Next.js',
    'Node.js',
    'Python/Django',
    'React Native',
    'MongoDB/PostgreSQL',
    'AWS/Google Cloud',
    'Stripe/Paystack',
    'Firebase',
    'AI/ML Integration'
  ];

  const faqs = [
    {
      question: 'Can you work with equity instead of cash?',
      answer: 'Yes! For exceptional startups, we consider equity + reduced cash deals. Typical structure: 1-3% equity + 50% of our normal rate. We evaluate based on team, traction, and market opportunity.'
    },
    {
      question: 'What if we pivot after you build the MVP?',
      answer: 'We build for flexibility. Most MVPs can be adapted for 70-80% less cost than starting over. We also offer "pivot support" packages at discounted rates for existing clients.'
    },
    {
      question: 'How quickly can we actually launch?',
      answer: 'Landing page + waitlist: 3-5 days. Basic MVP: 2-3 weeks. Full product: 4-6 weeks. We use agile sprints and deploy weekly, so you see progress fast.'
    },
    {
      question: 'Do you help with pitch decks and investor materials?',
      answer: 'Yes! All startup packages include basic pitch deck design. We can also create detailed investor decks, one-pagers, and demo videos as add-ons.'
    },
    {
      question: 'What happens after the initial build?',
      answer: 'We offer ongoing support packages starting from ₦150k/month for maintenance, updates, and new features. Or pay-as-you-go for specific updates.'
    },
    {
      question: 'Can we start small and add features later?',
      answer: 'Absolutely! We recommend starting with core MVP, validating with users, then adding features based on real feedback. This saves money and builds the right product.'
    }
  ];

  const selectedPackage = packages[selectedStage];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#0818A8] via-[#4682B4] to-[#0818A8] py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }}></div>
        </div>

        {/* Animated elements */}
        <motion.div
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, 0]
          }}
          transition={{ duration: 6, repeat: Infinity }}
          className="absolute top-20 right-10 text-6xl opacity-20"
        >
          🚀
        </motion.div>
        
        <motion.div
          animate={{
            y: [0, 20, 0],
            rotate: [0, -5, 0]
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute bottom-20 left-10 text-6xl opacity-20"
        >
          💡
        </motion.div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-block px-6 py-2 bg-white/20 backdrop-blur-sm text-white text-sm font-bold uppercase tracking-wider mb-8"
            >
              Built for Startups 🚀
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight"
            >
              From <span className="text-[#f3f9ff]">Idea</span> to{' '}
              <span className="text-[#f0f8ff]">Launch</span> in Weeks
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl lg:text-2xl text-white/90 leading-relaxed mb-12"
            >
              MVP development, brand identity, and growth marketing for founders who move fast. Startup pricing, rapid deployment, built to scale.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link href="#packages">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-10 py-4 bg-white text-[#0818A8] text-lg font-bold shadow-xl"
                >
                  See Startup Packages
                </motion.button>
              </Link>
              
              <Link href="#success-stories">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-10 py-4 bg-transparent text-white text-lg font-bold border-2 border-white"
                >
                  Startup Success Stories
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Startup Challenges */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              We Get It. <span className="text-[#0818A8]">Startups Are Hard.</span>
            </h2>
            <p className="text-lg text-black/80 max-w-3xl mx-auto">
              We've worked with 100+ startups. Here's how we solve the challenges you're facing.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {challenges.map((challenge, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 border-l-4 border-[#0818A8] hover:shadow-xl transition-all duration-300"
              >
                <svg className="w-12 h-12 text-[#0818A8] mb-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  {challenge.icon}
                </svg>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{challenge.title}</h3>
                <div className="mb-4">
                  <div className="text-sm font-semibold text-red-600 mb-1">❌ Problem:</div>
                  <p className="text-black/80">{challenge.problem}</p>
                </div>
                <div>
                  <div className="text-sm font-semibold text-green-600 mb-1">✅ Our Solution:</div>
                  <p className="text-black/80 font-medium">{challenge.solution}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Startup Perks */}
      <section className="py-20 bg-gradient-to-br from-[#0818A8] to-[#4682B4] text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Startup Perks & Benefits
            </h2>
            <p className="text-xl text-white/90">
              Why 100+ startups choose BitLayerx
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {perks.map((perk, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-white/10 backdrop-blur-sm p-6 text-center"
              >
                <div className="text-5xl mb-4">{perk.icon}</div>
                <h3 className="text-xl font-bold mb-2">{perk.title}</h3>
                <p className="text-white/80">{perk.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages by Stage */}
      <section id="packages" className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Choose Your <span className="text-[#0818A8]">Startup Stage</span>
            </h2>
            <p className="text-lg text-black/80">
              Packages designed for where you are right now
            </p>
          </motion.div>

          {/* Stage Selector */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {startupStages.map((stage) => (
              <motion.button
                key={stage.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedStage(stage.id)}
                className={`px-8 py-4 font-bold text-lg transition-all duration-300 ${
                  selectedStage === stage.id
                    ? 'bg-[#0818A8] text-white shadow-lg scale-105'
                    : 'bg-gray-100 text-black/80 hover:bg-gray-200'
                }`}
              >
                {stage.icon} {stage.label}
              </motion.button>
            ))}
          </div>

          {/* Selected Package */}
          <motion.div
            key={selectedStage}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-gradient-to-br from-gray-50 to-white border-2 border-[#0818A8] p-10 lg:p-12 shadow-2xl">
              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold text-gray-900 mb-2">{selectedPackage.name}</h3>
                <p className="text-lg text-black/80 mb-6">{selectedPackage.description}</p>
                <div className="flex items-baseline justify-center gap-2 mb-2">
                  <span className="text-5xl font-bold text-[#0818A8]">{selectedPackage.price}</span>
                </div>
                <div className="text-sm text-black/80 mb-4">{selectedPackage.priceUK} (UK pricing)</div>
                <div className="inline-block px-4 py-2 bg-[#4682B4] text-white font-semibold">
                  ⚡ {selectedPackage.timeline} Timeline
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {/* Features */}
                <div>
                  <h4 className="font-bold text-gray-900 mb-4 text-xl">What You Get:</h4>
                  <ul className="space-y-3">
                    {selectedPackage.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <svg className="w-6 h-6 text-[#4682B4] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                        </svg>
                        <span className="text-black/80">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Outcomes */}
                <div>
                  <h4 className="font-bold text-gray-900 mb-4 text-xl">Expected Outcomes:</h4>
                  <ul className="space-y-3">
                    {selectedPackage.outcomes.map((outcome, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <svg className="w-6 h-6 text-[#0818A8] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                        </svg>
                        <span className="text-black/80 font-medium">{outcome}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="flex-1">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-4 bg-gradient-to-r from-[#0818A8] to-[#4682B4] text-white text-lg font-bold"
                  >
                    Get Started
                  </motion.button>
                </Link>
                <a href="https://wa.me/2348034567890" className="flex-1">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-4 bg-transparent text-[#0818A8] text-lg font-bold border-2 border-[#0818A8]"
                  >
                    Chat on WhatsApp
                  </motion.button>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Success Stories */}
      <section id="success-stories" className="py-20 lg:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Startups We've <span className="text-[#0818A8]">Helped Launch</span>
            </h2>
            <p className="text-lg text-black/80">
              Real founders, real results, real growth
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 hover:shadow-2xl transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-6">
                  <img
                    src={story.image}
                    alt={story.founder}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-bold text-gray-900">{story.founder}</div>
                    <div className="text-sm text-[#4682B4] font-semibold">{story.startup}</div>
                  </div>
                </div>

                <div className="inline-block px-3 py-1 bg-green-100 text-green-800 text-xs font-bold mb-4">
                  {story.stage}
                </div>

                <p className="text-black/80 italic mb-6 leading-relaxed">
                  "{story.quote}"
                </p>

                <div className="pt-4 border-t border-gray-200">
                  <div className="text-sm font-semibold text-gray-900 mb-2">Results:</div>
                  <p className="text-sm text-black/80">{story.results}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">Modern Tech Stack</h2>
            <p className="text-lg text-white/80">Built with the best tools for scalability</p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-4">
            {techStack.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.1 }}
                className="px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 font-semibold"
              >
                {tech}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 lg:py-28">
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Founder <span className="text-[#0818A8]">FAQs</span>
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
                className="bg-white p-6 border-l-4 border-[#0818A8] group"
              >
                <summary className="flex items-center justify-between cursor-pointer list-none font-bold text-lg text-gray-900">
                  <span>{faq.question}</span>
                  <svg className="w-6 h-6 group-open:rotate-180 transition-transform text-[#0818A8]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"/>
                  </svg>
                </summary>
                <p className="mt-4 text-black/80 leading-relaxed">{faq.answer}</p>
              </motion.details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0818A8] via-[#4682B4] to-[#0818A8]" />
        
        <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-12 text-center text-white">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-7xl mb-6"
          >
            🚀
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl lg:text-6xl font-bold mb-6 leading-tight"
          >
            Ready to Launch Your Startup?
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl mb-12 text-white/90"
          >
            Let's turn your idea into reality. Book a free founder consultation.
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
                className="px-12 py-5 bg-white text-[#0818A8] text-xl font-bold"
              >
                Book Founder Consultation
              </motion.button>
            </Link>
            
            <a href="https://wa.me/2348034567890">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-12 py-5 bg-transparent text-white text-xl font-bold border-2 border-white"
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