// =============================================================
// EDIT THIS FILE TO FILL IN YOUR PORTFOLIO CONTENT
// This is the single source of truth used across the site.
// =============================================================

export const SITE = {
  name: "Ganesh Nandi",
  role: "Full-Stack Developer",
  tagline: "I build fast, accessible, and scalable products for the web.",
  shortBio:
    "I'm a full-stack developer who loves turning complex problems into simple, elegant interfaces. I care about performance, clean code, and the small details that make products feel great to use.",
  longBio: `Write 2-3 paragraphs here about your journey, what drives you,
and what kind of work excites you. Mention your background, how you got
into development, and what you're focused on now.`,
  location: "Bengaluru, India", // change to your city
  email: "your@email.com",
  resumeUrl: "/resume.pdf", // place your resume in /public
  availability: "Open to freelance & full-time opportunities",
  url: "https://ganesh-nandi.vercel.app", // your production URL — used for SEO/canonical/sitemap
};

export const SOCIALS = [
  { label: "GitHub", url: "https://github.com/yourusername" },
  { label: "LinkedIn", url: "https://linkedin.com/in/yourusername" },
  { label: "Twitter / X", url: "https://x.com/yourusername" },
  { label: "Email", url: "mailto:your@email.com" },
];

// Big numbers shown in the hero/stats section
export const STATS = [
  { label: "Years of Experience", value: "2+" },
  { label: "Projects Shipped", value: "15+" },
  { label: "Technologies", value: "20+" },
  { label: "Open Source Contributions", value: "10+" },
];

// Tech stack — used in the marquee/grid section
export const STACK = [
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Tailwind CSS",
  "PostgreSQL",
  "MongoDB",
  "Express",
  "Docker",
  "AWS",
  "Git",
  "Framer Motion",
];

// Featured projects — shown on homepage and /projects
export type Project = {
  slug: string;
  title: string;
  description: string;
  longDescription?: string;
  tags: string[];
  image: string; // path under /public
  liveUrl?: string;
  githubUrl?: string;
  year: string;
  featured: boolean;
  // Case study fields (for /projects/[slug])
  problem?: string;
  approach?: string;
  outcome?: string;
};

export const PROJECTS: Project[] = [
  {
    slug: "project-one",
    title: "Project One",
    description: "A short, punchy one-liner describing what this project does and the impact it had.",
    longDescription: "A longer description for the case study page — explain the context, your role, and the tech used.",
    tags: ["Next.js", "TypeScript", "PostgreSQL"],
    image: "/projects/project-one.jpg",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/yourusername/project-one",
    year: "2025",
    featured: true,
    problem: "What problem were you solving? Who was it for?",
    approach: "How did you solve it? What technical decisions stand out?",
    outcome: "What was the result? Metrics, feedback, or learnings.",
  },
  {
    slug: "project-two",
    title: "Project Two",
    description: "Another project description — keep it specific and outcome-focused.",
    tags: ["React", "Node.js", "MongoDB"],
    image: "/projects/project-two.jpg",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/yourusername/project-two",
    year: "2024",
    featured: true,
  },
  {
    slug: "project-three",
    title: "Project Three",
    description: "A third project — replace with your real work.",
    tags: ["Next.js", "Tailwind", "Stripe"],
    image: "/projects/project-three.jpg",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/yourusername/project-three",
    year: "2024",
    featured: true,
  },
  {
    slug: "project-four",
    title: "Project Four",
    description: "A fourth project for the full /projects grid.",
    tags: ["React Native", "Firebase"],
    image: "/projects/project-four.jpg",
    year: "2023",
    featured: false,
  },
];

// Work experience — used on /experience and homepage preview
export type ExperienceItem = {
  company: string;
  role: string;
  period: string;
  description: string;
  url?: string;
};

export const EXPERIENCE: ExperienceItem[] = [
  {
    company: "Company Name",
    role: "Full-Stack Developer",
    period: "Jan 2024 — Present",
    description:
      "Describe your responsibilities and key achievements. Use specific, measurable outcomes where possible.",
    url: "https://example.com",
  },
  {
    company: "Previous Company",
    role: "Frontend Developer Intern",
    period: "Jun 2023 — Dec 2023",
    description:
      "Describe what you built, technologies used, and impact delivered.",
    url: "https://example.com",
  },
];

