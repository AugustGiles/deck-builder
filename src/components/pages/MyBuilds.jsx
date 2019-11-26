import React, { useState } from "react";
import Sidebar from "../sections/Sidebar";
import ArticleRight from "../sections/ArticleRight";
import AllDeckStats from "../custom-templates/AllDeckStats";
import CreateNewDeck from "../custom-templates/CreateNewDeck";
import DeckView from "../custom-templates/DeckView";

function MyBuilds() {
  const [activeTemplate, setActiveTemplate] = useState("AllDeckStats");

  let setDeckView = function(id) {
    console.log(id);
    return activeTemplate !== "DeckView" ? setActiveTemplate("DeckView") : null;
  };

  return (
    <div id="my-builds" className="app-content">
      <Sidebar>
        <React.Fragment>
          <h3>Saved Builds</h3>
          <ul>
            <li onClick={() => setActiveTemplate("AllDeckStats")}>
              All Deck Stats
            </li>
            <hr />
            <li onClick={() => setActiveTemplate("CreateNewDeck")}>
              Add a Deck
            </li>
            <hr />
            <li onClick={() => setDeckView(1)}>Deck Title 1</li>
            <hr />
            <li onClick={() => setDeckView(2)}>Deck Title 2</li>
            <hr />
            <li onClick={() => setDeckView(3)}>Deck Title 3</li>
            <hr />
          </ul>
        </React.Fragment>
      </Sidebar>

      <ArticleRight>
        {activeTemplate === "AllDeckStats" && <AllDeckStats />}

        {activeTemplate === "DeckView" && <DeckView />}

        {activeTemplate === "CreateNewDeck" && <CreateNewDeck />}
      </ArticleRight>
    </div>
  );
}

export default MyBuilds;
