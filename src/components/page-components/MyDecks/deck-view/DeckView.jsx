import React, { useState, useEffect } from "react";
import deckClient from "../../../../modules/deck-builder-api/deck";
import DeckViewNav from "./DeckViewNav";
import Cards from "./cards/Cards";
import CardsTable from "./table/Table";
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
      <DeckViewNav
        deckViewPage={deckViewPage}
        setDeckViewPage={setDeckViewPage}
      />
      <div
        style={{ top: "95px", overflow: "scroll", width: "80%" }}
        className="p-3 position-fixed h-100"
      >
        {deckViewPage === "dashboard" && Object.keys(deck).length > 0 && (
          <Dashboard deck={deck} />
        )}
        {deckViewPage === "cards" && <Cards deck={deck} />}
        {deckViewPage === "table" && <CardsTable deck={deck} />}
      </div>
    </React.Fragment>
  );
}

export default DeckView;
