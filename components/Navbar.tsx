"use client";

import { useState } from "react";
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

  return (
        <>
    <nav className="fixed top-0 z-50 w-full bg-surface shadow">
      <div className="mx-auto max-w-3xl px-6 md:px-12">
        <div className="flex h-[68px] items-center justify-between">

          {/* LEFT: Logo + Name */}
          <button
            onClick={() => goToSection("home")}
            className="flex items-center gap-2 text-xl transition-transform duration-300 hover:scale-110"
          >
            <img
              src="/logo.png"
              className="w-10 h-10 md:w-12 md:h-12 object-contain"
              alt="CodeWeave Logo"
            />
            <span>CodeWeave</span>
          </button>

          {/* RIGHT: Navigation */}
          <ul className="hidden md:flex items-center gap-8 text-sm font-medium">
            <li>
              <button
                onClick={() => goToSection("home")}
                className="text-lg text-muted hover:text-foreground transition-colors"
              >
                Home
              </button>
            </li>
            <li>
              <button
                onClick={() => goToSection("about")}
                className="text-lg text-muted hover:text-foreground transition-colors"
              >
                About
              </button>
            </li>
            <li>
              <button
                onClick={() => goToSection("work")}
                className="text-lg text-muted hover:text-foreground transition-colors"
              >
                Work
              </button>
            </li>
            <li>
              <button
                onClick={() => router.push("/resume")}
                className="text-lg text-primary hover:underline transition-colors"
              >
                Resume
              </button>
            </li>
          </ul>
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
          <button onClick={() => goToSection("home")} className="text-lg text-muted hover:text-foreground transition-colors">Home</button>
          <button onClick={() => goToSection("about")} className="text-lg text-muted hover:text-foreground transition-colors">About</button>
          <button onClick={() => goToSection("work")} className="text-lg text-muted hover:text-foreground transition-colors">Work</button>
          <button onClick={() => router.push("/resume")} className="text-lg text-primary hover:underline transition-colors">Resume</button>
        </nav>
      </aside>
    </>
  );
}
