import React, { useState } from "react";
import { connect } from "react-redux";
import { Card, Button, Row, Col, Form } from "react-bootstrap";
import { deck as deckClient } from "../../../apis/deck-builder";

function DeleteDeck({ deck }) {
  const [enteredTitle, setEnteredTitle] = useState("");

  const handleDelete = async () => {
    if (enteredTitle === deck.title) {
      await deckClient.deleteDeckById(deck.id);
      window.location.href = `/my-decks`;
    }
  };

  return (
    <Row className="p-3">
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
                  autoComplete="off"
                  value={enteredTitle}
                  placeholder={`'${deck.title}'`}
                  onChange={e => setEnteredTitle(e.target.value)}
                />
                <hr />
                <i className="text-danger">This action cannot be reversed.</i>
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

const mapStateToProps = store => {
  return { deck: store.tracker.activeDeck };
};

export default connect(mapStateToProps)(DeleteDeck);
