// "use client";

// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import Link from "next/link";
// import { Menu, X, ChevronRight, AlertTriangle, Eye, Loader, Table, HelpCircle, LucideIcon } from "lucide-react";
// import Icons from "@/components/Icons";

// interface MenuItem {
//   title: string;
//   href: string;
//   description: string;
//   icon?: LucideIcon;  // Changed to LucideIcon type
// }

// const MobileNavbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);

//   const menuItems = {
//     "Getting Started": [
//       { title: "Introduction", href: "/docs", description: "Re-usable components built using Radix UI and Tailwind CSS." },
//       { title: "Installation", href: "/docs/installation", description: "How to install dependencies and structure your app." },
//       { title: "Typography", href: "/docs/primitives/typography", description: "Styles for headings, paragraphs, lists, etc." },
//     ],
//     "Components": [
//       { title: "Alert Dialog", href: "/docs/primitives/alert-dialog", icon: AlertTriangle },
//       { title: "Hover Card", href: "/docs/primitives/hover-card", icon: Eye },
//       { title: "Progress", href: "/docs/primitives/progress", icon: Loader },
//       { title: "Tabs", href: "/docs/primitives/tabs", icon: Table },
//       { title: "Tooltip", href: "/docs/primitives/tooltip", icon: HelpCircle },
//     ]
//   };

//   return (
//     <div className="lg:hidden">
//       {/* Mobile Navbar Header */}
//       <div className="flex justify-between items-center px-4 py-3 bg-[rgb(16,24,40)] text-white">
//         <Icons />
//         <button
//           onClick={() => setIsOpen(!isOpen)}
//           className="p-2 hover:bg-gray-700 rounded-lg transition-colors"
//         >
//           {isOpen ? <X size={24} /> : <Menu size={24} />}
//         </button>
//       </div>

//       {/* Mobile Menu Overlay */}
//       <AnimatePresence>
//         {isOpen && (
//           <motion.div
//             initial={{ opacity: 0, y: -20 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -20 }}
//             className="fixed inset-0 z-50 bg-[rgb(16,24,40)] pt-16"
//           >
//             <div className="h-full overflow-y-auto">
//               {/* Main Menu */}
//               {!activeSubmenu && (
//                 <div className="px-4 py-2">
//                   {Object.keys(menuItems).map((section) => (
//                     <button
//                       key={section}
//                       onClick={() => setActiveSubmenu(section)}
//                       className="w-full flex justify-between items-center p-4 text-white hover:bg-gray-700 rounded-lg mb-2"
//                     >
//                       <span className="text-lg font-medium">{section}</span>
//                       <ChevronRight size={20} />
//                     </button>
//                   ))}
//                   <Link href="/docs">
//                     <div className="p-4 text-white hover:bg-gray-700 rounded-lg mb-2">
//                       <span className="text-lg font-medium">Documentation</span>
//                     </div>
//                   </Link>
//                 </div>
//               )}

//               {/* Submenu */}
//               {activeSubmenu && (
//                 <motion.div
//                   initial={{ x: 300 }}
//                   animate={{ x: 0 }}
//                   exit={{ x: 300 }}
//                   className="px-4 py-2"
//                 >
//                   <button
//                     onClick={() => setActiveSubmenu(null)}
//                     className="flex items-center p-4 text-white hover:bg-gray-700 rounded-lg mb-4"
//                   >
//                     <ChevronRight className="rotate-180 mr-2" size={20} />
//                     <span>Back to Menu</span>
//                   </button>

//                   {menuItems[activeSubmenu as keyof typeof menuItems].map((item) => (
//                     <Link key={item.title} href={item.href}>
//                       <div className="p-4 text-white hover:bg-gray-700 rounded-lg mb-2">
//                         <div className="flex items-center mb-2">
//                           {item.icon && <item.icon className="mr-2" size={20} />}
//                           <span className="font-medium">{item.title}</span>
//                         </div>
//                         {item.description && (
//                           <p className="text-sm text-gray-400">{item.description}</p>
//                         )}
//                       </div>
//                     </Link>
//                   ))}
//                 </motion.div>
//               )}
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// };

// export default MobileNavbar;

// "use client";

// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import Link from "next/link";
// import { Menu, X, ChevronRight, AlertTriangle, Eye, Loader, Table, HelpCircle, LucideIcon } from "lucide-react";
// import Icons from "@/components/Icons";

// interface MenuItem {
//   title: string;
//   href: string;
//   description: string;
//   icon?: LucideIcon;  // Changed to LucideIcon type
// }

// const MobileNavbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [activeSubmenu, setActiveSubmenu] = useState<keyof typeof menuItems | null>(null);

//   const menuItems = {
//     "Getting Started": [
//       {
//         title: "Introduction",
//         href: "/docs",
//         description: "Re-usable components built using Radix UI and Tailwind CSS.",
//       },
//       {
//         title: "Installation",
//         href: "/docs/installation",
//         description: "How to install dependencies and structure your app.",
//       },
//       {
//         title: "Typography",
//         href: "/docs/primitives/typography",
//         description: "Styles for headings, paragraphs, lists, etc.",
//       },
//     ] as MenuItem[],

//     "Components": [
//       {
//         title: "Alert Dialog",
//         href: "/docs/primitives/alert-dialog",
//         icon: AlertTriangle,
//         description: "A modal dialog that interrupts the user.",
//       },
//       {
//         title: "Hover Card",
//         href: "/docs/primitives/hover-card",
//         icon: Eye,
//         description: "For sighted users to preview content.",
//       },
//       {
//         title: "Progress",
//         href: "/docs/primitives/progress",
//         icon: Loader,
//         description: "Displays task completion progress.",
//       },
//       {
//         title: "Tabs",
//         href: "/docs/primitives/tabs",
//         icon: Table,
//         description: "Layered sections of content.",
//       },
//       {
//         title: "Tooltip",
//         href: "/docs/primitives/tooltip",
//         icon: HelpCircle,
//         description: "Displays additional information.",
//       },
//     ] as MenuItem[],
//   };

//   return (
//     <div className="lg:hidden">
//       <div className="flex justify-between items-center px-4 py-3 bg-[rgb(16,24,40)] text-white">
//         <Icons />
//         <button
//           onClick={() => setIsOpen(!isOpen)}
//           className="p-2 hover:bg-gray-700 rounded-lg transition-colors"
//         >
//           {isOpen ? <X size={24} /> : <Menu size={24} />}
//         </button>
//       </div>

//       <AnimatePresence>
//         {isOpen && (
//           <motion.div
//             initial={{ opacity: 0, y: -20 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -20 }}
//             className="fixed inset-0 z-50 bg-[rgb(16,24,40)] pt-16"
//           >
//             <div className="h-full overflow-y-auto">
//               {!activeSubmenu && (
//                 <div className="px-4 py-2">
//                   {(Object.keys(menuItems) as Array<keyof typeof menuItems>).map((section) => (
//                     <button
//                       key={section}
//                       onClick={() => setActiveSubmenu(section)}
//                       className="w-full flex justify-between items-center p-4 text-white hover:bg-gray-700 rounded-lg mb-2"
//                     >
//                       <span className="text-lg font-medium">{section}</span>
//                       <ChevronRight size={20} />
//                     </button>
//                   ))}
//                   <Link href="/docs">
//                     <div className="p-4 text-white hover:bg-gray-700 rounded-lg mb-2">
//                       <span className="text-lg font-medium">Documentation</span>
//                     </div>
//                   </Link>
//                 </div>
//               )}

//               {activeSubmenu && (
//                 <motion.div
//                   initial={{ x: 300 }}
//                   animate={{ x: 0 }}
//                   exit={{ x: 300 }}
//                   className="px-4 py-2"
//                 >
//                   <button
//                     onClick={() => setActiveSubmenu(null)}
//                     className="flex items-center p-4 text-white hover:bg-gray-700 rounded-lg mb-4"
//                   >
//                     <ChevronRight className="rotate-180 mr-2" size={20} />
//                     <span>Back to Menu</span>
//                   </button>

//                   {menuItems[activeSubmenu].map((item) => (
//                     <Link key={item.title} href={item.href}>
//                       <div className="p-4 text-white hover:bg-gray-700 rounded-lg mb-2">
//                         <div className="flex items-center mb-2">
//                           {item.icon && <item.icon className="mr-2" size={20} />}
//                           <span className="font-medium">{item.title}</span>
//                         </div>
//                         <p className="text-sm text-gray-400">{item.description}</p>
//                       </div>
//                     </Link>
//                   ))}
//                 </motion.div>
//               )}
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// };

