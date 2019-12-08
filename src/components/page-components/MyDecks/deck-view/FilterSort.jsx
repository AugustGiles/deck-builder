import React from "react";
import Form from "react-bootstrap/Form";

function FilterSort(props) {
  return (
    <Form>
      <Form.Group>
        <Form.Label>View</Form.Label>
        <Form.Control
          as="select"
          size="sm"
          value={props.view}
          onChange={e => props.setView(e.target.value)}
        >
          <option value="mainboard">Mainboard</option>
          <option value="sideboard">Sideboard</option>
          <option value="maybeboard">Maybeboard</option>
        </Form.Control>
      </Form.Group>
      <Form.Group>
        <Form.Label>Sort By</Form.Label>
        <Form.Control
          as="select"
          size="sm"
          value={props.sort}
          onChange={e => props.setSort(e.target.value)}
        >
          <option value="type_line">Card Type</option>
          <option value="cmc">CMC</option>
          <option value="rarity">Rarity</option>
          <option value="price">Price</option>
        </Form.Control>
      </Form.Group>
    </Form>
  );
}

export default FilterSort;
