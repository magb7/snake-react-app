import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, connect } from "react-redux";
// Components
import H1 from "./styled/H1";
import ToggleWrapper from "./styled/ToggleWrapper";
import ToggleBall from "./styled/ToggleBall";
import HeaderWrapper from "./styled/HeaderWrapper";

const mapStateToProps = (state) => ({
  theme: state,
});

const Header = ({ theme }) => {
  const dispatch = useDispatch();

  return (
    <HeaderWrapper>
      <Link to="/">
        <H1>Snake Game</H1>
      </Link>
      <ToggleWrapper
        onClick={() => {
          dispatch({ type: "TOGGLE_DARKTHEME" });
        }}
      >
        <ToggleBall dark={theme} />
      </ToggleWrapper>
    </HeaderWrapper>
  );
};

export default connect(mapStateToProps)(Header);
