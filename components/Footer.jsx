'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { MessageSquare, CalendarCheck, FolderOpen, Building2 } from 'lucide-react';

// ─── Social ───────────────────────────────────────────────────────────────────
// Own SVGs, not a third-party icon host. For a design studio, generic icons
// served from someone else's server are both an aesthetic and a reliability
// weakness, and every one of these used to be a dead "#" anchor.
const SOCIAL = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/company/bitlayerx',
    path: 'M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.35V9h3.41v1.56h.05a3.74 3.74 0 0 1 3.37-1.85c3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13Zm1.78 13.02H3.55V9h3.57v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0Z',
  },
  {
    label: 'X',
    href: 'https://x.com/bitlayerx',
    path: 'M18.9 1.15h3.68l-8.04 9.19L24 22.85h-7.4l-5.8-7.58-6.64 7.58H.47l8.6-9.83L0 1.15h7.59l5.24 6.93 6.07-6.93Zm-1.29 19.5h2.04L6.49 3.24H4.3l13.31 17.41Z',
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/bitlayerx',
    path: 'M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.8 3.8 0 0 1-1.38-.9 3.8 3.8 0 0 1-.9-1.38c-.16-.42-.36-1.06-.41-2.23-.06-1.27-.07-1.65-.07-4.85s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41 1.27-.06 1.65-.07 4.85-.07M12 0C8.74 0 8.33.01 7.05.07 5.78.13 4.9.33 4.14.63c-.79.3-1.46.72-2.12 1.38A5.87 5.87 0 0 0 .63 4.14c-.3.76-.5 1.64-.56 2.91C.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.06 1.27.26 2.15.56 2.91.3.79.72 1.46 1.39 2.12a5.87 5.87 0 0 0 2.12 1.38c.76.3 1.64.5 2.91.56C8.33 23.99 8.74 24 12 24s3.67-.01 4.95-.07c1.27-.06 2.15-.26 2.91-.56a5.87 5.87 0 0 0 2.12-1.38 5.87 5.87 0 0 0 1.39-2.12c.3-.76.5-1.64.56-2.91.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.06-1.27-.26-2.15-.56-2.91a5.87 5.87 0 0 0-1.39-2.13A5.87 5.87 0 0 0 19.86.63c-.76-.3-1.64-.5-2.91-.56C15.67.01 15.26 0 12 0Zm0 5.84a6.16 6.16 0 1 0 0 12.32 6.16 6.16 0 0 0 0-12.32Zm0 10.16a4 4 0 1 1 0-8 4 4 0 0 1 0 8Zm7.85-10.4a1.44 1.44 0 1 1-2.88 0 1.44 1.44 0 0 1 2.88 0Z',
  },
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/bitlayerx',
    path: 'M24 12.07C24 5.4 18.63 0 12 0S0 5.4 0 12.07C0 18.1 4.39 23.09 10.13 24v-8.44H7.08v-3.49h3.05V9.41c0-3.02 1.79-4.69 4.53-4.69 1.31 0 2.69.24 2.69.24v2.96h-1.52c-1.49 0-1.96.93-1.96 1.89v2.26h3.33l-.53 3.49h-2.8V24C19.61 23.09 24 18.1 24 12.07Z',
  },
];

export default function BitLayerxFooterBottom() {
  const helpSections = [
    {
      icon: MessageSquare,
      title: 'Help & Support',
      // A promise we can keep, instead of a 24/7 one we cannot.
      description: 'Ask us anything, we respond within 48 hours',
      link: '/contact',
    },
    {
      icon: CalendarCheck,
      title: 'Free Consultation',
      description: 'Book a 30-minute strategy call',
      link: '/contact',
    },
    {
      icon: FolderOpen,
      title: 'Our Work',
      description: 'Case studies and client results',
      link: '/portfolio',
    },
    {
      icon: Building2,
      title: 'About BitLayerX',
      description: 'The studio, the method, and the people',
      link: '/about',
    },
  ];

  // "Data protection" deep-links into the privacy policy rather than pointing
  // at /privacy a second time. Two entries with the same href collided on the
  // React key and rendered as duplicates.
  const legalLinks = [
    { label: 'Terms of Service', href: '/terms' },
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Cookie Policy', href: '/cookies' },
    { label: 'Data Protection', href: '/privacy#your-rights' },
    { label: 'Accessibility', href: '/accessibility' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 18 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <footer className="blx-footer bg-black">
      {/* Top, the four things people come here to do */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/[0.07]"
      >
        {helpSections.map((section) => {
          const Icon = section.icon;
          return (
            <motion.div key={section.title} variants={itemVariants} className="bg-black">
              <Link
                href={section.link}
                className="flex flex-col gap-3 p-8 lg:p-10 h-full group hover:bg-white/[0.03] transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-inset"
              >
                <div className="flex items-center gap-3 text-white">
                  <Icon size={18} strokeWidth={2} className="text-blue-400 flex-shrink-0" />
                  <h3 className="text-[15.5px] font-bold tracking-tight">{section.title}</h3>
                </div>
                <span className="flex items-center gap-2 text-white/45 text-[14px] pl-[30px] group-hover:text-white/70 transition-colors">
                  {section.description}
                  <svg
                    className="w-3.5 h-3.5 flex-shrink-0 transition-transform duration-200 group-hover:translate-x-0.5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
                  </svg>
                </span>
              </Link>
            </motion.div>
          );
        })}
      </motion.div>

      {/* Bottom, legal, credit, social */}
      <div className="bg-black px-6 lg:px-12 py-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
            <nav className="flex flex-wrap gap-x-6 gap-y-2" aria-label="Legal">
              {legalLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-white/70 text-[13.5px] hover:text-white hover:underline underline-offset-4 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="text-white/70 text-[13.5px] leading-relaxed lg:text-right">
              <p>
                BitLayerX Technologies · © {new Date().getFullYear()} All rights
                reserved
              </p>
              <p className="text-white/40 mt-1">
                Founded and led by{' '}
                <a
                  href="https://opeyemiojurongbe.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white underline-offset-4 hover:underline transition-colors"
                >
                  Opeyemi T. Ojurongbe
                </a>
              </p>
            </div>
          </div>

          <div className="mt-7 pt-7 border-t border-white/10">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-5 text-[13px] text-white/40">
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                <span>Based in Abuja. Working globally.</span>
                <span aria-hidden="true" className="text-white/20">•</span>
                <span>We respond within 48 hours</span>
                <span aria-hidden="true" className="text-white/20">•</span>
                <span>Secure &amp; compliant</span>
              </div>

              <div className="flex items-center gap-4">
                <span className="sr-only">Follow BitLayerX</span>
                <div className="flex gap-2.5">
                  {SOCIAL.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`BitLayerX on ${social.label}`}
                      className="w-9 h-9 rounded-full bg-white/[0.06] hover:bg-[#0040FF] flex items-center justify-center transition-colors group focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
                    >
                      <svg
                        width="15"
                        height="15"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        aria-hidden="true"
                        className="text-white/55 group-hover:text-white transition-colors"
                      >
                        <path d={social.path} />
                      </svg>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
