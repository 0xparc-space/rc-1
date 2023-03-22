/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "media",
  theme: {
    extend: {
      colors: {
        "light-neutral-0": "#FFFFFF",
        "light-neutral-100": "#EDF0F4",
        "light-neutral-300": "#CAD4DE",
        "dark-neutral-0": "#0C0D0E",
        "dark-neutral-200": "#1F2225",
      },
    },
  },
  plugins: [],
};
