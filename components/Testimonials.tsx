
"use client";
import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";

// Types and Interfaces
interface Testimonial {
  name: string;
  role: string;
  company: string;
  image: string;
  content: string;
  logo: string;
  gradient: string;
  metrics?: {
    value: string;
    label: string;
  }[];
}

interface TestimonialCardProps extends Testimonial {
  index: number;
}

interface SectionHeaderProps {
  title: string;
  subtitle: string;
}

// Helper Components
const SectionHeader: React.FC<SectionHeaderProps> = ({ title, subtitle }) => (
  <div className="text-center mb-20 relative z-10">
    <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#18CCFC] to-[#6344F5]">
      {title}
    </h2>
    <p className="text-[rgb(199,210,254)]/70 mt-4">{subtitle}</p>
  </div>
);

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  name,
  role,
  company,
  image,
  content,
  logo,
  gradient,
  metrics,
  index
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      className={cn(
        "flex-shrink-0 w-[400px] p-6 rounded-xl",
        "bg-gradient-to-br from-white/5 to-white/0",
        "border border-white/10 hover:border-[#18CCFC]/30",
        "relative group"
      )}
    >
      {/* Glow effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className={cn(
          "absolute inset-0 bg-gradient-to-r blur-xl",
          gradient
        )} />
      </div>

      {/* Content */}
      <div className="relative z-10">
        <div className="flex items-center gap-4 mb-6">
          <Image
            src={image}
            alt={name}
            width={50}
            height={50}
            className="rounded-full border-2 border-[#18CCFC]/30"
          />
          <div>
            <h3 className="text-[rgb(199,210,254)] font-semibold">{name}</h3>
            <p className="text-[rgb(199,210,254)]/70 text-sm">{role}</p>
          </div>
        </div>

        <blockquote className="text-[rgb(199,210,254)]/90 text-sm leading-relaxed mb-6">
          "{content}"
        </blockquote>

        {metrics && (
          <div className="grid grid-cols-2 gap-4 mb-6">
            {metrics.map((metric, idx) => (
              <div key={idx} className="text-center">
                <div className={cn(
                  "text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r",
                  gradient
                )}>
                  {metric.value}
                </div>
                <div className="text-[rgb(199,210,254)]/70 text-xs">
                  {metric.label}
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="flex items-center justify-between">
          <span className="text-[#18CCFC] text-sm">{company}</span>
          <Image
            src={logo}
            alt={company}
            width={80}
            height={30}
            className="opacity-50 group-hover:opacity-100 transition-opacity"
          />
        </div>
      </div>
    </motion.div>
  );
};

// Main Component
export const Testimonials: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = containerRef.current;
    let animationFrameId: number;
    let scrollPos = 0;

    const scroll = () => {
      if (scrollContainer) {
        scrollPos += 0.5;
        if (scrollPos >= scrollContainer.scrollWidth / 2) {
          scrollPos = 0;
        }
        scrollContainer.scrollLeft = scrollPos;
      }
      animationFrameId = requestAnimationFrame(scroll);
    };

    scroll();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="relative w-full bg-[rgb(15,24,41)] overflow-hidden py-20">
      {/* Background effects */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
      <div className="absolute inset-0 bg-gradient-to-r from-[rgb(15,24,41)] via-transparent to-[rgb(15,24,41)]" />

      <SectionHeader 
        title="Client Success Stories"
        subtitle="Hear from our valued partners about their experience working with us"
      />

      <div 
        ref={containerRef}
        className="flex gap-6 overflow-x-hidden relative z-10 px-4 pb-4"
      >
        {[...testimonials, ...testimonials].map((testimonial, idx) => (
          <TestimonialCard 
            key={`${testimonial.company}-${idx}`}
            {...testimonial}
            index={idx}
          />
        ))}
      </div>
    </div>
  );
};

// Testimonials Data
const testimonials: Testimonial[] = [


  {
    name: "John Smith",
    role: "CTO",
    company: "TechCorp International",
    image: "/api/placeholder/100/100",
    content: "OctaVertex Media transformed our digital infrastructure with their innovative cloud solutions. Their expertise in AWS and Azure integration has given us a significant competitive advantage.",
    logo: "/techcorp-logo.png",
    gradient: "from-[#18CCFC] to-[#6344F5]"
  },
  {
    name: "Sarah Chen",
    role: "Product Lead",
    company: "FinTech Solutions",
    image: "/api/placeholder/100/100",
    content: "The team's agile approach and technical excellence exceeded our expectations. They delivered our blockchain-based financial platform ahead of schedule and under budget.",
    logo: "/fintech-logo.png",
    gradient: "from-[#6344F5] to-[#AE48FF]"
  },
  {
    name: "Michael Rodriguez",
    role: "CEO",
    company: "HealthTech Innovation",
    image: "/api/placeholder/100/100",
    content: "OctaVertex's healthcare solutions showcase their versatility. Their HIPAA-compliant patient management system has streamlined our operations significantly.",
    logo: "/healthtech-logo.png",
    gradient: "from-[#AE48FF] to-[#18CCFC]"
  },
  {
    name: "Emma Thompson",
    role: "Digital Director",
    company: "Global Retail Inc",
    image: "/api/placeholder/100/100",
    content: "Their e-commerce expertise is unmatched. The scalable solution they built handles our peak season traffic of 1M+ daily users flawlessly.",
    logo: "/retail-logo.png",
    gradient: "from-[#18CCFC] to-[#6344F5]"
  },
  {
    name: "David Park",
    role: "Head of Innovation",
    company: "EduTech Pioneers",
    image: "/api/placeholder/100/100",
    content: "The AI-powered learning platform developed by OctaVertex has revolutionized our online education delivery. Student engagement is up by 60%.",
    logo: "/edutech-logo.png",
    gradient: "from-[#6344F5] to-[#AE48FF]"
  },
  {
    name: "Lisa Kumar",
    role: "Operations Director",
    company: "LogisticsPro",
    image: "/api/placeholder/100/100",
    content: "Their IoT integration for our supply chain management has reduced operational costs by 35%. Real-time tracking and predictive analytics are game-changers.",
    logo: "/logistics-logo.png",
    gradient: "from-[#AE48FF] to-[#18CCFC]"
  },
  {
    name: "Marcus Anderson",
    role: "Technical Lead",
    company: "SecurityFirst",
    image: "/api/placeholder/100/100",
    content: "OctaVertex's cybersecurity expertise is outstanding. Their zero-trust architecture implementation has strengthened our security posture significantly.",
    logo: "/security-logo.png",
    gradient: "from-[#18CCFC] to-[#6344F5]"
  },
  {
    name: "Rachel Zhou",
    role: "VP Engineering",
    company: "CloudScale Solutions",
    image: "/api/placeholder/100/100",
    content: "Their microservices architecture redesign handled our scale from 10K to 1M users smoothly. Performance optimization reduced latency by 40%.",
    logo: "/cloudscale-logo.png",
    gradient: "from-[#6344F5] to-[#AE48FF]"
  },
  {
    name: "Alex Rivera",
    role: "Product Manager",
    company: "MediaStream",
    image: "/api/placeholder/100/100",
    content: "The video streaming platform they built handles 4K content delivery flawlessly. Their expertise in WebRTC and real-time processing is impressive.",
    logo: "/mediastream-logo.png",
    gradient: "from-[#AE48FF] to-[#18CCFC]"
  },
  {
    name: "Nina Patel",
    role: "Chief Digital Officer",
    company: "BankingPlus",
    image: "/api/placeholder/100/100",
    content: "OctaVertex modernized our legacy banking systems while ensuring zero downtime. Their understanding of fintech compliance is exceptional.",
    logo: "/banking-logo.png",
    gradient: "from-[#18CCFC] to-[#6344F5]"
  },
  {
    name: "Tom Wilson",
    role: "Startup Founder",
    company: "AI Ventures",
    image: "/api/placeholder/100/100",
    content: "From MVP to scale, OctaVertex has been an invaluable partner. Their AI model optimization improved our accuracy while reducing compute costs.",
    logo: "/aiventures-logo.png",
    gradient: "from-[#6344F5] to-[#AE48FF]"
  },
  {
    name: "Sophie Laurent",
    role: "UX Director",
    company: "DesignMasters",
    image: "/api/placeholder/100/100",
    content: "The team's attention to UI/UX details is remarkable. They transformed our design concepts into fluid, responsive experiences.",
    logo: "/design-logo.png",
    gradient: "from-[#AE48FF] to-[#18CCFC]"
  },
  {
    name: "James Mitchell",
    role: "IT Director",
    company: "Enterprise Solutions",
    image: "/api/placeholder/100/100",
    content: "Their enterprise software integration skills are top-notch. Seamlessly connected our CRM, ERP, and custom tools into a unified system.",
    logo: "/enterprise-logo.png",
    gradient: "from-[#18CCFC] to-[#6344F5]"
  }
];




export default Testimonials;
