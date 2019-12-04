import React from "react";

function Aside(props) {
  return (
    <aside className="d-inline-block border-right">{props.children}</aside>
  );
}

export default Aside;
