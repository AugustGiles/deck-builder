import React, { useState } from "react";
import deckClient from "../../../../modules/deck-builder-api/deck";
import { Row, Col } from "react-bootstrap";
import CNDForm from "./CNDForm";
import DeckPreview from "./DeckPreview";

function CreateNewDeck() {
  // slim this down by condensing state to one object? Redux?
  const [deckTitle, setDeckTitle] = useState("");
  const [deckFormat, setDeckFormat] = useState("commander");
  const [deckDesription, setDeckDescription] = useState("");
  const [mainboardCards, setMainboardCards] = useState([]);
  const [sideboardCards, setSideboardCards] = useState([]);
  const [maybeboardCards, setMaybeboardCards] = useState([]);

  let saveSelectedCards = () => {
    let deck = {
      title: deckTitle,
      format: deckFormat,
      description: deckDesription,
      cards: {
        mainboard: mainboardCards,
        sideboard: sideboardCards,
        maybeboard: maybeboardCards
      }
    };
    deckClient.addNewDeck(deck);
  };

  return (
    <div className="p-3">
      <h3>Create a New Deck</h3>
      <hr />
      <Row>
        <Col xl={6}>
          <CNDForm
            setDeckTitle={setDeckTitle}
            setDeckDescription={setDeckDescription}
            setDeckFormat={setDeckFormat}
            setMainboardCards={setMainboardCards}
            mainboardCards={mainboardCards}
            setSideboardCards={setSideboardCards}
            sideboardCards={sideboardCards}
            setMaybeboardCards={setMaybeboardCards}
            maybeboardCards={maybeboardCards}
            saveSelectedCards={saveSelectedCards}
          />
        </Col>
        <Col xl={6} className="px-3">
          <DeckPreview
            setMainboardCards={setMainboardCards}
            mainboardCards={mainboardCards}
            setSideboardCards={setSideboardCards}
            sideboardCards={sideboardCards}
            setMaybeboardCards={setMaybeboardCards}
            maybeboardCards={maybeboardCards}
          />
        </Col>
      </Row>
    </div>
  );
}

export default CreateNewDeck;
