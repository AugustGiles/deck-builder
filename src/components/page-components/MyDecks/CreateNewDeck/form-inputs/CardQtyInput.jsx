import React from "react";
import Form from "react-bootstrap/Form";

function CardQtyInput(props) {
  return (
    <Form.Group>
      <Form.Label>Qty</Form.Label>
      <Form.Control
        id="card-qty"
        type="number"
        defaultValue={1}
        min={1}
        onChange={e => props.handleOnChange(e.target.value)}
      />
    </Form.Group>
  );
}

export default CardQtyInput;
