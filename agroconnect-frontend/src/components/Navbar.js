import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  const navigate = useNavigate();
  const isAuthenticated = !!localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <nav className="navbar">
      <div className="navbar-title">
        <Link to="/" className="navbar-logo">Agroconnect</Link>
      </div>
      <ul className="navbar-menu">
        <li><Link to="/dashboard" className="navbar-link">Dashboard</Link></li>
        {!isAuthenticated && (
          <>
            <li><Link to="/register" className="navbar-link">Register</Link></li>
            <li><Link to="/login" className="navbar-link">Login</Link></li>
          </>
        )}
        {isAuthenticated && (
          <li><button onClick={handleLogout} className="navbar-link">Logout</button></li>
        )}
      </ul>
    </nav>
  );
}
