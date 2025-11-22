import React, { useContext } from "react";
import { Link } from "react-router-dom";
import CartContext from "../context/CartContext";
import AuthContext from "../context/AuthContext";

function Navbar() {
  const { cartItems } = useContext(CartContext);
  const { user, logout } = useContext(AuthContext);

  return (
    <nav style={{ display: "flex", justifyContent: "space-between", padding: "10px 20px", backgroundColor: "#2e7d32", color: "#fff" }}>
      <h2>AgroConnect</h2>
      <ul style={{ listStyle: "none", display: "flex", gap: "15px", margin: 0, padding: 0 }}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/catalog">Catalog</Link></li>
        <li><Link to="/cart">Cart ({cartItems.length})</Link></li>

        {!user && (
          <>
            <li><Link to="/register">Register</Link></li>
            <li><Link to="/login">Login</Link></li>
          </>
        )}

        {user && (
          <>
            <li><Link to="/dashboard">Dashboard</Link></li>
            <li><button onClick={logout} style={{ background: "transparent", border: "none", color: "#fff", cursor: "pointer" }}>Logout</button></li>
            <li style={{ fontStyle: "italic" }}>Welcome, {user.name}</li>
          </>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
