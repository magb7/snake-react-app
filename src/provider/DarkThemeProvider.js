import React from "react";
import { connect } from "react-redux";
import { ThemeProvider } from "styled-components";
// Themes
import lightTheme from "../theme/light";
import darkTheme from "../theme/dark";

const mapStateToProps = (state) => ({
  theme: state,
});

const DarkThemeProvider = ({ children, theme }) => {
  return (
    <ThemeProvider theme={theme === "dark" ? darkTheme : lightTheme}>
      {children}
    </ThemeProvider>
  );
};

export default connect(mapStateToProps)(DarkThemeProvider);
