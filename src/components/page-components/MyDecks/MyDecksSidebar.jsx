import React, { useState, useEffect } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Nav from "react-bootstrap/Nav";

import deckClient from "../../../modules/deck-builder-api/deck";

function MyDecksSidebar(props) {
  let [decks, setDecks] = useState([]);
  let active = window.location.pathname;

  useEffect(() => {
    const getDecks = async () => {
      let fetchedDecks = await deckClient.getAllDecks();
      setDecks(fetchedDecks);
    };
    getDecks();
  }, []);

  let renderDecks = fetchedDecks => {
    return fetchedDecks.map(fetchedDeck => {
      return (
        <ListGroup.Item
          action
          key={fetchedDeck.id}
          active={active === `/my-decks/deck/${fetchedDeck.id}` ? true : false}
          href={`${props.url}/deck/${fetchedDeck.id}`}
        >
          {fetchedDeck.title}
        </ListGroup.Item>
      );
    });
  };

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
        {renderDecks(decks)}
      </ListGroup>
    </Nav>
  );
}

export default MyDecksSidebar;
