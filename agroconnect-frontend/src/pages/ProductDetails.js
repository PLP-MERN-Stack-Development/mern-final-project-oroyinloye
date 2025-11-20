// frontend/src/pages/ProductDetails.js
import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { CartContext } from "../context/CartContext"; // ✅ import context
import "./Catalog.css";

export default function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const { addToCart } = useContext(CartContext); // ✅ use context

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch(`http://localhost:5000/api/products/${id}`);
        const data = await res.json();

        if (!res.ok) throw new Error(data.error || "Failed to fetch product");
        setProduct(data);
      } catch (err) {
        toast.error(err.message, { position: "top-right" });
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) return <div className="container"><div className="card"><p>Loading product...</p></div></div>;
  if (!product) return <div className="container"><div className="card"><p>Product not found.</p></div></div>;

  return (
    <div className="container">
      <h2 className="page-title">{product.name}</h2>
      <p className="page-subtitle">Full product details</p>

      <div className="card">
        {product.image && <img src={product.image} alt={product.name} className="product-image" />}
        <p><strong>Price:</strong> ₦{product.price}</p>
        <p><strong>Description:</strong> {product.description}</p>
        <p><strong>Category:</strong> {product.category}</p>
        <p><strong>Added on:</strong> {new Date(product.createdAt).toLocaleString()}</p>

        {/* ✅ Add to Cart button */}
        <button
          className="btn btn-primary"
          onClick={() => {
            addToCart(product);
            toast.success(`${product.name} added to cart`);
          }}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
