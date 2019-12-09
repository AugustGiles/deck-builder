import React, { useState, useEffect } from "react";
import deckClient from "../../../../modules/deck-builder-api/deck";
import DeckTitleBar from "./DeckTitleBar";
import Cards from "./cards/Cards";
import Dashboard from "./dashboard/Dashboard";

function DeckView() {
  let [deck, setDeck] = useState({});
  let [deckViewPage, setDeckViewPage] = useState("dashboard");

  useEffect(() => {
    const getDeck = async () => {
      const urlArr = window.location.href.split("/");
      const id = urlArr[urlArr.length - 1];
      const fetchedDeck = await deckClient.getDeckById(id);
      setDeck(fetchedDeck);
    };
    getDeck();
  }, []);

  return (
    <React.Fragment>
      <DeckTitleBar
        title={deck.title}
        deckViewPage={deckViewPage}
        setDeckViewPage={setDeckViewPage}
      />
      <div style={{ marginTop: "6%" }} className="p-3">
        {deckViewPage === "cards" ? (
          <Cards deck={deck} />
        ) : (
          <Dashboard deck={deck} />
        )}
      </div>
    </React.Fragment>
  );
}

export default DeckView;
