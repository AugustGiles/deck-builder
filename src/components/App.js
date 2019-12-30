import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import MyDecks from "./MyDecks/index";
import { MainNav } from "./elements/layout";
import "./App.scss";

function App() {
  return (
    <div style={{ minHeight: "100%" }}>
      <MainNav />

      <div style={{ marginTop: "7vh" }}>
        <Switch>
          <Route path="/login" render={() => <h1>Login</h1>} />
          <Route path="/my-decks" component={MyDecks} />
          <Route exact path="/" component={() => <Redirect to="/my-decks" />} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
