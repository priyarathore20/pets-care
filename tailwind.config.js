/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors: {
      secondaryBlue: "#232333",
      primaryBlue: "#2B2C40",
      formTitle: "#747587",
      formButton: "#696CFF",
      formHeading: "#DBDBEB",
      white: "white",
      black: "black",
      darkGray: "#C0C6CE",
      hover: "rgba(105, 108, 255, 0.5) ",
      bgLight: "rgb(245,245,249)",
      grayHeading: "#4D5F71"
    },
  },
  plugins: [],
};
