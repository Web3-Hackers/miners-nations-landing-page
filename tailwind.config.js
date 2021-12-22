module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./components/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        lg: "925px",
        md: "800px",
        sm: "525px",
      },
    },
  },
  plugins: [],
};
