import { Project } from "@/app/types";

const projects: Project[] = [
  {
    image: "./covers/Distribution.webp",
    category: "Distribution",
    name: "Distribution Optimization",
    description:
      "Redesigned route planning using Google My Maps, improving sales visit effectiveness by +20% and achieving 100% AR collection via invoice audits.",
    stack: ["Route Planning", "Sales Operations", "Invoice Management"],
    date: "2024",
    show: true,
    github: "https://github.com/Karanaproject/portfolio",
  },
  {
    image: "./covers/b2b.webp",
    category: "Distribution",
    name: "Satellite Office Development",
    description:
      "Built operational foundation for new satellite offices, supported onboarding, and secured B2B industrial canteen partnerships for Bola Deli products.",
    stack: ["Operations", "B2B Partnerships", "Onboarding"],
    date: "2024",
    show: true,
    github: "https://github.com/Karanaproject/portfolio",
  },
  {
    image: "./covers/dm.webp",
    category: "Optimization",
    name: "Rapid Performance Improvement",
    description:
      "As Acting Direct Manager, boosted snacking sales to IDR 1B/month and achieved national best NPD activation.",
    stack: ["Sales Management", "Performance Improvement", "NPD Activation"],
    date: "2023",
    show: true,
    github: "https://github.com/Karanaproject/portfolio",
  },
  {
    image: "./covers/food.webp",
    category: "Sales",
    name: "Sales Transformation",
    description:
      "Migrated sales system to mass-market strategy, stabilizing logistics with outbound tracking, and doubling product sales.",
    stack: ["Sales Strategy", "Logistics", "Market Expansion"],
    date: "2021-2022",
    show: true,
    github: "https://github.com/Karanaproject/portfolio",
  },
];

export default projects;
