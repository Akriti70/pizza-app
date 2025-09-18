
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../components/AuthContext";

const API_URL = "http://localhost:5002"; // backend port

const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError("All fields are required!");
      return;
    }

    try {
      // Check if user exists
      const res = await axios.get(`${API_URL}/users?email=${email}&password=${password}`);
      if (res.data.length === 0) {
        setError("Invalid email or password!");
        return;
      }

      // Login success
      const userData = res.data[0];
      login(userData); // set in AuthContext
    } catch (err) {
      console.error(err);
      setError("Login failed. Try again.");
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <form onSubmit={handleLogin}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button type="submit">Login</button>
      </form>

      <p>
        Don't have an account? <span onClick={() => navigate("/register")} style={{color:'blue', cursor:'pointer'}}>Register here</span>
      </p>
    </div>
  );
};

export default Login;
