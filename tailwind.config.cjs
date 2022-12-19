/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,vue,js,ts,jsx,tsx}"],
  theme: {
    screens: {
      desktop: "1280px",
      // mobile: "1279px",
    },
    colors: {
      mainBrand: "#FAFAFA",
      primaryBrand: "#BDD6D3",
      secondaryBrand: "#DCC634",
      thirdBrand: "#2C424B",
      detailBrand: "#FF51A5",
      primaryCol: "#16161D",
      secondaryCol: "#575757",
      fieldFrame: "CBCBCB",
      inactiveCol: "#D9D9D9",
      inactiveBgCol: "#F2F2F2",
      errorCol: "#DC2626",
      successCol: "#5188F6",
    },

    fontSize: {
      h1Desktop: ["61px", { lineHeight: "70px", letterSpacing: "1px" }],
      h1Mobile: ["32px", { lineHeight: "38px", letterSpacing: "1px" }],
      h2Desktop: ["49px", { letterSpacing: "2px" }],
      h2Mobile: ["28px", { letterSpacing: "2px" }],
      h3Desktop: ["31px", { letterSpacing: "2px" }],
      h3Mobile: ["25px", { letterSpacing: "2px" }],
      h4: ["20px", { letterSpacing: "2.6px" }],
      h5: ["20px", { lineHeight: "32.3px", letterSpacing: "2px" }],
      body: ["16px", { lineHeight: "25px", letterSpacing: "1.5px" }],
      footer: ["18px", { lineHeight: "32px", letterSpacing: "2px" }],
      button: ["20px", { lineHeight: "20px", letterSpacing: "6px" }],
    },

    fontFamily: {
      robotoCondensed: "'Roboto Condensed', sans-serif",
      lora: "'Lora', serif",
    },

    fontWeight: {
      bold: 700,
    },

    extend: {},
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
};
