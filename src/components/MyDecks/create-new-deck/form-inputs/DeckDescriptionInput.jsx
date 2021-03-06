import React from "react";
import Form from "react-bootstrap/Form";

function DeckDescriptionInput(props) {
  return (
    <Form.Group>
      <Form.Label>Description</Form.Label>
      <Form.Control
        as="textarea"
        rows={props.context === "edit" ? "2" : "4"}
        value={props.description}
        style={{ resize: "none" }}
        placeholder="More information about the build..."
        onChange={e => props.handleOnChange(e.target.value)}
      />
    </Form.Group>
  );
}

export default DeckDescriptionInput;
