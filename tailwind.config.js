module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'hero-nous-2': "url('/img/chaux1.jpg')",
      }),
      backgroundColor: theme => ({
        ...theme('colors'),
       }),
      fontFamily: {
        didot: ['Didot'],
        saonara: ['Saonara']
      },
      colors: {
        'beige': '#e8ded4',
        'beige-200': '#c9b19a',
        'beige-500': '#906f4d',
        'beige-800': '#f9f6f4'
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      fontSize: {
        '8xl': '6rem',
        '9xl': '7rem',
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
