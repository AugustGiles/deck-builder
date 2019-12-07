import React, { useState, useEffect } from "react";
import deckClient from "../../../../modules/deck-builder-api/deck";
import CardList from "./CardList";
import FilterSort from "./FilterSort";
import { FixedRight } from "../../../layout-elements/";

function DeckView() {
  let [deck, setDeck] = useState({});
  let [view, setView] = useState("mainboard");
  let [sort, setSort] = useState("type_line");

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
    <div className="p-3">
      <h3>{deck.title}</h3>
      <hr />
      <CardList deck={deck} classList="d-inline-block w-75" />
      <FixedRight>
        <FilterSort
          view={view}
          setView={setView}
          sort={sort}
          setSort={setSort}
        />
      </FixedRight>
    </div>
  );
}

export default DeckView;
