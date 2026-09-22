'use client';

import React from 'react';
import Link from 'next/link';
import BrandMark from '@/components/BrandMark';
import { COMPANY, PRODUCTS } from '@/content/company';
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

  // Site map. The footer is where a reader who has scrolled the whole page
  // looks for "what else is here", so every section is one click away.
  const columns = [
    {
      title: 'Products',
      links: PRODUCTS.map((p) => ({
        label: p.status === 'live' ? p.name : `${p.name} · 2027`,
        href: p.url || '/#products',
        external: Boolean(p.url),
      })),
    },
    {
      title: 'Services',
      links: [
        { label: 'All services', href: '/services' },
        { label: 'Apps and software', href: '/solutions' },
        { label: 'Design and branding', href: '/design' },
        { label: 'Marketing', href: '/marketing' },
        { label: 'Packages and prices', href: '/packages' },
      ],
    },
    {
      title: 'Company',
      links: [
        { label: 'About us', href: '/about' },
        { label: 'Industries', href: '/industries' },
        { label: 'Our work', href: '/portfolio' },
        { label: 'Locations', href: '/locations' },
        { label: 'Blog', href: '/blog' },
      ],
    },
    {
      title: 'Get started',
      links: helpSections.map((h) => ({ label: h.title, href: h.link })).concat([
        { label: 'Start a project', href: '/start-a-project' },
      ]).filter((l) => l.label !== 'About BitLayerX' && l.label !== 'Our Work'),
    },
  ];

  const linkCls =
    'text-[14.5px] text-[#5E5E5E] hover:text-[#0040FF] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0040FF] rounded';

  // White, like every page above it. A black footer turned the end of each
  // page into a dark slab; a hairline and the wordmark close it instead.
  return (
    <footer id="site-footer" className="blx-footer border-t border-black/[0.08] bg-white">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-10 pt-16 pb-10 lg:pt-20">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Link
              href="/"
              aria-label="BitLayerX Technologies, back to homepage"
              className="inline-flex rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0040FF] focus-visible:ring-offset-4"
            >
              <BrandMark size="lg" />
            </Link>
            <p className="mt-6 text-[1.35rem] font-semibold tracking-[-0.025em] text-[#111111]">
              {COMPANY.tagline}.
            </p>
            <p className="mt-3 max-w-[40ch] text-[15.5px] leading-relaxed text-[#5E5E5E]">
              Cloud, field intelligence, logistics and digital services for
              African businesses and institutions. {COMPANY.origin}
            </p>
            <Link
              href="/start-a-project"
              className="mt-8 inline-flex items-center justify-center rounded-full bg-[#0040FF] px-7 py-[0.8rem] text-[15px] font-medium text-white transition-colors hover:bg-black"
            >
              Start a project
            </Link>
          </div>

          <nav
            aria-label="Footer"
            className="grid grid-cols-2 gap-10 sm:grid-cols-4 lg:col-span-8"
          >
            {columns.map((col) => (
              <div key={col.title}>
                <h3 className="text-[14px] font-semibold text-[#111111]">{col.title}</h3>
                <ul className="mt-5 space-y-3">
                  {col.links.map((l) => (
                    <li key={l.label}>
                      {l.external ? (
                        <a href={l.href} target="_blank" rel="noopener noreferrer" className={linkCls}>
                          {l.label}
                        </a>
                      ) : (
                        <Link href={l.href} className={linkCls}>
                          {l.label}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        <div className="mt-16 flex flex-col gap-6 border-t border-black/[0.08] pt-8 lg:flex-row lg:items-start lg:justify-between">
          <div className="text-[13.5px] leading-relaxed text-[#5E5E5E]">
            <p className="font-medium text-[#111111]">
              © {new Date().getFullYear()} BitLayerX Technologies. All rights reserved.
            </p>
            {/* A registered company number is one of the few claims on this
                page a visitor can go and check for themselves, which is
                precisely why it belongs here rather than buried on a legal
                page nobody opens. */}
            <p className="mt-1">Registered in Nigeria with the Corporate Affairs Commission · RC 9834403</p>
          </div>

          <div className="flex flex-col gap-5 lg:items-end">
            <nav className="flex flex-wrap gap-x-6 gap-y-2" aria-label="Legal">
              {legalLinks.map((link) => (
                <Link key={link.label} href={link.href} className="text-[13.5px] text-[#5E5E5E] hover:text-[#0040FF] transition-colors">
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="flex gap-2.5">
              <span className="sr-only">Follow BitLayerX Technologies</span>
              {SOCIAL.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`BitLayerX Technologies on ${social.label}`}
                  className="group flex h-9 w-9 items-center justify-center rounded-full border border-black/[0.12] transition-colors hover:border-[#0040FF] hover:bg-[#0040FF] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0040FF] focus-visible:ring-offset-2"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="text-[#111111] transition-colors group-hover:text-white">
                    <path d={social.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
