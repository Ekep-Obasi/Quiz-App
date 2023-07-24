"use client";

import { ThemeProvider } from "@emotion/react";

const theme = (mode: string): object => {
  return mode === "light"
    ? {
        colors: {
          primary: "rgba(53, 80 220, 1)",
          white: "#fff",
          dark: {
            light: "",
            medium: "#333",
            dark: "#000",
          },
          grey: {
            light: "#D4D4D4",
            medium: "#C4C4C4",
            dark: "#999",
          },
          yellow: "#F2C94C",
        },
        fontFamily: [
          "'DM Sans', sans-serif",
          "'Nunito', sans-serif",
          "'Ubuntu', sans-serif",
        ],
        fontSizes: {
          xsmall: "0.5 rem",
          small: "0.75 rem",
          medium: "1 rem",
          large: "1.5 rem",
          xlarge: "2 rem",
        },
        fontWeights: {
          light: 100,
          normal: 300,
          bold: 500,
        },
        linearGradient: `linear-gradient(90deg, rgba(50,113,226,1) 0%, rgba(48,133,229,1) 0%, rgba(46,157,233,1) 100%)`,
        textShadow: `0px 4px 4px 0px rgba(0, 0, 0, 0.25)`,
      }
    : {};
};

const Theme = ({ children }: { children: React.ReactNode }) => {
  return <ThemeProvider theme={theme("light")}>{children}</ThemeProvider>;
};

export default Theme;
