"use client";

import { motion } from "framer-motion";
import { Search, MapPin, Briefcase, Code2, Cloud, Brain, Palette } from 'lucide-react';
import Link from "next/link";

const jobListings = [
  {
    id: 1,
    title: "Senior Full Stack Developer",
    department: "Engineering",
    location: "Remote / New Delhi",
    type: "Full-time",
    experience: "5+ years",
    icon: <Code2 className="w-6 h-6 text-[#18CCFC]" />,
    skills: ["React", "Node.js", "TypeScript", "AWS"],
  },
  {
    id: 2,
    title: "AI/ML Engineer",
    department: "AI Division",
    location: "Hybrid / New Delhi",
    type: "Full-time",
    experience: "3+ years",
    icon: <Brain className="w-6 h-6 text-[#6344F5]" />,
    skills: ["Python", "TensorFlow", "PyTorch", "LLMs"],
  },
  // ...add more job listings
];

export default function JobListings() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Search and Filter */}
        <div className="mb-8 flex flex-wrap gap-4">
          <div className="relative flex-1 min-w-[300px]">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search positions..."
              className="w-full pl-10 pr-4 py-3 rounded-lg bg-[rgba(24,204,252,0.05)] 
                border border-[rgba(24,204,252,0.1)] text-white placeholder:text-gray-400
                focus:outline-none focus:border-[#18CCFC]/30"
            />
          </div>
          
          {/* Filters */}
          <select className="px-4 py-3 rounded-lg bg-[rgba(24,204,252,0.05)] 
            border border-[rgba(24,204,252,0.1)] text-white">
            <option value="">All Departments</option>
            <option value="engineering">Engineering</option>
            <option value="design">Design</option>
            <option value="product">Product</option>
          </select>
        </div>

        {/* Job Cards */}
        <div className="grid gap-6 md:grid-cols-2">
          {jobListings.map((job) => (
            <motion.div
              key={job.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-6 rounded-xl bg-[rgba(24,204,252,0.03)] border border-[rgba(24,204,252,0.1)]
                hover:border-[rgba(24,204,252,0.2)] transition-all duration-300 group"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-[rgba(24,204,252,0.05)]">
                  {job.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-white group-hover:text-[#18CCFC] transition-colors">
                    {job.title}
                  </h3>
                  <div className="mt-2 flex flex-wrap gap-3 text-sm text-[rgb(199,210,254)]/70">
                    <span className="flex items-center gap-1">
                      <Briefcase className="w-4 h-4" />
                      {job.department}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {job.location}
                    </span>
                  </div>
                  
                  {/* Skills */}
                  <div className="mt-4 flex flex-wrap gap-2">
                    {job.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 text-sm rounded-full bg-[rgba(24,204,252,0.1)] 
                          text-[#18CCFC] border border-[rgba(24,204,252,0.2)]"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                  
                  {/* Apply Button */}
                  <Link href={`/careers/${job.id}`}>
                    <button className="mt-4 px-4 py-2 rounded-lg bg-[rgba(24,204,252,0.1)] 
                      text-[#18CCFC] hover:bg-[rgba(24,204,252,0.2)] transition-colors">
                      View Details
                    </button>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
