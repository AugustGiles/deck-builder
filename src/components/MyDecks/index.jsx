import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Switch, Route, useRouteMatch } from "react-router-dom";

import actions from "../../redux/actions";
import { deck as deckClient } from "../../apis/deck-builder";

import { Aside, Article } from "../elements/layout";
import CreateNewDeck from "./create-new-deck/CreateNewDeck";
import DeckView from "./deck-view/DeckView";
import AllDeckStats from "./all-deck-stats/AllDeckStats";
import MyDecksSidebar from "./MyDecksSidebar";

function MyDecks({ setUser, setActiveUrl, decks }) {
  let { path } = useRouteMatch();

  useEffect(() => {
    const getDecks = async () => {
      let decks = await deckClient.getAllDecks();
      setUser({ decks });
    };

    setActiveUrl(window.location.pathname);
    getDecks();
  }, [setUser, setActiveUrl]);

  return (
    <React.Fragment>
      <Aside>
        <MyDecksSidebar />
      </Aside>

      <Article classes="float-right d-inline-block">
        <Switch>
          <Route path={`${path}/create-new-deck`}>
            <CreateNewDeck context="create" deck={{}} />
          </Route>
          <Route path={`${path}/deck/:id`}>
            {decks.length > 0 && <DeckView />}
          </Route>
          <Route exact path={path} component={AllDeckStats} />
        </Switch>
      </Article>
    </React.Fragment>
  );
}

const mapStateToProps = store => {
  return { decks: store.user.decks };
};

const mapDispatchToProps = {
  setUser: actions.userActions.setUser,
  setActiveUrl: actions.trackerActions.setActiveUrl
};

export default connect(mapStateToProps, mapDispatchToProps)(MyDecks);
