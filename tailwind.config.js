/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        ubuntu: ["Ubuntu", "sans-serif"],
        Sans: ["Open Sans", "sans-serif"],
        Barlow: ["Barlow Semi Condensed", "sans-serif"],
      },
    },
  },
  plugins: [],
};
