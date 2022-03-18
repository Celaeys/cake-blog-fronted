module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      'primary':'#4E2C46',
      'secondary': {
        'standard':'#93585A',
        'hover':'#ffd1e8',
      },
      'text-color-light':'#DFDAE0',
      'text-color-dark':'#443C48',
      'white': '#fff',
    },
    fontFamily: {
      'comforter': ['"Dancing Script"', 'cursive']
    }
  },
  plugins: [],
};
