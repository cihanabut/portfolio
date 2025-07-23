"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-[#0a0a0a]/90 backdrop-blur-sm" : "bg-transparent"
      }`}
    >
      <div className="container max-w-5xl px-4 mx-auto">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center">
            <img
              src="/images/cat-pixel.png"
              alt="Accueil"
              className="h-10 w-auto transition-transform duration-300 hover:scale-110 hover:rotate-6"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link
              href="/projects"
              className="text-gray-300 hover:text-[#f97316] transition-colors"
            >
              Projets
            </Link>
            <Link
              href="/about"
              className="text-gray-300 hover:text-[#f97316] transition-colors"
            >
              À propos
            </Link>
            <a
              href="/cv-cihan-abut.pdf"
              download
              className="text-gray-300 hover:text-[#f97316] transition-colors"
            >
              Resume
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 z-40 bg-[#0a0a0a]">
          <div className="flex justify-end p-4">
            <button
              onClick={() => setIsMenuOpen(false)}
              aria-label="Fermer le menu"
            >
              <X className="w-6 h-6 text-white" />
            </button>
          </div>
          <nav className="flex flex-col items-center justify-center h-full space-y-8">
            <Link
              href="/"
              className="text-2xl text-white hover:text-[#f97316] transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Accueil
            </Link>
            <Link
              href="/projects"
              className="text-2xl text-white hover:text-[#f97316] transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Projets
            </Link>
            <Link
              href="/about"
              className="text-2xl text-white hover:text-[#f97316] transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              À propos
            </Link>
            <a
              href="/CihanAbutCV.pdf"
              download
              className="text-2xl text-white hover:text-[#f97316] transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              CV
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
