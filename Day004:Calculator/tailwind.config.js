/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./dist/index.html",],
  theme: {
    extend: {
      colors: {
        'lightGrey': '#D4D4D2',
        'darkGrey': '#1C1C1C',
        'mediumGrey': '#505050',
        'ios-orange': '#FF9500',
      },
    },
  },
  plugins: [],
}
