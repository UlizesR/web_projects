/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'dalek': 'Dalek Pinpoint'
      },
      flex: {
        '2': '2 2 0%'
      }
    },
  },
  plugins: [],
}
