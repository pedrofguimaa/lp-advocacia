/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        wood: {
          950: "#17120E",
          900: "#21180F",
          800: "#2D1F13",
          700: "#4A3422",
          600: "#6E4B2E",
          500: "#8E6744",
        },
        cream: {
          50: "#F8F2E8",
          100: "#EFE4D4",
          200: "#DCC9AE",
        },
        gold: {
          400: "#BA9A68",
          500: "#A98756",
        },
        graphite: {
          800: "#212121",
          900: "#151515",
        },
      },
      boxShadow: {
        premium: "0 18px 40px rgba(0, 0, 0, 0.28)",
        soft: "0 10px 25px rgba(0, 0, 0, 0.14)",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(22px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        pulseGlow: {
          "0%, 100%": { boxShadow: "0 0 0 rgba(169, 135, 86, 0)" },
          "50%": { boxShadow: "0 0 24px rgba(169, 135, 86, 0.24)" },
        },
      },
      animation: {
        fadeUp: "fadeUp 0.8s ease-out forwards",
        pulseGlow: "pulseGlow 2.8s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
