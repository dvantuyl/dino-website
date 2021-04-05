const colors = require('tailwindcss/colors');

module.exports = {
  purge: {
    content: ['_site/**/*.html'],
    options: {
      safelist: [],
    },
  },
  theme: {
    extend: {
      colors: {
        amber: colors.amber,
      },
    },
  },
  variants: {},
  plugins: [],
};
