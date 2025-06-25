/** @type {import('tailwindcss').Config} */
const defaultConfig = require("shadcn/ui/tailwind.config")

module.exports = {
  ...defaultConfig,
  content: [
    ...defaultConfig.content,
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    ...defaultConfig.theme,
    extend: {
      ...defaultConfig.theme.extend,
      colors: {
        ...defaultConfig.theme.extend.colors,
        // Custom red palette for accents only
        accent: {
          dark: "#1D1616", // Very dark brown/black
          red: "#8E1616", // Dark red
          bright: "#D84040", // Bright red
          light: "#EEEEEE", // Light gray
        },
        // Main palette - black and white focused
        primary: {
          ...defaultConfig.theme.extend.colors.primary,
          900: "#000000", // Pure black
          800: "#1a1a1a", // Very dark gray
          700: "#2d2d2d", // Dark gray
          600: "#404040", // Medium dark gray
          500: "#666666", // Medium gray
          400: "#999999", // Light gray
          300: "#cccccc", // Very light gray
          200: "#e6e6e6", // Almost white
          100: "#f5f5f5", // Off white
          50: "#ffffff", // Pure white
        },
      },
      borderRadius: {
        ...defaultConfig.theme.extend.borderRadius,
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        ...defaultConfig.theme.extend.keyframes,
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
        flip: {
          "0%": { transform: "rotateY(0)" },
          "100%": { transform: "rotateY(180deg)" },
        },
        "flip-back": {
          "0%": { transform: "rotateY(180deg)" },
          "100%": { transform: "rotateY(0)" },
        },
        glow: {
          "0%, 100%": { boxShadow: "0 0 20px rgba(216, 64, 64, 0.3)" },
          "50%": { boxShadow: "0 0 40px rgba(216, 64, 64, 0.6)" },
        },
      },
      animation: {
        ...defaultConfig.theme.extend.animation,
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        flip: "flip 0.6s ease-in-out",
        "flip-back": "flip-back 0.6s ease-in-out",
        glow: "glow 2s ease-in-out infinite",
      },
    },
  },
  plugins: [...defaultConfig.plugins, require("tailwindcss-animate")],
}
