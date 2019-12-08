import React from "react";
import Button from "react-bootstrap/Button";

function DeckPreviewCardRow(props) {
  return (
    <tr key={props.selection.card.id}>
      <td>{props.selection.qty}</td>
      <td>{props.selection.card.name}</td>
      <td>{props.selection.card.set}</td>
      <td>{props.selection.condition}</td>
      <td>{props.selection.foil ? "F" : "-"}</td>
      <td>{props.selection.prerelease ? "P" : "-"}</td>
      <td className="p-0">
        <Button
          className="rounded-0 w-100 border-0"
          variant="outline-danger"
          onClick={() => props.handleDelete(props.selection.card.id)}
        >
          X
        </Button>
      </td>
    </tr>
  );
}

export default DeckPreviewCardRow;
