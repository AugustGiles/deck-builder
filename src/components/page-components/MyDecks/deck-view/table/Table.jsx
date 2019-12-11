import React, { useState } from "react";
import Table from "react-bootstrap/Table";

function CardsTable(props) {
  let [boardView, setBoardView] = useState("mainboard");
  // let [sort, setSort] = useState("type_line");

  let handleMouseEnter = (name, imageUrl) => {
    document.querySelector("#card-image").src = imageUrl;
    document.querySelector("#card-image").alt = name;
  };

  let renderManaImages = cost => {
    if (cost !== "") {
      let costArr = cost.slice(1, cost.length - 1).split("}{");

      return costArr.map(costSymbol => {
        return (
          <img
            src={`${process.env.PUBLIC_URL}/images/mana-symbols/${costSymbol}.svg`}
            className="d-inline-block"
            alt="test"
            height="14px"
          />
        );
      });
    }
  };

  let renderRow = cards => {
    return cards.map(selection => {
      return (
        <tr
          key={selection.card.id}
          // onMouseEnter={() =>
          //   handleMouseEnter(
          //     selection.card.name,
          //     selection.card.image_uris.normal
          //   )
          // }
        >
          <td>{selection.qty}</td>
          <td>{selection.card.name}</td>
          <td>{selection.card.type_line}</td>
          <td>{selection.card.set_name}</td>
          <td>{selection.condition}</td>
          <td>{renderManaImages(selection.card.mana_cost)}</td>
        </tr>
      );
    });
  };
  return (
    <div>
      {Object.keys(props.deck).length !== 0 && (
        <React.Fragment>
          <Table bordered striped size="sm" style={{ marginBottom: "100px" }}>
            <thead>
              <tr>
                <th>QTY</th>
                <th>Title</th>
                <th>Type</th>
                <th>Set Name</th>
                <th>Condition</th>
                <th>Mana Cost</th>
              </tr>
            </thead>
            <tbody style={{ fontSize: "small" }}>
              {renderRow(props.deck.cards[boardView])}
            </tbody>
          </Table>
          {/* <div className="w-25 float-right m-auto">
            <img
              alt=""
              id="card-image"
              style={{ width: "90%" }}
              className="m-auto"
            />
          </div> */}
        </React.Fragment>
      )}
    </div>
  );
}

export default CardsTable;
