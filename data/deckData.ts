export interface NavItem {
  label: string;
  href: string;
  code: string;
}

export const NAV_ITEMS: NavItem[] = [
  { label: "ABOUT", href: "#about", code: "01" },
  { label: "PROJECTS", href: "#projects", code: "02" },
  { label: "SKILLS", href: "#skills", code: "03" },
  { label: "ACHIEVEMENTS", href: "#achievements", code: "04" },
  { label: "CONTACT", href: "#contact", code: "05" },
];

export interface HeroPersona {
  idx: number;
  rank: string;
  suit: string;
  suitName: string;
  isRed: boolean;
  name: string;
  role: string;
  tags: string[];
  edition: string;
  bio: string;
}

export const HERO_PERSONAS: HeroPersona[] = [
  {
    idx: 0,
    rank: "A",
    suit: "♠",
    suitName: "FULL-STACK WEB",
    isRed: false,
    name: "Full-Stack Development",
    role: "Software Engineer",
    tags: ["Next.js", "TypeScript", "Scalable Systems"],
    edition: "SPECIALIZATION 01 • FULL-STACK",
    bio: "Building responsive, production-ready web applications with clean architecture and modern frameworks.",
  },
  {
    idx: 1,
    rank: "K",
    suit: "♥",
    suitName: "BACKEND SYSTEMS",
    isRed: true,
    name: "Backend Architecture",
    role: "APIs & Distributed Logic",
    tags: ["Node.js", "Express.js", "PostgreSQL", "REST APIs"],
    edition: "SPECIALIZATION 02 • BACKEND",
    bio: "Designing robust RESTful services, database schemas, and high-performance server architectures.",
  },
  {
    idx: 2,
    rank: "Q",
    suit: "♦",
    suitName: "JAVA & SPRING BOOT",
    isRed: true,
    name: "Java & Spring Boot",
    role: "Enterprise & Backend Systems",
    tags: ["Java", "Spring Boot", "OOP & DSA", "PostgreSQL"],
    edition: "SPECIALIZATION 03 • JAVA ECOSYSTEM",
    bio: "Engineering enterprise-grade Java applications with Spring Boot, robust object-oriented architecture, and data structures.",
  },
  {
    idx: 3,
    rank: "10",
    suit: "♣",
    suitName: "FRONTEND & UI",
    isRed: false,
    name: "Frontend & UI/UX",
    role: "Interactive Interfaces",
    tags: ["React", "Tailwind CSS", "Framer Motion", "UI Design"],
    edition: "SPECIALIZATION 04 • FRONTEND",
    bio: "Crafting intuitive, accessible, and high-performance user interfaces with modern web standards.",
  },
];

export interface AboutFacet {
  id: string;
  cardIndex: string;
  rank: string;
  suit: string;
  isRed: boolean;
  title: string;
  subtitle: string;
  description: string;
  coreSuit: string;
  highlight: string;
}

export const ABOUT_FACETS: AboutFacet[] = [
  {
    id: "builder",
    cardIndex: "01 • Full-Stack",
    rank: "2",
    suit: "♦",
    isRed: true,
    title: "THE BUILDER",
    subtitle: "Turning Ideas into Working Products",
    description:
      "I build scalable web applications with clean architecture, maintainable codebases, and production-grade reliability. Focused on turning conceptual blueprints into intuitive software.",
    coreSuit: "Core Domain: Web Development",
    highlight: "Reliability & Scale",
  },
  {
    id: "explorer",
    cardIndex: "02 • Tech Innovation",
    rank: "2",
    suit: "♠",
    isRed: false,
    title: "THE EXPLORER",
    subtitle: "Continuous Learning & Modern Tech",
    description:
      "A natural drive to explore emerging frameworks and master new technologies by actually building with them. Constantly prototyping, testing ideas, and broadening technical depth.",
    coreSuit: "Core Domain: Practical R&D",
    highlight: "Rapid Prototyping",
  },
  {
    id: "creative",
    cardIndex: "03 • Creative Focus",
    rank: "2",
    suit: "♥",
    isRed: true,
    title: "THE CREATIVE",
    subtitle: "UI Design & Creative Problem Solving",
    description:
      "Passionate about creating clean user experiences with precision typography, responsive layouts, and modern aesthetics. Strong attention to visual polish and ergonomics.",
    coreSuit: "Core Domain: UI/UX & Detail",
    highlight: "Precision & Aesthetics",
  },
  {
    id: "student",
    cardIndex: "04 • Education",
    rank: "2",
    suit: "♣",
    isRed: false,
    title: "THE STUDENT",
    subtitle: "B.Tech in Information Technology",
    description:
      "Currently pursuing B.Tech in Information Technology. Dedicated to strong computer science fundamentals, data structures, algorithms, and continuous professional growth.",
    coreSuit: "Core Domain: Computer Science",
    highlight: "B.Tech IT Path",
  },
];

