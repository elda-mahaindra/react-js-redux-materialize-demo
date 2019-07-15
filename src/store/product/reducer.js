// ------------------------------------------------------------ import own modules
import { ADD_PRODUCT, UPDATE_PRODUCT, DELETE_PRODUCT } from "./actions";

// ------------------------------------------------------------ initialize the state
const initialState = {
  products: [
    { id: 1, name: "Mango", price: 10, unitCost: 5 },
    { id: 2, name: "Orange", price: 9, unitCost: 4 },
    { id: 3, name: "Apple", price: 8, unitCost: 4 },
    { id: 4, name: "Banana", price: 15, unitCost: 9 },
    { id: 5, name: "Durian", price: 45, unitCost: 35 }
  ],
  nextProductId: 6
};

// ------------------------------------------------------------ the reducer
const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT: {
      return state;
    }
    case UPDATE_PRODUCT: {
      return state;
    }
    case DELETE_PRODUCT: {
      return {
        ...state,
        products: state.products.filter(
          product => product.id !== action.payload.id
        )
      };
    }
    default: {
      return state;
    }
  }
};

export default productReducer;
