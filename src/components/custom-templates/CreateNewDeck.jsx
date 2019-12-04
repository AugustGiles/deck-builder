import React, { useState } from "react";
import mtg from "mtgsdk";
import deckClient from "../../modules/deckBuilderApi/deck";
import "../../styles/custom-templates/createNewDeck.scss";

import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

function CreateNewDeck() {
  const [deckTitle, setDeckTitle] = useState("");
  const [deckDesription, setDeckDescription] = useState("");
  const [deckFormat, setDeckFormat] = useState("commander");
  const [fetchedCards, setFetchedCards] = useState([]);
  const [selectedCards, setSelectedCards] = useState([]);
  const [currentCard, setCurrentCard] = useState(null);
  const [currentQty, setCurrentQty] = useState(1);
  const [tabKey, setTabKey] = useState("mainboard");
  let typingTimer;

  let renderFetchedCards = cards => {
    return cards.map(card => {
      return (
        <p
          key={card.id}
          onClick={() => {
            document.querySelector("#card-title").value = card.name;
            setFetchedCards([]);
            setCurrentCard(card);
            document.querySelector("#fetched-cards").hidden = true;
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
    mtg.card.where({ name: text, pageSize: 7 }).then(cards => {
      setFetchedCards(cards);
      document.querySelector("#fetched-cards").hidden = false;
    });
  };

  let handleCardNameInput = e => {
    clearTimeout(typingTimer);
    let value = e.target.value;

    if (value) {
      typingTimer = setTimeout(() => searchName(value), 1000);
    }
  };

  let addToDeck = e => {
    setSelectedCards([
      ...selectedCards,
      { card: currentCard, qty: currentQty }
    ]);
    setCurrentCard(null);
    setCurrentQty(1);
    document.querySelector("#card-title").value = "";
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
      <hr />
      <Row className="pt-3">
        <Col xl={6}>
          <Form autoComplete="off">
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
            <hr />
            <Form.Row>
              <Col sm={10}>
                <Form.Group className="position-relative">
                  <Form.Label>Card Title</Form.Label>
                  <Form.Control
                    id="card-title"
                    type="text"
                    placeholder="'Alesha, Who Smiles at Death'"
                    onKeyUp={e => handleCardNameInput(e)}
                  />
                </Form.Group>
                <div
                  id="fetched-cards"
                  className="position-absolute"
                  style={{ zIndex: "10" }}
                >
                  {renderFetchedCards(fetchedCards)}
                </div>
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
            </Form.Row>
            <Form.Row>
              <Col sm={4}>
                <Form.Group>
                  <Form.Label>Printing</Form.Label>
                  <Form.Control as="select">
                    <option value="option1">Option 1</option>
                    <option value="option2">Option 2</option>
                  </Form.Control>
                </Form.Group>
              </Col>
              <Col sm={4}>
                <Form.Group>
                  <Form.Label>Condition</Form.Label>
                  <Form.Control as="select">
                    <option value="mint">Mint/Near Mint</option>
                    <option value="lightlyPlayed">Lightly Played</option>
                    <option value="moderatelyPlayed">Moderately Played</option>
                    <option value="heavilyPlayed">Heavily Played</option>
                  </Form.Control>
                </Form.Group>
              </Col>
              <Col sm={4}>
                <Form.Group>
                  <Form.Label>Board</Form.Label>
                  <Form.Control as="select">
                    <option value="mainboard">Mainboard</option>
                    <option value="sideboard">Sideboard</option>
                    <option value="maybeboard">Maybeboard</option>
                  </Form.Control>
                </Form.Group>
              </Col>
            </Form.Row>
            <Form.Group>
              <Button onClick={addToDeck} variant="primary">
                Add To Deck ->
              </Button>
            </Form.Group>
            <hr />
            <Button onClick={saveSelectedCards} className="w-100">
              Create Deck
            </Button>
          </Form>
        </Col>
        <Col xl={6} className="px-3">
          <Tabs activeKey={tabKey} onSelect={k => setTabKey(k)}>
            <Tab
              eventKey="mainboard"
              title="Mainboard"
              style={{ height: "70vh", overflow: "scroll" }}
              className="p-3 border-bottom border-right border-left"
            >
              {renderSelectedCards(selectedCards)}
            </Tab>
            <Tab
              eventKey="sideboard"
              title="Sideboard"
              style={{ height: "70vh", overflow: "scroll" }}
              className="p-3 border-bottom border-right border-left"
            >
              <p>Sideboard</p>
            </Tab>
            <Tab
              eventKey="maybeboard"
              title="Maybeboard"
              style={{ height: "70vh", overflow: "scroll" }}
              className="p-3 border-bottom border-right border-left"
            >
              <p>Maybeboard</p>
            </Tab>
          </Tabs>
        </Col>
      </Row>
    </Container>
  );
}

export default CreateNewDeck;
