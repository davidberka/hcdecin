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
        "h4": "2rem",
      },
      fontFamily: {
        "body": ['"Barlow"', "sans-serif"],
      },
      height: {
        "22": "5.5rem",
        "88": "22rem",
        "104": "32rem",
        "article-img": "47.4rem"
      },
      gridTemplateColumns: {
        "top-articles": "1.3fr 0.7fr",
      },
      screens: {
        "3xl": "1920px",
      },
      minHeight: {
        "500": "73.9vh",
      },
      width: {
        "15p": "15%",
        "20p": "20%",
        "125p": "12.5%",
        "325p": "32.5%",
      }
    },
  },
  variants: {
    extend: {
      border: ['last'],
    },
  },
  plugins: [],
}