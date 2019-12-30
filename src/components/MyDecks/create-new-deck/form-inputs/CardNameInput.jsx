import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import CardNameDropdown from "./CardNameDropdown";
import scryfallCards from "../../../../apis/scryfall/cards";

function CardNameInput(props) {
  const [dropdownHidden, setDropdownHidden] = useState(true);
  const [fetchedCards, setFetchedCards] = useState([]);
  let typingTimer;

  let handleCardNameInput = e => {
    clearTimeout(typingTimer);
    typingTimer = setTimeout(() => {
      searchName(props.cardName);
    }, 500);
  };

  let searchName = async cardName => {
    let cards = await scryfallCards.getCardsByName(cardName);
    if (cards) {
      setFetchedCards(cards.splice(0, 5));
      setDropdownHidden(false);
    }
  };

  return (
    <Form.Group className="position-relative mb-3">
      <Form.Label>Card Title</Form.Label>
      <Form.Control
        type="text"
        id="card-title"
        value={props.cardName}
        className="mb-0"
        onChange={e => props.setCardName(e.target.value)}
        onKeyUp={e => handleCardNameInput(e)}
        onKeyDown={e => clearTimeout(typingTimer)}
        placeholder="'Alesha, Who Smiles at Death'"
      />
      {!dropdownHidden && (
        <CardNameDropdown
          fetchedCards={fetchedCards}
          setDropdownHidden={setDropdownHidden}
          {...props}
        />
      )}
    </Form.Group>
  );
}

export default CardNameInput;
