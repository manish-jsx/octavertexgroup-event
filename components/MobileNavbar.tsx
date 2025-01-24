"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
  Menu,
  X,
  ChevronRight,
  Layout,
  Users2,
  Truck,
  ShoppingBag,
  Box,
  Calculator,
  Calendar,
  BarChart2,
  Brain,
} from "lucide-react";
import { IconBriefcase, IconChartBar, IconCode, IconFolder, IconMessageChatbot } from "@tabler/icons-react";
import Icons from "@/components/Icons";

interface MenuItem {
  title: string;
  href: string;
  description: string;
  icon?: any; // Allow both Lucide and Tabler icons
}

type MenuItems = {
  [key: string]: MenuItem[];
};

const menuItems: MenuItems = {
  "Explore": [
    {
      title: "About",
      href: "/about",
      description:
        "Want to know what we do ?",
    },
    {
      title: "Case Studies",
      href: "/case-studies",
      description: "Have a look on the projects and case studies we have completed",
    },
    {
      title: "Portfolio",
      href: "/portfolio",
      description: "Dive deep into our portfolio ",
    },
  ],

  "Services": [
    {
      title: "Web Development",
      href: "/web-development",
      description: "Full-stack web development services.",
      icon: IconCode,
    },
    {
      title: "Mobile App Development",
      href: "/mobile-development",
      description: "Native iOS and Android app development.",
      icon: IconFolder,
    },
    {
      title: "API Development",
      href: "/api-development",
      description: "Custom API solutions for your needs.",
      icon: IconChartBar,
    },
    {
      title: "UI/UX Design",
      href: "/ui-ux-design",
      description: "User-centered design and prototyping.",
      icon: IconBriefcase,
    },
    {
      title: "Project Management",
      href: "/project-management",
      description: "Streamlined project management services.",
      icon: IconMessageChatbot,
    },
  ],

  "Our Products": [
    {
      title: "Enterprise CMS",
      href: "/products/cms",
      description: "Content Management System",
      icon: Layout
    },
    {
      title: "HRMS Suite",
      href: "/products/hrms",
      description: "HR Management System",
      icon: Users2
    },
    {
      title: "Delivery System",
      href: "/products/delivery",
      description: "Delivery Management",
      icon: Truck
    },
    {
      title: "E-commerce",
      href: "/products/ecommerce",
      description: "E-commerce Platform",
      icon: ShoppingBag
    },
    {
      title: "Supply Chain",
      href: "/products/supply-chain",
      description: "Supply Chain Management",
      icon: Box
    },
    {
      title: "Budget Estimator",
      href: "/products/budget",
      description: "Project Budgeting",
      icon: Calculator
    },
    {
      title: "Meeting Scheduler",
      href: "/products/scheduler",
      description: "Calendar Management",
      icon: Calendar
    },
    {
      title: "Analytics",
      href: "/products/analytics",
      description: "Business Intelligence",
      icon: BarChart2
    },
    {
      title: "AI Solutions",
      href: "/products/ai",
      description: "AI-powered Tools",
      icon: Brain
    }
  ],
};

const MobileNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (isOpen) setIsOpen(false);
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("scroll", handleScroll);
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isOpen]);

  const handleClose = () => {
    setIsOpen(false);
    setActiveSubmenu(null);
  };

  return (
    <div className="lg:hidden relative">
      <div
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300
        ${isOpen ? "bg-transparent" : "bg-[rgb(16,24,40)]"}`}
      >
        <div className="flex justify-between items-center px-4 py-3">
          <Icons />
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 hover:bg-gray-700/50 rounded-lg transition-colors"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
          >
            {isOpen ? (
              <X size={24} className="text-white" />
            ) : (
              <Menu size={24} className="text-white" />
            )}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 bg-[rgb(16,24,40)]/80 backdrop-blur-sm"
              onClick={handleClose}
            />

            <motion.div
              initial={{ opacity: 0, x: "-100%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "-100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed inset-y-0 left-0 z-50 w-full md:w-80 bg-[rgb(16,24,40)]/95 backdrop-blur-md shadow-xl"
            >
              <button
                onClick={handleClose}
                className="absolute top-4 right-4 p-2 text-white hover:bg-white/10 rounded-full transition-colors"
                aria-label="Close menu"
              >
                <X size={24} />
              </button>

              <div className="h-full overflow-y-auto pt-16 pb-6 px-4">
                {!activeSubmenu ? (
                  <nav>
                    {Object.keys(menuItems).map((section) => (
                      <motion.button
                        key={section}
                        onClick={() => setActiveSubmenu(section)}
                        className="w-full flex justify-between items-center p-4 text-white hover:bg-white/10 rounded-lg mb-2 transition-colors"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <span className="text-lg font-medium">{section}</span>
                        <ChevronRight size={20} />
                      </motion.button>
                    ))}
                    <Link 
                      href="/contact-us"
                      className="block p-4 text-white hover:bg-white/10 rounded-lg mb-2 transition-colors"
                    >
                      <span className="text-lg font-medium">Get in Touch</span>
                    </Link>
                  </nav>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 50 }}
                    className="space-y-2"
                  >
                    <motion.button
                      onClick={() => setActiveSubmenu(null)}
                      className="flex items-center p-4 text-white hover:bg-white/10 rounded-lg mb-4 transition-colors"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <ChevronRight className="rotate-180 mr-2" size={20} />
                      <span>Back to Menu</span>
                    </motion.button>

                    {menuItems[activeSubmenu]?.map((item) => (
                      <Link 
                        key={item.title} 
                        href={item.href}
                        className="block p-4 text-white hover:bg-white/10 rounded-lg group transition-colors"
                      >
                        <div className="flex items-center mb-2">
                          {item.icon && (
                            <item.icon
                              className="mr-2 group-hover:text-blue-400 transition-colors"
                              size={20}
                            />
                          )}
                          <span className="font-medium group-hover:text-blue-400 transition-colors">
                            {item.title}
                          </span>
                        </div>
                        <p className="text-sm text-gray-400">
                          {item.description}
                        </p>
                      </Link>
                    ))}
                  </motion.div>
                )}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MobileNavbar;
