/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        lg: "1.5rem",
      },
      screens: {
        xl: "1200px",
      },
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: "#0EA5E9",
          dark: "#0284C7",
          light: "#7DD3FC",
        },
        accent: "#22C55E",
  brand: '#95ab7d',
  danger: '#FF3B30',
        muted: "#64748B",
        ink: "#0F172A",
        paper: "#F8FAFC",
      },
      fontFamily: {
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "Segoe UI",
          "Roboto",
          "Helvetica",
          "Arial",
          "Noto Sans",
          "Apple Color Emoji",
          "Segoe UI Emoji",
          "Segoe UI Symbol",
          "Noto Color Emoji",
        ],
      },
    },
  },
  plugins: [],
};
