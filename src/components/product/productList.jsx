// ---------------------------------------------- modules import
import React from "react";
import { connect } from "react-redux";

import ProductSummary from "./productSummary";

// ---------------------------------------------- the component
const ProductList = ({ products }) => (
  <div className="row">
    {products.length ? (
      products.map(product => (
        <ProductSummary key={product.id} product={product} />
      ))
    ) : (
      <div className="center">No products yet.</div>
    )}
  </div>
);

// ---------------------------------------------- map state to props
const mapStateToProps = state => ({
  products: state.product.products
});

export default connect(mapStateToProps)(ProductList);
