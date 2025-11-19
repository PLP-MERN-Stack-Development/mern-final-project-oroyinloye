import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="header">
      <h1 className="brand">AgroConnect</h1>
      <nav className="nav">
        <Link to="/dashboard" className="nav-link">Dashboard</Link>
        <Link to="/login" className="nav-link">Login</Link>
        <Link to="/register" className="nav-link">Register</Link>
      </nav>
    </header>
  );
}
