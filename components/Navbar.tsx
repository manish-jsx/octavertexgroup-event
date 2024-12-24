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

export default function Navbar() {
  return (
    <div className="flex flex-row flex-nowrap justify-evenly items-center content-stretch py-4 bg-gray-900 text-white">
      <Icons />
      <NavigationMenu>
        <NavigationMenuList className="flex items-center space-x-6">
          {/* Getting Started Menu */}
          <NavigationMenuItem>
            <NavigationMenuTrigger>Getting Started</NavigationMenuTrigger>
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
                        shadcn/ui
                      </div>
                      <p className="text-sm leading-tight text-muted-foreground">
                        Beautifully designed components built with Radix UI and
                        Tailwind CSS.
                      </p>
                    </motion.div>
                  </Link>
                </li>
                <ListItem href="/about" title="About">
                  Re-usable components built using Radix UI and Tailwind CSS.
                </ListItem>
                <ListItem href="/case-studies" title="Case Studies">
                  How to install dependencies and structure your app.
                </ListItem>
                <ListItem href="/portfolio" title="Portfolio">
                  Styles for headings, paragraphs, lists, etc.
                </ListItem>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          {/* Components Menu */}
          <NavigationMenuItem>
            <NavigationMenuTrigger>Components</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] bg-gray-800 text-white rounded-lg shadow-lg">
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

          {/* Documentation Link */}
          <NavigationMenuItem>
            <Link
              href="/contact-us"
              className="focus:outline-none hover:underline text-white"
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
