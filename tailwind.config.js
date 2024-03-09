/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./main/templates/*.html",
    "./main/static/js/*.js",
  ],
  theme: {
    extend: {
      colors: {
        "footer": "#1D1D1D",
      },
    },
  },
  plugins: [
    'prettier-plugin-tailwindcss',
    require('flowbite/plugin'),
],
}

