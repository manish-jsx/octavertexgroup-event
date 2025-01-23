'use client'
import { motion } from "framer-motion";

export default function UIUXPortfolio() {
  return (
    <div className="bg-gray-900 text-white min-h-screen px-6 md:px-12 lg:px-24 py-12">
      <header className="text-center mb-12">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
          Elevating <span className="text-purple-400">UI/UX</span> Design
        </h1>
        <p className="mt-4 text-lg md:text-xl text-gray-400">
          Crafting modern, simple, and intuitive experiences for your products.
        </p>
      </header>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {portfolioItems.map((item, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gray-800 p-6 rounded-lg shadow-lg"
          >
            <div className="mb-4">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-48 object-cover rounded-lg"
              />
            </div>
            <h3 className="text-xl font-semibold text-purple-300 mb-2">
              {item.title}
            </h3>
            <p className="text-gray-400">{item.description}</p>
          </motion.div>
        ))}
      </motion.div>

      <section className="mt-16">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="bg-gray-800 p-8 rounded-lg shadow-lg text-center"
        >
          <h2 className="text-3xl font-bold text-purple-400 mb-4">
            Let’s Create Something Amazing Together
          </h2>
          <p className="text-gray-400 mb-6">
            Your vision combined with our expertise can result in exceptional
            digital products.
          </p>
          <button className="bg-purple-500 hover:bg-purple-600 text-white font-medium px-6 py-3 rounded-lg shadow-md transition duration-200">
            Get in Touch
          </button>
        </motion.div>
      </section>
    </div>
  );
}

const portfolioItems = [
  {
    title: "E-Commerce Platform",
    image: "/images/ecommerce.jpg",
    description: "A seamless shopping experience with modern design principles."
  },
  {
    title: "Healthcare Dashboard",
    image: "/images/healthcare.jpg",
    description: "An intuitive interface for managing patient data effectively."
  },
  {
    title: "Social Media App",
    image: "/images/socialmedia.jpg",
    description: "A vibrant and interactive platform connecting people worldwide."
  },
  {
    title: "Finance Tracker",
    image: "/images/finance.jpg",
    description: "A sleek tool for tracking your finances and managing budgets."
  },
  {
    title: "Educational App",
    image: "/images/education.jpg",
    description: "A user-friendly app for learning and skill development."
  },
  {
    title: "Portfolio Website",
    image: "/images/portfolio.jpg",
    description: "Showcase your work with style and elegance."
  }
];
