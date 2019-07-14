// ---------------------------------------------- modules import
import M from "materialize-css";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import { loginAction } from "../../store/auth/actions";

// ---------------------------------------------- the component
const Login = ({ token, error, login }) => {
  // ---------------------------------------------- local state
  const [user, setUser] = useState({ email: "", password: "" });

  // ---------------------------------------------- handlers
  const handleChange = e => {
    setUser({ ...user, [e.currentTarget.id]: e.currentTarget.value });
  };

  const handleSubmit = e => {
    e.preventDefault();

    login(user);
  };

  // ---------------------------------------------- effects
  useEffect(() => {
    M.AutoInit();
  }, []);

  // ---------------------------------------------- content
  return token ? (
    <Redirect to="/" />
  ) : (
    <div className="container">
      <h5 className="center-align">LOGIN</h5>
      <div className="row">
        <form className="col s12 m6 offset-m3" onSubmit={handleSubmit}>
          <div className="input-field">
            <input type="email" id="email" onChange={handleChange} required />
            <label htmlFor="email">Your email</label>
          </div>
          <div className="input-field">
            <input
              type="password"
              id="password"
              onChange={handleChange}
              required
            />
            <label htmlFor="password">Password</label>
          </div>
          <div className="input-field center">
            <button
              type="submit"
              className={`btn grey darken-4 ${
                user.email.length && user.password.length ? "" : "disabled"
              }`}
            >
              Login
            </button>
          </div>
          <div className="input-field red-text center">
            {error ? <p>{error}</p> : null}
          </div>
        </form>
      </div>
    </div>
  );
};

// ---------------------------------------------- map state to props
const mapStateToProps = state => ({
  token: state.auth.token,
  error: state.auth.error
});

// ---------------------------------------------- map dispatch to props
const mapDispatchToProps = dispatch => ({
  login: user => dispatch(loginAction(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
