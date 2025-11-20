// frontend/src/App.js
import React, { useContext } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./ToastOverride.css";

import Catalog from "./pages/Catalog";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Messages from "./pages/Messages";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import { CartProvider, CartContext } from "./context/CartContext"; // ✅ import context

function Navbar() {
  const { cart } = useContext(CartContext); // ✅ get cart from context

  return (
    <nav style={{ padding: "10px 20px", borderBottom: "1px solid #eee" }}>
      <Link to="/" style={{ marginRight: 10 }}>Home</Link>
      <Link to="/catalog" style={{ marginRight: 10 }}>Catalog</Link>
      <Link to="/dashboard" style={{ marginRight: 10 }}>Dashboard</Link>
      <Link to="/messages" style={{ marginRight: 10 }}>Messages</Link>
      <Link to="/register" style={{ marginRight: 10 }}>Register</Link>
      <Link to="/login" style={{ marginRight: 10 }}>Login</Link>

      {/* ✅ Cart link with item count */}
      <Link to="/cart" style={{ marginLeft: "auto", fontWeight: "bold" }}>
        Cart ({cart.length})
      </Link>
    </nav>
  );
}

export default function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<div className="container"><h2 className="page-title">Welcome to AgroConnect</h2></div>} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/products/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        <ToastContainer position="bottom-center" autoClose={3000} />
      </BrowserRouter>
    </CartProvider>
  );
}
