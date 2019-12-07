import React from "react";
import { Form, Button, Col } from "react-bootstrap";
import CNDFormAddCard from "./CNDForm_AddCard";
import {
  DeckTitleInput,
  DeckFormatInput,
  DeckDescriptionInput
} from "./form-inputs";

function CNDForm(props) {
  return (
    <Form autoComplete="off">
      <Form.Row>
        <Col sm={7}>
          <DeckTitleInput handleOnChange={val => props.setDeckTitle(val)} />
        </Col>
        <Col sm={5}>
          <DeckFormatInput handleOnChange={val => props.setDeckFormat(val)} />
        </Col>
      </Form.Row>
      <DeckDescriptionInput
        handleOnChange={val => props.setDeckDescription(val)}
      />

      <CNDFormAddCard
        mainboardCards={props.mainboardCards}
        setMainboardCards={props.setMainboardCards}
        sideboardCards={props.sideboardCards}
        setSideboardCards={props.setSideboardCards}
        maybeboardCards={props.maybeboardCards}
        setMaybeboardCards={props.setMaybeboardCards}
      />

      <hr />

      <Button onClick={props.saveSelectedCards} className="w-100">
        Create Deck
      </Button>
    </Form>
  );
}

export default CNDForm;
