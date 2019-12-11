import React, { useState, useEffect } from "react";
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
        <Nav.Item key={fetchedDeck.id} className="pl-2">
          <Nav.Link
            key={fetchedDeck.id}
            active={
              active === `/my-decks/deck/${fetchedDeck.id}` ? true : false
            }
            href={`${props.url}/deck/${fetchedDeck.id}`}
          >
            {fetchedDeck.title}
          </Nav.Link>
        </Nav.Item>
      );
    });
  };

  return (
    <Nav className="flex-column py-3 px-2 custom-side-nav">
      <Nav.Item>
        <Nav.Link
          href={`${props.url}`}
          active={active === "/my-decks" ? true : false}
        >
          All Deck Stats
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link
          active={active === "/my-decks/create-new-deck" ? true : false}
          href={`${props.url}/create-new-deck`}
        >
          Create New Deck
        </Nav.Link>
      </Nav.Item>
      <br />
      <Nav.Item>
        <Nav.Link disabled>Decks</Nav.Link>
      </Nav.Item>
      {renderDecks(decks)}
    </Nav>
  );
}

export default MyDecksSidebar;
