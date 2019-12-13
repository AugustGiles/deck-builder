import React from "react";
import { connect } from "react-redux";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
import { setActiveUrl } from "../../redux/actions/trackerActions";

function NavItem({
  key,
  url,
  text,
  className,
  activeUrl,
  disabled,
  setActiveUrl
}) {
  return (
    <Nav.Item
      key={key}
      className={className}
      onClick={() => setActiveUrl(window.location.pathname)}
    >
      <Link
        to={url}
        disabled={disabled}
        className={activeUrl === url ? "active" : ""}
      >
        {text}
      </Link>
    </Nav.Item>
  );
}

const mapStateToProps = store => {
  return { activeUrl: store.tracker.activeUrl };
};

export default connect(mapStateToProps, { setActiveUrl })(NavItem);
