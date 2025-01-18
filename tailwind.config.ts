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
        "blue-500": "#2e4ff5",
      },
      backgroundImage: {
        "hero-background": "url('/images/hero-background.jpg')",
      },
    },
  },
  plugins: [],
} satisfies Config;
