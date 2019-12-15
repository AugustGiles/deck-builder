import React, { useState } from "react";
import { connect } from "react-redux";
import CardsSearchAndToggle from "./CardsSearchAndToggle";
import CardView from "./CardView";
import TableView from "./TableView";

function Cards({ deck, activeView }) {
  let [cardView, setCardView] = useState("table");
  let [searchText, setSearchText] = useState("");

  return (
    <React.Fragment>
      <CardsSearchAndToggle
        cardView={cardView}
        setCardView={setCardView}
        searchText={searchText}
        setSearchText={setSearchText}
      />

      {cardView === "table" && deck.cards[activeView].length > 0 && (
        <TableView searchText={searchText} />
      )}

      {cardView === "cards" && deck.cards[activeView].length > 0 && (
        <CardView searchText={searchText} />
      )}

      {deck.cards[activeView].length === 0 && <p>No cards in {activeView}</p>}
    </React.Fragment>
  );
}

const mapStateToProps = store => {
  return {
    deck: store.tracker.activeDeck,
    activeView: store.tracker.activeView
  };
};

export default connect(mapStateToProps)(Cards);
