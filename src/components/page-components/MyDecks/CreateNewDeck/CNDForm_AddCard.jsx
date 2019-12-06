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
  const [cardName, setCardName] = useState("");
  const [cardVersions, setCardVersions] = useState([]);
  const [currentQty, setCurrentQty] = useState(1);
  const [printing, setPrinting] = useState("");
  const [condition, setCondition] = useState("Mint/Near Mint");
  const [board, setBoard] = useState("Mainboard");

  let addToDeck = e => {
    let currentCard = cardVersions.find(version => version.set === printing);
    debugger;

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

    setCardName("");
    setCurrentQty(1);
    setCondition("Mint/Near Mint");
    setPrinting("");
    setBoard("Mainboard");
    setCardVersions([]);
    e.preventDefault();
  };

  return (
    <div className="p-3 border">
      <h5>Card Entry</h5>
      <hr />
      <Form.Row>
        <Col sm={10}>
          <CardNameInput
            setCardName={setCardName}
            cardName={cardName}
            setCardVersions={setCardVersions}
            setPrinting={setPrinting}
          />
        </Col>
        <Col sm={2}>
          <CardQtyInput setCurrentQty={setCurrentQty} currentQty={currentQty} />
        </Col>
      </Form.Row>

      <Form.Row>
        <Col sm={4}>
          <CardPrintingInput
            cardVersions={cardVersions}
            setPrinting={setPrinting}
            printing={printing}
          />
        </Col>
        <Col sm={4}>
          <CardConditionInput
            setCondition={setCondition}
            condition={condition}
          />
        </Col>
        <Col sm={4}>
          <CardBoardInput setBoard={setBoard} board={board} />
        </Col>
      </Form.Row>

      <Button onClick={addToDeck} variant="primary">
        Add To Deck ->
      </Button>
    </div>
  );
}

export default CNDForm_AddCard;
