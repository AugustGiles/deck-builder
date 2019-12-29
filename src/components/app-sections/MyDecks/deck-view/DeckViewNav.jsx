import React from "react";
import { connect } from "react-redux";
import { setActiveView } from "../../../../redux/actions/trackerActions";
import Nav from "react-bootstrap/Nav";

function DeckViewNav({ activeView, setActiveView }) {
  let navItems = [
    "Dashboard",
    "Mainboard",
    "Sideboard",
    "Maybeboard",
    "Notes",
    "Edit",
    "Delete"
  ];

  return (
    <div
      className="position-absolute"
      style={{ zIndex: "1", width: "80%", height: "5.5vh" }}
    >
      <Nav
        variant="tabs"
        className="h-100 bg-white"
        activeKey={activeView}
        onSelect={selectedKey => setActiveView(selectedKey)}
      >
        {navItems.map(item => {
          return (
            <Nav.Item key={item.toLowerCase()}>
              <Nav.Link eventKey={item.toLowerCase()}>{item}</Nav.Link>
            </Nav.Item>
          );
        })}
      </Nav>
    </div>
  );
}

const mapStateToProps = store => {
  return { activeView: store.tracker.activeView };
};

export default connect(mapStateToProps, { setActiveView })(DeckViewNav);
