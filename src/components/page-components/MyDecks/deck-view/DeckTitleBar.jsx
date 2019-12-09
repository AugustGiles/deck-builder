import React from "react";
import ToggleButtonGroup from "react-bootstrap/ToggleButtonGroup";
import ToggleButton from "react-bootstrap/ToggleButton";

function DeckTitleBar(props) {
  return (
    <div
      className="position-fixed px-3 p-3"
      style={{
        zIndex: "1",
        width: "80%",
        backgroundColor: "#D4E6F1"
      }}
    >
      <h3 className="d-inline-block">{props.title}</h3>
      <ToggleButtonGroup
        type="radio"
        name="radio"
        value={props.deckViewPage}
        onChange={val => props.setDeckViewPage(val)}
        className="float-right"
      >
        <ToggleButton value={"dashboard"}>Dashboard</ToggleButton>
        <ToggleButton value={"cards"}>Cards</ToggleButton>
      </ToggleButtonGroup>
    </div>
  );
}

export default DeckTitleBar;
