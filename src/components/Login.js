import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "./Login.css";
import { auth } from "../firebase";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const signIn = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push("/");
      })
      .catch((error) => alert(error.message));
  };

  const register = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        if (auth) {
          history.push("/");
        }
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="login">
      <Link to="/">
        <img
          src="data:image/png;base64,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"
          alt="Amazon Logo"
          className="login__logo"
        />
      </Link>
      <div className="login_container">
        <h1>Sign-in</h1>
        <form>
          <h5>E-mail</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" className="login_signInButton" onClick={signIn}>
            Sign In
          </button>
        </form>
        <p>
          By signin in you agree to the AMAZON FAKE CLONE Conditions of Use &
          Sale. Please see our Privacy Notice, our Cookies Notice and our
          Interest-Based Ads
        </p>
        <button className="login_registerButton" onClick={register}>
          Create your Amazon Account
        </button>
      </div>
    </div>
  );
};

export default Login;
