import React, { useState } from "react";
import mtg from "mtgsdk";
import { Form, Col, Button } from "react-bootstrap";

function CNDForm_AddCard(props) {
  const [fetchedCards, setFetchedCards] = useState([]);
  const [currentCard, setCurrentCard] = useState(null);
  const [currentQty, setCurrentQty] = useState(1);
  let typingTimer;

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

  let addToDeck = e => {
    props.setMainboardCards([
      ...props.mainboardCards,
      { card: currentCard, qty: currentQty }
    ]);
    setCurrentCard(null);
    setCurrentQty(1);
    document.querySelector("#card-title").value = "";
    document.querySelector("#card-qty").value = 1;
    e.preventDefault();
  };

  return (
    <div className="p-3 border">
      <h4>Card Entry</h4>
      <hr />
      <Form.Row>
        <Col sm={10}>
          <Form.Group className="position-relative mb-3">
            <Form.Label>Card Title</Form.Label>
            <Form.Control
              className="mb-0"
              id="card-title"
              type="text"
              placeholder="'Alesha, Who Smiles at Death'"
              onKeyUp={e => handleCardNameInput(e)}
            />
            <div
              id="fetched-cards"
              hidden
              className="position-absolute p-2"
              style={{
                zIndex: "10",
                backgroundColor: "white",
                width: "100%",
                boxShadow:
                  "0 2px 5px 0 rgba(0,0,0,0.2), 0 2px 7px 0 rgba(0,0,0,0.19)"
              }}
            >
              {renderFetchedCards(fetchedCards)}
            </div>
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
    </div>
  );
}

export default CNDForm_AddCard;
