// ---------------------------------------------- modules import
import React, { Fragment } from "react";

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
        <a href="/product/add">Add Product</a>
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
