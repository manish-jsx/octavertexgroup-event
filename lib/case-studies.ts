// lib/case-studies.ts
import { StaticImageData } from 'next/image';

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
  image: string;
}

export interface ProcessStep {
  title: string;
  description: string;
  image: string;
  tools?: string[];
}

export interface Challenge {
  title: string;
  description: string;
  impact?: string;
}

export interface Solution {
  title: string;
  description: string;
  features: string[];
  techStack?: string[];
}

export interface Metric {
  label: string;
  value: string;
  description: string;
  trend?: 'up' | 'down';
  percentage?: number;
}

export interface CaseStudy {
  slug: string;
  title: string;
  client: string;
  industry: string;
  duration: string;
  teamSize: number;
  description: string;
  bgColor: {
    primary: string;    // Main gradient for cards
    hover: string;      // Hover state gradient
    card: string;       // Background for nested cards
    accent: string;     // Primary color for highlights
  };

  headerImage: string;
  logoImage: string;
  overview: string;
  challenges: Challenge[];
  solution: Solution;
  process: ProcessStep[];
  outcomes: {
    summary: string;
    metrics: Metric[];
  };
  testimonial: Testimonial;
  technologies: string[];
  nextProject?: {
    title: string;
    slug: string;
    image: string;
  };
}
interface CaseStudyCardProps {
  study: CaseStudy;
}
export const caseStudies: CaseStudy[] = [
  {
    slug: 'tech-corp',
    title: "AI-Powered Analytics Platform",
    client: "TechCorp Solutions",
    industry: "Enterprise Software",
    duration: "8 months",
    teamSize: 12,
    description: "Transforming data analytics with AI-driven insights for enterprise decision-making.",
    headerImage: "/case-studies/tech-corp/header.jpg",
    logoImage: "/case-studies/tech-corp/logo.svg",
    bgColor: {
      primary: 'from-blue-600/20 via-indigo-600/20 to-violet-600/20',
      hover: 'from-blue-500/30 via-indigo-500/30 to-violet-500/30',
      card: 'from-blue-900/50 to-indigo-900/50',
      accent: 'blue'
    },
    overview: "TechCorp needed a sophisticated analytics platform to process vast amounts of data and provide actionable insights to their enterprise clients. We developed a scalable, AI-powered solution that revolutionized their data processing capabilities.",
    challenges: [
      {
        title: "Data Processing at Scale",
        description: "Processing petabytes of data in real-time while maintaining system performance.",
        impact: "Previous systems took hours to process what now takes minutes."
      },
      {
        title: "Complex Integration Requirements",
        description: "Integrating with 15+ different data sources and legacy systems.",
        impact: "Reduced integration time from weeks to days."
      },
      {
        title: "User Experience",
        description: "Making complex data analysis accessible to non-technical users.",
        impact: "Achieved 98% user satisfaction rate."
      }
    ],
    solution: {
      title: "Intelligent Analytics Engine",
      description: "We developed a cutting-edge analytics platform that combines real-time processing with AI-driven insights.",
      features: [
        "Real-time data processing pipeline",
        "AI-powered anomaly detection",
        "Customizable dashboards",
        "Natural language query interface",
        "Automated report generation",
        "Predictive analytics module"
      ],
      techStack: [
        "React", "Python", "TensorFlow", "Apache Kafka", "PostgreSQL", "Docker"
      ]
    },
    process: [
      {
        title: "Discovery & Planning",
        description: "Conducted extensive stakeholder interviews and technical assessment.",
        image: "/case-studies/tech-corp/process-1.jpg",
        tools: ["Miro", "Jira"]
      },
      {
        title: "Architecture Design",
        description: "Designed scalable microservices architecture with focus on performance.",
        image: "/case-studies/tech-corp/process-2.jpg",
        tools: ["AWS", "Kubernetes"]
      },
      {
        title: "Development & AI Integration",
        description: "Implemented core features and integrated machine learning models.",
        image: "/case-studies/tech-corp/process-3.jpg",
        tools: ["Python", "TensorFlow"]
      },
      {
        title: "Testing & Optimization",
        description: "Conducted comprehensive testing and performance optimization.",
        image: "/case-studies/tech-corp/process-4.jpg",
        tools: ["JMeter", "Jest"]
      }
    ],
    outcomes: {
      summary: "The platform has transformed TechCorp's data analytics capabilities, leading to significant improvements in efficiency and decision-making.",
      metrics: [
        {
          label: "Processing Speed",
          value: "200x",
          description: "Faster data processing",
          trend: "up",
          percentage: 20000
        },
        {
          label: "User Adoption",
          value: "50K+",
          description: "Active users",
          trend: "up",
          percentage: 312
        },
        {
          label: "Cost Reduction",
          value: "65%",
          description: "In operational costs",
          trend: "down",
          percentage: 65
        },
        {
          label: "Time Saved",
          value: "120hr/mo",
          description: "Per team",
          trend: "up",
          percentage: 80
        }
      ]
    },
    testimonial: {
      quote: "The platform has completely transformed how we process and analyze data. What used to take hours now happens in minutes, and the insights we're getting are driving real business value.",
      author: "Sarah Chen",
      role: "CTO",
      company: "TechCorp Solutions",
      image: "/case-studies/tech-corp/testimonial.jpg"
    },
    technologies: [
      "React",
      "Python",
      "TensorFlow",
      "Apache Kafka",
      "PostgreSQL",
      "Docker",
      "Kubernetes",
      "AWS",
      "Redis",
      "GraphQL"
    ],
    nextProject: {
      title: "E-commerce Platform Redesign",
      slug: "fashion-forward",
      image: "/case-studies/fashion-forward/preview.jpg"
    }
  },

  // Continuing from the existing case studies array...

  {
    slug: 'fashion-forward',
    title: "E-commerce Platform Redesign",
    client: "Fashion Forward",
    industry: "E-commerce / Fashion Retail",
    duration: "6 months",
    teamSize: 8,
    description: "Complete redesign and optimization of a fashion e-commerce platform focusing on user experience and conversion optimization.",
    headerImage: "/case-studies/fashion-forward/header.jpg",
    logoImage: "/case-studies/fashion-forward/logo.svg",
    bgColor: {
      primary: 'from-pink-600/20 via-rose-600/20 to-orange-600/20',
      hover: 'from-pink-500/30 via-rose-500/30 to-orange-500/30',
      card: 'from-pink-900/50 to-rose-900/50',
      accent: 'pink'
    },
    overview: "Fashion Forward needed a complete overhaul of their digital presence to compete in the modern e-commerce landscape. We reimagined their platform with a focus on mobile-first design, personalization, and seamless checkout experience.",
    challenges: [
      {
        title: "Mobile Conversion Rate",
        description: "Poor mobile shopping experience leading to low conversion rates on mobile devices.",
        impact: "Increased mobile conversion rate by 85%."
      },
      {
        title: "Page Load Speed",
        description: "Slow loading times affecting user engagement and SEO rankings.",
        impact: "Reduced load time from 6.5s to 1.8s."
      },
      {
        title: "Cart Abandonment",
        description: "High cart abandonment rate due to complex checkout process.",
        impact: "Reduced cart abandonment by 45%."
      }
    ],
    solution: {
      title: "Modern E-commerce Experience",
      description: "Developed a cutting-edge e-commerce platform with focus on speed, usability, and conversion optimization.",
      features: [
        "Progressive Web App (PWA) implementation",
        "AI-powered product recommendations",
        "One-click checkout process",
        "Real-time inventory management",
        "Advanced search with visual recognition",
        "Personalized user dashboard"
      ],
      techStack: [
        "Next.js", "Node.js", "Shopify", "Algolia", "Redis", "AWS"
      ]
    },
    process: [
      {
        title: "UX Research & Analysis",
        description: "Conducted extensive user research and competitor analysis.",
        image: "/case-studies/fashion-forward/process-1.jpg",
        tools: ["Figma", "Hotjar", "Google Analytics"]
      },
      {
        title: "UI/UX Design",
        description: "Created responsive designs with focus on mobile-first approach.",
        image: "/case-studies/fashion-forward/process-2.jpg",
        tools: ["Figma", "Principle", "Framer"]
      },
      {
        title: "Development",
        description: "Implemented frontend and backend systems with focus on performance.",
        image: "/case-studies/fashion-forward/process-3.jpg",
        tools: ["Next.js", "Node.js", "Shopify API"]
      },
      {
        title: "Optimization & Launch",
        description: "Performed optimization and staged rollout to ensure smooth transition.",
        image: "/case-studies/fashion-forward/process-4.jpg",
        tools: ["Lighthouse", "GTmetrix", "WebPageTest"]
      }
    ],
    outcomes: {
      summary: "The redesigned platform has significantly improved user engagement, conversion rates, and overall business performance.",
      metrics: [
        {
          label: "Conversion Rate",
          value: "+65%",
          description: "Increase in sales conversion",
          trend: "up",
          percentage: 65
        },
        {
          label: "Mobile Revenue",
          value: "+85%",
          description: "Increase in mobile sales",
          trend: "up",
          percentage: 85
        },
        {
          label: "Page Speed",
          value: "1.8s",
          description: "Average load time",
          trend: "down",
          percentage: 72
        },
        {
          label: "User Retention",
          value: "+45%",
          description: "Increase in return users",
          trend: "up",
          percentage: 45
        }
      ]
    },
    testimonial: {
      quote: "The new platform has exceeded our expectations. Our mobile sales have skyrocketed, and customers love the new shopping experience.",
      author: "Emma Thompson",
      role: "Digital Director",
      company: "Fashion Forward",
      image: "/case-studies/fashion-forward/testimonial.jpg"
    },
    technologies: [
      "Next.js",
      "Node.js",
      "Shopify",
      "Algolia",
      "Redis",
      "AWS",
      "GraphQL",
      "Tailwind CSS",
      "Stripe",
      "PWA"
    ],
    nextProject: {
      title: "Blockchain Supply Chain",
      slug: "global-logistics",
      image: "/case-studies/global-logistics/preview.jpg"
    }
  },
  {
    slug: 'global-logistics',
    title: "Blockchain Supply Chain",
    client: "Global Logistics Inc",
    industry: "Logistics & Supply Chain",
    duration: "12 months",
    teamSize: 15,
    description: "Revolutionizing supply chain transparency and efficiency with blockchain technology.",
    headerImage: "/case-studies/global-logistics/header.jpg",
    logoImage: "/case-studies/global-logistics/logo.svg",
    bgColor: {
      primary: 'from-emerald-600/20 via-teal-600/20 to-cyan-600/20',
      hover: 'from-emerald-500/30 via-teal-500/30 to-cyan-500/30',
      card: 'from-emerald-900/50 to-teal-900/50',
      accent: 'emerald'
    },
    overview: "Global Logistics Inc needed to modernize their supply chain tracking and enhance transparency across their global network. We implemented a blockchain-based solution that revolutionized their operations.",
    challenges: [
      {
        title: "Supply Chain Visibility",
        description: "Lack of real-time visibility across complex international supply chains.",
        impact: "Achieved end-to-end transparency with real-time tracking."
      },
      {
        title: "Data Authenticity",
        description: "Ensuring data authenticity across multiple parties and jurisdictions.",
        impact: "Implemented immutable record-keeping with smart contracts."
      },
      {
        title: "System Integration",
        description: "Integrating with legacy systems across different stakeholders.",
        impact: "Successfully integrated with 20+ external systems."
      }
    ],
    solution: {
      title: "Blockchain Supply Chain Platform",
      description: "Developed a comprehensive blockchain-based platform for end-to-end supply chain management and tracking.",
      features: [
        "Real-time shipment tracking",
        "Smart contract automation",
        "IoT sensor integration",
        "Digital documentation",
        "Automated compliance checks",
        "Stakeholder portal"
      ],
      techStack: [
        "Hyperledger Fabric", "Node.js", "React", "MongoDB", "IoT Sensors", "AWS"
      ]
    },
    process: [
      {
        title: "Requirements & Architecture",
        description: "Detailed analysis of business requirements and blockchain architecture design.",
        image: "/case-studies/global-logistics/process-1.jpg",
        tools: ["Enterprise Architect", "Miro"]
      },
      {
        title: "Blockchain Implementation",
        description: "Development of smart contracts and blockchain network.",
        image: "/case-studies/global-logistics/process-2.jpg",
        tools: ["Hyperledger Fabric", "Solidity"]
      },
      {
        title: "System Integration",
        description: "Integration with existing systems and IoT devices.",
        image: "/case-studies/global-logistics/process-3.jpg",
        tools: ["Node.js", "Docker", "Kubernetes"]
      },
      {
        title: "Deployment & Training",
        description: "Staged deployment and comprehensive stakeholder training.",
        image: "/case-studies/global-logistics/process-4.jpg",
        tools: ["AWS", "Docker", "Terraform"]
      }
    ],
    outcomes: {
      summary: "The blockchain solution has transformed supply chain operations, providing unprecedented transparency and efficiency gains.",
      metrics: [
        {
          label: "Processing Time",
          value: "-70%",
          description: "Reduction in processing time",
          trend: "down",
          percentage: 70
        },
        {
          label: "Transparency",
          value: "100%",
          description: "End-to-end visibility",
          trend: "up",
          percentage: 100
        },
        {
          label: "Cost Savings",
          value: "$2.5M",
          description: "Annual cost reduction",
          trend: "down",
          percentage: 55
        },
        {
          label: "Network Growth",
          value: "25",
          description: "Countries covered",
          trend: "up",
          percentage: 83
        }
      ]
    },
    testimonial: {
      quote: "This blockchain solution has given us unprecedented visibility into our supply chain. We've reduced processing times dramatically and gained the trust of our stakeholders.",
      author: "Michael Rodriguez",
      role: "VP of Operations",
      company: "Global Logistics Inc",
      image: "/case-studies/global-logistics/testimonial.jpg"
    },
    technologies: [
      "Hyperledger Fabric",
      "Node.js",
      "React",
      "MongoDB",
      "AWS",
      "Docker",
      "Kubernetes",
      "IoT",
      "Terraform",
      "GraphQL"
    ],
    nextProject: {
      title: "AI-Powered Analytics Platform",
      slug: "tech-corp",
      image: "/case-studies/tech-corp/preview.jpg"
    }
  },
  // Continue with remaining case studies...
  {
    slug: 'nextgen-bank',
    title: "Mobile Banking App",
    client: "NextGen Bank",
    industry: "FinTech / Banking",
    duration: "10 months",
    teamSize: 14,
    description: "Creating a secure, intuitive mobile banking experience with advanced features and biometric authentication.",
    headerImage: "/case-studies/nextgen-bank/header.jpg",
    logoImage: "/case-studies/nextgen-bank/logo.svg",
    bgColor: {
      primary: 'from-cyan-600/20 via-sky-600/20 to-blue-600/20',
      hover: 'from-cyan-500/30 via-sky-500/30 to-blue-500/30',
      card: 'from-cyan-900/50 to-sky-900/50',
      accent: 'cyan'
    },
    overview: "NextGen Bank needed a modern mobile banking solution to serve their growing millennial customer base. We developed a feature-rich mobile app with emphasis on security, user experience, and innovative banking features.",
    challenges: [
      {
        title: "Security Compliance",
        description: "Meeting strict banking security regulations while maintaining user convenience.",
        impact: "Achieved full compliance with zero security incidents."
      },
      {
        title: "Legacy System Integration",
        description: "Integrating with core banking systems while maintaining real-time operations.",
        impact: "Seamless integration with 99.9% uptime."
      },
      {
        title: "User Adoption",
        description: "Encouraging traditional banking customers to adopt mobile banking.",
        impact: "Achieved 78% user adoption in first 6 months."
      }
    ],
    solution: {
      title: "Next-Generation Mobile Banking",
      description: "Developed a comprehensive mobile banking solution with cutting-edge security and user-friendly features.",
      features: [
        "Biometric authentication",
        "Real-time transaction monitoring",
        "AI-powered fraud detection",
        "Personalized financial insights",
        "Mobile check deposit",
        "P2P payments integration"
      ],
      techStack: [
        "React Native", "Node.js", "MongoDB", "AWS", "Firebase", "Redis"
      ]
    },
    process: [
      {
        title: "Security Architecture",
        description: "Designed robust security architecture meeting banking standards.",
        image: "/case-studies/nextgen-bank/process-1.jpg",
        tools: ["AWS Security Hub", "Auth0", "Vault"]
      },
      {
        title: "UX Design",
        description: "Created intuitive user interfaces with focus on accessibility.",
        image: "/case-studies/nextgen-bank/process-2.jpg",
        tools: ["Figma", "Principle", "Adobe XD"]
      },
      {
        title: "Core Development",
        description: "Built the application with focus on performance and reliability.",
        image: "/case-studies/nextgen-bank/process-3.jpg",
        tools: ["React Native", "Node.js", "MongoDB"]
      },
      {
        title: "Testing & Security Audit",
        description: "Conducted extensive security testing and compliance audits.",
        image: "/case-studies/nextgen-bank/process-4.jpg",
        tools: ["Jest", "Detox", "Penetration Testing"]
      }
    ],
    outcomes: {
      summary: "The mobile banking app has transformed NextGen Bank's digital presence and significantly improved customer satisfaction.",
      metrics: [
        {
          label: "User Base",
          value: "2M+",
          description: "Active mobile users",
          trend: "up",
          percentage: 95
        },
        {
          label: "App Rating",
          value: "4.8/5",
          description: "App Store rating",
          trend: "up",
          percentage: 96
        },
        {
          label: "Transaction Volume",
          value: "+180%",
          description: "Increase in mobile transactions",
          trend: "up",
          percentage: 180
        },
        {
          label: "Cost Savings",
          value: "62%",
          description: "Reduction in service costs",
          trend: "down",
          percentage: 62
        }
      ]
    },
    testimonial: {
      quote: "The mobile app has exceeded our expectations in every way. Our customers love the intuitive interface and advanced features, while we've seen significant operational cost savings.",
      author: "James Wilson",
      role: "Head of Digital Banking",
      company: "NextGen Bank",
      image: "/case-studies/nextgen-bank/testimonial.jpg"
    },
    technologies: [
      "React Native",
      "Node.js",
      "MongoDB",
      "AWS",
      "Firebase",
      "Redis",
      "GraphQL",
      "Auth0",
      "Vault",
      "WebSocket"
    ],
    nextProject: {
      title: "Smart City Dashboard",
      slug: "metropolitan-council",
      image: "/case-studies/metropolitan-council/preview.jpg"
    }
  },
  {
    slug: 'metropolitan-council',
    title: "Smart City Dashboard",
    client: "Metropolitan Council",
    industry: "Government / Smart Cities",
    duration: "14 months",
    teamSize: 18,
    description: "Building a comprehensive IoT dashboard for real-time city infrastructure monitoring and management.",
    headerImage: "/case-studies/metropolitan-council/header.jpg",
    logoImage: "/case-studies/metropolitan-council/logo.svg",
    bgColor: {
      primary: 'from-violet-600/20 via-purple-600/20 to-indigo-600/20',
      hover: 'from-violet-500/30 via-purple-500/30 to-indigo-500/30',
      card: 'from-violet-900/50 to-purple-900/50',
      accent: 'violet'
    },
    overview: "Metropolitan Council needed a centralized platform to monitor and manage city infrastructure in real-time. We created a comprehensive IoT dashboard that revolutionized city operations and emergency response.",
    challenges: [
      {
        title: "Data Integration",
        description: "Integrating data from thousands of IoT sensors and disparate systems.",
        impact: "Successfully integrated 50,000+ data points."
      },
      {
        title: "Real-time Processing",
        description: "Processing and analyzing massive amounts of real-time data.",
        impact: "Achieved sub-second latency for critical updates."
      },
      {
        title: "System Reliability",
        description: "Ensuring 24/7 system availability for critical city operations.",
        impact: "Maintained 99.999% uptime."
      }
    ],
    solution: {
      title: "Smart City Control Center",
      description: "Developed an advanced IoT platform for comprehensive city infrastructure monitoring and management.",
      features: [
        "Real-time sensor monitoring",
        "Predictive maintenance alerts",
        "Emergency response coordination",
        "Traffic flow optimization",
        "Environmental monitoring",
        "Resource utilization tracking"
      ],
      techStack: [
        "React", "Node.js", "TimescaleDB", "Apache Kafka", "Redis", "TensorFlow"
      ]
    },
    process: [
      {
        title: "Infrastructure Assessment",
        description: "Mapped city infrastructure and sensor requirements.",
        image: "/case-studies/metropolitan-council/process-1.jpg",
        tools: ["GIS", "AutoCAD", "Miro"]
      },
      {
        title: "IoT Architecture",
        description: "Designed scalable IoT architecture and data processing pipeline.",
        image: "/case-studies/metropolitan-council/process-2.jpg",
        tools: ["AWS IoT", "Apache Kafka", "TimescaleDB"]
      },
      {
        title: "Dashboard Development",
        description: "Built real-time monitoring and control interfaces.",
        image: "/case-studies/metropolitan-council/process-3.jpg",
        tools: ["React", "D3.js", "WebSocket"]
      },
      {
        title: "System Integration",
        description: "Integrated with existing city systems and emergency services.",
        image: "/case-studies/metropolitan-council/process-4.jpg",
        tools: ["Apache Kafka", "REST APIs", "GraphQL"]
      }
    ],
    outcomes: {
      summary: "The smart city dashboard has transformed city operations, improving efficiency and emergency response times while reducing operational costs.",
      metrics: [
        {
          label: "Response Time",
          value: "-65%",
          description: "Emergency response improvement",
          trend: "down",
          percentage: 65
        },
        {
          label: "Cost Savings",
          value: "$4.2M",
          description: "Annual operational savings",
          trend: "down",
          percentage: 55
        },
        {
          label: "Efficiency",
          value: "+55%",
          description: "Resource utilization improvement",
          trend: "up",
          percentage: 55
        },
        {
          label: "Coverage",
          value: "100%",
          description: "City infrastructure monitored",
          trend: "up",
          percentage: 100
        }
      ]
    },
    testimonial: {
      quote: "This smart city platform has revolutionized how we manage city operations. We've seen dramatic improvements in emergency response times and significant cost savings.",
      author: "Dr. Sarah Martinez",
      role: "Chief Innovation Officer",
      company: "Metropolitan Council",
      image: "/case-studies/metropolitan-council/testimonial.jpg"
    },
    technologies: [
      "React",
      "Node.js",
      "TimescaleDB",
      "Apache Kafka",
      "Redis",
      "TensorFlow",
      "AWS IoT",
      "D3.js",
      "WebSocket",
      "GraphQL"
    ],
    nextProject: {
      title: "Virtual Learning Platform",
      slug: "edutech-solutions",
      image: "/case-studies/edutech-solutions/preview.jpg"
    }
  },
  {
    slug: 'edutech-solutions',
    title: "Virtual Learning Platform",
    client: "EduTech Solutions",
    industry: "Education Technology",
    duration: "9 months",
    teamSize: 16,
    description: "Creating an interactive virtual learning platform with AI-powered personalization.",
    headerImage: "/case-studies/edutech-solutions/header.jpg",
    logoImage: "/case-studies/edutech-solutions/logo.svg",
    bgColor: {
      primary: 'from-purple-600/20 via-fuchsia-600/20 to-pink-600/20',
      hover: 'from-purple-500/30 via-fuchsia-500/30 to-pink-500/30',
      card: 'from-purple-900/50 to-fuchsia-900/50',
      accent: 'purple'
    },
    overview: "EduTech Solutions needed a scalable virtual learning platform to support remote education with personalized learning paths. We developed an AI-powered solution that transformed online education delivery.",
    challenges: [
      {
        title: "Scale & Performance",
        description: "Supporting thousands of concurrent users with video streaming.",
        impact: "Successfully scaled to 100,000+ concurrent users."
      },
      {
        title: "Learning Personalization",
        description: "Creating personalized learning experiences for each student.",
        impact: "Implemented AI-driven personalization with 92% accuracy."
      },
      {
        title: "Engagement",
        description: "Maintaining student engagement in virtual environment.",
        impact: "Increased student engagement by 80%."
      }
    ],
    solution: {
      title: "AI-Powered Learning Platform",
      description: "Developed a comprehensive virtual learning platform with real-time collaboration and personalized learning paths.",
      features: [
        "AI-driven learning paths",
        "Real-time virtual classrooms",
        "Interactive content creation",
        "Progress tracking analytics",
        "Collaborative learning tools",
        "Mobile-first experience"
      ],
      techStack: [
        "Next.js", "Python", "TensorFlow", "WebRTC", "MongoDB", "Redis"
      ]
    },
    process: [
      {
        title: "Educational Research",
        description: "Conducted research on effective online learning methodologies.",
        image: "/case-studies/edutech-solutions/process-1.jpg",
        tools: ["Research Tools", "Data Analysis"]
      },
      {
        title: "Platform Architecture",
        description: "Designed scalable architecture for video streaming and real-time collaboration.",
        image: "/case-studies/edutech-solutions/process-2.jpg",
        tools: ["AWS", "WebRTC", "Redis"]
      },
      {
        title: "AI Development",
        description: "Implemented AI models for learning personalization.",
        image: "/case-studies/edutech-solutions/process-3.jpg",
        tools: ["Python", "TensorFlow", "scikit-learn"]
      },
      {
        title: "Platform Development",
        description: "Built the platform with focus on engagement and usability.",
        image: "/case-studies/edutech-solutions/process-4.jpg",
        tools: ["Next.js", "WebRTC", "Socket.io"]
      }
    ],
    outcomes: {
      summary: "The virtual learning platform has transformed online education delivery, significantly improving student engagement and learning outcomes.",
      metrics: [
        {
          label: "User Base",
          value: "100K+",
          description: "Active students",
          trend: "up",
          percentage: 90
        },
        {
          label: "Engagement",
          value: "+80%",
          description: "Student engagement increase",
          trend: "up",
          percentage: 80
        },
        {
          label: "Completion",
          value: "+65%",
          description: "Course completion rate",
          trend: "up",
          percentage: 65
        },
        {
          label: "Satisfaction",
          value: "92%",
          description: "Student satisfaction",
          trend: "up",
          percentage: 92
        }
      ]
    },
    testimonial: {
      quote: "This platform has revolutionized how we deliver online education. The AI-powered personalization and engagement features have transformed learning outcomes for our students.",
      author: "Dr. Robert Chang",
      role: "CEO",
      company: "EduTech Solutions",
      image: "/case-studies/edutech-solutions/testimonial.jpg"
    },
    technologies: [
      "Next.js",
      "Python",
      "TensorFlow",
      "WebRTC",
      "MongoDB",
      "Redis",
      "Socket.io",
      "AWS",
      "Docker",
      "Kubernetes"
    ],
    nextProject: {
      title: "AI-Powered Analytics Platform",
      slug: "tech-corp",
      image: "/case-studies/tech-corp/preview.jpg"
    }
  },
  {
    slug: 'healthcare-ai',
    title: "Healthcare AI Diagnosis Platform",
    client: "MediTech Innovations",
    industry: "Healthcare Technology",
    duration: "16 months",
    teamSize: 20,
    description: "Revolutionizing medical diagnosis with AI-powered image analysis and predictive healthcare.",
    headerImage: "/case-studies/healthcare-ai/header.jpg",
    logoImage: "/case-studies/healthcare-ai/logo.svg",
    bgColor: {
      primary: 'from-purple-600/20 via-fuchsia-600/20 to-pink-600/20',
      hover: 'from-purple-500/30 via-fuchsia-500/30 to-pink-500/30',
      card: 'from-purple-900/50 to-fuchsia-900/50',
      accent: 'purple'
    },
    overview: "MediTech Innovations required a cutting-edge AI platform for medical image analysis and early disease detection. We developed a comprehensive solution that enhanced diagnostic accuracy and reduced detection time.",
    challenges: [
      {
        title: "Data Privacy & Compliance",
        description: "Meeting strict HIPAA compliance while handling sensitive medical data.",
        impact: "Achieved 100% HIPAA compliance with zero breaches."
      },
      {
        title: "AI Accuracy",
        description: "Ensuring high accuracy in medical diagnosis predictions.",
        impact: "Achieved 99.7% accuracy in preliminary diagnoses."
      },
      {
        title: "Integration Complexity",
        description: "Integrating with various medical imaging devices and hospital systems.",
        impact: "Successfully integrated with 50+ different medical systems."
      }
    ],
    solution: {
      title: "AI Medical Diagnosis Platform",
      description: "Created an advanced AI platform for medical image analysis and predictive diagnosis with emphasis on accuracy and security.",
      features: [
        "Real-time medical image analysis",
        "AI-powered diagnosis suggestions",
        "Secure patient data management",
        "Cross-platform compatibility",
        "Advanced reporting system",
        "Collaborative diagnosis tools"
      ],
      techStack: [
        "Python", "TensorFlow", "PyTorch", "CUDA", "MongoDB", "Docker"
      ]
    },
    process: [
      {
        title: "Medical Research",
        description: "Collaborated with medical professionals to understand diagnostic processes.",
        image: "/case-studies/healthcare-ai/process-1.jpg",
        tools: ["Research Tools", "Medical Databases"]
      },
      {
        title: "AI Model Development",
        description: "Developed and trained specialized AI models for medical imaging.",
        image: "/case-studies/healthcare-ai/process-2.jpg",
        tools: ["TensorFlow", "PyTorch", "CUDA"]
      },
      {
        title: "Security Implementation",
        description: "Implemented comprehensive security measures for HIPAA compliance.",
        image: "/case-studies/healthcare-ai/process-3.jpg",
        tools: ["AWS KMS", "Vault", "encryption tools"]
      },
      {
        title: "System Integration",
        description: "Integrated with hospital systems and medical devices.",
        image: "/case-studies/healthcare-ai/process-4.jpg",
        tools: ["HL7", "DICOM", "REST APIs"]
      }
    ],
    outcomes: {
      summary: "The AI platform has significantly improved diagnostic accuracy and efficiency, leading to better patient outcomes and reduced healthcare costs.",
      metrics: [
        {
          label: "Accuracy",
          value: "99.7%",
          description: "Diagnostic accuracy",
          trend: "up",
          percentage: 99.7
        },
        {
          label: "Time Saved",
          value: "75%",
          description: "Reduction in diagnosis time",
          trend: "down",
          percentage: 75
        },
        {
          label: "Cost Reduction",
          value: "$3.2M",
          description: "Annual savings",
          trend: "down",
          percentage: 68
        },
        {
          label: "Hospital Adoption",
          value: "50+",
          description: "Integrated hospitals",
          trend: "up",
          percentage: 85
        }
      ]
    },
    testimonial: {
      quote: "This AI platform has transformed our diagnostic capabilities. We're detecting conditions earlier and with greater accuracy than ever before.",
      author: "Dr. Emily Chen",
      role: "Chief of Radiology",
      company: "MediTech Innovations",
      image: "/case-studies/healthcare-ai/testimonial.jpg"
    },
    technologies: [
      "Python",
      "TensorFlow",
      "PyTorch",
      "CUDA",
      "MongoDB",
      "Docker",
      "Kubernetes",
      "AWS",
      "HL7",
      "DICOM"
    ],
    nextProject: {
      title: "Sustainable Energy Platform",
      slug: "green-energy",
      image: "/case-studies/green-energy/preview.jpg"
    }
  },
  {
    slug: 'green-energy',
    title: "Sustainable Energy Management Platform",
    client: "EcoGrid Solutions",
    industry: "Clean Energy / Sustainability",
    duration: "12 months",
    teamSize: 15,
    description: "Building an intelligent platform for renewable energy management and optimization.",
    headerImage: "/case-studies/green-energy/header.jpg",
    logoImage: "/case-studies/green-energy/logo.svg",
    bgColor: {
      primary: 'from-purple-600/20 via-fuchsia-600/20 to-pink-600/20',
      hover: 'from-purple-500/30 via-fuchsia-500/30 to-pink-500/30',
      card: 'from-purple-900/50 to-fuchsia-900/50',
      accent: 'purple'
    },
    overview: "EcoGrid Solutions needed a sophisticated platform to manage and optimize renewable energy distribution across smart grids. We developed an AI-driven solution that maximized energy efficiency and reduced waste.",
    challenges: [
      {
        title: "Grid Optimization",
        description: "Balancing energy supply and demand across complex grid networks.",
        impact: "Achieved 40% improvement in energy distribution efficiency."
      },
      {
        title: "Real-time Monitoring",
        description: "Monitoring thousands of grid points in real-time.",
        impact: "Implemented millisecond-level monitoring across 10,000+ points."
      },
      {
        title: "Predictive Maintenance",
        description: "Predicting and preventing grid failures before they occur.",
        impact: "Reduced unplanned downtime by 85%."
      }
    ],
    solution: {
      title: "Smart Grid Management Platform",
      description: "Developed an intelligent platform for renewable energy management with predictive analytics and real-time optimization.",
      features: [
        "AI-powered grid optimization",
        "Real-time energy monitoring",
        "Predictive maintenance",
        "Demand forecasting",
        "Automated load balancing",
        "Carbon footprint tracking"
      ],
      techStack: [
        "Python", "TensorFlow", "Apache Spark", "TimescaleDB", "Grafana", "Kubernetes"
      ]
    },
    process: [
      {
        title: "Grid Analysis",
        description: "Analyzed existing grid infrastructure and energy patterns.",
        image: "/case-studies/green-energy/process-1.jpg",
        tools: ["Power BI", "Custom Analytics Tools"]
      },
      {
        title: "Platform Architecture",
        description: "Designed scalable architecture for real-time monitoring.",
        image: "/case-studies/green-energy/process-2.jpg",
        tools: ["Apache Kafka", "TimescaleDB"]
      },
      {
        title: "AI Implementation",
        description: "Developed AI models for prediction and optimization.",
        image: "/case-studies/green-energy/process-3.jpg",
        tools: ["TensorFlow", "Apache Spark"]
      },
      {
        title: "Grid Integration",
        description: "Integrated with smart grid infrastructure and sensors.",
        image: "/case-studies/green-energy/process-4.jpg",
        tools: ["IoT Protocols", "SCADA Systems"]
      }
    ],
    outcomes: {
      summary: "The platform has significantly improved energy distribution efficiency and reduced operational costs while supporting sustainable energy goals.",
      metrics: [
        {
          label: "Efficiency Gain",
          value: "40%",
          description: "Energy distribution improvement",
          trend: "up",
          percentage: 40
        },
        {
          label: "Cost Reduction",
          value: "45%",
          description: "Operational cost savings",
          trend: "down",
          percentage: 45
        },
        {
          label: "Carbon Reduction",
          value: "50K",
          description: "Tons CO2 saved annually",
          trend: "down",
          percentage: 75
        },
        {
          label: "Grid Coverage",
          value: "10K+",
          description: "Monitored grid points",
          trend: "up",
          percentage: 92
        }
      ]
    },
    testimonial: {
      quote: "The platform has revolutionized how we manage renewable energy distribution. We're seeing unprecedented levels of efficiency and significant cost savings.",
      author: "Mark Anderson",
      role: "Director of Operations",
      company: "EcoGrid Solutions",
      image: "/case-studies/green-energy/testimonial.jpg"
    },
    technologies: [
      "Python",
      "TensorFlow",
      "Apache Spark",
      "TimescaleDB",
      "Grafana",
      "Kubernetes",
      "Apache Kafka",
      "SCADA",
      "IoT Protocols",
      "AWS"
    ],
    nextProject: {
      title: "Gaming Metaverse Platform",
      slug: "meta-gaming",
      image: "/case-studies/meta-gaming/preview.jpg"
    }
  },
  {
    slug: 'smart-city',
    title: "Smart City Dashboard",
    client: "Metropolitan Council",
    industry: "Government / Smart Cities",
    duration: "14 months",
    teamSize: 18,
    description: "Created a comprehensive IoT dashboard for monitoring and managing city infrastructure in real-time.",
    headerImage: "/case-studies/smart-city/header.jpg",
    logoImage: "/case-studies/smart-city/logo.svg",
    bgColor: {
      primary: 'from-violet-600/20 via-purple-600/20 to-indigo-600/20',
      hover: 'from-violet-500/30 via-purple-500/30 to-indigo-500/30',
      card: 'from-violet-900/50 to-purple-900/50',
      accent: 'violet'
    },
    overview: "The Metropolitan Council needed a centralized platform to monitor and manage city infrastructure in real-time. We developed a comprehensive IoT dashboard that revolutionized city operations, improving emergency response times and resource management.",
    challenges: [
      {
        title: "Real-time Data Integration",
        description: "Integrating data from over 50,000 IoT sensors and multiple city systems in real-time.",
        impact: "Achieved sub-second latency for critical updates."
      },
      {
        title: "Emergency Response",
        description: "Reducing emergency response times through intelligent routing and predictive analytics.",
        impact: "Reduced average response time by 65%."
      },
      {
        title: "Resource Optimization",
        description: "Optimizing city resources across traffic, utilities, and public services.",
        impact: "Improved resource utilization by 55%."
      }
    ],
    solution: {
      title: "Intelligent City Management Platform",
      description: "We developed a comprehensive smart city platform that combines real-time monitoring, predictive analytics, and automated response systems to optimize city operations.",
      features: [
        "Real-time infrastructure monitoring",
        "Predictive maintenance alerts",
        "Automated emergency dispatch",
        "Traffic flow optimization",
        "Resource utilization tracking",
        "Environmental monitoring",
        "Public safety management",
        "Utility consumption analytics"
      ],
      techStack: [
        "React",
        "Node.js",
        "TimescaleDB",
        "Apache Kafka",
        "TensorFlow",
        "Docker"
      ]
    },
    process: [
      {
        title: "Infrastructure Analysis",
        description: "Mapped existing city infrastructure and identified key monitoring points.",
        image: "/case-studies/smart-city/process-1.jpg",
        tools: ["GIS", "AutoCAD", "Miro"]
      },
      {
        title: "Sensor Network Design",
        description: "Designed IoT sensor network architecture and data collection protocols.",
        image: "/case-studies/smart-city/process-2.jpg",
        tools: ["IoT Protocols", "Network Design Tools"]
      },
      {
        title: "Platform Development",
        description: "Built the central monitoring platform with real-time capabilities.",
        image: "/case-studies/smart-city/process-3.jpg",
        tools: ["React", "Node.js", "WebSocket"]
      },
      {
        title: "System Integration",
        description: "Integrated with emergency services and city management systems.",
        image: "/case-studies/smart-city/process-4.jpg",
        tools: ["Apache Kafka", "REST APIs"]
      }
    ],
    outcomes: {
      summary: "The smart city platform has transformed city operations, leading to significant improvements in emergency response times, resource utilization, and public service delivery.",
      metrics: [
        {
          label: "Response Time",
          value: "-65%",
          description: "Emergency response improvement",
          trend: "down",
          percentage: 65
        },
        {
          label: "Resource Efficiency",
          value: "+55%",
          description: "Resource utilization improvement",
          trend: "up",
          percentage: 55
        },
        {
          label: "Cost Savings",
          value: "$3.2M",
          description: "Annual operational savings",
          trend: "down",
          percentage: 45
        },
        {
          label: "Coverage",
          value: "50K",
          description: "IoT sensors deployed",
          trend: "up",
          percentage: 92
        }
      ]
    },
    testimonial: {
      quote: "This platform has revolutionized how we manage our city. We've seen dramatic improvements in emergency response times and significant cost savings across all departments.",
      author: "Jennifer Martinez",
      role: "Smart City Director",
      company: "Metropolitan Council",
      image: "/case-studies/smart-city/testimonial.jpg"
    },
    technologies: [
      "React",
      "Node.js",
      "TimescaleDB",
      "Apache Kafka",
      "TensorFlow",
      "Docker",
      "Kubernetes",
      "WebSocket",
      "IoT Protocols",
      "GIS"
    ],
    nextProject: {
      title: "Virtual Learning Platform",
      slug: "edutech",
      image: "/case-studies/edutech/preview.jpg"
    }
  },
  {
    slug: 'edutech',
    title: "Virtual Learning Platform",
    client: "EduTech Solutions",
    industry: "Education Technology",
    duration: "9 months",
    teamSize: 16,
    description: "Developed an interactive virtual learning platform with AI-powered personalization and real-time collaboration features.",
    headerImage: "/case-studies/edutech/header.jpg",
    logoImage: "/case-studies/edutech/logo.svg",
    bgColor: {
      primary: 'from-purple-600/20 via-fuchsia-600/20 to-pink-600/20',
      hover: 'from-purple-500/30 via-fuchsia-500/30 to-pink-500/30',
      card: 'from-purple-900/50 to-fuchsia-900/50',
      accent: 'purple'
    },
    overview: "EduTech Solutions needed a scalable virtual learning platform to support remote education with personalized learning paths. We developed an AI-powered solution that transformed online education delivery and student engagement.",
    challenges: [
      {
        title: "Engagement & Retention",
        description: "Maintaining student engagement in a virtual learning environment.",
        impact: "Increased student engagement by 80%."
      },
      {
        title: "Personalized Learning",
        description: "Creating adaptive learning paths for individual students.",
        impact: "Improved learning outcomes by 45%."
      },
      {
        title: "Scalable Video Delivery",
        description: "Supporting thousands of concurrent video streaming sessions.",
        impact: "Successfully scaled to 100,000+ concurrent users."
      }
    ],
    solution: {
      title: "AI-Powered Learning Platform",
      description: "We created a comprehensive virtual learning platform that combines AI-driven personalization, real-time collaboration, and interactive content delivery.",
      features: [
        "AI-powered learning paths",
        "Real-time virtual classrooms",
        "Interactive content creation",
        "Progress tracking analytics",
        "Collaborative study rooms",
        "Automated assessments",
        "Mobile-first experience",
        "Offline learning support"
      ],
      techStack: [
        "Next.js",
        "Python",
        "TensorFlow",
        "WebRTC",
        "MongoDB",
        "Redis"
      ]
    },
    process: [
      {
        title: "Learning Research",
        description: "Researched effective online learning methodologies and student engagement patterns.",
        image: "/case-studies/edutech/process-1.jpg",
        tools: ["Analytics Tools", "Research Software"]
      },
      {
        title: "Platform Architecture",
        description: "Designed scalable architecture for video streaming and real-time collaboration.",
        image: "/case-studies/edutech/process-2.jpg",
        tools: ["AWS", "WebRTC", "System Design"]
      },
      {
        title: "AI Development",
        description: "Developed AI models for personalized learning and content recommendations.",
        image: "/case-studies/edutech/process-3.jpg",
        tools: ["TensorFlow", "Python", "ML Tools"]
      },
      {
        title: "Frontend Development",
        description: "Built interactive user interfaces for students and educators.",
        image: "/case-studies/edutech/process-4.jpg",
        tools: ["Next.js", "React", "WebRTC"]
      }
    ],
    outcomes: {
      summary: "The platform has transformed online education delivery, significantly improving student engagement, completion rates, and learning outcomes.",
      metrics: [
        {
          label: "Engagement",
          value: "+80%",
          description: "Student engagement increase",
          trend: "up",
          percentage: 80
        },
        {
          label: "Users",
          value: "100K+",
          description: "Active students",
          trend: "up",
          percentage: 92
        },
        {
          label: "Completion",
          value: "+65%",
          description: "Course completion rate",
          trend: "up",
          percentage: 65
        },
        {
          label: "Performance",
          value: "+45%",
          description: "Learning outcome improvement",
          trend: "up",
          percentage: 45
        }
      ]
    },
    testimonial: {
      quote: "The platform has revolutionized how we deliver online education. The AI-powered personalization and engagement features have transformed learning outcomes for our students.",
      author: "Dr. Sarah Chen",
      role: "Chief Education Officer",
      company: "EduTech Solutions",
      image: "/case-studies/edutech/testimonial.jpg"
    },
    technologies: [
      "Next.js",
      "Python",
      "TensorFlow",
      "WebRTC",
      "MongoDB",
      "Redis",
      "AWS",
      "Socket.io",
      "WebAssembly",
      "FFmpeg"
    ],
    nextProject: {
      title: "Healthcare AI Platform",
      slug: "healthcare-ai",
      image: "/case-studies/healthcare-ai/preview.jpg"
    }
  }


];