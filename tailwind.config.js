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
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
      },
    },
  },
  plugins: [require("tailwindcss"), require("autoprefixer")],
};
