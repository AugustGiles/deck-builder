import React, { useState } from "react";
import { connect } from "react-redux";
import { getUserDeckById } from "../../../../redux/selectors/userSelectors";
import DeckViewNav from "./DeckViewNav";
import Cards from "./cards/Cards";
import EditDeck from "./EditDeck";
import DeleteDeck from "./DeleteDeck";
import Dashboard from "./dashboard/Dashboard";

function DeckView({ deck }) {
  let [deckViewPage, setDeckViewPage] = useState("dashboard");

  return (
    <React.Fragment>
      <DeckViewNav
        deckViewPage={deckViewPage}
        setDeckViewPage={setDeckViewPage}
      />
      <div
        style={{ top: "12.5vh", overflow: "scroll", width: "80%" }}
        className="p-3 position-fixed h-100"
      >
        {deckViewPage === "dashboard" && Object.keys(deck).length > 0 && (
          <Dashboard />
        )}

        {(deckViewPage === "mainboard" ||
          deckViewPage === "sideboard" ||
          deckViewPage === "maybeboard") && (
          <Cards deckViewPage={deckViewPage} deck={deck} />
        )}

        {deckViewPage === "edit" && <EditDeck deck={deck} />}
        {deckViewPage === "delete" && <DeleteDeck deck={deck} />}
      </div>
    </React.Fragment>
  );
}

const mapStateToProps = store => {
  let id = window.location.href.split("/")[
    window.location.href.split("/").length - 1
  ];
  return { deck: getUserDeckById(store, id) };
};

export default connect(mapStateToProps)(DeckView);
