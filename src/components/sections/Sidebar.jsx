import React from "react";

function Sidebar(props) {
  return (
    <aside className="sidebar">
      <div className="sidebar-content">{props.children}</div>
    </aside>
  );
}

export default Sidebar;