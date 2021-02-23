import React from "react";
import { ThemeProvider } from "styled-components";

export const theme = {
  colors: {
    blue: "#54C1FB",
    lightBlue: "#EDF8FE",
    purple: "#6D71F8",
    lightPurple: "#E4E4F6",
    red: "#F1798E",
    xlightGrey: "#F6F6F8",
    lightGrey: "#E4E5EF",
    medGrey: "#A6A6BB",
    darkGrey: "#65667F",
    black: "#272848",
    white: "#ffffff"
  },
  shadows: {
    med: ".5rem .5rem .5rem 0 rgba(0,0,0, .15)",
    lrg: ".75rem .75rem 1rem 0 rgba(0,0,0, .15)",
  }
};

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;