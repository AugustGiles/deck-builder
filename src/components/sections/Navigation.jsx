import React from "react";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <nav>
      <h1 id="main-logo">Deck Builder</h1>
      <ul>
        <Link to="/">
          <li>My Builds</li>
        </Link>
        <Link to="/login">
          <li>Login</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Navigation;
