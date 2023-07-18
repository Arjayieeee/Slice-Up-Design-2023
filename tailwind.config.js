/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        primary:'#2478CC',
        secondary:'#FFC700',
        green: '#0C9C00'
      }
    },
  },
  plugins: [],
}