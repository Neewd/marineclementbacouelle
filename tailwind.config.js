module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
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
