/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./public/*.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'main': 'rgba(255 191 0 / 1)',
      'background': 'rgba(47 47 47 / 1)',
      'background-1': 'rgba(47 47 47 / 0.04)',
      'white': 'rgba(255 255 255 / 1)',
      'transparent': 'transparent',
    },
  },
  plugins: [],
}