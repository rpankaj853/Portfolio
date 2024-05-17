/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        customPink: "#e21a6d",
        customGray: "#f5f5f5",
        customDarkBlue: "#1b242f",
        customLightAqua: "#06c2c9",
        customPartical: "#252934",
      },
    },
  },
  plugins: [require("tailwindcss"), require("autoprefixer")],
};
