import React, { useState } from 'react';
import "./css/login.css";
import logo from "./img/Movie.png";
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const nav = useNavigate();

  const handleLogin = () => {
    if (email === "") {
      setErrorEmail("Email address can't be empty");
      return;
    }
    if (password === "") {
      setErrorPassword("Password can't be empty");
      return;
    }

    // Clear previous errors
    setErrorEmail("");
    setErrorPassword("");

    axios.post("http://158.220.111.34:8084/api/v1/auth/login", {
      phoneNumber: email,
      password: password
    })
    .then(res => {
      // Assuming successful login, navigate to /index
      nav("/index");
    })
    .catch(err => {
      if (err.response) {
        // Server responded with a status code outside of 2xx range
        console.log(err.response.data); // Log the specific error message from the API
      } else {
        // Something happened in setting up the request
        console.error('Error message:', err.message);
      }
    });
  };

  return (
    <div className="login-container">
      <img src={logo} className="logo-img" alt="Movie Logo" />

      <div className="login-box">
        <h2 className="login-box__title">Login</h2>

        <div className="inputs">
          <div className="input-field">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <span className="error-message">{errorEmail}</span>
          </div>

          <div className="input-field">
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <span className="error-message">{errorPassword}</span>
          </div>
        </div>

        <button className="login-button" onClick={handleLogin}>
          Login to your account
        </button>

        <span>
          Don’t have an account? <Link to="/signup" className="link">Sign Up</Link>
        </span>
      </div>
    </div>
  );
}
