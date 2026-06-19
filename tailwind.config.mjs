/** @type {import('tailwindcss').Config} */
const flowbite = require("flowbite-react/tailwind");

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        forest: {
          50:  "#f0f7f3",
          100: "#d8ece0",
          200: "#b1d9c1",
          300: "#7fbfa0",
          400: "#50a07d",
          500: "#2D6A45",
          600: "#1C4A30",
          700: "#163a26",
          800: "#0f2a1b",
          900: "#081a10",
        },
        gold: {
          100: "#fdf3d7",
          200: "#f8e0a0",
          300: "#f0c85a",
          400: "#C9A44A",
          500: "#a8832e",
          600: "#8a6820",
        },
        beige: {
          50:  "#FAFAF5",
          100: "#F5F0E8",
          200: "#EDE6D8",
          300: "#DDD6CC",
          400: "#C8BFB0",
          500: "#A89C8C",
        },
        charcoal: {
          50:  "#f7f7f7",
          100: "#e3e3e3",
          200: "#c8c8c8",
          300: "#a4a4a4",
          400: "#6b6b6b",
          500: "#3d3d3d",
          600: "#1c1c1e",
          700: "#141414",
          800: "#0a0a0a",
        },
      },
      fontFamily: {
        serif:  ["var(--font-cormorant)", "Cormorant Garamond", "Georgia", "serif"],
        sans:   ["var(--font-jost)", "Jost", "system-ui", "sans-serif"],
        script: ["var(--font-yellowtail)", "cursive"],
      },
      spacing: {
        18: "4.5rem",
        22: "5.5rem",
        26: "6.5rem",
        30: "7.5rem",
      },
      maxWidth: {
        "8xl": "88rem",
        "9xl": "96rem",
      },
      animation: {
        "fade-up":    "fadeUp 0.8s ease-out both",
        "fade-in":    "fadeIn 0.6s ease-out both",
        "slide-left": "slideLeft 0.8s ease-out both",
        "counter":    "counterPulse 0.3s ease-out both",
      },
      keyframes: {
        fadeUp: {
          "0%":   { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%":   { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideLeft: {
          "0%":   { opacity: "0", transform: "translateX(-30px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        counterPulse: {
          "0%":   { transform: "scale(1.1)" },
          "100%": { transform: "scale(1)" },
        },
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [
    flowbite.plugin(),
  ],
};
