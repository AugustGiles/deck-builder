import React, { useState } from "react";
import { Form, Col, Button } from "react-bootstrap";
import {
  CardNameInput,
  CardQtyInput,
  CardConditionInput,
  CardBoardInput,
  CardPrintingInput,
  CardCheckboxesInput
} from "./form-inputs";

function CNDForm_AddCard(props) {
  const [cardName, setCardName] = useState("");
  const [cardVersions, setCardVersions] = useState([]);
  const [currentQty, setCurrentQty] = useState(1);
  const [printing, setPrinting] = useState("");
  const [condition, setCondition] = useState("Mint/Near Mint");
  const [board, setBoard] = useState("Mainboard");
  const [foil, setFoil] = useState(false);
  const [prerelease, setPrerelease] = useState(false);

  let addToDeck = e => {
    let currentCard = cardVersions.find(version => version.set === printing);

    if (board === "Mainboard") {
      props.setMainboardCards([
        ...props.mainboardCards,
        { card: currentCard, qty: currentQty, condition, foil, prerelease }
      ]);
    } else if (board === "Sideboard") {
      props.setSideboardCards([
        ...props.sideboardCards,
        { card: currentCard, qty: currentQty, condition, foil, prerelease }
      ]);
    } else if (board === "Maybeboard") {
      props.setMaybeboardCards([
        ...props.maybeboardCards,
        { card: currentCard, qty: currentQty, condition, foil, prerelease }
      ]);
    }

    setCardName("");
    setCurrentQty(1);
    setCondition("Mint/Near Mint");
    setPrinting("");
    setBoard("Mainboard");
    setCardVersions([]);
    setFoil(false);
    setPrerelease(false);

    document.querySelector("#card-title").focus();
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
      <Form.Row>
        <CardCheckboxesInput
          setFoil={setFoil}
          foil={foil}
          setPrerelease={setPrerelease}
          prerelease={prerelease}
        />
        <Col>
          <Button
            onClick={addToDeck}
            variant="primary"
            className="w-100"
            disabled={cardVersions.length === 0 ? true : false}
          >
            Add To Deck
          </Button>
        </Col>
      </Form.Row>
    </div>
  );
}

export default CNDForm_AddCard;
