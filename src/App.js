import React from "react";
// import "./styles/App.scss";
// import "./styles/form.scss";
import MyBuilds from "./components/pages/MyBuilds";
import Navigation from "./components/sections/Navigation";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <header>
        <Navigation />
      </header>

      <Switch>
        <Route path="/login">
          <h1>Login</h1>
        </Route>
        <Route exact path="/">
          <MyBuilds />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
