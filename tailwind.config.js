/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  darkMode: 'class', // Enable dark mode
  theme: {
    extend: {
      colors: {
        primary: '#062b41',
        secondary: '#14171A',
        accent: '#F5F8FA',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

