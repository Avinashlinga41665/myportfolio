"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebook,
  faLinkedin,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <footer className="bg-white/80 backdrop-blur border-t border-black/5">
      <div className="max-w-6xl mx-auto px-6 md:px-20 lg:px-40 py-8">

        <div className="flex flex-col items-center gap-4">

          {/* Social Links */}
          <div className="flex gap-6 text-xl text-muted">
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

          {/* Copyright */}
          <p className="text-sm text-muted">
            © {new Date().getFullYear()} Avinash. All rights reserved.
          </p>

        </div>
      </div>
    </footer>
  );
}
