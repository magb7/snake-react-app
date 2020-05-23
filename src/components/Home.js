import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

// Components
import H3 from "./H3";

const Home = () => {
  return (
    <div className="home">
      <div className="desktop">
        <H3>Use the keyboard arrows to play</H3>
        <img src="/images/keyboardArrows.png" alt="keyboard arrows" />
        <Link to="/Game">
          <button className="start">Press to start</button>
        </Link>
      </div>
      <div className="responsive">
        <H3 className="resp-text">The game is available on computer only</H3>
      </div>
    </div>
  );
};

export default Home;
