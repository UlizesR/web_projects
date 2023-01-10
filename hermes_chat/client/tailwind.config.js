/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/layout/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        'dalek': 'Dalek Pinpoint'
      },
      backgroundImage: {
        'hermes': 'url("/assets/hermes.png")',
      },
    },
  },
  plugins: [],
}