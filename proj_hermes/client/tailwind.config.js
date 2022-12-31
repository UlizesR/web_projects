/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./node_modules/flowbite-react/**/*.js",
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'dalek': ['Dalek Pinpoint']
      },
      backgroundImage: {
        "volumen": "url('/images/hermesrotulus_volumen.png')",
        "rotulus": "url('/images/hermesrotulus_volumen2.png')",
      },
      padding: {
        '1/10': '10%',
        '1/5': '20%',
      },
      minHeight: {
        '4tf': '435px',
        '5f': '550px'
      },
      maxHeight: {
        '7h': '700px'
      },
      minWidth: {
        '2e': '280px',
        '3e': '380px',
        '5sf': '575px',
        '7h': '700px'
      }
    },
  },
  plugins: [
    require("flowbite/plugin")
  ],
}
