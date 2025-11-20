// frontend/src/pages/Catalog.js
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Link } from "react-router-dom"; // ✅ import Link
import "./Catalog.css";

export default function Catalog() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/products");
        const data = await res.json();

        if (!res.ok) throw new Error(data.error || "Failed to fetch products");
        setProducts(data);
      } catch (err) {
        toast.error(err.message, { position: "top-right" });
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <div className="container"><div className="card"><p>Loading products...</p></div></div>;
  }

  if (products.length === 0) {
    return <div className="container"><div className="card"><p>No products available.</p></div></div>;
  }

  return (
    <div className="container">
      <h2 className="page-title">Catalog</h2>
      <p className="page-subtitle">Browse available products</p>

      <div className="catalog-grid">
        {products.map((product) => (
          <div className="card product-card" key={product._id}>
            {product.image && (
              <img src={product.image} alt={product.name} className="product-image" />
            )}
            <h3 className="product-name">{product.name}</h3>
            <p className="product-price">₦{product.price}</p>
            {product.description && <p className="product-description">{product.description}</p>}
            {product.category && <p className="product-category"><strong>Category:</strong> {product.category}</p>}

            {/* ✅ View Details button */}
            <Link to={`/products/${product._id}`} className="btn btn-primary">
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
