/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors:{
        gray: {
          150: "#f4921726"
        }
      },
      screens:{
        xl1: "1440px"
      }
    },
  },
  plugins: [],
}

