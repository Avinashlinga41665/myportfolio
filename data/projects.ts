// src/data/projects.ts

export type Project = {
  slug: string;
  title: string;
  shortDesc: string;
  description: string;
  tech: string[];
  features: string[];
  images: string[];
  status: "demo" | "archived" | "live";
};

export const projects: Project[] = [
  {
    slug: "business-website",
    title: "Business Website (MVC)",
    shortDesc:
      "Full-stack MVC demo website with authentication and database integration.",
    description:
      "This demo project was built to simulate a real-world business website using ASP.NET MVC, focusing on authentication, database integration, and clean MVC architecture.",
    tech: ["ASP.NET MVC", "SQL Server", "Bootstrap", "Razor"],
    features: [
      "Authentication & Authorization",
      "Role-based dashboards",
      "CRUD operations",
      "MVC layered architecture",
    ],
    images: [
      "/projects/mvc-1.png",
      "/projects/mvc-2.png",
    ],
    status: "demo",
  },
];
