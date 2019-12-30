import React from "react";
import Form from "react-bootstrap/Form";

function DeckTitleInput(props) {
  return (
    <Form.Group>
      <Form.Label>Deck Title</Form.Label>
      <Form.Control
        type="text"
        value={props.title}
        placeholder="Enter title"
        onChange={e => props.handleOnChange(e.target.value)}
      />
    </Form.Group>
  );
}

export default DeckTitleInput;
