// src/components/Header.tsx
"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [shouldRenderOverlay, setShouldRenderOverlay] = useState(false);

  const openMenu = () => {
    setIsMenuOpen(true);
    setShouldRenderOverlay(true);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    setTimeout(() => {
      setShouldRenderOverlay(false);
    }, 100); // Wait
  };

  return (
    <>
      <AnimatePresence>
        {shouldRenderOverlay && (
          <motion.div
            className="fixed inset-0 z-40 bg-black/50 backdrop-blur"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={closeMenu}
          />
        )}
      </AnimatePresence>

      <motion.header
        layout
        className="fixed top-0 z-50 w-full bg-white/80 backdrop-blur border-b border-gray-200"
        initial={false}
      >
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
          <nav className="hidden lg:flex gap-8 items-center">
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
            className="lg:hidden z-50 relative"
            onClick={isMenuOpen ? closeMenu : openMenu}
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              layout
              key="mobile-menu"
              initial={{ height: 0 }}
              animate={{ height: "auto" }}
              exit={{ height: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="lg:hidden px-4 pb-6 flex flex-col items-center gap-4"
              >
                <Link href="/servizi" onClick={closeMenu} className="text-base">
                  Servizi
                </Link>
                <Link
                  href="/chi-siamo"
                  onClick={closeMenu}
                  className="text-base"
                >
                  Chi siamo
                </Link>
                <Link href="/contatti" onClick={closeMenu}>
                  <Button>Fissa una consulenza</Button>
                </Link>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
}
