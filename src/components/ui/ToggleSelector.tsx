// src/components/ui/ToggleSelector.tsx
"use client";
import { useState, useMemo, useRef, useEffect, useCallback } from "react";
import clsx from "clsx";
import { colorThemes } from "@/lib/theme";

const themes = [
  { key: "option1", label: "Graphite" },
  { key: "option2", label: "Blue" },
  { key: "option3", label: "Red" },
] as const;

type ThemeKey = (typeof themes)[number]["key"];

export default function ToggleSelector({
  value,
  onChange,
}: {
  value: ThemeKey;
  onChange: (val: ThemeKey) => void;
}) {
  const selectedIndex = useMemo(
    () => themes.findIndex((theme) => theme.key === value),
    [value]
  );

  // Get the current theme colors
  const currentTheme = useMemo(() => colorThemes[value], [value]);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isLeaving, setIsLeaving] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const buttonsRef = useRef<(HTMLButtonElement | null)[]>([]);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Fixed dimensions for precise control - numbers that divide evenly by 3
  const buttonWidth = 77;
  const padding = 4; // p-1 = 4px on each side
  const containerWidth = buttonWidth * 3 + padding * 2; // 77*3 + 8 = 239

  // Clean up timeout on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const handleMouseEnterContainer = useCallback(() => {
    if (hoveredIndex === null) {
      setHoveredIndex(selectedIndex);
      setIsLeaving(false);
    }
  }, [hoveredIndex, selectedIndex]);

  const handleMouseLeaveContainer = useCallback(() => {
    setIsLeaving(true);
    setHoveredIndex(selectedIndex);

    // Clear any existing timeout
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    // Remove ghost pill after animation completes
    timeoutRef.current = setTimeout(() => {
      setHoveredIndex(null);
      setIsLeaving(false);
    }, 200);
  }, [selectedIndex]);

  const handleMouseEnterButton = useCallback(
    (index: number) => {
      if (!isLeaving) {
        setHoveredIndex(index);
      }
    },
    [isLeaving]
  );

  // Focus management for keyboard navigation
  const focusButton = (index: number) => {
    buttonsRef.current[index]?.focus();
  };

  const handleKeyDown = (event: React.KeyboardEvent, currentIndex: number) => {
    let newIndex = currentIndex;

    switch (event.key) {
      case "ArrowLeft":
        event.preventDefault();
        newIndex = currentIndex > 0 ? currentIndex - 1 : themes.length - 1;
        break;
      case "ArrowRight":
        event.preventDefault();
        newIndex = currentIndex < themes.length - 1 ? currentIndex + 1 : 0;
        break;
      case "Home":
        event.preventDefault();
        newIndex = 0;
        break;
      case "End":
        event.preventDefault();
        newIndex = themes.length - 1;
        break;
      default:
        return;
    }

    onChange(themes[newIndex].key);
  };

  // Focus the selected button when selection changes via keyboard
  useEffect(() => {
    if (
      document.activeElement &&
      containerRef.current?.contains(document.activeElement)
    ) {
      focusButton(selectedIndex);
    }
  }, [selectedIndex]);

  return (
    <div
      ref={containerRef}
      className="relative h-10 rounded-full p-1 shadow-inner overflow-hidden transition-colors duration-300"
      style={{
        width: `${containerWidth}px`,
        backgroundColor: currentTheme.background,
      }}
      role="radiogroup"
      aria-label="Theme selector"
      onMouseEnter={handleMouseEnterContainer}
      onMouseLeave={handleMouseLeaveContainer}
    >
      {/* Ghost pill - shows on hover, behind the main pill */}
      {hoveredIndex !== null && (
        <div
          className="absolute top-1 left-1 h-8 rounded-full transition-all duration-200 ease-out"
          style={{
            width: `${buttonWidth}px`,
            transform: `translateX(${hoveredIndex * buttonWidth}px)`,
            backgroundColor: `${currentTheme.primary}40`, // 40 = 25% opacity in hex
          }}
          aria-hidden="true"
        />
      )}

      {/* Main selected pill */}
      <div
        className="absolute top-1 left-1 h-8 rounded-full transition-all duration-300 ease-out"
        style={{
          width: `${buttonWidth}px`,
          transform: `translateX(${selectedIndex * buttonWidth}px)`,
          backgroundColor: currentTheme.primary,
        }}
        aria-hidden="true"
      />

      <div className="relative grid grid-cols-3 w-full h-full z-10">
        {themes.map((theme, index) => (
          <button
            key={theme.key}
            ref={(el) => {
              buttonsRef.current[index] = el;
            }}
            onClick={() => onChange(theme.key)}
            onKeyDown={(e) => handleKeyDown(e, index)}
            onMouseEnter={() => handleMouseEnterButton(index)}
            className={clsx(
              "text-sm font-medium w-full h-full rounded-full flex items-center justify-center transition-all duration-300",
              "focus:outline-none active:scale-95",
              value === theme.key
                ? "text-white"
                : "transition-colors duration-300"
            )}
            style={{
              color: value === theme.key ? "white" : currentTheme.text,
            }}
            role="radio"
            aria-checked={value === theme.key}
            aria-label={`Select ${theme.label} theme`}
            tabIndex={value === theme.key ? 0 : -1}
          >
            {theme.label}
          </button>
        ))}
      </div>
    </div>
  );
}
