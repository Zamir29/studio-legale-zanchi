"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur border-b border-gray-200">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <Link
          href="/"
          className="font-semibold text-gray-900 text-sm tracking-tight"
        >
          Studio Zanchi
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6 text-sm text-gray-600">
          <Link href="/" className="hover:text-black">
            Home
          </Link>
          <Link href="/servizi" className="hover:text-black">
            Servizi
          </Link>
          <Link href="/chi-siamo" className="hover:text-black">
            Chi Siamo
          </Link>
          <Link href="/blog" className="hover:text-black">
            Blog
          </Link>
          <Link href="/contatti" className="hover:text-black">
            Contatti
          </Link>
        </nav>

        {/* CTA Button (Desktop) */}
        <div className="hidden md:inline-flex">
          <Button asChild variant="outline" size="sm">
            <Link href="/contatti">Prenota Consulenza</Link>
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <nav className="flex flex-col space-y-2 p-4 text-sm text-gray-700">
            <Link href="/" onClick={toggleMenu}>
              Home
            </Link>
            <Link href="/servizi" onClick={toggleMenu}>
              Servizi
            </Link>
            <Link href="/chi-siamo" onClick={toggleMenu}>
              Chi Siamo
            </Link>
            <Link href="/blog" onClick={toggleMenu}>
              Blog
            </Link>
            <Link href="/contatti" onClick={toggleMenu}>
              Contatti
            </Link>
            <Button asChild variant="outline" className="mt-2">
              <Link href="/contatti" onClick={toggleMenu}>
                Prenota Consulenza
              </Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
