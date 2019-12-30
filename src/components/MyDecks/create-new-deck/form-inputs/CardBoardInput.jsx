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
        <option value="mainboard">Mainboard</option>
        <option value="sideboard">Sideboard</option>
        <option value="maybeboard">Maybeboard</option>
      </Form.Control>
    </Form.Group>
  );
}

export default CardBoardInput;
