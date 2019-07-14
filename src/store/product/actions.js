// ------------------------------------------------------------ action type constants*
export const ADD_PRODUCT = "ADD_PRODUCT";
export const UPDATE_PRODUCT = "UPDATE_PRODUCT";
export const DELETE_PRODUCT = "DELETE_PRODUCT";

// ---------------------------------------------- the actions
export const addProductAction = product => ({
  type: ADD_PRODUCT,
  payload: {
    product
  }
});

export const updateProductAction = product => ({
  type: UPDATE_PRODUCT,
  payload: {
    product
  }
});

export const deleteProductAction = id => ({
  type: DELETE_PRODUCT,
  payload: {
    id
  }
});

// ---- * action type constants were created so they won't be mispelled later.
