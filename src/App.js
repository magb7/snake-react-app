import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";

// Components
import Footer from "./components/Footer";
import Game from "./components/Game";
import Header from "./components/Header";
import Home from "./components/Home";

const App = () => {
  return (
    <div>
      <Header />
      <div className="back-img">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/Game" component={Game} />
        </Switch>
      </div>
      <Footer />
    </div>
  );
};

export default App;
