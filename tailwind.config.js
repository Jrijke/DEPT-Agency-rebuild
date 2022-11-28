/** @type {import('tailwindcss').Config} */
module.exports = {
 content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'dept-black': '#121212',
      }
    },
    fontFamily: {
      sans: ['MaisonNeue', 'sans-serif']
    }
  },
  plugins: [],
}
