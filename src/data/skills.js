import { Workflow, Linkedin, ShieldCheck, KeyRound, Lock } from "lucide-react";

/**
 * Brand items (`slug`) render the REAL logo live from the Simple Icons CDN
 * (https://cdn.simpleicons.org/<slug>/<hexColor>).
 * Concept items (no real logo exists) fall back to a lucide-react icon.
 */
export const SKILLS = [
  // Backend
  { id: "django", label: "Django", slug: "django", color: "1FA36B", category: "Backend" },
  { id: "drf", label: "Django REST Framework", Icon: Workflow, color: "38BDF8", category: "Backend" },
  { id: "dotnet", label: ".NET", slug: "dotnet", color: "512BD4", category: "Backend" },
  { id: "csharp", label: "C#", slug: "csharp", color: "239120", category: "Backend" },
  { id: "python", label: "Python", slug: "python", color: "3776AB", category: "Backend" },
  { id: "nestjs", label: "NestJS", slug: "nestjs", color: "E0234E", category: "Backend" },

  // Frontend
  { id: "react", label: "React", slug: "react", color: "61DAFB", category: "Frontend" },
  { id: "nextjs", label: "Next.js", slug: "nextdotjs", color: "FFFFFF", category: "Frontend" },
  { id: "typescript", label: "TypeScript", slug: "typescript", color: "3178C6", category: "Frontend" },
  { id: "js", label: "JavaScript", slug: "javascript", color: "F0DB4F", category: "Frontend" },
  { id: "html", label: "HTML5", slug: "html5", color: "E34F26", category: "Frontend" },
  { id: "css", label: "CSS", slug: "css3", color: "2965F1", category: "Frontend" },
  { id: "tailwind", label: "Tailwind CSS", slug: "tailwindcss", color: "38BDF8", category: "Frontend" },
  { id: "bootstrap", label: "Bootstrap", slug: "bootstrap", color: "7952B3", category: "Frontend" },
  { id: "flutter", label: "Flutter", slug: "flutter", color: "02569B", category: "Frontend" },
  { id: "dart", label: "Dart", slug: "dart", color: "0175C2", category: "Frontend" },

  // Databases
  { id: "postgresql", label: "PostgreSQL", slug: "postgresql", color: "4169E1", category: "Database" },
  { id: "mysql", label: "MySQL", slug: "mysql", color: "4479A1", category: "Database" },
  { id: "sqlite", label: "SQLite", slug: "sqlite", color: "3D9CD3", category: "Database" },

  // DevOps & Cloud
  { id: "docker", label: "Docker", slug: "docker", color: "2496ED", category: "Tools" },
  { id: "linux", label: "Linux", slug: "linux", color: "FCC624", category: "Tools" },
  { id: "git", label: "Git", slug: "git", color: "F05032", category: "Tools" },
  { id: "github", label: "GitHub", slug: "github", color: "E6E6E6", category: "Tools" },
  { id: "kubernetes", label: "Kubernetes", slug: "kubernetes", color: "326CE5", category: "Tools" },
  { id: "aws", label: "AWS", slug: "amazonaws", color: "FF9900", category: "Tools" },
  { id: "redhat", label: "Red Hat", slug: "redhat", color: "EE0000", category: "Tools" },
  { id: "stripe", label: "Stripe", slug: "stripe", color: "635BFF", category: "Tools" },

  // Security
  { id: "owasp", label: "OWASP Top 10", Icon: ShieldCheck, color: "E8734A", category: "Security" },
  { id: "jwt", label: "JWT", Icon: KeyRound, color: "F2C94C", category: "Security" },
  { id: "rbac", label: "RBAC", Icon: Lock, color: "8B7CF6", category: "Security" },
  { id: "rest", label: "REST APIs", Icon: Workflow, color: "38BDF8", category: "Security" },
];

export const NAV_LINKS = ["About", "Skills", "Works", "Experience", "Contact"];
export const SIGNATURE = "Mostafa Mohamed";
export const FULL_NAME = "Mostafa Mohamed Mahmoud";
export const ROLE = "Full-Stack Software Developer";

/** Replace with your real photo + CV file paths (e.g. /profile.jpg, /Mostafa-Mohamed-CV.pdf in /public) */
export const PROFILE_IMAGE = "/Profile.png";
export const CV_URL = "/Mostafa-Mohamed-CV.pdf";

export const SOCIALS = [
  { id: "github", label: "GitHub", slug: "github", color: "E6E6E6", href: "https://github.com/mostafamohamed521" },
  { id: "linkedin", label: "LinkedIn", Icon: Linkedin, color: "0A66C2", href: "https://linkedin.com/in/mostafamohamed92895" },
  { id: "gmail", label: "Gmail", slug: "gmail", color: "EA4335", href: "mailto:mostafamohamed92895@gmail.com" },
  { id: "whatsapp", label: "WhatsApp", slug: "whatsapp", color: "25D366", href: "https://wa.me/201065692895" },
];

/**
 * Skills grouped for the Skills scroll section — same items as SKILLS above.
 */
export const SKILL_GROUPS = [
  {
    id: "frontend",
    title: "Frontend",
    description: "Interfaces built with React and Next.js, styled with Tailwind and Bootstrap.",
    ids: ["react", "nextjs", "typescript", "js", "html", "css", "tailwind", "bootstrap", "flutter", "dart"],
  },
  {
    id: "backend",
    title: "Backend",
    description: "Django and .NET on the server side, with REST APIs as the connective layer.",
    ids: ["django", "drf", "dotnet", "csharp", "python", "nestjs"],
  },
  {
    id: "data",
    title: "Databases",
    description: "Where application state lives, across Postgres, MySQL, and SQLite.",
    ids: ["postgresql", "mysql", "sqlite"],
  },
  {
    id: "devops",
    title: "DevOps & Cloud",
    description: "Containers, version control, Linux, and cloud infrastructure.",
    ids: ["docker", "linux", "git", "github", "kubernetes", "aws", "redhat", "stripe"],
  },
  {
    id: "security",
    title: "Security",
    description: "Security-conscious engineering practices, applied across real projects.",
    ids: ["owasp", "jwt", "rbac", "rest"],
  },
];
