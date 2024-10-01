import { createTheme, ThemeOptions } from "@mui/material";

const customBreakpoints = {
  values: {
    xs: 0,
    sm: 600,
    md: 900,
    lg: 1200,
    xl: 1400,
    xxl: 1536,
  },
};

const themeOptions: ThemeOptions = {
  breakpoints: customBreakpoints,
  palette: {
    primary: {
      main: "#E71321",
      "800": "#EC424D",
      "600": "#F1717A",
      "400": "#F5A1A6",
      "200": "#FAD0D3",
    },
    secondary: {
      // yellow
      main: "#FFC845",
      "800": "#FFD36A",
      "600": "#FFDE8F",
      "400": "#FFE9B5",
      "200": "#FFF4DA",
      // purple
      A100: "#440099",
      A200: "#6933AD",
      A400: "#8F66C2",
      A700: "#B499D6",
    },
    info: {
      // blue
      main: "#00C1D5",
      "800": "#33cddd",
      "600": "#66dae6",
      "400": "#99e6ee",
      "200": "#ccf3f7",
      // green
      A100: "#97D700",
      A200: "#ACDF33",
      A400: "#C1E766",
      A700: "#D5EF99",
    },
    common: { black: "#2D2926" },
  },
};

export const theme = createTheme(themeOptions);
