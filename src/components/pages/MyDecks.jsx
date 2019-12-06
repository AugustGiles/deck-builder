import React from "react";
import {
  BrowserRouter as Switch,
  Route,
  useRouteMatch
} from "react-router-dom";

import { Aside, Article } from "../layout-elements";
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
      <Article classes="float-right d-inline-block">
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
