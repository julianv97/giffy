module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    /* minHeight: {
      0: "0",
      big: "12rem",
    }, */
    extend: {
      gridTemplateColumns: {
        layout: "repeat(auto-fit, minmax(300px, 1fr))",
      },
      colors: {
        'purple-back': '#18061f',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
