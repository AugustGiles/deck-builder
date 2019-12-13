import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";

import deckServiceModule from "../../../../modules/deck-builder-api/deck";

function DeleteDeck(props) {
  const [enteredTitle, setEnteredTitle] = useState("");

  const handleDelete = async () => {
    if (enteredTitle === props.deck.title) {
      await deckServiceModule.deleteDeckById(props.deck.id);
      window.location.href = `/my-decks`;
    }
  };

  return (
    <Row>
      <Col sm={12} lg={6}>
        <Card>
          <Card.Header>
            <b className="d-inline-block">
              Are you sure you'd like to delete this deck?
            </b>
          </Card.Header>

          <Card.Body>
            <Form>
              <Form.Group controlId="confirm-deck-title">
                <Form.Label>Enter Deck Title To Confirm</Form.Label>

                <Form.Control
                  type="email"
                  value={enteredTitle}
                  placeholder={`'${props.deck.title}'`}
                  onChange={e => setEnteredTitle(e.target.value)}
                />

                <hr />
                <p>
                  <i className="text-danger">This action cannot be reversed.</i>
                </p>

                <Button variant="outline-danger w-100" onClick={handleDelete}>
                  Delete
                </Button>
              </Form.Group>
            </Form>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
}

export default DeleteDeck;
