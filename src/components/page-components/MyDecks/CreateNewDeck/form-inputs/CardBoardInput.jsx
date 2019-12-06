import React from "react";
import Form from "react-bootstrap/Form";

function CardBoardInput(props) {
  return (
    <Form.Group>
      <Form.Label>Board</Form.Label>
      <Form.Control
        as="select"
        value={props.board}
        onChange={e => props.setBoard(e.target.value)}
      >
        <option value="Mainboard">Mainboard</option>
        <option value="Sideboard">Sideboard</option>
        <option value="Maybeboard">Maybeboard</option>
      </Form.Control>
    </Form.Group>
  );
}

export default CardBoardInput;
