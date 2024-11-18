// "use client";
// import React, { useState } from "react";
// import {
//   motion,
//   AnimatePresence,
//   useScroll,
//   useMotionValueEvent,
// } from "framer-motion";
// import { cn } from "@/lib/utils";
// import Link from "next/link";

// export const FloatingNav = ({
//   navItems,
//   className,
// }: {
//   navItems: {
//     name: string;
//     link: string;
//     icon?: JSX.Element;
//   }[];
//   className?: string;
// }) => {
//   const { scrollYProgress } = useScroll();

//   const [visible, setVisible] = useState(false);

//   useMotionValueEvent(scrollYProgress, "change", (current) => {
//     // Check if current is not undefined and is a number
//     if (typeof current === "number") {
//       let direction = current! - scrollYProgress.getPrevious()!;

//       if (scrollYProgress.get() < 0.05) {
//         setVisible(false);
//       } else {
//         if (direction < 0) {
//           setVisible(true);
//         } else {
//           setVisible(false);
//         }
//       }
//     }
//   });

//   return (
//     <AnimatePresence mode="wait">
//       <motion.div
//         initial={{
//           opacity: 1,
//           y: -100,
//         }}
//         animate={{
//           y: visible ? 0 : -100,
//           opacity: visible ? 1 : 0,
//         }}
//         transition={{
//           duration: 0.2,
//         }}
//         className={cn(
//           "flex max-w-fit  fixed top-10 inset-x-0 mx-auto border border-transparent dark:border-white/[0.2] rounded-full dark:bg-black bg-white shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] pr-2 pl-8 py-2  items-center justify-center space-x-4",
//           className
//         )}
//       >
//         {navItems.map((navItem: any, idx: number) => (
//           <Link
//             key={`link=${idx}`}
//             href={navItem.link}
//             className={cn(
//               "relative dark:text-neutral-50 items-center flex space-x-1 text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500"
//             )}
//           >
//             <span className="block sm:hidden">{navItem.icon}</span>
//             <span className="hidden sm:block text-sm">{navItem.name}</span>
//           </Link>
//         ))}
      
//       </motion.div>
//     </AnimatePresence>
//   );
// };
import React, { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";
import gsap from "gsap";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
  className?: string;
}) => {
  const [visible, setVisible] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);
  const textRefs = useRef<Array<HTMLSpanElement | null>>([]);
  const lastScrollY = useRef(0);
  const ticking = useRef(false);

  // Update refs array when navItems change
  useEffect(() => {
    textRefs.current = textRefs.current.slice(0, navItems.length);
  }, [navItems.length]);

  // Properly typed ref callback
  const setTextRef = useCallback((el: HTMLSpanElement | null, index: number) => {
    textRefs.current[index] = el;
  }, []);

  // Debounced scroll handler
  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY;

    if (!ticking.current) {
      window.requestAnimationFrame(() => {
        if (currentScrollY < 100) {
          setVisible(false);
        } else if (currentScrollY < lastScrollY.current) {
          setVisible(true);
        } else if (currentScrollY > lastScrollY.current) {
          setVisible(false);
        }
        
        lastScrollY.current = currentScrollY;
        ticking.current = false;
      });

      ticking.current = true;
    }
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  useEffect(() => {
    if (visible && navRef.current) {
      const tl = gsap.timeline();

      tl.fromTo(
        navRef.current,
        {
          opacity: 0,
          y: -20,
          scale: 0.95,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.5,
          ease: "power2.out",
        }
      );

      textRefs.current.forEach((textRef, index) => {
        if (textRef) {
          tl.fromTo(
            textRef,
            {
              opacity: 0,
              y: 20,
            },
            {
              opacity: 1,
              y: 0,
              duration: 0.3,
              ease: "back.out(1.7)",
            },
            "-=0.2"
          );
        }
      });
    }
  }, [visible]);

  return (
    <AnimatePresence mode="wait">
      {visible && (
        <motion.div
          ref={navRef}
          initial={{
            opacity: 0,
            y: -100,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          exit={{
            opacity: 0,
            y: -100,
          }}
          transition={{
            duration: 0.4,
            ease: "anticipate",
          }}
          className={cn(
            "flex max-w-fit fixed top-6 inset-x-0 mx-auto z-[5000]",
            "border-2 border-[rgb(121,205,255)] rounded-full",
            "bg-[rgb(15,24,41)]",
            "shadow-[0_0_20px_rgba(121,205,255,0.15),_inset_0_0_20px_rgba(121,205,255,0.05)]",
            "pr-2 pl-8 py-3",
            className
          )}
        >
          {/* Inner container with gradient overlay */}
          <div className="absolute inset-px rounded-full bg-gradient-to-b from-white/5 to-transparent pointer-events-none" />

          {/* Navigation items container */}
          <div className="flex items-center justify-center space-x-6 relative z-10">
            {navItems.map((navItem, idx) => (
              <Link
                key={`link-${idx}`}
                href={navItem.link}
                className={cn(
                  "relative group",
                  "text-[rgba(199,210,254,0.9)]",
                  "transition-all duration-300"
                )}
              >
                <div className="flex items-center space-x-2">
                  {/* Icon */}
                  <span className="block sm:hidden relative z-10 transition-transform duration-300 group-hover:scale-110">
                    {navItem.icon}
                  </span>
                  
                  {/* Text */}
                  <span 
                    ref={(el) => setTextRef(el, idx)}
                    className="hidden sm:block text-sm font-medium relative z-10"
                  >
                    <span className="relative">
                      {navItem.name}
                      <span className="absolute left-0 right-0 bottom-0 h-px bg-[rgb(121,205,255)] transform origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
                    </span>
                  </span>
                </div>

                {/* Hover background */}
                <div className="absolute -inset-3 rounded-lg opacity-0 group-hover:opacity-100 bg-[rgba(121,205,255,0.1)] transition-all duration-300" />
              </Link>
            ))}
          </div>

          {/* Decorative elements */}
          <div className="absolute top-1/2 -translate-y-1/2 -left-1 w-2 h-2 bg-[rgb(121,205,255)] rounded-full" />
          <div className="absolute top-1/2 -translate-y-1/2 -right-1 w-2 h-2 bg-[rgb(121,205,255)] rounded-full" />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FloatingNav;