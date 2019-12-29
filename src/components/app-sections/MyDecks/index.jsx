import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Switch, Route, useRouteMatch } from "react-router-dom";

import actions from "../../../redux/actions";
import deckClient from "../../../modules/deck-builder-api/deck";

import { Aside, Article } from "../../layout-elements";
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
      <Article classes="float-right d-inline-block" style={{ width: "80%" }}>
        <Switch>
          <Route path={`${path}/create-new-deck`}>
            <div className="p-3">
              <CreateNewDeck context="create" deck={{}} />
            </div>
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

export default connect(mapStateToProps, {
  setUser: actions.userActions.setUser,
  setActiveUrl: actions.trackerActions.setActiveUrl
})(MyDecks);
