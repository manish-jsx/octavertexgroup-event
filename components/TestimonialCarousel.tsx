"use client";
import React, { useEffect, useRef } from "react"
import TestimonialCard from "./TestimonialCard"

const testimonials = [
  {
    name: "James Mitchell",
    role: "IT Director",
    company: "Enterprise Solutions",
    image: "/api/placeholder/100/100",
    content:
      "Their enterprise software integration skills are top-notch. Seamlessly connected our CRM, ERP, and custom tools into a unified system.",
    logo: "/enterprise-logo.png",
  },
  {
    name: "Sarah Johnson",
    role: "Marketing Manager",
    company: "Global Reach Inc.",
    image: "/api/placeholder/100/100",
    content:
      "The marketing automation platform they implemented has revolutionized our campaign management. We've seen a 40% increase in engagement.",
    logo: "/global-reach-logo.png",
  },
  {
    name: "David Lee",
    role: "Operations Director",
    company: "Logistics Pro",
    image: "/api/placeholder/100/100",
    content:
      "Their custom logistics software has streamlined our entire supply chain. We've reduced delivery times by 30% and cut costs significantly.",
    logo: "/logistics-pro-logo.png",
  },
  {
    name: "Emily Chen",
    role: "CTO",
    company: "TechInnovate",
    image: "/api/placeholder/100/100",
    content:
      "The AI-driven analytics dashboard they developed gives us real-time insights we never had before. It's been a game-changer for our decision-making process.",
    logo: "/techinnovate-logo.png",
  },
  {
    name: "Michael Rodriguez",
    role: "HR Director",
    company: "People First Corp",
    image: "/api/placeholder/100/100",
    content:
      "The HR management system they implemented has transformed our hiring and onboarding processes. It's intuitive, efficient, and has greatly improved employee satisfaction.",
    logo: "/people-first-logo.png",
  },
  {
    name: "Laura Thompson",
    role: "CFO",
    company: "Financial Dynamics",
    image: "/api/placeholder/100/100",
    content:
      "Their financial reporting software provides unparalleled clarity and depth. It's made our auditing process smoother and more accurate than ever before.",
    logo: "/financial-dynamics-logo.png",
  },
]

export default function TestimonialCarousel() {
  const rowRefs = [useRef<HTMLDivElement>(null), useRef<HTMLDivElement>(null), useRef<HTMLDivElement>(null)]

  useEffect(() => {
    const animations = rowRefs.map((ref, index) => {
      const row = ref.current
      if (!row) return

      let scrollAmount = 0
      const scrollSpeed = 0.5 // Adjust this value to change the scroll speed
      const direction = index % 2 === 0 ? 1 : -1 // Alternate direction for each row

      const scroll = () => {
        scrollAmount += scrollSpeed
        row.scrollLeft = direction > 0 ? scrollAmount : row.scrollWidth / 2 - scrollAmount

        if (scrollAmount >= row.scrollWidth / 2) {
          scrollAmount = 0
        }

        return requestAnimationFrame(scroll)
      }

      return requestAnimationFrame(scroll)
    })

    return () => animations.forEach((animation) => animation && cancelAnimationFrame(animation))
  }, [])

  const rows = 3

  return (
    <div className="w-full overflow-hidden">
      {Array.from({ length: rows }).map((_, rowIndex) => (
        <div
          key={rowIndex}
          ref={rowRefs[rowIndex]}
          className="flex overflow-x-hidden py-4"
          style={{
            width: `${testimonials.length * 320}px`,
          }}
        >
          {[...testimonials, ...testimonials].map((testimonial, index) => (
            <TestimonialCard key={`${rowIndex}-${index}`} {...testimonial} />
          ))}
        </div>
      ))}
    </div>
  )
}

