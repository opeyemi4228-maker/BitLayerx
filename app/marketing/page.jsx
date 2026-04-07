'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

export default function BitLayerxMarketingPage() {
  const [activeFaq, setActiveFaq] = useState(null);

  const marketingServices = [
    {
      id: 'social-media',
      title: 'Social Media Management',
      subtitle: 'Consistent Brand Presence',
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
      ),
      description: 'Build a consistent, engaging social media presence that drives brand awareness and generates qualified leads across all platforms.',
      longDescription: 'In today\'s digital landscape, social media isn\'t optional—it\'s essential. But posting randomly won\'t cut it. You need a strategic, data-driven approach that turns followers into customers. Our social media management service handles everything from strategy to execution, ensuring your brand stays visible, relevant, and engaging 24/7.',
      features: [
        'Comprehensive Social Media Strategy',
        'Daily Content Creation & Posting (2-3 platforms)',
        'Community Management & Engagement',
        'Monthly Analytics & Performance Reports',
        'Hashtag Research & Optimization',
        'Social Listening & Competitor Analysis',
        'Influencer Collaboration Management',
        'Crisis Management & Reputation Protection'
      ],
      benefits: [
        'Consistent brand voice across all platforms',
        'Increased follower growth (avg 30-50%/month)',
        'Higher engagement rates (likes, comments, shares)',
        'Better brand awareness and recall',
        'Time saved for business owners',
        'Professional content that converts'
      ],
      pricing: {
        nigeria: '₦200k - ₦500k/month',
        uk: '£500 - £1,500/month'
      },
      deliverables: [
        'Monthly content calendar',
        '2-3 posts per day across selected platforms',
        'Instagram Stories & Reels',
        'Engagement with followers (comments, DMs)',
        'Monthly performance report',
        'Strategy adjustment sessions'
      ],
      results: '30-50% follower growth, 3x engagement increase, consistent brand presence',
      timeline: 'Results visible within 30-60 days',
      image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=1200&h=800&fit=crop&q=80'
    },
    {
      id: 'paid-advertising',
      title: 'Paid Advertising',
      subtitle: 'ROI-Focused Campaigns',
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
      ),
      description: 'Performance-driven advertising campaigns across Meta, Google, and LinkedIn that generate qualified leads and measurable revenue growth.',
      longDescription: 'Stop wasting ad budget on campaigns that don\'t convert. Our paid advertising service is built on one principle: ROI. We don\'t just run ads—we engineer conversion machines that turn every naira spent into measurable business growth. From Meta Ads to Google Ads and LinkedIn campaigns, we handle the entire funnel from targeting to conversion.',
      features: [
        'Platform Setup & Optimization (Meta, Google, LinkedIn)',
        'Audience Research & Custom Targeting',
        'Ad Creative Development (Copy + Visuals)',
        'Campaign Setup & Launch',
        'A/B Testing & Continuous Optimization',
        'Conversion Tracking & Attribution',
        'Weekly Performance Reports',
        'Monthly Strategy Review Sessions',
        'Landing Page Optimization',
        'Retargeting & Remarketing Campaigns'
      ],
      benefits: [
        'Higher quality leads at lower cost per acquisition',
        'Improved ROAS (Return on Ad Spend)',
        'Clear data on what\'s working',
        'Scalable customer acquisition',
        'Reduced wasted ad spend',
        'Faster business growth'
      ],
      pricing: {
        nigeria: '₦300k - ₦800k/month + ad spend',
        uk: '£800 - £2,500/month + ad spend'
      },
      deliverables: [
        'Campaign strategy document',
        'Ad creative (copy + visuals)',
        'Campaign setup across platforms',
        'Weekly performance reports',
        'Monthly optimization sessions',
        'Conversion tracking dashboard'
      ],
      results: 'Average 250% ROI, 40% reduction in cost per acquisition',
      timeline: 'Campaigns launch within 7 days, optimization ongoing',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=800&fit=crop&q=80'
    },
    {
      id: 'content-seo',
      title: 'Content & SEO',
      subtitle: 'Organic Growth Strategy',
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      ),
      description: 'Achieve first-page Google rankings through strategic content creation, technical SEO, and authority building that drives organic traffic.',
      longDescription: 'Paid ads are great, but organic traffic is the gift that keeps giving. Our Content & SEO service positions you as an industry authority while driving consistent, high-intent traffic from search engines. We don\'t just chase rankings—we build content strategies that attract, engage, and convert your ideal customers.',
      features: [
        'Comprehensive SEO Audit',
        'Keyword Research & Strategy',
        'High-Quality Blog/Article Writing (4-8/month)',
        'On-Page SEO Optimization',
        'Technical SEO Improvements',
        'Backlink Strategy & Outreach',
        'Content Cluster Development',
        'Google Business Profile Optimization',
        'Local SEO (if applicable)',
        'Monthly Ranking & Traffic Reports'
      ],
      benefits: [
        'First-page Google rankings for target keywords',
        'Steady stream of organic traffic',
        'Positioned as industry authority',
        'Lower customer acquisition costs over time',
        'Compound growth (traffic increases monthly)',
        'Long-term competitive advantage'
      ],
      pricing: {
        nigeria: '₦250k - ₦600k/month',
        uk: '£600 - £2,000/month'
      },
      deliverables: [
        'SEO audit report',
        '4-8 optimized articles per month',
        'On-page optimization updates',
        'Technical SEO improvements',
        'Backlink acquisition reports',
        'Monthly ranking & traffic reports'
      ],
      results: 'First-page rankings within 3-6 months, 200%+ organic traffic growth',
      timeline: 'Initial results in 60-90 days, significant growth in 6 months',
      image: 'https://images.unsplash.com/photo-1432888622747-4eb9a8f2c293?w=1200&h=800&fit=crop&q=80'
    },
    {
      id: 'email-marketing',
      title: 'Email Marketing',
      subtitle: 'Automated Nurture Campaigns',
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      ),
      description: 'Turn your email list into a revenue-generating asset with automated sequences, newsletters, and strategic campaigns that drive sales.',
      longDescription: 'Your email list is sitting on untapped revenue. Most businesses leave 70% of potential sales on the table by not nurturing their lists properly. Our email marketing service transforms your contacts into customers through strategic automation, compelling content, and data-driven optimization.',
      features: [
        'Email Platform Setup (MailChimp, Klaviyo, etc.)',
        'List Segmentation Strategy',
        'Welcome Series & Onboarding Sequences',
        'Newsletter Creation (2-4 per month)',
        'Automated Campaign Workflows',
        'A/B Testing (Subject Lines & Content)',
        'Email Design & Copywriting',
        'Performance Tracking & Optimization',
        'Re-engagement Campaigns',
        'Integration with CRM & Sales Funnel'
      ],
      benefits: [
        'Higher customer lifetime value',
        'Increased repeat purchases',
        'Better lead nurturing and conversion',
        'Automated revenue generation',
        'Improved customer retention',
        'Personalized customer experiences'
      ],
      pricing: {
        nigeria: '₦150k - ₦400k/month',
        uk: '£400 - £1,200/month'
      },
      deliverables: [
        'Email platform setup & integration',
        'Automated email sequences',
        '2-4 newsletters per month',
        'A/B testing reports',
        'Performance analytics dashboard',
        'Monthly optimization sessions'
      ],
      results: '25-35% increase in customer lifetime value, 15-20% email open rates',
      timeline: 'Setup within 2 weeks, automation running within 30 days',
      image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1200&h=800&fit=crop&q=80'
    }
  ];

  const faqs = [
    {
      question: 'Can I start with one service and add more later?',
      answer: 'Absolutely! Most clients start with one or two services and expand as they see results. We recommend starting with Paid Advertising for quick wins, then adding SEO for long-term growth, and Social Media for brand building.'
    },
    {
      question: 'How quickly will I see results?',
      answer: 'It depends on the service: Paid Advertising shows results within 7-14 days. Social Media takes 30-60 days. SEO takes 60-90 days for initial results, 6 months for significant growth. Email Marketing shows results within 2-4 weeks.'
    },
    {
      question: 'Do I need to provide ad budget separately?',
      answer: 'For Paid Advertising, yes—the management fee (₦300k-₦800k) is separate from your ad spend budget. We typically recommend a minimum ad spend of ₦200k-500k/month for meaningful results. Other services include all costs.'
    },
    {
      question: 'What platforms do you manage?',
      answer: 'Social Media: Instagram, Facebook, LinkedIn, Twitter/X, TikTok. Paid Ads: Meta (Facebook/Instagram), Google Ads, LinkedIn Ads, TikTok Ads. We recommend platforms based on where your audience is most active.'
    },
    {
      question: 'Can you guarantee results?',
      answer: 'We guarantee our best effort, industry expertise, and data-driven approach. While we can\'t guarantee specific numbers (no ethical agency can), our average clients see 250% ROI on ads, 30-50% social media growth, and first-page rankings within 6 months.'
    },
    {
      question: 'What if I want to cancel?',
      answer: 'All marketing services are month-to-month with 30 days notice for cancellation. No long-term contracts. We believe in earning your business every month through results.'
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#000080] mt-[-38] via-[#0818A8] to-[#4682B4] py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '40px 40px'
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
              Marketing & Advertising
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl lg:text-7xl font-light text-white mb-6 leading-tight"
            >
              Turn Your Digital Presence Into a{' '}
              <span className="font-bold">Revenue Engine</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl lg:text-2xl text-white/90 leading-relaxed mb-12"
            >
              BitLayerx combines web development, video production, branding, performance marketing, and AI automation to help businesses build authority and dominate their markets.
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
                  Explore Services
                </motion.button>
              </Link>
              
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-10 py-4 bg-transparent text-white text-lg font-semibold border-2 border-white"
                >
                  Get Free Audit
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
            {marketingServices.map((service) => (
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

      {/* Marketing Services Sections */}
      {marketingServices.map((service, index) => (
        <section
          key={service.id}
          id={service.id}
          className={`py-20 lg:py-28 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}
        >
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Content - Alternating sides */}
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className={index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}
              >
                {/* Icon */}
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

                {/* Results */}
                <div className="mb-8 p-6 bg-white border-2 border-gray-200">
                  <div className="flex items-start gap-3 mb-3">
                    <svg className="w-6 h-6 text-[#4682B4] flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                    </svg>
                    <div>
                      <div className="font-bold text-gray-900 mb-1">Expected Results:</div>
                      <p className="text-black/80">{service.results}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-black/80">
                    <svg className="w-5 h-5 text-[#4682B4]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"/>
                    </svg>
                    <span>{service.timeline}</span>
                  </div>
                </div>

                <Link href="/contact">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="px-10 py-4 bg-gradient-to-r from-[#0818A8] to-[#4682B4] text-white text-lg font-semibold hover:shadow-xl transition-all duration-300"
                  >
                    Get Started with {service.title.split(' ')[0]}
                  </motion.button>
                </Link>
              </motion.div>

              {/* Image */}
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className={`relative ${index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}`}
              >
                <div className="relative h-[600px] overflow-hidden shadow-2xl">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </div>

                {/* Floating Stats Card */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                  className="absolute bottom-8 left-8 right-8 bg-white/95 backdrop-blur-sm p-6 shadow-xl"
                >
                  <h4 className="font-bold text-gray-900 mb-4">What's Included:</h4>
                  <div className="grid grid-cols-2 gap-3">
                    {service.features.slice(0, 4).map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <svg className="w-5 h-5 text-[#4682B4] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                        </svg>
                        <span className="text-sm text-black/80">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <div className="text-xs text-black/80 mt-3">+ {service.features.length - 4} more features</div>
                </motion.div>
              </motion.div>
            </div>

            {/* Features & Benefits Grid */}
            <div className="grid md:grid-cols-2 gap-12 mt-20">
              {/* Features */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Complete Feature List</h3>
                <ul className="space-y-3">
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

              {/* Benefits */}
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
              </motion.div>
            </div>
          </div>
        </section>
      ))}

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
              Frequently Asked <span className="font-bold text-[#0818A8]">Questions</span>
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
            Ready to <span className="font-bold">Dominate</span> Your Market?
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl mb-12 text-white/90"
          >
            Get a free marketing audit and custom strategy proposal
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
                Get Free Marketing Audit
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