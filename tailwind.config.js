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
    screens: {
      "sm": { "max": "767.98px" },
      "md": { "min": "768px", "max": "991.98px" },
      "lg": { "min": "992px" }
    },
    extend: {},
  },
  plugins: [],
}