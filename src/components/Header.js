import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <Link to="/">
        <div className="snake-icon"></div>
      </Link>
      <h1>Snake Game</h1>
    </header>
  );
};

export default Header;
