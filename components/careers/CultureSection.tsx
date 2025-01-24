"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const cultureImages = [
  {
    src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c",
    alt: "Team collaboration"
  },
  {
    src: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4",
    alt: "Office space"
  },
  {
    src: "https://images.unsplash.com/photo-1603354350317-6f7aaa5911c5",
    alt: "Team meeting"
  }
];

const values = [
  {
    title: "Innovation First",
    description: "We embrace new technologies and ideas to solve complex problems"
  },
  {
    title: "Continuous Learning",
    description: "Growing together through knowledge sharing and skill development"
  },
  {
    title: "Work-Life Balance",
    description: "Maintaining harmony between professional and personal life"
  },
  {
    title: "Open Communication",
    description: "Transparent and honest dialogue at all levels"
  }
];

export default function CultureSection() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent 
            bg-gradient-to-r from-[#18CCFC] via-[#6344F5] to-[#AE48FF]">
            Our Culture & Values
          </h2>
          <p className="mt-4 text-[rgb(199,210,254)]/70 max-w-2xl mx-auto">
            Experience a workplace that values creativity, growth, and collaboration.
          </p>
        </motion.div>

        {/* Culture Images */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {cultureImages.map((image, index) => (
            <motion.div
              key={image.alt}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative h-64 overflow-hidden rounded-xl group"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[rgb(15,24,41)]/90 to-transparent" />
            </motion.div>
          ))}
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-6 rounded-xl bg-[rgba(24,204,252,0.03)] border border-[rgba(24,204,252,0.1)]
                hover:border-[rgba(24,204,252,0.2)] transition-all duration-300"
            >
              <h3 className="text-xl font-semibold text-white mb-2">
                {value.title}
              </h3>
              <p className="text-[rgb(199,210,254)]/70">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
