"use client";
import React from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { IconAdjustmentsBolt, IconCloud, IconCurrencyDollar, IconEaseInOut, IconHeart, IconHelp, IconRouteAltLeft, IconTerminal2 } from "@tabler/icons-react";



export function FeaturesSection() {
  const features = [
    {
      title: "Full-Stack Excellence",
      description:
        "Expert team delivering end-to-end solutions using cutting-edge technologies like React, Node.js, and Cloud platforms.",
      icon: <IconTerminal2 />,
      gradient: "from-[#18CCFC] to-[#6344F5]"
    },
    {
      title: "Agile Methodology",
      description:
        "Streamlined development process with sprint-based delivery, ensuring quick iterations and continuous improvement.",
      icon: <IconEaseInOut />,
      gradient: "from-[#6344F5] to-[#AE48FF]"
    },
    {
      title: "Competitive Pricing",
      description:
        "Transparent pricing structure with flexible engagement models suited for startups to enterprises.",
      icon: <IconCurrencyDollar />,
      gradient: "from-[#AE48FF] to-[#18CCFC]"
    },
    {
      title: "Cloud Solutions",
      description: 
        "Scalable cloud architecture with AWS, Azure, and GCP expertise for robust enterprise applications.",
      icon: <IconCloud />,
      gradient: "from-[#18CCFC] to-[#6344F5]"
    },
    {
      title: "Enterprise Solutions",
      description: 
        "Custom software development with focus on scalability, security, and seamless integration capabilities.",
      icon: <IconRouteAltLeft />,
      gradient: "from-[#6344F5] to-[#AE48FF]"
    },
    {
      title: "Dedicated Support",
      description:
        "Round-the-clock technical support with dedicated project managers ensuring smooth communication.",
      icon: <IconHelp />,
      gradient: "from-[#AE48FF] to-[#18CCFC]"
    },
    {
      title: "Quality Assurance",
      description:
        "Rigorous testing protocols and code reviews ensuring high-quality, bug-free deliverables.",
      icon: <IconAdjustmentsBolt />,
      gradient: "from-[#18CCFC] to-[#6344F5]"
    },
    {
      title: "Client Success",
      description: 
        "Committed to your success with proven track record of delivering impactful digital solutions.",
      icon: <IconHeart />,
      gradient: "from-[#6344F5] to-[#AE48FF]"
    },
];
  return (
    <div className="relative py-20 overflow-hidden bg-[rgb(15,24,41)]/95">
      {/* Background effects */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
      <div className="absolute inset-0 bg-gradient-to-b from-[rgb(15,24,41)]/95 via-transparent to-[rgb(15,24,41)]/95" />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10 max-w-7xl mx-auto px-4">
        {features.map((feature, index) => (
          <Feature key={feature.title} {...feature} index={index} />
        ))}
      </div>
    </div>
  );
}

const Feature = ({
  title,
  description,
  icon,
  index,
  gradient
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
  gradient: string;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className={cn(
        "group relative p-6 rounded-xl backdrop-blur-sm",
        "bg-gradient-to-br from-white/5 to-white/0",
        "border border-white/10 hover:border-[#18CCFC]/30",
        "transition-all duration-300"
      )}
    >
      {/* Hover Glow Effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="absolute inset-0 bg-gradient-to-r from-[#18CCFC]/20 to-[#6344F5]/20 blur-xl" />
      </div>

      {/* Icon Container */}
      <div className="relative mb-6">
        <div className={cn(
          "w-12 h-12 rounded-lg flex items-center justify-center",
          "bg-gradient-to-br from-white/10 to-white/5",
          "group-hover:scale-110 transition-transform duration-300"
        )}>
          <div className={cn(
            "text-transparent bg-clip-text bg-gradient-to-r",
            gradient
          )}>
            {icon}
          </div>
        </div>
        
        {/* Decorative dot */}
        <div className="absolute -right-1 -top-1 w-2 h-2 rounded-full bg-gradient-to-r from-[#18CCFC] to-[#6344F5]" />
      </div>

      {/* Content */}
      <div className="space-y-3 relative">
        <h3 className={cn(
          "text-lg font-bold",
          "bg-clip-text text-transparent bg-gradient-to-r",
          gradient
        )}>
          {title}
        </h3>
        
        <p className="text-sm text-[rgb(199,210,254)]/70 leading-relaxed">
          {description}
        </p>

        {/* Hover line effect */}
        <div className="absolute -left-6 top-0 w-[2px] h-0 group-hover:h-full bg-gradient-to-b from-[#18CCFC] to-[#6344F5] transition-all duration-300" />
      </div>

      {/* Interactive elements */}
      <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="flex items-center gap-2 text-[#18CCFC] text-sm">
          <span>Learn more</span>
          <svg
            className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </div>
      </div>
    </motion.div>
  );
};