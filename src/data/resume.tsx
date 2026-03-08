import { Icons } from "@/components/icons";

export const DATA = {
  name: "Muzammil Hussain",
  initials: "MH",
  role: "Full Stack Developer",
  url: "https://motionx.design",
  headline: "I engineer scalable systems that drive",
  headlineAccent: "business growth",
  description:
    "Hello, I'm Muzammil Hussain • Full Stack Developer",
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
    github: {
      url: "https://github.com/muzammil-15",
      label: "github.com/muzammil-15",
      icon: Icons.github,
    },
    x: {
      url: "https://x.com/MuzammilHu68318",
      label: "x.com/MuzammilHu68318",
      icon: Icons.x,
    },
  },

  experienceBanner: {
    tagline: "I prototype rapid experiments, finalize production-ready system solutions.",
    partnership: {
      title: "I prioritize client success, fostering open communication.",
      tag: "PARTNERSHIP",
      avatars: ["/avatars/1.png", "/avatars/2.png"],
    },
    techStack: {
      title: "Focused on latest digital",
      titleAccent: "innovations",
      items: [
        { name: "ReactJS", icon: "react" },
        { name: "NextJS", icon: "nextjs" },
        { name: "TypeScript", icon: "typescript" },
        { name: "Tailwind", icon: "tailwind" },
        { name: "ExpressJS", icon: "express" },
        { name: "PostgreSQL", icon: "postgresql" },
      ],
    },
    adaptability: {
      title: "I'm highly adaptable across",
      titleAccent: "global time zones",
      timezones: ["CA", "GER", "US"],
      location: "Remote from Pakistan",
    },
    project: {
      tag: "PROJECT",
      title: "Something that",
      titleAccent: "stands out.",
    },
  },

  ventures: [
    {
      title: "MotionX UI",
      description:
        "A comprehensive design system and UI component library for React and Tailwind CSS. It provides a collection of pre-built, customizable components to accelerate the development of modern web applications.",
      image: "/images/motionx.png",
      color: "#FF6B35",
      tags: ["PRODUCT DESIGN", "WEB DESIGN", "DEVELOPMENT"],
      href: "https://motionx.design",
      position: "left" as const,
    },
    {
      title: "Vertexa Studio",
      description:
        "Architected and developed the digital headquarters for Vertexa Studio. Focused on delivering a high-performance, immersive experience with fluid animations and a robust, scalable architecture to showcase their creative services.",
      image: "/images/vertexa.png",
      color: "#10B981",
      tags: ["FULLSTACK DEVELOPMENT", "AGENCY", "PERFORMANCE"],
      href: "https://vertexastudio.com",
      position: "right" as const,
    },
  ],

  about: {
    headline: "Building scalable",
    headlineAccent: "fullstack systems",
    bio: [
      "I'm Muzammil Hussain, a Fullstack Developer focused on high-performance, user-centric systems. I bridge the gap between complex logic and intuitive design using React, Next.js, and Node.js.",
      "I build clean, maintainable solutions that drive business value and are engineered to scale for the future.",
    ],
    image: "/images/me.png",
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
    email: "muzammil.alyari@gmail.com",
    cta: "LET'S BUILD SOMETHING BOLD",
  },

  work: [
    {
      company: "Axionix X Pvt Ltd",
      href: "https://axionixx.pk",
      badges: [],
      location: "onsite",
      title: "FullStack Developer",
      logo: "/logos/axionixx.jpg",
      start: "2025",
      end: "present",
      description: "Developing and maintaining web applications using React, Next.js, Node.js.",
    },
    {
      company: "Sata Tecnologies",
      href: "https://sata.pk",
      badges: [],
      location: "onsite",
      title: "Senior Frontend Developer",
      logo: "/logos/sata.jpg",
      start: "2023",
      end: "2025",
      description: "Developing and maintaining web applications using React, Next.js, Vue.js.",
    },
    {
      company: "Web Collection",
      href: "https://webcollection.pk",
      badges: [],
      location: "onsite",
      title: "Frontend Developer",
      logo: "/logos/webcollection.jpg",
      start: "2022",
      end: "2023",
      description: "Developing and maintaining web applications using React, Next.js.",
    },
  ],

  education: [
    {
      school: "Coursera",
      href: "https://coursera.org",
      degree: "IBM Full Stack Software Developer",
      logo: "/logos/coursera.png",
      start: "2024",
      end: "2025",
    },
    {
      school: "Karakoram International University",
      href: "https://kiu.edu.pk",
      degree: "Bachelor of Computer Science",
      logo: "/logos/kiu.png",
      start: "2023",
      end: "2027",
    },
  ],
} as const;
