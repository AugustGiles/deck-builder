import React, { useState } from "react";
import CardList from "./CardList";
import TableView from "./TableView";
import ToggleButtonGroup from "react-bootstrap/ToggleButtonGroup";
import ToggleButton from "react-bootstrap/ToggleButton";

function Cards(props) {
  let [cardView, setCardView] = useState("table");

  return (
    <React.Fragment>
      <ToggleButtonGroup
        type="radio"
        value={cardView}
        name="cardView"
        size="sm"
        className="float-right mb-2"
        onChange={val => setCardView(val)}
      >
        <ToggleButton value={"table"}>Table View</ToggleButton>
        <ToggleButton value={"cards"}>Card View</ToggleButton>
      </ToggleButtonGroup>

      {cardView === "table" &&
        props.deck.cards[props.deckViewPage].length > 0 && (
          <TableView deckViewPage={props.deckViewPage} deck={props.deck} />
        )}
      {cardView === "cards" &&
        props.deck.cards[props.deckViewPage].length > 0 && (
          <CardList
            deckViewPage={props.deckViewPage}
            deck={props.deck}
            classList="d-inline-block mb-5"
          />
        )}
      {props.deck.cards[props.deckViewPage].length === 0 && (
        <p>No cards in {props.deckViewPage}</p>
      )}
    </React.Fragment>
  );
}

export default Cards;
