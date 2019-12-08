import React, { useState } from "react";
import deckClient from "../../../../modules/deck-builder-api/deck";
import { Row, Col } from "react-bootstrap";
import CNDForm from "./CNDForm";
import DeckPreview from "./DeckPreview";

function CreateNewDeck() {
  const [deckInfo, setDeckInfo] = useState({
    title: "",
    format: "commander",
    description: ""
  });
  const [cards, setCards] = useState({
    mainboard: [],
    sideboard: [],
    maybeboard: []
  });

  const updateDeckInfo = (val, key) => {
    let deckInfoCopy = { ...deckInfo };
    deckInfoCopy[key] = val;
    setDeckInfo(deckInfoCopy);
  };

  const saveSelectedCards = () => {
    let deck = { ...deckInfo };
    deck["cards"] = cards;
    deckClient.addNewDeck(deck);
  };

  return (
    <div className="p-3">
      <h3>Create a New Deck</h3>
      <hr />
      <Row>
        <Col xl={6}>
          <CNDForm
            updateDeckInfo={updateDeckInfo}
            setCards={setCards}
            cards={cards}
            saveSelectedCards={saveSelectedCards}
          />
        </Col>
        <Col xl={6} className="px-3">
          <DeckPreview setCards={setCards} cards={cards} />
        </Col>
      </Row>
    </div>
  );
}

export default CreateNewDeck;
