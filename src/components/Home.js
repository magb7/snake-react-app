import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <h3>Use the keyboard arrows to play</h3>
      <img src="/images/keyboardArrows.png" alt="keyboard arrows" />
      <Link to="/Game">
        <button className="start">Press to start</button>
      </Link>
    </div>
  );
};

export default Home;
