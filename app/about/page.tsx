

"use client";
import { useEffect, useState } from 'react';

import Icons from '@/components/Icons';
import { motion } from 'framer-motion';
import { 
  Rocket, 
  Users, 
  Target, 
  Award,
  Globe,
  Code,
  Cpu,
  Blocks,
  Brush,
  LineChart,
  Shield,
  MessageSquare
} from 'lucide-react';
import { Button } from "@/components/ui/button"; // Add this import at the top
import { Calendar } from "lucide-react"; // Add this import if not already present
import { LucideIcon } from 'lucide-react';
import { Card } from '@/components/ui/card';
import Image from 'next/image';
// Define interface for StatCard props
interface StatCardProps {
  icon: LucideIcon;
  value: string;
  label: string;
  description?: string;
}
// TeamMember interfaces
interface TeamMemberProps {
  name: string;
  role: string;
  image: string;
  social?: {
    linkedin?: string;
    twitter?: string;
    github?: string;
  };
  department?: string;
  bio?: string;
}

// StatCard interfaces (previously defined)
interface StatCardProps {
  icon: LucideIcon;
  value: string;
  label: string;
  description?: string;
}

const StatCard = ({ icon: Icon, value, label, description }: StatCardProps) => (

  <Card className="p-6 bg-black/30 backdrop-blur-md border border-white/10 rounded-xl">
    <div className="flex items-center gap-4">
      <div className="p-3 bg-blue-500/20 rounded-lg">
        <Icon className="w-6 h-6 text-blue-400" />
      </div>
      <div>
        <h3 className="text-2xl font-bold">{value}</h3>
        <p className="text-gray-400">{label}</p>
      </div>
    </div>
  </Card>
);

const TeamMember = ({ name, role, image }:TeamMemberProps) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="p-6 bg-black/30 backdrop-blur-md border border-white/10 rounded-xl text-center"
  >
    <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
      <Image
        src={image}
        alt={name}
        layout="fill"
        objectFit="cover"
        className="rounded-full"
      />
    </div>
    <h3 className="text-xl font-bold mb-1">{name}</h3>
    <p className="text-gray-400">{role}</p>
  </motion.div>
);

