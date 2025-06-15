// src/components/sections/ColorsSection.tsx
"use client";
import { type ColorSet, colorSections } from "@/lib/theme";
import { useEffect, useRef, useState } from "react";
import { Copy, Check, Palette } from "lucide-react";

export default function ColorsSection({
  colors,
  mainHeaderHeight,
}: {
  colors: ColorSet;
  mainHeaderHeight: number;
}) {
  const sectionHeaderRef = useRef<HTMLDivElement>(null);
  const [tooltip, setTooltip] = useState<{
    show: boolean;
    x: number;
    y: number;
  }>({ show: false, x: 0, y: 0 });

  const [copyFeedback, setCopyFeedback] = useState<{
    show: boolean;
    x: number;
    y: number;
  }>({ show: false, x: 0, y: 0 });

  // Calculate section header height and update CSS custom property
  useEffect(() => {
    const updateSectionHeaderHeight = () => {
      if (sectionHeaderRef.current) {
        const height = sectionHeaderRef.current.offsetHeight;
        document.documentElement.style.setProperty(
          "--colors-header-height",
          `${height}px`
        );
      }
    };

    updateSectionHeaderHeight();
    window.addEventListener("resize", updateSectionHeaderHeight);

    return () =>
      window.removeEventListener("resize", updateSectionHeaderHeight);
  }, []);

  // Calculate dynamic top position: menu (80px) + main header height
  const stickyTop = 80 + mainHeaderHeight;

  const handleMouseMove = (e: React.MouseEvent) => {
    setTooltip({
      show: true,
      x: e.clientX,
      y: e.clientY,
    });
  };

  const handleMouseLeave = () => {
    setTooltip({ show: false, x: 0, y: 0 });
  };

  const copyToClipboard = (colorValue: string, e: React.MouseEvent) => {
    navigator.clipboard?.writeText(colorValue);

    // Hide tooltip and show feedback at click position
    setTooltip({ show: false, x: 0, y: 0 });
    setCopyFeedback({
      show: true,
      x: e.clientX,
      y: e.clientY,
    });

    // Hide feedback after 1.5 seconds
    setTimeout(() => {
      setCopyFeedback({ show: false, x: 0, y: 0 });
    }, 1500);
  };

  return (
    <section className="relative">
      {/* Sticky section header with frosted glass effect */}
      <div
        ref={sectionHeaderRef}
        className="sticky z-40 backdrop-blur-md border-b transition-colors duration-300 py-3 w-full"
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
            <Palette className="w-4 h-4" />
            Colori tema
          </h2>
        </div>
      </div>

      {/* Tooltip */}
      {tooltip.show && (
        <div
          className="fixed z-50 pointer-events-none"
          style={{
            left: tooltip.x + 10,
            top: tooltip.y - 35,
          }}
        >
          <div className="flex items-center gap-1 text-xs font-medium text-white bg-black/80 px-2 py-1 rounded shadow-lg">
            <Copy className="w-3 h-3" />
            <span>Copia</span>
          </div>
        </div>
      )}

      {/* Copy feedback */}
      {copyFeedback.show && (
        <div
          className="fixed z-50 pointer-events-none animate-in fade-in-0 zoom-in-95 duration-200"
          style={{
            left: copyFeedback.x + 10,
            top: copyFeedback.y - 35,
          }}
        >
          <div className="flex items-center gap-1 text-xs font-medium text-white bg-green-600 px-2 py-1 rounded shadow-lg">
            <Check className="w-3 h-3" />
            <span>Copiato</span>
          </div>
        </div>
      )}

      {/* Section content */}
      <div className="px-6 pt-6 max-w-4xl mx-auto pb-16">
        {/* Render each color section */}
        {Object.entries(colorSections).map(
          ([sectionKey, section], sectionIndex) => (
            <div key={sectionKey} className={sectionIndex > 0 ? "mt-12" : ""}>
              <h3
                className="text-lg font-semibold mb-6 transition-colors duration-300"
                style={{ color: colors.text }}
              >
                {section.title}
              </h3>

              {/* Color group container with rounded corners */}
              <div
                className="flex rounded-2xl overflow-hidden shadow-sm border group/container"
                style={{ borderColor: colors.border }}
              >
                {section.colors.map((colorKey) => {
                  const colorValue = colors[colorKey];
                  const colorName = getColorDisplayName(colorKey);

                  return (
                    <div
                      key={colorKey}
                      className="relative flex-1 h-32 transition-all duration-300 ease-out group/color hover:flex-[1.2] group-hover/container:[&:not(:hover)]:flex-[0.8]"
                      style={{ backgroundColor: colorValue }}
                    >
                      {/* Color info overlay */}
                      <div className="absolute inset-0 flex flex-col items-center justify-center p-2">
                        <div className="text-center">
                          {/* Color name */}
                          <div
                            className="text-sm font-medium mb-1 transition-all duration-300 opacity-70 group-hover/color:opacity-100"
                            style={{
                              color: getContrastColor(colorValue),
                              textShadow: "0 1px 2px rgba(0,0,0,0.3)",
                            }}
                          >
                            {colorName}
                          </div>

                          {/* Color code - interactive copy area */}
                          <div
                            className="text-xs font-mono transition-all duration-300 opacity-80 group-hover/color:opacity-100 hover:scale-110 px-2 py-1 rounded bg-black/20 backdrop-blur-sm cursor-pointer"
                            style={{
                              color: getContrastColor(colorValue),
                            }}
                            onClick={(e) => copyToClipboard(colorValue, e)}
                            onMouseMove={handleMouseMove}
                            onMouseLeave={handleMouseLeave}
                          >
                            {colorValue}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )
        )}
      </div>
    </section>
  );
}

// Helper function to get display names for colors in Italian
function getColorDisplayName(colorKey: string): string {
  const displayNames: Record<string, string> = {
    // Colori Principali
    primary: "Primario",
    secondary: "Secondario",
    accent: "Accento",
    background: "Sfondo",

    // Colori Componenti
    surface: "Superficie",
    text: "Testo",
    textSecondary: "Testo Sec.",
    border: "Bordo",

    // Colori Semantici
    success: "Successo",
    warning: "Attenzione",
    error: "Errore",
    info: "Info",
    visited: "Visitato",
  };

  return (
    displayNames[colorKey] ||
    colorKey.charAt(0).toUpperCase() + colorKey.slice(1)
  );
}

// Helper function to determine contrast color for text
function getContrastColor(hexColor: string): string {
  // Remove # if present
  const hex = hexColor.replace("#", "");

  // Convert to RGB
  const r = parseInt(hex.substr(0, 2), 16);
  const g = parseInt(hex.substr(2, 2), 16);
  const b = parseInt(hex.substr(4, 2), 16);

  // Calculate luminance
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;

  // Return white for dark colors, black for light colors
  return luminance > 0.5 ? "#000000" : "#FFFFFF";
}
