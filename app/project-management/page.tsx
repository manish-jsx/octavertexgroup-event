"use client"
import { motion } from "framer-motion";

export default function ProjectManagementPortfolio() {
  return (
    <div className="bg-gray-900 text-white min-h-screen px-6 md:px-12 lg:px-24 py-12">
      <header className="text-center mb-12">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
          Empowering <span className="text-purple-400">Project Management</span>
        </h1>
        <p className="mt-4 text-lg md:text-xl text-gray-400">
          Streamlining workflows and ensuring project success with intuitive tools.
        </p>
      </header>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="grid grid-cols-12 gap-6"
      >
        {projectPortfolioItems.map((item, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.95 }}
            className={`relative bg-gradient-to-tr ${item.gradient} p-6 rounded-xl shadow-lg ${item.layoutClass}`}
          >
            <div className="absolute inset-0 border-2 border-transparent rounded-xl transition-all duration-300 hover:border-purple-400"></div>
            <div className="relative z-10">
              <div className="mb-4">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-48 object-cover rounded-lg"
                />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                {item.title}
              </h3>
              <p className="text-gray-300">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <section className="mt-16">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-purple-500 to-purple-700 p-8 rounded-lg shadow-lg text-center"
        >
          <h2 className="text-3xl font-bold text-white mb-4">
            Let’s Elevate Your Project Management
          </h2>
          <p className="text-gray-200 mb-6">
            Delivering tools and solutions to enhance collaboration and efficiency.
          </p>
          <button className="bg-purple-600 hover:bg-purple-700 text-white font-medium px-6 py-3 rounded-lg shadow-md transition duration-200">
            Contact Us
          </button>
        </motion.div>
      </section>
    </div>
  );
}

const projectPortfolioItems = [
  {
    title: "Team Collaboration Platform",
    image: "/images/team-collaboration.jpg",
    description: "Bringing teams together with seamless communication tools.",
    gradient: "from-purple-600 to-indigo-600",
    layoutClass: "col-span-6 row-span-2"
  },
  {
    title: "Task Management Tool",
    image: "/images/task-management.jpg",
    description: "Stay on top of your tasks with intuitive dashboards.",
    gradient: "from-indigo-600 to-blue-600",
    layoutClass: "col-span-6"
  },
  {
    title: "Agile Workflow System",
    image: "/images/agile-workflow.jpg",
    description: "Optimizing project workflows with agile methodologies.",
    gradient: "from-blue-600 to-teal-600",
    layoutClass: "col-span-12"
  },
  {
    title: "Resource Planning App",
    image: "/images/resource-planning.jpg",
    description: "Manage resources efficiently for better outcomes.",
    gradient: "from-teal-600 to-green-600",
    layoutClass: "col-span-4 row-span-2"
  },
  {
    title: "Progress Tracking Dashboard",
    image: "/images/progress-tracking.jpg",
    description: "Monitor project progress with real-time updates.",
    gradient: "from-green-600 to-lime-600",
    layoutClass: "col-span-4"
  },
  {
    title: "Client Feedback System",
    image: "/images/client-feedback.jpg",
    description: "Streamlining feedback to improve deliverables.",
    gradient: "from-lime-600 to-yellow-600",
    layoutClass: "col-span-4"
  }
];
