/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        abeezee: ["abeezee-regular"],
        
        
      },
      colors: {
        primary: {
          dark: "#06000D",
          light: "#FAFAFA",
          light_gray: "#FFFFFF",
        },
        background: {
          light: "#6F12E1",
          dark: "#180D42",
        },
        accent: {
          purple: "#6F12E1",
          dark: "#262626",
        },
        neutral: {
          900: "#322D2D",
          800: "#5B5757",
          700: "#848181",
          600: "#ADABAB",
          500: "#D6D5D5",
          400: "#FFFFFF",
        },
      },
    },
  },
  plugins: [],
};
