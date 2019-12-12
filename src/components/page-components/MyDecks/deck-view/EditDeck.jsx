import React from "react";
import CreateNewDeck from "../create-new-deck/CreateNewDeck";

function EditDeck(props) {
  return <CreateNewDeck deck={props.deck} context="edit" />;
}

export default EditDeck;
