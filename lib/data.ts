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
