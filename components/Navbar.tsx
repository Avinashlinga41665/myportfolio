"use client";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur border-b border-black/5">
      <div className="max-w-6xl mx-auto px-6 md:px-20 lg:px-40">
        <div className="flex items-center justify-between h-16">

          {/* LEFT: Logo / Name */}
          <a
            href="#home"
            className="text-lg font-semibold text-foreground"
          >
            Avinash
          </a>

          {/* CENTER: Links */}
          <ul className="hidden md:flex items-center gap-8 text-sm text-muted">
            <li>
              <a href="#home" className="hover:text-foreground transition">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-foreground transition">
                About
              </a>
            </li>
            <li>
              <a href="#services" className="hover:text-foreground transition">
                Services
              </a>
            </li>
            <li>
              <a href="#work" className="hover:text-foreground transition">
                Work
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-foreground transition">
                Contact
              </a>
            </li>
          </ul>

          {/* RIGHT: CTA */}
          <a
            href="#contact"
            className="hidden md:inline-flex px-6 py-2 bg-primary text-black rounded-3xl
                       font-medium hover:opacity-90 transition"
          >
            Get in touch
          </a>
        </div>
      </div>
    </nav>
  );
}
