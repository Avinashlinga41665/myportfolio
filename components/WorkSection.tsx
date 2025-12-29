export default function WorkSection() {
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

          {[
            {
              title: "Business Website (MVC)",
              desc: "Full-stack MVC website with authentication and database integration.",
            },
            {
              title: "Photography Portfolio",
              desc: "Modern portfolio website with galleries and pricing sections.",
            },
            {
              title: "Desktop Application",
              desc: "Windows-based desktop tool for internal workflows.",
            },
            {
              title: "Mobile Application",
              desc: "Simple mobile app built for real-world usage.",
            },
          ].map((project) => (
            <div
              key={project.title}
              className="
                border border-white/10 rounded-2xl p-6 bg-primary
                transition-all duration-300
                hover:scale-[1.03]
                hover:border-white/30
              "
            >
              {/* Image placeholder */}
              <div className="h-40 rounded-xl bg-black/30 mb-4" />

              <h3 className="font-semibold text-lg text-foreground mb-2">
                {project.title}
              </h3>
              <p className="text-sm text-accent leading-relaxed">
                {project.desc}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
