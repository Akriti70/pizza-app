
import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "./AuthContext";

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    // User logged in नहीं है → redirect to login
    return <Navigate to="/login" replace />;
  }

  // User logged in है → requested component render करो
  return children;
};

export default ProtectedRoute;
