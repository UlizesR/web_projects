/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx}",
    "./public/**/*.html"
  ],
  theme: {
    extend: {
      fontFamily: {
        'dalek': ['Dalek Pinpoint']
      },
      backgroundImage: {
        'scroll': "url('images/rotulus.png')"
      },
     
    },
  },
  plugins: [],
}
