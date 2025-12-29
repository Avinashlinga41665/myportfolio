export default function AboutSection() {
  return (
<section
  id="about"
  className="bg-light px-6 md:px-20 lg:px-40 pt-32 pb-20"
>
  <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-start">


        {/* LEFT: Text Content */}
        <div>
          <p className="text-3xl md:text-4xl font-medium text-foreground mb-4">
            About me
          </p>

          <p className="text-muted text-lg leading-relaxed mb-5">
            I’m Avinash, a developer who enjoys turning ideas into clean,
            functional digital experiences.
          </p>

          <p className="text-muted leading-relaxed mb-5">
            I focus on building modern websites and applications that are
            simple to use, performant, and designed with real users in mind.
          </p>

          <p className="text-muted leading-relaxed">
            Along with web development, I’ve also built backend systems,
            desktop applications, and mobile apps — giving me a strong
            understanding of how complete products work end to end.
          </p>
        </div>

        {/* RIGHT: Capability Cards */}
        <div className="grid grid-cols-2 gap-6 max-w-lg">
          {[
            { title: "Web Applications", desc: "Modern, responsive web solutions" },
            { title: "Backend Systems", desc: "APIs, databases, and logic" },
            { title: "Desktop Applications", desc: "Windows-based internal tools" },
            { title: "Mobile Applications", desc: "Simple, functional mobile apps" },
          ].map((item) => (
            <div key={item.title} className="border rounded-2xl p-6 bg-primary hover:border-white/30 hover:shadow-xl transition">
              <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
              <p className="text-sm text-accent">{item.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