export interface Project {
  id: string;
  name: string;
  suit: string;
  rank: string;
  isRed: boolean;
  cardIndex: string;
  category: string;
  subtitle: string;
  description: string;
  detailedDescription: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  isFeatured?: boolean;
  statusText?: string;
  imageUrl?: string;
  videoUrl?: string;
  mediaType?: "image" | "video";
}

export const MAIN_PROJECTS: Project[] = [
  {
    id: "vinyasa",
    name: "Vinyasa",
    suit: "♠",
    rank: "A",
    isRed: false,
    cardIndex: "PROJECT 01 // A♠",
    category: "FEATURED FULL-STACK PLATFORM",
    subtitle: "Fashion Discovery & Affiliate Platform",
    description:
      "A fashion discovery and affiliate platform built around visual inspiration, curated moodboards, and seamless product exploration.",
    detailedDescription:
      "A fashion discovery and affiliate platform built around visual inspiration and product discovery. Engineered for seamless visual browsing, instant curation, and fast performance. Integrates dynamic image caching, Supabase database storage, and responsive layout architecture.",
    technologies: ["Next.js", "Tailwind CSS", "Supabase", "TypeScript"],
    liveUrl: "https://vinyasa.qzz.io/",
    isFeatured: true,
    statusText: "LIVE APPLICATION",
    imageUrl: "/images/vinyasa.png",
    mediaType: "image",
  },
  {
    id: "veritas",
    name: "Veritas",
    suit: "♠",
    rank: "Q",
    isRed: false,
    cardIndex: "PROJECT 02 // Q♠",
    category: "FULL-STACK PLATFORM",
    subtitle: "Real-Time News Verification Platform",
    description:
      "Full-stack verification platform verifying claims, facts, and live news streams with probabilistic truth scoring.",
    detailedDescription:
      "A full-stack verification platform engineered for checking claims, facts, and news integrity. Features real-time data retrieval mechanics to ground responses in external facts, responsive conversational interfaces, and modern React/Next.js frontend integration.",
    technologies: ["React", "Next.js", "Python / FastAPI", "Tailwind CSS", "REST APIs"],
    liveUrl: "https://veritasai-mu.vercel.app/",
    githubUrl: "https://github.com/abhilasha2101/Veritas-AI",
    statusText: "LIVE & OPEN SOURCE",
    imageUrl: "/images/veritas-ai.png",
    mediaType: "image",
  },
  {
    id: "aakar",
    name: "AAkar",
    suit: "♥",
    rank: "10",
    isRed: true,
    cardIndex: "PROJECT 03 // 10♥",
    category: "CIVIC DATA PLATFORM",
    subtitle: "Civic Data & Geo-Spatial Platform",
    description:
      "Civic data and spatial platform presented to the Chief Minister of Delhi. Built with interactive mapping and real-time public datasets.",
    detailedDescription:
      "A civic data platform synthesizing spatial datasets, municipal public data, and community metrics. Developed with React, Vite, and FastAPI for real-time data visualization and civic accountability. Includes interactive geographical heatmaps and anomaly detection.",
    technologies: ["React", "Vite", "FastAPI", "Geo-Spatial Data", "Python"],
    statusText: "IN DEVELOPMENT • VIDEO DEMO",
    videoUrl: "/videos/aakar-demo.mp4",
    mediaType: "video",
  },
];

