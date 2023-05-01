/** @type {import('tailwindcss').Config} */
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
  plugins: [],
};
