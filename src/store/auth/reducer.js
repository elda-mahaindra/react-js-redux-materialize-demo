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
      const matchingUser = state.users.find(
        user => user.email === action.payload.user.email
      );

      if (matchingUser) {
        if (matchingUser.password === action.payload.user.password) {
          return {
            ...state,
            token: "thisisthesecrettoken",
            error: null
          };
        }
        return {
          ...state,
          token: null,
          error: "authentication failed. wrong password."
        };
      }
      return {
        ...state,
        token: null,
        error: "authentication failed. user not found."
      };
    }
    case LOGOUT: {
      return {
        ...state,
        token: null,
        error: null
      };
    }
    default: {
      return state;
    }
  }
};

export default authReducer;
