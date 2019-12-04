import React from "react";
import "./styles/layoutElements.scss";
import MyDecks from "./components/pages/MyDecks";
import MainNav from "./components/layout-elements/MainNav";
import { BrowserRouter as Switch, Route, Redirect } from "react-router-dom";

function App() {
  return (
    <React.Fragment>
      <MainNav />

      <Switch>
        <Route path="/login" render={() => <h1>Login</h1>} />
        <Route path="/my-decks" component={MyDecks} />
        <Route exact path="/" component={() => <Redirect to="/my-decks" />} />
      </Switch>
    </React.Fragment>
  );
}

export default App;
