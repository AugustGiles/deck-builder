import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";

function CardList(props) {
  let renderCardObj = () => {
    let objKeys = Object.keys(props.cards);
    return objKeys.map(objKey => {
      return (
        <div key={objKey}>
          <Jumbotron fluid className="p-3">
            <h4>{objKey}</h4>
          </Jumbotron>
          {renderCards(objKey)}
        </div>
      );
    });
  };

  let renderCards = key => {
    return props.cards[key].map(selection => {
      let card = selection.card;
      return (
        <div className="d-inline-block p-1" key={card.id}>
          <img
            src={card.image_uris.normal}
            alt={`${card.name} card`}
            style={{ height: "35vh" }}
          />
          <p
            className="text-muted text-center m-0"
            style={{ fontSize: "small" }}
          >
            {card.name}
          </p>
          <p className="text-muted text-center" style={{ fontSize: "small" }}>
            {card.prices.usd ? `$${card.prices.usd}` : "Price Not Listed"}
          </p>
        </div>
      );
    });
  };

  return (
    <div className={props.classList}>
      <div>{renderCardObj()}</div>
    </div>
  );
}

export default CardList;
