import React from "react";
import { connect } from "react-redux";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
import { setActiveUrl } from "../../redux/actions/trackerActions";

function NavItem(props) {
  return (
    <Nav.Item
      key={props.key}
      className={props.className}
      onClick={() => props.setActiveUrl(window.location.pathname)}
    >
      <Link
        to={props.url}
        disabled={props.disabled}
        className={props.activeUrl === props.url ? "active" : ""}
      >
        {props.text}
      </Link>
    </Nav.Item>
  );
}

const mapStateToProps = store => {
  return { activeUrl: store.tracker.activeUrl };
};

export default connect(mapStateToProps, { setActiveUrl })(NavItem);
