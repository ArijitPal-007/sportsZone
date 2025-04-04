import React, { useState } from "react";
import "./Register.css";

const SignupLogin = () => {
  const [isSignup, setIsSignup] = useState(true);

  return (
    <div className="container">
      <div className="form-box">
        <h2>{isSignup ? "Sign Up" : "Login"}</h2>
        <form>
          {isSignup && (
            <div className="input-group">
              <label>Username</label>
              <input type="text" placeholder="Enter your username" required />
            </div>
          )}
          <div className="input-group">
            <label>Email</label>
            <input type="email" placeholder="Enter your email" required />
          </div>
          <div className="input-group">
            <label>Password</label>
            <input type="password" placeholder="Enter your password" required />
          </div>
          <button type="submit">{isSignup ? "Sign Up" : "Login"}</button>
        </form>
        <p onClick={() => setIsSignup(!isSignup)} className="toggle-text">
          {isSignup ? "Already have an account? Login" : "Don't have an account? Sign Up"}
        </p>
      </div>
    </div>
  );
};

export default SignupLogin;
