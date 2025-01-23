'use client'
import { motion } from "framer-motion";

export default function MobileDevelopmentPortfolio() {
  return (
    <div className="bg-gray-900 text-white min-h-screen px-6 md:px-12 lg:px-24 py-12">
      <header className="text-center mb-12">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
          Innovating <span className="text-blue-400">Mobile Development</span>
        </h1>
        <p className="mt-4 text-lg md:text-xl text-gray-400">
          Crafting seamless iOS and Android applications with cutting-edge technology.
        </p>
      </header>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="grid grid-cols-12 gap-4"
      >
        {mobilePortfolioItems.map((item, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.95 }}
            className={`bg-gray-800 p-6 rounded-lg shadow-lg relative overflow-hidden ${item.layoutClass}`}
          >
            <div className="absolute inset-0 border-2 border-transparent rounded-lg transition-all duration-300 group-hover:border-blue-400"></div>
            <div className="relative z-10">
              <div className="mb-4">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-48 object-cover rounded-lg"
                />
              </div>
              <h3 className="text-xl font-semibold text-blue-300 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-400">{item.description}</p>
            </div>
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
          <h2 className="text-3xl font-bold text-blue-400 mb-4">
            Let’s Build Your Next Mobile App
          </h2>
          <p className="text-gray-400 mb-6">
            From concept to launch, we bring your mobile app ideas to life.
          </p>
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-medium px-6 py-3 rounded-lg shadow-md transition duration-200">
            Get in Touch
          </button>
        </motion.div>
      </section>
    </div>
  );
}

const mobilePortfolioItems = [
  {
    title: "E-Commerce Mobile App",
    image: "/images/ecommerce-mobile.jpg",
    description: "A dynamic shopping experience for iOS and Android platforms.",
    layoutClass: "col-span-6 row-span-2"
  },
  {
    title: "Fitness Tracker",
    image: "/images/fitness.jpg",
    description: "Track and manage your fitness journey effortlessly.",
    layoutClass: "col-span-6"
  },
  {
    title: "Food Delivery App",
    image: "/images/food-delivery.jpg",
    description: "A user-friendly app connecting users with their favorite restaurants.",
    layoutClass: "col-span-12"
  },
  {
    title: "Travel Companion",
    image: "/images/travel.jpg",
    description: "Plan and organize trips with ease and convenience.",
    layoutClass: "col-span-4 row-span-2"
  },
  {
    title: "Educational App",
    image: "/images/education-mobile.jpg",
    description: "An engaging platform for learning on the go.",
    layoutClass: "col-span-4"
  },
  {
    title: "Personal Finance Manager",
    image: "/images/finance-mobile.jpg",
    description: "Manage budgets and expenses effortlessly.",
    layoutClass: "col-span-4"
  }
];