// Optional: blog/thoughts section (great for SEO + AEO)
export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
};

export const POSTS: Post[] = [
  {
    slug: "my-first-post",
    title: "Title of your first post",
    excerpt: "A short excerpt summarizing the post — this also feeds SEO meta descriptions.",
    date: "2026-01-15",
    readTime: "5 min read",
  },
];

// Freelance work — showcased on /work
export type FreelanceWork = {
  title: string;
  description: string;
  url: string;
  image: string;
  category: string;
};

export const FREELANCE_WORK: FreelanceWork[] = [
  {
    title: "Atmasakshi Foundation",
    description:
      "Non-profit organization website focused on education, skill development, women empowerment, and community service.",
    url: "https://www.atmasakshifoundation.org/",
    image: "/work/atmasakshi-foundation.png",
    category: "Non-Profit",
  },
  {
    title: "Kalarava",
    description:
      "Annual cultural and academic fest website for KLE Society's College — showcasing events across arts, culture, and tech.",
    url: "https://www.kalarava.xyz/",
    image: "/work/kalarava.png",
    category: "Events",
  },
  {
    title: "OUTFIT®",
    description:
      "Modern e-commerce store for custom signature apparel celebrating design-themed clothing and creative culture.",
    url: "https://outfit-inky.vercel.app/",
    image: "/work/outfit.png",
    category: "E-Commerce",
  },
  {
    title: "GROWD Agency",
    description:
      "Creative digital agency specializing in brand strategy, web design, development, and digital marketing.",
    url: "https://growd-agency.vercel.app/",
    image: "/work/growd-agency.png",
    category: "Agency",
  },
  {
    title: "NeuralFlow AI",
    description:
      "AI agency website — custom AI agents and workflow automations to eliminate manual tasks and scale operations.",
    url: "https://neuralflow-ai-blue.vercel.app/",
    image: "/work/neuralflow-ai.png",
    category: "AI / SaaS",
  },
  {
    title: "TaskFlow AI",
    description:
      "Intelligent workspace for high-performance teams with AI task creation, workflow automation, and real-time analytics.",
    url: "https://task-flow-ai-2.vercel.app/",
    image: "/work/taskflow-ai-2.png",
    category: "AI / SaaS",
  },
  {
    title: "TaskFlow AI v2",
    description:
      "Redesigned version of TaskFlow AI — project management platform with AI-driven scoping, capacity-based assignment, and collaboration tools.",
    url: "https://task-flow-ai-nine.vercel.app/",
    image: "/work/taskflow-ai.png",
    category: "AI / SaaS",
  },
  {
    title: "Aurelia Estates",
    description:
      "Luxury real estate platform showcasing premium properties in Beverly Hills, Malibu, and Aspen with immersive property tours.",
    url: "https://aurelia-estates-three.vercel.app/",
    image: "/work/aurelia-estates.png",
    category: "Real Estate",
  },
  {
    title: "Valentine",
    description:
      "Interactive Valentine's Day web experience with playful animations and floating hearts — a fun digital love letter.",
    url: "https://valentine-ten-drab.vercel.app/",
    image: "/work/valentine.png",
    category: "Creative",
  },
  {
    title: "Obsidian",
    description:
      "Premium brand website with dark, sophisticated aesthetics — sleek design and immersive visual storytelling.",
    url: "https://obsidian-co.vercel.app/",
    image: "/work/obsidian.png",
    category: "Branding",
  },
  {
    title: "Hot Coffee",
    description:
      "Artisan coffee shop website with warm aesthetics, menu showcase, and an inviting digital experience.",
    url: "https://hotcoffee-five.vercel.app/",
    image: "/work/hotcoffee.png",
    category: "Food & Beverage",
  },
  {
    title: "Revoxa",
    description:
      "Modern tech/startup landing page with bold design, dynamic animations, and conversion-focused layout.",
    url: "https://revoxa2-0.vercel.app/",
    image: "/work/revoxa.png",
    category: "Startup",
  },
];
