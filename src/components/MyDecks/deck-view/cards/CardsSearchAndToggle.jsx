import React from "react";
import Form from "react-bootstrap/form";
import ToggleButton from "react-bootstrap/ToggleButton";
import ToggleButtonGroup from "react-bootstrap/ToggleButtonGroup";

function CardsSearchAndToggle({
  searchText,
  setSearchText,
  cardView,
  setCardView
}) {
  return (
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
  );
}

export default CardsSearchAndToggle;
