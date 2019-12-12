import React, { useState } from "react";
import Table from "react-bootstrap/Table";
import tableSortHelper from "./tableSortHelper";

function TableView(props) {
  let [sort, setSort] = useState("qty");

  let renderManaImages = cost => {
    if (cost !== "" && cost !== undefined) {
      debugger;
      let costArr = cost.slice(1, cost.length - 1).split("}{");

      return costArr.map((costSymbol, i) => {
        return (
          <img
            src={`${process.env.PUBLIC_URL}/images/mana-symbols/${costSymbol}.svg`}
            className="d-inline-block"
            alt="test"
            height="14px"
            key={i}
          />
        );
      });
    }
  };

  let renderRows = deck => {
    return tableSortHelper
      .sortByAttribute(sort, deck, props.deckViewPage)
      .map(selection => {
        return (
          <tr key={selection.card.id}>
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

  let renderTableHeaders = () => {
    let headerArr = [
      { title: "Qty", key: "qty" },
      { title: "Name", key: "name" },
      { title: "Type", key: "type_line" },
      { title: "Set Name", key: "set_name" },
      { title: "Condition", key: "condition" },
      { title: "Mana Cost", key: "cmc" }
    ];

    return headerArr.map(item => {
      return (
        <th
          onClick={() => setSort(item.key)}
          className={sort === item.key ? "active" : ""}
          key={item.key}
        >
          {item.title}
        </th>
      );
    });
  };

  return (
    <div>
      {/* {Object.keys(props.deck).length !== 0 && (
        <React.Fragment> */}
      <Table bordered striped size="sm" style={{ marginBottom: "100px" }}>
        <thead>
          <tr style={{ cursor: "pointer" }}>{renderTableHeaders()}</tr>
        </thead>
        <tbody style={{ fontSize: "small" }}>{renderRows(props.deck)}</tbody>
      </Table>
      {/* </React.Fragment>
      )} */}
    </div>
  );
}

export default TableView;
