// src/data/projects.ts
import { FaReact } from "react-icons/fa";

export type Project = {
  slug: string;
  title: string;
  shortDesc: string;
  description: string;
  tech: string[];
  features: string[];
  images: string[];
  status: "demo" | "archived" | "live";
  liveUrl?: string;
};

export const projects: Project[] = [
  {
    slug: "photography-website",
    title: "Photography Website",
    shortDesc:
      "A modern photography portfolio website built with React and a headless CMS.",
    description:
      "This project is a real-world photography portfolio website designed to showcase work, services, and studio information. It is built using React and Next.js with Tailwind CSS for a clean and responsive UI. Content management is handled through Hygraph (Headless CMS), allowing easy updates without code changes. The project focuses on performance, scalability, and a smooth user experience.",
    tech: ["React", "Next.js", "Tailwind CSS", "Hygraph CMS"],
    features: [
      "Fully responsive design for all screen sizes",
      "Dynamic content management using Hygraph CMS",
      "Optimized image galleries for photography showcase",
      "Clean UI with smooth navigation and layout",
    ],
    images: [
        "/projects/photography/project1.1.png",
        "/projects/photography/project1.2.png",
        "/projects/photography/project1.3.png",
   ],
    status: "live",
    liveUrl: "https://demo-photography-website.vercel.app",
  },
];
