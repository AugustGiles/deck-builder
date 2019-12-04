import React from "react";
import { Form, Button, Col } from "react-bootstrap";
import CNDFormAddCard from "./CNDForm_AddCard";

function CNDForm(props) {
  return (
    <Form autoComplete="off">
      <Form.Row>
        <Col sm={7}>
          <Form.Group>
            <Form.Label>Deck Title</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter title"
              onChange={e => props.setDeckTitle(e.target.value)}
            />
          </Form.Group>
        </Col>
        <Col sm={5}>
          <Form.Group>
            <Form.Label>Format</Form.Label>
            <Form.Control
              as="select"
              onChange={e => props.setDeckFormat(e.target.value)}
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
          rows="5"
          placeholder="More information about the build..."
          onChange={e => props.setDeckDescription(e.target.value)}
        />
      </Form.Group>
      <hr />

      <CNDFormAddCard
        mainboardCards={props.mainboardCards}
        setMainboardCards={props.setMainboardCards}
      />

      <hr />
      <Button onClick={props.saveSelectedCards} className="w-100">
        Create Deck
      </Button>
    </Form>
  );
}

export default CNDForm;
