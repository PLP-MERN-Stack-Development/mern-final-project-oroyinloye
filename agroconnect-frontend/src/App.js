// src/App.js
import React, { useState, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Catalog from "./pages/Catalog";
import AddProduct from "./pages/AddProduct";

// Toast notifications
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const isAuthenticated = !!localStorage.getItem("token");
  const [products, setProducts] = useState([]);

  // Fetch products once when app loads
  useEffect(() => {
    fetch("http://localhost:5000/api/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch(() => setProducts([]));
  }, []);

  // Add new product instantly after POST
  const handleAddProduct = (newProduct) => {
    setProducts((prev) => [newProduct, ...prev]);
  };

  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/dashboard"
            element={isAuthenticated ? <Dashboard /> : <Navigate to="/login" />}
          />
          <Route path="/catalog" element={<Catalog products={products} />} />
          <Route
            path="/add-product"
            element={
              isAuthenticated ? (
                <AddProduct onProductAdded={handleAddProduct} />
              ) : (
                <Navigate to="/login" />
              )
            }
          />
        </Routes>
      </main>

      {/* ✅ Toast container for global notifications */}
      <ToastContainer position="top-right" autoClose={3000} />
    </>
  );
}

export default App;
