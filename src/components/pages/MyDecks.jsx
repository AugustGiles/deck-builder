import React, { useEffect } from "react";
import { connect } from "react-redux";
import { setUser } from "../../redux/actions/userActions";
import { setActiveUrl } from "../../redux/actions/trackerActions";

import { Switch, Route, useRouteMatch } from "react-router-dom";

import deckClient from "../../modules/deck-builder-api/deck";
import { Aside, Article } from "../layout-elements";
import {
  CreateNewDeck,
  DeckView,
  AllDeckStats,
  MyDecksSidebar
} from "../page-components/MyDecks";

function MyDecks({ setUser, setActiveUrl }) {
  let { path, url } = useRouteMatch();

  useEffect(() => {
    setActiveUrl(window.location.pathname);
    const getDecks = async () => {
      let decks = await deckClient.getAllDecks();
      setUser({ decks });
    };
    getDecks();
  }, [setUser, setActiveUrl]);

  return (
    <React.Fragment>
      <Aside>
        <MyDecksSidebar url={url} />
      </Aside>
      <Article classes="float-right d-inline-block" style={{ width: "80%" }}>
        <Switch>
          <Route path={`${path}/create-new-deck`}>
            <CreateNewDeck context="create" deck={{}} />
          </Route>
          <Route path={`${path}/deck/:id`}>
            <DeckView />
          </Route>
          <Route exact path={path} component={AllDeckStats} />
        </Switch>
      </Article>
    </React.Fragment>
  );
}

export default connect(null, { setUser, setActiveUrl })(MyDecks);
