

"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import Link from "next/link" // Import Link from next

const Logo = () => {
  return (
    <Link href="/" passHref> {/* Wrap your component with a link */}
      <motion.div
        className="w-64 h-14 relative"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Image 
          src="/logo/og-image-light.png" 
          alt="OctaVertex Media Logo" 
          fill 
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-contain" 
          priority
        />
      </motion.div>
    </Link>
  )
}

export default Logo