const About = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const parallaxOffset = -scrollY * 0.2;

  const teamMembers = [
    {
      name: "Sarah Chen",
      role: "CEO & Founder",
      image: "/team/sarah-chen.jpg"
    },
    {
      name: "David Rodriguez",
      role: "Chief Technology Officer",
      image: "/team/david-rodriguez.jpg"
    },
    {
      name: "Aisha Patel",
      role: "Creative Director",
      image: "/team/aisha-patel.jpg"
    },
    {
      name: "Marcus Thompson",
      role: "Head of Innovation",
      image: "/team/marcus-thompson.jpg"
    }
  ];

  const clientLogos = [
    { name: "TechCorp", logo: "/clients/techcorp.png" },
    { name: "InnovateLabs", logo: "/clients/innovatelabs.png" },
    { name: "FutureScale", logo: "/clients/futurescale.png" },
    { name: "NextGen Solutions", logo: "/clients/nextgen.png" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white">
      {/* Hero Section */}
      <div className="relative h-[60vh] overflow-hidden flex items-center">
        <div 
          className="absolute inset-0 opacity-20"
          style={{ 
            transform: `translateY(${parallaxOffset}px)`,
            backgroundImage: 'url("/grid-pattern.svg")',
            backgroundSize: '50px 50px',
            backgroundRepeat: 'repeat'
          }}
        />
        <div className="container mx-auto px-4 relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400"
          >
            Pioneering Digital Excellence Since 2015
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-300 max-w-2xl"
          >
            OctaVertex Media has been at the forefront of digital innovation, 
            delivering cutting-edge solutions to over 500 clients worldwide. 
            Our team of 50+ experts combines creativity with technical excellence 
            to drive digital transformation.
          </motion.p>
        </div>
      </div>

      {/* Stats Section */}
      <section className="py-20 container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatCard icon={Users} value="500+" label="Global Clients" />
          <StatCard icon={Target} value="98.5%" label="Client Retention" />
          <StatCard icon={Award} value="35+" label="Industry Awards" />
          <StatCard icon={Globe} value="28" label="Countries Served" />
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-black/30 backdrop-blur-md">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-4xl font-bold mb-8">Our Vision & Mission</h2>
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              We envision a world where technology seamlessly enhances human potential. 
              Our mission is to democratize digital innovation by creating scalable, 
              sustainable solutions that empower businesses to thrive in the digital age.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
              <div className="p-6 bg-black/20 rounded-xl">
                <h3 className="text-lg font-bold mb-2">Innovation First</h3>
                <p className="text-gray-400">Constantly pushing boundaries to deliver cutting-edge solutions.</p>
              </div>
              <div className="p-6 bg-black/20 rounded-xl">
                <h3 className="text-lg font-bold mb-2">Client Success</h3>
                <p className="text-gray-400">Your growth and success are our top priorities.</p>
              </div>
              <div className="p-6 bg-black/20 rounded-xl">
                <h3 className="text-lg font-bold mb-2">Sustainable Impact</h3>
                <p className="text-gray-400">Creating solutions that stand the test of time.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">Our Expertise</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="p-6 bg-black/30 backdrop-blur-md border border-white/10 rounded-xl"
          >
            <Code className="w-12 h-12 text-blue-400 mb-4" />
            <h3 className="text-xl font-bold mb-2">Custom Software Development</h3>
            <p className="text-gray-400">
              Tailored solutions using React, Node.js, Python, and cloud technologies 
              to create scalable applications that drive business growth.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="p-6 bg-black/30 backdrop-blur-md border border-white/10 rounded-xl"
          >
            <Cpu className="w-12 h-12 text-blue-400 mb-4" />
            <h3 className="text-xl font-bold mb-2">AI & Machine Learning</h3>
            <p className="text-gray-400">
              Advanced AI solutions for process automation, data analysis, and 
              intelligent decision-making systems.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="p-6 bg-black/30 backdrop-blur-md border border-white/10 rounded-xl"
          >
            <Blocks className="w-12 h-12 text-blue-400 mb-4" />
            <h3 className="text-xl font-bold mb-2">Blockchain Solutions</h3>
            <p className="text-gray-400">
              Enterprise blockchain applications, smart contracts, and 
              decentralized systems for modern business needs.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="p-6 bg-black/30 backdrop-blur-md border border-white/10 rounded-xl"
          >
            <Brush className="w-12 h-12 text-blue-400 mb-4" />
            <h3 className="text-xl font-bold mb-2">UI/UX Design</h3>
            <p className="text-gray-400">
              Human-centered design approaches creating intuitive, engaging digital 
              experiences that users love.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="p-6 bg-black/30 backdrop-blur-md border border-white/10 rounded-xl"
          >
            <LineChart className="w-12 h-12 text-blue-400 mb-4" />
            <h3 className="text-xl font-bold mb-2">Data Analytics</h3>
            <p className="text-gray-400">
              Transform raw data into actionable insights with our advanced 
              analytics and visualization solutions.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="p-6 bg-black/30 backdrop-blur-md border border-white/10 rounded-xl"
          >
            <Shield className="w-12 h-12 text-blue-400 mb-4" />
            <h3 className="text-xl font-bold mb-2">Cybersecurity</h3>
            <p className="text-gray-400">
              Comprehensive security solutions to protect your digital assets 
              and ensure business continuity.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-black/30 backdrop-blur-md">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">Leadership Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <TeamMember key={index} {...member} />
            ))}
          </div>
        </div>
      </section>

      {/* Client Success Stories */}
      <section className="py-20 container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">Success Stories</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="p-6 bg-black/30 backdrop-blur-md border border-white/10 rounded-xl"
          >
            <div className="flex items-center gap-4 mb-4">
              <MessageSquare className="w-8 h-8 text-blue-400" />
              <div>
                <h3 className="text-xl font-bold">TechCorp Transformation</h3>
                <p className="text-gray-400">Enterprise Solution</p>
              </div>
            </div>
            <p className="text-gray-300">
              "OctaVertex Media transformed our legacy systems into a modern, 
              cloud-based infrastructure, resulting in a 40% increase in operational 
              efficiency and 65% reduction in maintenance costs."
            </p>
            <p className="mt-4 text-blue-400 font-semibold">
              - Michael Chang, CTO at TechCorp
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="p-6 bg-black/30 backdrop-blur-md border border-white/10 rounded-xl"
          >
          <div className="flex items-center gap-4 mb-4">
              <MessageSquare className="w-8 h-8 text-blue-400" />
              <div>
                <h3 className="text-xl font-bold">InnovateLabs AI Integration</h3>
                <p className="text-gray-400">AI Solution</p>
              </div>
            </div>
            <p className="text-gray-300">
              "The AI-powered analytics platform developed by OctaVertex has revolutionized 
              our decision-making process. We've seen a 200% ROI within the first year."
            </p>
            <p className="mt-4 text-blue-400 font-semibold">
              - Dr. Emily Watson, Head of Innovation at InnovateLabs
            </p>
          </motion.div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-20 bg-black/30 backdrop-blur-md">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">Our Technology Stack</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="p-6 bg-black/20 rounded-xl"
            >
              <h3 className="text-xl font-bold mb-4">Frontend Development</h3>
              <ul className="space-y-2 text-gray-300">
                <li>React & Next.js</li>
                <li>Vue.js & Nuxt</li>
                <li>TypeScript</li>
                <li>Tailwind CSS</li>
                <li>React Native</li>
              </ul>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="p-6 bg-black/20 rounded-xl"
            >
              <h3 className="text-xl font-bold mb-4">Backend Development</h3>
              <ul className="space-y-2 text-gray-300">
                <li>Node.js & Express</li>
                <li>Python & Django</li>
                <li>Java Spring Boot</li>
                <li>Go</li>
                <li>GraphQL</li>
              </ul>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="p-6 bg-black/20 rounded-xl"
            >
              <h3 className="text-xl font-bold mb-4">Cloud & DevOps</h3>
              <ul className="space-y-2 text-gray-300">
                <li>AWS & Azure</li>
                <li>Docker & Kubernetes</li>
                <li>CI/CD Pipelines</li>
                <li>Terraform</li>
                <li>Microservices Architecture</li>
              </ul>
            </motion.div>
          </div>

          <div className="flex justify-center">
            <Icons />
          </div>
        </div>
      </section>

      {/* Global Presence */}
      <section className="py-20 container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">Global Presence</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h3 className="text-6xl font-bold text-blue-400 mb-2">5</h3>
            <p className="text-xl text-gray-300">Global Offices</p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-center"
          >
            <h3 className="text-6xl font-bold text-blue-400 mb-2">50+</h3>
            <p className="text-xl text-gray-300">Team Members</p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-center"
          >
            <h3 className="text-6xl font-bold text-blue-400 mb-2">24/7</h3>
            <p className="text-xl text-gray-300">Support Coverage</p>
          </motion.div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-black/30 backdrop-blur-md">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">Certifications & Partnerships</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="p-6 bg-black/20 rounded-xl text-center"
            >
              <h3 className="font-bold">ISO 27001</h3>
              <p className="text-gray-400">Information Security</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="p-6 bg-black/20 rounded-xl text-center"
            >
              <h3 className="font-bold">AWS Partner</h3>
              <p className="text-gray-400">Advanced Tier</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="p-6 bg-black/20 rounded-xl text-center"
            >
              <h3 className="font-bold">Microsoft Gold</h3>
              <p className="text-gray-400">Cloud Platform</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="p-6 bg-black/20 rounded-xl text-center"
            >
              <h3 className="font-bold">CMMI Level 5</h3>
              <p className="text-gray-400">Development</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
<section className="py-20 container mx-auto px-4">
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    className="max-w-4xl mx-auto text-center"
  >
    <h2 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
      Ready to Transform Your Digital Future?
    </h2>
    <p className="text-xl text-gray-300 mb-8">
      Let's discuss how we can help you achieve your technology goals and drive innovation in your organization.
    </p>
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <Button
        asChild
        size="lg"
        className="px-8 py-6 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-xl font-bold text-lg shadow-lg hover:shadow-blue-500/25 transition-all duration-200"
      >
        <a 
          href="https://cal.com/octavertexmedia" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center gap-2"
        >
          <Calendar className="w-5 h-5" />
          Schedule a Consultation
        </a>
      </Button>
    </motion.div>
    <p className="text-gray-400 mt-4 text-sm">
      Free 30-minute strategy session with our experts
    </p>
  </motion.div>
</section>
    </div>
  );
};

export default About;