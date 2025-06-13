// src/lib/theme.ts
export type ColorSet = {
  primary: string;
  secondary: string;
  accent: string;
  background: string;
  surface: string;
  text: string;
  textSecondary: string;
  border: string;
};

export const colorThemes = {
  option1: {
    primary: "#2D3748",
    secondary: "#4A5568",
    accent: "#718096",
    background: "#F7FAFC",
    surface: "#EDF2F7",
    text: "#1A202C",
    textSecondary: "#718096",
    border: "#E2E8F0",
  },
  option2: {
    primary: "#2B6CB0",
    secondary: "#3182CE",
    accent: "#4299E1",
    background: "#EBF8FF",
    surface: "#BEE3F8",
    text: "#1A365D",
    textSecondary: "#2C5282",
    border: "#90CDF4",
  },
  option3: {
    primary: "#C53030",
    secondary: "#E53E3E",
    accent: "#F56565",
    background: "#FED7D7",
    surface: "#FEB2B2",
    text: "#742A2A",
    textSecondary: "#C53030",
    border: "#FC8181",
  },
} as const;

export type ThemeKey = keyof typeof colorThemes;