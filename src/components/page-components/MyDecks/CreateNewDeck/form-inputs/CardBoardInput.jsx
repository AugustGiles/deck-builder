import React from "react";
import Form from "react-bootstrap/Form";

function CardBoardInput(props) {
  return (
    <Form.Group>
      <Form.Label>Board</Form.Label>
      <Form.Control
        as="select"
        onChange={e => props.handleOnChange(e.target.value)}
      >
        <option value="Mainboard">Mainboard</option>
        <option value="Sideboard">Sideboard</option>
        <option value="Maybeboard">Maybeboard</option>
      </Form.Control>
    </Form.Group>
  );
}

export default CardBoardInput;
