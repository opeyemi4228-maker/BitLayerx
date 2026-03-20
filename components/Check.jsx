'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Award, Users, Zap } from 'lucide-react';

export default function TrustedBrandsSection() {
  const stats = [
    {
      icon: TrendingUp,
      value: '₦50B+',
      label: 'Revenue Generated',
      color: 'from-[#00A651] to-[#00875a]',
    },
    {
      icon: Award,
      value: '500+',
      label: 'Projects Delivered',
      color: 'from-[#0818A8] to-[#000080]',
    },
    {
      icon: Users,
      value: '98%',
      label: 'Client Retention',
      color: 'from-[#4682B4] to-[#0818A8]',
    },
    {
      icon: Zap,
      value: '24',
      label: 'Countries Served',
      color: 'from-[#fbbf24] to-[#f59e0b]',
    },
  ];

  const brands = [
    { name: 'Dangote Group', industry: 'Manufacturing' },
    { name: 'FirstBank', industry: 'Banking' },
    { name: 'GTBank', industry: 'Banking' },
    { name: 'Zenith Bank', industry: 'Banking' },
    { name: 'MTN Nigeria', industry: 'Telecommunications' },
    { name: 'Flutterwave', industry: 'Fintech' },
    { name: 'Nigerian Breweries', industry: 'FMCG' },
    { name: 'Access Bank', industry: 'Banking' },
  ];

  return (
    <section className="relative bg-white py-20 md:py-28 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Subtle Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0818A805_1px,transparent_1px),linear-gradient(to_bottom,#0818A805_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
        
        {/* Gradient Orbs */}
        <div 
          className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full opacity-30"
          style={{
            background: 'radial-gradient(circle, rgba(8, 24, 168, 0.08) 0%, transparent 70%)',
          }}
        />
        <div 
          className="absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full opacity-20"
          style={{
            background: 'radial-gradient(circle, rgba(70, 130, 180, 0.06) 0%, transparent 70%)',
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block mb-4"
          >
            <span className="px-4 py-2 bg-gradient-to-r from-[#0818A8]/10 to-[#4682B4]/10 border border-[#0818A8]/20 rounded-full text-sm font-bold text-[#0818A8] tracking-wide">
              TRUSTED BY INDUSTRY LEADERS
            </span>
          </motion.div>
          
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-gray-900 mb-6 leading-tight">
            Powering Africa's
            <span className="block bg-gradient-to-r from-[#0818A8] to-[#4682B4] bg-clip-text text-transparent">
              Digital Revolution
            </span>
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From startups to Fortune 500 companies, we deliver digital solutions that drive measurable growth across Africa and beyond.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-20"
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                whileHover={{ scale: 1.05, y: -8 }}
                className="relative group"
              >
                <div className="relative bg-white border-2 border-gray-100 rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
                  {/* Gradient Background on Hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                  
                  {/* Icon */}
                  <div className="relative mb-4">
                    <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${stat.color} bg-opacity-10`}>
                      <Icon size={28} className="text-gray-900" strokeWidth={2} />
                    </div>
                  </div>
                  
                  {/* Value */}
                  <div className="relative text-4xl md:text-5xl font-black text-gray-900 mb-2 group-hover:bg-gradient-to-br group-hover:bg-clip-text group-hover:text-transparent" style={{ backgroundImage: `linear-gradient(to bottom right, var(--tw-gradient-stops))` }}>
                    {stat.value}
                  </div>
                  
                  {/* Label */}
                  <div className="relative text-sm md:text-base text-gray-600 font-medium">
                    {stat.label}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Brands Grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
              Trusted by Leading African Brands
            </h3>
            <p className="text-lg text-gray-600">
              Join 500+ companies transforming their digital presence
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {brands.map((brand, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.05 * index }}
                whileHover={{ scale: 1.05, y: -4 }}
                className="group"
              >
                <div className="relative bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-xl p-6 md:p-8 hover:border-[#0818A8]/30 hover:shadow-xl transition-all duration-300">
                  {/* Hover Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#0818A8]/5 to-[#4682B4]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
                  
                  <div className="relative text-center">
                    <div className="text-xl md:text-2xl font-black text-gray-900 mb-2 group-hover:text-[#0818A8] transition-colors">
                      {brand.name}
                    </div>
                    <div className="text-xs md:text-sm text-gray-500 font-medium uppercase tracking-wider">
                      {brand.industry}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-20 pt-16 border-t border-gray-200"
        >
          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 mb-4 bg-gradient-to-br from-[#0818A8]/10 to-[#4682B4]/10 rounded-full">
                <Award size={32} className="text-[#0818A8]" strokeWidth={2} />
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">ISO Certified</h4>
              <p className="text-gray-600">Quality management systems meeting international standards</p>
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 mb-4 bg-gradient-to-br from-[#00A651]/10 to-[#00875a]/10 rounded-full">
                <Zap size={32} className="text-[#00A651]" strokeWidth={2} />
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">99.9% Uptime</h4>
              <p className="text-gray-600">Enterprise-grade infrastructure with guaranteed reliability</p>
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 mb-4 bg-gradient-to-br from-[#fbbf24]/10 to-[#f59e0b]/10 rounded-full">
                <Users size={32} className="text-[#fbbf24]" strokeWidth={2} />
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">24/7 Support</h4>
              <p className="text-gray-600">Dedicated team ready to assist you anytime, anywhere</p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}