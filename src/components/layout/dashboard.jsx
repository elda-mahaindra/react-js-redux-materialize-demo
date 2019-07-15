// ---------------------------------------------- modules import
import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import ProductList from "../product/productList";

// ---------------------------------------------- the component
const Dashboard = ({ token }) =>
  token ? (
    <div className="container">
      <ProductList />
    </div>
  ) : (
    <Redirect to="/login" />
  );

// ---------------------------------------------- map state to props
const mapStateToProps = state => ({
  token: state.auth.token
});

export default connect(mapStateToProps)(Dashboard);
