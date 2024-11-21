// app/portfolio/portfolio-content.tsx
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  ArrowUpRight,
  ArrowRight
} from 'lucide-react';
import { Card } from '@/components/ui/card';
import { LucideIcon } from 'lucide-react';

interface CaseStudy {
  title: string;
  client: string;
  description: string;

  impact: {
    icon: React.ElementType;
    label: string;
    value: string;
  }[];
  image: string;
  tags: string[];
  size?: 'small' | 'medium' | 'large';
  link: string;
}
interface BgColor {
  primary: string;
  hover: string;
  card: string;
  accent: string;
}

interface CaseStudyCardProps {
  study: CaseStudy;
}

const caseStudies: CaseStudy[] = [
  {
    title: "AI-Powered Analytics Platform",
    client: "TechCorp Solutions",
    description: "Developed an enterprise-grade analytics platform using machine learning to process and visualize complex data streams in real-time.",
    impact: [
      { icon: Users, label: 'Users', value: '50K+' },
      { icon: TrendingUp, label: 'Efficiency', value: '+40%' },
      { icon: Clock, label: 'Time Saved', value: '120hr/mo' },
    ],
    image: "/portfolio/tech-corp.jpg",
    tags: ['AI/ML', 'Big Data', 'React', 'Python'],
    size: 'large',
    link: '/case-studies/tech-corp'
  },
  {
    title: "E-commerce Platform Redesign",
    client: "Fashion Forward",
    description: "Complete redesign and optimization of the e-commerce platform, resulting in improved conversion rates and user engagement.",
    impact: [
      { icon: TrendingUp, label: 'Sales', value: '+65%' },
      { icon: Users, label: 'Retention', value: '+45%' },
    ],
    image: "/portfolio/fashion-forward.jpg",
    tags: ['UI/UX', 'Next.js', 'Shopify'],
    size: 'medium',
    link: '/case-studies/fashion-forward'
  },
  {
    title: "Blockchain Supply Chain",
    client: "Global Logistics Inc",
    description: "Implemented a blockchain-based supply chain tracking system for enhanced transparency and efficiency.",
    impact: [
      { icon: Globe, label: 'Coverage', value: '25 Countries' },
      { icon: Clock, label: 'Processing', value: '-70% Time' },
    ],
    image: "/portfolio/global-logistics.jpg",
    tags: ['Blockchain', 'IoT', 'Web3'],
    size: 'medium',
    link: '/case-studies/global-logistics'
  },
  {
    title: "Mobile Banking App",
    client: "NextGen Bank",
    description: "Built a secure and intuitive mobile banking application with advanced features and biometric authentication.",
    impact: [
      { icon: Users, label: 'Active Users', value: '2M+' },
      { icon: Award, label: 'App Rating', value: '4.8/5' },
    ],
    image: "/portfolio/nextgen-bank.jpg",
    tags: ['React Native', 'FinTech', 'Security'],
    size: 'small',
    link: '/case-studies/nextgen-bank'
  },
  {
    title: "Smart City Dashboard",
    client: "Metropolitan Council",
    description: "Created a comprehensive IoT dashboard for monitoring and managing city infrastructure in real-time.",
    impact: [
      { icon: Target, label: 'Efficiency', value: '+55%' },
      { icon: Rocket, label: 'Response Time', value: '-65%' },
    ],
    image: "/portfolio/smart-city.jpg",
    tags: ['IoT', 'Real-time', 'Dashboard'],
    size: 'small',
    link: '/case-studies/smart-city'
  },
  {
    title: "Virtual Learning Platform",
    client: "EduTech Solutions",
    description: "Developed an interactive virtual learning platform with AI-powered personalization.",
    impact: [
      { icon: Users, label: 'Students', value: '100K+' },
      { icon: Zap, label: 'Engagement', value: '+80%' },
    ],
    image: "/portfolio/edutech.jpg",
    tags: ['EdTech', 'AI', 'WebRTC'],
    size: 'medium',
    link: '/case-studies/edutech'
  },
];

