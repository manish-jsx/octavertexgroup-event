'use client'
import { motion } from "framer-motion";

export default function CaseStudyPage() {
  return (
    <div className="bg-gray-900 text-white min-h-screen px-6 md:px-12 lg:px-24 py-12">
      <header className="text-center mb-12">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
          <span className="text-blue-400">Case Studies</span> that Inspire
        </h1>
        <p className="mt-4 text-lg md:text-xl text-gray-400">
          Explore our success stories and the impact of our innovative solutions.
        </p>
      </header>

      <section className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center mb-12">
        {analyticsData.map((data, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="bg-gray-800 p-6 rounded-lg shadow-md border border-gray-700"
          >
            <h3 className="text-3xl font-bold text-blue-400 mb-2">{data.stat}</h3>
            <p className="text-gray-300 text-sm">{data.label}</p>
          </motion.div>
        ))}
      </section>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="grid grid-cols-12 gap-6"
      >
        {caseStudies.map((caseStudy, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`relative bg-gray-800 p-6 rounded-xl shadow-lg ${caseStudy.layoutClass}`}
          >
            <div className="absolute inset-0 border-2 border-transparent rounded-xl transition-all duration-300 hover:border-blue-400"></div>
            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-blue-400 mb-4">
                {caseStudy.title}
              </h3>
              <p className="text-gray-300 mb-4">{caseStudy.description}</p>
              <div className="mt-4">
                <p className="text-sm text-gray-400 mb-2">Key Stats:</p>
                <ul className="text-sm text-gray-300">
                  {caseStudy.analytics.map((stat, idx) => (
                    <li key={idx} className="mb-1">• {stat}</li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <section className="mt-16">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-blue-500 to-blue-700 p-8 rounded-lg shadow-lg text-center"
        >
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Write Your Success Story?
          </h2>
          <p className="text-gray-200 mb-6">
            Let us help you achieve extraordinary results with our expertise.
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-lg shadow-md transition duration-200">
            Contact Us
          </button>
        </motion.div>
      </section>
    </div>
  );
}

const analyticsData = [
  { stat: "300+", label: "Happy Clients" },
  { stat: "500K+", label: "Hours of Work" },
  { stat: "1M+", label: "Users Impacted" },
  { stat: "95%", label: "Client Retention" },
];

const caseStudies = [
  {
    title: "E-Commerce Revamp",
    description: "Redesigned the platform to boost user engagement and sales.",
    layoutClass: "col-span-7 row-span-2",
    analytics: [
      "50% increase in conversion rate",
      "35% reduction in bounce rate",
      "100K new users in the first quarter"
    ]
  },
  {
    title: "Healthcare Mobile App",
    description: "Streamlined patient-doctor interactions through a dedicated app.",
    layoutClass: "col-span-5",
    analytics: [
      "80% user satisfaction",
      "25% increase in appointment bookings",
      "10K downloads in the first month"
    ]
  },
  {
    title: "Supply Chain Optimization",
    description: "Enhanced operational efficiency for a logistics giant.",
    layoutClass: "col-span-6",
    analytics: [
      "20% reduction in delivery time",
      "15% cost savings",
      "Improved tracking accuracy by 40%"
    ]
  },
  {
    title: "Educational Platform Expansion",
    description: "Scaled the platform to accommodate 500K new learners globally.",
    layoutClass: "col-span-6 row-span-2",
    analytics: [
      "300% growth in active users",
      "90% course completion rate",
      "Over 1M hours of content consumed"
    ]
  },
  {
    title: "Fintech Dashboard Redesign",
    description: "Revamped the UI/UX for an intuitive user experience.",
    layoutClass: "col-span-12",
    analytics: [
      "70% increase in user retention",
      "45% faster navigation",
      "200K daily active users"
    ]
  }
];

