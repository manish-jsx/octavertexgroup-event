"use client"; // Ensures this component runs on the client side

import Image from "next/image";
import { motion } from "framer-motion";
import React from "react";
import logo from "../public/logo/logo.png";

const Icons: React.FC = () => {
  return (
    <motion.div
      className="logo-container"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="logo-container flex justify-center items-center gap-4 w-64 h-14">
        {/* <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 200 200"
          className="w-12 h-12"
        >
          <defs>
            <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop
                offset="0%"
                style={{ stopColor: "#FF5733", stopOpacity: 1 }}
              />
              <stop
                offset="100%"
                style={{ stopColor: "#C70039", stopOpacity: 1 }}
              />
            </linearGradient>
            <filter id="f1">
              <feOffset result="offOut" in="SourceAlpha" dx="2" dy="2" />
              <feGaussianBlur in="offOut" result="blurOut" stdDeviation="1" />
              <feBlend in="SourceGraphic" in2="blurOut" mode="normal" />
            </filter>
          </defs>

          <g filter="url(#f1)">
            <polygon points="0,0 100,0 50,100" fill="url(#gradient1)" />
            <polygon points="100,0 200,0 150,100" fill="url(#gradient1)" />
            <polygon points="50,100 150,100 100,200" fill="url(#gradient1)" />
          </g>

        </svg> */}
        <Image src={logo} alt="logo" className="w-12 h-12 items-center" />

        {/* Logo images */}
        <div className="brand-name flex flex-col items-start">
          <img
            src="/logo/OctaVertex.svg"
            alt="OctaVertex"
            className="h-6 w-auto"
          />
          <img src="/logo/Media.svg" alt="Media" className="h-4 w-auto" />
        </div>
      </div>
    </motion.div>
  );
};

export default Icons;
