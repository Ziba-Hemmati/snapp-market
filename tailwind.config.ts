import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "gray-150": "#373737",
        "blue-50": "#f2f7ff",
        "blue-300": "#007aff",
        "blue-500": "#2e4ff5",
        "blue-600": "#1c33b1",
        "blue-400": "#2e4cf5",
        "blue-700": "#1b31ad",
        "red-300": "#ff0000",
        "red-500": "#df1d17",
        "red-600": "#fa0f1b",
        "gray-600": "#616475",
        "black-600": "#30354b",
      },
      backgroundImage: {
        "hero-background": "url('/images/hero-background.jpg')",
        "pattern-background": "url('/images/pattern.jpg')",
      },
    },
  },
  plugins: [],
} satisfies Config;
