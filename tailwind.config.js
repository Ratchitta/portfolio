/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Noto Sans Thai"],
      },
    },
  },
  plugins: [require("@headlessui/tailwindcss")],
};
