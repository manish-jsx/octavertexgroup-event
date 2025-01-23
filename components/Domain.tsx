import Image from "next/image";
import React from "react";
import { Timeline } from "@/components/ui/timeline";

export default function Domain() {
  const data = [
    {
      title: "2024",
      content: (
        <div className="space-y-8">
          {/* Intro text with gradient */}
          <div className="relative group">
            <p className="text-[rgb(199,210,254)]/90 text-sm md:text-base font-medium leading-relaxed">
              Expanding our technological horizons with cutting-edge AI solutions and enterprise-scale applications
            </p>
            <div className="absolute -inset-2 bg-gradient-to-r from-[#18CCFC]/5 to-[#6344F5]/5 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 blur-xl" />
          </div>
  
          {/* Project Showcase */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="group relative overflow-hidden rounded-xl border border-[rgba(24,204,252,0.1)]">
              <Image
                src="/projects/ai-dashboard.webp"
                alt="AI Analytics Dashboard"
                width={500}
                height={500}
                className="rounded-xl object-cover h-48 w-full transform group-hover:scale-105 transition-transform duration-500"
              />
              {/* Overlay with gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-[rgb(15,24,41)]/90 to-transparent transition-all duration-300">
                <div className="absolute bottom-4 left-4 right-4">
                  <h4 className="text-[#18CCFC] font-semibold mb-2">AI Analytics Dashboard</h4>
                  <p className="text-[rgb(199,210,254)]/80 text-sm">Next-gen analytics platform with ML-powered insights</p>
                </div>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-xl border border-[rgba(24,204,252,0.1)]">
              <Image
                src="/projects/mobile-app.webp"
                alt="Mobile App Development"
                width={500}
                height={500}
                className="rounded-xl object-cover h-48 w-full transform group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[rgb(15,24,41)]/90 to-transparent transition-all duration-300">
                <div className="absolute bottom-4 left-4 right-4">
                  <h4 className="text-[#6344F5] font-semibold mb-2">Enterprise Mobile Solutions</h4>
                  <p className="text-[rgb(199,210,254)]/80 text-sm">Cross-platform apps with cutting-edge features</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "2023",
      content: (
        <div className="space-y-8">
          <div className="relative group p-6 rounded-2xl bg-gradient-to-br from-[rgba(24,204,252,0.03)] to-[rgba(99,68,245,0.03)] border border-[rgba(24,204,252,0.1)]">
            {/* Achievement Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center space-y-2">
                <div className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#18CCFC] to-[#6344F5]">
                  15+
                </div>
                <p className="text-[rgb(199,210,254)]/70 text-sm">Enterprise Apps</p>
              </div>
              <div className="text-center space-y-2">
                <div className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#6344F5] to-[#AE48FF]">
                  100%
                </div>
                <p className="text-[rgb(199,210,254)]/70 text-sm">Client Satisfaction</p>
              </div>
              <div className="text-center space-y-2">
                <div className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#AE48FF] to-[#18CCFC]">
                  20+
                </div>
                <p className="text-[rgb(199,210,254)]/70 text-sm">Expert Developers</p>
              </div>
            </div>
  
            {/* Tech Stack */}
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="text-[#18CCFC] text-base font-semibold flex items-center gap-2">
                  <span className="h-1 w-4 bg-[#18CCFC] rounded-full" />
                  Core Technologies
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {['Next.js', 'React Native', 'Node.js', 'Python'].map((tech) => (
                    <div key={tech} className="px-3 py-2 rounded-lg bg-[rgba(24,204,252,0.05)] border border-[rgba(24,204,252,0.1)]
                      text-[rgb(199,210,254)]/80 text-sm hover:text-[#18CCFC] transition-colors duration-300">
                      {tech}
                    </div>
                  ))}
                </div>
              </div>
              <div className="space-y-4">
                <h3 className="text-[#6344F5] text-base font-semibold flex items-center gap-2">
                  <span className="h-1 w-4 bg-[#6344F5] rounded-full" />
                  Specializations
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {['AI/ML', 'Cloud Native', 'IoT', 'Blockchain'].map((tech) => (
                    <div key={tech} className="px-3 py-2 rounded-lg bg-[rgba(99,68,245,0.05)] border border-[rgba(99,68,245,0.1)]
                      text-[rgb(199,210,254)]/80 text-sm hover:text-[#6344F5] transition-colors duration-300">
                      {tech}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Recent Updates",
      content: (
        <div className="space-y-8">
          {/* Updates List */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "AI Analytics Platform",
                desc: "Launched cutting-edge analytics solution",
                icon: "🚀",
                color: "from-[#18CCFC]"
              },
              {
                title: "Blockchain Integration",
                desc: "Implemented FinTech solutions",
                icon: "⛓️",
                color: "from-[#6344F5]"
              },
              {
                title: "Cloud Infrastructure",
                desc: "Enhanced service scalability",
                icon: "☁️",
                color: "from-[#AE48FF]"
              },
              {
                title: "IoT Framework",
                desc: "Developed integration platform",
                icon: "🌐",
                color: "from-[#18CCFC]"
              }
            ].map((update, index) => (
              <div key={index} className="group relative p-4 rounded-xl bg-gradient-to-br from-[rgba(24,204,252,0.03)] to-[rgba(99,68,245,0.03)]
                border border-[rgba(24,204,252,0.1)] hover:border-[rgba(24,204,252,0.2)] transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-[rgba(24,204,252,0.1)] to-[rgba(99,68,245,0.1)]
                    flex items-center justify-center text-xl">
                    {update.icon}
                  </div>
                  <div>
                    <h4 className={`text-base font-semibold bg-clip-text text-transparent bg-gradient-to-r ${update.color} to-[#6344F5]`}>
                      {update.title}
                    </h4>
                    <p className="text-[rgb(199,210,254)]/70 text-sm mt-1">
                      {update.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ),
    },
  ];
  return (
    <div className="w-full">
      <Timeline data={data} />
    </div>
  );
}
