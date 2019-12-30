import React, { useState } from "react";
import { connect } from "react-redux";
import {
  deck as deckClient,
  note as noteClient
} from "../../../apis/deck-builder";
import { Row, Col } from "react-bootstrap";
import CNDForm from "./CNDForm";
import DeckPreview from "./DeckPreview";

function CreateNewDeck({ deck, context }) {
  const [deckInfo, setDeckInfo] = useState({
    title: deck.title,
    format: deck.format,
    description: deck.description,
    id: deck.id
  });

  const [note, setNote] = useState("");

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
      let deckData = await deckClient.addNewDeck(deck);
      await noteClient.addNewNote(
        `Created deck: ${deckInfo.title}`,
        deckData.id
      );
      window.location.href = `/my-decks/deck/${deckData.id}`;
    } else if (context === "edit") {
      await deckClient.editDeck(deck, deck.id);
      if (note.length === 0) {
        await noteClient.addNewNote("Edited Deck", deck.id);
      } else {
        await noteClient.addNewNote(note, deck.id);
      }
      window.location.href = `/my-decks/deck/${deck.id}`;
    }
  };

  return (
    <div className={context === "create" ? "p-3" : ""}>
      <Row>
        <Col xl={6}>
          <CNDForm
            deckInfo={deckInfo}
            updateDeckInfo={updateDeckInfo}
            note={note}
            setNote={setNote}
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
        },
        id: null
      }
    };
  } else {
    return { deck: store.tracker.activeDeck };
  }
};

export default connect(mapStateToProps)(CreateNewDeck);
