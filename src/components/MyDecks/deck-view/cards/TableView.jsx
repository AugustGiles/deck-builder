import React, { useState } from "react";
import { connect } from "react-redux";
import Table from "react-bootstrap/Table";
import tableSortHelper from "./helpers/tableSortHelper";

function TableView({ deck, activeView, searchText }) {
  let [sort, setSort] = useState("qty");

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

  let renderRows = deck => {
    return tableSortHelper
      .sortByAttribute(sort, deck, activeView)
      .filter(selection =>
        selection.card.name.toLowerCase().includes(searchText.toLowerCase())
      )
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

  let renderManaImages = cost => {
    if (cost !== "" && cost !== undefined) {
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

  return (
    <div>
      <Table bordered striped size="sm" style={{ marginBottom: "100px" }}>
        <thead>
          <tr style={{ cursor: "pointer" }}>{renderTableHeaders()}</tr>
        </thead>
        <tbody style={{ fontSize: "small" }}>{renderRows(deck)}</tbody>
      </Table>
    </div>
  );
}

const mapStateToProps = store => {
  return {
    deck: store.tracker.activeDeck,
    activeView: store.tracker.activeView
  };
};

export default connect(mapStateToProps)(TableView);
