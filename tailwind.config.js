/** @type {import('tailwindcss').Config} */
export default {
  content: [
    // Add this line after installing
    // npm install postcss-flexbugs-fixes postcss-normalize postcss-preset-env
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
        cursive: ["Pacifico", "cursive"],
      },
      colors: {
        // primary: "#854d3d",
        primary: "#4e3b35",
        // secondary: "#4a1e1b",
        secondary: "#9A8174",
        // brandDark: "#270c03",
        brandDark: "#221C0F",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
        },
      }
    },
  },
  plugins: [],
}

