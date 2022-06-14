module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        black: "#000107",
        slate: "#E3F1EF",
        green: "#418D89",
        gray: "#D9D9D9"
      },
      fontFamily: {
        Syne: ["Syne", "sans-serif"]
      }
    }
  },
  plugins: [require("@tailwindcss/forms")]
};
