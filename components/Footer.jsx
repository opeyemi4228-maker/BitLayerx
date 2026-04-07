'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function BitLayerxFooterBottom() {
  const helpSections = [
    {
      icon: (
        <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z M7 9h2v2H7zm4 0h2v2h-2zm4 0h2v2h-2z"/>
      ),
      title: 'Help & Support',
      description: "Got a question? We're here to help 24/7",
      link: '/support'
    },
    {
      icon: (
        <path d="M19.07 4.93l-1.41 1.41C19.1 7.79 20 9.79 20 12c0 4.42-3.58 8-8 8s-8-3.58-8-8c0-4.08 3.05-7.44 7-7.93v2.02C8.16 6.57 6 9.03 6 12c0 3.31 2.69 6 6 6s6-2.69 6-6c0-1.66-.67-3.16-1.76-4.24l-1.41 1.41C15.55 9.9 16 10.9 16 12c0 2.21-1.79 4-4 4s-4-1.79-4-4c0-1.86 1.28-3.41 3-3.86v2.14c-.6.35-1 .98-1 1.72 0 1.1.9 2 2 2s2-.9 2-2c0-.74-.4-1.37-1-1.72V2h-1C7.03 2 2 7.03 2 13s5.03 11 11 11 11-5.03 11-11c0-3.21-1.39-6.1-3.59-8.07l-1.34 1.34z"/>
      ),
      title: 'Free Consultation',
      description: 'Schedule a strategy session with our experts',
      link: '/consultation'
    },
    {
      icon: (
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
      ),
      title: 'Success Stories',
      description: 'View client results and case studies',
      link: '/case-studies'
    },
    {
      icon: (
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/>
      ),
      title: 'About BitLayerx',
      description: 'Company info, careers, and partnerships',
      link: '/about'
    }
  ];

  const industries = [
    {
      icon: (
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
      ),
      title: 'Fintech',
      description: 'Finance-grade digital products',
      link: '/industries/fintech'
    },
    {
      icon: (
        <path d="M20 8h-3V4H3c-1.1 0-2 .9-2 2v11h2c0 1.66 1.34 3 3 3s3-1.34 3-3h6c0 1.66 1.34 3 3 3s3-1.34 3-3h2v-5l-3-4zM6 18.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm13.5-9l1.96 2.5H17V9.5h2.5zm-1.5 9c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/>
      ),
      title: 'Logistics',
      description: 'Operations-optimised platforms',
      link: '/industries/logistics'
    },
    {
      icon: (
        <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
      ),
      title: 'Real Estate',
      description: 'Property tech & digital presence',
      link: '/industries/real-estate'
    },
    {
      icon: (
        <path d="M7 4V2c0-.55.45-1 1-1h8c.55 0 1 .45 1 1v2h4c.55 0 1 .45 1 1s-.45 1-1 1h-1v13c0 .55-.45 1-1 1H5c-.55 0-1-.45-1-1V6H3c-.55 0-1-.45-1-1s.45-1 1-1h4zm2 2v12h8V6H9zm2 10h4v-2h-4v2zm0-4h4v-2h-4v2z"/>
      ),
      title: 'E-commerce',
      description: 'Conversion-optimised storefronts',
      link: '/industries/ecommerce'
    },
    {
      icon: (
        <path d="M14 6l-1-2H5v17h2v-7h5l1 2h7V6h-6zm4 8h-4l-1-2H7V6h5l1 2h5v6z"/>
      ),
      title: 'Corporate & Enterprise',
      description: 'Scalable enterprise ecosystems',
      link: '/industries/enterprise'
    }
  ];

  const legalLinks = [
    { label: 'Terms of Service', href: '/terms' },
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Cookie Policy', href: '/cookies' },
    { label: 'Data Protection', href: '/data-protection' },
    { label: 'Accessibility', href: '/accessibility' }
  ];

  const socialLinks = [
    {
      key: 'linkedin',
      href: '#linkedin',
      icon: (
        <img
          width="18"
          height="18"
          src="https://img.icons8.com/glyph-neue/64/linkedin.png"
          alt="linkedin"
          style={{ filter: 'brightness(0) invert(0.6)' }}
          className="group-hover:brightness-0 group-hover:invert transition-all"
        />
      )
    },
    {
      key: 'twitter',
      href: '#twitter',
      icon: (
        <img
          width="18"
          height="18"
          src="https://img.icons8.com/ios-filled/100/twitterx--v1.png"
          alt="twitterx--v1"
          style={{ filter: 'brightness(0) invert(0.6)' }}
          className="group-hover:brightness-0 group-hover:invert transition-all"
        />
      )
    },
    {
      key: 'facebook',
      href: '#facebook',
      icon: (
        <img
          width="18"
          height="18"
          src="https://img.icons8.com/glyph-neue/64/facebook.png"
          alt="facebook"
          style={{ filter: 'brightness(0) invert(0.6)' }}
          className="group-hover:brightness-0 group-hover:invert transition-all"
        />
      )
    },
    {
      key: 'instagram',
      href: '#instagram',
      icon: (
        <img
          width="18"
          height="18"
          src="https://img.icons8.com/glyph-neue/64/instagram-new--v1.png"
          alt="instagram-new--v1"
          style={{ filter: 'brightness(0) invert(0.6)' }}
          className="group-hover:brightness-0 group-hover:invert transition-all"
        />
      )
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <footer className="bg-gray-700">
      {/* Top Section - Help Items */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid md:grid-cols-2 lg:grid-cols-4 border-b border-gray-600"
      >
        {helpSections.map((section, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            whileHover={{ backgroundColor: 'rgb(75, 85, 99)' }}
            className="p-8 lg:p-10 border-r border-gray-600 last:border-r-0 md:odd:border-r-0 lg:odd:border-r flex flex-col gap-4 group transition-colors duration-200"
          >
            {/* Header */}
            <div className="flex items-center gap-3 text-white">
              <svg className="w-6 h-6 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                {section.icon}
              </svg>
              <h3 className="text-base font-semibold">{section.title}</h3>
            </div>

            {/* Link */}
            <Link href={section.link}>
              <motion.div
                whileHover={{ x: 4 }}
                className="flex items-center gap-2 text-white text-sm pl-9 group-hover:text-gray-200 transition-colors"
              >
                <span>{section.description}</span>
                <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>
                </svg>
              </motion.div>
            </Link>
          </motion.div>
        ))}
      </motion.div>

      {/* Industries Section */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="bg-gray-800 border-b border-gray-600"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-8">
          <h3 className="text-white text-lg font-semibold mb-6 text-center">Industries We Serve</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ backgroundColor: 'rgb(75, 85, 99)' }}
                className="p-6 border border-gray-600 rounded-lg group transition-colors duration-200"
              >
                {/* Header */}
                <div className="flex items-center gap-3 text-white mb-3">
                  <svg className="w-6 h-6 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    {industry.icon}
                  </svg>
                  <h4 className="text-base font-semibold">{industry.title}</h4>
                </div>

                {/* Link */}
                <Link href={industry.link}>
                  <motion.div
                    whileHover={{ x: 4 }}
                    className="flex items-center gap-2 text-white text-sm group-hover:text-gray-200 transition-colors"
                  >
                    <span>{industry.description}</span>
                    <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>
                    </svg>
                  </motion.div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Bottom Section - Legal & Copyright */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="bg-black px-6 lg:px-12 py-6"
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
            {/* Legal Links */}
            <nav className="flex flex-wrap gap-6">
              {legalLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  className="text-white text-xs hover:text-gray-300 hover:underline transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Copyright */}
            <div className="text-white text-xs leading-relaxed lg:text-right">
              <p>BitLayerx Technologies | © {new Date().getFullYear()} All rights reserved</p>
              <p className="text-gray-400 mt-1">Your Complete Digital Growth Partner</p>
            </div>
          </div>

          {/* Additional Info */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 pt-6 border-t border-gray-800"
          >
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 text-xs text-gray-400">
              <div className="flex flex-wrap gap-4">
                <span className="flex items-center gap-1.5">
                  <svg className="w-4 h-4 text-[#4682B4]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                  Trusted by 500+ businesses
                </span>
                <span>•</span>
                <span className="flex items-center gap-1.5">
                  <svg className="w-4 h-4 text-[#4682B4]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd"/>
                  </svg>
                  Secure & Compliant
                </span>
                <span>•</span>
                <span>Available in Nigeria & UK</span>
              </div>

              <div className="flex items-center gap-4">
                <span>Follow us:</span>
                {/* Social Icons */}
                <div className="flex gap-3">
                  {socialLinks.map((social) => (
                    <Link
                      key={social.key}
                      href={social.href}
                      className="w-8 h-8 rounded-full bg-gray-800 hover:bg-[#0818A8] flex items-center justify-center transition-colors group"
                    >
                      {social.icon}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </footer>
  );
}