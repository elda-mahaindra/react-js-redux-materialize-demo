// ---------------------------------------------- modules import
import React from "react";

import ProductSummary from "./productSummary";

// ---------------------------------------------- the component
const ProductList = () => (
  <div className="row">
    <ProductSummary />
    <ProductSummary />
    <ProductSummary />
    <ProductSummary />
    <ProductSummary />
    <ProductSummary />
    <ProductSummary />
  </div>
);

export default ProductList;
