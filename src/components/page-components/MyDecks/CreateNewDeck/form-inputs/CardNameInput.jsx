import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import ListGroup from "react-bootstrap/ListGroup";

import myDecksHelper from "../../../../../modules/component-helpers/myDecksHelper";

function CardNameInput(props) {
  const [dropdownHidden, setDropdownHidden] = useState(true);
  const [fetchedCardNames, setFetchedCardNames] = useState([]);
  let typingTimer;
  let helper = myDecksHelper(
    props.setCardVersions,
    setDropdownHidden,
    props.setCardName,
    setFetchedCardNames,
    props.setPrinting,
    props.cardName
  );

  let handleCardNameInput = e => {
    clearTimeout(typingTimer);
    typingTimer = setTimeout(helper.searchName, 500);
  };

  return (
    <Form.Group className="position-relative mb-3">
      <Form.Label>Card Title</Form.Label>
      <Form.Control
        type="text"
        id="card-title"
        value={props.cardName}
        className="mb-0"
        onChange={e => props.setCardName(e.target.value)}
        onKeyUp={e => handleCardNameInput(e)}
        onKeyDown={e => clearTimeout(typingTimer)}
        placeholder="'Alesha, Who Smiles at Death'"
      />
      <ListGroup
        hidden={dropdownHidden === true ? true : false}
        className="position-absolute"
        variant="flush"
        style={{
          zIndex: "10",
          backgroundColor: "white",
          width: "100%",
          boxShadow: "0 2px 5px 0 rgba(0,0,0,0.2), 0 2px 7px 0 rgba(0,0,0,0.19)"
        }}
      >
        {fetchedCardNames.map(name => {
          return (
            <ListGroup.Item
              action
              key={name}
              className="py-1"
              onClick={e => helper.handleFetchedCardSelection(e, name)}
            >
              {name}
            </ListGroup.Item>
          );
        })}
      </ListGroup>
    </Form.Group>
  );
}

export default CardNameInput;
