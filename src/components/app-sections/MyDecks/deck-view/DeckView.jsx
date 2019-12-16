import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getUserDeckById } from "../../../../redux/selectors/userSelectors";
import {
  setActiveDeck,
  setActiveView
} from "../../../../redux/actions/trackerActions";
import DeckViewNav from "./DeckViewNav";
import Cards from "./cards/Cards";
import EditDeck from "./EditDeck";
import DeleteDeck from "./DeleteDeck";
import Dashboard from "./dashboard/Dashboard";

function DeckView({ deck, setActiveDeck, activeView, setActiveView }) {
  useEffect(() => {
    setActiveDeck(deck);
    setActiveView("dashboard");
  }, [deck, setActiveDeck, setActiveView]);

  return (
    <React.Fragment>
      <DeckViewNav />
      <div
        style={{ top: "12.5vh", overflow: "scroll", width: "80%" }}
        className="p-3 position-fixed h-100"
      >
        {activeView === "dashboard" && <Dashboard />}
        {activeView === "mainboard" && <Cards />}
        {activeView === "sideboard" && <Cards />}
        {activeView === "maybeboard" && <Cards />}
        {activeView === "edit" && <EditDeck />}
        {activeView === "delete" && <DeleteDeck />}
      </div>
    </React.Fragment>
  );
}

const mapStateToProps = store => {
  let urlArr = window.location.href.split("/");
  let id = urlArr[urlArr.length - 1];
  return {
    deck: getUserDeckById(store, id),
    activeView: store.tracker.activeView
  };
};

export default connect(mapStateToProps, { setActiveDeck, setActiveView })(
  DeckView
);
