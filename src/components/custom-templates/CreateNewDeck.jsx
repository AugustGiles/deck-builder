import React, { useState } from "react";
import mtg from "mtgsdk";

function CreateNewDeck() {
  const [deckTitle, setDeckTitle] = useState("");
  const [fetchedCards, setFetchedCards] = useState([]);
  const [selectedCards, setSelectedCards] = useState([]);
  let typingTimer;

  let renderFetchedCards = cards => {
    return cards.map(card => {
      return (
        <p
          key={card.id}
          onClick={() => {
            setSelectedCards([...selectedCards, card]);
          }}
        >
          {card.name}
        </p>
      );
    });
  };

  let renderSelectedCards = cards => {
    return cards.map(card => {
      return <p key={card.id}>{card.name}</p>;
    });
  };

  // move this to mtg api module
  let searchName = text => {
    mtg.card.where({ name: text }).then(cards => {
      setFetchedCards(cards);
    });
  };

  let handleCardNameInput = e => {
    clearTimeout(typingTimer);

    if (e.target.value) {
      let text = e.target.value;
      typingTimer = setTimeout(() => searchName(text), 1000);
    }
  };

  let saveSelectedCards = () => {
    console.log("save!");
  };

  return (
    <React.Fragment>
      <div style={{ display: "inline-block" }}>
        <h2>Create a New Deck</h2>
        <form>
          <div>
            <label hidden>Deck Title</label>
            <input
              type="text"
              name="deck-title"
              placeholder="Deck Title"
              onChange={e => setDeckTitle(e.target.value)}
            />
          </div>
          <input onKeyUp={e => handleCardNameInput(e)}></input>
          {renderFetchedCards(fetchedCards)}
        </form>
      </div>
      <div style={{ display: "inline-block", float: "right", width: "50%" }}>
        <h4>{deckTitle}</h4>
        {renderSelectedCards(selectedCards)}
        <button onClick={saveSelectedCards}>Save</button>
      </div>
    </React.Fragment>
  );
}

export default CreateNewDeck;
