/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "../src/HOC/**/*.{js,ts,jsx,tsx}",
    "../src/components/UI/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      mobileS: { min: "320px" },
      mobileM: { min: "375px" },
      mobileL: { min: "425px" },
      tablet: { min: "768px" },
      laptop: { min: "1024px" },
      laptopM: { min: "1200px" },
      laptopL: { min: "1440px" },
      desktopS: { min: "1536px" },
      desktop: { min: "1920px" },
      desktopL: { min: "2560px" },
    },
    extend: {
      height: {
        98: "29rem",
        104: "31rem",
        128: "32.5rem",
        138: "34rem",
        144: "38rem",
        148: "42rem",
        154: "50rem",
        155: "52.5rem",
      },
      width: {
        53: "13.33rem",
        61: "15.33rem",
        62: "16rem",
      },
      colors: {
        PrimaryColor: "#731022",
        SecondaryColor: "#BF0B3B",
        black: "#0D0D0D",
        Gray: "#595959",
        GrayLight: "#D9D9D9",
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};

