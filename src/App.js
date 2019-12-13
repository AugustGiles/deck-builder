import React from "react";
import { connect } from "react-redux";
import { Switch, Route, Redirect } from "react-router-dom";

import MyDecks from "./components/pages/MyDecks";
import { MainNav } from "./components/layout-elements";
import "./styles/layoutElements.scss";

function App() {
  return (
    <React.Fragment>
      <MainNav />

      <div id="site-content">
        <Switch>
          <Route path="/login" render={() => <h1>Login</h1>} />
          <Route path="/my-decks" component={MyDecks} />
          <Route exact path="/" component={() => <Redirect to="/my-decks" />} />
        </Switch>
      </div>
    </React.Fragment>
  );
}

export default connect()(App);
