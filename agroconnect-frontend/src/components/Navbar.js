// src/components/Navbar.js
import React from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const isAuthenticated = !!localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <Link to="/" className="navbar-brand">
          <span className="brand-logo" />
          <span className="brand-name">Agroconnect</span>
        </Link>

        <ul className="navbar-menu">
          <li><Link to="/dashboard" className="navbar-link">Dashboard</Link></li>
          {!isAuthenticated && (
            <>
              <li><Link to="/catalog" className="navbar-link">Catalog</Link></li>
              <li><Link to="/register" className="navbar-link">Register</Link></li>
              <li><Link to="/login" className="navbar-link">Login</Link></li>
            </>
          )}
          {isAuthenticated && (
            <>
              <li><Link to="/catalog" className="navbar-link">Catalog</Link></li>
              <li><button onClick={handleLogout} className="navbar-link">Logout</button></li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
}
