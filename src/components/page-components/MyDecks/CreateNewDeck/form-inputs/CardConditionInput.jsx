import React from "react";
import Form from "react-bootstrap/Form";

function CardConditionInput(props) {
  return (
    <Form.Group>
      <Form.Label>Condition</Form.Label>
      <Form.Control
        as="select"
        onChange={e => props.handleOnChange(e.target.value)}
      >
        <option value="Mint/Near Mint">Mint/Near Mint</option>
        <option value="Lightly Played">Lightly Played</option>
        <option value="Moderately Played">Moderately Played</option>
        <option value="Heavily Played">Heavily Played</option>
      </Form.Control>
    </Form.Group>
  );
}

export default CardConditionInput;
