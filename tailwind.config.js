/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        sans: "font-sans",
      },
      colors: {
        primary: "#212121",
        secondary: "#cf2e2e",
        tertiary: "#f2f2f2",
        scrollbarcolor: "#858585",
      },
      screens: {
        'xlg': '1150px',
        // => @media (min-width: 1150px) { ... }
      },
    },
  },
  plugins: [
      require('@tailwindcss/line-clamp'),
  ],
};
