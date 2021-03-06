import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
// Components
import H3 from "./styled/H3";
import Button from "./styled/Button";
import HomeDesktop from "./styled/HomeDesktop";
import HomeResponsive from "./styled/HomeResponsive";

const Home = () => {
  const theme = useSelector((state) => state);
  return (
    <div>
      <HomeDesktop>
        <H3>Use the keyboard arrows to play</H3>
        <img src={`/images/${theme}/Arrows.png`} alt="keyboard arrows" />
        <Link to="/Game">
          <Button start>Press to start</Button>
        </Link>
      </HomeDesktop>
      <HomeResponsive>
        <H3>The game is available on computer only</H3>
      </HomeResponsive>
    </div>
  );
};

export default Home;
