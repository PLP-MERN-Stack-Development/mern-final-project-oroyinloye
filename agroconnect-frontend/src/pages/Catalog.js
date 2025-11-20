import React from "react";
import { useApi } from "../hooks/useApi";   // ✅ import the hook
import { toast } from "react-toastify";
import "./Catalog.css";

export default function Catalog() {
  const { data: products, loading, error } = useApi("/api/products");

  if (loading) return <p>Loading products...</p>;
  if (error) {
    toast.error(error);
    return <p>Failed to load products.</p>;
  }

  if (!products || products.length === 0) {
    return <p>No products available.</p>;
  }

  return (
    <div className="catalog-grid">
      {products.map((p) => (
        <div className="card" key={p._id}>
          <h3>{p.name}</h3>
          <p>₦{p.price}</p>
        </div>
      ))}
    </div>
  );
}
