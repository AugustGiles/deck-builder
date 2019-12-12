import React, { useState } from "react";
import deckClient from "../../../../modules/deck-builder-api/deck";
import { Row, Col } from "react-bootstrap";
import CNDForm from "./CNDForm";
import DeckPreview from "./DeckPreview";

function CreateNewDeck(props) {
  const [deckInfo, setDeckInfo] = useState({
    title: props.deck.title || "",
    format: props.deck.format || "commander",
    description: props.deck.description || ""
  });

  const [cards, setCards] = useState(
    props.deck.cards || {
      mainboard: [],
      sideboard: [],
      maybeboard: []
    }
  );

  const updateDeckInfo = (val, key) => {
    let deckInfoCopy = { ...deckInfo };
    deckInfoCopy[key] = val;
    setDeckInfo(deckInfoCopy);
  };

  const saveSelectedCards = () => {
    let deck = { ...deckInfo };
    deck["cards"] = cards;
    if (props.context === "create") {
      deckClient.addNewDeck(deck);
    } else if (props.context === "edit") {
      deckClient.editDeck(deck, props.deck.id);
    }
  };

  return (
    <div className="p-3">
      <Row>
        <Col xl={6}>
          <CNDForm
            deckInfo={deckInfo}
            updateDeckInfo={updateDeckInfo}
            setCards={setCards}
            cards={cards}
            saveSelectedCards={saveSelectedCards}
            context={props.context}
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
