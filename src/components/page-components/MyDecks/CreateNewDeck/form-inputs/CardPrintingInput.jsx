import React from "react";
import Form from "react-bootstrap/Form";

function CardPrintingInput(props) {
  return (
    <Form.Group>
      <Form.Label>Printing</Form.Label>
      <Form.Control as="select">
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
      </Form.Control>
    </Form.Group>
  );
}

export default CardPrintingInput;
