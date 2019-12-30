import React from "react";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";

function CardCheckboxes(props) {
  return (
    <React.Fragment>
      <Col>
        <Form.Group>
          <Form.Check
            checked={props.foil}
            type="checkbox"
            label="Foil"
            onChange={() => props.setFoil(!props.foil)}
          />
        </Form.Group>
      </Col>
      <Col>
        <Form.Group>
          <Form.Check
            type="checkbox"
            label="Prerelease"
            checked={props.prerelease}
            onChange={() => props.setPrerelease(!props.prerelease)}
          />
        </Form.Group>
      </Col>
      {props.deckInfo.format === "commander" && (
        <Col>
          <Form.Group>
            <Form.Check
              type="checkbox"
              label="Commander"
              checked={props.isCommander}
              onChange={() => props.setIsCommander(!props.isCommander)}
            />
          </Form.Group>
        </Col>
      )}
    </React.Fragment>
  );
}

export default CardCheckboxes;
