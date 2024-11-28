/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        orange: {
          150: "#f49217",
          250: "#f4921726",
        },
        gray: {
          75: "#d5d5d5",
          150: "#9d9d9d",
          250: "#3e3232bf",
          350: "#6C757D",
          450: "#333"
        },
        red:{
            150: "#f81539",
          },   
        green:{
            150: "#26de81",
          }    
      },
      screens:{
        xl1: "1440px"
      }
    },
  },
  plugins: [   require('@tailwindcss/line-clamp')],
}

