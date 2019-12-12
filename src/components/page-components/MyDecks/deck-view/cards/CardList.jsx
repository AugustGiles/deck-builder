import React from "react";
import cardSortHelper from "./cardSortHelper";

function CardList(props) {
  let renderCardObj = (deck, deckViewPage) => {
    let cards = cardSortHelper.sortByAttribute(
      "type_line",
      deck.cards[deckViewPage]
    );
    let objKeys = Object.keys(cards);
    return objKeys.map(objKey => {
      return (
        <div key={objKey}>
          <h4
            style={{
              letterSpacing: "3px",
              textTransform: "uppercase",
              fontWeight: "300"
            }}
          >
            {objKey}
          </h4>
          {renderCards(cards[objKey])}
          <hr />
        </div>
      );
    });
  };

  let renderCards = cards => {
    return cards.map(selection => {
      let card = selection.card;
      return (
        <div className="d-inline-block p-1" key={card.id}>
          <img
            src={card.image_uris && card.image_uris.normal}
            alt={`${card.name} card`}
            style={{ height: "35vh" }}
          />
          <p className="text-muted text-center" style={{ fontSize: "small" }}>
            {card.name}
          </p>
        </div>
      );
    });
  };

  return (
    <div className={props.classList}>
      <div>{renderCardObj(props.deck, props.deckViewPage)}</div>
    </div>
  );
}

export default CardList;
