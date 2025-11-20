import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";

export default function Navbar() {
  const { cart } = useContext(CartContext);

  return (
    <nav style={{ padding: "10px 20px", borderBottom: "1px solid #eee" }}>
      <Link to="/" style={{ marginRight: 10 }}>Home</Link>
      <Link to="/catalog" style={{ marginRight: 10 }}>Catalog</Link>
      <Link to="/dashboard" style={{ marginRight: 10 }}>Dashboard</Link>
      <Link to="/messages" style={{ marginRight: 10 }}>Messages</Link>
      <Link to="/register" style={{ marginRight: 10 }}>Register</Link>
      <Link to="/login" style={{ marginRight: 10 }}>Login</Link>

      <Link to="/cart" style={{ marginLeft: "auto", fontWeight: "bold" }}>
        Cart ({cart.length})
      </Link>
    </nav>
  );
}
