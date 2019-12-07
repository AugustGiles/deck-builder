import React, { useState, useEffect } from "react";
import deckClient from "../../../modules/deck-builder-api/deck";
import Form from "react-bootstrap/Form";

function DeckView() {
  let [deck, setDeck] = useState({});

  useEffect(() => {
    const getDeck = async () => {
      const urlArr = window.location.href.split("/");
      const id = urlArr[urlArr.length - 1];
      const fetchedDeck = await deckClient.getDeck(id);
      setDeck(fetchedDeck);
    };
    getDeck();
  }, []);

  const renderDeckCards = deck => {
    return deck.cards["mainboard"].map(selection => {
      let card = selection.card;
      return (
        <div className="d-inline-block p-1" key={card.id}>
          <img
            src={card.image_uris.normal}
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
      <div className="d-inline-block w-75">
        <div>{Object.keys(deck).length !== 0 && renderDeckCards(deck)}</div>
      </div>
      <div
        className="d-inline-block float-right p-2 position-fixed border-left"
        style={{ width: "19%" }}
      >
        <Form>
          <Form.Group>
            <Form.Label>View</Form.Label>
            <Form.Control as="select" size="sm">
              <option value="mainboard">Mainboard</option>
              <option value="sideboard">Sideboard</option>
              <option value="maybeboard">Maybeboard</option>
            </Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>Sort By</Form.Label>
            <Form.Control as="select" size="sm">
              <option value="type_line">Card Type</option>
              <option value="cmc">CMC</option>
              <option value="rarity">Rarity</option>
              <option value="power">Power</option>
              <option value="toughness">Toughness</option>
            </Form.Control>
          </Form.Group>
        </Form>
      </div>
    </div>
  );
}

export default DeckView;
