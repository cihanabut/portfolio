"use client";

import { Mail, Github, Linkedin, Heart } from "lucide-react";
import { usePathname } from "next/navigation";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const pathname = usePathname();

  // Style conditionnel pour la page d'accueil
  const footerClass =
    pathname === "/"
      ? "py-3 bg-[#111] border-t border-[#222]"
      : "py-6 bg-[#111] border-t border-[#222]";

  return (
    <footer className={footerClass}>
      <div className="container px-4 mx-auto">
        <div className="flex flex-col items-center justify-between gap-2 md:flex-row">
          <div className="text-center md:text-left">
            <p className="text-xs text-gray-400 flex items-center justify-center md:justify-start">
              &copy; {currentYear} Cihan Abut.
              <span className="mx-1 hidden md:inline">•</span>
              <span className="flex items-center">
                Fait avec <Heart className="h-3 w-3 mx-1 text-[#f97316]" />
                {pathname !== "/" && "et Next.js"}
              </span>
            </p>
          </div>
          <div className="flex items-center space-x-6">
            <a
              href="mailto:cihan.abut@gmail.com"
              className="text-gray-400 hover:text-[#f97316] transition-colors group"
              aria-label="Email"
            >
              <Mail className="w-4 h-4 transition-transform duration-300 group-hover:scale-110" />
            </a>
            <a
              href="https://linkedin.com/in/cihanabut"
              className="text-gray-400 hover:text-[#f97316] transition-colors group"
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="w-4 h-4 transition-transform duration-300 group-hover:scale-110" />
            </a>
            <a
              href="https://github.com/cihanabut"
              className="text-gray-400 hover:text-[#f97316] transition-colors group"
              aria-label="GitHub"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="w-4 h-4 transition-transform duration-300 group-hover:scale-110" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
