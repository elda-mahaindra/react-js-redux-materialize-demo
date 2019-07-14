// ---------------------------------------------- modules import
import React, { Fragment } from "react";

// ---------------------------------------------- the component
const LoggedOutLink = () => (
  <Fragment>
    <li>
      <a href="/register">Register</a>
    </li>
    <li>
      <a href="/login">Login</a>
    </li>
  </Fragment>
);

export default LoggedOutLink;
