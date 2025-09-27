/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '370px',   // extra small screens
      },
      keyframes: {
        fadeInSlow: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        unwarp: {
          "0%": { transform: "translateY(0%)" },
          "100%": { transform: "translateY(-100%)" },
        },
      },
      animation: {
        fadeInSlow: "fadeInSlow 2.5s ease forwards",
        unwarp: "unwarp 2.5s ease forwards",
      },
    },
  },
  plugins: [],
}