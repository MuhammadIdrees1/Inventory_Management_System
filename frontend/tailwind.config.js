/** @type {import('tailwindcss').Config} */
const purgecss = require("@fullhuman/postcss-purgecss");
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        backgroundImage: "url('./src/assets/images/background.jpg')",
      },
      colors: {
        MediumAquamarine: "#72C4AF",
      },
    },
  },
  plugins: [
    purgecss({
      content: ["./**/*.html"],
    }),
    ``,
  ],
};
