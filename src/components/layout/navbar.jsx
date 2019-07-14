// ---------------------------------------------- modules import
import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import LoggedInLink from "./loggedInLink";
import LoggedOutLink from "./loggedOutLink";

// ---------------------------------------------- the component
const Navbar = ({ token }) => (
  <nav className="nav-wrapper red darken-1" style={{ marginBottom: "50px" }}>
    <div className="container">
      <Link to="/">
        <span
          className="brand-logo hide-on-med-and-down"
          style={{ fontSize: "1.5rem", fontWeight: 400 }}
        >
          React Js Demo
        </span>
      </Link>
      <ul className="right">{token ? <LoggedInLink /> : <LoggedOutLink />}</ul>
    </div>
  </nav>
);

// ---------------------------------------------- map state to props
const mapStateToProps = state => ({
  token: state.auth.token
});

export default connect(mapStateToProps)(Navbar);
