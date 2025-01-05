import type { Config } from "tailwindcss";

export default {
  darkMode: "selector",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "blue-1": "oklch(95% 0.02 254)",
        "blue-2": "oklch(87% 0.06 254)",
        "blue-3": "oklch(80% 0.10 254)",
        "blue-4": "oklch(76% 0.13 254)",
        "blue-5": "oklch(62% 0.22 254)",
        "blue-6": "oklch(51% 0.15 254)",
        "blue-7": "oklch(42% 0.15 254)",
        "blue-8": "oklch(22% 0.05 254)",
        "blue-9": "oklch(17% 0.03 254)",
        "blue-10": "oklch(14% 0.02 254)",
        "orange-1": "oklch(95% 0.02 39)",
        "orange-2": "oklch(87% 0.06 39)",
        "orange-3": "oklch(80% 0.10 39)",
        "orange-4": "oklch(76% 0.13 39)",
        "orange-5": "oklch(62% 0.22 39)",
        "orange-6": "oklch(51% 0.15 39)",
        "orange-7": "oklch(42% 0.15 39)",
        "orange-8": "oklch(22% 0.05 39)",
        "orange-9": "oklch(17% 0.03 39)",
        "orange-10": "oklch(14% 0.02 39)",
        "graytone-1": "oklch(96% 0 0)",
        "graytone-2": "oklch(90% 0 0)",
        "graytone-3": "oklch(80% 0 0)",
        "graytone-4": "oklch(86% 0 0)",
        "graytone-5": "oklch(77% 0 0)",
        "graytone-6": "oklch(51% 0 0)",
        "graytone-7": "oklch(39.5% 0 0)",
        "graytone-8": "oklch(25% 0 0)",
        "graytone-9": "oklch(16% 0 0)",
        "graytone-10": "oklch(17% 0 0)",
        "red-4": "oklch(70% 0.24 27)",
        "red-7": "oklch(39.5% 0.16 27)",
        "purple-4": "oklch(75% 0.15 295)",
        "purple-7": "oklch(43% 0.24 295)",
        "yellow-4": "oklch(87% 0.2 90)",
        "yellow-7": "oklch(87% 0.2 90)",
        "green-3": "oklch(88% 0.24 147)",
        "green-6": "oklch(51% 0.2 147)",
      },
    },
  },
  plugins: [],
} satisfies Config;

/**
 * Variable naming conventions are as follows:
 * > Colors: "<color>-<variant>"
 */
