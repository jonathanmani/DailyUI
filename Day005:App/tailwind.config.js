/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./dist/index.html"],
  theme: {
    extend: {
      padding: {
        "1/2": "50%",
        full: "100%",
      },
    },
  },
  plugins: [require("prettier-plugin-tailwindcss")],
};
