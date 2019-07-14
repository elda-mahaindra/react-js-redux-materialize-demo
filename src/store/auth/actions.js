// ------------------------------------------------------------ action type constants*
export const REGISTER = "REGISTER";
export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";

// ---------------------------------------------- the actions
export const registerAction = user => ({
  type: REGISTER,
  payload: {
    user
  }
});

export const loginAction = user => ({
  type: LOGIN,
  payload: {
    user
  }
});

export const logoutAction = () => ({
  type: LOGOUT
});

// ---- * action type constants were created so they won't be mispelled later.
