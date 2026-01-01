"use client";

import { useRouter } from "next/navigation";
import { projects } from "@/data/projects";

export default function WorkSection() {
  const router = useRouter();

  return (
    <section
      id="work"
      className="bg-light px-6 md:px-20 lg:px-40 pt-32 pb-20"
    >
      <div className="max-w-6xl mx-auto">
        {/* SECTION HEADER */}
        <div className="max-w-xl mb-16">
          <p className="text-3xl md:text-4xl font-medium text-foreground mb-2">
            Work
          </p>
          <p className="text-muted leading-relaxed">
            A selection of projects and applications I’ve built,
            including demo and personal work.
          </p>
        </div>

        {/* WORK GRID */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.slug}
              onClick={() => router.push(`/work/${project.slug}`)}
              className="rounded-2xl p-6 bg-surface border border-theme transition hover:-translate-y-1 hover:shadow-xl cursor-pointer"
            >
              {/* Image / Preview */}
              <div className="h-40 rounded-xl bg-black/10 mb-4 flex items-center justify-center text-sm text-muted">
                <img src={project.images[0]} alt={project.title} className="w-full h-full object-cover"/>
              </div>

              <h3 className="font-semibold text-lg text-foreground mb-2">
                {project.title}
              </h3>

              <p className="text-sm text-muted leading-relaxed">
                {project.shortDesc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
