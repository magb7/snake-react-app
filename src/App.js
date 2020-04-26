import React, { Component } from "react";
import Footer from "./components/Footer";
import Game from "./components/Game";
import Header from "./components/Header";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <div className="back-img">
          <Header />
          <Game />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
