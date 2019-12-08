import React, { useState } from "react";
import { Tabs, Tab, Table } from "react-bootstrap";
import DeckPreviewCardRow from "./DeckPreviewCardRow";

function DeckPreview(props) {
  const [tabKey, setTabKey] = useState("mainboard");
  const boards = ["Mainboard", "Sideboard", "Maybeboard"];

  let renderSelectedCards = () => {
    return props.cards[tabKey].map(selection => {
      return (
        <DeckPreviewCardRow selection={selection} handleDelete={handleDelete} />
      );
    });
  };

  let handleDelete = id => {
    let cardsCopy = { ...props.cards };
    let indexToRemove = props.cards[tabKey].findIndex(
      selection => selection.card.id === id
    );
    cardsCopy[tabKey].splice(indexToRemove, 1);
    props.setCards(cardsCopy);
  };

  return (
    <Tabs activeKey={tabKey} onSelect={k => setTabKey(k)}>
      {boards.map(board => {
        return (
          <Tab
            key={board}
            title={board}
            eventKey={board.toLowerCase()}
            style={{ height: "72vh", overflow: "scroll" }}
            className="border-bottom border-right border-left"
          >
            <Table striped size="sm">
              <tbody>{renderSelectedCards(props.cards, props.setCards)}</tbody>
            </Table>
          </Tab>
        );
      })}
    </Tabs>
  );
}

export default DeckPreview;
