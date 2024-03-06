/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      darkThemeBgColor: "#050505",
      darkThemeSearchBarBgColor: "#1f1f1f",
      textColor: "#2d2d2d",
      darkThemeDecorationColor: "#3a3a3a",
      accentColor: "#757575",
      decorationColor: "#e9e9e9",
      searchBarBgColor: "#f4f4f4",
      bgColor: "#FFFFFF",
      darkThemeTextColor: "#ffffff",
      secondaryColor: "#a445ed",
      wrongInputField: "#ff5252",
    },
    fontFamily: {
      inter: ["Inter", "sans-serif"],
      lora: ["Lora", "serif"],
      inconsolata: ["Inconsolata", "monospace"],
    },
    fontSize: {
      headingL: "4rem",
      headingM: "1.5rem",
      headingS: "1.25rem",
      bodyM: "1.125rem",
      bodyS: "0.875rem",
    },
    extend: {},
  },
  plugins: [],
};
