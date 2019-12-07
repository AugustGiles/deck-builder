import React from "react";

function FixedRight(props) {
  return (
    <div
      id="fixed-right"
      className="d-inline-block float-right p-2 position-fixed border-left"
    >
      {props.children}
    </div>
  );
}

export default FixedRight;
