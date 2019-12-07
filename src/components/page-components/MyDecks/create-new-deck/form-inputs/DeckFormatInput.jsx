import React from "react";
import Form from "react-bootstrap/Form";

function DeckFormatInput(props) {
  return (
    <Form.Group>
      <Form.Label>Format</Form.Label>
      <Form.Control
        as="select"
        onChange={e => props.handleOnChange(e.target.value)}
      >
        <option value="commander">Commander</option>
        <option value="standard">Standard</option>
      </Form.Control>
    </Form.Group>
  );
}

export default DeckFormatInput;
