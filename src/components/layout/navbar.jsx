// ---------------------------------------------- modules import
import React from "react";

import LoggedInLink from "./loggedInLink";
import LoggedOutLink from "./loggedOutLink";

// ---------------------------------------------- the component
const Navbar = () => (
  <nav className="nav-wrapper red darken-1" style={{ marginBottom: "50px" }}>
    <div className="container">
      <span
        className="brand-logo hide-on-med-and-down"
        style={{ fontSize: "1.5rem", fontWeight: 400 }}
      >
        React Js Demo
      </span>
      <ul className="right">
        <LoggedInLink />
        <LoggedOutLink />
      </ul>
    </div>
  </nav>
);

export default Navbar;
