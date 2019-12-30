import React from "react";
import { connect } from "react-redux";
import { NavItem } from "../elements/layout";
import Nav from "react-bootstrap/Nav";

function MyDecksSidebar({ decks }) {
  return (
    <Nav className="flex-column py-3 px-2 custom-side-nav">
      <NavItem text="All Deck Stats" url="/my-decks" />
      <NavItem text="Create New Deck" url="/my-decks/create-new-deck" />

      <br />
      <NavItem text="Decks" url="" disabled />

      {decks &&
        decks.map(fetchedDeck => {
          return (
            <NavItem
              key={fetchedDeck.id}
              className="pl-2"
              text={fetchedDeck.title}
              url={`/my-decks/deck/${fetchedDeck.id}`}
            />
          );
        })}
    </Nav>
  );
}

const mapStateToProps = store => {
  return { decks: store.user.decks };
};

export default connect(mapStateToProps)(MyDecksSidebar);
