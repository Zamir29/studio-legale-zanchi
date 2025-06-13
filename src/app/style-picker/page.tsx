"use client";
import { useState, useEffect, useRef } from "react";
import ColorsSection from "@/components/sections/ColorsSection";
import ButtonsSection from "@/components/sections/ButtonsSection";
import ToggleSelector from "@/components/ui/ToggleSelector";
import { colorThemes, type ThemeKey } from "@/lib/theme";

export default function StylePickerPage() {
  const [theme, setTheme] = useState<ThemeKey>("option1");
  const selectedTheme = colorThemes[theme];
  const mainHeaderRef = useRef<HTMLDivElement>(null);
  const [mainHeaderHeight, setMainHeaderHeight] = useState(0);

  // Calculate and update header height dynamically
  useEffect(() => {
    const updateHeaderHeight = () => {
      if (mainHeaderRef.current) {
        const height = mainHeaderRef.current.offsetHeight;
        setMainHeaderHeight(height);
        // Set CSS custom property for use in child components
        document.documentElement.style.setProperty(
          "--main-header-height",
          `${height}px`
        );
      }
    };

    updateHeaderHeight();
    window.addEventListener("resize", updateHeaderHeight);

    return () => window.removeEventListener("resize", updateHeaderHeight);
  }, []);

  return (
    <div
      className="min-h-screen transition-colors duration-300"
      style={{ backgroundColor: selectedTheme.background }}
    >
      {/* Main sticky header - sticks below the main menu bar */}
      <div
        ref={mainHeaderRef}
        className="sticky top-20 z-50 backdrop-blur-md border-b px-6 py-4 shadow-sm transition-colors duration-300 w-full"
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.8)",
          borderColor: selectedTheme.border,
        }}
      >
        <div className="flex flex-col gap-4 items-center md:flex-row md:items-center md:justify-between max-w-4xl mx-auto">
          <h1
            className="text-xl font-bold transition-colors duration-300"
            style={{ color: selectedTheme.text }}
          >
            Anteprima Stile Interfaccia
          </h1>
          <ToggleSelector value={theme} onChange={setTheme} />
        </div>
      </div>

      {/* Sections with stacking sticky headers */}
      <div>
        <ColorsSection
          colors={selectedTheme}
          mainHeaderHeight={mainHeaderHeight}
        />
        <ButtonsSection
          colors={selectedTheme}
          mainHeaderHeight={mainHeaderHeight}
        />
      </div>
    </div>
  );
}
