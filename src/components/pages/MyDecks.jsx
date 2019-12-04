import React from "react";
import {
  BrowserRouter as Switch,
  Route,
  useRouteMatch
} from "react-router-dom";

import Aside from "../layout-elements/Aside";
import Article from "../layout-elements/Article";
import MyBuildsSidebar from "../page-components/MyDecks/MyBuildsSidebar";
import AllDeckStats from "../page-components/MyDecks/AllDeckStats";
import CreateNewDeck from "../page-components/MyDecks/CreateNewDeck/CreateNewDeck";
import DeckView from "../page-components/MyDecks/DeckView";

function MyDecks() {
  let { url } = useRouteMatch();

  return (
    <React.Fragment>
      <Aside>
        <MyBuildsSidebar url={url} />
      </Aside>
      <Article classes="float-right d-inline-block pt-3 w-75">
        <Switch>
          <Route path="/my-decks/create-new-deck" component={CreateNewDeck} />
          <Route path="/my-decks/deck/:id" component={DeckView} />
          <Route exact path="/my-decks" component={AllDeckStats} />
        </Switch>
      </Article>
    </React.Fragment>
  );
}

export default MyDecks;