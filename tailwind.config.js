const {fontFamily} = require('tailwindcss/defaultTheme');
const colorStyles = require('./color-styles');
const {rem} = require('./helpers');

module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    colors: colorStyles,
    extend: {
      screens: {
        xs: '480px',
      },
      fontFamily: {
        sans: [...fontFamily.sans],
      },
      fontSize: {
        xs: [rem(11), rem(15.03)],
        sm: [rem(13), rem(17.76)],
        '2xl': [rem(24), rem(32.78)],
        '2.5xl': [rem(28), rem(38.25)],
      },
      spacing: {
        18: rem(72),
        26: rem(104),
      },
      borderRadius: {
        '2xl': rem(15),
      },
      letterSpacing: {
        tight: rem(-0.3),
        widest: rem(4.09),
      },
      maxWidth: {
        xl: rem(540),
        auto: 'auto',
      },
      minWidth: {
        auto: 'auto',
      },
    },
  },
  plugins: [],
};
