import React from "react";
import Sidebar from "../sections/Sidebar";
import ArticleRight from "../sections/ArticleRight";
import AllDeckStats from "./AllDeckStats";
import DeckView from "./DeckView";

function MyBuilds() {
  /**
   * Keep track of what is selected on the sidebar...
   * render AllDeckStats on page entry and if it's selected on the side
   * render DeckView and pass it some props to show built decks
   */

  return (
    <div id="my-builds" className="app-content">
      <Sidebar>
        <React.Fragment>
          <h3>Saved Builds</h3>
          <a href="/">
            <button>Add a Deck +</button>
          </a>
          <hr />
          <ul>
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
