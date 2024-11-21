// app/portfolio/portfolio-content.tsx
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  ArrowUpRight,
  ArrowRight,
  Users,
  TrendingUp,
  Clock,
  Award,
  Globe,
  Rocket,
  Zap,
  Target,
  Shield,
  Brain,
  LineChart,
  Coins,
  Smartphone,
  Boxes,
  Gauge,
  Network
} from 'lucide-react';
import { Card } from '@/components/ui/card';

// Types and Interfaces
interface Impact {
  icon: React.ElementType;
  label: string;
  value: string;
}

interface BgColor {
  primary: string;
  hover: string;
  card: string;
  accent: string;
}

interface CaseStudy {
  title: string;
  client: string;
  description: string;
  bgColor: BgColor;
  impact: Impact[];
  image: string;
  tags: string[];
  size: 'small' | 'medium' | 'large';
  link: string;
}

interface CaseStudyCardProps {
  study: CaseStudy;
  gridClasses: string;
}

// Layout Configuration
const gridConfig = {
  large: 'md:col-span-6 lg:col-span-8 md:row-span-2',
  medium: 'md:col-span-3 lg:col-span-4 md:row-span-2',
  small: 'md:col-span-3 lg:col-span-4 md:row-span-1'
};

// Stats Configuration
const statsConfig = [
  { label: 'Projects Delivered', value: '200+', accent: 'blue' },
  { label: 'Happy Clients', value: '150+', accent: 'purple' },
  { label: 'Industries Served', value: '12+', accent: 'pink' },
  { label: 'Team Members', value: '50+', accent: 'indigo' }
];

