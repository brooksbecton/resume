/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: "class",
  plugins: [],
  theme: {
    extend: {
      animation: {
        fadeToBlack: "fadeToBlack 0.5s ease-in-out",
        fadeToLight: "fadeToBlack 0.5s ease-in-out reverse",
      },
      keyframes: (theme) => ({
        fadeToBlack: {
          "0%": {
            backgroundColor: theme("colors.slate.200"),
            textColor: theme("color.slate.900"),
          },
          "100%": {
            backgroundColor: theme("colors.stone.900"),
            textColor: theme("color.slate.100"),
          },
        },
      }),
    },
  },
};
