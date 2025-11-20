import React from "react";
import { useParams } from "react-router-dom";
import { useApi } from "../hooks/useApi";

export default function ProductDetails() {
  const { id } = useParams();
  const { data: product, loading, error } = useApi(`/api/products/${id}`);

  if (loading) return <p>Loading product...</p>;
  if (error) return <p>{error}</p>;
  if (!product) return <p>Product not found</p>;

  return (
    <div>
      <h2>{product.name}</h2>
      <p>₦{product.price}</p>
      <p>{product.description}</p>
    </div>
  );
}
