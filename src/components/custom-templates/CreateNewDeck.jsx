import React, { useState } from "react";
import mtg from "mtgsdk";
import deckClient from "../../modules/deckBuilderApi/deck";
import "../../styles/custom-templates/createNewDeck.scss";

import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function CreateNewDeck() {
  const [deckTitle, setDeckTitle] = useState("");
  const [deckDesription, setDeckDescription] = useState("");
  const [deckFormat, setDeckFormat] = useState("commander");
  const [fetchedCards, setFetchedCards] = useState([]);
  const [selectedCards, setSelectedCards] = useState([]);
  const [currentCard, setCurrentCard] = useState(null);
  const [currentQty, setCurrentQty] = useState(1);
  let typingTimer;

  let renderFetchedCards = cards => {
    return cards.map(card => {
      return (
        <p
          key={card.id}
          onClick={() => {
            document.querySelector("#card-name").value = card.name;
            setFetchedCards([]);
            setCurrentCard(card);
          }}
        >
          {card.name}
        </p>
      );
    });
  };

  let renderSelectedCards = cards => {
    if (cards.length === 0) {
      return <p></p>;
    }
    return cards.map(selection => {
      return (
        <p key={selection.card.id}>
          {selection.qty}x -- {selection.card.name}
        </p>
      );
    });
  };

  // move this to mtg api module
  let searchName = text => {
    mtg.card.where({ name: text, pageSize: 10 }).then(cards => {
      setFetchedCards(cards);
    });
  };

  let handleCardNameInput = e => {
    clearTimeout(typingTimer);

    if (e.target.value) {
      let text = e.target.value;
      typingTimer = setTimeout(() => searchName(text), 1000);
    }
  };

  let addToDeck = e => {
    setSelectedCards([
      ...selectedCards,
      { card: currentCard, qty: currentQty }
    ]);
    setCurrentCard(null);
    setCurrentQty(1);
    document.querySelector("#card-name").value = "";
    document.querySelector("#card-qty").value = 1;
    e.preventDefault();
  };

  let saveSelectedCards = () => {
    let deck = {
      title: deckTitle,
      cards: selectedCards,
      description: deckDesription,
      format: deckFormat
    };

    deckClient.addNewDeck(deck);
  };

  return (
    <Container>
      <h3>Create a New Deck</h3>
      <Row>
        <Col md={5}>
          <Form>
            <Form.Row>
              <Col sm={7}>
                <Form.Group>
                  <Form.Label>Deck Title</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter title"
                    onChange={e => setDeckTitle(e.target.value)}
                  />
                </Form.Group>
              </Col>
              <Col sm={5}>
                <Form.Group>
                  <Form.Label>Format</Form.Label>
                  <Form.Control
                    as="select"
                    onChange={e => setDeckFormat(e.target.value)}
                  >
                    <option value="commander">Commander</option>
                    <option value="standard">Standard</option>
                  </Form.Control>
                </Form.Group>
              </Col>
            </Form.Row>

            <Form.Group>
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                placeholder="More information about the build..."
                onChange={e => setDeckDescription(e.target.value)}
              />
            </Form.Group>

            <Form.Row>
              <Col sm={8}>
                <Form.Group>
                  <Form.Label>Card Name</Form.Label>
                  <Form.Control
                    id="card-name"
                    type="text"
                    placeholder="'Sol Ring'"
                    onKeyUp={e => handleCardNameInput(e)}
                  />
                </Form.Group>
              </Col>
              <Col sm={2}>
                <Form.Group>
                  <Form.Label>Qty</Form.Label>
                  <Form.Control
                    id="card-qty"
                    type="number"
                    defaultValue={1}
                    min={1}
                    onChange={e => setCurrentQty(e.target.value)}
                  />
                </Form.Group>
              </Col>
              <Col sm={2}>
                <Form.Group>
                  <Button onClick={addToDeck} variant="primary">
                    Add
                  </Button>
                </Form.Group>
              </Col>
            </Form.Row>
            {renderFetchedCards(fetchedCards)}
            <Button onClick={saveSelectedCards}>Save</Button>
          </Form>
        </Col>
        <Col md={7}>{renderSelectedCards(selectedCards)}</Col>
      </Row>
    </Container>
  );
}

export default CreateNewDeck;
