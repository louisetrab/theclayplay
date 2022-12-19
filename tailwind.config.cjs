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
      h6: ["18px", { letterSpacing: "2px" }],
      h7: ["14px", { letterSpacing: "2px" }],
      h8: ["12px", { letterSpacing: "2px" }],
      body: ["16px", { lineHeight: "25px", letterSpacing: "1.5px" }],
      bodySmall: ["12px", { letterSpacing: "0.3px" }],
      footer: ["18px", { lineHeight: "32px", letterSpacing: "2px" }],
      button: ["20px", { lineHeight: "20px", letterSpacing: "6px" }],
      bannerBig: ["16px", { letterSpacing: "1.2px" }],
      bannerSmall: ["11px", { letterSpacing: "1.2px" }],
      NavDesktop: ["18px", { letterSpacing: "2.6px" }],
      menuDesktop: ["16px", { letterSpacing: "2.6px" }],
      inputTxt: ["14px"],
      inputLabel: ["11px"],
      breadcrumbsDesktop: ["14px", { letterSpacing: "0.3px" }],
      breadcrumbsMobile: ["10px", { letterSpacing: "0.3px" }],
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
