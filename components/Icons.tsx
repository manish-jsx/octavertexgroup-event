import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";

// Logo SVG component
export const Logo: React.FC = () => {
  return (
    <Link href="/" passHref>
      <div className="logo-container">
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
  );
};

// Brand name component
export const BrandName: React.FC = () => {
  return (
    <Link href="/" passHref>
      <div className="brand-name">
        <img src="/logo/OctaVertex.svg" alt="OctaVertex" className="octavertex" />
        <img src="/logo/Media.svg" alt="Media" className="media" />
      </div>
    </Link>
  );
};

// Icons wrapper with animation
const Icons: React.FC = () => {
  return (
    <motion.div
      className="logo-container"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Logo />
      <BrandName />
    </motion.div>
  );
};

export default Icons;