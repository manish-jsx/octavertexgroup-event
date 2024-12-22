"use client";
import  React,{ useState, useEffect } from 'react';
import { Sparkles, Rocket, ArrowRight } from 'lucide-react';
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  MotionValue,
} from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export const HeroParallax = ({
  products,
}: {
  products: {
    title: string;
    link: string;
    thumbnail: string;
  }[];
}) => {
  const firstRow = products.slice(0, 5);
  const secondRow = products.slice(5, 10);
  const thirdRow = products.slice(10, 15);
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 1000]),
    springConfig
  );
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -1000]),
    springConfig
  );
  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [15, 0]),
    springConfig
  );
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
    springConfig
  );
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [20, 0]),
    springConfig
  );
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [-700, 500]),
    springConfig
  );
  return (
    <div
      ref={ref}
      className="h-[300vh] py-0 overflow-hidden  antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d] bg-[rgb(15,24,41)]"
    >
      <Header />
      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
       
      >
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-5 mb-10">
          {firstRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.title}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row  mb-20 space-x-20 ">
          {secondRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateXReverse}
              key={product.title}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20">
          {thirdRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.title}
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};






// const Header = () => {
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     setIsVisible(true);
//   }, []);

//   return (
//     <div className="relative w-full overflow-hidden bg-gradient-to-br from-black via-gray-900 to-blue-900">
//       <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:60px_60px]" />
      
//       <div className="relative max-w-7xl mx-auto pt-16 md:pt-24 pb-20 md:pb-32 px-4">
//         {/* Animated gradient orb */}
//         <div className="absolute -top-20 -left-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob" />
//         <div className="absolute -top-20 -right-4 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000" />
        
//         {/* Main content with fade-in animation */}
//         <div className={`transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
//           <div className="flex items-center gap-2 mb-6">
//             <Sparkles className="w-6 h-6 text-blue-400" />
//             <span className="text-blue-400 font-semibold">Next-Gen Development Studio</span>
//           </div>
          
//           <h1 className="text-4xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 pb-4">
//             The Future of
//             <br />
//             Digital Innovation
//           </h1>

//           <p className="max-w-2xl text-base md:text-xl mt-8 text-gray-300 leading-relaxed">
//             We craft extraordinary digital experiences using cutting-edge technologies
//             and frameworks. Our elite team of developers and designers transform
//             visionary ideas into revolutionary products.
//           </p>

//           <div className="h-px w-full max-w-2xl bg-gradient-to-r from-transparent via-gray-500 to-transparent my-8" />

//           <p className="max-w-2xl text-base md:text-xl mb-12 text-gray-300">
//             Ready to revolutionize your business with AI-powered solutions and
//             immersive experiences? Let's embark on a journey to the future of technology.
//           </p>

//           <div className="flex flex-wrap gap-4">
//             <a href="https://cal.com/octavertexmedia/" className="group relative inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25">
//               <Rocket className="w-5 h-5" />
//               Schedule a Meeting
//               <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
//             </a>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Header;


const Header = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="relative w-full overflow-hidden bg-[rgb(15,24,41)]/30 relative z-[10000]">
      {/* Rich gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[rgb(15,24,41)]/50 via-[#0A1021] to-[rgb(15,24,41)]/20" />
      
      {/* Ambient gradient orbs */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-gradient-to-r from-[#18CCFC]/20 to-[#6344F5]/20 blur-3xl opacity-30 rounded-full" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-gradient-to-l from-[#AE48FF]/20 to-[#6344F5]/20 blur-3xl opacity-30 rounded-full" />
      
      {/* Gradient overlay for better text contrast */}
      <div className="absolute inset-0 bg-[rgb(15,24,41)]/50" />

      {/* Grid pattern */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
      
      <div className="relative max-w-7xl mx-auto pt-16 md:pt-24 pb-20 md:pb-32 px-4">
        {/* Animated gradient orbs */}
        <div className="absolute -top-20 -left-4 w-72 h-72 bg-[#6344F5] rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob" />
        <div className="absolute top-40 left-20 w-72 h-72 bg-[#18CCFC] rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000" />
        <div className="absolute -top-20 -right-4 w-72 h-72 bg-[#AE48FF] rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000" />
        
        {/* Main content with fade-in animation */}
        <div className={`transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <div className="flex items-center gap-2 mb-6">
            <Sparkles className="w-6 h-6 text-[#18CCFC]" />
            <span className="text-[#18CCFC] font-semibold">Next-Gen Development Studio</span>
          </div>
          
          <h1 className="text-4xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#18CCFC] via-[#6344F5] to-[#AE48FF] pb-4">
            The Future of
            <br />
            Digital Innovation
          </h1>

          <p className="max-w-2xl text-base md:text-xl mt-8 text-[rgb(199,210,254)]/90 leading-relaxed">
            We craft extraordinary digital experiences using cutting-edge technologies
            and frameworks. Our elite team of developers and designers transform
            visionary ideas into revolutionary products.
          </p>

          <div className="h-px w-full max-w-2xl bg-gradient-to-r from-transparent via-[#6344F5]/20 to-transparent my-8" />

          {/* <p className="max-w-2xl text-base md:text-xl mb-12 text-[rgb(199,210,254)]/80">
            Ready to revolutionize your business with AI-powered solutions and
            immersive experiences? Let's embark on a journey to the future of technology.
          </p> */}

          <div className="flex flex-wrap gap-4">
  <Link
    href="https://cal.com/octavertexmedia/"
    target="_blank"
    rel="noopener noreferrer"
    className="group relative isolate inline-flex items-center gap-2 px-6 py-3 rounded-lg 
      text-white font-semibold overflow-hidden
      bg-gradient-to-r from-[#18CCFC] to-[#6344F5] 
      hover:from-[#18CCFC]/90 hover:to-[#6344F5]/90 
      transition-all duration-300 hover:scale-105 
      hover:shadow-lg hover:shadow-[#6344F5]/25
      active:scale-[0.98]
      cursor-pointer
      relative z-[10000]"
  >
    {/* Gradient background with hover effect */}
    <div className="absolute inset-0 bg-gradient-to-r from-[#18CCFC] to-[#6344F5] opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
    
    {/* Button content */}
    <div className="flex items-center gap-2 relative z-[10000]">
      <Rocket className="w-5 h-5" />
      <span>Schedule a Meeting</span>
      <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
    </div>
    
    {/* Optional shine effect */}
    <div className="absolute inset-0 -z-20 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
  </Link>
</div>


          {/* Decorative element */}
          <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#6344F5]/20 to-transparent" />
        </div>
      </div>
    </div>
  );
};

export const ProductCard = ({
  product,
  translate,
}: {
  product: {
    title: string;
    link: string;
    thumbnail: string;
  };
  translate: MotionValue<number>;
}) => {
  return (
    <motion.div
      style={{
        x: translate,
      }}
      whileHover={{
        y: -20,
      }}
      key={product.title}
      className="group/product h-96 w-[30rem] relative flex-shrink-0"
    >
      <Link
        href={product.link}
        className="block group-hover/product:shadow-2xl "
      >
        <Image
          src={product.thumbnail}
          height="600"
          width="600"
          className="object-cover object-left-top absolute h-full w-full inset-0"
          alt={product.title}
        />
      </Link>
      <div className="absolute inset-0 h-full w-full opacity-0 group-hover/product:opacity-80 bg-black pointer-events-none"></div>
      <h2 className="absolute bottom-4 left-4 opacity-0 group-hover/product:opacity-100 text-white">
        {product.title}
      </h2>
    </motion.div>
  );
};
