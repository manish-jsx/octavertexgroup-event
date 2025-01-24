
import { 
  Layout, Users2, Truck, ShoppingBag, Box, Calculator,
  Calendar, BarChart2, Filter, Bot, Brain, Settings2
} from 'lucide-react'

export const products = [
  {
    title: "Enterprise Solutions",
    items: [
      {
        title: "Enterprise CMS",
        href: "/products/cms",
        description: "Content Management System for large organizations",
        icon: Layout,
        features: [
          "Custom workflows",
          "Role-based access control",
          "Content versioning",
          "API-first architecture"
        ]
      },
      {
        title: "HRMS Suite",
        href: "/products/hrms",
        description: "Complete HR & Workforce Management",
        icon: Users2,
        features: [
          "Employee self-service",
          "Payroll management",
          "Performance tracking",
          "Recruitment module"
        ]
      },
      {
        title: "Delivery Management",
        href: "/products/delivery",
        description: "End-to-end delivery tracking & management",
        icon: Truck,
        features: [
          "Real-time tracking",
          "Route optimization",
          "Proof of delivery",
          "Customer notifications"
        ]
      }
    ]
  },
  {
    title: "Business Solutions",
    items: [
      {
        title: "E-commerce Platform",
        href: "/products/ecommerce",
        description: "Scalable e-commerce solution",
        icon: ShoppingBag,
        features: [
          "Product catalog management",
          "Order processing",
          "Payment gateway integration",
          "Customer reviews"
        ]
      },
      {
        title: "Supply Chain Manager",
        href: "/products/supply-chain",
        description: "Supply chain optimization & tracking",
        icon: Box,
        features: [
          "Inventory management",
          "Supplier management",
          "Demand forecasting",
          "Logistics tracking"
        ]
      },
      {
        title: "Budget Estimator",
        href: "/products/budget",
        description: "Project budgeting & cost estimation",
        icon: Calculator,
        features: [
          "Cost breakdown",
          "Resource allocation",
          "Financial reporting",
          "Scenario analysis"
        ]
      }
    ]
  },
  {
    title: "Smart Tools",
    items: [
      {
        title: "Meeting Scheduler",
        href: "/products/scheduler",
        description: "Smart calendar & meeting management",
        icon: Calendar,
        features: [
          "Automated scheduling",
          "Calendar integration",
          "Meeting reminders",
          "Time zone support"
        ]
      },
      {
        title: "Business Analytics",
        href: "/products/analytics",
        description: "Advanced business intelligence dashboard",
        icon: BarChart2,
        features: [
          "Data visualization",
          "Custom reports",
          "KPI tracking",
          "Predictive analytics"
        ]
      },
      {
        title: "Funnel Builder",
        href: "/products/funnel",
        description: "Sales funnel creation & optimization",
        icon: Filter,
        features: [
          "Drag-and-drop builder",
          "A/B testing",
          "Conversion tracking",
          "Lead scoring"
        ]
      }
    ]
  },
  {
    title: "AI Solutions",
    items: [
      {
        title: "AI Chatbots RAG",
        href: "/products/chatbots",
        description: "Retrieval-Augmented Generation chatbots",
        icon: Bot,
        features: [
          "Natural language processing",
          "Contextual responses",
          "Multi-channel support",
          "Analytics dashboard"
        ]
      },
      {
        title: "AI Agents",
        href: "/products/ai-agents",
        description: "Autonomous AI agents for business tasks",
        icon: Brain,
        features: [
          "Task automation",
          "Decision making",
          "Learning capabilities",
          "Integration with existing systems"
        ]
      },
      {
        title: "Process Automation",
        href: "/products/automation",
        description: "AI-powered workflow automation",
        icon: Settings2,
        features: [
          "Workflow design",
          "Task scheduling",
          "Performance monitoring",
          "Error handling"
        ]
      }
    ]
  }
]

export type Product = typeof products[0]['items'][0]