/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "banner-main": "url('/src/assets/clothing.jpg')",
        "banner-favorite": "url('/src/assets/macar.jpg')",
        "error-illustration": "url('/src/assets/error_illustration.jpg')",
      },
      height: {
        128: "36rem",
      },
      width: {
        128: "36rem",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
