import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { TOGGLE_DARKTHEME } from "../actions";
import HeaderStyled from "./styled/HeaderStyled";

// Components
import H1 from "./styled/H1";
import ToggleWrapper from "./styled/ToggleWrapper";
import ToggleBall from "./styled/ToggleBall";

const Header = () => {
  const darkThemeEnabled = useSelector(
    (state) => state.preferences.darkThemeEnabled
  );
  const dispatch = useDispatch();

  const [dark, setDark] = useState(false);

  const toggleTheme = () => {
    if (dark === darkThemeEnabled) {
      setDark(false);
    } else {
      setDark(darkThemeEnabled);
    }
  };

  return (
    <HeaderStyled>
      <Link to="/">
        <H1>Snake Game</H1>
      </Link>
      <ToggleWrapper
        onClick={() => {
          toggleTheme();
          dispatch({ type: TOGGLE_DARKTHEME });
        }}
      >
        <ToggleBall dark={darkThemeEnabled} />
      </ToggleWrapper>
    </HeaderStyled>
  );
};

export default Header;
