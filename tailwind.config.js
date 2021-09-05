module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      gridTemplateColumns: {
        // Simple 16 column grid
       'layout': 'repeat(auto-fit, minmax(300px, 1fr))',

        // Complex site-specific column configuration

      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
