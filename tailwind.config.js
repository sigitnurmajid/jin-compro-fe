/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        barlow: ["Inter", "sans-serif"],
      },
      fontSize: {
        xs: ["12px", "16px"],
        sm: ["14px", "20px"],
        base: ["16px", "19.5px"],
        lg: ["18px", "21.94px"],
        xl: ["20px", "24.38px"],
        "2xl": ["24px", "29.26px"],
        "3xl": ["28px", "50px"],
        "4xl": ["48px", "58px"],
        "8xl": ["96px", "106px"],
      },
      colors: {
        "primary-orange": "#D9683C",
        "primary-green": "#015A6A",
        "primary-white": "#E8ECEE",
        "secondary-white": "#F2EFE6",
      },
      screens: {
        wide: "1440px",
      },
    },
  },
  plugins: [],
};
