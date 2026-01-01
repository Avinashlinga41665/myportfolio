"use client";
import { Project } from "@/data/projects";
import { ArrowLeft } from "lucide-react";
import { useRouter, usePathname } from "next/navigation";

type Props = {
  project: Project;
};
 

export default function WorkDetails({ project }: Props) {
   const router = useRouter();
  const pathname = usePathname();
  const goToSection = (id: string) => {
    if (pathname === "/") {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    } else {
      router.push(`/#${id}`);
    }
  };
  return (
    <section className="px-6 md:px-20 lg:px-40 pt-32 pb-20">
      <button onClick={() => goToSection("home")} className="text-lg pb-5 hover:cursor-pointer text-muted hover:text-foreground transition-colors"><ArrowLeft size={18} /></button>
      {/* Header */}
      <div className="mb-10">
        <h1 className="text-4xl font-semibold text-foreground mb-2">
          {project.title}
        </h1>
        <p className="text-muted">
          {project.status}
        </p>
      </div>

      {/* Images */}
    <div className="grid md:grid-cols-2 gap-6 mb-12 ">
         {project.images.slice(1, 3).map((img) => (
      <div key={img}className="relative h-60 rounded-xl overflow-hidden hover:z-10 hover:scale-125 transition-transform duration-300 ease-out">
      <img src={img} alt={project.title} className="w-full h-full object-cover"/>
    </div>
             ))}
    </div>

      {/* Description */}
      <p className="text-lg text-foreground mb-10 max-w-3xl">
        {project.description}
      </p>

      {/* Tech Stack */}
      <div className="mb-10">
        <h3 className="font-semibold text-lg mb-4">Tech Stack</h3>
        <div className="flex flex-wrap gap-3">
          {project.tech.map((t) => (
            <span
              key={t}
              className="px-4 py-1 rounded-full bg-black/10 text-sm"
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* Features */}
      <div>
        <h3 className="font-semibold text-lg mb-4">Features</h3>
        <ul className="list-disc pl-6 space-y-2 text-muted">
          {project.features.map((f) => (
            <li key={f}>{f}</li>
          ))}
        </ul>
      </div>
      {project.liveUrl && (
  <a href="https://demo-photography-website.vercel.app" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 mt-6 text-primary font-medium hover:underline">
  View Live Website
  <span aria-hidden>→</span>
</a>)}

    </section>
  );
}
