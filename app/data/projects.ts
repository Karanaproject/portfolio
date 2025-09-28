import { Project } from "@/app/types";

const projects: Project[] = [
  {
    image: "./covers/project-cover.webp",
    category: "achievement",
    name: "Boosted Food Division Sales",
    description:
      "Increased Food Division sales from IDR 15M/year to IDR 25–30M/month through strategic territory reallocation and sales execution.",
    stack: ["FMCG", "Sales Strategy", "Territory Planning"],
    date: "2024",
    show: true,
  },
  {
    image: "./covers/task-cover.webp",
    category: "achievement",
    name: "Distribution Optimization",
    description:
      "Redesigned route planning across GT, MT, and Horeka channels to improve efficiency and reduce cost-to-serve.",
    stack: ["Distribution", "Route Optimization", "Channel Management"],
    date: "2023",
    show: true,
  },
  {
    image: "./covers/flexbox-cover.webp",
    category: "achievement",
    name: "B2B Collaboration with BPOM & KPU",
    description:
      "Built institutional collaborations for Holisticare Ester C procurement, ensuring compliance and impactful partnerships.",
    stack: ["B2B", "Stakeholder Management"],
    date: "2022",
    show: true,
  },
  {
    image: "./covers/blackpeach-cover.webp",
    category: "achievement",
    name: "Sales Operations Leadership",
    description:
      "Led sales team across multiple channels, aligning field execution with company growth strategy and driving operational excellence.",
    stack: ["Leadership", "Sales Operations", "Team Management"],
    date: "2021",
    show: true,
  },
];

export default projects;
