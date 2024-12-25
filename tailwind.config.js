/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'ug-blue': "#0A2D56",
        'ug-gold': "#B99D64",
        'ug-grey': "#525252"
      },
      screens: {
        'xs': '375px'
      }
    },
  },
  plugins: [],
}