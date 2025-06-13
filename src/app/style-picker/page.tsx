"use client";

import { useState } from "react";
import ColorsSection from "@/components/sections/ColorsSection";
import ToggleSelector from "@/components/ui/ToggleSelector";

export default function StylePickerPage() {
  const [theme, setTheme] = useState("graphite");

  return (
    <main className="min-h-screen">
      {/* Sticky header with toggle */}
      <div className="sticky top-0 z-50 bg-white border-b px-6 py-4 flex justify-between items-center shadow-sm">
        <h1 className="text-xl font-bold">Anteprima Stile Interfaccia</h1>
        <ToggleSelector
          value={theme}
          onChange={(val) => val && setTheme(val)}
        />
      </div>

      <div className="p-6 space-y-16">
        <ColorsSection />
      </div>
    </main>
  );
}
