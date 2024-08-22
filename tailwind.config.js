/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    screens: {
      xl: { max: "1200px" },
      lg: { max: "992px" },
      tbl: { max: "767px" },
      medium: { max: "650px" },
      mobile: { max: "576px" },
      small: { max: "480px" },
      xs: { max: "360px" },
    },
    container: {
      padding: 10,
      center: true,
    },
    extend: {
      fontFamily: {
        gilroy: "Gilroy",
        rajdhani: "Rajdhani",
        saira: "Saira",
      },
      colors: {
        black: "#0C0C0C",
        red: "#E93224",
        green: "#75f972",
        yellow: "#F4FD2B",
      },
    },
  },
  plugins: [],
};