// CaseStudyCard Component
const CaseStudyCard: React.FC<CaseStudyCardProps> = ({ study, gridClasses }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      className={`group relative transform-gpu h-full ${gridClasses}`}
    >
      <Link href={study.link} className="block h-full">
        <div className="absolute inset-0 bg-gradient-to-br 
          from-white/5 to-transparent opacity-0 group-hover:opacity-100 
          transition-all duration-500 rounded-3xl" />
        
        <motion.div
          whileHover={{ scale: 1.02 }}
          className={`
            relative h-full overflow-hidden rounded-3xl
            bg-gradient-to-br ${study.bgColor.primary}
            hover:bg-gradient-to-br ${study.bgColor.hover}
            backdrop-blur-sm border border-white/10
            transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]
          `}
        >
          {/* Background Pattern */}
          <div 
            className="absolute inset-0 opacity-20 transition-opacity duration-500
              group-hover:opacity-30 pointer-events-none"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1h2v2H1V1z' fill='%23fff' fill-opacity='.1'/%3E%3C/svg%3E")`,
              backgroundSize: '20px 20px'
            }}
          />

          {/* Background Image */}
          <div 
            className="absolute inset-0 transition-all duration-500
              opacity-20 group-hover:opacity-30 group-hover:scale-105"
            style={{
              backgroundImage: `url(${study.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              filter: 'blur(1px)'
            }}
          />

          {/* Content Container */}
          <div className="relative z-10 h-full p-6 flex flex-col">
            {/* Header */}
            <div className="mb-6">
              <div className={`text-sm mb-2 text-${study.bgColor.accent}-400 
                group-hover:text-${study.bgColor.accent}-300 transition-colors`}>
                {study.client}
              </div>
              <h3 className="text-2xl font-bold mb-3 text-white/90 
                group-hover:text-white transition-colors">
                {study.title}
              </h3>
              <p className="text-gray-300/80 group-hover:text-gray-200 
                line-clamp-2 transition-colors">
                {study.description}
              </p>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-6">
              {study.tags.map((tag, idx) => (
                <span 
                  key={idx}
                  className={`
                    text-xs px-3 py-1 rounded-full 
                    bg-${study.bgColor.accent}-500/10 
                    text-${study.bgColor.accent}-300
                    group-hover:bg-${study.bgColor.accent}-500/20 
                    transition-colors
                  `}
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-3 mt-auto">
              {study.impact.map((stat, idx) => (
                <motion.div 
                  key={idx}
                  whileHover={{ scale: 1.02 }}
                  className={`
                    p-3 rounded-xl flex flex-col
                    bg-${study.bgColor.accent}-900/10
                    group-hover:bg-${study.bgColor.accent}-900/20
                    transition-colors
                  `}
                >
                  <div className="flex items-center gap-2 mb-1">
                    <stat.icon className={`
                      w-4 h-4 text-${study.bgColor.accent}-400
                      group-hover:text-${study.bgColor.accent}-300
                    `} />
                    <span className="text-lg font-semibold text-white">
                      {stat.value}
                    </span>
                  </div>
                  <span className="text-xs text-gray-400 group-hover:text-gray-300">
                    {stat.label}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* View Button */}
            <motion.div 
              className={`
                absolute bottom-4 right-4 p-2 rounded-full
                bg-${study.bgColor.accent}-500/10
                group-hover:bg-${study.bgColor.accent}-500/20
                transition-all duration-300
              `}
              whileHover={{ 
                scale: 1.1, 
                rotate: 45,
                transition: { duration: 0.2 } 
              }}
            >
              <ArrowUpRight className={`
                w-5 h-5 text-${study.bgColor.accent}-400
                group-hover:text-${study.bgColor.accent}-300
              `} />
            </motion.div>
          </div>
        </motion.div>
      </Link>
    </motion.div>
  );
};
// Part 3: Case Studies Data
// const caseStudies: CaseStudy[] = [
//   {
//     title: "AI-Powered Analytics Platform",
//     client: "TechCorp Solutions",
//     description: "Developed an enterprise-grade analytics platform using machine learning to process and visualize complex data streams in real-time, enabling data-driven decision making at scale.",
//     impact: [
//       { icon: Users, label: 'Users', value: '50K+' },
//       { icon: TrendingUp, label: 'Efficiency', value: '+40%' },
//       { icon: Clock, label: 'Time Saved', value: '120hr/mo' },
//       { icon: Brain, label: 'AI Accuracy', value: '99.8%' },
//     ],
//     image: "/portfolio/tech-corp.jpg",
//     tags: ['AI/ML', 'Big Data', 'React', 'Python', 'TensorFlow', 'AWS'],
//     size: 'large',
//     link: '/case-studies/tech-corp',
//     bgColor: {
//       primary: 'from-blue-600/20 via-indigo-600/20 to-violet-600/20',
//       hover: 'from-blue-500/30 via-indigo-500/30 to-violet-500/30',
//       card: 'from-blue-900/50 to-indigo-900/50',
//       accent: 'blue'
//     }
//   },
//   // ... other case studies remain the same
// ];

const caseStudies: CaseStudy[] = [
  {
    title: "AI-Powered Analytics Platform",
    client: "TechCorp Solutions",
    description: "Developed an enterprise-grade analytics platform using machine learning to process and visualize complex data streams in real-time, enabling data-driven decision making at scale.",
    impact: [
      { icon: Users, label: 'Users', value: '50K+' },
      { icon: TrendingUp, label: 'Efficiency', value: '+40%' },
      { icon: Clock, label: 'Time Saved', value: '120hr/mo' },
      { icon: Brain, label: 'AI Accuracy', value: '99.8%' },
    ],
    image: "/portfolio/tech-corp.jpg",
    tags: ['AI/ML', 'Big Data', 'React', 'Python', 'TensorFlow', 'AWS'],
    size: 'large',
    link: '/case-studies/tech-corp',
    bgColor: {
      primary: 'from-blue-600/20 via-indigo-600/20 to-violet-600/20',
      hover: 'from-blue-500/30 via-indigo-500/30 to-violet-500/30',
      card: 'from-blue-900/50 to-indigo-900/50',
      accent: 'blue'
    }
  },
  {
    title: "E-commerce Platform Redesign",
    client: "Fashion Forward",
    description: "Complete redesign and optimization of the e-commerce platform, implementing AI-driven recommendations and streamlined checkout process, resulting in significant improvement in conversion rates and user engagement.",
    impact: [
      { icon: TrendingUp, label: 'Sales', value: '+65%' },
      { icon: Users, label: 'Retention', value: '+45%' },
      { icon: Gauge, label: 'Load Speed', value: '0.8s' },
      { icon: Coins, label: 'Revenue', value: '+85%' },
    ],
    image: "/portfolio/fashion-forward.jpg",
    tags: ['UI/UX', 'Next.js', 'Shopify', 'AWS', 'Tailwind', 'Redis'],
    size: 'medium',
    link: '/case-studies/fashion-forward',
    bgColor: {
      primary: 'from-pink-600/20 via-rose-600/20 to-orange-600/20',
      hover: 'from-pink-500/30 via-rose-500/30 to-orange-500/30',
      card: 'from-pink-900/50 to-rose-900/50',
      accent: 'pink'
    }
  },
  {
    title: "Blockchain Supply Chain",
    client: "Global Logistics Inc",
    description: "Implemented a revolutionary blockchain-based supply chain tracking system with IoT integration for real-time monitoring, enhancing transparency and efficiency across global operations.",
    impact: [
      { icon: Globe, label: 'Coverage', value: '25 Countries' },
      { icon: Clock, label: 'Processing', value: '-70% Time' },
      { icon: Network, label: 'Network', value: '1M+ Nodes' },
      { icon: Shield, label: 'Security', value: '100%' },
    ],
    image: "/portfolio/global-logistics.jpg",
    tags: ['Blockchain', 'IoT', 'Web3', 'Solidity', 'Node.js', 'AWS'],
    size: 'medium',
    link: '/case-studies/global-logistics',
    bgColor: {
      primary: 'from-emerald-600/20 via-teal-600/20 to-cyan-600/20',
      hover: 'from-emerald-500/30 via-teal-500/30 to-cyan-500/30',
      card: 'from-emerald-900/50 to-teal-900/50',
      accent: 'emerald'
    }
  },
  {
    title: "Mobile Banking App",
    client: "NextGen Bank",
    description: "Built a secure and intuitive mobile banking application featuring biometric authentication, AI fraud detection, and real-time transaction processing, setting new standards in mobile banking.",
    impact: [
      { icon: Users, label: 'Active Users', value: '2M+' },
      { icon: Award, label: 'App Rating', value: '4.8/5' },
      { icon: Shield, label: 'Security', value: '100%' },
      { icon: Smartphone, label: 'Platforms', value: 'All' },
    ],
    image: "/portfolio/nextgen-bank.jpg",
    tags: ['React Native', 'FinTech', 'Security', 'Node.js', 'AWS', 'MongoDB'],
    size: 'small',
    link: '/case-studies/nextgen-bank',
    bgColor: {
      primary: 'from-cyan-600/20 via-sky-600/20 to-blue-600/20',
      hover: 'from-cyan-500/30 via-sky-500/30 to-blue-500/30',
      card: 'from-cyan-900/50 to-sky-900/50',
      accent: 'cyan'
    }
  },
  {
    title: "Smart City Dashboard",
    client: "Metropolitan Council",
    description: "Created a comprehensive IoT dashboard for real-time monitoring and management of city infrastructure, integrating AI-powered predictive maintenance and emergency response optimization.",
    impact: [
      { icon: Target, label: 'Efficiency', value: '+55%' },
      { icon: Rocket, label: 'Response Time', value: '-65%' },
      { icon: Boxes, label: 'IoT Devices', value: '50K+' },
      { icon: LineChart, label: 'Accuracy', value: '99.9%' },
    ],
    image: "/portfolio/smart-city.jpg",
    tags: ['IoT', 'Real-time', 'Dashboard', 'Python', 'React', 'TensorFlow'],
    size: 'small',
    link: '/case-studies/smart-city',
    bgColor: {
      primary: 'from-violet-600/20 via-purple-600/20 to-indigo-600/20',
      hover: 'from-violet-500/30 via-purple-500/30 to-indigo-500/30',
      card: 'from-violet-900/50 to-purple-900/50',
      accent: 'violet'
    }
  },
  {
    title: "Virtual Learning Platform",
    client: "EduTech Solutions",
    description: "Developed an interactive virtual learning platform with AI-powered personalization, real-time collaboration features, and adaptive learning paths, transforming online education delivery.",
    impact: [
      { icon: Users, label: 'Students', value: '100K+' },
      { icon: Zap, label: 'Engagement', value: '+80%' },
      { icon: Brain, label: 'Completion', value: '+65%' },
      { icon: Award, label: 'Satisfaction', value: '95%' },
    ],
    image: "/portfolio/edutech.jpg",
    tags: ['EdTech', 'AI', 'WebRTC', 'Next.js', 'Python', 'AWS'],
    size: 'medium',
    link: '/case-studies/edutech',
    bgColor: {
      primary: 'from-purple-600/20 via-fuchsia-600/20 to-pink-600/20',
      hover: 'from-purple-500/30 via-fuchsia-500/30 to-pink-500/30',
      card: 'from-purple-900/50 to-fuchsia-900/50',
      accent: 'purple'
    }
  }
];

// Part 4: Main Portfolio Component
export default function Portfolio() {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  // Helper function for gradient classes
  const getGradientClasses = (accent: string) => ({
    background: `from-${accent}-500/10 to-${accent}-500/5`,
    border: `border-${accent}-500/10`,
    hoverBorder: `hover:border-${accent}-500/20`,
    text: `text-${accent}-400`,
    hoverText: `group-hover:text-${accent}-300`
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900">
      {/* Hero Section */}
      <section className="relative h-[60vh] overflow-hidden flex items-center justify-center">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="text-center z-10 px-4 max-w-4xl"
        >
          <motion.h1 
            variants={itemVariants}
            className="text-6xl md:text-8xl font-bold mb-6 bg-clip-text text-transparent 
              bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 tracking-tight"
          >
            Our Work
          </motion.h1>
          <motion.p 
            variants={itemVariants}
            className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto leading-relaxed"
          >
            Explore our portfolio of innovative digital solutions that have 
            transformed businesses across industries.
          </motion.p>
        </motion.div>

        <div className="absolute inset-0">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.2 }}
            transition={{ duration: 1 }}
            className="absolute inset-0 bg-grid-pattern animate-gridFlow"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900/0 via-gray-900/50 to-gray-900" />
        </div>
      </section>

      {/* Stats Section */}
      <section className="container mx-auto px-4 -mt-20 relative z-10">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8"
        >
          {statsConfig.map((stat, index) => {
            const gradientClasses = getGradientClasses(stat.accent);
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`
                  p-6 rounded-2xl backdrop-blur-md 
                  bg-gradient-to-br ${gradientClasses.background}
                  border ${gradientClasses.border} ${gradientClasses.hoverBorder}
                  transition-all duration-500 group
                `}
              >
                <motion.h3 
                  className={`text-4xl font-bold ${gradientClasses.text} mb-2
                    ${gradientClasses.hoverText} transition-colors duration-300`}
                >
                  {stat.value}
                </motion.h3>
                <p className="text-gray-400 group-hover:text-gray-300 
                  transition-colors duration-300">
                  {stat.label}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </section>

      {/* Case Studies Grid */}
      <section className="container mx-auto px-4 py-24">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-6 auto-rows-fr"
        >
          {caseStudies.map((study, index) => (
            <CaseStudyCard 
              key={index}
              study={study}
              gridClasses={gridConfig[study.size]}
            />
          ))}
        </motion.div>

        {/* Load More Button */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 flex justify-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative px-8 py-4 rounded-2xl text-base font-medium
              overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r 
              from-blue-500/20 to-purple-500/20
              group-hover:from-blue-500/30 group-hover:to-purple-500/30
              transition-all duration-500" />
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100
              bg-gradient-to-r from-blue-400/10 to-purple-400/10
              blur-xl transition-all duration-500" />
            <span className="relative z-10 flex items-center gap-2">
              Explore More Projects
              <ArrowUpRight className="w-5 h-5 transform group-hover:translate-x-1 
                group-hover:-translate-y-1 transition-transform duration-300" />
            </span>
          </motion.button>
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative text-center max-w-4xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 
            bg-clip-text text-transparent bg-gradient-to-r 
            from-blue-400 to-purple-400">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-gray-300 mb-12 leading-relaxed">
            Let's discuss how we can help transform your business with innovative 
            digital solutions tailored to your needs.
          </p>
          <Link href="/contact-us">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative inline-flex items-center gap-2 px-8 py-4 
                rounded-xl font-bold text-lg overflow-hidden cursor-pointer"
            >
              <div className="absolute inset-0 bg-gradient-to-r 
                from-blue-600 to-purple-600
                group-hover:from-blue-500 group-hover:to-purple-500
                transition-all duration-500" />
              <span className="relative z-10">Get in Touch</span>
              <ArrowRight className="relative z-10 w-5 h-5 transform 
                group-hover:translate-x-1 transition-transform duration-300" />
            </motion.div>
          </Link>
        </motion.div>
      </section>
    </div>
  );
}

// Add to your globals.css
const styles = `
  .animate-gridFlow {
    animation: gridFlow 20s linear infinite;
    background-size: 50px 50px;
  }

  @keyframes gridFlow {
    0% { transform: translateY(0); }
    100% { transform: translateY(-50px); }
  }
`;