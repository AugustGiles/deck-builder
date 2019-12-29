import React from "react";
import { Form, Button, Col } from "react-bootstrap";
import CNDFormAddCard from "./CNDForm_AddCard";
import input from "./form-inputs";

function CNDForm(props) {
  return (
    <Form autoComplete="off">
      <Form.Row>
        <Col sm={7}>
          <input.DeckTitleInput
            title={props.deckInfo.title}
            handleOnChange={val => props.updateDeckInfo(val, "title")}
          />
        </Col>
        <Col sm={5}>
          <input.DeckFormatInput
            format={props.deckInfo.format}
            handleOnChange={val => props.updateDeckInfo(val, "format")}
          />
        </Col>
      </Form.Row>
      <input.DeckDescriptionInput
        context={props.context}
        description={props.deckInfo.description}
        handleOnChange={val => props.updateDeckInfo(val, "description")}
      />

      <CNDFormAddCard
        cards={props.cards}
        setCards={props.setCards}
        deckInfo={props.deckInfo}
        updateDeckInfo={props.updateDeckInfo}
      />

      {props.context === "edit" ? (
        <input.DeckNoteInput
          note={props.note}
          handleOnChange={val => props.setNote(val)}
        />
      ) : (
        <hr />
      )}

      <Button onClick={props.saveSelectedCards} className="w-100">
        {props.context === "create" && "Create Deck"}
        {props.context === "edit" && "Update Deck"}
      </Button>
    </Form>
  );
}

export default CNDForm;
