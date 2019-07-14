// ---------------------------------------------- modules import
import React, { Fragment } from "react";
import { Link } from "react-router-dom";

// ---------------------------------------------- the component
const LoggedOutLink = () => (
  <Fragment>
    <li>
      <Link to="/register">Register</Link>
    </li>
    <li>
      <Link to="/login">Login</Link>
    </li>
  </Fragment>
);

export default LoggedOutLink;
