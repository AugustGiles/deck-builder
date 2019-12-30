import React from "react";
import Form from "react-bootstrap/Form";

function DeckNoteInput(props) {
  return (
    <Form.Group className="pt-3">
      <Form.Label hidden>Edit Note</Form.Label>
      <Form.Control
        as="textarea"
        rows="1"
        value={props.description}
        style={{ resize: "none", borderColor: "black" }}
        placeholder="Describe changes made in edit"
        onChange={e => props.handleOnChange(e.target.value)}
      />
    </Form.Group>
  );
}

export default DeckNoteInput;
