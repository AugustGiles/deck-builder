import React from "react";

function CardList(props) {
  const renderDeckCards = deck => {
    return deck.cards["mainboard"].map(selection => {
      let card = selection.card;
      return (
        <div className="d-inline-block p-1" key={card.id}>
          <img
            src={card.image_uris.normal}
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
      <div>
        {Object.keys(props.deck).length !== 0 && renderDeckCards(props.deck)}
      </div>
    </div>
  );
}

export default CardList;
