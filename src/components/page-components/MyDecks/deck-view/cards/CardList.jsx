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
          <div className="d-flex flex-wrap">{renderCards(cards[objKey])}</div>

          <hr />
        </div>
      );
    });
  };

  let renderCards = cards => {
    return cards.map(selection => {
      let card = selection.card;
      if (!card.name.toLowerCase().includes(props.searchText.toLowerCase())) {
        return null;
      }
      let url;
      if (!card.image_uris && card.card_faces) {
        url = card.card_faces[0].image_uris.normal;
      } else {
        url = card.image_uris.normal;
      }
      return (
        <div
          className="d-inline-block p-1"
          key={card.id}
          style={{ maxWidth: "200px", height: "100%" }}
        >
          <img src={url} alt={`${card.name} card`} style={{ height: "35vh" }} />
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
