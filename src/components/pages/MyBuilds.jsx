import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import MyBuildsSidebar from "../custom-templates/MyBuildsSidebar";
import AllDeckStats from "../custom-templates/AllDeckStats";
import CreateNewDeck from "../custom-templates/CreateNewDeck";
import DeckView from "../custom-templates/DeckView";

function MyBuilds() {
  const [activeTemplate, setActiveTemplate] = useState("AllDeckStats");

  let setDeckView = function(id) {
    return activeTemplate !== "DeckView" ? setActiveTemplate("DeckView") : null;
  };

  return (
    <Container fluid>
      <Row>
        <Col md="4" lg="3" className="px-0 border-right">
          <MyBuildsSidebar
            setActiveTemplate={setActiveTemplate}
            setDeckView={setDeckView}
            activeTemplate={activeTemplate}
          />
        </Col>
        <Col md="8" lg="9">
          <article className="pt-3">
            {activeTemplate === "AllDeckStats" && <AllDeckStats />}

            {activeTemplate === "DeckView" && <DeckView />}

            {activeTemplate === "CreateNewDeck" && <CreateNewDeck />}
          </article>
        </Col>
      </Row>
    </Container>
  );
}

export default MyBuilds;
