import React from "react";
import { Switch, Route } from "react-router-dom";

// Components
import Footer from "./components/Footer";
import Game from "./components/Game";
import Header from "./components/Header";
import Home from "./components/Home";
import Main from "./components/Main";

const App = () => {
  return (
    <div>
      <Header />
      <Main>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/Game" component={Game} />
        </Switch>
      </Main>
      <Footer />
    </div>
  );
};

export default App;
