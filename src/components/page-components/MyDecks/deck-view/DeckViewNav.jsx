import React from "react";
import Nav from "react-bootstrap/Nav";

function DeckTitleBar(props) {
  return (
    <div
      className="position-absolute"
      style={{
        zIndex: "1",
        width: "80%"
      }}
    >
      <Nav
        activeKey={props.deckViewPage}
        onSelect={selectedKey => props.setDeckViewPage(selectedKey)}
        variant="tabs"
        className="h-100"
      >
        <Nav.Item>
          <Nav.Link eventKey="dashboard">Dashboard</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="cards">Cards</Nav.Link>
        </Nav.Item>
      </Nav>
    </div>
  );
}

export default DeckTitleBar;
