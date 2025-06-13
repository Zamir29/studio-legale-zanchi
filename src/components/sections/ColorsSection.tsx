// src/components/sections/ColorsSection.tsx
"use client";
import { type ColorSet } from "@/lib/theme";
import { useEffect, useRef } from "react";

export default function ColorsSection({
  colors,
  mainHeaderHeight,
}: {
  colors: ColorSet;
  mainHeaderHeight: number;
}) {
  const entries = Object.entries(colors);
  const sectionHeaderRef = useRef<HTMLDivElement>(null);

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
            className="text-base font-medium transition-colors duration-300"
            style={{ color: colors.text }}
          >
            Colori tema
          </h2>
        </div>
      </div>

      {/* Section content */}
      <div className="px-6 pt-6 max-w-4xl mx-auto">
        <h3
          className="text-lg font-semibold mb-6 transition-colors duration-300"
          style={{ color: colors.text }}
        >
          Color Palette
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 pb-16">
          {entries.map(([name, hex]) => (
            <div key={name} className="space-y-3">
              <div
                className="w-full h-24 rounded-xl shadow-sm transition-all duration-200 hover:shadow-md hover:scale-105 cursor-pointer border"
                style={{
                  backgroundColor: hex,
                  borderColor: colors.border,
                }}
                onClick={() => navigator.clipboard?.writeText(hex)}
                title={`Click to copy ${hex}`}
              />
              <div className="text-sm font-medium text-center">
                <div
                  style={{ color: colors.text }}
                  className="transition-colors duration-300"
                >
                  {name.charAt(0).toUpperCase() + name.slice(1)}
                </div>
                <div
                  className="text-xs mt-1 transition-colors duration-300"
                  style={{ color: colors.textSecondary }}
                >
                  {hex}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
