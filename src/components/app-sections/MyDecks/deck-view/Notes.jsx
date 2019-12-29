import React from "react";
import { connect } from "react-redux";
import Badge from "react-bootstrap/Badge";
import moment from "moment";

function Notes({ notes }) {
  const sortedNotes = notes.sort((a, b) => a.timestamp - b.timestamp);
  return (
    <div>
      {sortedNotes.map(note => {
        return (
          <div key={note.id}>
            <Badge variant="primary" className="d-inline-block">
              {moment(note.timestamp).format("MMM Do YYYY - hh:mm a")}
            </Badge>
            <p className="d-inline-block ml-4 text-sm">{note.note}</p>
          </div>
        );
      })}
    </div>
  );
}

const mapStateToProps = state => {
  return { notes: state.tracker.activeNotes };
};

export default connect(mapStateToProps)(Notes);