export const MORE_PROJECTS: Project[] = [
  {
    id: "twodo",
    name: "TwoDo",
    suit: "♦",
    rank: "K",
    isRed: true,
    cardIndex: "PROJECT 04 // K♦",
    category: "PRODUCTIVITY APPLICATION",
    subtitle: "Minimalist Task Management App",
    description:
      "Productivity and task management application engineered for speed, clean ergonomics, and real-time state synchronization.",
    detailedDescription:
      "A productivity and task management application engineered for speed, clean ergonomics, and real-time state synchronization. Built with a focus on keyboard-first velocity, intuitive task organization, and persistent cloud sync with Supabase.",
    technologies: ["Next.js", "React", "Supabase", "Tailwind CSS"],
    liveUrl: "https://two-do-one.vercel.app/",
    statusText: "LIVE DEPLOYMENT",
    imageUrl: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?q=80&w=1200&auto=format&fit=crop",
    mediaType: "image",
  },
  {
    id: "booth-management",
    name: "Booth Management System",
    suit: "♣",
    rank: "J",
    isRed: false,
    cardIndex: "PROJECT 05 // J♣",
    category: "JAVA & SPRING BOOT",
    subtitle: "Civic Voter & Grievance Platform",
    description:
      "Enterprise civic platform built with Java, Spring Boot, and PostgreSQL enabling voter registration, grievance tracking, and public issue workflows.",
    detailedDescription:
      "A robust civic platform engineered with Spring Boot and PostgreSQL for multi-tier voter registration, grievance tracking, and public issue administration. Features role-based workflows for Citizens, Officers, and Admins with relational data integrity.",
    technologies: ["Java", "Spring Boot", "PostgreSQL", "React", "REST APIs"],
    githubUrl: "https://github.com/abhilasha2101",
    statusText: "ENTERPRISE SYSTEM",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop",
    mediaType: "image",
  },
];

export const PROJECTS: Project[] = [...MAIN_PROJECTS, ...MORE_PROJECTS];

export interface SkillCard {
  id: string;
  rank: string;
  suit: string;
  suitName: string;
  isRed: boolean;
  category: string;
  discipline: string;
  description: string;
  dossier: string;
  skills: string[];
}

export const SKILL_CARDS: SkillCard[] = [
  {
    id: "frontend",
    rank: "A",
    suit: "♠",
    suitName: "FRONTEND",
    isRed: false,
    category: "FRONTEND",
    discipline: "CLIENT-SIDE ARCHITECTURE",
    description:
      "Crafting responsive, performant, and accessible user interfaces with modern component frameworks and styling tools.",
    dossier:
      "Component-driven frontend design, client-side state management, responsive layouts, and performance optimization.",
    skills: ["React", "Next.js", "JavaScript", "TypeScript", "HTML", "CSS", "Tailwind CSS"],
  },
  {
    id: "backend",
    rank: "K",
    suit: "♥",
    suitName: "BACKEND",
    isRed: true,
    category: "BACKEND",
    discipline: "SERVER-SIDE & APIS",
    description:
      "Developing resilient RESTful APIs, modular backend services, scalable server-side business logic, and secure authentication.",
    dossier:
      "API design, microservices architecture, server-side data validation, error handling, and scalable backend workflows.",
    skills: ["Node.js", "Express.js", "Java", "Spring Boot"],
  },
  {
    id: "database",
    rank: "Q",
    suit: "♦",
    suitName: "DATABASE",
    isRed: true,
    category: "DATABASE & DATA",
    discipline: "DATA STORAGE & MODELS",
    description:
      "Designing relational schemas, document datastores, low-latency queries, and reliable data synchronization.",
    dossier:
      "Relational schema modeling, query optimization, indexing strategies, and cloud database management.",
    skills: ["SQL", "Supabase", "MongoDB"],
  },
  {
    id: "tools",
    rank: "J",
    suit: "♣",
    suitName: "TOOLING",
    isRed: false,
    category: "TOOLS & DEVELOPMENT",
    discipline: "DEV WORKFLOW & CI/CD",
    description:
      "Version control, automated builds, API documentation, dependency management, and efficient software engineering practices.",
    dossier:
      "Git branch workflows, automated build scripts, API documentation with Swagger, and modern dev tooling.",
    skills: ["Git", "GitHub", "REST APIs", "Swagger", "Maven / Gradle"],
  },
];

