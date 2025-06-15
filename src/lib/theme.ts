// src/lib/theme.ts
export type ColorSet = {
  // Colori Principali
  primary: string;
  secondary: string;
  accent: string;
  
  // Colori Componenti
  background: string;
  surface: string;
  text: string;
  textSecondary: string;
  border: string;
  
  // Colori Semantici
  success: string;
  warning: string;
  error: string;
  info: string;
  visited: string;
};

export const colorThemes = {
  option1: { // Graphite Theme
    // Colori Principali
    primary: "#2D3748",
    secondary: "#4A5568", 
    accent: "#718096",
    
    // Colori Componenti
    background: "#F7FAFC",
    surface: "#EDF2F7",
    text: "#1A202C",
    textSecondary: "#718096",
    border: "#E2E8F0",
    
    // Colori Semantici
    success: "#38A169",
    warning: "#D69E2E",
    error: "#E53E3E",
    info: "#3182CE",
    visited: "#805AD5",
  },
  option2: { // Blue Theme
    // Colori Principali
    primary: "#2B6CB0",
    secondary: "#3182CE",
    accent: "#4299E1",
    
    // Colori Componenti
    background: "#EBF8FF",
    surface: "#BEE3F8",
    text: "#1A365D",
    textSecondary: "#2C5282",
    border: "#90CDF4",
    
    // Colori Semantici
    success: "#38A169",
    warning: "#D69E2E", 
    error: "#E53E3E",
    info: "#2B6CB0", // Uses primary color for consistency
    visited: "#805AD5",
  },
  option3: { // Red Theme
    // Colori Principali
    primary: "#C53030",
    secondary: "#E53E3E",
    accent: "#F56565",
    
    // Colori Componenti
    background: "#FED7D7",
    surface: "#FEB2B2", 
    text: "#742A2A",
    textSecondary: "#C53030",
    border: "#FC8181",
    
    // Colori Semantici
    success: "#38A169",
    warning: "#D69E2E",
    error: "#C53030", // Uses primary color for consistency
    info: "#3182CE",
    visited: "#805AD5",
  },
} as const;

export type ThemeKey = keyof typeof colorThemes;

// Color organization for the ColorsSection component
export const colorSections = {
  principali: {
    title: "Colori Principali",
    colors: ["primary", "secondary", "accent", "background"] as const,
  },
  componenti: {
    title: "Colori Componenti", 
    colors: ["surface", "text", "textSecondary", "border"] as const,
  },
  semantici: {
    title: "Colori Semantici",
    colors: ["success", "warning", "error", "info", "visited"] as const,
  },
} as const;