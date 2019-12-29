import React, { useState } from "react";
import { Form, Col, Button } from "react-bootstrap";
import input from "./form-inputs";

function CNDForm_AddCard(props) {
  const [cardName, setCardName] = useState("");
  const [cardVersions, setCardVersions] = useState([]);
  const [currentQty, setCurrentQty] = useState(1);
  const [printing, setPrinting] = useState("");
  const [condition, setCondition] = useState("Mint/Near Mint");
  const [board, setBoard] = useState("mainboard");
  const [foil, setFoil] = useState(false);
  const [prerelease, setPrerelease] = useState(false);
  const [isCommander, setIsCommander] = useState(false);

  let addToDeck = e => {
    e.preventDefault();
    if (isCommander === true && props.deckInfo.format === "commander") {
      props.updateDeckInfo(cardName, "commander");
    }
    props.setCards(compileCards());
    resetState();
  };

  let compileCards = () => {
    let currentCard = cardVersions.find(
      version => version.set_name === printing
    );

    let cardsCopy = { ...props.cards };
    cardsCopy[board] = [
      ...props.cards[board],
      { card: currentCard, qty: currentQty, condition, foil, prerelease }
    ];
    return cardsCopy;
  };

  let resetState = () => {
    setCardName("");
    setCurrentQty(1);
    setCondition("Mint/Near Mint");
    setPrinting("");
    setBoard("mainboard");
    setCardVersions([]);
    setFoil(false);
    setPrerelease(false);
    setIsCommander(false);
    document.querySelector("#card-title").focus();
  };

  return (
    <div className="p-3 border">
      <h5>Card Entry</h5>
      <hr />
      <Form.Row>
        <Col sm={10}>
          <input.CardNameInput
            setCardName={setCardName}
            cardName={cardName}
            setCardVersions={setCardVersions}
            setPrinting={setPrinting}
          />
        </Col>
        <Col sm={2}>
          <input.CardQtyInput
            setCurrentQty={setCurrentQty}
            currentQty={currentQty}
          />
        </Col>
      </Form.Row>

      <Form.Row>
        <Col sm={4}>
          <input.CardPrintingInput
            cardVersions={cardVersions}
            setPrinting={setPrinting}
            printing={printing}
          />
        </Col>
        <Col sm={4}>
          <input.CardConditionInput
            setCondition={setCondition}
            condition={condition}
          />
        </Col>
        <Col sm={4}>
          <input.CardBoardInput setBoard={setBoard} board={board} />
        </Col>
      </Form.Row>
      <Form.Row>
        <input.CardCheckboxesInput
          setFoil={setFoil}
          foil={foil}
          setPrerelease={setPrerelease}
          prerelease={prerelease}
          deckInfo={props.deckInfo}
          setIsCommander={setIsCommander}
          isCommander={isCommander}
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
