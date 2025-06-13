// src/components/sections/ColorsSection.tsx

export default function ColorsSection() {
  const mainColors = [
    { hex: "#0082A6", label: "Primary" },
    { hex: "#F7F5ED", label: "Background" },
    { hex: "#C4DEE3", label: "Secondary" },
    { hex: "#86B9C7", label: "Accent" },
  ];

  const semanticColors = [
    { hex: "#22C55E", label: "Success" },
    { hex: "#FACC15", label: "Warning" },
    { hex: "#EF4444", label: "Error" },
    { hex: "#3B82F6", label: "Info / Link" },
    { hex: "#6B7280", label: "Visited" },
  ];

  const gradients = [
    {
      css: "bg-gradient-to-r from-[#0082A6] via-[#C4DEE3] to-[#86B9C7]",
      label: "Main Soft Gradient",
    },
    {
      css: "bg-gradient-to-r from-[#F7F5ED] to-[#C4DEE3]",
      label: "Background Fade",
    },
  ];

  return (
    <section className="space-y-12">
      <h2 className="text-2xl font-bold">🎨 Colori</h2>

      {/* Main Colors */}
      <div>
        <h3 className="text-xl font-semibold mb-2">Colori Principali</h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {mainColors.map((color) => (
            <div
              key={color.hex}
              className="rounded-lg aspect-square shadow-md flex items-center justify-center text-sm font-medium"
              style={{ backgroundColor: color.hex }}
            >
              <div className="text-white drop-shadow text-center">
                <div>{color.hex}</div>
                <div className="text-xs opacity-80">{color.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Semantic Colors */}
      <div>
        <h3 className="text-xl font-semibold mb-2">Colori Semantici</h3>
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-4">
          {semanticColors.map((color) => (
            <div
              key={color.hex}
              className="rounded-lg aspect-square shadow flex items-center justify-center text-sm font-medium"
              style={{ backgroundColor: color.hex }}
            >
              <div className="text-white drop-shadow text-center">
                <div>{color.hex}</div>
                <div className="text-xs opacity-80">{color.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Gradients */}
      <div>
        <h3 className="text-xl font-semibold mb-2">Gradients</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {gradients.map((g, index) => (
            <div
              key={index}
              className={`rounded-xl h-32 shadow-md flex items-center justify-center text-white font-medium ${g.css}`}
            >
              {g.label}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
