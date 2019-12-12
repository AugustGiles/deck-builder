import React from "react";
import {
  BrowserRouter as Switch,
  Route,
  useRouteMatch
} from "react-router-dom";

import { Aside, Article } from "../layout-elements";
import {
  CreateNewDeck,
  DeckView,
  AllDeckStats,
  MyDecksSidebar
} from "../page-components/MyDecks";

function MyDecks() {
  let { url } = useRouteMatch();

  return (
    <React.Fragment>
      <Aside>
        <MyDecksSidebar url={url} />
      </Aside>
      <Article classes="float-right d-inline-block" style={{ width: "80%" }}>
        <Switch>
          <Route path="/my-decks/create-new-deck">
            <CreateNewDeck context="create" deck={{}} />
          </Route>
          <Route path="/my-decks/deck/:id" component={DeckView} />
          <Route exact path="/my-decks" component={AllDeckStats} />
        </Switch>
      </Article>
    </React.Fragment>
  );
}

export default MyDecks;
