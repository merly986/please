import { createContext, useState, useMemo } from "react";
import { createTheme } from "@mui/material/styles";


const RosatomLight = {
  fontFamily : "Rosatom",
  fontStyle : 'light',
  fontDisplay: 'swap',
  fontWeight: 400,
  src: `
    local(Rosatom),
    url('./fonts/RST45.TTF') format('truetype')
    `
};

const RosatomNormal = {
  fontFamily : "Rosatom",
  fontStyle : 'normal',
  fontDisplay: 'swap',
  fontWeight: 400,
  src: `
    local(Rosatom),
    url('./fonts/RST55.TTF') format('truetype')
    `
};

const RosatomItalic = {
  fontFamily : "Rosatom",
  fontStyle : 'italic',
  fontDisplay: 'swap',
  fontWeight: 400,
  src: `
    local(Rosatom),
    url('./fonts/RST56.TTF') format('truetype')
    `
};


const RosatomBold = {
  fontFamily : "Rosatom",
  fontStyle : 'bold',
  fontDisplay: 'swap',
  fontWeight: 400,
  src: `
    local(Rosatom),
    url('./fonts/RST75.TTF') format('opentype')
    `
};


// Настройки темы
export const themeSettings = () => {
  return {
    palette: {
      primary:{
        main : "#025EA1",
        light: "#027cd4",
        dark: "#014270",
        contrastText: "#fff",
      },
      secondary:{
        main : "#6cace4",
        light: "#94c2eb",
        dark: "#4093bd",
        contrastText: "#fff",
      },
      error:{
        main : "#B22174",
        light: "#993366",
        dark: "#7e0059",
        contrastText: "#fff",
      },
      warning:{
        main : "#F0A600",
        light: "#ffbd24",
        dark: "#bd8400",
        contrastText: "#fff",
      },
      info:{
        main : "#259789",
        light: "#78ded",
        dark: "#1b6e64",
        contrastText: "#fff",
      },
      success:{
        main : "#b2c541",
        light: "#c1d166",
        dark: "#90a132",
        contrastText: "#fff",
      },
    },
    typography: {
      fontFamily: ["Rosatom", "sans-serif"].join(","),
      fontSize: 12,
      h1: {
        fontFamily: ["Rosatom", "sans-serif"].join(","),
        fontSize: 40,
      },
      h2: {
        fontFamily: ["Rosatom", "sans-serif"].join(","),
        fontSize: 32,
      },
      h3: {
        fontFamily: ["Rosatom", "sans-serif"].join(","),
        fontSize: 24,
      },
      h4: {
        fontFamily: ["Rosatom", "sans-serif"].join(","),
        fontSize: 20,
      },
      h5: {
        fontFamily: ["Rosatom", "sans-serif"].join(","),
        fontSize: 16,
      },
      h6: {
        fontFamily: ["Rosatom", "sans-serif"].join(","),
        fontSize: 14,
      },
    },
  };
};

// context for color mode
export const ColorModeContext = createContext({
  toggleColorMode: () => {},
});

export const useMode = () => {
  const [mode, setMode] = useState("dark");

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () =>
        setMode((prev) => (prev === "light" ? "dark" : "light")),
    }),
    []
  );

  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  return [theme, colorMode];
};
