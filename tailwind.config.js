import fluid, { extract, screens } from "fluid-tailwind";

/** @type {import('tailwindcss').Config} */
export default {
  content: {
    files: ["./src/**/*.{html,js,jsx}"],
    extract,
  },
  theme: {
    extend: {
      screens,
      fontFamily: {
        custom: ["Basier Circle", "sans-serif"],
      },
    },
  },
  plugins: [fluid],
};
