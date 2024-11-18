

"use client";

import React, { useState } from "react";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { IconHome, IconMessage, IconUser, IconServer } from "@tabler/icons-react";


import { motion } from "framer-motion";
import Link from "next/link";

export default function FloatingNavbar() {
  const navItems = [
    {
      name: "Home",
      link: "/",
      icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Services",
      link: "/services",
      icon: <IconServer className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "About",
      link: "/about",
      icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Contact",
      link: "/contact",
      icon: (
        <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
  ];

  return (
    <div className="relative w-full">
      <FloatingNav navItems={navItems} />
      
    </div>
  );
}

// Navbar Component
const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar">
      {/* Container for the logo */}
      <motion.div
        className="logo-container"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Link href="/">
          <div className="logo">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" className="logo">
              <defs>
                <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: "#FF5733", stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: "#C70039", stopOpacity: 1 }} />
                </linearGradient>
                <filter id="f1" x="0" y="0" width="150%" height="150%">
                  <feOffset result="offOut" in="SourceAlpha" dx="5" dy="5" />
                  <feGaussianBlur in="offOut" result="blurOut" stdDeviation="3" />
                  <feBlend in="SourceGraphic" in2="blurOut" mode="normal" />
                </filter>
              </defs>
              <g filter="url(#f1)">
                <polygon points="0,0 100,0 50,100" fill="url(#gradient1)" />
                <polygon points="100,0 200,0 150,100" fill="url(#gradient1)" />
                <polygon points="50,100 150,100 100,200" fill="url(#gradient1)" />
              </g>
            </svg>
          </div>
        </Link>
        <Link href="/">
          <div className="brand-name">
            <img src="/logo/OctaVertex.svg" alt="OctaVertex" className="octavertex" />
            <img src="/logo/Media.svg" alt="Media" className="media" />
          </div>
        </Link>
      </motion.div>

      {/* Hamburger Menu Button */}
      <button className="menu-button" onClick={toggleMenu}>
        <svg width="48" height="48" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"></path>
        </svg>
      </button>

      {/* Navigation Links */}
      <motion.ul
        className={`nav-links ${isMenuOpen ? "open" : ""}`}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} onClick={closeMenu}>
          <Link href="/">Home</Link>
        </motion.li>
        <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} onClick={closeMenu}>
          <Link href="/portfolio">Portfolio</Link>
        </motion.li>
        <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} onClick={closeMenu}>
          <Link href="/#services">Services</Link>
        </motion.li>
        <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} onClick={closeMenu}>
          <Link href="/about">About</Link>
        </motion.li>
        <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} onClick={closeMenu}>
          <Link href="/#contact">Contact</Link>
        </motion.li>
      </motion.ul>
    </nav>
  );
};






// "use client";

// import React, { useState } from "react";
// import { FloatingNav } from "@/components/ui/floating-navbar";
// import { IconHome, IconMessage, IconUser, IconServer } from "@tabler/icons-react";
// import {
//   NavigationMenu,
//   NavigationMenuContent,
//   NavigationMenuItem,
//   NavigationMenuLink,
//   NavigationMenuList,
//   NavigationMenuTrigger,
// } from "@/components/ui/navigation-menu";
// import { cn } from "@/lib/utils"
// import { motion } from "framer-motion";
// import Link from "next/link";

// export default function FloatingNavbar() {
//   const navItems = [
//     {
//       name: "Home",
//       link: "/",
//       icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
//     },
//     {
//       name: "Services",
//       link: "/services",
//       icon: <IconServer className="h-4 w-4 text-neutral-500 dark:text-white" />,
//     },
//     {
//       name: "About",
//       link: "/about",
//       icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
//     },
//     {
//       name: "Contact",
//       link: "/contact",
//       icon: (
//         <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />
//       ),
//     },
//   ];

//   return (
//     <div className="relative w-full">
//       <FloatingNav navItems={navItems} />
//       <NavigationMenuDemo /> {/* Replaced Navbar with NavigationMenuDemo */}
//     </div>
//   );
// }

// // NavigationMenu Demo Component
// const NavigationMenuDemo: React.FC = () => {
//   return (
//     <NavigationMenu>
//       <NavigationMenuList>
//         <NavigationMenuItem>
//           <NavigationMenuTrigger>Home</NavigationMenuTrigger>
//           <NavigationMenuContent>
//             <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
//               <ListItem href="/" title="Home">
//                 Welcome to the homepage
//               </ListItem>
//             </ul>
//           </NavigationMenuContent>
//         </NavigationMenuItem>
//         <NavigationMenuItem>
//           <NavigationMenuTrigger>Services</NavigationMenuTrigger>
//           <NavigationMenuContent>
//             <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
//               <ListItem href="/services" title="Our Services">
//                 Explore the services we offer
//               </ListItem>
//             </ul>
//           </NavigationMenuContent>
//         </NavigationMenuItem>
//         <NavigationMenuItem>
//           <NavigationMenuTrigger>About</NavigationMenuTrigger>
//           <NavigationMenuContent>
//             <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
//               <ListItem href="/about" title="About Us">
//                 Learn more about our company
//               </ListItem>
//             </ul>
//           </NavigationMenuContent>
//         </NavigationMenuItem>
//         <NavigationMenuItem>
//           <NavigationMenuTrigger>Contact</NavigationMenuTrigger>
//           <NavigationMenuContent>
//             <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
//               <ListItem href="/contact" title="Contact Us">
//                 Get in touch with us
//               </ListItem>
//             </ul>
//           </NavigationMenuContent>
//         </NavigationMenuItem>
//       </NavigationMenuList>
//     </NavigationMenu>
//   );
// };

// const ListItem = React.forwardRef<
//   React.ElementRef<"a">,
//   React.ComponentPropsWithoutRef<"a">
// >(({ className, title, children, ...props }, ref) => {
//   return (
//     <li>
//       <NavigationMenuLink asChild>
//         <a
//           ref={ref}
//           className={cn(
//             "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
//             className
//           )}
//           {...props}
//         >
//           <div className="text-sm font-medium leading-none">{title}</div>
//           <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
//             {children}
//           </p>
//         </a>
//       </NavigationMenuLink>
//     </li>
//   );
// });
// ListItem.displayName = "ListItem";

