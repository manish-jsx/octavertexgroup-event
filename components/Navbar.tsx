"use client";

import React from "react";
import {
  IconFolder,
  IconCode,
  IconChartBar,
  IconBriefcase,
  IconMessageChatbot,
} from "@tabler/icons-react";

import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuContent,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

import { motion } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";
import Icons from "@/components/Icons";

import { 
  Layout, 
  Users2, 
  Truck, 
  ShoppingBag, 
  Box, 
  Calculator,
  Calendar,
  BarChart2,
  Filter,
  Bot,
  Brain,
  Settings2
} from 'lucide-react';

// Define types for ListItem props
interface ListItemProps {
  href: string;
  title: string;
  icon?: JSX.Element;
  children: React.ReactNode;
  className?: string;
}
// import { IconAlertTriangle, IconEye, IconLoader, IconTab, IconTooltip } from "@tabler/icons-react";

const components = [
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
];

const products = [
  {
    title: "Enterprise Solutions",
    items: [
      {
        title: "Enterprise CMS",
        href: "/products/cms",
        description: "Content Management System for large organizations",
        icon: Layout
      },
      {
        title: "HRMS Suite",
        href: "/products/hrms",
        description: "Complete HR & Workforce Management",
        icon: Users2
      },
      {
        title: "Delivery Management",
        href: "/products/delivery",
        description: "End-to-end delivery tracking & management",
        icon: Truck
      }
    ]
  },
  {
    title: "Business Solutions",
    items: [
      {
        title: "E-commerce Platform",
        href: "/products/ecommerce",
        description: "Scalable e-commerce solution",
        icon: ShoppingBag
      },
      {
        title: "Supply Chain Manager",
        href: "/products/supply-chain",
        description: "Supply chain optimization & tracking",
        icon: Box
      },
      {
        title: "Budget Estimator",
        href: "/products/budget",
        description: "Project budgeting & cost estimation",
        icon: Calculator
      }
    ]
  },
  {
    title: "Smart Tools",
    items: [
      {
        title: "Meeting Scheduler",
        href: "/products/scheduler",
        description: "Smart calendar & meeting management",
        icon: Calendar
      },
      {
        title: "Business Analytics",
        href: "/products/analytics",
        description: "Advanced business intelligence dashboard",
        icon: BarChart2
      },
      {
        title: "Funnel Builder",
        href: "/products/funnel",
        description: "Sales funnel creation & optimization",
        icon: Filter
      }
    ]
  },
  {
    title: "AI Solutions",
    items: [
      {
        title: "AI Chatbots RAG",
        href: "/products/chatbots",
        description: "Retrieval-Augmented Generation chatbots",
        icon: Bot
      },
      {
        title: "AI Agents",
        href: "/products/ai-agents",
        description: "Autonomous AI agents for business tasks",
        icon: Brain
      },
      {
        title: "Process Automation",
        href: "/products/automation",
        description: "AI-powered workflow automation",
        icon: Settings2
      }
    ]
  }
];

export default function Navbar() {
  return (
    <div className="flex flex-row flex-nowrap justify-evenly items-center content-stretch py-4 bg-gray-900 text-white">
      <Icons />
      <NavigationMenu>
        <NavigationMenuList className="flex items-center space-x-6">
          {/* Explore Menu */}
          <NavigationMenuItem>
            <NavigationMenuTrigger className="bg-customDark text-white rounded-md">Explore</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr] bg-gray-800 text-white rounded-lg shadow-lg">
                <li className="row-span-3">
                  <Link
                    href="/"
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-gray-700/50 to-gray-800 p-6 no-underline outline-none focus:shadow-md"
                  >
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                    >
                      <div className="mb-2 mt-4 text-lg font-medium">
                        Business ready solutions
                      </div>
                      <p className="text-sm leading-tight text-muted-foreground">
                        Kickstart your business with us.
                      </p>
                    </motion.div>
                  </Link>
                </li>
                <ListItem href="/about" title="About">
                  Want to know what we do ?
                </ListItem>
                <ListItem href="/case-studies" title="Case Studies">
                  Have a look on the projects and case studies we have completed
                </ListItem>
                <ListItem href="/portfolio" title="Portfolio">
                  Dive deep into our portfolio 
                </ListItem>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          {/* Products Menu - Make sure this is properly positioned */}
          <NavigationMenuItem>
            <NavigationMenuTrigger className="bg-customDark text-white rounded-md">
              Our Products
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="w-[800px] p-4 bg-gray-800 rounded-xl">
                <div className="grid grid-cols-4 gap-4">
                  {products.map((category) => (
                    <div key={category.title} className="space-y-2">
                      <h3 className="text-sm font-medium text-gray-400 mb-2">
                        {category.title}
                      </h3>
                      {category.items.map((item) => (
                        <Link
                          key={item.title}
                          href={item.href}
                          className="block p-2 rounded-lg hover:bg-gray-700/50 transition-colors group"
                        >
                          <div className="flex items-center gap-2">
                            {item.icon && (
                              <item.icon className="w-4 h-4 text-blue-400" />
                            )}
                            <span className="text-white group-hover:text-blue-400 transition-colors">
                              {item.title}
                            </span>
                          </div>
                          <p className="text-sm text-gray-400 mt-1">
                            {item.description}
                          </p>
                        </Link>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>


          {/* Services Menu */}
          <NavigationMenuItem>
            <NavigationMenuTrigger className="bg-customDark text-white rounded-md">Services</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[450px] gap-3 p-4 md:grid-cols-2 bg-gray-800 text-white rounded-lg shadow-lg">
                {components.map((component) => (
                  <ListItem
                    key={component.title}
                    title={component.title}
                    href={component.href}
                    icon={component.icon}
                  >
                    {component.description}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          
          {/* Contact Link */}
          <NavigationMenuItem>
            <Link
              href="/contact-us"
              className="focus:outline-none text-white hover:text-gray-300 hover:scale-105 transform transition duration-300 ease-in-out"
            >
              Get in Touch
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}

const ListItem = React.forwardRef<
  HTMLAnchorElement,
  {
    href: string;
    title: string;
    icon?: React.ComponentType<{ className?: string }>;
    children: React.ReactNode;
  }
>(({ href, title, icon: Icon, children, ...props }, ref) => (
  <li>
    <Link href={href} passHref>
      <motion.a
        ref={ref}
        className="block select-none space-y-1 rounded-md p-3 leading-none"
        initial={{ scale: 0.95 }}
        whileHover={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 400, damping: 15 }}
        {...props}
      >
        <div className="flex items-center space-x-2">
          {Icon && (
            <Icon className="h-4 w-4 text-neutral-500 dark:text-white" />
          )}{" "}
          {/* Render the icon component */}
          <div className="text-sm font-medium">{title}</div>
        </div>
        <p>{children}</p>
      </motion.a>
    </Link>
  </li>
));

ListItem.displayName = "ListItem";
