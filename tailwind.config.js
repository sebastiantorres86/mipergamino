module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    extend: {
      width: {
        '128': '32rem'
      }
    },
    container: {
      center: true,
    },
    fill: theme => ({
      'black': theme('colors.black.600'),
      'red': theme('colors.red.600'),
      'green': theme('colors.green.600'),
      'blue': theme('colors.blue.600'),
    })
  },
  variants: {
    backgroundColor: ['responsive', 'hover', 'focus'],
  },
  plugins: [],
}
