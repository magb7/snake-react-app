import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { TOGGLE_DARKTHEME } from "../actions";

// Components
import H1 from "./styled/H1";
import ToggleWrapper from "./styled/ToggleWrapper";
import ToggleBall from "./styled/ToggleBall";
import HeaderWrapper from "./styled/HeaderWrapper";

const Header = () => {
  const darkThemeEnabled = useSelector(
    (state) => state.preferences.darkThemeEnabled
  );
  const dispatch = useDispatch();

  return (
    <HeaderWrapper>
      <Link to="/">
        <H1>Snake Game</H1>
      </Link>
      <ToggleWrapper
        onClick={() => {
          dispatch({ type: TOGGLE_DARKTHEME });
        }}
      >
        <ToggleBall dark={darkThemeEnabled} />
      </ToggleWrapper>
    </HeaderWrapper>
  );
};

export default Header;
