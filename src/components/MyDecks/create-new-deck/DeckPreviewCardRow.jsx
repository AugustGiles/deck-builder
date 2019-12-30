import React from "react";
import Button from "react-bootstrap/Button";

function DeckPreviewCardRow({ selection, handleDelete }) {
  return (
    <tr key={selection.card.id}>
      <td>{selection.qty}</td>
      <td>{selection.card.name}</td>
      <td>{selection.card.set}</td>
      <td>{selection.condition}</td>
      <td>{selection.foil ? "F" : "-"}</td>
      <td>{selection.prerelease ? "P" : "-"}</td>
      <td className="p-0">
        <Button
          className="rounded-0 w-100 border-0"
          variant="outline-danger"
          size="sm"
          onClick={() => handleDelete(selection.card.id)}
        >
          X
        </Button>
      </td>
    </tr>
  );
}

export default DeckPreviewCardRow;
