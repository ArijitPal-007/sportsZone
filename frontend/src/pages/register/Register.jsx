import React, { useState } from "react";
import "./Register.css";
import axios from "axios"
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const SignupLogin = () => {
  const [isSignup, setIsSignup] = useState(true);
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [signupSuccess, setSignupSuccess] = useState(false);
  const url = "http://localhost:7000"
  const navigate = useNavigate()
  const { login } = useAuth();

  const handleSubmit = async () => {
    try {
      if (isSignup) {
        const response = await axios.post(`${url}/api/user/register`, {
          name,
          email,
          password
        });
        // console.log(response.data);
        if (response.data.token) {
          setSignupSuccess(true);
          setName("");
          setEmail("");
          setPassword("");
          alert("Successfully created an account! Please login.");
          setIsSignup(false);
        }
      } else {
        const response = await axios.post(`${url}/api/user/login`, {
          email,
          password
        });
        // console.log(`After loggedin data: `, response.data);
        if (response.data.token) {
          login(response.data.user, response.data.token);
          alert("Successfully logged in");
          navigate("/");
          setName("");
          setEmail("");
          setPassword("");
        } else {
          alert("Invalid login response from server");
        }
        
      }
    } catch (error) {
      const errorMessage = error.response?.data?.msg || "Error in account operation";
      alert(errorMessage);
      console.error("Error:", error);
    }
  }

  return (
    <div className="container">
      <div className="form-box">
        <h2>{isSignup ? "Sign Up" : "Login"}</h2>
        <form>
          {isSignup && (
            <div className="input-group">
              <label>Username</label>
              <input 
                type="text" 
                placeholder="Enter your username" 
                value={name} 
                onChange={(e) => setName(e.target.value)} 
                autoComplete="username"
                required 
              />
            </div>
          )}
          <div className="input-group">
            <label>Email</label>
            <input 
              type="email" 
              placeholder="Enter your email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              autoComplete="email"
              required 
            />
          </div>
          <div className="input-group">
            <label>Password</label>
            <input 
              type="password" 
              placeholder="Enter your password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              autoComplete="current-password"
              required 
            />
          </div>
          <button type="button" onClick={handleSubmit}>{isSignup ? "Sign Up" : "Login"}</button>
        </form>
        <p onClick={() => {
          setIsSignup(!isSignup);
          setSignupSuccess(false);
        }} className="toggle-text">
          {isSignup ? "Already have an account? Login" : "Don't have an account? Sign Up"}
        </p>
      </div>
    </div>
  );
};

export default SignupLogin;