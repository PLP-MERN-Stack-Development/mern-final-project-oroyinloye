// frontend/src/pages/Cart.js
import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function Cart() {
  const { cart, removeFromCart } = useContext(CartContext);

  return (
    <div className="container">
      <h2 className="page-title">Shopping Cart</h2>
      <div className="card">
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          cart.map((item) => (
            <div key={item._id} style={{ marginBottom: "10px" }}>
              <p><strong>{item.name}</strong> — ₦{item.price}</p>
              <button className="btn btn-danger" onClick={() => removeFromCart(item._id)}>
                Remove
              </button>
              <hr />
            </div>
          ))
        )}
      </div>
    </div>
  );
}
