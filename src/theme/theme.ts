import { DefaultTheme } from "styled-components";

/*
const primaryColor = '#856ffb';
const secondaryColor = '#f3b31b';
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
      hover: primaryColor,
    },
    footer: {
      main: "rgb(133, 111, 251, 0.7)",
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
      main: primaryColor,
      contrastText: "#ffffff",
    },
    secondary: {
      main: secondaryColor,
      contrastText: "#ffffff",
    },
    buzzword: {
      unselected: {
        main: 'rgb(133, 111, 251, 0.7)',
        contrastText: '#ffffff',
      },
      selected: {
        main: 'rgb(133, 111, 251, 1)',
        contrastText: '#ffffff',
      },
      hover: {
        main: 'rgb(133, 111, 251, 1)',
        contrastText: '#ffffff',
      },
      githubFill: '#ffffff',
    },
    button: {
      standard: {
        borderRadius: "10px",
        enabled: {
          opacity: "1",
        },
        disabled: {
          opacity: "0.8",
        },
        palette: {
          main: primaryColor,
          contrastText: "#ffffff",
        }
      },
      alternative: {
        borderRadius: "10px",
        enabled: {
          opacity: "1",
        },
        disabled: {
          opacity: "0.8",
        },
        palette: {
          main: secondaryColor,
          contrastText: "#ffffff",
        }
      }
    },
    inputs: {
      border: "0px",
      outline: "auto",
      outlineColor: primaryColor,
    },
    iconPrimary: primaryColor,
    iconSecondary: secondaryColor,
  },
};
*/

const primaryColor = "#3eb0ef";
const secondaryColor = "#f3b31b";

export const defaultTheme: DefaultTheme = {
  borderRadiusSmall: "8px",
  borderRadiusNormal: "10px",
  disabledOpacity: "0.8",
  dimmer: {
    color: "#000000",
    opacity: ".2",
  },
  palette: {
    separator: primaryColor,
    background: {
      main: "#e4e4e4",
      contrastText: "#333333",
    },
    navigation: {
      regular: {
        main: "#ffffff",
        contrastText: "#000000",
      },
      transparent: {
        main: "inherit",
        contrastText: "#000000",
      },
      hover: primaryColor,
    },
    footer: {
      main: primaryColor,
      contrastText: "#ffffff",
    },
    chevron: {
      main: "#ffffff",
      hover: primaryColor,
    },
    jumbo: {
      main: "rgba(225,225,225,0.7)",
      contrastText: "#000000",
    },
    card: {
      main: "#f7f7f7",
      contrastText: "#333333",
    },
    primary: {
      main: primaryColor,
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#f3b31b",
      contrastText: "#ffffff",
    },
    buzzword: {
      unselected: {
        main: "#aeaeae",
        contrastText: "#000000",
      },
      selected: {
        main: primaryColor,
        contrastText: "#ffffff",
      },
      hover: {
        main: primaryColor,
        contrastText: "#ffffff",
      },
      githubFill: "#171515",
    },
    button: {
      standard: {
        borderRadius: "10px",
        enabled: {
          opacity: "1",
        },
        disabled: {
          opacity: "0.8",
        },
        palette: {
          main: primaryColor,
          contrastText: "#ffffff",
        },
      },
      alternative: {
        borderRadius: "10px",
        enabled: {
          opacity: "1",
        },
        disabled: {
          opacity: "0.8",
        },
        palette: {
          main: secondaryColor,
          contrastText: "#ffffff",
        },
      },
    },
    inputs: {
      border: "0px",
      outline: "auto",
      outlineColor: primaryColor,
    },
    iconPrimary: primaryColor,
    iconSecondary: secondaryColor,
  },
};
