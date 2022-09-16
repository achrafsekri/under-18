/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'main-pattern': "url('/grid.svg')",
      },
      colors:{
        green:'#7CFA90'
      },
      width:{
        fhd:'1920px'
      },
      screens:{
        'wide':'1920px'
      }
    },
  },
  plugins: [],
}