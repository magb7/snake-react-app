import React from "react";
import { Route, Switch } from "react-router-dom";
import { Provider as ReduxProvider } from "react-redux";
// Components
import Container from "./components/styled/Container";
import Footer from "./components/Footer";
import Game from "./components/Game";
import Header from "./components/Header";
import Home from "./components/Home";
import Main from "./components/styled/Main";
import DarkThemeProvider from "./provider/DarkThemeProvider";
// Store
import store from "./store";

const App = () => {
  return (
    <ReduxProvider store={store}>
      <DarkThemeProvider>
        <Container>
          <Header />
          <Main>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/Game" component={Game} />
            </Switch>
          </Main>
          <Footer />
        </Container>
      </DarkThemeProvider>
    </ReduxProvider>
  );
};

export default App;
