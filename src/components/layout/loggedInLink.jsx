// ---------------------------------------------- modules import
import React, { Fragment } from "react";
import { Link } from "react-router-dom";

// ---------------------------------------------- the component
const LoggedInLink = () => {
  // ---------------------------------------------- handlers
  const handleLogout = e => {
    e.preventDefault();

    console.log("handle logout executed.");
  };

  // ---------------------------------------------- content
  return (
    <Fragment>
      <li>
        <Link to="/product/add">Add Product</Link>
      </li>
      <li>
        <a href="/" onClick={handleLogout}>
          Logout
        </a>
      </li>
    </Fragment>
  );
};

export default LoggedInLink;
