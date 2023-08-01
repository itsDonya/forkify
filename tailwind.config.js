/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {
      colors: {
        orange: "#fbdb89",
        peach: "#f48982",
      },
      fontFamily: {
        nunito: ['"Nunito Sans"'],
      },
    },
  },
  plugins: [],
};
