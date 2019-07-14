// ------------------------------------------------------------ import own modules
import { REGISTER, LOGIN, LOGOUT } from "./actions";

// ------------------------------------------------------------ initialize the state
const initialState = {
  users: [{ id: 1, email: "admin@react.com", password: "admin" }],
  nextUserId: 2,
  token: null,
  error: null
};

// ------------------------------------------------------------ the reducer
const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER: {
      return state;
    }
    case LOGIN: {
      return state;
    }
    case LOGOUT: {
      return state;
    }
    default: {
      return state;
    }
  }
};

export default authReducer;
