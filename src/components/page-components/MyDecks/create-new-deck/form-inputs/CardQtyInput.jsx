import React from "react";
import Form from "react-bootstrap/Form";

function CardQtyInput(props) {
  return (
    <Form.Group>
      <Form.Label>Qty</Form.Label>
      <Form.Control
        min={1}
        type="number"
        value={props.currentQty}
        onChange={e => props.setCurrentQty(e.target.value)}
      />
    </Form.Group>
  );
}

export default CardQtyInput;
