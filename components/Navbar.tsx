"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { useRouter, usePathname } from "next/navigation";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const goToSection = (id: string) => {
    if (pathname === "/") {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    } else {
      router.push(`/#${id}`);
    }
  };
  const [active, setActive] = useState<string>("home");
   const linkClass = (id: string) =>
  `relative text-lg transition-all duration-300 ${
    active === id
      ? "text-foreground hover:scale-105 font-semibold before:content-['{'] after:content-['}'] before:mr-1 after:ml-1 after:bg-primary"
      : "text-muted hover:text-foreground hover:scale-105"
  }`;

useEffect(() => {
  const sections = ["home", "about", "work", "contact"];

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActive(entry.target.id);
        }
      });
    },
    {
      rootMargin: "-40% 0px -40% 0px", // center of viewport
    }
  );
 

  sections.forEach((id) => {
    const el = document.getElementById(id);
    if (el) observer.observe(el);
  });

  return () => observer.disconnect();
}, []);


  return (
        <>
    <nav className="fixed top-0 z-50 w-full h-20 bg-surface shadow backdrop-blur-md bg-white/75">
      <div className="mx-auto max-w-3xl px-6 md:px-12">
        <div className="flex h-[68px] items-center justify-between">

          {/* LEFT: Logo + Name */}
          <button onClick={() => goToSection("home")} className="flex items-center gap-2 text-xl pr-10 transition-transform duration-300 hover:scale-105">
            <img
              src="/logo.png"
              className="w-10 h-10 md:w-12 md:h-12 object-contain"
              alt="CodeWeave Logo"
            />
            <span>CodeWeave</span>
          </button>

          {/* RIGHT: Navigation */}
          <ul className="hidden md:flex pl-20 items-center gap-8 text-sm font-medium">
            <li>
              <button onClick={() => goToSection("home")} className={linkClass("home")}>
                Home
              </button>
            </li>
            <li>
              <button onClick={() => goToSection("about")} className={linkClass("about")}>
                About
              </button>
            </li>
            <li>
              <button onClick={() => goToSection("work")} className={linkClass("work")}>
                Work
              </button>
            </li>
          </ul>
          <div className="hidden md:flex items-center gap-4 whitespace-nowrap">
            <a href="/resume/Avinash_Linga_Software_Engineer.pdf"target="_blank" rel="noopener noreferrer" className="pl-10 px-4 py-2 rounded-lg bg-primary text-primary hover:opacity-90 hover:scale-105">View Resume</a>       
            <button onClick={() => goToSection("contact")} className="px-4 py-2 rounded-lg bg-primary text-primary hover:opacity-90 hover:scale-105">Let’s Talk</button>
          </div>
           {/* Mobile Hamburger */}
            <button
              className="md:hidden"
              onClick={() => setOpen(true)}
            >
              <Menu size={26} />
            </button>

        </div>
      </div>
    </nav>
     <div className={`fixed inset-0 z-40 bg-black/40 transition-opacity ${ open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`} onClick={() => setOpen(false)}/>

      <aside className={`fixed top-0 right-0 z-50 h-full w-64 bg-surface shadow-lg transform transition-transform duration-300 ${open ? "translate-x-0" : "translate-x-full"}`}>
       <div className="flex items-center justify-between p-4 border-b">
          <span className="font-semibold">Menu</span>
          <button onClick={() => setOpen(false)}>
            <X size={22} />
          </button>
        </div>

        <nav className="flex flex-col gap-4 p-6 text-lg">
          <button onClick={() => {goToSection("home"); setOpen(false);}} className={`text-lg transition-colors ${active === "home" ? "text-foreground font-semibold" : "text-muted"}`}>Home</button>
          <button onClick={() => {goToSection("about"); setOpen(false);}} className={`text-lg transition-colors ${active === "about" ? "text-foreground font-semibold" : "text-muted"}`}>About</button>
          <button onClick={() => {goToSection("work"); setOpen(false);}} className={`text-lg transition-colors ${active === "work" ? "text-foreground font-semibold" : "text-muted"}`}>Work</button>
        <a href="/resume/Avinash_Linga_Software_Engineer.pdf" target="_blank" rel="noopener noreferrer"onClick={() => setOpen(false)}className="text-lg text-muted hover:text-primary hover:underline transition-colors">Resume</a>       
       </nav>
      </aside>
    </>
  );
}
