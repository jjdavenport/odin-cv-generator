/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        custom: ["Basier Circle", "sans-serif"],
      },
      backgroundImage: {
        dots: "url('/src/assets/dot-background.png')",
      },
    },
  },
  plugins: [],
};
