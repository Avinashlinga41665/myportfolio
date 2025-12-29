export default function ServicesSection() {
  return (
    <section
      id="services"
      className="bg-light px-6 md:px-20 lg:px-40 pt-32 pb-20"
    >
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
            },
            {
              title: "Business Websites",
              desc: "Professional websites for small businesses and startups.",
            },
            {
              title: "Web Applications",
              desc: "Dynamic web applications built for performance and usability.",
            },
            {
              title: "Backend Development",
              desc: "APIs, databases, and server-side logic to power applications.",
            },
            {
              title: "Desktop Applications",
              desc: "Windows-based desktop tools for internal workflows.",
            },
            {
              title: "Mobile Applications",
              desc: "Simple and functional mobile apps designed for real use cases.",
            },
          ].map((service) => (
            <div
              key={service.title}
              className="
                border border-white/10 rounded-2xl p-6 bg-primary
                transition-all duration-300
                hover:scale-[1.03]
                hover:border-white/30
              "
            >
              <h3 className="font-semibold text-lg text-foreground mb-2">
                {service.title}
              </h3>
              <p className="text-sm text-accent leading-relaxed">
                {service.desc}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
