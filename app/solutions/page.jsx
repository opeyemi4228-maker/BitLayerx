'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import {
  Rocket, Building2, Users, Zap, TrendingUp, ShoppingCart,
  Heart, Briefcase, GraduationCap, Home, Utensils, Car,
  ArrowRight, CheckCircle, Target, BarChart3, Clock,
  Shield, Award, Sparkles, ChevronDown, ChevronUp,
  DollarSign, TrendingDown, Play, Star, Globe,
  Code, Palette, MessageCircle, Search, Mail
} from 'lucide-react';

export default function SolutionsPage() {
  const [activeSolution, setActiveSolution] = useState('startups');
  const [openFaq, setOpenFaq] = useState(null);

  // Solution Categories
  const solutionCategories = [
    { id: 'startups', label: 'For Startups', icon: Rocket },
    { id: 'enterprise', label: 'For Enterprises', icon: Building2 },
    { id: 'agencies', label: 'For Agencies', icon: Users },
  ];

  // Industry Solutions
  const industries = [
    {
      id: 'ecommerce',
      name: 'E-commerce & Retail',
      icon: ShoppingCart,
      color: 'from-[#0818A8] to-[#000080]',
      tagline: 'Sell More. Automate Everything.',
      description: 'Complete e-commerce solutions that drive sales and streamline operations',
      challenges: [
        'Low conversion rates',
        'Cart abandonment',
        'Manual inventory management',
        'Poor mobile experience'
      ],
      solutions: [
        'Conversion-optimized store design',
        'AI chatbot for customer support',
        'Automated inventory & order management',
        'Mobile-first shopping experience',
        'Performance marketing campaigns'
      ],
      results: {
        conversion: '35-60%',
        revenue: '200%',
        automation: '70%',
        roi: '350%'
      },
      caseStudy: {
        client: 'FreshMart Nigeria',
        result: 'Increased online revenue by 320% in 6 months',
        quote: 'The automated inventory system alone saved us ₦8M annually'
      }
    },
    {
      id: 'healthcare',
      name: 'Healthcare & Wellness',
      icon: Heart,
      color: 'from-[#dc2626] to-[#b91c1c]',
      tagline: 'Better Care Through Better Tech',
      description: 'HIPAA-compliant solutions that improve patient care and operational efficiency',
      challenges: [
        'Manual appointment booking',
        'Poor patient communication',
        'Data security concerns',
        'Inefficient admin processes'
      ],
      solutions: [
        'Online appointment booking system',
        'Automated appointment reminders',
        'Secure patient portal',
        'Telemedicine integration',
        'Medical records management'
      ],
      results: {
        appointments: '45%',
        noShows: '60%',
        efficiency: '50%',
        satisfaction: '85%'
      },
      caseStudy: {
        client: 'HealthPlus Clinics',
        result: 'Reduced no-shows by 60%, saved 15 hours/week on admin',
        quote: 'Patients love the online booking. Our staff loves the extra time'
      }
    },
    {
      id: 'finance',
      name: 'Finance & Banking',
      icon: Briefcase,
      color: 'from-[#4682B4] to-[#0818A8]',
      tagline: 'Secure. Compliant. Scalable.',
      description: 'Bank-grade security with modern digital experiences',
      challenges: [
        'Legacy systems',
        'Regulatory compliance',
        'Security concerns',
        'Poor mobile experience'
      ],
      solutions: [
        'Modern web & mobile apps',
        'Compliance automation',
        'Advanced security protocols',
        'Customer onboarding automation',
        'Real-time analytics dashboards'
      ],
      results: {
        onboarding: '75%',
        security: '99.9%',
        compliance: '100%',
        satisfaction: '92%'
      },
      caseStudy: {
        client: 'Lagos Financial Services',
        result: 'Onboarded 5,000+ customers in first quarter',
        quote: 'The platform is both secure and user-friendly—a rare combination'
      }
    },
    {
      id: 'education',
      name: 'Education & E-Learning',
      icon: GraduationCap,
      color: 'from-[#fbbf24] to-[#f59e0b]',
      tagline: 'Scale Education. Empower Students.',
      description: 'Learning platforms that engage students and simplify administration',
      challenges: [
        'Low student engagement',
        'Manual grading & admin',
        'Limited reach',
        'Poor content delivery'
      ],
      solutions: [
        'Interactive learning platform',
        'Automated grading & assessment',
        'Video course hosting',
        'Student progress tracking',
        'Mobile learning apps'
      ],
      results: {
        engagement: '80%',
        reach: '500%',
        admin: '60%',
        completion: '45%'
      },
      caseStudy: {
        client: 'TechAcademy Africa',
        result: 'Grew from 200 to 5,000 students in 12 months',
        quote: 'The platform scaled effortlessly as we grew'
      }
    },
    {
      id: 'realestate',
      name: 'Real Estate & Property',
      icon: Home,
      color: 'from-[#00A651] to-[#00875a]',
      tagline: 'Sell Faster. Manage Smarter.',
      description: 'Digital solutions that close deals and streamline property management',
      challenges: [
        'Slow lead qualification',
        'Manual property tours',
        'Poor listing visibility',
        'Inefficient communication'
      ],
      solutions: [
        'AI-powered lead qualification',
        'Virtual property tours',
        'Advanced property listings',
        'Automated follow-up system',
        'Property management portal'
      ],
      results: {
        leads: '150%',
        closingTime: '40%',
        efficiency: '65%',
        satisfaction: '90%'
      },
      caseStudy: {
        client: 'Prime Properties Lagos',
        result: 'Closed 45% more deals with 30% less effort',
        quote: 'The virtual tours changed everything for international buyers'
      }
    },
    {
      id: 'hospitality',
      name: 'Hospitality & Food',
      icon: Utensils,
      color: 'from-[#ec4899] to-[#db2777]',
      tagline: 'Delight Guests. Maximize Revenue.',
      description: 'Solutions that enhance guest experience and operational efficiency',
      challenges: [
        'Manual reservations',
        'Poor online presence',
        'Inefficient operations',
        'Low repeat business'
      ],
      solutions: [
        'Online booking & reservations',
        'Menu ordering system',
        'Customer loyalty program',
        'Review management',
        'Kitchen automation'
      ],
      results: {
        bookings: '200%',
        efficiency: '55%',
        repeat: '75%',
        revenue: '180%'
      },
      caseStudy: {
        client: 'Jollof Palace Restaurant',
        result: 'Online orders now 40% of revenue',
        quote: 'The loyalty program alone paid for the entire system'
      }
    }
  ];

  // Solution Features by Category
  const solutionFeatures = {
    startups: {
      title: 'Solutions for Startups',
      subtitle: 'Launch Fast. Scale Faster.',
      description: 'Get to market in weeks, not months. Pre-built solutions designed for rapid growth.',
      features: [
        {
          icon: Rocket,
          title: 'MVP Development',
          description: 'Launch your minimum viable product in 2-3 weeks',
          deliverables: ['Core features', 'Mobile responsive', 'Analytics setup']
        },
        {
          icon: TrendingUp,
          title: 'Growth Marketing',
          description: 'Acquire your first 1,000 customers profitably',
          deliverables: ['Paid ads setup', 'Landing pages', 'Conversion optimization']
        },
        {
          icon: Code,
          title: 'Tech Stack Setup',
          description: 'Modern, scalable infrastructure from day one',
          deliverables: ['Cloud hosting', 'CI/CD pipeline', 'Monitoring tools']
        },
        {
          icon: Palette,
          title: 'Brand Identity',
          description: 'Professional brand that stands out',
          deliverables: ['Logo design', 'Brand guidelines', 'Marketing materials']
        }
      ],
      pricing: {
        from: '₦1.5M',
        to: '₦5M',
        timeline: '2-6 weeks'
      }
    },
    enterprise: {
      title: 'Solutions for Enterprises',
      subtitle: 'Scale Operations. Reduce Costs.',
      description: 'Enterprise-grade solutions with dedicated support and custom development.',
      features: [
        {
          icon: Building2,
          title: 'Digital Transformation',
          description: 'Modernize legacy systems and processes',
          deliverables: ['System audit', 'Migration strategy', 'Change management']
        },
        {
          icon: Zap,
          title: 'Process Automation',
          description: 'Reduce operational costs by 30-50%',
          deliverables: ['Workflow automation', 'AI integration', 'Custom tools']
        },
        {
          icon: Shield,
          title: 'Enterprise Security',
          description: 'Bank-grade security and compliance',
          deliverables: ['Security audit', 'Compliance setup', '24/7 monitoring']
        },
        {
          icon: Users,
          title: 'Dedicated Team',
          description: 'Your own digital department',
          deliverables: ['Account manager', 'Dev team', 'Priority support']
        }
      ],
      pricing: {
        from: '₦8M',
        to: '₦50M+',
        timeline: '8-16 weeks'
      }
    },
    agencies: {
      title: 'Solutions for Agencies',
      subtitle: 'White-Label. Scale Your Offering.',
      description: 'Partner with us to deliver world-class solutions under your brand.',
      features: [
        {
          icon: Globe,
          title: 'White-Label Services',
          description: 'Our work, your brand',
          deliverables: ['Custom branding', 'Client reports', 'Partner portal']
        },
        {
          icon: Users,
          title: 'Team Extension',
          description: 'Scale your capacity without hiring',
          deliverables: ['Dedicated devs', 'Designers', 'Marketers']
        },
        {
          icon: Target,
          title: 'Revenue Share',
          description: 'Earn recurring revenue on every project',
          deliverables: ['20% commission', 'Monthly payouts', 'Performance bonuses']
        },
        {
          icon: Award,
          title: 'Partner Support',
          description: 'We help you win and deliver',
          deliverables: ['Sales materials', 'Technical pre-sales', 'Project management']
        }
      ],
      pricing: {
        from: '₦500k',
        to: '₦10M+',
        timeline: 'Ongoing partnership'
      }
    }
  };

  // Success Stories
  const successStories = [
    {
      company: 'TechHub Lagos',
      industry: 'Tech Startup',
      challenge: 'Needed to launch MVP quickly to secure Series A funding',
      solution: 'MVP development + performance marketing package',
      results: [
        'Launched in 3 weeks',
        '5,000 users in first month',
        'Secured ₦50M Series A',
        'Platform handling 50k+ users'
      ],
      quote: 'BitLayerx helped us move from idea to funded startup in 90 days',
      image: '👨🏾‍💼',
      name: 'Chidi Okonkwo',
      role: 'CEO'
    },
    {
      company: 'FreshMart Nigeria',
      industry: 'E-commerce',
      challenge: 'Low conversion rates and manual operations killing growth',
      solution: 'E-commerce optimization + AI automation',
      results: [
        '320% revenue increase',
        '70% ops automation',
        '45% higher conversion',
        '₦8M annual savings'
      ],
      quote: 'The ROI was incredible. System paid for itself in 2 months',
      image: '👩🏽‍💼',
      name: 'Amara Johnson',
      role: 'COO'
    },
    {
      company: 'Lagos Financial Services',
      industry: 'Finance',
      challenge: 'Legacy systems causing compliance issues and poor UX',
      solution: 'Digital transformation + security compliance',
      results: [
        '5,000+ customers onboarded',
        '75% faster onboarding',
        '100% compliance achieved',
        '92% customer satisfaction'
      ],
      quote: 'Finally, a platform that\'s both secure and user-friendly',
      image: '👨🏿‍💼',
      name: 'David Adebayo',
      role: 'Operations Director'
    }
  ];

  // FAQs
  const faqs = [
    {
      question: 'How do I know which solution is right for my business?',
      answer: 'Schedule a free consultation and we\'ll assess your needs, challenges, and goals. We\'ll recommend the best solution and provide a detailed proposal with timeline and pricing.'
    },
    {
      question: 'Can you customize solutions for my specific industry?',
      answer: 'Absolutely! While we have pre-built solutions for common industries, every implementation is customized to your specific needs, processes, and goals.'
    },
    {
      question: 'What\'s the typical ROI and payback period?',
      answer: 'Most clients see positive ROI within 3-6 months. E-commerce clients average 250% ROI in year one. Automation projects typically pay for themselves in 60-90 days through cost savings.'
    },
    {
      question: 'Do you provide ongoing support after launch?',
      answer: 'Yes! All solutions include support (duration varies by package). We offer maintenance retainers starting from ₦50k/month with different service levels.'
    },
    {
      question: 'Can you integrate with our existing systems?',
      answer: 'Yes. We specialize in integrations with CRMs, ERPs, payment gateways, and other business tools. We\'ll audit your current tech stack and design the optimal integration strategy.'
    },
    {
      question: 'What if we need to scale quickly?',
      answer: 'Our solutions are built for scale from day one. We use cloud infrastructure that grows with you. Several clients have grown from hundreds to hundreds of thousands of users on our platforms.'
    }
  ];

  const activeSolutionData = solutionFeatures[activeSolution];

  return (
    <>
      {/* SEO Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "BitLayerx Solutions - Digital Transformation for Every Industry",
            "description": "Industry-specific digital solutions for startups, enterprises, and agencies. From e-commerce to healthcare, we deliver measurable results.",
            "url": "https://bitlayerx.com/solutions",
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
                  "name": "Solutions",
                  "item": "https://bitlayerx.com/solutions"
                }
              ]
            },
            "mainEntity": {
              "@type": "Service",
              "serviceType": "Digital Transformation Solutions",
              "provider": {
                "@type": "Organization",
                "name": "BitLayerx"
              },
              "areaServed": {
                "@type": "Country",
                "name": "Nigeria"
              }
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
                  <pattern id="solutions-pattern" x="0" y="0" width="100" height="86.6" patternUnits="userSpaceOnUse">
                    <path d="M50 0 L93.3 25 L93.3 61.6 L50 86.6 L6.7 61.6 L6.7 25 Z" fill="none" stroke="white" strokeWidth="1.5"/>
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#solutions-pattern)" />
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
                <Target size={18} className="text-[#fbbf24]" strokeWidth={2.5} />
                <span>Industry-Specific Solutions • Proven Results • 500+ Implementations</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white mb-6 leading-[1.05]"
              >
                <span className="block mb-3">Your Industry.</span>
                <span className="block bg-gradient-to-r from-[#4682B4] via-white to-[#4682B4] bg-clip-text text-transparent">
                  Our Expertise.
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-xl sm:text-2xl md:text-3xl text-white/95 max-w-4xl mx-auto mb-12 leading-relaxed"
              >
                Tailored digital solutions for <span className="font-bold text-[#4682B4]">startups</span>, <span className="font-bold text-[#4682B4]">enterprises</span>, and every industry in between. <span className="font-bold text-white">Results guaranteed</span>.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
                <Link href="#solutions">
                  <motion.button
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-10 py-5 bg-white text-[#0818A8] font-black text-lg rounded-xl shadow-2xl flex items-center gap-2 justify-center"
                  >
                    Explore Solutions
                    <ArrowRight size={20} strokeWidth={3} />
                  </motion.button>
                </Link>
                <Link href="/contact">
                  <motion.button
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-10 py-5 bg-transparent text-white font-bold text-lg rounded-xl border-2 border-white/40 hover:border-white hover:bg-white/10 backdrop-blur-sm transition-all"
                  >
                    Get Custom Quote
                  </motion.button>
                </Link>
              </motion.div>

            </div>
          </div>
        </section>

        {/* Solution Categories */}
        <section id="solutions" className="py-8 bg-gray-50 border-b border-gray-200 sticky top-0 z-40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
            <div className="flex flex-wrap gap-3 justify-center">
              {solutionCategories.map((category) => {
                const Icon = category.icon;
                return (
                  <motion.button
                    key={category.id}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setActiveSolution(category.id)}
                    className={`flex items-center gap-2 px-6 py-3 font-semibold transition-all rounded-lg ${
                      activeSolution === category.id
                        ? 'bg-[#0818A8] text-white shadow-lg'
                        : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                    }`}
                  >
                    <Icon size={20} strokeWidth={2} />
                    {category.label}
                  </motion.button>
                );
              })}
            </div>
          </div>
        </section>

        {/* Active Solution Details */}
        <section className="py-20 md:py-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
            
            <motion.div
              key={activeSolution}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-16 text-center"
            >
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
                {activeSolutionData.title}
              </h2>
              <p className="text-2xl text-[#4682B4] font-bold mb-4">{activeSolutionData.subtitle}</p>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">{activeSolutionData.description}</p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {activeSolutionData.features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -8 }}
                    className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all border-2 border-gray-100 hover:border-[#0818A8]"
                  >
                    <div className="inline-flex p-4 bg-gradient-to-br from-[#0818A8] to-[#4682B4] rounded-xl mb-6">
                      <Icon size={32} className="text-white" strokeWidth={2} />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                    <p className="text-gray-700 mb-6 leading-relaxed">{feature.description}</p>
                    <div>
                      <p className="text-sm font-bold text-gray-900 mb-3">Key Deliverables:</p>
                      <ul className="space-y-2">
                        {feature.deliverables.map((item, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-gray-700">
                            <CheckCircle size={16} className="text-[#00A651] flex-shrink-0" strokeWidth={2.5} />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border-2 border-gray-200 text-center"
            >
              <div className="grid md:grid-cols-3 gap-8 items-center">
                <div>
                  <p className="text-sm font-bold text-gray-600 mb-2">Investment Range</p>
                  <p className="text-3xl font-black text-[#0818A8]">
                    {activeSolutionData.pricing.from} - {activeSolutionData.pricing.to}
                  </p>
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-600 mb-2">Timeline</p>
                  <p className="text-3xl font-black text-gray-900">{activeSolutionData.pricing.timeline}</p>
                </div>
                <div>
                  <Link href="/contact">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-full px-8 py-4 bg-gradient-to-r from-[#0818A8] to-[#000080] text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all"
                    >
                      Get Started
                    </motion.button>
                  </Link>
                </div>
              </div>
            </motion.div>

          </div>
        </section>

        {/* Industry Solutions */}
        <section className="py-20 md:py-28 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <div className="inline-block px-4 py-2 bg-[#0818A8]/10 text-[#0818A8] text-sm font-bold rounded-full mb-6">
                INDUSTRY EXPERTISE
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
                Solutions by <span className="text-[#0818A8]">Industry</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Pre-built solutions tailored to your industry's unique challenges and opportunities
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {industries.map((industry, index) => {
                const Icon = industry.icon;
                return (
                  <motion.div
                    key={industry.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    whileHover={{ y: -8 }}
                    className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all border-2 border-gray-100 hover:border-[#0818A8]"
                  >
                    <div className={`p-8 bg-gradient-to-br ${industry.color}`}>
                      <Icon size={48} className="text-white mb-4" strokeWidth={1.5} />
                      <h3 className="text-2xl font-bold text-white mb-2">{industry.name}</h3>
                      <p className="text-white/90 text-lg font-semibold">{industry.tagline}</p>
                    </div>
                    <div className="p-8">
                      <p className="text-gray-700 mb-6">{industry.description}</p>
                      
                      <div className="mb-6">
                        <p className="text-sm font-bold text-gray-900 mb-3">Key Results:</p>
                        <div className="grid grid-cols-2 gap-3">
                          {Object.entries(industry.results).map(([key, value]) => (
                            <div key={key} className="text-center p-3 bg-gray-50 rounded-lg">
                              <div className="text-2xl font-black text-[#0818A8]">{value}</div>
                              <div className="text-xs text-gray-600 capitalize">{key.replace(/([A-Z])/g, ' $1')}</div>
                            </div>
                          ))}
                        </div>
                      </div>

                      <Link href={`/solutions/${industry.id}`}>
                        <motion.button
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className="w-full py-3 bg-gray-900 text-white font-semibold rounded-lg hover:bg-[#0818A8] transition-all flex items-center justify-center gap-2"
                        >
                          Learn More
                          <ArrowRight size={16} strokeWidth={2.5} />
                        </motion.button>
                      </Link>
                    </div>
                  </motion.div>
                );
              })}
            </div>

          </div>
        </section>

        {/* Success Stories */}
        <section className="py-20 md:py-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <div className="inline-block px-4 py-2 bg-[#0818A8]/10 text-[#0818A8] text-sm font-bold rounded-full mb-6">
                SUCCESS STORIES
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
                Real Clients. <span className="text-[#0818A8]">Real Results.</span>
              </h2>
              <p className="text-xl text-gray-600">
                See how we've helped businesses transform and grow
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
                  className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all border-2 border-gray-100"
                >
                  <div className="inline-block px-3 py-1 bg-[#0818A8]/10 text-[#0818A8] text-xs font-bold rounded-full mb-4">
                    {story.industry}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{story.company}</h3>
                  
                  <div className="mb-6">
                    <p className="text-sm font-bold text-gray-900 mb-2">Challenge:</p>
                    <p className="text-gray-700 text-sm mb-4">{story.challenge}</p>
                    
                    <p className="text-sm font-bold text-gray-900 mb-2">Solution:</p>
                    <p className="text-gray-700 text-sm mb-4">{story.solution}</p>
                    
                    <p className="text-sm font-bold text-gray-900 mb-3">Results:</p>
                    <ul className="space-y-2 mb-6">
                      {story.results.map((result, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm">
                          <CheckCircle size={16} className="text-[#00A651] flex-shrink-0" strokeWidth={2.5} />
                          <span className="text-gray-700">{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-6 border-t border-gray-200">
                    <p className="text-gray-700 italic mb-4">"{story.quote}"</p>
                    <div className="flex items-center gap-3">
                      <div className="text-3xl">{story.image}</div>
                      <div>
                        <div className="font-bold text-gray-900">{story.name}</div>
                        <div className="text-sm text-gray-600">{story.role}</div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 md:py-28 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-12">
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
                Frequently Asked <span className="text-[#0818A8]">Questions</span>
              </h2>
            </motion.div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="bg-white rounded-xl shadow-lg overflow-hidden border-2 border-gray-100"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                  >
                    <span className="font-bold text-gray-900 text-lg pr-4">{faq.question}</span>
                    {openFaq === index ? (
                      <ChevronUp size={24} className="text-[#0818A8] flex-shrink-0" strokeWidth={2.5} />
                    ) : (
                      <ChevronDown size={24} className="text-gray-400 flex-shrink-0" strokeWidth={2.5} />
                    )}
                  </button>
                  <AnimatePresence>
                    {openFaq === index && (
                      <motion.div
                        initial={{ height: 0 }}
                        animate={{ height: 'auto' }}
                        exit={{ height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-8 pb-6 text-gray-700 leading-relaxed">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>

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
                Ready to <span className="text-[#4682B4]">Transform</span> Your Business?
              </h2>
              <p className="text-xl mb-12 text-white/90">
                Schedule a free consultation and discover the perfect solution for your industry
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <motion.button
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-12 py-5 bg-white text-[#0818A8] font-black text-xl rounded-xl shadow-2xl flex items-center gap-3 justify-center"
                  >
                    Book Free Consultation
                    <ArrowRight size={24} strokeWidth={3} />
                  </motion.button>
                </Link>
                
                <a href="https://wa.me/2348034567890">
                  <motion.button
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-12 py-5 bg-transparent text-white font-bold text-xl rounded-xl border-2 border-white hover:bg-white/10 transition-all"
                  >
                    Chat on WhatsApp
                  </motion.button>
                </a>
              </div>

              <div className="mt-12 flex items-center justify-center gap-8 text-white/80 flex-wrap">
                <div className="flex items-center gap-2">
                  <CheckCircle size={20} />
                  <span className="text-sm">Free Consultation</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle size={20} />
                  <span className="text-sm">No Obligation Quote</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle size={20} />
                  <span className="text-sm">24hr Response Time</span>
                </div>
              </div>

            </motion.div>
          </div>
        </section>

      </div>
    </>
  );
}