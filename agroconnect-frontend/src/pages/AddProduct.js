import React from "react";
import { useApi } from "../hooks/useApi";

export default function AddProduct() {
  const { post, loading, error } = useApi("/api/products", {}, false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const product = { name: "Tomatoes", price: 500, category: "Vegetables" };
    try {
      await post(product, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });
      alert("Product added successfully!");
    } catch (err) {
      alert("Failed: " + err.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <button type="submit" disabled={loading}>Add Product</button>
      {error && <p style={{color:"red"}}>{error}</p>}
    </form>
  );
}
