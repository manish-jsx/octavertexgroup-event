'use client' 
import React from 'react';
import { motion } from 'framer-motion';
import '../styles/navbar.css'; // Adjust path as necessary

const Navbar: React.FC = () => {
  return (
    <nav className='navbar'>
      {/* Container for the logo */}
      <motion.div
        className='logo-container'
        initial={{ opacity: 0, y: -20 }} // Initial animation state
        animate={{ opacity: 1, y: 0 }} // Final animation state
        transition={{ duration: 0.5 }} // Animation duration
      > 
    

    
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" className='logo'>
          <defs>
            <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: '#FF5733', stopOpacity: 1 }} />
              <stop offset="100%" style={{ stopColor: '#C70039', stopOpacity: 1 }} />
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
        <div className='brandname'>
          <div className='octavertex'>OctaVertex</div>
          <div className='media'>Media</div>
        </div>
      </motion.div>
      <motion.ul
        className='nav-links'
        initial={{ opacity: 0, y: 20 }} // Initial animation state
        animate={{ opacity: 1, y: 0 }} // Final animation state
        transition={{ duration: 0.5, delay: 0.2 }} // Animation duration and delay
      >
        <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
          <a href="/">Home</a>
        </motion.li>
       
        <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
          <a href="/portfolio">Portfolio</a>
        </motion.li>
        <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
          <a href="#services">Services</a>
        </motion.li>
        <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
          <a href="/about">About</a>
        </motion.li>
        <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
          <a href="#contact">Contact</a>
        </motion.li>
      </motion.ul>
    </nav>
  );
};

export default Navbar;