// const CaseStudyCard = ({ study }: { study: CaseStudy }) => {
//   const sizeClasses = {
//     small: 'md:col-span-1 md:row-span-1',
//     medium: 'md:col-span-1 md:row-span-2',
//     large: 'md:col-span-2 md:row-span-2'
//   };

//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 20 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true, margin: "-100px" }}
//       className={`${sizeClasses[study.size || 'small']}`}
//     >
//       <Card className="relative h-full overflow-hidden group bg-black/40 backdrop-blur-sm border-white/10">
//         <div 
//           className="absolute inset-0 bg-gradient-to-br from-black/80 to-transparent z-10"
//           style={{
//             backgroundImage: `url(${study.image})`,
//             backgroundSize: 'cover',
//             backgroundPosition: 'center',
//             opacity: 0.3
//           }}
//         />
        
//         <div className="relative z-20 p-6 h-full flex flex-col">
//           <div className="mb-4">
//             <p className="text-sm text-blue-400 mb-2">{study.client}</p>
//             <h3 className="text-2xl font-bold mb-2 group-hover:text-blue-400 transition-colors">
//               {study.title}
//             </h3>
//             <p className="text-gray-300 line-clamp-2 mb-4">{study.description}</p>
//           </div>

//           <div className="flex flex-wrap gap-2 mb-6">
//             {study.tags.map((tag) => (
//               <span 
//                 key={tag}
//                 className="text-xs px-2 py-1 rounded-full bg-blue-500/20 text-blue-300"
//               >
//                 {tag}
//               </span>
//             ))}
//           </div>

//           {study.impact && (
//             <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
//               {study.impact.map((stat, index) => (
//                 <div key={index} className="text-center">
//                   <stat.icon className="w-5 h-5 text-blue-400 mx-auto mb-2" />
//                   <p className="text-2xl font-bold text-white mb-1">{stat.value}</p>
//                   <p className="text-xs text-gray-400">{stat.label}</p>
//                 </div>
//               ))}
//             </div>
//           )}

//           <div className="mt-auto">
//             <motion.a
//               href={study.link}
//               className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors"
//               whileHover={{ x: 5 }}
//             >
//               View Case Study <ArrowUpRight className="w-4 h-4 ml-1" />
//             </motion.a>
//           </div>
//         </div>
//       </Card>
//     </motion.div>
//   );
// };

