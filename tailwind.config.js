module.exports = {
  mode: 'jit',
  purge: [
    './dist/**/*.html'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "dark-blue": "#002a5a",
        "main-blue": "#023878",
        "main-red": "#E30613",
      },
      fontSize: {
        "h1": "3.5rem",
        "h3": "2.5rem",
      },
      fontFamily: {
        "body": ['"Barlow"', "sans-serif"],
      },
      height: {
        "22": "5.5rem",
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}