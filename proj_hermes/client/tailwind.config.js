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
        "hermes": "url('/public/white_hermes_sandal.png')",
      },
      minWidth: {
        '2e': '280px',
        '3h': '300px',
        '3t': '320px',
        '4h': '400px',
        '5h': '500px',
        '5ss': '576px',
        '8h': '800px',
        '6_8': '608px',
        '1t': '1100px'
      },
      minHeight: {
        '3f': '350px',
        '4h': '400px',
        '4f': '450px',
        '5f': '550px',
        '1t': '1100px'
      },
      maxWidth: {
        '8h': '800px'
      },
      maxHeight: {
        '4/5': '80%'
      },
      width: {
        '100': '400px'
      }
    },
  },
  plugins: [
    require("flowbite/plugin")
  ],
}
