"use client";

import Link from "next/link";
import { Scale, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Scale className="h-6 w-6 text-primary" />
          <span className="font-semibold tracking-tight">
            Studio Legale Zanchi
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/" className="text-sm font-medium hover:text-primary">
            Home
          </Link>
          <Link
            href="/servizi"
            className="text-sm font-medium hover:text-primary"
          >
            Servizi
          </Link>
          <Link
            href="/chi-siamo"
            className="text-sm font-medium hover:text-primary"
          >
            Chi Siamo
          </Link>
          <Link href="/blog" className="text-sm font-medium hover:text-primary">
            Blog
          </Link>
          <Link
            href="/contatti"
            className="text-sm font-medium hover:text-primary"
          >
            Contatti
          </Link>
        </nav>

        {/* Contact Button (Desktop) */}
        <Button asChild className="hidden md:inline-flex">
          <Link href="/contatti">Prenota Consulenza</Link>
        </Button>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X className="h-5 w-5" />
          ) : (
            <Menu className="h-5 w-5" />
          )}
        </Button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="container md:hidden py-4 pb-6">
          <nav className="flex flex-col space-y-4">
            <Link
              href="/"
              className="text-sm font-medium hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/servizi"
              className="text-sm font-medium hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Servizi
            </Link>
            <Link
              href="/chi-siamo"
              className="text-sm font-medium hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Chi Siamo
            </Link>
            <Link
              href="/blog"
              className="text-sm font-medium hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Blog
            </Link>
            <Link
              href="/contatti"
              className="text-sm font-medium hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Contatti
            </Link>
            <Button asChild className="w-full mt-2">
              <Link href="/contatti" onClick={() => setIsMenuOpen(false)}>
                Prenota Consulenza
              </Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
