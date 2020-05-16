import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <div className="desktop">
        <h3>Use the keyboard arrows to play</h3>
        <img src="/images/keyboardArrows.png" alt="keyboard arrows" />
        <Link to="/Game">
          <button className="start">Press to start</button>
        </Link>
      </div>
      <div className="responsive">
        <h3 className="resp-text">The game is available on computer only</h3>
      </div>
    </div>
  );
};

export default Home;
