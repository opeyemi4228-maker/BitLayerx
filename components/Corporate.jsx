'use client';
import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export default function BitLayerxInsightsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollContainerRef = useRef(null);

  const insights = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop&q=80",
      category: "Digital Growth",
      date: "14 February 2026",
      title: "How to Turn Your Website Into a Revenue-Generating Machine in 2026",
      type: "Article",
      duration: "5 minutes",
      link: "/blog/website-revenue"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&h=400&fit=crop&q=80",
      category: "AI Automation",
      date: "10 February 2026",
      title: "AI Chatbots: How to Reduce Customer Service Costs by 30-50%",
      type: "Guide",
      duration: "7 minutes",
      link: "/blog/ai-chatbots"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=600&h=400&fit=crop&q=80",
      category: "Marketing Strategy",
      date: "5 February 2026",
      title: "The Complete Guide to Performance Marketing for SMEs",
      type: "Article",
      duration: "6 minutes",
      link: "/blog/performance-marketing"
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop&q=80",
      category: "Brand Building",
      date: "1 February 2026",
      title: "Why Commercial Video Production is Essential for Brand Authority",
      type: "Case Study",
      duration: "4 minutes",
      link: "/blog/video-production"
    }
  ];

  const handlePrevious = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -400, behavior: 'smooth' });
    }
    setCurrentIndex(Math.max(0, currentIndex - 1));
  };

  const handleNext = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 400, behavior: 'smooth' });
    }
    setCurrentIndex(Math.min(insights.length - 1, currentIndex + 1));
  };

  return (
    <section className="bg-white py-20 lg:py-24 border-l-4 border-[#0818A8]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-6"
        >
          <h2 className="text-3xl lg:text-4xl font-light text-gray-900 mb-4 leading-tight">
            Latest Digital Growth Insights
          </h2>
          <p className="text-base text-gray-700 leading-relaxed max-w-3xl">
            Expert strategies, actionable tips, and real-world case studies to help you dominate your market through web development, marketing automation, and AI-powered solutions.
          </p>
        </motion.div>

        {/* Header Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 mb-12"
        >
          <Link href="/blog">
            <motion.button
              whileHover={{ backgroundColor: '#0818A8', color: '#ffffff' }}
              whileTap={{ scale: 0.98 }}
              className="px-6 py-3 bg-transparent text-gray-900 text-base font-medium border-2 border-gray-900 transition-all duration-300"
            >
              Browse All Insights
            </motion.button>
          </Link>

          {/* Navigation Controls */}
          <div className="flex gap-3 self-end sm:self-auto">
            <motion.button
              whileHover={{ scale: 1.05, backgroundColor: '#0818A8', color: '#ffffff' }}
              whileTap={{ scale: 0.95 }}
              onClick={handlePrevious}
              disabled={currentIndex === 0}
              className="w-12 h-12 rounded-full bg-gray-200 text-gray-900 flex items-center justify-center disabled:opacity-40 disabled:cursor-not-allowed transition-all duration-300"
              aria-label="Previous"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
              </svg>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05, backgroundColor: '#0818A8', color: '#ffffff' }}
              whileTap={{ scale: 0.95 }}
              onClick={handleNext}
              disabled={currentIndex >= insights.length - 1}
              className="w-12 h-12 rounded-full bg-gray-200 text-gray-900 flex items-center justify-center disabled:opacity-40 disabled:cursor-not-allowed transition-all duration-300"
              aria-label="Next"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>
              </svg>
            </motion.button>
          </div>
        </motion.div>

        {/* Cards Container */}
        <div 
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth snap-x snap-mandatory"
        >
          {insights.map((insight, index) => (
            <motion.div
              key={insight.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex-none w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] min-w-[320px] snap-start"
            >
              <Link href={insight.link}>
                <motion.div
                  whileHover={{ y: -8, boxShadow: '0 20px 40px rgba(8, 24, 168, 0.15)' }}
                  transition={{ duration: 0.3 }}
                  className="bg-white border border-gray-200 h-full flex flex-col group cursor-pointer"
                >
                  {/* Image */}
                  <div className="relative h-56 overflow-hidden">
                    <Image
                      src={insight.image}
                      alt={insight.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    {/* Category Badge */}
                    <div className="absolute top-4 left-4 px-3 py-1.5 bg-[#0818A8] text-white text-xs font-semibold uppercase tracking-wide">
                      {insight.category}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex flex-col flex-1">
                    <div className="text-sm text-gray-600 mb-3">{insight.date}</div>
                    
                    <h3 className="text-xl font-normal text-gray-900 leading-tight mb-auto group-hover:text-[#0818A8] transition-colors">
                      {insight.title}
                    </h3>

                    {/* Footer */}
                    <div className="flex justify-between items-center mt-6 pt-4 border-t border-gray-200">
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zM6 20V4h7v5h5v11H6z"/>
                        </svg>
                        <span>{insight.type}</span>
                        {insight.duration && (
                          <>
                            <span className="text-gray-400">•</span>
                            <span>{insight.duration}</span>
                          </>
                        )}
                      </div>

                      <motion.div
                        whileHover={{ x: 4 }}
                        className="text-[#0818A8]"
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>
                        </svg>
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* View All CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Link href="/blog">
            <motion.button
              whileHover={{ scale: 1.02, backgroundColor: '#0818A8' }}
              whileTap={{ scale: 0.98 }}
              className="px-10 py-4 bg-gradient-to-r from-[#0818A8] to-[#4682B4] text-white text-base font-semibold shadow-lg hover:shadow-xl transition-all duration-300 inline-flex items-center gap-2"
            >
              <span>View All Insights</span>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>
              </svg>
            </motion.button>
          </Link>
        </motion.div>
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}