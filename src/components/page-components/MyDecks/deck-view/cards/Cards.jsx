import React, { useState } from "react";
import { connect } from "react-redux";
import CardList from "./CardList";
import TableView from "./TableView";
import Form from "react-bootstrap/Form";
import ToggleButtonGroup from "react-bootstrap/ToggleButtonGroup";
import ToggleButton from "react-bootstrap/ToggleButton";

function Cards({ deck, activeView }) {
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

      {cardView === "table" && deck.cards[activeView].length > 0 && (
        <TableView
          deckViewPage={activeView}
          deck={deck}
          searchText={searchText}
        />
      )}

      {cardView === "cards" && deck.cards[activeView].length > 0 && (
        <CardList
          deckViewPage={activeView}
          deck={deck}
          classList="d-inline-block mb-5"
          searchText={searchText}
        />
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
