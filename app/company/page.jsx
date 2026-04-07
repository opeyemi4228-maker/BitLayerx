'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export default function BitLayerxAboutPage() {
  const stats = [
    { value: '500+', label: 'Businesses Served', sublabel: 'Across Nigeria & UK' },
    { value: '250%', label: 'Average ROI', sublabel: 'Client Growth' },
    { value: '98%', label: 'Client Retention', sublabel: 'Long-term Partnerships' }
  ];

  const team = [
    {
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&h=600&fit=crop&q=80',
      name: 'Airicks Eit',
      title: 'Founder & CEO',
      description: 'Leading digital transformation strategies for businesses across Africa and beyond.'
    },
    {
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=600&fit=crop&q=80',
      name: 'Sarah Chen',
      title: 'Chief Technology Officer',
      description: 'Expert in AI automation and web development infrastructure.'
    }
  ];

  const values = [
    {
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      ),
      title: 'Complete Integration',
      description: 'We don\'t do isolated services. Every solution—web, video, marketing, automation—works as one cohesive ecosystem driving real business results.'
    },
    {
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      ),
      title: 'Revenue-First Mindset',
      description: 'We measure success in business outcomes, not deliverables. If it doesn\'t drive revenue or reduce costs, we won\'t recommend it.'
    },
    {
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
      ),
      title: 'One Trusted Partner',
      description: 'Replace 5+ fragmented vendors with one strategic ally. Faster execution, consistent quality, unified vision—without the coordination headaches.'
    },
    {
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      ),
      title: 'Innovation at Scale',
      description: 'From AI chatbots reducing costs by 50% to conversion-optimized websites, we bring cutting-edge solutions proven to work for businesses like yours.'
    }
  ];

  const milestones = [
    {
      year: '2020',
      label: 'Founded',
      title: 'BitLayerx Launches',
      description: 'Started with a vision to eliminate the chaos of working with multiple digital vendors.'
    },
    {
      year: '2022',
      label: '100 Clients',
      title: 'Rapid Growth',
      description: 'Expanded across Nigeria and UK, delivering integrated solutions to ambitious businesses.'
    },
    {
      year: '2024',
      label: 'AI Integration',
      title: 'Automation Revolution',
      description: 'Launched AI business automation services, helping clients reduce operational costs by 30-50%.'
    },
    {
      year: '2026',
      label: 'Market Leader',
      title: 'Industry Recognition',
      description: 'Recognized as the go-to digital growth partner for SMEs and enterprises seeking measurable results.'
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-[70vh] lg:h-[80vh] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&h=1000&fit=crop&q=80"
          alt="BitLayerx team collaboration"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#000080]/95 via-[#0818A8]/90 to-[#4682B4]/85" />
        
        <div className="relative z-10 h-full max-w-7xl mx-auto px-6 lg:px-12 flex items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl lg:text-7xl font-light text-white mb-8 leading-tight"
            >
              About <span className="font-bold">BitLayerx</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl lg:text-2xl text-white/90 leading-relaxed"
            >
              We're not just another digital agency. We're your complete growth partner—eliminating vendor chaos and delivering integrated solutions that actually drive revenue.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gray-50 py-16 lg:py-20 border-b-4 border-[#0818A8]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-3 gap-12">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="inline-block p-8 border-2 border-[#0818A8] mb-6 group-hover:bg-[#0818A8] transition-colors duration-300">
                  <div className="text-6xl lg:text-7xl font-bold text-[#0818A8] group-hover:text-white transition-colors">
                    {stat.value}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{stat.label}</h3>
                <p className="text-black/80">{stat.sublabel}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="mb-6">
                <span className="inline-block px-4 py-2 bg-[#0818A8] text-white text-sm font-semibold uppercase tracking-wide mb-6">
                  Our Mission
                </span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-light text-gray-900 mb-8 leading-tight">
                To be <span className="font-bold text-[#0818A8]">Nigeria's most trusted</span> digital growth partner
              </h2>
              <div className="space-y-6 text-lg text-black/80 leading-relaxed">
                <p>
                  We're working to become the most trusted digital growth partner by transforming how Nigerian and UK businesses approach their digital infrastructure.
                </p>
                <p>
                  We deliver complete digital ecosystems—web development, branding, video production, performance marketing, and AI automation—all integrated under one strategic approach.
                </p>
                <p>
                  Our customers include ambitious SMEs, growth-stage startups, and enterprises ready to dominate their markets through measurable digital transformation.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-[#0818A8] to-[#4682B4] p-12 text-white">
                <h3 className="text-3xl font-bold mb-8">We Connect For Growth</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <svg className="w-6 h-6 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                    </svg>
                    <p className="text-lg">Complete digital ecosystems, not isolated services</p>
                  </div>
                  <div className="flex items-start gap-4">
                    <svg className="w-6 h-6 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                    </svg>
                    <p className="text-lg">Revenue impact and measurable business results</p>
                  </div>
                  <div className="flex items-start gap-4">
                    <svg className="w-6 h-6 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                    </svg>
                    <p className="text-lg">One trusted partner instead of multiple vendors</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-gray-50 py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-light text-gray-900 mb-6">
              Meet Our <span className="font-bold text-[#0818A8]">Leadership</span>
            </h2>
            <p className="text-lg text-black/80 max-w-3xl mx-auto">
              Experienced leaders driving digital transformation across Africa and beyond
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -8 }}
                className="bg-white group"
              >
                <div className="relative h-96 overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-[#0818A8] font-semibold mb-4">{member.title}</p>
                  <p className="text-black/80 leading-relaxed">{member.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-light text-gray-900 mb-6">
              What Makes Us <span className="font-bold text-[#0818A8]">Different</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="p-8 border-l-4 border-[#0818A8] bg-gray-50 hover:bg-white hover:shadow-lg transition-all duration-300"
              >
                <svg className="w-12 h-12 text-[#0818A8] mb-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  {value.icon}
                </svg>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-black/80 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="bg-gradient-to-br from-[#000080] to-[#0818A8] py-20 lg:py-28 text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-light mb-6">
              Our <span className="font-bold">Journey</span>
            </h2>
            <p className="text-lg text-white/80 max-w-3xl mx-auto">
              We've been moving businesses forward since 2020. Check out these BitLayerx firsts...
            </p>
          </motion.div>

          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="grid md:grid-cols-[200px_1fr] gap-8 items-start"
              >
                <div className="text-right">
                  <div className="text-6xl font-bold text-white/20">{milestone.year}</div>
                  <div className="text-sm uppercase tracking-wider text-[#4682B4] mt-2">{milestone.label}</div>
                </div>
                <div className="border-l-2 border-white/30 pl-8">
                  <h3 className="text-2xl font-bold mb-3">{milestone.title}</h3>
                  <p className="text-white/80 leading-relaxed">{milestone.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1600&h=800&fit=crop&q=80"
            alt="Team collaboration"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0818A8]/95 to-[#4682B4]/90" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-12 text-center text-white">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl lg:text-6xl font-light mb-8 leading-tight"
          >
            Ready to <span className="font-bold">Transform</span> Your Business?
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl mb-12 text-white/90"
          >
            Let's build something exceptional together. Get started with a free consultation.
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
                className="px-10 py-4 bg-white text-[#0818A8] text-lg font-semibold transition-all duration-300"
              >
                Schedule Consultation
              </motion.button>
            </Link>
            
            <Link href="/packages">
              <motion.button
                whileHover={{ scale: 1.05, backgroundColor: '#ffffff', color: '#0818A8' }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-4 bg-transparent text-white text-lg font-semibold border-2 border-white transition-all duration-300"
              >
                View Our Packages
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}