export interface Achievement {
  id: string;
  rank: string;
  suit: string;
  isRed: boolean;
  cardIndex: string;
  tag: string;
  title: string;
  mainStatement: string;
  supportingDetail: string;
  reverseTitle: string;
  reverseBody: string;
  attributes: { label: string; value: string }[];
  isFeatured?: boolean;
  imageUrl?: string;
}

export const ACHIEVEMENTS: Achievement[] = [
  {
    id: "aakar-govt",
    rank: "A",
    suit: "♠",
    isRed: false,
    cardIndex: "FEATURED RECOGNITION // A♠",
    tag: "GOVERNMENT PROGRAM SELECTION",
    title: "AAKAR — GOVERNMENT INNOVATION PROGRAM",
    mainStatement: "Presented Aakar to the Chief Minister of Delhi",
    supportingDetail:
      "Presented Aakar civic data project to the Chief Minister of Delhi and was selected for a 3-day government bootcamp in Delhi.",
    reverseTitle: "Selected for 3-Day Government Bootcamp in Delhi",
    reverseBody:
      "Presented the Aakar civic data and spatial platform to the Chief Minister of Delhi at the regional innovation forum. Evaluated on civic utility, spatial algorithmic processing, and actionable public dashboard design.",
    attributes: [
      { label: "ORGANIZATION", value: "Delhi Innovation Cell" },
      { label: "STATUS", value: "Invited Bootcamp Cohort" },
    ],
    isFeatured: true,
    imageUrl: "/images/cm-delhi-aakar.png",
  },
  {
    id: "nptel",
    rank: "K",
    suit: "♥",
    isRed: true,
    cardIndex: "ACADEMIC HONORS // K♥",
    tag: "NATIONAL EXAMINATION",
    title: "NPTEL",
    mainStatement: "Top 5%",
    supportingDetail:
      "Recognized among top performers in the NPTEL Java examination.",
    reverseTitle: "Top 5% Nationwide Performance",
    reverseBody:
      "Recognized among top performers nationwide in the NPTEL Java examination, validating core object-oriented programming discipline and algorithmic fundamentals.",
    attributes: [
      { label: "SUBJECT", value: "Java & Object-Oriented Programming" },
      { label: "RESULT", value: "Top 5% Nationwide Percentile" },
    ],
  },
  {
    id: "fibohack",
    rank: "Q",
    suit: "♦",
    isRed: true,
    cardIndex: "HACKATHON AWARD // Q♦",
    tag: "NATIONAL HACKATHON",
    title: "FIBOHACK 1.0",
    mainStatement: "Presentation Award",
    supportingDetail:
      "Received the presentation award at Fibohack 1.0.",
    reverseTitle: "Presentation Award Winner",
    reverseBody:
      "Received the Presentation Award at Fibohack 1.0, architecting and pitching the Smart Assignment Solver prototype under intense competitive sprint constraints.",
    attributes: [
      { label: "COMPETITION", value: "Fibohack 1.0 National" },
      { label: "AWARD", value: "Presentation Award" },
    ],
  },
];
