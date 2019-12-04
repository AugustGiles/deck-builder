import React, { useState } from "react";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";

// TODO: Clean up styling?

function DeckPreview(props) {
  const [tabKey, setTabKey] = useState("mainboard");

  let renderSelectedCards = cards => {
    return cards.map(selection => {
      return (
        <p key={selection.card.id}>
          {selection.qty}x -- {selection.card.name}
        </p>
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
        <div>{renderSelectedCards(props.mainboardCards)}</div>
      </Tab>
      <Tab
        eventKey="sideboard"
        title="Sideboard"
        style={{ height: "70vh", overflow: "scroll" }}
        className="p-3 border-bottom border-right border-left"
      >
        <div>{renderSelectedCards(props.sideboardCards)}</div>
      </Tab>
      <Tab
        eventKey="maybeboard"
        title="Maybeboard"
        style={{ height: "70vh", overflow: "scroll" }}
        className="p-3 border-bottom border-right border-left"
      >
        <div>{renderSelectedCards(props.maybeboardCards)}</div>
      </Tab>
    </Tabs>
  );
}

export default DeckPreview;
