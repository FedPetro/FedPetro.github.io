/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,css}"],
  theme: {
    extend: {
      // calcolatrice
      colors:{
        'primary' : '#22252d', 
        'secondary': '#292d36', 
        'operators' : '#f56b6a', 
        'numbers' : '#fefefe',
        'functions' : '#25d7bf',
        'homeButton' : '#212529',
        'bgHoverButton' : '#f8f9fa',
      }, 
      fontFamily:{
        'display' : "'Roboto', sans-serif",
        'h1Button' : "'Lexend', sans-serif"
      },

      dropShadow: {
        '4xl': '0px 16px 10px #000000'
      }
    },

  },
  plugins: [],
}
