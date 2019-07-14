// ---------------------------------------------- modules import
import React, { Fragment } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { logoutAction } from "../../store/auth/actions";

// ---------------------------------------------- the component
const LoggedInLink = ({ logout }) => {
  // ---------------------------------------------- handlers
  const handleLogout = e => {
    e.preventDefault();

    logout();
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

// ---------------------------------------------- map dispatch to props
const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logoutAction())
});

export default connect(
  null,
  mapDispatchToProps
)(LoggedInLink);
