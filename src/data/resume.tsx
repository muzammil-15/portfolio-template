import { Icons } from "@/components/icons";

export const DATA = {
  name: "Prath Warthy",
  initials: "PS",
  role: "Freelancer",
  url: "https://motionx.design",
  headline: "I design and build products that deliver",
  headlineAccent: "real impact",
  description:
    "Hello, I'm Prath Warthy, Freelancer",
  avatarUrl: "/avatar.png",

  navbar: [
    { href: "/#about", label: "About" },
    { href: "/#projects", label: "Projects" },
    { href: "/blog", label: "Blog" },
  ],

  social: {
    linkedin: {
      url: "https://linkedin.com",
      label: "Let's connect",
      icon: Icons.linkedin,
    },
    dribbble: {
      url: "https://dribbble.com",
      label: "Dribbble.com/ps",
      icon: Icons.dribbble,
    },
  },

  experienceBanner: {
    tagline: "I prototype rapid experiments, finalize production-ready system solutions.",
    ctaTitle: "Let's become together",
    ctaSubtitle: "Let's discuss your project",
    stats: "Trusted by digital innovators",
    companies: [
      { name: "Vercel", logo: "/companies/vercel.svg" },
      { name: "Stripe", logo: "/companies/stripe.svg" },
      { name: "Linear", logo: "/companies/linear.svg" },
      { name: "Notion", logo: "/companies/notion.svg" },
      { name: "Figma", logo: "/companies/figma.svg" },
      { name: "Framer", logo: "/companies/framer.svg" },
    ],
  },

  ventures: [
    {
      title: "Floki",
      subtitle:
        "An all-in-one productivity tool with 15+ powerful blocks for note-taking, writing, and creating content.",
      description:
        "Designed the full product from 0 to 1, grounded in research, rapid prototyping, and close collaboration with engineering to build scalable user-first interfaces using React, Tailwind CSS, and Node.js.",
      image: "",
      color: "#FF6B35",
      tags: ["PRODUCT DESIGN", "WEB DESIGN", "DEVELOPMENT"],
      stats: {
        users: "2.5k+",
        retention: "94%",
        satisfaction: "4.8/5",
      },
      href: "#",
      position: "left" as const,
    },
    {
      title: "RunaAI",
      subtitle:
        "Revolutionary AI-powered and intuitive digital platform for personalized learning experiences.",
      description:
        "An ethical approach to ed-tech. Between tutoring, AI-based content generation, assessment tools, tailored learning paths—and more—RunaAI provides a comprehensive solution for modern education.",
      image: "",
      color: "#10B981",
      tags: ["UI/UX DESIGN", "CASE STUDY", "DEVELOPMENT"],
      stats: {
        users: "10k+",
        courses: "500+",
        completion: "87%",
      },
      href: "#",
      position: "right" as const,
    },
  ],

  about: {
    headline: "Building the bridge between ideas and",
    headlineAccent: "experiences",
    bio: [
      "I'm Prath Warthy, an independent creative who brings deep love, care, and experience to every project. I design for the next generation of digital products and immersive experiences.",
      "I'm the founder of Pixon + monty products like the Ploom for XCode and Strive Tech: Building a startup ecosystem has taught me how to ship products confidently.",
      "My craft is multi-lens, helping you understand the entire tech stack.",
    ],
    image: "",
  },

  testimonials: [
    {
      name: "Sarah Chen",
      role: "Product Manager, TechCorp",
      quote:
        "A true professional who transforms visions into products and creates the best digital experiences I've ever seen.",
      avatar: "",
    },
    {
      name: "Marcus Rodriguez",
      role: "Founder, StartupXYZ",
      quote:
        "Expertise, creativity, and passion in every single project. The attention to detail is unmatched.",
      avatar: "",
    },
    {
      name: "Emily Watson",
      role: "Design Director, Agency",
      quote:
        "A visionary designer who has brought innovative solutions, giving our projects a true competitive edge.",
      avatar: "",
    },
  ],

  contact: {
    email: "hello@motionx.design",
    cta: "LET'S BUILD SOMETHING BOLD",
  },
} as const;
