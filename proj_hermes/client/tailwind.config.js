/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,jsx}",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'dalek': ['Dalek Pinpoint']
      },
      backgroundImage: {
        'scroll1': "url('/public/rotulus1.png')",
        'scroll2': "url('/public/rotulus2.png')"
      },
      minWidth: {
        '2e': '280px',
        '3h': '300px',
        '4h': '400px',
        '5h': '500px'
      },
      minHeight: {
        '3f': '350px',
        '5f': '550px',
        '1t': '1100px'
      },
      maxWidth: {
        '8h': '800px'
      },
      maxHeight: {
        '4/5': '80%'
      },
    },
  },
  plugins: [],
}
