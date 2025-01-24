"use client";
import Image from "next/image";
import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";

type Card = {
  src: string;
  title: string;
  category: string;
  content: React.ReactNode;
};

const ServiceContent = ({ service }: { service: string }) => {
  const contents = {
    ai: (
      <div className="bg-[#F5F5F7] p-8 md:p-14 rounded-3xl mb-4">
        <p className="text-neutral-600 text-base md:text-2xl font-sans max-w-3xl mx-auto">
          <span className="font-bold text-neutral-700">
            Transform your business with AI-powered solutions
          </span>{" "}
          <br/>
          We specialize in developing cutting-edge AI solutions:
          <ul className="list-disc mt-4 ml-6 space-y-2">
            <li>Custom RAG-based Chatbots for enterprise knowledge management</li>
            <li>AI Agents for task automation and business process optimization</li>
            <li>Machine Learning models for predictive analytics and forecasting</li>
            <li>Natural Language Processing for document analysis and automation</li>
            <li>Computer Vision solutions for quality control and monitoring</li>
          </ul>
        </p>
        <Image
          src="https://images.unsplash.com/photo-1677442136019-21780ecad995"
          alt="AI Services"
          height="800"
          width="1200"
          className="mt-8 rounded-xl shadow-lg mx-auto object-cover"
        />
      </div>
    ),
    web: (
      <div className="bg-[#F5F5F7] p-8 md:p-14 rounded-3xl mb-4">
        <p className="text-neutral-600 text-base md:text-2xl font-sans max-w-3xl mx-auto">
          <span className="font-bold text-neutral-700">
            Full-stack web development excellence
          </span>{" "}
          <br/>
          Our web development expertise includes:
          <ul className="list-disc mt-4 ml-6 space-y-2">
            <li>Modern frontend development with React, Next.js, and TypeScript</li>
            <li>Scalable backend solutions using Node.js, Python, and Go</li>
            <li>Cloud-native architecture with AWS, Azure, and GCP</li>
            <li>Progressive Web Apps (PWA) for cross-platform compatibility</li>
            <li>Performance optimization and SEO best practices</li>
          </ul>
        </p>
        <Image
          src="https://images.unsplash.com/photo-1627398242454-45a1465c2479"
          alt="Web Development"
          height="800"
          width="1200"
          className="mt-8 rounded-xl shadow-lg mx-auto object-cover"
        />
      </div>
    ),
    mobile: (
      <div className="bg-[#F5F5F7] p-8 md:p-14 rounded-3xl mb-4">
        <p className="text-neutral-600 text-base md:text-2xl font-sans max-w-3xl mx-auto">
          <span className="font-bold text-neutral-700">
            Native mobile experiences that delight users
          </span>{" "}
          <br/>
          Our mobile development capabilities:
          <ul className="list-disc mt-4 ml-6 space-y-2">
            <li>Cross-platform development with React Native and Flutter</li>
            <li>Native iOS development using Swift and SwiftUI</li>
            <li>Native Android development with Kotlin</li>
            <li>Mobile app security and authentication</li>
            <li>Offline-first architecture and local data synchronization</li>
          </ul>
        </p>
        <Image
          src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c"
          alt="Mobile Development"
          height="800"
          width="1200"
          className="mt-8 rounded-xl shadow-lg mx-auto object-cover"
        />
      </div>
    ),
    design: (
      <div className="bg-[#F5F5F7] p-8 md:p-14 rounded-3xl mb-4">
        <p className="text-neutral-600 text-base md:text-2xl font-sans max-w-3xl mx-auto">
          <span className="font-bold text-neutral-700">
            User-centered design that converts
          </span>{" "}
          <br/>
          Our design process includes:
          <ul className="list-disc mt-4 ml-6 space-y-2">
            <li>User research and persona development</li>
            <li>Wireframing and interactive prototyping</li>
            <li>Visual design and branding guidelines</li>
            <li>Usability testing and iteration</li>
            <li>Design systems and component libraries</li>
          </ul>
        </p>
        <Image
          src="https://images.unsplash.com/photo-1629752187687-3d3c7ea3a21b"
          alt="UI/UX Design"
          height="800"
          width="1200"
          className="mt-8 rounded-xl shadow-lg mx-auto object-cover"
        />
      </div>
    ),
    enterprise: (
      <div className="bg-[#F5F5F7] p-8 md:p-14 rounded-3xl mb-4">
        <p className="text-neutral-600 text-base md:text-2xl font-sans max-w-3xl mx-auto">
          <span className="font-bold text-neutral-700">
            Enterprise solutions that scale
          </span>{" "}
          <br/>
          Our enterprise offerings include:
          <ul className="list-disc mt-4 ml-6 space-y-2">
            <li>Custom CMS and HRMS solutions</li>
            <li>Enterprise resource planning (ERP) systems</li>
            <li>Supply chain and inventory management</li>
            <li>Business intelligence and analytics dashboards</li>
            <li>Integration with legacy systems and APIs</li>
          </ul>
        </p>
        <Image
          src="https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0"
          alt="Enterprise Solutions"
          height="800"
          width="1200"
          className="mt-8 rounded-xl shadow-lg mx-auto object-cover"
        />
      </div>
    ),
  };

  return contents[service as keyof typeof contents] || null;
};

export default function Services() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} layout={true} />
  ));

  return (
    <div className="w-full h-full py-20 bg-[rgb(15,24,41)]">
     <h2 className="relative max-w-7xl pl-4 mx-auto group">
  {/* Main heading with gradient text */}
  <span className="text-xl md:text-5xl font-bold font-sans
    bg-clip-text text-transparent 
    bg-gradient-to-r from-[#18CCFC] via-[#6344F5] to-[#AE48FF]
    tracking-tight leading-tight
    block"
  >
    Services we are actively working on!
  </span>

  {/* Decorative underline */}
  <div className="absolute -bottom-1 left-4 right-0 h-[2px] w-0 
    bg-gradient-to-r from-[#18CCFC] via-[#6344F5] to-[#AE48FF]
    group-hover:w-32 transition-all duration-300"
  />
  
  {/* Glow effect */}
  <div className="absolute -inset-2 bg-gradient-to-r from-[#18CCFC]/20 via-[#6344F5]/20 to-[#AE48FF]/20 
    opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500 -z-10"
  />

  {/* Optional: Decorative elements */}
  <div className="absolute -left-2 top-1/2 -translate-y-1/2 w-1 h-12 
    bg-gradient-to-b from-[#18CCFC] to-transparent opacity-50"
  />
</h2>
      <Carousel items={cards} />
    </div>
  );
}

const data = [
  {
    category: "Artificial Intelligence",
    title: "AI & Machine Learning Solutions",
    src: "https://images.unsplash.com/photo-1677442136019-21780ecad995",
    content: <ServiceContent service="ai" />,
  },
  {
    category: "Web Development",
    title: "Full-stack Web Applications",
    src: "https://images.unsplash.com/photo-1627398242454-45a1465c2479",
    content: <ServiceContent service="web" />,
  },
  {
    category: "Mobile Development",
    title: "Native Mobile Apps",
    src: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c",
    content: <ServiceContent service="mobile" />,
  },
  {
    category: "UI/UX Design",
    title: "User-Centered Design",
    src: "https://images.unsplash.com/photo-1629752187687-3d3c7ea3a21b",
    content: <ServiceContent service="design" />,
  },
  {
    category: "Enterprise Solutions",
    title: "Enterprise Software Development",
    src: "https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0",
    content: <ServiceContent service="enterprise" />,
  },
];