import {
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
//   {
//     title: "E-commerce Platform Redesign",
//     client: "Fashion Forward",
//     description: "Complete redesign and optimization of the e-commerce platform, implementing AI-driven recommendations and streamlined checkout process, resulting in significant improvement in conversion rates and user engagement.",
//     impact: [
//       { icon: TrendingUp, label: 'Sales', value: '+65%' },
//       { icon: Users, label: 'Retention', value: '+45%' },
//       { icon: Gauge, label: 'Load Speed', value: '0.8s' },
//       { icon: Coins, label: 'Revenue', value: '+85%' },
//     ],
//     image: "/portfolio/fashion-forward.jpg",
//     tags: ['UI/UX', 'Next.js', 'Shopify', 'AWS', 'Tailwind', 'Redis'],
//     size: 'medium',
//     link: '/case-studies/fashion-forward',
//     bgColor: {
//       primary: 'from-pink-600/20 via-rose-600/20 to-orange-600/20',
//       hover: 'from-pink-500/30 via-rose-500/30 to-orange-500/30',
//       card: 'from-pink-900/50 to-rose-900/50',
//       accent: 'pink'
//     }
//   },
//   {
//     title: "Blockchain Supply Chain",
//     client: "Global Logistics Inc",
//     description: "Implemented a revolutionary blockchain-based supply chain tracking system with IoT integration for real-time monitoring, enhancing transparency and efficiency across global operations.",
//     impact: [
//       { icon: Globe, label: 'Coverage', value: '25 Countries' },
//       { icon: Clock, label: 'Processing', value: '-70% Time' },
//       { icon: Network, label: 'Network', value: '1M+ Nodes' },
//       { icon: Shield, label: 'Security', value: '100%' },
//     ],
//     image: "/portfolio/global-logistics.jpg",
//     tags: ['Blockchain', 'IoT', 'Web3', 'Solidity', 'Node.js', 'AWS'],
//     size: 'medium',
//     link: '/case-studies/global-logistics',
//     bgColor: {
//       primary: 'from-emerald-600/20 via-teal-600/20 to-cyan-600/20',
//       hover: 'from-emerald-500/30 via-teal-500/30 to-cyan-500/30',
//       card: 'from-emerald-900/50 to-teal-900/50',
//       accent: 'emerald'
//     }
//   },
//   {
//     title: "Mobile Banking App",
//     client: "NextGen Bank",
//     description: "Built a secure and intuitive mobile banking application featuring biometric authentication, AI fraud detection, and real-time transaction processing, setting new standards in mobile banking.",
//     impact: [
//       { icon: Users, label: 'Active Users', value: '2M+' },
//       { icon: Award, label: 'App Rating', value: '4.8/5' },
//       { icon: Shield, label: 'Security', value: '100%' },
//       { icon: Smartphone, label: 'Platforms', value: 'All' },
//     ],
//     image: "/portfolio/nextgen-bank.jpg",
//     tags: ['React Native', 'FinTech', 'Security', 'Node.js', 'AWS', 'MongoDB'],
//     size: 'small',
//     link: '/case-studies/nextgen-bank',
//     bgColor: {
//       primary: 'from-cyan-600/20 via-sky-600/20 to-blue-600/20',
//       hover: 'from-cyan-500/30 via-sky-500/30 to-blue-500/30',
//       card: 'from-cyan-900/50 to-sky-900/50',
//       accent: 'cyan'
//     }
//   },
//   {
//     title: "Smart City Dashboard",
//     client: "Metropolitan Council",
//     description: "Created a comprehensive IoT dashboard for real-time monitoring and management of city infrastructure, integrating AI-powered predictive maintenance and emergency response optimization.",
//     impact: [
//       { icon: Target, label: 'Efficiency', value: '+55%' },
//       { icon: Rocket, label: 'Response Time', value: '-65%' },
//       { icon: Boxes, label: 'IoT Devices', value: '50K+' },
//       { icon: LineChart, label: 'Accuracy', value: '99.9%' },
//     ],
//     image: "/portfolio/smart-city.jpg",
//     tags: ['IoT', 'Real-time', 'Dashboard', 'Python', 'React', 'TensorFlow'],
//     size: 'small',
//     link: '/case-studies/smart-city',
//     bgColor: {
//       primary: 'from-violet-600/20 via-purple-600/20 to-indigo-600/20',
//       hover: 'from-violet-500/30 via-purple-500/30 to-indigo-500/30',
//       card: 'from-violet-900/50 to-purple-900/50',
//       accent: 'violet'
//     }
//   },
//   {
//     title: "Virtual Learning Platform",
//     client: "EduTech Solutions",
//     description: "Developed an interactive virtual learning platform with AI-powered personalization, real-time collaboration features, and adaptive learning paths, transforming online education delivery.",
//     impact: [
//       { icon: Users, label: 'Students', value: '100K+' },
//       { icon: Zap, label: 'Engagement', value: '+80%' },
//       { icon: Brain, label: 'Completion', value: '+65%' },
//       { icon: Award, label: 'Satisfaction', value: '95%' },
//     ],
//     image: "/portfolio/edutech.jpg",
//     tags: ['EdTech', 'AI', 'WebRTC', 'Next.js', 'Python', 'AWS'],
//     size: 'medium',
//     link: '/case-studies/edutech',
//     bgColor: {
//       primary: 'from-purple-600/20 via-fuchsia-600/20 to-pink-600/20',
//       hover: 'from-purple-500/30 via-fuchsia-500/30 to-pink-500/30',
//       card: 'from-purple-900/50 to-fuchsia-900/50',
//       accent: 'purple'
//     }
//   }
// ];

// const CaseStudyCard = ({ study }: { study: CaseStudy }) => {
//   const sizeClasses = {
//     small: 'md:col-span-1 md:row-span-1',
//     medium: 'md:col-span-1 md:row-span-2',
//     large: 'md:col-span-2 md:row-span-2'
//   };

//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 20 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true, margin: "-100px" }}
//       className={`${sizeClasses[study.size || 'small']}`}
//     >
//       <Link href={study.link}>
//         <Card 
//           className="relative h-full overflow-hidden group cursor-pointer 
//             bg-black/40 backdrop-blur-sm border-white/10 
//             transition-all duration-300 hover:scale-[1.02] hover:bg-black/50
//             hover:border-blue-500/50"
//         >
//           {/* Background Image with Overlay */}
//           <div 
//             className="absolute inset-0 transition-all duration-300
//               bg-gradient-to-br from-black/80 via-black/50 to-transparent z-10
//               group-hover:from-black/90 group-hover:via-black/60"
//             style={{
//               backgroundImage: `url(${study.image})`,
//               backgroundSize: 'cover',
//               backgroundPosition: 'center',
//               opacity: 0.3
//             }}
//           />
          
//           {/* Content */}
//           <div className="relative z-20 p-6 h-full flex flex-col">
//             {/* Header */}
//             <div className="mb-4">
//               <p className="text-sm text-blue-400 mb-2 group-hover:text-blue-300 transition-colors">
//                 {study.client}
//               </p>
//               <h3 className="text-2xl font-bold mb-2 group-hover:text-blue-400 transition-colors">
//                 {study.title}
//               </h3>
//               <p className="text-gray-300 line-clamp-2 mb-4 group-hover:text-gray-200">
//                 {study.description}
//               </p>
//             </div>

//             {/* Tags */}
//             <div className="flex flex-wrap gap-2 mb-6">
//               {study.tags.map((tag) => (
//                 <span 
//                   key={tag}
//                   className="text-xs px-2 py-1 rounded-full 
//                     bg-blue-500/20 text-blue-300
//                     group-hover:bg-blue-500/30 group-hover:text-blue-200
//                     transition-colors"
//                 >
//                   {tag}
//                 </span>
//               ))}
//             </div>

//             {/* Impact Stats */}
//             {study.impact && (
//               <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
//                 {study.impact.map((stat, index) => (
//                   <div key={index} className="text-center group-hover:transform group-hover:scale-105 transition-transform">
//                     <stat.icon className="w-5 h-5 text-blue-400 mx-auto mb-2 group-hover:text-blue-300" />
//                     <p className="text-2xl font-bold text-white mb-1 group-hover:text-blue-100">
//                       {stat.value}
//                     </p>
//                     <p className="text-xs text-gray-400 group-hover:text-gray-300">
//                       {stat.label}
//                     </p>
//                   </div>
//                 ))}
//               </div>
//             )}

//             {/* View More Link */}
//             <div className="mt-auto flex items-center text-blue-400 group-hover:text-blue-300 transition-all">
//               <span className="mr-2">View Case Study</span>
//               <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
//             </div>
//           </div>

//           {/* Animated Border Gradient */}
//           <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//             <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 animate-gradient-x" />
//           </div>
//         </Card>
//       </Link>
//     </motion.div>
//   );
// };



//new
const CaseStudyCard = ({ study }: { study: CaseStudy }) => {
  const sizeClasses = {
    small: 'md:col-span-1 md:row-span-1',
    medium: 'md:col-span-1 md:row-span-2',
    large: 'md:col-span-2 md:row-span-2'
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      className={`${sizeClasses[study.size || 'small']}`}
    >
      <Link href={study.link}>
        <Card 
          className={`relative h-full overflow-hidden group cursor-pointer 
            bg-gradient-to-br ${study} backdrop-blur-sm border-white/10 
            transition-all duration-300 hover:scale-[1.02] hover:shadow-xl
            hover:border-blue-500/50 hover:shadow-${study}/20`}
        >
          {/* Background Image with Overlay */}
          <div 
            className="absolute inset-0 transition-all duration-300
              bg-gradient-to-br from-black/80 via-black/50 to-transparent z-10
              group-hover:from-black/90 group-hover:via-black/60"
            style={{
              backgroundImage: `url(${study.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              opacity: 0.3
            }}
          />
          
          {/* Content */}
          <div className="relative z-20 p-6 h-full flex flex-col">
            {/* Header */}
            <div className="mb-4">
              <p className="text-sm text-blue-400 mb-2 group-hover:text-blue-300 transition-colors">
                {study.client}
              </p>
              <h3 className="text-2xl font-bold mb-2 group-hover:text-blue-400 transition-colors">
                {study.title}
              </h3>
              <p className="text-gray-300 line-clamp-3 mb-4 group-hover:text-gray-200">
                {study.description}
              </p>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-6">
              {study.tags.map((tag) => (
                <span 
                  key={tag}
                  className="text-xs px-3 py-1 rounded-full 
                    bg-blue-500/20 text-blue-300
                    group-hover:bg-blue-500/30 group-hover:text-blue-200
                    transition-all duration-300"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Impact Stats */}
            {study.impact && (
              <div className="grid grid-cols-2 gap-4 mb-6">
                {study.impact.map((stat, index) => (
                  <motion.div 
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    className="text-center p-3 rounded-lg bg-white/5 group-hover:bg-white/10 transition-all duration-300"
                  >
                    <stat.icon className="w-5 h-5 text-blue-400 mx-auto mb-2 group-hover:text-blue-300" />
                    <p className="text-xl font-bold text-white mb-1 group-hover:text-blue-100">
                      {stat.value}
                    </p>
                    <p className="text-xs text-gray-400 group-hover:text-gray-300">
                      {stat.label}
                    </p>
                  </motion.div>
                ))}
              </div>
            )}

            {/* View More Link */}
            <div className="mt-auto flex items-center justify-between">
              <span className="text-blue-400 group-hover:text-blue-300 transition-all">
                View Case Study
              </span>
              <ArrowUpRight className="w-5 h-5 text-blue-400 group-hover:text-blue-300 
                transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
            </div>
          </div>
        </Card>
      </Link>
    </motion.div>
  );
};

// const CaseStudyCard: React.FC<CaseStudyCardProps> = ({ study }) => {
//   return (
//     <div className="case-study-card">
//       <Link href={study.link} className="h-full">
//         <Card 
//           className={`relative h-full overflow-hidden group cursor-pointer 
//             bg-gradient-to-br ${study.bgColor} backdrop-blur-sm border-white/10 
//             transition-all duration-300 hover:scale-[1.02] hover:shadow-xl
//             hover:border-blue-500/50 flex flex-col`}
//         >
//           {/* Background Image with Overlay */}
//           <div 
//             className="absolute inset-0 transition-all duration-300
//               bg-gradient-to-br from-black/80 via-black/50 to-transparent z-10
//               group-hover:from-black/90 group-hover:via-black/60"
//             style={{
//               backgroundImage: `url(${study.image})`,
//               backgroundSize: 'cover',
//               backgroundPosition: 'center',
//               opacity: 0.3
//             }}
//           />
          
//           {/* Content */}
//           <div className="relative z-20 p-6 flex flex-col flex-grow">
//             {/* Header Section */}
//             <div className="mb-4">
//               <p className="text-sm text-blue-400 mb-2 group-hover:text-blue-300 transition-colors">
//                 {study.client}
//               </p>
//               <h3 className="text-2xl font-bold mb-2 group-hover:text-blue-400 transition-colors">
//                 {study.title}
//               </h3>
//               <p className="text-gray-300 mb-4 group-hover:text-gray-200">
//                 {study.description}
//               </p>
//             </div>

//             {/* Tags */}
//             <div className="flex flex-wrap gap-2 mb-6">
//               {study.tags.map((tag) => (
//                 <span 
//                   key={tag}
//                   className="text-xs px-3 py-1 rounded-full 
//                     bg-blue-500/20 text-blue-300
//                     group-hover:bg-blue-500/30 group-hover:text-blue-200
//                     transition-all duration-300"
//                 >
//                   {tag}
//                 </span>
//               ))}
//             </div>

//             {/* Impact Stats */}
//             <div className="grid grid-cols-2 gap-4 mb-6 flex-grow">
//               {study.impact.map((stat, index) => (
//                 <motion.div 
//                   key={index}
//                   whileHover={{ scale: 1.05 }}
//                   className="text-center p-3 rounded-lg bg-white/5 
//                     group-hover:bg-white/10 transition-all duration-300
//                     flex flex-col justify-center"
//                 >
//                   <stat.icon className="w-5 h-5 text-blue-400 mx-auto mb-2 
//                     group-hover:text-blue-300" />
//                   <p className="text-xl font-bold text-white mb-1 
//                     group-hover:text-blue-100">
//                     {stat.value}
//                   </p>
//                   <p className="text-xs text-gray-400 group-hover:text-gray-300">
//                     {stat.label}
//                   </p>
//                 </motion.div>
//               ))}
//             </div>

//             {/* View More Link */}
//             <div className="mt-auto flex items-center justify-between pt-4 
//               border-t border-white/10">
//               <span className="text-blue-400 group-hover:text-blue-300 
//                 transition-all">
//                 View Case Study
//               </span>
//               <ArrowUpRight className="w-5 h-5 text-blue-400 
//                 group-hover:text-blue-300 transform 
//                 group-hover:translate-x-1 group-hover:-translate-y-1 
//                 transition-all" />
//             </div>
//           </div>
//         </Card>
//       </Link>
//     </div>
//   );
// };
// In your case study card component, update the className to use the accent color directly:
// const CaseStudyCard: React.FC<CaseStudyCardProps> = ({ study }) => {
//   return (
//     <motion.div
//       whileHover={{ scale: 1.02 }}
//       className={`
//         relative h-full overflow-hidden rounded-3xl
//         bg-gradient-to-br ${study.bgColor.primary}
//         hover:bg-gradient-to-br ${study.bgColor.hover}
//         backdrop-blur-sm border border-white/10
//         transition-all duration-500 ease-out
//         group-hover:border-white/20 group-hover:shadow-2xl
//         group-hover:shadow-${study.bgColor.accent}-500/20
//       `}
//     >
//       {/* Background Pattern */}
//       <div 
//         className="absolute inset-0 opacity-20 transition-opacity duration-500
//           group-hover:opacity-30 pointer-events-none"
//         style={{
//           backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1h2v2H1V1z' fill='%23fff' fill-opacity='.1'/%3E%3C/svg%3E")`,
//           backgroundSize: '20px 20px'
//         }}
//       />

//       {/* Background Image */}
//       <div 
//         className="absolute inset-0 transition-all duration-500
//           opacity-20 group-hover:opacity-30 group-hover:scale-105"
//         style={{
//           backgroundImage: `url(${study.image})`,
//           backgroundSize: 'cover',
//           backgroundPosition: 'center',
//           filter: 'blur(1px)'
//         }}
//       />

//       {/* Content Container */}
//       <div className="relative z-10 h-full p-6 flex flex-col justify-between">
//         {/* Header Content */}
//         <div>
//           <p className={`text-sm text-${study.bgColor.accent}-400 mb-2 
//             opacity-80 group-hover:opacity-100`}>
//             {study.client}
//           </p>
//           <h3 className={`text-2xl font-bold mb-3 text-white/90 
//             group-hover:text-white transition-colors duration-300`}>
//             {study.title}
//           </h3>
//           <p className="text-gray-300/80 group-hover:text-gray-200 
//             line-clamp-2 transition-colors duration-300">
//             {study.description}
//           </p>
//         </div>

//         {/* Tags */}
//         <div className="flex flex-wrap gap-2 my-4">
//           {study.tags.map((tag) => (
//             <span 
//               key={tag}
//               className={`text-xs px-3 py-1 rounded-full 
//                 bg-${study.bgColor.accent}-500/20 
//                 text-${study.bgColor.accent}-300
//                 group-hover:bg-${study.bgColor.accent}-500/30
//                 transition-all duration-300`}
//             >
//               {tag}
//             </span>
//           ))}
//         </div>

//         {/* Impact Stats */}
//         <div className="grid grid-cols-2 gap-3">
//           {study.impact.map((stat, idx) => (
//             <motion.div 
//               key={idx}
//               whileHover={{ scale: 1.05 }}
//               className={`p-3 rounded-xl 
//                 bg-${study.bgColor.accent}-900/20
//                 group-hover:bg-${study.bgColor.accent}-900/30 
//                 transition-all duration-300`}
//             >
//               <div className="flex items-center gap-2 mb-1">
//                 <stat.icon className={`w-4 h-4 
//                   text-${study.bgColor.accent}-400/80 
//                   group-hover:text-${study.bgColor.accent}-300`} />
//                 <p className="text-lg font-semibold text-white/90 
//                   group-hover:text-white">
//                   {stat.value}
//                 </p>
//               </div>
//               <p className="text-xs text-gray-400 group-hover:text-gray-300">
//                 {stat.label}
//               </p>
//             </motion.div>
//           ))}
//         </div>

//         {/* View Button */}
//         <motion.div 
//           className={`absolute bottom-4 right-4 p-2 rounded-full
//             bg-${study.bgColor.accent}-500/10
//             group-hover:bg-${study.bgColor.accent}-500/20
//             transition-all duration-300`}
//           whileHover={{ scale: 1.1, rotate: 45 }}
//         >
//           <ArrowUpRight className={`w-5 h-5 
//             text-${study.bgColor.accent}-400 
//             group-hover:text-${study.bgColor.accent}-300`} />
//         </motion.div>
//       </div>
//     </motion.div>
//   );
// };

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900">
      {/* Hero Section */}
      <section className="relative h-[40vh] overflow-hidden flex items-center justify-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center z-10 px-4"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
            Our Work
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Explore our portfolio of innovative digital solutions that have 
            transformed businesses across industries.
          </p>
        </motion.div>
        <div className="absolute inset-0 bg-grid-pattern opacity-20" />
      </section>

      {/* Stats Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {[
            { label: 'Projects Delivered', value: '200+' },
            { label: 'Happy Clients', value: '150+' },
            { label: 'Industries Served', value: '12+' },
            { label: 'Team Members', value: '50+' },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <h3 className="text-4xl font-bold text-blue-400 mb-2">{stat.value}</h3>
              <p className="text-gray-400">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

 


{/* Case Studies Bento Grid */}
<section className="container mx-auto px-4 py-12">
  <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-6">
    {caseStudies.map((study, index) => {
      // Dynamic grid positioning based on index and size
      const gridClasses = {
        large: `
          md:col-span-6 lg:col-span-8
          ${index === 0 ? 'md:row-span-2' : 'md:row-span-2'}
        `,
        medium: `
          md:col-span-3 lg:col-span-4
          ${index % 3 === 0 ? 'md:row-span-2' : 'md:row-span-1'}
        `,
        small: 'md:col-span-3 lg:col-span-4 md:row-span-1'
      };

      return (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.6,
            delay: index * 0.1,
            ease: [0.23, 1, 0.32, 1]
          }}
          viewport={{ once: true, margin: "-50px" }}
          className={`
            group relative transform-gpu
            ${gridClasses[study.size || 'small']}
          `}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-white/0 
            group-hover:from-white/10 group-hover:to-white/5 transition-all duration-500" />
          
          <Link href={study.link} className="block h-full">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className={`
                relative h-full overflow-hidden rounded-3xl
                bg-gradient-to-br ${'from-blue-600/20 to-purple-600/20'}
                backdrop-blur-sm border border-white/10
                transition-all duration-500 ease-out
                group-hover:border-white/20 group-hover:shadow-2xl
                group-hover:shadow-${'blue'}-500/20
              `}
            >
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-20 transition-opacity duration-500
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
              <div className="relative z-10 h-full p-6 flex flex-col justify-between">
                {/* Header Content */}
                <div>
                  <motion.p 
                    className="text-sm text-blue-400 mb-2 opacity-80 group-hover:opacity-100"
                    initial={{ opacity: 0.8 }}
                    whileHover={{ opacity: 1 }}
                  >
                    {study.client}
                  </motion.p>
                  <motion.h3 
                    className="text-2xl font-bold mb-3 text-white/90 group-hover:text-white
                      transition-colors duration-300"
                  >
                    {study.title}
                  </motion.h3>
                  <p className="text-gray-300/80 group-hover:text-gray-200 line-clamp-2
                    transition-colors duration-300">
                    {study.description}
                  </p>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 my-4">
                  {study.tags.map((tag) => (
                    <span 
                      key={tag}
                      className="text-xs px-3 py-1 rounded-full 
                        bg-white/5 text-blue-300/90
                        group-hover:bg-white/10 group-hover:text-blue-200
                        transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Impact Stats */}
                <div className="grid grid-cols-2 gap-3">
                  {study.impact.map((stat, idx) => (
                    <motion.div 
                      key={idx}
                      whileHover={{ scale: 1.05 }}
                      className="p-3 rounded-xl bg-white/5 
                        group-hover:bg-white/10 transition-all duration-300"
                    >
                      <div className="flex items-center gap-2 mb-1">
                        <stat.icon className="w-4 h-4 text-blue-400/80 
                          group-hover:text-blue-300" />
                        <p className="text-lg font-semibold text-white/90 
                          group-hover:text-white">
                          {stat.value}
                        </p>
                      </div>
                      <p className="text-xs text-gray-400 group-hover:text-gray-300">
                        {stat.label}
                      </p>
                    </motion.div>
                  ))}
                </div>

                {/* View Button */}
                <motion.div 
                  className="absolute bottom-4 right-4 p-2 rounded-full
                    bg-white/5 group-hover:bg-white/10
                    transition-all duration-300"
                  whileHover={{ scale: 1.1, rotate: 45 }}
                >
                  <ArrowUpRight className="w-5 h-5 text-blue-400 
                    group-hover:text-blue-300" />
                </motion.div>
              </div>
            </motion.div>
          </Link>
        </motion.div>
      );
    })}
  </div>

  {/* Load More Button */}
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.5 }}
    className="mt-12 flex justify-center"
  >
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="px-8 py-4 rounded-2xl text-sm font-medium
        bg-gradient-to-r from-blue-500/20 to-purple-500/20
        hover:from-blue-500/30 hover:to-purple-500/30
        border border-white/10 hover:border-white/20
        transition-all duration-300 shadow-lg shadow-blue-500/5
        hover:shadow-blue-500/10"
    >
      Explore More Projects
    </motion.button>
  </motion.div>
</section>





      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help transform your business with innovative 
            digital solutions tailored to your needs.
          </p>
          <motion.a
            href="/contact-us"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg font-bold hover:from-blue-700 hover:to-purple-700 transition-all"
          >
            Get in Touch
          </motion.a>
        </motion.div>
      </section>
    </div>
  );
}

