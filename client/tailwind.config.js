const colors = require('tailwindcss/colors');

module.exports = {
  purge: [
    './src/**/*.{js,jsx,ts,tsx}',
    './public/index.html'
  ],
  darkMode: 'media', // false or 'media' or 'class'
  theme: {
    extend: {
      minWidth: {
        '0': '0',
        '1/4': '25%',
        '1/3': '45%',
        '1/2': '50%',
        '3/4': '75%',
        'full': '100%',
      },
      colors: {
        'cyan': colors.cyan,
        'teal': colors.teal,
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
