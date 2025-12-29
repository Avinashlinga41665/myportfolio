"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faInstagram,faFacebook,faLinkedin,faYoutube} from "@fortawesome/free-brands-svg-icons";

export default function HomeSection() {
  return (
<section
  id="home"
  className="bg-light px-6 md:px-20 lg:px-40 pt-50 pb-20"
>
  <div className="max-w-6xl mx-auto">
     <p className="text-xl font-semibold text-accent mb-1">
        Hello,
      </p>

      <p className="text-3xl md:text-4xl font-medium text-foreground mb-1">
        I'm <span className="font-bold">Avinash</span>
      </p>

      <p className="text-lg font-medium text-muted mb-2">
        Designing clean, modern websites that turn ideas into experiences.
      <br/>Built for performance, clarity, and real-world impact.
      </p>

      <div className="pt-10 flex items-center gap-10">
        <button className="px-10 py-3 bg-primary text-white rounded-3xl hover:text-foreground  transition font-medium">
          Get Your Website
        </button>
        <button className="px-10 py-3 bg-primary text-white rounded-3xl hover:text-foreground transition font-medium">
          Get Your Project
        </button>

        <div className="flex gap-6 text-2xl text-muted">
          <a href="#" className="hover:text-foreground transition">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="#" className="hover:text-foreground transition">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a href="#" className="hover:text-foreground transition">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href="#" className="hover:text-foreground transition">
            <FontAwesomeIcon icon={faYoutube} />
          </a>
        </div>
      </div>
      </div>
    </section>
  );
}
