import React, { useState } from "react";
import "./Login.css";

const Login = () => {
  const [isSignedUp, setIsSignedUp] = useState(true);
  const switchLogIn = () => {
    if (isSignedUp) {
      setIsSignedUp(false);
    } else setIsSignedUp(true);
  };
  return (
    <div className="login-modal">
      {isSignedUp ? (
        <form className="login-form">
          <label>mt-analyzer</label>
          <input
            className="login-el"
            type="email"
            placeholder="Email(optional)"
            required={false}
            style={{ marginTop: "10px", marginBottom: "6px" }}
          />
          <input
            className="login-el"
            placeholder="Username"
            required
            style={{ marginBottom: "6px" }}
          />
          <input
            className="login-el"
            type="password"
            placeholder="Password"
            required
          />
          <input
            className="login-el"
            type="password"
            placeholder="Confirmation password"
            required
          />
          <button className="login-submit" style={{ marginTop: "10px" }}>
            Log In
          </button>
          <div className="login-reg">
            <div>Already have an account?</div>
            <a onClick={switchLogIn}>Log In</a>
          </div>
        </form>
      ) : (
        <form className="login-form">
          <label>mt-analyzer</label>
          <input className="login-el" placeholder="Username" required />
          <input
            className="login-el"
            type="password"
            placeholder="Password"
            required
          />
          <button className="login-submit">Log In</button>
          <div className="login-reg">
            <div>Don't have an account?</div>
            <a onClick={switchLogIn}>Sign Up</a>
          </div>
        </form>
      )}
    </div>
  );
};

export default Login;
