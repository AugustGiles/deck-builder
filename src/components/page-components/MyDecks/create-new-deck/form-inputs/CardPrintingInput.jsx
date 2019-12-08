import React from "react";
import Form from "react-bootstrap/Form";

function CardPrintingInput(props) {
  let renderPrintingOptions = cardVersions => {
    return props.cardVersions.map(ver => {
      return (
        <option key={ver.id} value={ver.set_name}>
          {ver.set_name}
        </option>
      );
    });
  };

  return (
    <Form.Group>
      <Form.Label>Printing</Form.Label>
      <Form.Control
        as="select"
        onChange={e => props.setPrinting(e.target.value)}
        value={props.printing}
      >
        {props.cardVersions.length === 0 ? (
          <option>Type card name...</option>
        ) : (
          renderPrintingOptions(props.cardVersions)
        )}
      </Form.Control>
    </Form.Group>
  );
}

export default CardPrintingInput;
