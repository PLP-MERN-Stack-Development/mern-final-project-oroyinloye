import React from "react";
import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }) {
  const user = JSON.parse(localStorage.getItem("user"));

  if (!user) {
    // 🚫 Not logged in → redirect to login
    return <Navigate to="/login" replace />;
  }

  // ✅ Logged in → show the protected page
  return children;
}

export default ProtectedRoute;
