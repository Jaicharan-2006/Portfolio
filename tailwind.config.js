/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#07111F",
        card: "#0F172A",
        primary: "#00D9FF",
        secondary: "#7C3AED",
      },
      boxShadow: {
        glass:
          "0 8px 32px rgba(0,0,0,0.35)",
        neu:
          "8px 8px 20px rgba(0,0,0,0.4), -8px -8px 20px rgba(255,255,255,0.03)",
      },
    },
  },
  plugins: [],
};