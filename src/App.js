import React from "react";
import { BrowserRouter as Switch, Route, Redirect } from "react-router-dom";

import MyDecks from "./components/pages/MyDecks";
import MainNav from "./components/layout-elements/MainNav";
import "./styles/layoutElements.scss";

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
