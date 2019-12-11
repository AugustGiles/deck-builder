import React from "react";

function FixedRight(props) {
  return (
    <div id="fixed-right" className="d-inline-block px-4 position-fixed">
      {props.children}
    </div>
  );
}

export default FixedRight;
