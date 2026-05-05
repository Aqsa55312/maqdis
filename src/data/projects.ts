export interface Project {
  title: string;
  description: string;
  tech: string[];
  image: string;
  color: string;
}

export const projects: Project[] = [
  {
    title: "NEXTLEVEL Landing Page",
    description: "Landing page modern dengan animasi glassmorphism dan dark theme.",
    tech: ["Next.js", "Tailwind CSS", "TypeScript"],
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&q=80",
    color: "bg-blue-600"
  },
  {
    title: "HAMIM Dashboard",
    description: "Dashboard admin untuk aplikasi hafalan Al-Quran dengan chart interaktif.",
    tech: ["Next.js", "Recharts", "Tailwind CSS"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80",
    color: "bg-orange-500"
  },
  {
    title: "ANTIGRAVITY Website",
    description: "Website futuristik dengan efek glow, floating cards, dan glassmorphism.",
    tech: ["Next.js", "Framer Motion", "Tailwind CSS"],
    image: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=600&q=80",
    color: "bg-violet-600"
  },
  {
    title: "E-Commerce Platform",
    description: "Platform belanja online dengan fitur cart, checkout, dan payment gateway.",
    tech: ["Next.js", "Stripe", "Prisma"],
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&q=80",
    color: "bg-green-600"
  },
  {
    title: "Blog & CMS",
    description: "Platform blog dengan CMS headless, SEO optimal, dan performa tinggi.",
    tech: ["Next.js", "Sanity", "Tailwind CSS"],
    image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=600&q=80",
    color: "bg-pink-600"
  },
  {
    title: "Portfolio Website",
    description: "Website portofolio personal dengan animasi smooth dan desain minimalis.",
    tech: ["Next.js", "GSAP", "Tailwind CSS"],
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80",
    color: "bg-indigo-600"
  }
];
