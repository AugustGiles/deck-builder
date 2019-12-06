import React, { useState, useEffect } from "react";
import deckClient from "../../../modules/deck-builder-api/deck";

function DeckView() {
  let [deck, setDeck] = useState({});

  useEffect(() => {
    const getDeck = async () => {
      const urlArr = window.location.href.split("/");
      const id = urlArr[urlArr.length - 1];
      const fetchedDecks = await deckClient.getDeck(id);
      setDeck(fetchedDecks);
    };
    getDeck();
  }, []);

  const renderDeckCards = deck => {
    return deck.cards["mainboard"].map(selection => {
      let card = selection.card;
      return (
        <div className="d-inline-block p-1">
          <img
            src={card.imageUrl}
            alt={`${card.name} card`}
            style={{ height: "35vh" }}
          />
          <p className="text-muted text-center" style={{ fontSize: "small" }}>
            {card.name}
          </p>
        </div>
      );
    });
  };

  return (
    <div className="p-3">
      <h3>{deck.title}</h3>
      <hr />
      <div>{Object.keys(deck).length !== 0 && renderDeckCards(deck)}</div>
    </div>
  );
}

export default DeckView;
