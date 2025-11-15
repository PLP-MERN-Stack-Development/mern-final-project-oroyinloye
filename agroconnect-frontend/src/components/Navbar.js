import React from 'react';
import { Link } from 'react-router-dom';
import LogoutButton from './LogoutButton';
import './Navbar.css';   // ✅ import updated CSS

function Navbar() {
  const token = localStorage.getItem('token');

  return (
    <nav className="navbar">
      <div className="navbar-brand">AgroConnect</div>
      <ul className="navbar-links">
        {!token && (
          <>
            <li><Link to="/login" className="nav-link">Login</Link></li>
            <li><Link to="/register" className="nav-link">Register</Link></li>
          </>
        )}
        {token && (
          <>
            <li><Link to="/dashboard" className="nav-link">Dashboard</Link></li>
            <li><LogoutButton /></li>
          </>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
