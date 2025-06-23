/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      brand: {},
      fontFamily: {
        'playfair': ['"Playfair Display"', 'serif'],
        'montserrat': ['Montserrat', 'sans-serif'],
      },
      transitionDuration: {
        '2000': '2000ms',
      },
    },
  },
  plugins: [],
}
