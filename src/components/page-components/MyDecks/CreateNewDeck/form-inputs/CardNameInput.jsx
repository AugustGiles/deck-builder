import React, { useState } from "react";
import mtg from "mtgsdk";
import Form from "react-bootstrap/Form";

function CardNameInput(props) {
  const [fetchedCards, setFetchedCards] = useState([]);
  let typingTimer;

  let searchName = text => {
    mtg.card.where({ name: text, pageSize: 5 }).then(cards => {
      setFetchedCards(cards);
      document.querySelector("#fetched-cards").hidden = false;
    });
  };

  let handleCardNameInput = e => {
    clearTimeout(typingTimer);
    let value = e.target.value;

    if (value) {
      typingTimer = setTimeout(() => searchName(value), 1000);
    }
  };

  let renderFetchedCards = cards => {
    return cards.map(card => {
      return (
        <p
          key={card.id}
          onClick={() => {
            document.querySelector("#card-title").value = card.name;
            setFetchedCards([]);
            props.setCurrentCard(card);
            document.querySelector("#fetched-cards").hidden = true;
          }}
        >
          {card.name}
        </p>
      );
    });
  };
  return (
    <Form.Group className="position-relative mb-3">
      <Form.Label>Card Title</Form.Label>
      <Form.Control
        className="mb-0"
        id="card-title"
        type="text"
        placeholder="'Alesha, Who Smiles at Death'"
        onKeyUp={e => handleCardNameInput(e)}
      />
      <div
        id="fetched-cards"
        hidden
        className="position-absolute p-2"
        style={{
          zIndex: "10",
          backgroundColor: "white",
          width: "100%",
          boxShadow: "0 2px 5px 0 rgba(0,0,0,0.2), 0 2px 7px 0 rgba(0,0,0,0.19)"
        }}
      >
        {renderFetchedCards(fetchedCards)}
      </div>
    </Form.Group>
  );
}

export default CardNameInput;
