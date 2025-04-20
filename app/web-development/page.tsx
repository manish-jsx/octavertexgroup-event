
"use client";
import { motion } from "framer-motion";

const WebDevelopmentPage = () => {
  const revealVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: i * 0.2,
      },
    }),
  };

  return (
    <main className="mx-auto py-12 px-4 md:px-8 bg-gray-900 text-white">
      <header className="text-center mb-12">
        <motion.h1
          className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-blue-400">Web Development</span> Services
        </motion.h1>
        <motion.p
          className="text-lg text-gray-400"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Robust, scalable, and secure solutions tailored for your business
          needs.
        </motion.p>
      </header>

      <motion.div
        className="grid grid-cols-12 gap-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {[
          {
            title: "Custom Web Applications",
            description:
              "Build tailored applications with user-centric designs and powerful features.",
            colSpan: "col-span-7 row-span-2",
          },
          {
            title: "E-Commerce Solutions",
            description:
              "Seamless online shopping experiences to drive your sales.",
            colSpan: "col-span-5",
          },
          {
            title: "Responsive Design",
            description:
              "Ensure optimal performance on devices of all sizes.",
            colSpan: "col-span-6",
          },
          {
            title: "API Integration",
            description:
              "Seamlessly connect services and systems for enhanced functionality.",
            colSpan: "col-span-6 row-span-2",
          },
          {
            title: "SEO Optimization",
            description:
              "Boost visibility and ranking with effective search engine strategies.",
            colSpan: "col-span-12",
          },
        ].map((item, index) => (
          <motion.div
            key={index}
            className={`bento-item bg-gray-800 p-6 rounded-xl shadow-lg border-2 border-transparent hover:border-blue-400 transition duration-300 ${item.colSpan}`}
            custom={index}
            variants={revealVariant}
          >
            <h2 className="text-2xl font-bold text-blue-400 mb-4">
              {item.title}
            </h2>
            <p className="text-gray-300">{item.description}</p>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        className="mt-16 text-center"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg shadow-md transition duration-300">
          Learn More
        </button>
      </motion.div>


export default WebDevelopmentPage;

