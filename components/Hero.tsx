'use client';
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calendar, ArrowRight, CheckCircle, X } from 'lucide-react';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import { Button } from '@/components/ui/button';

// Dynamically import Calendly to avoid SSR issues
const CalendlyWidget = dynamic(
  () => import('react-calendly').then((mod) => mod.InlineWidget),
  { ssr: false }
);

const Hero = () => {
  const [showCalendly, setShowCalendly] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);


  }, []);

  const benefits = [
    "Professional digital strategy consultation",
    "Custom solution roadmap for your business",
    "Expert advice from industry specialists",
    "No obligation, 100% free consultation"
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-black via-blue-950 to-black min-h-[90vh] flex items-center">
      {/* Background graphics */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern opacity-20" />
        <div className="absolute top-20 right-20 w-72 h-72 bg-blue-500 rounded-full filter blur-[120px] opacity-20" />
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-purple-500 rounded-full filter blur-[120px] opacity-15" />
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 30 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-center lg:text-left"
          >
            {/* Overhead text */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-block px-3 py-1 mb-6 bg-blue-500/10 border border-blue-500/20 rounded-full"
            >
              <span className="text-blue-400 font-medium text-sm">India's Leading Digital Agency</span>
            </motion.div>
            
            {/* Heading */}
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-blue-200"
            >
              Transform Your Business with Expert Digital Solutions
            </motion.h1>
            
            {/* Subheading */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-lg text-gray-300 mb-8 max-w-xl mx-auto lg:mx-0"
            >
              OctaVertex Media delivers cutting-edge web development, digital marketing, and branding strategies that drive growth and elevate your online presence.
            </motion.p>

            {/* Benefits list */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="mb-8"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-left">
                {benefits.map((benefit, index) => (
                  <div 
                    key={index} 
                    className="flex items-start gap-2"
                  >
                    <CheckCircle className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300 text-sm">{benefit}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            
            {/* CTA Button */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Button
                onClick={() => setShowCalendly(true)}
                className="relative group px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium text-lg transition-all duration-300 flex items-center justify-center gap-2 w-full sm:w-auto"
              >
                <Calendar className="w-5 h-5" />
                <span>Book Free Consultation</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">
                  Free
                </span>
              </Button>
              <Button
                variant="outline"
                className="border-blue-400/30 text-blue-300 hover:bg-blue-500/10 px-6 py-3 rounded-lg font-medium text-lg transition-all duration-300 w-full sm:w-auto"
              >
                View Our Work
              </Button>
            </motion.div>
            
            {/* Social proof */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="mt-10 flex flex-wrap items-center justify-center lg:justify-start gap-6"
            >
              <div className="flex -space-x-3">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className="w-8 h-8 rounded-full border-2 border-blue-900 overflow-hidden bg-blue-800">
                    <Image 
                      src={`/clients/avatar-${i}.png`} 
                      alt={`Client ${i}`} 
                      width={32} 
                      height={32}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = 'https://via.placeholder.com/32';
                      }}
                    />
                  </div>
                ))}
              </div>
              <div className="text-sm text-gray-400">
                <span className="text-white font-semibold">150+ businesses</span> trust our expertise
              </div>
            </motion.div>
          </motion.div>
          
          {/* Right Column - Image/Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: isLoaded ? 1 : 0, scale: isLoaded ? 1 : 0.95 }}
            transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
            className="relative hidden lg:block"
          >
            <div className="relative rounded-xl overflow-hidden border border-blue-500/20 bg-blue-900/10 backdrop-blur-sm p-1 shadow-2xl shadow-blue-500/10">










              <Image
                src="/hero-dashboard.png"
                alt="OctaVertex Media Dashboard"
                width={600}
                height={400}
                className="rounded-lg"
                priority
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = 'https://via.placeholder.com/600x400?text=OctaVertex+Dashboard';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent rounded-lg"></div>
              <div className="absolute bottom-4 left-4 right-4 p-4 bg-black/40 backdrop-blur-sm rounded-lg border border-white/10">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-xs text-blue-300">Project Result</p>
                    <h4 className="text-white font-bold">+145% Increase in Conversions</h4>
                  </div>
                  <div className="bg-blue-500/20 p-2 rounded-full">
                    <ArrowRight className="w-5 h-5 text-blue-300" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Calendly Widget Modal */}
      {showCalendly && (
        <div className="fixed inset-0 bg-black/60 z-20">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative w-full max-w-2xl p-8 bg-white rounded-lg">
              <button
                onClick={() => setShowCalendly(false)}
                className="absolute top-4 right-4 text-gray-600 hover:text-gray-800"
              >
                <X className="w-6 h-6" />
              </button>
              <CalendlyWidget url="https://calendly.com/your-calendly-link" />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Hero;
