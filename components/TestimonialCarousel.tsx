"use client";
import React, { useEffect, useRef } from "react"
import TestimonialCard from "./TestimonialCard"
import { Code2, Cpu, LineChart, Building2, Users2, Shield, Briefcase, Network } from 'lucide-react'

const testimonials = [
  {
    name: "James Mitchell",
    role: "IT Director",
    company: "Enterprise Solutions",
    image: "/testimonials/james.jpg",
    content: "Their enterprise software integration skills are top-notch. Seamlessly connected our CRM, ERP, and custom tools into a unified system.",
    logo: "/logos/enterprise-logo.png",
    industry: "Enterprise Software",
    icon: <Building2 className="w-5 h-5 text-[rgb(121,205,255)]" />,
    metrics: "40% reduction in operational costs",
  },
  {
    name: "Sarah Johnson",
    role: "Marketing Director",
    company: "Global Reach Inc.",
    image: "/testimonials/sarah.jpg",
    content: "The marketing automation platform they implemented has revolutionized our campaign management. We've seen a 40% increase in engagement.",
    logo: "/logos/global-reach-logo.png",
    industry: "Digital Marketing",
    icon: <LineChart className="w-5 h-5 text-[rgb(121,205,255)]" />,
    metrics: "3x increase in lead generation",
  },
  {
    name: "David Lee",
    role: "CTO",
    company: "TechInnovate",
    image: "/testimonials/david.jpg",
    content: "Their AI implementation has transformed our data analytics capabilities. The insights we get now are invaluable for decision-making.",
    logo: "/logos/techinnovate-logo.png",
    industry: "Artificial Intelligence",
    icon: <Cpu className="w-5 h-5 text-[rgb(121,205,255)]" />,
    metrics: "85% accuracy in predictive analytics",
  },
  {
    name: "Elena Rodriguez",
    role: "Head of Engineering",
    company: "CloudTech Solutions",
    image: "/testimonials/elena.jpg",
    content: "Outstanding cloud architecture and DevOps implementation. Our deployment time reduced from days to hours.",
    logo: "/logos/cloudtech-logo.png",
    industry: "Cloud Computing",
    icon: <Network className="w-5 h-5 text-[rgb(121,205,255)]" />,
    metrics: "99.99% uptime achieved",
  },
  {
    name: "Michael Chang",
    role: "Product Manager",
    company: "FinTech Innovation",
    image: "/testimonials/michael.jpg",
    content: "Their blockchain solution revolutionized our payment processing system. Transparent, secure, and highly efficient.",
    logo: "/logos/fintech-logo.png",
    industry: "Financial Technology",
    icon: <Shield className="w-5 h-5 text-[rgb(121,205,255)]" />,
    metrics: "50% reduction in transaction fees",
  },
  {
    name: "Rachel Thomson",
    role: "HR Director",
    company: "Global Staffing Co",
    image: "/testimonials/rachel.jpg",
    content: "The HR management system they built has streamlined our entire recruitment and onboarding process.",
    logo: "/logos/staffing-logo.png",
    industry: "Human Resources",
    icon: <Users2 className="w-5 h-5 text-[rgb(121,205,255)]" />,
    metrics: "75% faster onboarding process",
  },
  {
    name: "Alex Martinez",
    role: "Lead Developer",
    company: "CodeCraft Labs",
    image: "/testimonials/alex.jpg",
    content: "Their code quality and documentation are exceptional. Made our system maintenance and updates incredibly efficient.",
    logo: "/logos/codecraft-logo.png",
    industry: "Software Development",
    icon: <Code2 className="w-5 h-5 text-[rgb(121,205,255)]" />,
    metrics: "60% reduction in bug reports",
  },
  {
    name: "Sophie Williams",
    role: "Operations Manager",
    company: "Smart Manufacturing",
    image: "/testimonials/sophie.jpg",
    content: "The IoT solution they implemented has given us complete visibility into our manufacturing processes.",
    logo: "/logos/manufacturing-logo.png",
    industry: "Industrial IoT",
    icon: <Briefcase className="w-5 h-5 text-[rgb(121,205,255)]" />,
    metrics: "35% improvement in efficiency",
  },
]

export default function TestimonialCarousel() {
  const rowRefs = [useRef<HTMLDivElement>(null), useRef<HTMLDivElement>(null)]
  
  useEffect(() => {
    const animations = rowRefs.map((ref, index) => {
      const row = ref.current
      if (!row) return

      let scrollAmount = 0
      const scrollSpeed = 0.5
      const direction = index % 2 === 0 ? 1 : -1

      const scroll = () => {
        scrollAmount += scrollSpeed
        row.scrollLeft = direction > 0 ? scrollAmount : row.scrollWidth / 2 - scrollAmount

        if (scrollAmount >= row.scrollWidth / 2) {
          scrollAmount = 0
        }

        return requestAnimationFrame(scroll)
      }

      const animation = requestAnimationFrame(scroll)

      // Pause animation on hover
      const pauseAnimation = () => cancelAnimationFrame(animation)
      const resumeAnimation = () => requestAnimationFrame(scroll)

      row.addEventListener('mouseenter', pauseAnimation)
      row.addEventListener('mouseleave', resumeAnimation)

      return () => {
        cancelAnimationFrame(animation)
        row.removeEventListener('mouseenter', pauseAnimation)
        row.removeEventListener('mouseleave', resumeAnimation)
      }
    })

    return () => animations.forEach((cleanup) => cleanup && cleanup())
  }, [])

  return (
    <div className="w-full overflow-hidden">
      {[0, 1].map((rowIndex) => (
        <div
          key={rowIndex}
          ref={rowRefs[rowIndex]}
          className="flex overflow-x-hidden py-8 transition-transform duration-300"
          style={{
            width: `${testimonials.length * 400}px`,
          }}
        >
          {[...testimonials, ...testimonials].map((testimonial, index) => (
            <TestimonialCard 
              key={`${rowIndex}-${index}`} 
              {...testimonial} 
            />
          ))}
        </div>
      ))}
    </div>
  )
}

