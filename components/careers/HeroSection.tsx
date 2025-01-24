'use client';

import { motion } from "framer-motion";
import { GraduationCap, Users, Rocket, Globe2 } from 'lucide-react';
import Image from "next/image";

export default function HeroSection() {
  const stats = [
    { icon: <Users className="w-5 h-5" />, label: "Global Team", value: "20+" },
    { icon: <GraduationCap className="w-5 h-5" />, label: "Learning Budget", value: "₹50K+" },
    { icon: <Rocket className="w-5 h-5" />, label: "Projects Delivered", value: "25+" },
    { icon: <Globe2 className="w-5 h-5" />, label: "Remote First", value: "100%" },
  ];

  return (
    <section className="relative py-20 px-4 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-[rgba(24,204,252,0.05)] to-transparent" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#18CCFC10_1px,transparent_1px),linear-gradient(to_bottom,#18CCFC10_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      <div className="relative max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-4"
            >
              <h1 className="text-4xl md:text-6xl font-bold">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#18CCFC] to-[#6344F5]">
                  Shape the Future
                </span>
                <br />
                <span className="text-white">
                  With OctaVertex
                </span>
              </h1>

              <p className="text-lg text-[rgb(199,210,254)]/70 max-w-xl">
                Join a team of innovators, builders, and problem solvers. Together, 
                we're creating technology that makes a difference.
              </p>
            </motion.div>

            {/* Stats Grid */}
            <motion.div 
              className="grid grid-cols-2 md:grid-cols-4 gap-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {stats.map((stat, index) => (
                <div 
                  key={index}
                  className="p-4 rounded-xl bg-[rgba(24,204,252,0.03)] border border-[rgba(24,204,252,0.1)]
                    hover:border-[rgba(24,204,252,0.2)] transition-all duration-300 group"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <div className="text-[#18CCFC] group-hover:scale-110 transition-transform">
                      {stat.icon}
                    </div>
                    <span className="text-sm text-[rgb(199,210,254)]/70">
                      {stat.label}
                    </span>
                  </div>
                  <div className="text-2xl font-bold text-white">
                    {stat.value}
                  </div>
                </div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div 
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <a href="#positions" className="px-6 py-3 rounded-lg bg-[#18CCFC] text-white 
                hover:bg-[#18CCFC]/90 transition-colors">
                View Open Positions
              </a>
              <a href="#culture" className="px-6 py-3 rounded-lg border border-[#18CCFC]/20 text-white 
                hover:bg-[#18CCFC]/10 transition-colors">
                Learn About Culture
              </a>
            </motion.div>
          </div>

          {/* Image/Illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="relative h-[400px] lg:h-[500px]"
          >
            <Image
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c"
              alt="Team collaboration"
              fill
              className="object-cover rounded-2xl"
              priority
            />
            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[rgb(15,24,41)]/80 to-transparent rounded-2xl" />

            {/* Floating cards */}
            <motion.div 
              className="absolute top-1/4 -left-4 p-4 rounded-xl bg-[rgba(24,204,252,0.05)] backdrop-blur-sm
                border border-[rgba(24,204,252,0.1)] w-48"
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <div className="text-sm text-[rgb(199,210,254)]/70">
                Current Openings
              </div>
              <div className="text-xl font-bold text-white mt-1">
                10+ Roles
              </div>
            </motion.div>

            <motion.div 
              className="absolute bottom-1/4 -right-4 p-4 rounded-xl bg-[rgba(99,68,245,0.05)] backdrop-blur-sm
                border border-[rgba(99,68,245,0.1)] w-48"
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <div className="text-sm text-[rgb(199,210,254)]/70">
                Team Growth
              </div>
              <div className="text-xl font-bold text-white mt-1">
                200% YoY
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
