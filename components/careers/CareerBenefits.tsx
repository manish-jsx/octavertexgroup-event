"use client";

import { motion } from "framer-motion";
import { 
  Globe2, 
  Timer, 
  GraduationCap, 
  Heart, 
  Coffee, 
  TrendingUp,
  Laptop,
  Users,
  Zap
} from 'lucide-react';

const benefits = [
  {
    icon: <Globe2 className="w-6 h-6 text-[#18CCFC]" />,
    title: "Remote-First Culture",
    description: "Work from anywhere in the world with our flexible remote policy"
  },
  {
    icon: <Timer className="w-6 h-6 text-[#6344F5]" />,
    title: "Flexible Hours",
    description: "Choose your working hours to maintain a perfect work-life balance"
  },
  {
    icon: <GraduationCap className="w-6 h-6 text-[#AE48FF]" />,
    title: "Learning Budget",
    description: "Annual budget for courses, conferences, and learning materials"
  },
  {
    icon: <Heart className="w-6 h-6 text-[#18CCFC]" />,
    title: "Health Insurance",
    description: "Comprehensive health coverage for you and your family"
  },
  {
    icon: <Coffee className="w-6 h-6 text-[#6344F5]" />,
    title: "Team Retreats",
    description: "Regular team meetups and annual company retreats"
  },
  {
    icon: <TrendingUp className="w-6 h-6 text-[#AE48FF]" />,
    title: "Career Growth",
    description: "Clear growth path and regular performance reviews"
  },
  {
    icon: <Laptop className="w-6 h-6 text-[#18CCFC]" />,
    title: "Latest Equipment",
    description: "Top-of-the-line hardware and software setup"
  },
  {
    icon: <Users className="w-6 h-6 text-[#6344F5]" />,
    title: "Inclusive Culture",
    description: "Diverse and welcoming environment for everyone"
  },
  {
    icon: <Zap className="w-6 h-6 text-[#AE48FF]" />,
    title: "Innovation Time",
    description: "Dedicated time for personal projects and innovation"
  }
];

export default function CareerBenefits() {
  return (
    <section className="py-20 px-4 bg-[rgba(24,204,252,0.02)]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent 
            bg-gradient-to-r from-[#18CCFC] via-[#6344F5] to-[#AE48FF]">
            Why Join OctaVertex?
          </h2>
          <p className="mt-4 text-[rgb(199,210,254)]/70 max-w-2xl mx-auto">
            We offer more than just a job. Join us for a fulfilling career with great benefits and opportunities.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-6 rounded-xl bg-[rgba(24,204,252,0.03)] border border-[rgba(24,204,252,0.1)]
                hover:border-[rgba(24,204,252,0.2)] transition-all duration-300 group"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-[rgba(24,204,252,0.05)] group-hover:scale-110 transition-transform">
                  {benefit.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white group-hover:text-[#18CCFC] transition-colors">
                    {benefit.title}
                  </h3>
                  <p className="mt-2 text-[rgb(199,210,254)]/70">
                    {benefit.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
