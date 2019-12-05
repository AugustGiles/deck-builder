import React, { useState } from "react";
import { Form, Col, Button } from "react-bootstrap";
import {
  CardNameInput,
  CardQtyInput,
  CardConditionInput,
  CardBoardInput,
  CardPrintingInput
} from "./form-inputs";

function CNDForm_AddCard(props) {
  const [currentCard, setCurrentCard] = useState(null);
  const [currentQty, setCurrentQty] = useState(1);
  const [condition, setCondition] = useState("Mint/Near Mint");
  const [board, setBoard] = useState("Mainboard");

  let addToDeck = e => {
    if (board === "Mainboard") {
      props.setMainboardCards([
        ...props.mainboardCards,
        { card: currentCard, qty: currentQty, condition }
      ]);
    } else if (board === "Sideboard") {
      props.setSideboardCards([
        ...props.sideboardCards,
        { card: currentCard, qty: currentQty, condition }
      ]);
    } else if (board === "Maybeboard") {
      props.setMaybeboardCards([
        ...props.maybeboardCards,
        { card: currentCard, qty: currentQty, condition }
      ]);
    }

    setCurrentCard(null);
    setCurrentQty(1);
    document.querySelector("#card-title").value = "";
    document.querySelector("#card-qty").value = 1;
    e.preventDefault();
  };

  return (
    <div className="p-3 border">
      <h5>Card Entry</h5>
      <hr />
      <Form.Row>
        <Col sm={10}>
          <CardNameInput setCurrentCard={setCurrentCard} />
        </Col>
        <Col sm={2}>
          <CardQtyInput handleOnChange={val => setCurrentQty(val)} />
        </Col>
      </Form.Row>

      <Form.Row>
        <Col sm={4}>
          <CardPrintingInput />
        </Col>
        <Col sm={4}>
          <CardConditionInput handleOnChange={val => setCondition(val)} />
        </Col>
        <Col sm={4}>
          <CardBoardInput handleOnChange={val => setBoard(val)} />
        </Col>
      </Form.Row>

      <Button onClick={addToDeck} variant="primary">
        Add To Deck ->
      </Button>
    </div>
  );
}

export default CNDForm_AddCard;
