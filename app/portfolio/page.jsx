'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import {
  ExternalLink, ArrowRight, CheckCircle, TrendingUp, Users,
  ShoppingCart, Heart, GraduationCap, Briefcase, Home, Utensils,
  Zap, Globe, Award, Star, Play, ChevronRight, Filter, X
} from 'lucide-react';

export default function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  // Filter Categories
  const filterCategories = [
    { id: 'all', label: 'All Projects', count: 12 },
    { id: 'ecommerce', label: 'E-commerce', count: 3 },
    { id: 'saas', label: 'SaaS & Tech', count: 2 },
    { id: 'finance', label: 'Finance', count: 2 },
    { id: 'healthcare', label: 'Healthcare', count: 1 },
    { id: 'education', label: 'Education', count: 2 },
    { id: 'realestate', label: 'Real Estate', count: 1 },
    { id: 'hospitality', label: 'Hospitality', count: 1 }
  ];

  // Portfolio Projects
  const projects = [
    {
      id: 1,
      category: 'ecommerce',
      title: 'FreshMart Nigeria',
      subtitle: 'E-commerce Platform Transformation',
      industry: 'E-commerce & Retail',
      thumbnail: '🛒',
      color: 'from-[#0818A8] to-[#000080]',
      challenge: 'Low conversion rates (0.8%) and manual operations limiting growth potential',
      solution: 'Complete platform redesign with AI-powered chatbot and automated inventory management',
      services: ['Web Development', 'AI Automation', 'Performance Marketing'],
      results: [
        { metric: '320%', label: 'Revenue Increase' },
        { metric: '45%', label: 'Higher Conversion' },
        { metric: '70%', label: 'Ops Automation' },
        { metric: '₦8M', label: 'Annual Savings' }
      ],
      testimonial: {
        quote: 'BitLayerx transformed our entire business. The ROI was incredible—the system paid for itself in just 2 months.',
        author: 'Amara Johnson',
        role: 'COO, FreshMart Nigeria'
      },
      deliverables: [
        'Custom e-commerce platform',
        'AI chatbot for customer support',
        'Automated inventory system',
        'Google Ads & Meta campaigns',
        'Mobile app (iOS & Android)'
      ],
      timeline: '8 weeks',
      investment: '₦6.5M',
      website: 'https://freshmart.ng'
    },
    {
      id: 2,
      category: 'saas',
      title: 'TechHub Lagos',
      subtitle: 'MVP to Series A in 90 Days',
      industry: 'SaaS & Technology',
      thumbnail: '🚀',
      color: 'from-[#4682B4] to-[#0818A8]',
      challenge: 'Needed to launch MVP quickly to secure Series A funding before runway ended',
      solution: 'Rapid MVP development with cloud-native architecture and growth marketing',
      services: ['Web Development', 'Cloud Infrastructure', 'Growth Marketing'],
      results: [
        { metric: '3 weeks', label: 'Launch Time' },
        { metric: '5,000', label: 'Users (Month 1)' },
        { metric: '₦50M', label: 'Series A Raised' },
        { metric: '50k+', label: 'Current Users' }
      ],
      testimonial: {
        quote: 'We went from idea to funded startup in 90 days. BitLayerx made it possible.',
        author: 'Chidi Okonkwo',
        role: 'CEO, TechHub Lagos'
      },
      deliverables: [
        'Full-stack web application',
        'Cloud infrastructure (AWS)',
        'CI/CD pipeline setup',
        'User onboarding flow',
        'Performance marketing campaigns'
      ],
      timeline: '3 weeks',
      investment: '₦3.5M',
      website: 'https://techhublagos.com'
    },
    {
      id: 3,
      category: 'finance',
      title: 'Lagos Financial Services',
      subtitle: 'Digital Banking Transformation',
      industry: 'Finance & Banking',
      thumbnail: '💼',
      color: 'from-[#fbbf24] to-[#f59e0b]',
      challenge: 'Legacy systems causing compliance issues and poor customer experience',
      solution: 'Modern digital banking platform with bank-grade security and seamless UX',
      services: ['Web Development', 'Security Compliance', 'Mobile Apps'],
      results: [
        { metric: '5,000+', label: 'Customers Onboarded' },
        { metric: '75%', label: 'Faster Onboarding' },
        { metric: '100%', label: 'Compliance Achieved' },
        { metric: '92%', label: 'Customer Satisfaction' }
      ],
      testimonial: {
        quote: 'Finally, a platform that\'s both secure and user-friendly. Our customers love it.',
        author: 'David Adebayo',
        role: 'Operations Director'
      },
      deliverables: [
        'Web & mobile banking apps',
        'KYC automation system',
        'Compliance dashboard',
        'Real-time analytics',
        'Customer portal'
      ],
      timeline: '12 weeks',
      investment: '₦15M',
      website: 'https://lagosfinancial.com'
    },
    {
      id: 4,
      category: 'healthcare',
      title: 'HealthPlus Clinics',
      subtitle: 'Telemedicine & Patient Management',
      industry: 'Healthcare & Wellness',
      thumbnail: '❤️',
      color: 'from-[#dc2626] to-[#b91c1c]',
      challenge: 'Manual appointment booking leading to 40% no-shows and overwhelmed staff',
      solution: 'HIPAA-compliant patient portal with automated reminders and telemedicine',
      services: ['Web Development', 'Automation', 'Telemedicine Integration'],
      results: [
        { metric: '60%', label: 'Reduced No-Shows' },
        { metric: '45%', label: 'More Appointments' },
        { metric: '15 hrs/wk', label: 'Admin Time Saved' },
        { metric: '85%', label: 'Patient Satisfaction' }
      ],
      testimonial: {
        quote: 'Patients love the online booking. Our staff loves the extra time for actual patient care.',
        author: 'Dr. Ngozi Okafor',
        role: 'Medical Director'
      },
      deliverables: [
        'Patient portal & booking system',
        'Automated SMS reminders',
        'Telemedicine platform',
        'Medical records management',
        'Prescription system'
      ],
      timeline: '10 weeks',
      investment: '₦7M',
      website: 'https://healthplus.ng'
    },
    {
      id: 5,
      category: 'education',
      title: 'TechAcademy Africa',
      subtitle: 'E-Learning Platform Scale',
      industry: 'Education & E-Learning',
      thumbnail: '🎓',
      color: 'from-[#0818A8] to-[#4682B4]',
      challenge: 'Struggling to scale beyond 200 students with limited tech infrastructure',
      solution: 'Scalable LMS with video hosting, assessments, and progress tracking',
      services: ['Platform Development', 'Video Infrastructure', 'Payment Integration'],
      results: [
        { metric: '200 → 5k', label: 'Student Growth' },
        { metric: '80%', label: 'Engagement Rate' },
        { metric: '500%', label: 'Revenue Increase' },
        { metric: '45%', label: 'Course Completion' }
      ],
      testimonial: {
        quote: 'The platform scaled effortlessly as we grew. We couldn\'t have done it without BitLayerx.',
        author: 'Emmanuel Adeyemi',
        role: 'Founder'
      },
      deliverables: [
        'Custom LMS platform',
        'Video course hosting',
        'Automated grading system',
        'Student progress tracking',
        'Payment gateway integration'
      ],
      timeline: '8 weeks',
      investment: '₦5M',
      website: 'https://techacademy.africa'
    },
    {
      id: 6,
      category: 'realestate',
      title: 'Prime Properties Lagos',
      subtitle: 'Virtual Tours & Lead Automation',
      industry: 'Real Estate',
      thumbnail: '🏡',
      color: 'from-[#00A651] to-[#00875a]',
      challenge: 'International buyers couldn\'t view properties, manual lead follow-up inefficient',
      solution: '360° virtual tours with AI-powered lead qualification and automated follow-up',
      services: ['Web Development', 'Virtual Tours', 'AI Automation', 'CRM Integration'],
      results: [
        { metric: '150%', label: 'Lead Increase' },
        { metric: '40%', label: 'Faster Closing' },
        { metric: '65%', label: 'Ops Efficiency' },
        { metric: '90%', label: 'Client Satisfaction' }
      ],
      testimonial: {
        quote: 'The virtual tours changed everything for international buyers. We closed 45% more deals.',
        author: 'Tunde Bakare',
        role: 'Managing Director'
      },
      deliverables: [
        '360° virtual tour system',
        'AI lead qualification',
        'Automated follow-up sequences',
        'Property listing portal',
        'CRM integration (Salesforce)'
      ],
      timeline: '6 weeks',
      investment: '₦4.5M',
      website: 'https://primeproperties.ng'
    },
    {
      id: 7,
      category: 'hospitality',
      title: 'Jollof Palace Restaurant',
      subtitle: 'Online Ordering & Loyalty System',
      industry: 'Hospitality & Food',
      thumbnail: '🍽️',
      color: 'from-[#ec4899] to-[#db2777]',
      challenge: 'Relying solely on dine-in revenue, no online presence or customer retention',
      solution: 'Online ordering platform with loyalty program and delivery integration',
      services: ['Web Development', 'Mobile App', 'Loyalty System', 'Marketing'],
      results: [
        { metric: '40%', label: 'Online Revenue' },
        { metric: '200%', label: 'Booking Increase' },
        { metric: '75%', label: 'Repeat Customers' },
        { metric: '180%', label: 'Overall Revenue' }
      ],
      testimonial: {
        quote: 'The loyalty program alone paid for the entire system. Online orders now make up 40% of revenue.',
        author: 'Chef Amina Mohammed',
        role: 'Owner'
      },
      deliverables: [
        'Online ordering platform',
        'Mobile app (iOS & Android)',
        'Loyalty program system',
        'Delivery integration',
        'Social media marketing'
      ],
      timeline: '5 weeks',
      investment: '₦3.5M',
      website: 'https://jollofpalace.ng'
    },
    {
      id: 8,
      category: 'ecommerce',
      title: 'AfriStyle Marketplace',
      subtitle: 'Multi-Vendor E-commerce Platform',
      industry: 'E-commerce & Retail',
      thumbnail: '🛍️',
      color: 'from-[#0818A8] to-[#000080]',
      challenge: 'Needed scalable marketplace to connect African fashion designers with global buyers',
      solution: 'Multi-vendor platform with vendor dashboards, escrow payments, and shipping integration',
      services: ['Platform Development', 'Payment Integration', 'Vendor Management'],
      results: [
        { metric: '300+', label: 'Active Vendors' },
        { metric: '50k+', label: 'Monthly Orders' },
        { metric: '₦200M+', label: 'GMV' },
        { metric: '25%', label: 'Platform Fee Revenue' }
      ],
      testimonial: {
        quote: 'BitLayerx built us a world-class marketplace that competes with global platforms.',
        author: 'Zainab Ibrahim',
        role: 'Founder & CEO'
      },
      deliverables: [
        'Multi-vendor marketplace',
        'Vendor dashboard & analytics',
        'Escrow payment system',
        'Shipping API integration',
        'Mobile apps'
      ],
      timeline: '14 weeks',
      investment: '₦12M',
      website: 'https://afristyle.com'
    },
    {
      id: 9,
      category: 'saas',
      title: 'InvoiceFlow Pro',
      subtitle: 'Automated Invoicing SaaS',
      industry: 'SaaS & Technology',
      thumbnail: '📊',
      color: 'from-[#4682B4] to-[#0818A8]',
      challenge: 'Freelancers and SMEs struggling with manual invoicing and payment tracking',
      solution: 'Cloud-based invoicing SaaS with automated reminders and payment processing',
      services: ['SaaS Development', 'Payment Integration', 'Marketing'],
      results: [
        { metric: '2,000+', label: 'Active Users' },
        { metric: '₦180/user', label: 'MRR' },
        { metric: '15%', label: 'Monthly Growth' },
        { metric: '94%', label: 'Retention Rate' }
      ],
      testimonial: {
        quote: 'From MVP to profitable SaaS in 4 months. The automated billing system is pure gold.',
        author: 'Oluwaseun Adeleke',
        role: 'Founder'
      },
      deliverables: [
        'SaaS web application',
        'Automated invoice generation',
        'Payment processing (Stripe)',
        'Email reminders & follow-ups',
        'Analytics dashboard'
      ],
      timeline: '6 weeks',
      investment: '₦4M',
      website: 'https://invoiceflow.io'
    },
    {
      id: 10,
      category: 'finance',
      title: 'WealthWise Investment',
      subtitle: 'Digital Investment Platform',
      industry: 'Finance & Investment',
      thumbnail: '💰',
      color: 'from-[#fbbf24] to-[#f59e0b]',
      challenge: 'Traditional investment process too slow and inaccessible for young investors',
      solution: 'Mobile-first investment platform with automated portfolio management',
      services: ['Platform Development', 'Compliance', 'Mobile Apps'],
      results: [
        { metric: '10,000+', label: 'Investors' },
        { metric: '₦2.5B', label: 'AUM' },
        { metric: '3 min', label: 'Avg. Signup Time' },
        { metric: '88%', label: 'User Satisfaction' }
      ],
      testimonial: {
        quote: 'We democratized investing in Nigeria. The platform makes it dead simple for anyone to start.',
        author: 'Folake Williams',
        role: 'CEO'
      },
      deliverables: [
        'Investment platform (web & mobile)',
        'KYC automation',
        'Portfolio management system',
        'Real-time market data',
        'Compliance reporting'
      ],
      timeline: '16 weeks',
      investment: '₦18M',
      website: 'https://wealthwise.ng'
    },
    {
      id: 11,
      category: 'education',
      title: 'CodeCamp Kids',
      subtitle: 'Youth Coding Education Platform',
      industry: 'Education & E-Learning',
      thumbnail: '👾',
      color: 'from-[#0818A8] to-[#4682B4]',
      challenge: 'Teaching kids to code required expensive physical classes and equipment',
      solution: 'Gamified online learning platform with interactive coding challenges',
      services: ['Platform Development', 'Gamification', 'Content Creation'],
      results: [
        { metric: '5,000+', label: 'Students Enrolled' },
        { metric: '85%', label: 'Course Completion' },
        { metric: '12 min/day', label: 'Avg. Engagement' },
        { metric: '96%', label: 'Parent Satisfaction' }
      ],
      testimonial: {
        quote: 'Kids love the gamified lessons. Parents love seeing their kids learn valuable skills.',
        author: 'Michael Obi',
        role: 'Founder'
      },
      deliverables: [
        'Gamified learning platform',
        'Interactive code editor',
        'Progress tracking & badges',
        'Parent dashboard',
        'Mobile apps'
      ],
      timeline: '10 weeks',
      investment: '₦6M',
      website: 'https://codecampkids.ng'
    },
    {
      id: 12,
      category: 'ecommerce',
      title: 'GreenGrocer Organic',
      subtitle: 'Farm-to-Table E-commerce',
      industry: 'E-commerce & Agriculture',
      thumbnail: '🥬',
      color: 'from-[#00A651] to-[#00875a]',
      challenge: 'Connecting organic farmers with urban consumers, managing perishable inventory',
      solution: 'E-commerce platform with real-time inventory and same-day delivery logistics',
      services: ['E-commerce Development', 'Logistics Integration', 'Marketing'],
      results: [
        { metric: '500+', label: 'Daily Orders' },
        { metric: '8%', label: 'Waste Reduction' },
        { metric: '95%', label: 'On-Time Delivery' },
        { metric: '₦15M', label: 'Monthly Revenue' }
      ],
      testimonial: {
        quote: 'The real-time inventory system minimized waste and the logistics integration made same-day delivery possible.',
        author: 'Fatima Hassan',
        role: 'Co-Founder'
      },
      deliverables: [
        'E-commerce platform',
        'Real-time inventory tracking',
        'Delivery logistics integration',
        'Farmer dashboard',
        'Subscription system'
      ],
      timeline: '7 weeks',
      investment: '₦5.5M',
      website: 'https://greengrocer.ng'
    }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <>
      {/* SEO Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            "name": "BitLayerx Portfolio - 500+ Successful Digital Transformations",
            "description": "Explore our portfolio of successful projects across e-commerce, SaaS, finance, healthcare, education. Real results from real businesses.",
            "url": "https://bitlayerx.com/portfolio",
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
                  "name": "Portfolio",
                  "item": "https://bitlayerx.com/portfolio"
                }
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
                  <pattern id="portfolio-hexagons" x="0" y="0" width="100" height="86.6" patternUnits="userSpaceOnUse">
                    <path d="M50 0 L93.3 25 L93.3 61.6 L50 86.6 L6.7 61.6 L6.7 25 Z" fill="none" stroke="white" strokeWidth="1.5"/>
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#portfolio-hexagons)" />
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
                <Award size={18} className="text-[#fbbf24]" strokeWidth={2.5} />
                <span>500+ Projects • ₦50B+ Revenue Generated • 98% Success Rate</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white mb-6 leading-[1.05]"
              >
                <span className="block mb-3">Real Projects.</span>
                <span className="block bg-gradient-to-r from-[#4682B4] via-white to-[#4682B4] bg-clip-text text-transparent">
                  Real Results.
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-xl sm:text-2xl md:text-3xl text-white/95 max-w-4xl mx-auto mb-12 leading-relaxed"
              >
                From <span className="font-bold text-[#4682B4]">startups to enterprises</span>, we've helped businesses across Africa and beyond achieve <span className="font-bold text-white">extraordinary growth</span>.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
                <Link href="#projects">
                  <motion.button
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-10 py-5 bg-white text-[#0818A8] font-black text-lg rounded-xl shadow-2xl flex items-center gap-2 justify-center"
                  >
                    Explore Projects
                    <ArrowRight size={20} strokeWidth={3} />
                  </motion.button>
                </Link>
                <Link href="/contact">
                  <motion.button
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-10 py-5 bg-transparent text-white font-bold text-lg rounded-xl border-2 border-white/40 hover:border-white hover:bg-white/10 backdrop-blur-sm transition-all"
                  >
                    Start Your Project
                  </motion.button>
                </Link>
              </motion.div>

            </div>
          </div>
        </section>

        {/* Stats Bar */}
        <section className="py-12 bg-gray-50 border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { value: '500+', label: 'Projects Completed' },
                { value: '₦50B+', label: 'Revenue Generated' },
                { value: '98%', label: 'Success Rate' },
                { value: '24', label: 'Countries Served' }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-4xl md:text-5xl font-black text-[#0818A8] mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm md:text-base text-black/80 font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Filter Section */}
        <section id="projects" className="py-8 bg-white sticky top-0 z-40 border-b border-gray-200 shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
            <div className="flex items-center gap-4 mb-4">
              <Filter size={20} className="text-black/80" />
              <span className="text-sm font-bold text-gray-900 uppercase tracking-wider">
                Filter by Industry
              </span>
            </div>
            <div className="flex flex-wrap gap-3">
              {filterCategories.map((category) => (
                <motion.button
                  key={category.id}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setActiveFilter(category.id)}
                  className={`flex items-center gap-2 px-5 py-3 font-semibold rounded-lg transition-all ${
                    activeFilter === category.id
                      ? 'bg-[#0818A8] text-white shadow-lg'
                      : 'bg-gray-100 text-black/80 hover:bg-gray-200'
                  }`}
                >
                  {category.label}
                  <span className="text-xs opacity-75">({category.count})</span>
                </motion.button>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-20 md:py-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
            
            <AnimatePresence mode="wait">
              <motion.div
                key={activeFilter}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {filteredProjects.map((project, index) => (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                    whileHover={{ y: -8 }}
                    onClick={() => setSelectedProject(project)}
                    className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all cursor-pointer border-2 border-gray-100 hover:border-[#0818A8]"
                  >
                    {/* Thumbnail */}
                    <div className={`relative h-48 bg-gradient-to-br ${project.color} flex items-center justify-center`}>
                      <div className="text-7xl">{project.thumbnail}</div>
                      <div className="absolute top-4 right-4 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-bold text-gray-900">
                        {project.industry}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-[#0818A8] transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-[#4682B4] font-semibold mb-4">{project.subtitle}</p>
                      
                      {/* Results Preview */}
                      <div className="grid grid-cols-2 gap-3 mb-6">
                        {project.results.slice(0, 2).map((result, idx) => (
                          <div key={idx} className="text-center p-3 bg-gray-50 rounded-lg">
                            <div className="text-2xl font-black text-[#0818A8]">{result.metric}</div>
                            <div className="text-xs text-black/80">{result.label}</div>
                          </div>
                        ))}
                      </div>

                      {/* Services */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.services.slice(0, 2).map((service, idx) => (
                          <span key={idx} className="px-3 py-1 bg-gray-100 text-black/80 text-xs font-semibold rounded-full">
                            {service}
                          </span>
                        ))}
                        {project.services.length > 2 && (
                          <span className="px-3 py-1 bg-gray-100 text-black/80 text-xs font-semibold rounded-full">
                            +{project.services.length - 2} more
                          </span>
                        )}
                      </div>

                      {/* CTA */}
                      <motion.button
                        whileHover={{ x: 4 }}
                        className="flex items-center gap-2 text-gray-900 font-bold group-hover:text-[#0818A8] transition-colors"
                      >
                        View Case Study
                        <ChevronRight size={20} strokeWidth={2.5} />
                      </motion.button>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>

          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 md:py-28 bg-gradient-to-br from-[#0818A8] via-[#000080] to-[#0818A8] text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-12 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-6xl font-black mb-6">
                Ready to Be Our <span className="text-[#4682B4]">Next Success Story?</span>
              </h2>
              <p className="text-xl mb-12 text-white/90">
                Join 500+ businesses that have transformed their digital presence with BitLayerx
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <motion.button
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-12 py-5 bg-white text-[#0818A8] font-black text-xl rounded-xl shadow-2xl flex items-center gap-3 justify-center"
                  >
                    Start Your Project
                    <ArrowRight size={24} strokeWidth={3} />
                  </motion.button>
                </Link>
                
                <Link href="/packages">
                  <motion.button
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-12 py-5 bg-transparent text-white font-bold text-xl rounded-xl border-2 border-white hover:bg-white/10 transition-all"
                  >
                    View Packages
                  </motion.button>
                </Link>
              </div>

              <div className="mt-12 flex items-center justify-center gap-8 text-white/80 flex-wrap">
                <div className="flex items-center gap-2">
                  <CheckCircle size={20} />
                  <span className="text-sm">Free Consultation</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle size={20} />
                  <span className="text-sm">Custom Proposal</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle size={20} />
                  <span className="text-sm">Transparent Pricing</span>
                </div>
              </div>

            </motion.div>
          </div>
        </section>

      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-2xl max-w-5xl w-full max-h-[90vh] overflow-y-auto relative"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-100 transition-colors z-10"
              >
                <X size={24} strokeWidth={2} />
              </button>

              {/* Header */}
              <div className={`relative h-64 bg-gradient-to-br ${selectedProject.color} flex items-center justify-center`}>
                <div className="text-9xl">{selectedProject.thumbnail}</div>
              </div>

              {/* Content */}
              <div className="p-8 md:p-12">
                <div className="inline-block px-4 py-2 bg-[#0818A8]/10 text-[#0818A8] text-sm font-bold rounded-full mb-6">
                  {selectedProject.industry}
                </div>

                <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
                  {selectedProject.title}
                </h2>
                <p className="text-2xl text-[#4682B4] font-bold mb-8">{selectedProject.subtitle}</p>

                {/* Challenge */}
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">The Challenge</h3>
                  <p className="text-black/80 leading-relaxed">{selectedProject.challenge}</p>
                </div>

                {/* Solution */}
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Our Solution</h3>
                  <p className="text-black/80 leading-relaxed mb-4">{selectedProject.solution}</p>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.services.map((service, idx) => (
                      <span key={idx} className="px-4 py-2 bg-gray-100 text-black/80 text-sm font-semibold rounded-lg">
                        {service}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Results */}
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Results Achieved</h3>
                  <div className="grid md:grid-cols-4 gap-4">
                    {selectedProject.results.map((result, idx) => (
                      <div key={idx} className="text-center p-6 bg-gradient-to-br from-gray-50 to-white rounded-xl border-2 border-gray-100">
                        <div className="text-4xl font-black text-[#0818A8] mb-2">{result.metric}</div>
                        <div className="text-sm text-black/80 font-medium">{result.label}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Deliverables */}
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Key Deliverables</h3>
                  <ul className="grid md:grid-cols-2 gap-3">
                    {selectedProject.deliverables.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle size={20} className="text-[#00A651] flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                        <span className="text-black/80">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Testimonial */}
                <div className="mb-8 p-8 bg-gradient-to-br from-[#0818A8] to-[#000080] rounded-2xl text-white">
                  <div className="text-6xl mb-4 opacity-50">"</div>
                  <p className="text-xl leading-relaxed mb-6">{selectedProject.testimonial.quote}</p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center text-2xl">
                      {selectedProject.thumbnail}
                    </div>
                    <div>
                      <div className="font-bold">{selectedProject.testimonial.author}</div>
                      <div className="text-sm text-white/80">{selectedProject.testimonial.role}</div>
                    </div>
                  </div>
                </div>

                {/* Project Details */}
                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  <div className="text-center p-6 bg-gray-50 rounded-xl">
                    <div className="text-sm font-bold text-black/80 uppercase tracking-wider mb-2">Timeline</div>
                    <div className="text-2xl font-black text-gray-900">{selectedProject.timeline}</div>
                  </div>
                  <div className="text-center p-6 bg-gray-50 rounded-xl">
                    <div className="text-sm font-bold text-black/80 uppercase tracking-wider mb-2">Investment</div>
                    <div className="text-2xl font-black text-gray-900">{selectedProject.investment}</div>
                  </div>
                  <div className="text-center p-6 bg-gray-50 rounded-xl">
                    <div className="text-sm font-bold text-black/80 uppercase tracking-wider mb-2">Website</div>
                    <a href={selectedProject.website} target="_blank" rel="noopener noreferrer" className="text-lg font-bold text-[#0818A8] hover:underline flex items-center justify-center gap-2">
                      Visit Site
                      <ExternalLink size={18} strokeWidth={2.5} />
                    </a>
                  </div>
                </div>

                {/* CTA */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/contact" className="flex-1">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full py-4 bg-gradient-to-r from-[#0818A8] to-[#000080] text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all"
                    >
                      Start Similar Project
                    </motion.button>
                  </Link>
                  <Link href="/packages" className="flex-1">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full py-4 bg-white text-[#0818A8] font-bold rounded-xl border-2 border-[#0818A8] hover:bg-[#0818A8] hover:text-white transition-all"
                    >
                      View Packages
                    </motion.button>
                  </Link>
                </div>

              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}