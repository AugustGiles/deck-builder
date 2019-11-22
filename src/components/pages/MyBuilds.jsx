import React from "react";
import Sidebar from "../sections/Sidebar";
import ArticleRight from "../sections/ArticleRight";
import AllDeckStats from "../custom-templates/AllDeckStats";
import DeckView from "../custom-templates/DeckView";

function MyBuilds() {
  /**
   * Keep track of what is selected on the sidebar...
   * render AllDeckStats on page entry or if it's selected on the side
   * render DeckView and pass it some props to show a built deck
   * render CreateNewDeck when click on add a deck
   */

  return (
    <div id="my-builds" className="app-content">
      <Sidebar>
        <React.Fragment>
          <h3>Saved Builds</h3>
          <ul>
            <li>+ Add a Deck</li>
            <hr />
            <li>Deck Title 1</li>
            <hr />
            <li>Deck Title 2</li>
            <hr />
            <li>Deck Title 3</li>
            <hr />
          </ul>
        </React.Fragment>
      </Sidebar>

      <ArticleRight>
        <AllDeckStats />
        <hr />
        <DeckView />
      </ArticleRight>
    </div>
  );
}

export default MyBuilds;
