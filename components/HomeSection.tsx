"use client";

export default function HomeSection() {
  return (
    <section id="home" className="relative bg-body overflow-hidden gap-10 pt-24 pb-16 lg:pt-32 lg:pb-24 lg:min-h-[90vh]">
      <div className="mx-auto max-w-7xl grid lg:grid-cols-[1fr_1fr] gap-12 px-6 md:px-12 lg:px-20 items-center">
        {/* LEFT: TEXT */}
        <div className="max-w-xl">
          <p className="text-md font-medium text-muted mb-2">
            Hi, I’m
          </p>

          <h1 className="text-4xl md:text-5xl font-semibold text-foreground mb-3">
            Avinash
          </h1>

          <h2 className="text-xl md:text-2xl font-medium text-foreground mb-4">
            Software Engineer
          </h2>

          <p className="text-base md:text-lg text-muted leading-relaxed">
            I build clean, scalable applications with a strong focus on
            performance, usability, and maintainable design.
          </p>

          <div className="mt-10 flex items-center gap-6">
            <a href="#work" className="inline-flex items-center justify-center rounded-lg bg-[var(--primary)] px-6 py-3 text-white font-medium shadow-sm hover:bg-[#4F46E5]/90 transition">
              View Work
            </a>

            <a href="#resume" className="text-foreground font-medium hover:text-primary transition">
              Resume →
            </a>
          </div>
        </div>

       {/* RIGHT: IMAGE */}
<div className="relative hidden lg:block pl-10">
<div className="absolute right-[-10vw] h-full w-[50vw] flex items-center justify-center">
    <img
      src="/content.png"
      alt="Avinash"
      className="
        w-full
        h-[85vh]
        object-contain
        translate-y-10
      "
      style={{
        filter: "drop-shadow(0 30px 40px rgba(0,0,0,0.18))",
      }}
    />
  </div>

</div>


      </div>

    </section>
    
  );
}
