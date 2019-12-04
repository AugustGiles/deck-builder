import React, { useState } from "react";
import deckClient from "../../../../modules/deckBuilderApi/deck";
import { Container, Row, Col } from "react-bootstrap";
import CNDForm from "./CNDForm";
import DeckPreview from "./DeckPreview";

function CreateNewDeck() {
  // slim this down by condensing state to one object?
  const [deckTitle, setDeckTitle] = useState("");
  const [deckFormat, setDeckFormat] = useState("commander");
  const [deckDesription, setDeckDescription] = useState("");
  const [mainboardCards, setMainboardCards] = useState([]);

  let saveSelectedCards = () => {
    let deck = {
      title: deckTitle,
      format: deckFormat,
      description: deckDesription,
      mainboardCards
    };
    deckClient.addNewDeck(deck);
  };

  return (
    <Container>
      <h3>Create a New Deck</h3>
      <hr />
      <Row className="pt-3">
        <Col xl={6}>
          <CNDForm
            setDeckTitle={setDeckTitle}
            setDeckDescription={setDeckDescription}
            setDeckFormat={setDeckFormat}
            setMainboardCards={setMainboardCards}
            mainboardCards={mainboardCards}
            saveSelectedCards={saveSelectedCards}
          />
        </Col>
        <Col xl={6} className="px-3">
          <DeckPreview mainboardCards={mainboardCards} />
        </Col>
      </Row>
    </Container>
  );
}

export default CreateNewDeck;