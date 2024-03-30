/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
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
      fontFamily: {
        'sans': ['"olneylight"', ...defaultTheme.fontFamily.sans],
        'orig-sans': [...defaultTheme.fontFamily.sans]
      },
    },
  },
  plugins: [
    'prettier-plugin-tailwindcss',
    require('flowbite/plugin'),
  ],
  important: true,
}

