/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "poppins", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        gallient: ["Gallient", "sans-serif"],
        glitten: ["glitten", "sans-serif"]
      },
      colors: {
        "gold" : "#BC8F00"
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide'),
    require("daisyui")
  ],
};
