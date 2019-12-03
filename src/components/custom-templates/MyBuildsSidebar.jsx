import React from "react";
import ListGroup from "react-bootstrap/ListGroup";

function MyBuildsSidebar(props) {
  let templateSetter = (template, num) => {
    if (template === "AllDeckStats") {
      props.setActiveTemplate("AllDeckStats");
    } else if (template === "CreateNewDeck") {
      props.setActiveTemplate("CreateNewDeck");
    } else if (template === "DeckView") {
      props.setDeckView(num);
    }
  };

  return (
    <aside>
      <ListGroup variant="flush">
        <ListGroup.Item
          active={props.activeTemplate === "AllDeckStats" ? true : false}
          action
          onClick={() => templateSetter("AllDeckStats")}
        >
          All Deck Stats
        </ListGroup.Item>
        <ListGroup.Item
          active={props.activeTemplate === "CreateNewDeck" ? true : false}
          action
          onClick={() => templateSetter("CreateNewDeck")}
        >
          Add a Deck
        </ListGroup.Item>
        <ListGroup.Item
          active={props.activeTemplate === "DeckView" ? true : false}
          action
          onClick={() => templateSetter("DeckView", 1)}
        >
          Deck title 1
        </ListGroup.Item>
      </ListGroup>
    </aside>
  );
}

export default MyBuildsSidebar;
