// src/components/sections/ButtonsSection.tsx
"use client";
import { type ColorSet } from "@/lib/theme";

export default function ButtonsSection({
  colors,
  mainHeaderHeight,
}: {
  colors: ColorSet;
  mainHeaderHeight: number;
}) {
  // ButtonsSection should stick at the same level as the main header
  // This creates the iOS-style stacking where it stops under the main header,
  // not under the colors header
  const stickyTop = 80 + mainHeaderHeight;

  return (
    <section className="relative">
      {/* Sticky section header - sticks at main header level */}
      <div
        className="sticky z-30 backdrop-blur-md border-b transition-colors duration-300 py-3 w-full"
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
            Buttons & Components
          </h2>
        </div>
      </div>

      {/* Section content */}
      <div className="px-6 pt-6 max-w-4xl mx-auto">
        <h3
          className="text-lg font-semibold mb-6 transition-colors duration-300"
          style={{ color: colors.text }}
        >
          Button Styles
        </h3>

        <div className="space-y-8 pb-16">
          {/* Primary Buttons */}
          <div className="space-y-4">
            <h4
              className="text-md font-medium transition-colors duration-300"
              style={{ color: colors.textSecondary }}
            >
              Primary Actions
            </h4>
            <div className="flex flex-wrap gap-4">
              <button
                className="px-6 py-3 rounded-lg font-medium transition-all duration-200 hover:scale-105 active:scale-95"
                style={{
                  backgroundColor: colors.primary,
                  color: "white",
                }}
              >
                Primary Button
              </button>
              <button
                className="px-6 py-3 rounded-lg font-medium transition-all duration-200 hover:scale-105 active:scale-95 border"
                style={{
                  backgroundColor: "transparent",
                  color: colors.primary,
                  borderColor: colors.primary,
                }}
              >
                Secondary Button
              </button>
            </div>
          </div>

          {/* Secondary Buttons */}
          <div className="space-y-4">
            <h4
              className="text-md font-medium transition-colors duration-300"
              style={{ color: colors.textSecondary }}
            >
              Secondary Actions
            </h4>
            <div className="flex flex-wrap gap-4">
              <button
                className="px-6 py-3 rounded-lg font-medium transition-all duration-200 hover:scale-105 active:scale-95 border"
                style={{
                  backgroundColor: colors.surface,
                  color: colors.text,
                  borderColor: colors.border,
                }}
              >
                Surface Button
              </button>
              <button
                className="px-6 py-3 rounded-lg font-medium transition-all duration-200 hover:scale-105 active:scale-95"
                style={{
                  backgroundColor: colors.accent,
                  color: "white",
                }}
              >
                Accent Button
              </button>
            </div>
          </div>

          {/* Button Sizes */}
          <div className="space-y-4">
            <h4
              className="text-md font-medium transition-colors duration-300"
              style={{ color: colors.textSecondary }}
            >
              Button Sizes
            </h4>
            <div className="flex flex-wrap items-center gap-4">
              <button
                className="px-3 py-1.5 rounded text-sm font-medium transition-all duration-200 hover:scale-105 active:scale-95"
                style={{
                  backgroundColor: colors.primary,
                  color: "white",
                }}
              >
                Small
              </button>
              <button
                className="px-4 py-2 rounded-md font-medium transition-all duration-200 hover:scale-105 active:scale-95"
                style={{
                  backgroundColor: colors.primary,
                  color: "white",
                }}
              >
                Medium
              </button>
              <button
                className="px-6 py-3 rounded-lg font-medium transition-all duration-200 hover:scale-105 active:scale-95"
                style={{
                  backgroundColor: colors.primary,
                  color: "white",
                }}
              >
                Large
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
