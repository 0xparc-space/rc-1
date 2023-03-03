/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'light-neutral-100': '#EDF0F4',
        'light-neutral-300': '#CAD4DE',
      },
    },
  },
  plugins: [],
}
