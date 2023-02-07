/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: [
    // "./app/**/*.{js,ts,jsx,tsx}",
    // "./pages/**/*.{js,ts,jsx,tsx}",
    // "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
    "./public/index.html",
  ],

  darkMode: "class",
  theme: {
    extend: {},
    fontFamily: {
      sans: ["Roboto"],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
