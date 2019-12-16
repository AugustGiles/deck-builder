import React, { useState } from "react";
import { connect } from "react-redux";
import deckClient from "../../../../modules/deck-builder-api/deck";
import { Row, Col } from "react-bootstrap";
import CNDForm from "./CNDForm";
import DeckPreview from "./DeckPreview";

function CreateNewDeck({ deck, context }) {
  const [deckInfo, setDeckInfo] = useState({
    title: deck.title,
    format: deck.format,
    description: deck.description
  });

  const [cards, setCards] = useState(deck.cards);

  const updateDeckInfo = (val, key) => {
    let deckInfoCopy = { ...deckInfo };
    deckInfoCopy[key] = val;
    setDeckInfo(deckInfoCopy);
  };

  const saveSelectedCards = async () => {
    let deck = { ...deckInfo };
    deck["cards"] = cards;
    if (context === "create") {
      let data = await deckClient.addNewDeck(deck);
      window.location.href = `/my-decks/deck/${data.id}`;
    } else if (context === "edit") {
      await deckClient.editDeck(deck, deck.id);
    }
  };

  return (
    <div className="p-3">
      <Row>
        <Col xl={6}>
          <CNDForm
            deckInfo={deckInfo}
            updateDeckInfo={updateDeckInfo}
            setCards={setCards}
            cards={cards}
            saveSelectedCards={saveSelectedCards}
            context={context}
          />
        </Col>
        <Col xl={6} className="px-3 py-3 py-xl-0">
          <DeckPreview setCards={setCards} cards={cards} />
        </Col>
      </Row>
    </div>
  );
}

const mapStateToProps = store => {
  if (store.tracker.activeUrl === "/my-decks/create-new-deck") {
    return {
      deck: {
        title: "",
        format: "commander",
        description: "",
        cards: {
          mainboard: [],
          sideboard: [],
          maybeboard: []
        }
      }
    };
  } else {
    return { deck: store.tracker.activeDeck };
  }
};

export default connect(mapStateToProps)(CreateNewDeck);