// export default MobileNavbar;

"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
  Menu,
  X,
  ChevronRight,
  AlertTriangle,
  Eye,
  Loader,
  Table,
  HelpCircle,
  LucideIcon,
} from "lucide-react";
import Icons from "@/components/Icons";

interface MenuItem {
  title: string;
  href: string;
  description: string;
  icon?: LucideIcon;
}

const MobileNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<
    keyof typeof menuItems | null
  >(null);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  // Close menu handler
  const handleClose = () => {
    setIsOpen(false);
    setActiveSubmenu(null);
  };

  const menuItems = {
    "Getting Started": [
      {
        title: "Introduction",
        href: "/docs",
        description:
          "Re-usable components built using Radix UI and Tailwind CSS.",
      },
      {
        title: "Installation",
        href: "/docs/installation",
        description: "How to install dependencies and structure your app.",
      },
      {
        title: "Typography",
        href: "/docs/primitives/typography",
        description: "Styles for headings, paragraphs, lists, etc.",
      },
    ] as MenuItem[],

    Components: [
      {
        title: "Alert Dialog",
        href: "/docs/primitives/alert-dialog",
        icon: AlertTriangle,
        description: "A modal dialog that interrupts the user.",
      },
      {
        title: "Hover Card",
        href: "/docs/primitives/hover-card",
        icon: Eye,
        description: "For sighted users to preview content.",
      },
      {
        title: "Progress",
        href: "/docs/primitives/progress",
        icon: Loader,
        description: "Displays task completion progress.",
      },
      {
        title: "Tabs",
        href: "/docs/primitives/tabs",
        icon: Table,
        description: "Layered sections of content.",
      },
      {
        title: "Tooltip",
        href: "/docs/primitives/tooltip",
        icon: HelpCircle,
        description: "Displays additional information.",
      },
    ] as MenuItem[],
  };

  return (
    <div className="lg:hidden relative">
      {/* Navbar Header */}
      <div
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300
        ${isOpen ? "bg-transparent" : "bg-[rgb(16,24,40)]"}`}
      >
        <div className="flex justify-between items-center px-4 py-3">
          <Icons />
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 hover:bg-gray-700/50 rounded-lg transition-colors"
          >
            {isOpen ? (
              <X size={24} className="text-white" />
            ) : (
              <Menu size={24} className="text-white" />
            )}
          </button>
        </div>
      </div>

      {/* Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop blur layer */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-[rgb(16,24,40)]/80 backdrop-blur-sm"
              onClick={handleClose}
            />

            {/* Menu Content */}
            <motion.div
              initial={{ opacity: 0, x: -300 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -300 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed inset-y-0 left-0 z-50 w-full md:w-80 bg-[rgb(16,24,40)]/95 backdrop-blur-md shadow-xl"
            >
              {/* Close button */}
              <button
                onClick={handleClose}
                className="absolute top-4 right-4 p-2 text-white hover:bg-white/10 rounded-full transition-colors"
              >
                <X size={24} />
              </button>

              {/* Menu content wrapper */}
              <div className="h-full overflow-y-auto pt-16 pb-6">
                {!activeSubmenu && (
                  <div className="px-4 py-2">
                    {(
                      Object.keys(menuItems) as Array<keyof typeof menuItems>
                    ).map((section) => (
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
                    <Link href="/contact-us">
                      <motion.div
                        className="p-4 text-white hover:bg-white/10 rounded-lg mb-2 transition-colors"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <span className="text-lg font-medium">
                          Get in Touch
                        </span>
                      </motion.div>
                    </Link>
                  </div>
                )}

                {activeSubmenu && (
                  <motion.div
                    initial={{ opacity: 0, x: 300 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 300 }}
                    className="px-4 py-2"
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

                    {menuItems[activeSubmenu].map((item) => (
                      <Link key={item.title} href={item.href}>
                        <motion.div
                          className="p-4 text-white hover:bg-white/10 rounded-lg mb-2 group transition-colors"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
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
                        </motion.div>
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
