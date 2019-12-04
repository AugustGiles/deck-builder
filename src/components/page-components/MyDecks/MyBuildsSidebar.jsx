import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Nav from "react-bootstrap/Nav";

function MyBuildsSidebar(props) {
  let active = window.location.pathname;

  // TODO: add all saved decks to menu

  return (
    <Nav>
      <ListGroup variant="flush" className="w-100">
        <ListGroup.Item
          action
          active={active === "/my-decks" ? true : false}
          href={`${props.url}`}
        >
          All Deck Stats
        </ListGroup.Item>
        <ListGroup.Item
          action
          active={active === "/my-decks/create-new-deck" ? true : false}
          href={`${props.url}/create-new-deck`}
        >
          Create New Deck
        </ListGroup.Item>
      </ListGroup>
    </Nav>
  );
}

export default MyBuildsSidebar;
