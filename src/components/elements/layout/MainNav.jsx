import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <Navbar bg="dark" variant="dark" className="fixed-top">
      <Navbar.Brand href="/">Deck Builder</Navbar.Brand>
      <Nav className="ml-auto">
        <Link to="/" className="mx-3 text-light">
          Home
        </Link>
        <Link to="/my-decks" className="mx-3 text-light">
          My Decks
        </Link>
        <Link to="/login" className="mx-3 text-light">
          Login
        </Link>
      </Nav>
    </Navbar>
  );
}

export default Navigation;
