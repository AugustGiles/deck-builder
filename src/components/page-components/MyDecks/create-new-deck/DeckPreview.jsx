import React, { useState } from "react";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";

// TODO: Clean up styling?

function DeckPreview(props) {
  const [tabKey, setTabKey] = useState("mainboard");

  let handleDelete = (id, board, setBoard) => {
    let cards = [...board];
    let indexToRemove = cards.findIndex(selection => selection.card.id === id);
    cards.splice(indexToRemove, 1);
    setBoard(cards);
  };

  let renderSelectedCards = (boardCards, setBoard) => {
    return boardCards.map(selection => {
      return (
        <tr key={selection.card.id}>
          <td>{selection.qty}</td>
          <td>{selection.card.name}</td>
          <td>{selection.card.set}</td>
          <td>{selection.condition}</td>
          <td>{selection.foil ? "F" : "-"}</td>
          <td>{selection.prerelease ? "P" : "-"}</td>
          <td className="p-0">
            <Button
              className="rounded-0 w-100 border-0"
              variant="outline-danger"
              onClick={() =>
                handleDelete(selection.card.id, boardCards, setBoard)
              }
            >
              X
            </Button>
          </td>
        </tr>
      );
    });
  };

  return (
    <Tabs activeKey={tabKey} onSelect={k => setTabKey(k)}>
      <Tab
        eventKey="mainboard"
        title="Mainboard"
        style={{ height: "72vh", overflow: "scroll" }}
        className="border-bottom border-right border-left"
      >
        <Table striped size="sm">
          <tbody>
            {renderSelectedCards(props.mainboardCards, props.setMainboardCards)}
          </tbody>
        </Table>
      </Tab>
      <Tab
        eventKey="sideboard"
        title="Sideboard"
        style={{ height: "72vh", overflow: "scroll" }}
        className="border-bottom border-right border-left"
      >
        <Table striped size="sm">
          <tbody>
            {renderSelectedCards(props.sideboardCards, props.setSideboardCards)}
          </tbody>
        </Table>
      </Tab>
      <Tab
        eventKey="maybeboard"
        title="Maybeboard"
        style={{ height: "72vh", overflow: "scroll" }}
        className="border-bottom border-right border-left"
      >
        <Table striped size="sm">
          <tbody>
            {renderSelectedCards(
              props.maybeboardCards,
              props.setMaybeboardCards
            )}
          </tbody>
        </Table>
      </Tab>
    </Tabs>
  );
}

export default DeckPreview;
