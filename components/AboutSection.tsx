import { Globe, Server, Monitor, Smartphone } from "lucide-react";

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
            I’m a full-stack software engineer with 3+ years of experience building reliable web, desktop, and mobile applications.
          </p>

          <p className="text-muted leading-relaxed mb-5">
          I primarily work with the .NET ecosystem and SQL to design scalable backend APIs, while also creating clean and responsive user interfaces.
          </p>

          <p className="text-muted leading-relaxed">
            I enjoy Building features end-to-end — from understanding the problem to delivering production-ready solutions. I learn fast through hands-on development, troubleshooting, and continuous experimentation, and I’m always focused on improving with every project I build.
          </p>
        </div>

        {/* RIGHT: Capability Cards */}
<div className="grid grid-cols-1 gap-5 max-w-md mx-auto md:max-w-lg md:mt-6">
          {[
            {
              title: "Web Applications",
              desc: "Modern, responsive web solutions",
              icon: Globe,
            },
            {
              title: "Backend Systems",
              desc: "APIs, databases, and logic",
              icon: Server,
            },
            {
              title: "Desktop Applications",
              desc: "Windows-based internal tools",
              icon: Monitor,
            },
            {
              title: "Mobile Applications",
              desc: "Simple, functional mobile apps",
              icon: Smartphone,
            },
          ].map(({ title, desc, icon: Icon }) => (
            <div
              key={title}
              className="rounded-2xl p-5 md:p-6 bg-white/90 border border-black/5 transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="flex items-start gap-4">
                {/* Icon */}
                <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 shrink-0">
                  <Icon className="w-5 h-5 text-primary" />
                </div>

                {/* Text */}
                <div>
                  <h3 className="font-semibold text-lg text-foreground leading-snug">
                    {title}
                  </h3>
                  <p className="text-sm text-muted leading-relaxed mt-1">
                    {desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
