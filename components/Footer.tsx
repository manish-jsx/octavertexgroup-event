
'use client';
import Link from "next/link";
import { 
  Linkedin,
  Github,
  Instagram,
  Twitter,
  Facebook,
  Mail,
  Phone,
  MapPin,
  Code2,
  Cloud,
  Smartphone,
  Database,
  Globe2, // Changed from Globe to Globe2
  Cpu,
  Shield,
  LineChart,
  Briefcase,
  GraduationCap,
  Award,
  Building2,
  Factory,
  Hospital,
  ShoppingBag,
  Plane,
  Building, // Changed from Bank to Building
  Server,
  BookOpen, // For resources
  Timer, // For support
  Settings, // For tools
  Target, // For business solutions
  FileCode, // For developer resources
  Users, // For community
  Headphones, // For support
  BarChart2, // For analytics
  Bot, // For AI solutions
  Lock // For security
} from 'lucide-react';
import Image from 'next/image';


const Footer = () => {
  const industriesServed = [
    { name: "Healthcare", icon: <Hospital className="w-4 h-4" /> },
    { name: "E-commerce", icon: <ShoppingBag className="w-4 h-4" /> },
    { name: "Manufacturing", icon: <Factory className="w-4 h-4" /> },
    { name: "Aviation", icon: <Plane className="w-4 h-4" /> },
    { name: "Banking", icon: <Building className="w-4 h-4" /> }, // Changed from Bank
    { name: "Real Estate", icon: <Building2 className="w-4 h-4" /> }
  ];

  const currentOpenings = [
    "Senior Full Stack Developer",
    "DevOps Engineer",
    "UI/UX Designer",
    "Project Manager",
    "Digital Marketing Specialist"
  ];

  const resources = [
    { icon: <BookOpen size={16} />, text: "Documentation", link: "/docs" },
    { icon: <FileCode size={16} />, text: "API Reference", link: "/api" },
    { icon: <Users size={16} />, text: "Community Forum", link: "/community" },
    { icon: <Timer size={16} />, text: "Status Page", link: "/status" },
    { icon: <Settings size={16} />, text: "Developer Tools", link: "/tools" }
  ];

  const support = [
    { icon: <Headphones size={16} />, text: "24/7 Support", link: "/support" },
    { icon: <BookOpen size={16} />, text: "Knowledge Base", link: "/kb" },
    { icon: <Timer size={16} />, text: "System Status", link: "/status" },
    { icon: <Users size={16} />, text: "Community Support", link: "/community-support" }
  ];

  const additionalSolutions = [
    { icon: <BarChart2 size={16} />, text: "Business Analytics" },
    { icon: <Bot size={16} />, text: "AI Solutions" },
    { icon: <Lock size={16} />, text: "Security Services" },
    { icon: <Target size={16} />, text: "Digital Strategy" }
  ];

  return (

    <footer className="min-h-screen bg-[rgb(15,24,41)] text-white py-16">
      <div className="container mx-auto px-4">
        {/* Logo Section */}
        <div className="flex justify-center items-center gap-4 mb-16">

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

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {/* Software Solutions */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[rgb(121,205,255)] to-[rgb(199,210,254)]">
              Technology Solutions
            </h3>
            <div className="grid grid-cols-1 gap-3">
              {[
                { icon: <Code2 size={16} />, text: "Custom Software Development" },
                { icon: <Cloud size={16} />, text: "Cloud Solutions & DevOps" },
                { icon: <Smartphone size={16} />, text: "Mobile App Development" },
                { icon: <Database size={16} />, text: "Database Management" },
                { icon: <Globe2 size={16} />, text: "Web Applications" }, // Changed from Globe to Globe2
                { icon: <Cpu size={16} />, text: "AI & Machine Learning" },
                { icon: <Shield size={16} />, text: "Cybersecurity Services" },
                { icon: <Server size={16} />, text: "Infrastructure Solutions" }
              ].map((item, index) => (
                <Link 
                  key={index} 
                  href={`/services/${item.text.toLowerCase().replace(/\s+/g, '-')}`}
                  className="flex items-center gap-2 text-[rgb(199,210,254)]/70 hover:text-[rgb(121,205,255)] transition-colors group"
                >
                  <span className="text-[rgb(121,205,255)] group-hover:scale-110 transition-transform">
                    {item.icon}
                  </span>
                  {item.text}
                </Link>
              ))}
            </div>
          </div>

          {/* Industries & Expertise */}
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[rgb(121,205,255)] to-[rgb(199,210,254)] mb-4">
                Industries Served
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {industriesServed.map((industry, index) => (
                  <div 
                    key={index}
                    className="flex items-center gap-2 text-[rgb(199,210,254)]/70 hover:text-[rgb(121,205,255)] transition-colors"
                  >
                    <span className="text-[rgb(121,205,255)]">{industry.icon}</span>
                    {industry.name}
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div>
              <h4 className="font-semibold text-[rgb(199,210,254)] mb-2">Certifications</h4>
              <div className="flex gap-4">
                <Award className="w-8 h-8 text-[rgb(121,205,255)]" />
                <Award className="w-8 h-8 text-[rgb(121,205,255)]" />
                <Award className="w-8 h-8 text-[rgb(121,205,255)]" />
              </div>
            </div>
          </div>

          {/* Career Opportunities */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[rgb(121,205,255)] to-[rgb(199,210,254)]">
              Career Opportunities
            </h3>
            <div className="space-y-3">
              {currentOpenings.map((position, index) => (
                <Link
                  key={index}
                  href={`/careers/${position.toLowerCase().replace(/\s+/g, '-')}`}
                  className="flex items-center gap-2 text-[rgb(199,210,254)]/70 hover:text-[rgb(121,205,255)] group transition-colors"
                >
                  <Briefcase className="w-4 h-4 group-hover:scale-110 transition-transform" />
                  {position}
                </Link>
              ))}
              <Link 
                href="/careers"
                className="inline-flex items-center gap-2 text-[rgb(121,205,255)] hover:text-[rgb(121,205,255)]/80 mt-4"
              >
                <GraduationCap className="w-5 h-5" />
                View All Positions
              </Link>
            </div>
          </div>

          {/* Newsletter & Contact */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[rgb(121,205,255)] to-[rgb(199,210,254)]">
              Get in Touch
            </h3>
            <div className="space-y-4 text-[rgb(199,210,254)]/70">
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-[rgb(121,205,255)]" />
                <p>Saket, New Delhi, India</p>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-5 h-5 text-[rgb(121,205,255)]" />
                <a href="mailto:contact@octavertexmedia.com">contact@octavertexmedia.com</a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-[rgb(121,205,255)]" />
                <p>+91 7004456733</p>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="flex gap-4">
              {[
                { icon: <Linkedin className="w-5 h-5" />, link: "https://linkedin.com/company/octavertex" },
                { icon: <Github className="w-5 h-5" />, link: "https://github.com/octavertex" },
                { icon: <Instagram className="w-5 h-5" />, link: "https://instagram.com/octavertex" },
                { icon: <Twitter className="w-5 h-5" />, link: "https://twitter.com/octavertex" },
                { icon: <Facebook className="w-5 h-5" />, link: "https://facebook.com/octavertex" }
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-[rgb(121,205,255)]/10 hover:bg-[rgb(121,205,255)]/20 transition-colors text-[rgb(121,205,255)]"
                >
                  {social.icon}
                </a>
              ))}
            </div>

            {/* Newsletter Subscription */}
            <div className="space-y-4">
              <h4 className="font-semibold text-[rgb(199,210,254)]">Stay Updated</h4>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 rounded-lg bg-[rgb(15,24,41)]/50 border border-[rgb(121,205,255)]/20 text-white placeholder:text-[rgb(199,210,254)]/50 focus:outline-none focus:border-[rgb(121,205,255)]/50"
                />
                <button className="px-4 py-2 bg-[rgb(121,205,255)] text-white rounded-lg hover:bg-[rgb(121,205,255)]/90 transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          {/* Add new Resources column */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[rgb(121,205,255)] to-[rgb(199,210,254)]">
              Resources & Tools
            </h3>
            <div className="grid grid-cols-1 gap-3">
              {resources.map((item, index) => (
                <Link 
                  key={index}
                  href={item.link}
                  className="flex items-center gap-2 text-[rgb(199,210,254)]/70 hover:text-[rgb(121,205,255)] group transition-colors"
                >
                  <span className="text-[rgb(121,205,255)] group-hover:scale-110 transition-transform">
                    {item.icon}
                  </span>
                  {item.text}
                </Link>
              ))}
            </div>
          </div>

          {/* Add new Support column */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[rgb(121,205,255)] to-[rgb(199,210,254)]">
              Support & Help
            </h3>
            <div className="grid grid-cols-1 gap-3">
              {support.map((item, index) => (
                <Link 
                  key={index}
                  href={item.link}
                  className="flex items-center gap-2 text-[rgb(199,210,254)]/70 hover:text-[rgb(121,205,255)] group transition-colors"
                >
                  <span className="text-[rgb(121,205,255)] group-hover:scale-110 transition-transform">
                    {item.icon}
                  </span>
                  {item.text}
                </Link>
              ))}
            </div>
          </div>
        </div>

        

        {/* Bottom Section */}
        <div className="border-t border-[rgb(121,205,255)]/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-[rgb(199,210,254)]/70">
              © 2024 OctaVertex Media. All rights reserved.
            </p>
            <div className="flex gap-8 text-[rgb(199,210,254)]/70">
              <Link href="/privacy-policy" className="hover:text-[rgb(121,205,255)] transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms-of-service" className="hover:text-[rgb(121,205,255)] transition-colors">
                Terms of Service
              </Link>
              <Link href="/cookie-policy" className="hover:text-[rgb(121,205,255)] transition-colors">
                Cookie Policy
              </Link>
            </div>

          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
