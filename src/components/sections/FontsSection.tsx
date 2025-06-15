// src/components/sections/FontsSection.tsx
"use client";
import { type ColorSet } from "@/lib/theme";
import { useEffect, useRef, useState } from "react";
import { Type } from "lucide-react";

export default function FontsSection({
  colors,
  mainHeaderHeight,
}: {
  colors: ColorSet;
  mainHeaderHeight: number;
}) {
  const sectionHeaderRef = useRef<HTMLDivElement>(null);
  const [fontSize, setFontSize] = useState(16);
  const [lineHeight, setLineHeight] = useState(1.5);

  // Calculate section header height and update CSS custom property
  useEffect(() => {
    const updateSectionHeaderHeight = () => {
      if (sectionHeaderRef.current) {
        const height = sectionHeaderRef.current.offsetHeight;
        document.documentElement.style.setProperty(
          "--fonts-header-height",
          `${height}px`
        );
      }
    };

    updateSectionHeaderHeight();
    window.addEventListener("resize", updateSectionHeaderHeight);

    return () =>
      window.removeEventListener("resize", updateSectionHeaderHeight);
  }, []);

  // FontsSection should stick at the same level as the main header
  const stickyTop = 80 + mainHeaderHeight;

  const fontSizes = [14, 16, 18, 20];
  const lineHeights = [1.4, 1.5, 1.6, 1.7];

  return (
    <section className="relative">
      {/* Sticky section header */}
      <div
        ref={sectionHeaderRef}
        className="sticky z-20 backdrop-blur-md border-b transition-colors duration-300 py-3 w-full"
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
            <Type className="w-4 h-4" />
            Tipografia
          </h2>
        </div>
      </div>

      {/* Section content */}
      <div className="px-6 pt-6 max-w-4xl mx-auto">
        <div className="space-y-12 pb-16">
          {/* Typography Controls */}
          <div className="space-y-4">
            <h3
              className="text-lg font-semibold transition-colors duration-300"
              style={{ color: colors.text }}
            >
              Controlli Tipografia
            </h3>

            <div className="flex flex-wrap gap-6">
              {/* Font Size Control */}
              <div className="space-y-2">
                <label
                  className="text-sm font-medium transition-colors duration-300"
                  style={{ color: colors.textSecondary }}
                >
                  Dimensione Testo: {fontSize}px
                </label>
                <div className="flex items-center gap-2">
                  {fontSizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setFontSize(size)}
                      className={`px-3 py-1.5 rounded-md text-sm font-medium transition-all duration-200 border ${
                        fontSize === size ? "shadow-sm" : "hover:scale-105"
                      }`}
                      style={{
                        backgroundColor:
                          fontSize === size ? colors.primary : colors.surface,
                        color: fontSize === size ? "white" : colors.text,
                        borderColor:
                          fontSize === size ? colors.primary : colors.border,
                      }}
                    >
                      {size}px
                    </button>
                  ))}
                </div>
              </div>

              {/* Line Height Control */}
              <div className="space-y-2">
                <label
                  className="text-sm font-medium transition-colors duration-300"
                  style={{ color: colors.textSecondary }}
                >
                  Interlinea: {lineHeight}
                </label>
                <div className="flex items-center gap-2">
                  {lineHeights.map((height) => (
                    <button
                      key={height}
                      onClick={() => setLineHeight(height)}
                      className={`px-3 py-1.5 rounded-md text-sm font-medium transition-all duration-200 border ${
                        lineHeight === height ? "shadow-sm" : "hover:scale-105"
                      }`}
                      style={{
                        backgroundColor:
                          lineHeight === height
                            ? colors.primary
                            : colors.surface,
                        color: lineHeight === height ? "white" : colors.text,
                        borderColor:
                          lineHeight === height
                            ? colors.primary
                            : colors.border,
                      }}
                    >
                      {height}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Typography Hierarchy */}
          <div className="space-y-6">
            <h3
              className="text-lg font-semibold transition-colors duration-300"
              style={{ color: colors.text }}
            >
              Gerarchia Tipografica
            </h3>

            <div
              className="space-y-6 p-6 rounded-lg border"
              style={{
                backgroundColor: colors.surface,
                borderColor: colors.border,
                fontSize: `${fontSize}px`,
                lineHeight: lineHeight,
              }}
            >
              {/* H1 - Main Title */}
              <div>
                <span
                  className="text-xs font-medium uppercase tracking-wide mb-2 block"
                  style={{ color: colors.textSecondary }}
                >
                  H1 - Titolo Principale
                </span>
                <h1
                  className="text-4xl md:text-5xl font-bold tracking-tight"
                  style={{ color: colors.text }}
                >
                  Studio Legale Zanchi
                </h1>
              </div>

              {/* H2 - Service Titles */}
              <div>
                <span
                  className="text-xs font-medium uppercase tracking-wide mb-2 block"
                  style={{ color: colors.textSecondary }}
                >
                  H2 - Titoli Servizi
                </span>
                <h2
                  className="text-2xl md:text-3xl font-bold"
                  style={{ color: colors.text }}
                >
                  Diritto Civile e Contrattuale
                </h2>
              </div>

              {/* H3 - Subsections */}
              <div>
                <span
                  className="text-xs font-medium uppercase tracking-wide mb-2 block"
                  style={{ color: colors.textSecondary }}
                >
                  H3 - Sottosezioni
                </span>
                <h3
                  className="text-xl font-semibold"
                  style={{ color: colors.text }}
                >
                  Consulenza e Assistenza Legale
                </h3>
              </div>

              {/* Body Text */}
              <div>
                <span
                  className="text-xs font-medium uppercase tracking-wide mb-2 block"
                  style={{ color: colors.textSecondary }}
                >
                  Testo Corpo
                </span>
                <p className="text-base" style={{ color: colors.text }}>
                  Lo Studio Legale Zanchi offre consulenza e assistenza legale
                  in tutte le controversie civili. Accompagniamo i nostri
                  clienti nella tutela dei propri diritti in materia di
                  obbligazioni, proprietà, responsabilità extracontrattuale e
                  molto altro.
                </p>
              </div>

              {/* Caption */}
              <div>
                <span
                  className="text-xs font-medium uppercase tracking-wide mb-2 block"
                  style={{ color: colors.textSecondary }}
                >
                  Didascalia
                </span>
                <p className="text-sm" style={{ color: colors.textSecondary }}>
                  Contattaci per una prima consulenza gratuita e scopri come
                  possiamo supportarti.
                </p>
              </div>
            </div>
          </div>

          {/* Interface Elements */}
          <div className="space-y-6">
            <h3
              className="text-lg font-semibold transition-colors duration-300"
              style={{ color: colors.text }}
            >
              Elementi Interfaccia
            </h3>

            <div
              className="space-y-4 p-6 rounded-lg border"
              style={{
                backgroundColor: colors.surface,
                borderColor: colors.border,
                fontSize: `${fontSize}px`,
                lineHeight: lineHeight,
              }}
            >
              {/* Navigation */}
              <div className="flex items-center gap-6">
                <span
                  className="text-xs font-medium uppercase tracking-wide"
                  style={{ color: colors.textSecondary }}
                >
                  Navigazione:
                </span>
                <nav className="flex gap-4">
                  <a
                    href="#"
                    className="font-medium hover:underline"
                    style={{ color: colors.text }}
                  >
                    Servizi
                  </a>
                  <a
                    href="#"
                    className="font-medium hover:underline"
                    style={{ color: colors.text }}
                  >
                    Chi Siamo
                  </a>
                  <a
                    href="#"
                    className="font-medium hover:underline"
                    style={{ color: colors.text }}
                  >
                    Contatti
                  </a>
                </nav>
              </div>

              {/* Buttons */}
              <div className="flex items-center gap-4">
                <span
                  className="text-xs font-medium uppercase tracking-wide"
                  style={{ color: colors.textSecondary }}
                >
                  Pulsanti:
                </span>
                <button
                  className="px-4 py-2 rounded-lg font-medium"
                  style={{ backgroundColor: colors.primary, color: "white" }}
                >
                  Fissa una consulenza
                </button>
                <button
                  className="px-4 py-2 rounded-lg font-medium border"
                  style={{
                    backgroundColor: "transparent",
                    color: colors.primary,
                    borderColor: colors.primary,
                  }}
                >
                  Scopri di più
                </button>
              </div>

              {/* Form Elements */}
              <div className="space-y-2">
                <span
                  className="text-xs font-medium uppercase tracking-wide"
                  style={{ color: colors.textSecondary }}
                >
                  Elementi Form:
                </span>
                <div className="space-y-3">
                  <div>
                    <label
                      className="block text-sm font-medium mb-1"
                      style={{ color: colors.text }}
                    >
                      Nome e Cognome
                    </label>
                    <input
                      type="text"
                      placeholder="Inserisci il tuo nome"
                      className="w-full px-3 py-2 border rounded-md"
                      style={{
                        backgroundColor: colors.background,
                        borderColor: colors.border,
                        color: colors.text,
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Legal Text Examples */}
          <div className="space-y-6">
            <h3
              className="text-lg font-semibold transition-colors duration-300"
              style={{ color: colors.text }}
            >
              Testi Legali
            </h3>

            <div
              className="space-y-6 p-6 rounded-lg border"
              style={{
                backgroundColor: colors.surface,
                borderColor: colors.border,
                fontSize: `${fontSize}px`,
                lineHeight: lineHeight,
              }}
            >
              {/* Legal Service Description */}
              <div>
                <h4
                  className="text-lg font-semibold mb-3"
                  style={{ color: colors.text }}
                >
                  Diritto Immobiliare
                </h4>
                <p className="mb-3" style={{ color: colors.text }}>
                  Supportiamo clienti privati e aziende in operazioni di
                  compravendita, locazione e gestione di immobili. Offriamo
                  assistenza nei contenziosi condominiali, contratti di affitto
                  e problematiche con agenzie.
                </p>
                <p
                  className="text-sm font-medium"
                  style={{ color: colors.primary }}
                >
                  Un supporto sicuro per proteggere il tuo patrimonio
                  immobiliare.
                </p>
              </div>

              {/* Warning/Alert */}
              <div
                className="p-4 rounded-md border-l-4"
                style={{
                  backgroundColor: colors.warning + "20",
                  borderLeftColor: colors.warning,
                }}
              >
                <p
                  className="text-sm font-medium"
                  style={{ color: colors.warning }}
                >
                  <strong>Attenzione:</strong> I termini contrattuali devono
                  essere rivisti attentamente prima della firma.
                </p>
              </div>

              {/* Legal Disclaimer */}
              <div>
                <p
                  className="text-xs leading-relaxed"
                  style={{ color: colors.textSecondary }}
                >
                  <strong>Disclaimer legale:</strong> Le informazioni fornite su
                  questo sito hanno carattere generale e non costituiscono
                  consulenza legale specifica. Per questioni legali particolari,
                  è necessario consultare un avvocato qualificato. Studio Legale
                  Zanchi - P.IVA: 12345678910
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
