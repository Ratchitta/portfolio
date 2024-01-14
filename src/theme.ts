import { createTheme } from "@mui/material/styles";

const MiSansThaiPath = "/assets/fonts/MiSansThai/MiSansThaiVF.woff2";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#DB4B68",
      light: "#F4BBC8",
      dark: "#AF2E4B",
    },
    secondary: {
      main: "#FA8C00",
      light: "#FFCC74",
      dark: "#F06B00",
    },
    rose: {
      main: "#C5334F",
      900: "#762140",
      800: "#9B2947",
      700: "#AF2E4B",
      600: "#C5334F",
      500: "#D43751",
      400: "#DB4B68",
      300: "#E36781",
      200: "#EC90A4",
      100: "#F4BBC8",
      50: "#FAE4E9",
    },
    yellow: {
      main: "#FA8C00",
      900: "#E74E00",
      800: "#F06B00",
      700: "#F57B00",
      600: "#FA8C00",
      500: "#FE9800",
      400: "#FEA700",
      300: "#FEB73A",
      200: "#FFCC74",
      100: "#FFE0AB",
      50: "#FFF3DD",
    },
    black: "#000000",
    white: "#FFFFFF",
  },
  typography: {
    fontFamily: [
      '"MiSans Thai"',
      '"Noto Sans Thai"',
      '"Roboto"',
      '"Helvetica"',
      "sans-serif",
    ].join(","),
    // 'MiSansThai, "Noto Sans Thai","Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: "3.75rem",
      fontWeight: 700,
      lineHeight: "4.5rem",
    },
    h2: {
      fontSize: "3rem",
      fontWeight: 700,
      lineHeight: "4rem",
    },
    h3: {
      fontSize: "2.5rem",
      fontWeight: 700,
      lineHeight: "3rem",
    },
    h4: {
      fontSize: "1.5rem",
      fontWeight: 400,
      lineHeight: "2.125rem",
    },
    subtitle1: {
      fontSize: "1.75rem",
      fontWeight: 400,
      lineHeight: "2.5rem",
    },
    subtitle2: {
      fontSize: "1.125rem",
      fontWeight: 700,
      lineHeight: "1.75rem",
      textTransform: "uppercase",
    },
    body1: {
      fontSize: "1.125rem",
      fontWeight: 500,
      lineHeight: "1.75rem",
    },
    body2: {
      fontSize: "1rem",
      fontWeight: 500,
      lineHeight: "1.5rem",
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: "MiSans Thai";
          font-display: swap;
          src: url(${MiSansThaiPath}) format('woff2');
        }
      `,
    },
  },
});

declare module "@mui/material/styles" {
  interface Palette {
    rose: Palette["primary"];
    yellow: Palette["secondary"];
    black: string;
    white: string;
  }
  // allow configuration using `createTheme`
  interface PaletteOptions {
    rose?: PaletteOptions["primary"];
    yellow?: PaletteOptions["secondary"];
    black?: string;
    white?: string;
  }
}

declare module "@mui/material/Button" {
  interface ButtonPropsColorOverrides {
    rose: true;
    yellow: true;
    black: true;
    white: true;
  }
}
