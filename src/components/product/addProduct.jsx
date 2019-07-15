// ---------------------------------------------- modules import
import M from "materialize-css";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

import { addProductAction } from "../../store/product/actions";

// ---------------------------------------------- the component
const AddProduct = ({ history, token, addProduct }) => {
  // ---------------------------------------------- local state
  const [product, setProduct] = useState({
    id: 0,
    name: "",
    price: 0,
    unitCost: 0
  });

  // ---------------------------------------------- handlers
  const handleChange = e => {
    if (e.currentTarget.id === "name") {
      setProduct({ ...product, [e.currentTarget.id]: e.currentTarget.value });
    } else {
      setProduct({
        ...product,
        [e.currentTarget.id]: parseInt(e.currentTarget.value)
      });
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (token) {
      addProduct(product);
      history.push("/");
    }
  };

  // ---------------------------------------------- effects
  useEffect(() => {
    M.AutoInit();
  }, []);

  // ---------------------------------------------- content
  return (
    <div className="container">
      <h5 className="center-align">ADD PRODUCT</h5>
      <div className="row">
        <form className="col s12 m6 offset-m3" onSubmit={handleSubmit}>
          <div className="input-field">
            <input type="text" id="name" onChange={handleChange} required />
            <label htmlFor="name">Name</label>
          </div>
          <div className="input-field">
            <input
              type="number"
              id="price"
              min={0}
              onChange={handleChange}
              required
            />
            <label htmlFor="price">Price</label>
          </div>
          <div className="input-field">
            <input
              type="number"
              id="unitCost"
              min={0}
              onChange={handleChange}
              required
            />
            <label htmlFor="unitCost">Unit Cost</label>
          </div>
          <div className="input-field center">
            <button
              type="submit"
              className={`btn grey darken-4 ${
                product.name.length && product.price && product.unitCost
                  ? ""
                  : "disabled"
              }`}
            >
              Add Product
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

// ---------------------------------------------- map state to props
const mapStateToProps = state => ({
  token: state.auth.token
});

// ---------------------------------------------- map dispatch to props
const mapDispatchToProps = dispatch => ({
  addProduct: product => dispatch(addProductAction(product))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddProduct);
