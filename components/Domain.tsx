import Image from "next/image";
import React from "react";
import { Timeline } from "@/components/ui/timeline";
import { Bot, Brain, Cloud, Database, Smartphone, Code2 } from 'lucide-react';

export default function Domain() {
  const techLogos = {
    'Next.js': '/logos/nextjs.svg',
    'React': '/logos/react.svg',
    'TypeScript': '/logos/typescript.svg',
    'TailwindCSS': '/logos/tailwind.svg',
    'Python': '/logos/python.svg',
    'Node.js': '/logos/nodejs.svg',
    'FastAPI': '/logos/fastapi.svg',
    'LangChain': '/logos/langchain.svg'
  };

  const data = [
    {
      title: "2024",
      content: (
        <div className="space-y-8">

          <div className="relative group">
            <p className="text-[rgb(199,210,254)]/90 text-sm md:text-base font-medium leading-relaxed">
              Leading the digital transformation with advanced AI solutions, cloud-native applications, and innovative enterprise software
            </p>
          </div>
  
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="group relative overflow-hidden rounded-xl border border-[rgba(24,204,252,0.1)]">
              <Image
                src="https://images.unsplash.com/photo-1677442136019-21780ecad995"
                alt="AI & Machine Learning"
                width={500}
                height={300}
                className="rounded-xl object-cover h-48 w-full transform group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[rgb(15,24,41)]/90 to-transparent">
                <div className="absolute bottom-4 left-4 right-4">
                  <h4 className="text-[#18CCFC] font-semibold mb-2 flex items-center gap-2">
                    <Brain className="w-5 h-5" />
                    AI & Machine Learning
                  </h4>
                  <p className="text-[rgb(199,210,254)]/80 text-sm">Custom RAG systems, AI agents, and ML models</p>
                </div>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-xl border border-[rgba(24,204,252,0.1)]">
              <Image
                src="https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0"
                alt="Enterprise Solutions"
                width={500}
                height={300}
                className="rounded-xl object-cover h-48 w-full transform group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[rgb(15,24,41)]/90 to-transparent">
                <div className="absolute bottom-4 left-4 right-4">
                  <h4 className="text-[#6344F5] font-semibold mb-2 flex items-center gap-2">
                    <Database className="w-5 h-5" />
                    Enterprise Solutions
                  </h4>
                  <p className="text-[rgb(199,210,254)]/80 text-sm">Scalable applications with cloud-native architecture</p>

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

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center space-y-2">
                <div className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#18CCFC] to-[#6344F5]">
                  25+
                </div>
                <p className="text-[rgb(199,210,254)]/70 text-sm">Successful Projects</p>
              </div>
              <div className="text-center space-y-2">
                <div className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#6344F5] to-[#AE48FF]">
                  15+
                </div>
                <p className="text-[rgb(199,210,254)]/70 text-sm">Global Clients</p>
              </div>
              <div className="text-center space-y-2">
                <div className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#AE48FF] to-[#18CCFC]">
                  100%
                </div>
                <p className="text-[rgb(199,210,254)]/70 text-sm">Client Satisfaction</p>
              </div>
            </div>
  

            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="text-[#18CCFC] text-base font-semibold flex items-center gap-2">
                  <span className="h-1 w-4 bg-[#18CCFC] rounded-full" />

                  Frontend Excellence
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {['Next.js', 'React', 'TypeScript', 'TailwindCSS'].map((tech) => (
                    <div key={tech} className="px-3 py-2 rounded-lg bg-[rgba(24,204,252,0.05)] border border-[rgba(24,204,252,0.1)]
                      text-[rgb(199,210,254)]/80 text-sm hover:text-[#18CCFC] transition-colors duration-300 flex items-center gap-2">
                      <Image
                        src={techLogos[tech as keyof typeof techLogos]}
                        alt={tech}
                        width={20}
                        height={20}
                        className="object-contain"
                      />

                      {tech}
                    </div>
                  ))}
                </div>
              </div>
              <div className="space-y-4">
                <h3 className="text-[#6344F5] text-base font-semibold flex items-center gap-2">
                  <span className="h-1 w-4 bg-[#6344F5] rounded-full" />

                  Backend & AI
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {['Python', 'Node.js', 'FastAPI', 'LangChain'].map((tech) => (
                    <div key={tech} className="px-3 py-2 rounded-lg bg-[rgba(99,68,245,0.05)] border border-[rgba(99,68,245,0.1)]
                      text-[rgb(199,210,254)]/80 text-sm hover:text-[#6344F5] transition-colors duration-300 flex items-center gap-2">
                      <Image
                        src={techLogos[tech as keyof typeof techLogos]}
                        alt={tech}
                        width={20}
                        height={20}
                        className="object-contain"
                      />

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

      title: "Latest Innovations",
      content: (
        <div className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "RAG Systems",
                desc: "Enterprise knowledge management with advanced retrieval augmented generation",
                icon: <Bot className="w-5 h-5 text-[#18CCFC]" />,
                color: "from-[#18CCFC]"
              },
              {
                title: "Cloud Solutions",
                desc: "Microservices and containerized applications on AWS & Azure",
                icon: <Cloud className="w-5 h-5 text-[#6344F5]" />,
                color: "from-[#6344F5]"
              },
              {
                title: "Mobile Apps",
                desc: "Cross-platform development with React Native & Flutter",
                icon: <Smartphone className="w-5 h-5 text-[#AE48FF]" />,
                color: "from-[#AE48FF]"
              },
              {
                title: "API Development",
                desc: "Scalable REST & GraphQL APIs with real-time capabilities",
                icon: <Code2 className="w-5 h-5 text-[#18CCFC]" />,
                color: "from-[#18CCFC]"
              }
            ].map((update, index) => (
              <div 
                key={index} 
                className="group relative p-6 rounded-xl bg-gradient-to-br from-[rgba(24,204,252,0.03)] to-[rgba(99,68,245,0.03)]
                  border border-[rgba(24,204,252,0.1)] hover:border-[rgba(24,204,252,0.2)] transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-[rgba(24,204,252,0.1)] to-[rgba(99,68,245,0.1)]
                    flex items-center justify-center group-hover:from-[rgba(24,204,252,0.2)] group-hover:to-[rgba(99,68,245,0.2)]
                    transition-all duration-300"
                  >
                    {update.icon}
                  </div>
                  <div className="flex-1">
                    <h4 className={`text-base font-semibold bg-clip-text text-transparent bg-gradient-to-r ${update.color} to-[#6344F5]
                      group-hover:to-[#AE48FF] transition-all duration-300`}
                    >
                      {update.title}
                    </h4>
                    <p className="text-[rgb(199,210,254)]/70 text-sm mt-2 leading-relaxed">

                      {update.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}

          </div>

          {/* Additional Tech Stack Section */}
          <div className="mt-12 p-6 rounded-xl bg-gradient-to-br from-[rgba(24,204,252,0.05)] to-[rgba(99,68,245,0.05)]
            border border-[rgba(24,204,252,0.1)]"
          >
            <h3 className="text-[#18CCFC] text-lg font-semibold mb-6 flex items-center gap-2">
              <Brain className="w-5 h-5" />
              Our Technology Stack
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {Object.entries(techLogos).map(([tech, logo]) => (
                <div 
                  key={tech}
                  className="p-3 rounded-lg bg-[rgba(24,204,252,0.05)] border border-[rgba(24,204,252,0.1)]
                    hover:border-[rgba(24,204,252,0.2)] transition-all duration-300
                    flex items-center gap-3 group"
                >
                  <Image
                    src={logo}
                    alt={tech}
                    width={24}
                    height={24}
                    className="object-contain group-hover:scale-110 transition-transform duration-300"
                  />
                  <span className="text-[rgb(199,210,254)]/80 text-sm group-hover:text-[#18CCFC]
                    transition-colors duration-300"
                  >
                    {tech}
                  </span>
                </div>
              ))}
            </div>

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
