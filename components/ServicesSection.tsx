import {User,Briefcase, Globe, Server, Monitor, Smartphone,} from "lucide-react";

export default function ServicesSection() {
  return (
    <section id="services" className="bg-light px-6 md:px-20 lg:px-40 pt-32 pb-20">
      <div className="max-w-6xl mx-auto">

        {/* SECTION TITLE */}
        <div className="max-w-xl mb-16">
          <p className="text-3xl md:text-4xl font-medium text-foreground mb-2">
            Services
          </p>
          <p className="text-muted leading-relaxed">
            I offer a range of development services focused on building
            clean, reliable, and user-friendly digital solutions.
          </p>
        </div>

        {/* SERVICES GRID */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {[
            {
              title: "Personal Websites",
              desc: "Modern personal and portfolio websites with clean design and smooth interactions.",
              icon: User,
            },
            {
              title: "Business Websites",
              desc: "Professional websites for small businesses and startups.",
              icon: Briefcase,
            },
            {
              title: "Web Applications",
              desc: "Dynamic web applications built for performance and usability.",
              icon: Globe,
            },
            {
              title: "Backend Development",
              desc: "APIs, databases, and server-side logic to power applications.",
              icon: Server,
            },
            {
              title: "Desktop Applications",
              desc: "Windows-based desktop tools for internal workflows.",
              icon: Monitor,
            },
            {
              title: "Mobile Applications",
              desc: "Simple and functional mobile apps designed for real use cases.",
              icon: Smartphone,
            },
          ].map(({title, desc, icon: Icon}) => (
            <div key={title}className="rounded-2xl p-6 bg-surface border border-theme transition hover:-translate-y-1 hover:shadow-xl">
             <div className="mb-4 flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10"> <Icon className="w-5 h-5 text-primary" /> </div>
              <h3 className="font-semibold text-lg text-foreground mb-2">{title}</h3>
              <p className="text-sm text-accent leading-relaxed">{desc}</p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
