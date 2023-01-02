/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'volumen': 'url("/images/hermesrotulus_volumen.png")',
        'rotulus': 'url("/images/hermesrotulus_volumen2.png")'
      },
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
