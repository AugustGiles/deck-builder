import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import skryfallApi from "../../../../../modules/scryfall-api";

function CardNameDropdown(props) {
  let handleFetchedCardSelection = async (e, card) => {
    e.preventDefault();
    props.setCardName(card.name);
    props.setDropdownHidden(true);

    const cardVersions = await skryfallApi.getCardVersions(
      card.prints_search_uri
    );
    if (cardVersions) {
      props.setCardVersions(cardVersions);
      props.setPrinting(cardVersions[0].set_name);
    }
  };

  return (
    <ListGroup
      className="position-absolute"
      variant="flush"
      style={{
        zIndex: "10",
        backgroundColor: "white",
        width: "100%",
        boxShadow: "0 2px 5px 0 rgba(0,0,0,0.2), 0 2px 7px 0 rgba(0,0,0,0.19)"
      }}
    >
      {props.fetchedCards.map(card => {
        return (
          <ListGroup.Item
            action
            key={card.name}
            className="py-1"
            onClick={e => handleFetchedCardSelection(e, card)}
          >
            {card.name}
          </ListGroup.Item>
        );
      })}
    </ListGroup>
  );
}

export default CardNameDropdown;
