'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function NewsletterSubscription() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Add your newsletter subscription logic here
    setTimeout(() => {
      setIsSubmitting(false);
      setEmail('');
      alert('Thank you for subscribing to BitLayerx insights!');
    }, 1000);
  };

  return (
    <section className="bg-white border-t border-b border-gray-200 py-16 lg:py-20">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto px-6 lg:px-12"
      >
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
          {/* Content Section */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex-1 max-w-xl"
          >
            <h2 className="text-3xl lg:text-4xl font-light text-gray-900 mb-4 leading-tight">
              Subscribe, be inspired, <span className="text-[#0818A8] font-normal">grow your business</span>
            </h2>
            <p className="text-base text-black/80 leading-relaxed">
              Subscribe to our newsletter to receive exclusive insights about digital growth strategies, web development, marketing automation, and business transformation delivered to your inbox.
            </p>
          </motion.div>

          {/* Form Section */}
          <motion.form 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            onSubmit={handleSubmit}
            className="flex-1 max-w-2xl w-full"
          >
            <div className="flex flex-col sm:flex-row gap-3">
              {/* Email Input */}
              <div className="flex-1 relative group">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="w-full px-6 py-4 bg-gray-50 border border-gray-300 text-gray-900 placeholder-gray-500 focus:bg-white focus:border-[#0818A8] focus:ring-2 focus:ring-[#0818A8]/20 focus:outline-none transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  required
                  disabled={isSubmitting}
                />
                {/* Animated focus underline */}
                <motion.div 
                  initial={{ width: 0 }}
                  whileFocus={{ width: '100%' }}
                  className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-[#0818A8] to-[#4682B4] transition-all duration-300"
                />
              </div>
              
              {/* Subscribe Button */}
              <motion.button 
                type="submit" 
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-10 py-4 bg-gradient-to-r from-[#0818A8] to-[#4682B4] text-white font-semibold hover:shadow-xl hover:shadow-[#0818A8]/30 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 whitespace-nowrap relative overflow-hidden group"
              >
                {/* Shimmer effect */}
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  initial={{ x: '-200%' }}
                  whileHover={{ x: '200%' }}
                  transition={{ duration: 1, ease: 'easeInOut' }}
                />
                
                <span className="relative z-10 flex items-center justify-center gap-2">
                  {isSubmitting ? (
                    <>
                      {/* Loading spinner */}
                      <motion.svg 
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                        className="w-5 h-5" 
                        viewBox="0 0 24 24"
                      >
                        <circle 
                          className="opacity-25" 
                          cx="12" 
                          cy="12" 
                          r="10" 
                          stroke="currentColor" 
                          strokeWidth="4" 
                          fill="none"
                        />
                        <path 
                          className="opacity-75" 
                          fill="currentColor" 
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        />
                      </motion.svg>
                      <span>Subscribing...</span>
                    </>
                  ) : (
                    'Subscribe'
                  )}
                </span>
              </motion.button>
            </div>

            {/* Trust indicators */}
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-4 flex flex-wrap items-center gap-3 text-xs text-black/80"
            >
              <div className="flex items-center gap-1.5">
                <svg className="w-4 h-4 text-[#4682B4]" fill="currentColor" viewBox="0 0 20 20">
                  <path 
                    fillRule="evenodd" 
                    d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" 
                    clipRule="evenodd"
                  />
                </svg>
                <span>Your data is secure</span>
              </div>
              <span className="text-gray-300">•</span>
              <span>No spam, unsubscribe anytime</span>
              <span className="text-gray-300">•</span>
              <span>Join 10,000+ subscribers</span>
            </motion.div>
          </motion.form>
        </div>
      </motion.div>
    </section>
  );
}