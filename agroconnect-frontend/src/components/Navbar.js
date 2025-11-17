import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <h1 className="logo">AgroConnect</h1>
      <ul className="nav-links">
        <li>
          <NavLink to="/register" className={({ isActive }) => isActive ? "active-link" : ""}>
            Register
          </NavLink>
        </li>
        <li>
          <NavLink to="/login" className={({ isActive }) => isActive ? "active-link" : ""}>
            Login
          </NavLink>
        </li>
        <li>
          <NavLink to="/dashboard" className={({ isActive }) => isActive ? "active-link" : ""}>
            Dashboard
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
