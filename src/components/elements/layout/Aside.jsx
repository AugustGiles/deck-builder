import React from "react";

function Aside(props) {
  return (
    <aside className="d-inline-block border-right position-fixed">
      {props.children}
    </aside>
  );
}

export default Aside;
