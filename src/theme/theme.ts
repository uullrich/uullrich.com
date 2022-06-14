import { DefaultTheme } from "styled-components";

export const defaultTheme: DefaultTheme = {
  borderRadiusSmall: "8px",
  borderRadiusNormal: "10px",
  disabledOpacity: "0.8",
  dimmer: {
    color: "#000000",
    opacity: ".2",
  },
  palette: {
    separator: "#856ffb",
    background: {
      main: "#333333",
      contrastText: "#ffffff",
    },
    navigation: {
      regular: {
        main: "#333333",
        contrastText: "#ffffff",
      },
      transparent: {
        main: "inherit",
        contrastText: "#000000",
      },
    },
    footer: {
      main: "#856ffb",
      contrastText: "#ffffff",
    },
    chevron: {
      main: "#ffffff",
      hover: "#856ffb",
    },
    jumbo: {
      main: "rgba(0,0,0,0.5)",
      contrastText: "#ffffff",
    },
    card: {
      main: "rgba(0,0,0,0.5)",
      contrastText: "#ffffff",
    },
    primary: {
      main: "#856ffb",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#f3b31b",
      contrastText: "#ffffff",
    },
  },
};
