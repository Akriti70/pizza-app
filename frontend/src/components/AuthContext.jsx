
import React, { createContext, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";


const AuthContext = createContext();


export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();

  
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

  // Login function
  const login = (userData) => {
    setIsAuthenticated(true);
    setUser(userData);
    navigate("/home"); // redirect to home page after login
  };

  // Logout function
  const logout = () => {
    setIsAuthenticated(false);
    setUser(null);
    navigate("/login"); // redirect to login page after logout
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};


export const useAuth = () => useContext(AuthContext);
