// src/components/Header.tsx
"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMenuOpen]);

  return (
    <>
      <header className="fixed top-0 z-50 w-full bg-white/80 backdrop-blur border-b border-gray-200">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex flex-col leading-none">
            <span className="text-sm font-medium text-muted-foreground tracking-wide uppercase">
              Studio Legale
            </span>
            <span className="text-3xl font-extrabold tracking-tight uppercase">
              ZANCHI
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-8 items-center">
            <Link
              href="/servizi"
              className="text-sm hover:text-primary transition-colors"
            >
              Servizi
            </Link>
            <Link
              href="/chi-siamo"
              className="text-sm hover:text-primary transition-colors"
            >
              Chi siamo
            </Link>
            <Link href="/contatti">
              <Button size="sm">Fissa una consulenza</Button>
            </Link>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden z-50 relative"
            onClick={toggleMenu}
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </header>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-black/50 pt-16"
            onClick={closeMenu}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="relative bg-white w-full h-full flex flex-col items-center justify-center gap-6 text-lg font-medium"
              onClick={(e) => e.stopPropagation()}
              initial={{ y: "-100%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: "-100%", opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <button
                className="absolute top-4 right-4 z-50"
                onClick={closeMenu}
              >
                <X className="w-6 h-6" />
              </button>
              <Link href="/servizi" onClick={closeMenu}>
                Servizi
              </Link>
              <Link href="/chi-siamo" onClick={closeMenu}>
                Chi siamo
              </Link>
              <Link href="/contatti" onClick={closeMenu}>
                <Button>Fissa una consulenza</Button>
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
