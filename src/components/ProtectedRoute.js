import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const ProtectedRoute = ({ children }) => {
  // Get Logged User
  const { currentUser } = useAuth();

  // If user not logged in
  if (!currentUser) {
    return <Navigate to="/login" />;
  }

  // If logged in
  return children;
};

export default ProtectedRoute;