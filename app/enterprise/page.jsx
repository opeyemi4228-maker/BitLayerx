'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

export default function BitLayerxEnterprisePage() {
  const [activeTab, setActiveTab] = useState('features');

  const enterpriseFeatures = [
    {
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      ),
      title: 'Dedicated Account Team',
      description: 'Your own relationship director, project manager, and specialist team working exclusively on your account.'
    },
    {
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      ),
      title: 'Enterprise-Grade Security',
      description: 'SOC 2 compliance, dedicated infrastructure, NDAs, IP protection, and advanced security protocols.'
    },
    {
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      ),
      title: 'Priority Support & SLA',
      description: '99.9% uptime guarantee, 2-hour response time, 24/7 dedicated support line, and custom SLAs.'
    },
    {
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      ),
      title: 'Custom Integrations',
      description: 'Seamless integration with your existing tech stack, CRM, ERP, and proprietary systems.'
    },
    {
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      ),
      title: 'White-Label Solutions',
      description: 'Rebrand our services as your own for seamless client delivery and partner programs.'
    },
    {
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
      ),
      title: 'Multi-Department Support',
      description: 'Dedicated resources for marketing, IT, operations, and executive teams with cross-functional collaboration.'
    }
  ];

  const solutions = [
    {
      title: 'Digital Transformation',
      description: 'Complete digital infrastructure overhaul for Fortune 500 companies',
      features: [
        'Enterprise web platforms',
        'Multi-site management',
        'Legacy system modernization',
        'Cloud migration strategies',
        'Change management support',
        'Executive dashboards & analytics'
      ],
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop&q=80'
    },
    {
      title: 'Enterprise Marketing Automation',
      description: 'Scalable marketing infrastructure across global markets',
      features: [
        'Multi-channel campaign orchestration',
        'Marketing automation platforms',
        'Account-based marketing (ABM)',
        'Marketing attribution modeling',
        'Compliance & governance',
        'Global brand consistency'
      ],
      image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop&q=80'
    },
    {
      title: 'AI & Process Automation',
      description: 'Intelligent automation that scales across your entire organization',
      features: [
        'Enterprise chatbot deployment',
        'Workflow automation at scale',
        'RPA integration',
        'Predictive analytics',
        'Custom AI model development',
        'ROI tracking & optimization'
      ],
      image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=600&fit=crop&q=80'
    }
  ];

  const caseStudies = [
    {
      company: 'Fortune 500 Financial Services',
      industry: 'Banking & Finance',
      challenge: 'Legacy website couldn\'t handle 2M+ monthly visitors, poor mobile experience, security vulnerabilities',
      solution: 'Enterprise-grade platform rebuild with microservices architecture, advanced security, and real-time analytics',
      results: [
        '99.99% uptime achieved',
        '60% increase in mobile conversions',
        '40% reduction in infrastructure costs',
        'SOC 2 & PCI DSS compliant'
      ],
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&h=400&fit=crop&q=80'
    },
    {
      company: 'Global Manufacturing Corporation',
      industry: 'Manufacturing',
      challenge: 'Disconnected marketing across 15 countries, inconsistent branding, manual processes',
      solution: 'Unified marketing platform, brand governance system, AI-powered automation for multi-market campaigns',
      results: [
        '70% reduction in campaign launch time',
        'Brand consistency across all markets',
        '$2M+ annual cost savings',
        '300% increase in marketing ROI'
      ],
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=400&fit=crop&q=80'
    },
    {
      company: 'International Retail Group',
      industry: 'Retail & E-commerce',
      challenge: 'Customer service overwhelmed with 50k+ inquiries monthly, long response times, high costs',
      solution: 'AI chatbot ecosystem with multi-language support, CRM integration, and intelligent routing',
      results: [
        '65% of inquiries fully automated',
        '2-minute average response time',
        '$3.5M annual cost reduction',
        '92% customer satisfaction score'
      ],
      image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=600&h=400&fit=crop&q=80'
    }
  ];

  const pricing = {
    starter: {
      name: 'Enterprise Foundation',
      price: 'From ₦5M/month',
      priceUK: 'From £12,000/month',
      description: 'For growing enterprises ready to scale',
      features: [
        'Dedicated account manager',
        'Up to 3 concurrent projects',
        'Standard SLA (4-hour response)',
        'Monthly strategy sessions',
        'All core services included',
        'Email & phone support'
      ]
    },
    growth: {
      name: 'Enterprise Plus',
      price: 'From ₦10M/month',
      priceUK: 'From £25,000/month',
      description: 'Most popular for established enterprises',
      features: [
        'Dedicated account team (3+ people)',
        'Unlimited concurrent projects',
        'Priority SLA (2-hour response)',
        'Weekly strategy sessions',
        'All services + custom development',
        '24/7 dedicated support line',
        'Quarterly business reviews',
        'White-label options'
      ],
      popular: true
    },
    custom: {
      name: 'Enterprise Custom',
      price: 'Custom Pricing',
      priceUK: 'Custom Pricing',
      description: 'For Fortune 500 & complex requirements',
      features: [
        'C-level dedicated relationship director',
        'Dedicated team of 10+ specialists',
        'Custom SLA (negotiable)',
        'On-site strategic planning',
        'Fully custom solutions',
        '24/7 priority support with escalation',
        'Monthly executive reviews',
        'Global multi-office support',
        'Master service agreements'
      ]
    }
  };

  const stats = [
    { value: '50+', label: 'Enterprise Clients', sublabel: 'Fortune 500 & Global Brands' },
    { value: '₦2B+', label: 'Revenue Generated', sublabel: 'For Enterprise Clients' },
    { value: '99.9%', label: 'Uptime SLA', sublabel: 'Across All Projects' },
    { value: '24/7', label: 'Support Available', sublabel: 'Dedicated Enterprise Team' }
  ];

  const whyEnterprise = [
    {
      title: 'We Understand Enterprise Complexity',
      description: 'Multi-stakeholder approval processes, compliance requirements, legacy system integration—we\'ve navigated it all for Fortune 500 companies.'
    },
    {
      title: 'Built for Scale',
      description: 'Our solutions handle millions of users, thousands of transactions, and global deployments without breaking a sweat.'
    },
    {
      title: 'Security & Compliance First',
      description: 'SOC 2, GDPR, PCI DSS compliance built-in. We understand regulatory requirements and data protection.'
    },
    {
      title: 'Predictable Outcomes',
      description: 'Clear roadmaps, fixed timelines, defined KPIs, and monthly reporting. No surprises, just results.'
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#000080] via-[#0818A8] to-[#000080] py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'repeating-linear-gradient(0deg, white, white 1px, transparent 1px, transparent 60px), repeating-linear-gradient(90deg, white, white 1px, transparent 1px, transparent 60px)',
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
              Enterprise Solutions
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl lg:text-7xl font-light text-white mb-6 leading-tight"
            >
              Digital Solutions Built for{' '}
              <span className="font-bold">Enterprise Scale</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl lg:text-2xl text-white/90 leading-relaxed mb-12"
            >
              Dedicated teams, enterprise-grade security, and proven solutions for Fortune 500 companies and global organizations.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link href="#contact-enterprise">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-10 py-4 bg-white text-[#0818A8] text-lg font-semibold"
                >
                  Schedule Consultation
                </motion.button>
              </Link>
              
              <Link href="#case-studies">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-10 py-4 bg-transparent text-white text-lg font-semibold border-2 border-white"
                >
                  View Case Studies
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-gray-900 py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#4682B4] to-white mb-2">
                  {stat.value}
                </div>
                <div className="text-white font-semibold mb-1">{stat.label}</div>
                <div className="text-sm text-gray-400">{stat.sublabel}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Enterprise Section */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-light text-gray-900 mb-6">
              Why <span className="font-bold text-[#0818A8]">Enterprise</span> Clients Choose Us
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              We're not just vendors—we're strategic partners built for enterprise complexity
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {whyEnterprise.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="p-8 bg-gradient-to-br from-gray-50 to-white border-2 border-gray-200 hover:border-[#0818A8] transition-all duration-300"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{item.title}</h3>
                <p className="text-gray-700 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enterprise Features */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-light text-gray-900 mb-6">
              Enterprise-Grade <span className="font-bold text-[#0818A8]">Features</span>
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Everything your organization needs to succeed at scale
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {enterpriseFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 hover:shadow-xl transition-all duration-300 border-l-4 border-transparent hover:border-[#0818A8]"
              >
                <svg className="w-12 h-12 text-[#0818A8] mb-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  {feature.icon}
                </svg>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-700 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-light text-gray-900 mb-6">
              Enterprise <span className="font-bold text-[#0818A8]">Solutions</span>
            </h2>
          </motion.div>

          <div className="space-y-16">
            {solutions.map((solution, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:direction-rtl' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">{solution.title}</h3>
                  <p className="text-lg text-gray-700 mb-8">{solution.description}</p>
                  
                  <ul className="space-y-3">
                    {solution.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <svg className="w-6 h-6 text-[#4682B4] flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                        </svg>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className={`relative h-[400px] ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <Image
                    src={solution.image}
                    alt={solution.title}
                    fill
                    className="object-cover shadow-2xl"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section id="case-studies" className="py-20 lg:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-light text-gray-900 mb-6">
              Enterprise <span className="font-bold text-[#0818A8]">Success Stories</span>
            </h2>
            <p className="text-lg text-gray-700">Real results from real enterprise clients</p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white overflow-hidden hover:shadow-2xl transition-all duration-300"
              >
                <div className="relative h-48">
                  <Image
                    src={study.image}
                    alt={study.company}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4 px-3 py-1 bg-[#0818A8] text-white text-xs font-semibold">
                    {study.industry}
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{study.company}</h3>
                  
                  <div className="mb-4">
                    <div className="text-sm font-semibold text-gray-900 mb-1">Challenge:</div>
                    <p className="text-sm text-gray-700">{study.challenge}</p>
                  </div>
                  
                  <div className="mb-4">
                    <div className="text-sm font-semibold text-gray-900 mb-1">Solution:</div>
                    <p className="text-sm text-gray-700">{study.solution}</p>
                  </div>
                  
                  <div>
                    <div className="text-sm font-semibold text-gray-900 mb-2">Results:</div>
                    <ul className="space-y-1">
                      {study.results.map((result, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm">
                          <svg className="w-4 h-4 text-[#4682B4] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                          </svg>
                          <span className="text-gray-700">{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-light text-gray-900 mb-6">
              Enterprise <span className="font-bold text-[#0818A8]">Investment</span>
            </h2>
            <p className="text-lg text-gray-700">Flexible plans designed for enterprise needs</p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {Object.entries(pricing).map(([key, plan], index) => (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`relative bg-white p-8 border-2 hover:shadow-2xl transition-all duration-300 ${
                  plan.popular ? 'border-[#0818A8] shadow-lg scale-105' : 'border-gray-200'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-6 py-2 bg-gradient-to-r from-[#0818A8] to-[#4682B4] text-white text-sm font-bold uppercase">
                    Most Popular
                  </div>
                )}

                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <div className="text-3xl font-bold text-[#0818A8] mb-1">{plan.price}</div>
                <div className="text-sm text-gray-600 mb-4">{plan.priceUK}</div>
                <p className="text-gray-700 mb-8">{plan.description}</p>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-[#4682B4] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                      </svg>
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link href="#contact-enterprise">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`w-full py-4 font-semibold transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-[#0818A8] to-[#4682B4] text-white hover:shadow-xl'
                        : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                    }`}
                  >
                    Contact Sales
                  </motion.button>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact-enterprise" className="relative py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#000080] via-[#0818A8] to-[#4682B4]" />
        
        <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-12 text-center text-white">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl lg:text-6xl font-light mb-6 leading-tight"
          >
            Ready to Transform Your <span className="font-bold">Enterprise?</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl mb-12 text-white/90"
          >
            Schedule a consultation with our enterprise team to discuss your specific needs
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
                Schedule Enterprise Consultation
              </motion.button>
            </Link>
            
            <a href="mailto:enterprise@bitlayerx.com">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-12 py-5 bg-transparent text-white text-xl font-bold border-2 border-white transition-all duration-300"
              >
                Email: enterprise@bitlayerx.com
              </motion.button>
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}