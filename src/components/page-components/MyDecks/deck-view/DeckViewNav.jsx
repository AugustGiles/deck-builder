import React from "react";
import Nav from "react-bootstrap/Nav";

function DeckTitleBar(props) {
  return (
    <div
      className="position-absolute"
      style={{
        zIndex: "1",
        width: "80%",
        height: "5.5vh"
      }}
    >
      <Nav
        activeKey={props.deckViewPage}
        onSelect={selectedKey => props.setDeckViewPage(selectedKey)}
        variant="tabs"
        className="h-100 bg-white"
      >
        <Nav.Item>
          <Nav.Link eventKey="dashboard">Dashboard</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="mainboard">Mainboard</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="sideboard">Sideboard</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="maybeboard">Maybeboard</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="edit">Edit Deck</Nav.Link>
        </Nav.Item>
      </Nav>
    </div>
  );
}

export default DeckTitleBar;
