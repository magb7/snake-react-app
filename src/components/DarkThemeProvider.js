import React from "react";
import { useSelector } from "react-redux";
import { ThemeProvider } from "styled-components";
// Themes
import lightTheme from "../theme/light";
import darkTheme from "../theme/dark";

const DarkThemeProvider = ({ children }) => {
  const darkThemeEnabled = useSelector(
    (state) => state.preferences.darkThemeEnabled
  );
  return (
    <ThemeProvider theme={darkThemeEnabled ? darkTheme : lightTheme}>
      {children}
    </ThemeProvider>
  );
};

export default DarkThemeProvider;
