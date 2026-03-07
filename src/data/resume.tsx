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
    dribbble: {
      url: "https://dribbble.com",
      label: "Dribbble.com/ps",
      icon: Icons.dribbble,
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
    email: "muzammil.alyari@gmail.com",
    cta: "LET'S BUILD SOMETHING BOLD",
  },

  work: [
    {
      company: "nuitee",
      href: "https://nuitee.com",
      badges: [],
      location: "Remote",
      title: "Senior Product Designer",
      logoLabel: "nuitee",
      start: "2023",
      end: "Present",
      description: "Leading the design of travel-tech solutions focused on B2B booking flow optimizations and internal design systems.",
    },
    {
      company: "Queto",
      href: "https://queto.com",
      badges: [],
      location: "Hybrid",
      title: "Product Designer",
      logoLabel: "Queto",
      start: "2022",
      end: "2023",
      description: "Designed core features for a collaborative project management tool, improving team productivity by 30%.",
    },
    {
      company: "Salora",
      href: "https://salora.io",
      badges: [],
      location: "Remote",
      title: "Product Designer",
      logoLabel: "Salora",
      start: "2021",
      end: "2022",
      description: "Focused on brand identity and landing page designs for high-conversion marketing campaigns.",
    },
    {
      company: "FWC",
      href: "https://fwc.design",
      badges: [],
      location: "On-site",
      title: "UX/UI Designer",
      logoLabel: "FWC",
      start: "2021",
      end: "2021",
      description: "Collaborated with cross-functional teams to deliver mobile-first experiences for fintech clients.",
    },
  ],

  education: [
    {
      school: "Design Academy",
      href: "https://design.edu",
      degree: "Master of Digital Design",
      logoLabel: "DA",
      start: "2018",
      end: "2020",
    },
    {
      school: "Tech Institute",
      href: "https://tech.edu",
      degree: "Bachelor of Computer Science",
      logoLabel: "TI",
      start: "2014",
      end: "2018",
    },
  ],
} as const;
