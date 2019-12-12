import React, { useState } from "react";
import CardList from "./CardList";
import TableView from "./TableView";
import Form from "react-bootstrap/Form";
import ToggleButtonGroup from "react-bootstrap/ToggleButtonGroup";
import ToggleButton from "react-bootstrap/ToggleButton";

function Cards(props) {
  let [cardView, setCardView] = useState("table");
  let [searchText, setSearchText] = useState("");

  return (
    <React.Fragment>
      <div>
        <Form className="d-inline-block">
          <Form.Group controlId="search">
            <Form.Label hidden>Search</Form.Label>
            <Form.Control
              type="text"
              placeholder="Search Card Name..."
              value={searchText}
              onChange={e => setSearchText(e.target.value)}
            />
          </Form.Group>
        </Form>
        <ToggleButtonGroup
          type="radio"
          value={cardView}
          name="cardView"
          size="sm"
          className="float-right mb-2 d-inline-block"
          onChange={val => setCardView(val)}
        >
          <ToggleButton value={"table"}>Table View</ToggleButton>
          <ToggleButton value={"cards"}>Card View</ToggleButton>
        </ToggleButtonGroup>
      </div>

      {cardView === "table" &&
        props.deck.cards[props.deckViewPage].length > 0 && (
          <TableView
            deckViewPage={props.deckViewPage}
            deck={props.deck}
            searchText={searchText}
          />
        )}

      {cardView === "cards" &&
        props.deck.cards[props.deckViewPage].length > 0 && (
          <CardList
            deckViewPage={props.deckViewPage}
            deck={props.deck}
            classList="d-inline-block mb-5"
            searchText={searchText}
          />
        )}

      {props.deck.cards[props.deckViewPage].length === 0 && (
        <p>No cards in {props.deckViewPage}</p>
      )}
    </React.Fragment>
  );
}

export default Cards;
