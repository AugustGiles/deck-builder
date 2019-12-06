import React from "react";
import Form from "react-bootstrap/Form";

function CardPrintingInput(props) {
  let renderPrintingOptions = cardVersions => {
    if (cardVersions.length === 0) {
      return <option>Type card name...</option>;
    } else {
      return props.cardVersions.map(cardVersion => {
        return (
          <option key={cardVersion.id} value={cardVersion.set}>
            {cardVersion.set}
          </option>
        );
      });
    }
  };

  return (
    <Form.Group>
      <Form.Label>Printing</Form.Label>
      <Form.Control
        as="select"
        onChange={e => props.setPrinting(e.target.value)}
        value={props.printing}
      >
        {renderPrintingOptions(props.cardVersions)}
      </Form.Control>
    </Form.Group>
  );
}

export default CardPrintingInput;
