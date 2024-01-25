/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      nunito: "'Nunito', sans-serif"
    },
    backgroundImage: {
      'bgImg': "url('./image/svg.png')"
    },
    extend: {},
  },
  plugins: [],
}