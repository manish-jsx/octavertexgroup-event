"use client";

import { motion } from "framer-motion";
import { ArrowLeft, MapPin, Clock, Briefcase, Calendar } from "lucide-react";
import Link from "next/link";

export default function JobDetailPage({ params }: { params: { id: string } }) {
  // Mock job data - In production, fetch this from your API
  const job = {
    id: params.id,
    title: "Senior Full Stack Developer",
    department: "Engineering",
    location: "Remote / New Delhi",
    type: "Full-time",
    experience: "5+ years",
    salary: "₹18-25 LPA",
    postedDate: "2024-02-15",
    description: `We are looking for a Senior Full Stack Developer to join our team...`,
    responsibilities: [
      "Design and implement scalable web applications",
      "Lead technical architecture decisions",
      "Mentor junior developers",
      "Collaborate with cross-functional teams"
    ],
    requirements: [
      "5+ years of experience with React and Node.js",
      "Strong understanding of TypeScript",
      "Experience with cloud platforms (AWS/Azure)",
      "Excellent problem-solving skills"
    ],
    benefits: [
      "Competitive salary",
      "Health insurance",
      "Remote work options",
      "Learning budget"
    ]
  };

  return (
    <div className="min-h-screen bg-[rgb(15,24,41)] py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <Link href="/careers" className="inline-flex items-center text-[#18CCFC] hover:text-[#18CCFC]/80 mb-8">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Careers
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-8"
        >
          {/* Header */}
          <div className="space-y-4">
            <h1 className="text-4xl font-bold bg-clip-text text-transparent 
              bg-gradient-to-r from-[#18CCFC] to-[#6344F5]">
              {job.title}
            </h1>
            
            <div className="flex flex-wrap gap-4 text-[rgb(199,210,254)]/70">
              <span className="flex items-center gap-2">
                <Briefcase className="w-4 h-4" />
                {job.department}
              </span>
              <span className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                {job.location}
              </span>
              <span className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                {job.type}
              </span>
              <span className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                Posted {new Date(job.postedDate).toLocaleDateString()}
              </span>
            </div>
          </div>

          {/* Job Details */}
          <div className="grid gap-8">
            {/* Description */}
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-white">Description</h2>
              <p className="text-[rgb(199,210,254)]/70 leading-relaxed">
                {job.description}
              </p>
            </section>

            {/* Responsibilities */}
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-white">Responsibilities</h2>
              <ul className="list-disc list-inside space-y-2 text-[rgb(199,210,254)]/70">
                {job.responsibilities.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </section>

            {/* Requirements */}
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-white">Requirements</h2>
              <ul className="list-disc list-inside space-y-2 text-[rgb(199,210,254)]/70">
                {job.requirements.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </section>

            {/* Benefits */}
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-white">Benefits</h2>
              <ul className="list-disc list-inside space-y-2 text-[rgb(199,210,254)]/70">
                {job.benefits.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </section>

            {/* Apply Button */}
            <div className="pt-8">
              <button className="w-full md:w-auto px-8 py-3 bg-[#18CCFC] text-white rounded-lg
                hover:bg-[#18CCFC]/90 transition-colors font-semibold">
                Apply for this Position
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
