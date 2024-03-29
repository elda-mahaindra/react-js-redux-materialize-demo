// ---------------------------------------------- modules import
import M from "materialize-css";
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { deleteProductAction } from "../../store/product/actions";

// ---------------------------------------------- the component
const ProductSummary = ({ product, token, deleteProduct }) => {
  const { id, name, price, unitCost } = product;

  // ---------------------------------------------- handlers
  const handleDelete = () => {
    if (token) {
      deleteProduct(id);
    }
  };

  // ---------------------------------------------- effects
  useEffect(() => {
    const modals = document.querySelectorAll(".modal");
    M.Modal.init(modals);
  }, []);

  // ---------------------------------------------- content
  return (
    <div className="card col s1 m5 offset-m1" style={{ margin: "10px" }}>
      <div className="card-content">
        <span className="card-title indigo-text text-darken-4">{name}</span>
        <span>{`Price: ${price}`}</span>
        <span className="right">{`Cost: ${unitCost}`}</span>
      </div>
      <div className="card-action right-align">
        <Link to={`/product/update/${id}`} className="grey-text text-darken-4">
          Edit
        </Link>
        <button
          type="button"
          className="btn waves-effect waves-light grey darken-4 modal-trigger"
          data-target={`alert-delete-product-id-${id}`}
        >
          Delete
        </button>
        <div className="modal" id={`alert-delete-product-id-${id}`}>
          <div className="modal-content center">
            <h5>Confirm Delete</h5>
            <p>{`Are you sure you want to delete ${name} from the list?`}</p>
          </div>
          <div className="modal-footer">
            <div className="container">
              <button
                type="button"
                className="btn grey darken-4 modal-close"
                onClick={handleDelete}
              >
                Yes, I'm sure
              </button>
            </div>
          </div>
        </div>
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
  deleteProduct: id => dispatch(deleteProductAction(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductSummary);
