import Link from "next/link";
import { ModeToggle } from "@/components/ThemeButton";

const Footer = () => {
  return (
    <footer className="py-8 bg-gray-800 text-white">
      <div className="container mx-auto px-4 text-center">
        <div className="logo-container mb-4 flex justify-center items-center gap-4">
          {/* SVG with controlled size */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 200 200"
            className="w-12 h-12" // Control size with width and height classes
          >
            <defs>
              <linearGradient
                id="gradient1"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
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
          </svg>

          {/* Logo images with controlled size */}
          <div className="brand-name flex flex-col items-start">
            <img
              src="./logo/OctaVertex.svg"
              alt="OctaVertex"
              className="h-6 w-auto" // Control height, maintain aspect ratio
            />
            <img
              src="./logo/Media.svg"
              alt="Media"
              className="h-4 w-auto" // Control height, maintain aspect ratio
            />
          </div>
        </div>

        {/* Navigation Links */}
        <nav className="mb-4">
          <ul className="flex justify-center items-center space-x-8">
            <li>
              <Link href="/" className="hover:text-gray-300 transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link
                href="#services"
                className="hover:text-gray-300 transition-colors"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                href="/portfolio"
                className="hover:text-gray-300 transition-colors"
              >
                Portfolio
              </Link>
            </li>
            <li>
              <Link
                href="#contact"
                className="hover:text-gray-300 transition-colors"
              >
                Contact Us
              </Link>
            </li>
            <li>
              <ModeToggle />
            </li>
          </ul>
        </nav>

        {/* Copyright and Links */}
        <div className="space-y-2 text-sm">
          <p>© 2024 OctaVertex Media. All rights reserved.</p>
          <div className="space-x-2">
            <Link
              href="/privacy-policy"
              className="hover:text-gray-300 transition-colors"
            >
              Privacy Policy
            </Link>
            <span>|</span>
            <Link
              href="/terms-of-service"
              className="hover:text-gray-300 transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
