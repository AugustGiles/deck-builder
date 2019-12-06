import React, { useState } from "react";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import Table from "react-bootstrap/Table";

// TODO: Clean up styling?

function DeckPreview(props) {
  const [tabKey, setTabKey] = useState("mainboard");

  let renderSelectedCards = cards => {
    return cards.map(selection => {
      return (
        <tr key={selection.card.id}>
          <td>{selection.qty}</td>
          <td>{selection.card.name}</td>
          <td>{selection.card.set}</td>
          <td>{selection.condition}</td>
          <td>X</td>
        </tr>
      );
    });
  };

  return (
    <Tabs activeKey={tabKey} onSelect={k => setTabKey(k)}>
      <Tab
        eventKey="mainboard"
        title="Mainboard"
        style={{ height: "70vh", overflow: "scroll" }}
        className="p-3 border-bottom border-right border-left"
      >
        <Table striped size="sm">
          <thead>
            <tr>
              <th>Qty</th>
              <th>Card Title</th>
              <th>Set</th>
              <th>Condition</th>
              <th>X</th>
            </tr>
          </thead>
          <tbody>{renderSelectedCards(props.mainboardCards)}</tbody>
        </Table>
      </Tab>
      <Tab
        eventKey="sideboard"
        title="Sideboard"
        style={{ height: "70vh", overflow: "scroll" }}
        className="p-3 border-bottom border-right border-left"
      >
        <Table striped size="sm">
          <thead>
            <tr>
              <th>Qty</th>
              <th>Card Title</th>
              <th>Set</th>
              <th>Condition</th>
              <th>X</th>
            </tr>
          </thead>
          <tbody>{renderSelectedCards(props.sideboardCards)}</tbody>
        </Table>
      </Tab>
      <Tab
        eventKey="maybeboard"
        title="Maybeboard"
        style={{ height: "70vh", overflow: "scroll" }}
        className="p-3 border-bottom border-right border-left"
      >
        <Table striped size="sm">
          <thead>
            <tr>
              <th>Qty</th>
              <th>Card Title</th>
              <th>Set</th>
              <th>Condition</th>
              <th>X</th>
            </tr>
          </thead>
          <tbody>{renderSelectedCards(props.maybeboardCards)}</tbody>
        </Table>
      </Tab>
    </Tabs>
  );
}

export default DeckPreview;
