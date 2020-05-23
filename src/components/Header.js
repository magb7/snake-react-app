import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

// Components
import H1 from "./H1";
import ToggleWrapper from "./ToggleWrapper";
import ToggleBall from "./ToggleBall";

const Header = () => {
  const [dark, setDark] = useState(false);
  const ToggleTheme = () => {
    setDark(!dark);
  };

  return (
    <header>
      <Link to="/">
        <H1>Snake Game</H1>
      </Link>
      <ToggleWrapper onClick={() => ToggleTheme()}>
        <ToggleBall dark={dark} />
      </ToggleWrapper>
    </header>
  );
};

export default Header;
