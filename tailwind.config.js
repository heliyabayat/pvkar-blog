/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      container: {
        center: true,
      },
      fontFamily: {
        sans: ["iransans", "sans-serif"],
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    rtl: true,
  },
};
