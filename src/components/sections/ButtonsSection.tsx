// src/components/sections/ButtonsSection.tsx
"use client";
import { type ColorSet } from "@/lib/theme";
import {
  User,
  Trash2,
  Download,
  Plus,
  Check,
  AlertTriangle,
  Info,
  Heart,
  Settings,
  Search,
  MousePointer,
} from "lucide-react";
import { useEffect, useRef } from "react";

export default function ButtonsSection({
  colors,
  mainHeaderHeight,
}: {
  colors: ColorSet;
  mainHeaderHeight: number;
}) {
  const sectionHeaderRef = useRef<HTMLDivElement>(null);

  // Calculate section header height and update CSS custom property
  useEffect(() => {
    const updateSectionHeaderHeight = () => {
      if (sectionHeaderRef.current) {
        const height = sectionHeaderRef.current.offsetHeight;
        document.documentElement.style.setProperty(
          "--buttons-header-height",
          `${height}px`
        );
      }
    };

    updateSectionHeaderHeight();
    window.addEventListener("resize", updateSectionHeaderHeight);

    return () =>
      window.removeEventListener("resize", updateSectionHeaderHeight);
  }, []);

  // ButtonsSection should stick at the same level as the main header
  const stickyTop = 80 + mainHeaderHeight;

  return (
    <section className="relative">
      {/* Sticky section header */}
      <div
        ref={sectionHeaderRef}
        className="sticky z-30 backdrop-blur-md border-b transition-colors duration-300 py-3 w-full"
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.8)",
          borderColor: colors.border,
          top: `${stickyTop}px`,
        }}
      >
        <div className="max-w-4xl mx-auto px-6">
          <h2
            className="text-base font-medium transition-colors duration-300 flex items-center gap-2"
            style={{ color: colors.text }}
          >
            <MousePointer className="w-4 h-4" />
            Tasti
          </h2>
        </div>
      </div>

      {/* Section content */}
      <div className="px-6 pt-6 max-w-4xl mx-auto">
        <div className="space-y-12 pb-16">
          {/* Primary Actions */}
          <div className="space-y-4">
            <h3
              className="text-lg font-semibold transition-colors duration-300"
              style={{ color: colors.text }}
            >
              Azioni Principali
            </h3>
            <div className="flex flex-wrap gap-4">
              <button
                className="px-6 py-3 rounded-lg font-medium transition-all duration-200 hover:scale-105 active:scale-95 shadow-sm"
                style={{
                  backgroundColor: colors.primary,
                  color: "white",
                }}
              >
                Pulsante Primario
              </button>
              <button
                className="px-6 py-3 rounded-lg font-medium transition-all duration-200 hover:scale-105 active:scale-95 border shadow-sm"
                style={{
                  backgroundColor: "transparent",
                  color: colors.primary,
                  borderColor: colors.primary,
                }}
              >
                Pulsante Secondario
              </button>
              <button
                className="px-6 py-3 rounded-lg font-medium transition-all duration-200 hover:scale-105 active:scale-95 border shadow-sm"
                style={{
                  backgroundColor: colors.surface,
                  color: colors.text,
                  borderColor: colors.border,
                }}
              >
                Pulsante Superficie
              </button>
            </div>
          </div>

          {/* Icon + Text Buttons */}
          <div className="space-y-4">
            <h3
              className="text-lg font-semibold transition-colors duration-300"
              style={{ color: colors.text }}
            >
              Azioni con Icone
            </h3>
            <div className="flex flex-wrap gap-4">
              <button
                className="px-4 py-2 rounded-lg font-medium transition-all duration-200 hover:scale-105 active:scale-95 flex items-center gap-2 shadow-sm"
                style={{
                  backgroundColor: colors.primary,
                  color: "white",
                }}
              >
                <User className="w-4 h-4" />
                Accedi
              </button>
              <button
                className="px-4 py-2 rounded-lg font-medium transition-all duration-200 hover:scale-105 active:scale-95 flex items-center gap-2 border shadow-sm"
                style={{
                  backgroundColor: "transparent",
                  color: colors.text,
                  borderColor: colors.border,
                }}
              >
                <Download className="w-4 h-4" />
                Scarica
              </button>
              <button
                className="px-4 py-2 rounded-lg font-medium transition-all duration-200 hover:scale-105 active:scale-95 flex items-center gap-2 shadow-sm"
                style={{
                  backgroundColor: colors.accent,
                  color: "white",
                }}
              >
                <Plus className="w-4 h-4" />
                Aggiungi
              </button>
            </div>
          </div>

          {/* Icon-Only Buttons */}
          <div className="space-y-4">
            <h3
              className="text-lg font-semibold transition-colors duration-300"
              style={{ color: colors.text }}
            >
              Solo Icone
            </h3>

            {/* Rectangle Icon Buttons */}
            <div className="space-y-3">
              <h4
                className="text-md font-medium transition-colors duration-300"
                style={{ color: colors.textSecondary }}
              >
                Rettangolari
              </h4>
              <div className="flex flex-wrap gap-3">
                <button
                  className="p-3 rounded-lg transition-all duration-200 hover:scale-105 active:scale-95 shadow-sm"
                  style={{
                    backgroundColor: colors.primary,
                    color: "white",
                  }}
                  title="Profilo utente"
                >
                  <User className="w-5 h-5" />
                </button>
                <button
                  className="p-3 rounded-lg transition-all duration-200 hover:scale-105 active:scale-95 border shadow-sm"
                  style={{
                    backgroundColor: colors.surface,
                    color: colors.text,
                    borderColor: colors.border,
                  }}
                  title="Impostazioni"
                >
                  <Settings className="w-5 h-5" />
                </button>
                <button
                  className="p-3 rounded-lg transition-all duration-200 hover:scale-105 active:scale-95 border shadow-sm"
                  style={{
                    backgroundColor: "transparent",
                    color: colors.textSecondary,
                    borderColor: colors.border,
                  }}
                  title="Cerca"
                >
                  <Search className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Circle Icon Buttons */}
            <div className="space-y-3">
              <h4
                className="text-md font-medium transition-colors duration-300"
                style={{ color: colors.textSecondary }}
              >
                Circolari
              </h4>
              <div className="flex flex-wrap gap-3">
                <button
                  className="w-12 h-12 rounded-full transition-all duration-200 hover:scale-105 active:scale-95 flex items-center justify-center shadow-md"
                  style={{
                    backgroundColor: colors.primary,
                    color: "white",
                  }}
                  title="Aggiungi elemento"
                >
                  <Plus className="w-5 h-5" />
                </button>
                <button
                  className="w-12 h-12 rounded-full transition-all duration-200 hover:scale-105 active:scale-95 flex items-center justify-center border shadow-md"
                  style={{
                    backgroundColor: colors.surface,
                    color: colors.text,
                    borderColor: colors.border,
                  }}
                  title="Mi piace"
                >
                  <Heart className="w-5 h-5" />
                </button>
                <button
                  className="w-10 h-10 rounded-full transition-all duration-200 hover:scale-105 active:scale-95 flex items-center justify-center shadow-sm"
                  style={{
                    backgroundColor: colors.accent,
                    color: "white",
                  }}
                  title="Informazioni"
                >
                  <Info className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Semantic Actions */}
          <div className="space-y-4">
            <h3
              className="text-lg font-semibold transition-colors duration-300"
              style={{ color: colors.text }}
            >
              Azioni Semantiche
            </h3>
            <div className="flex flex-wrap gap-4">
              <button
                className="px-4 py-2 rounded-lg font-medium transition-all duration-200 hover:scale-105 active:scale-95 flex items-center gap-2 shadow-sm"
                style={{
                  backgroundColor: colors.success,
                  color: "white",
                }}
              >
                <Check className="w-4 h-4" />
                Conferma
              </button>
              <button
                className="px-4 py-2 rounded-lg font-medium transition-all duration-200 hover:scale-105 active:scale-95 flex items-center gap-2 shadow-sm"
                style={{
                  backgroundColor: colors.warning,
                  color: "white",
                }}
              >
                <AlertTriangle className="w-4 h-4" />
                Attenzione
              </button>
              <button
                className="px-4 py-2 rounded-lg font-medium transition-all duration-200 hover:scale-105 active:scale-95 flex items-center gap-2 shadow-sm"
                style={{
                  backgroundColor: colors.error,
                  color: "white",
                }}
              >
                <Trash2 className="w-4 h-4" />
                Elimina
              </button>
              <button
                className="px-4 py-2 rounded-lg font-medium transition-all duration-200 hover:scale-105 active:scale-95 flex items-center gap-2 shadow-sm"
                style={{
                  backgroundColor: colors.info,
                  color: "white",
                }}
              >
                <Info className="w-4 h-4" />
                Informazioni
              </button>
            </div>
          </div>

          {/* Badge e Chip */}
          <div className="space-y-4">
            <h3
              className="text-lg font-semibold transition-colors duration-300"
              style={{ color: colors.text }}
            >
              Badge e Chip
            </h3>
            <div className="space-y-3">
              <div className="flex flex-wrap gap-3">
                <span
                  className="px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase"
                  style={{
                    backgroundColor: colors.success,
                    color: "white",
                  }}
                >
                  Successo
                </span>
                <span
                  className="px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase"
                  style={{
                    backgroundColor: colors.warning,
                    color: "white",
                  }}
                >
                  In corso
                </span>
                <span
                  className="px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase"
                  style={{
                    backgroundColor: colors.error,
                    color: "white",
                  }}
                >
                  Errore
                </span>
                <span
                  className="px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase"
                  style={{
                    backgroundColor: colors.info,
                    color: "white",
                  }}
                >
                  Novità
                </span>
              </div>

              {/* Outline badges */}
              <div className="flex flex-wrap gap-3">
                <span
                  className="px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase border"
                  style={{
                    backgroundColor: "transparent",
                    color: colors.success,
                    borderColor: colors.success,
                  }}
                >
                  Disponibile
                </span>
                <span
                  className="px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase border"
                  style={{
                    backgroundColor: "transparent",
                    color: colors.warning,
                    borderColor: colors.warning,
                  }}
                >
                  Limitato
                </span>
                <span
                  className="px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase border"
                  style={{
                    backgroundColor: "transparent",
                    color: colors.primary,
                    borderColor: colors.primary,
                  }}
                >
                  Premium
                </span>
              </div>
            </div>
          </div>

          {/* Button Sizes */}
          <div className="space-y-4">
            <h3
              className="text-lg font-semibold transition-colors duration-300"
              style={{ color: colors.text }}
            >
              Dimensioni Pulsanti
            </h3>
            <div className="flex flex-wrap items-center gap-4">
              <button
                className="px-3 py-1.5 rounded text-sm font-medium transition-all duration-200 hover:scale-105 active:scale-95 shadow-sm"
                style={{
                  backgroundColor: colors.primary,
                  color: "white",
                }}
              >
                Piccolo
              </button>
              <button
                className="px-4 py-2 rounded-md font-medium transition-all duration-200 hover:scale-105 active:scale-95 shadow-sm"
                style={{
                  backgroundColor: colors.primary,
                  color: "white",
                }}
              >
                Medio
              </button>
              <button
                className="px-6 py-3 rounded-lg font-medium transition-all duration-200 hover:scale-105 active:scale-95 shadow-sm"
                style={{
                  backgroundColor: colors.primary,
                  color: "white",
                }}
              >
                Grande
              </button>
              <button
                className="px-8 py-4 rounded-xl text-lg font-medium transition-all duration-200 hover:scale-105 active:scale-95 shadow-md"
                style={{
                  backgroundColor: colors.primary,
                  color: "white",
                }}
              >
                Extra Large
              </button>
            </div>
          </div>

          {/* Button States */}
          <div className="space-y-4">
            <h3
              className="text-lg font-semibold transition-colors duration-300"
              style={{ color: colors.text }}
            >
              Stati Pulsanti
            </h3>
            <div className="flex flex-wrap gap-4">
              <button
                className="px-6 py-3 rounded-lg font-medium transition-all duration-200 hover:scale-105 active:scale-95 shadow-sm"
                style={{
                  backgroundColor: colors.primary,
                  color: "white",
                }}
              >
                Normale
              </button>
              <button
                className="px-6 py-3 rounded-lg font-medium transition-all duration-200 shadow-sm opacity-50 cursor-not-allowed"
                style={{
                  backgroundColor: colors.primary,
                  color: "white",
                }}
                disabled
              >
                Disabilitato
              </button>
              <button
                className="px-6 py-3 rounded-lg font-medium transition-all duration-200 hover:scale-105 active:scale-95 shadow-sm flex items-center gap-2"
                style={{
                  backgroundColor: colors.accent,
                  color: "white",
                }}
              >
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                Caricamento
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
