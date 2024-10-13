/** @type {import('tailwindcss').Config} */
export default {
  content: ["index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xs: "390px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1440px",
      "3xl": "1536px",
    },
    extend: {
      colors: {
        primary: "#E71321",
        "primary-800": "#EC424D",
        "primary-600": "#F1717A",
        "primary-400": "#F5A1A6",
        "primary-200": "#FAD0D3",

        // yellow
        secondary: "#FFC845",
        "secondary-800": "#FFD36A",
        "secondary-600": "#FFDE8F",
        "secondary-400": "#FFE9B5",
        "secondary-200": "#FFF4DA",
        // purple
        "secondary-A100": "#440099",
        "secondary-A200": "#6933AD",
        "secondary-A400": "#8F66C2",
        "secondary-A700": "#B499D6",

        // info
        // blue
        info: "#00C1D5",
        "info-800": "#33cddd",
        "info-600": "#66dae6",
        "info-400": "#99e6ee",
        "info-200": "#ccf3f7",
        // green
        "info-A100": "#97D700",
        "info-A200": "#ACDF33",
        "info-A400": "#C1E766",
        "info-A700": "#D5EF99",

        // dark
        dark: "#2d2926",
      },
      fontFamily: {
        comfortaa: ["Comfortaa", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      lineHeight: {
        7.5: "28.8px",
      },
    },
  },
  plugins: [],
};
