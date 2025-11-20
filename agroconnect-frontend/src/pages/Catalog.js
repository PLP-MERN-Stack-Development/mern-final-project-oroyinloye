import React, { useEffect, useState, useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function Catalog() {
  const [products, setProducts] = useState([]);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
  fetch(`${process.env.REACT_APP_API_URL}/api/products`)
    .then((res) => res.json())
    .then((data) => setProducts(data))
    .catch((err) => console.error("Error fetching products:", err));
}, []);


  return (
    <div style={{ padding: "20px" }}>
      <h2>Catalog</h2>
      {products.length === 0 ? (
        <p>No products available.</p>
      ) : (
        <ul style={{ listStyle: "none", padding: 0 }}>
          {products.map((p) => (
            <li
              key={p._id}
              style={{
                marginBottom: "15px",
                padding: "10px",
                border: "1px solid #ddd",
                borderRadius: "5px",
              }}
            >
              <strong>{p.name}</strong> — ${p.price}
              <button
                style={{
                  marginLeft: "10px",
                  padding: "5px 10px",
                  cursor: "pointer",
                }}
                onClick={() => addToCart(p)}
              >
                Add to Cart
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
