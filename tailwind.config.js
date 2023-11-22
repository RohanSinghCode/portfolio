/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    colors: {
      'appbar-darkMode': '#3F2E3E',
      'body-darkMode': '#331D2C',
      'text-darkMode': '#EFE1D1'
    }
  },
  plugins: [],
  darkMode: 'class'
}

