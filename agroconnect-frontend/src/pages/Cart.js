import React, { useContext } from "react";
import CartContext from "../context/CartContext";

function Cart() {
  const { cartItems, removeFromCart, clearCart } = useContext(CartContext);

  // Calculate total price
  const totalPrice = cartItems.reduce((sum, item) => sum + item.price, 0);

  // Handle checkout (placeholder for now)
  const handleCheckout = () => {
    alert("Checkout successful! Your order has been placed.");
    clearCart();
  };

  if (cartItems.length === 0) {
    return (
      <div style={styles.container}>
        <h2>Your Cart is Empty</h2>
        <p>Add items from the catalog to see them here.</p>
      </div>
    );
  }

  return (
    <div style={styles.container}>
      <h2>Your Cart</h2>
      <ul style={styles.list}>
        {cartItems.map((item, index) => (
          <li key={index} style={styles.item}>
            <span>{item.name} — ₦{item.price}</span>
            <button onClick={() => removeFromCart(item.id)} style={styles.remove}>
              Remove
            </button>
          </li>
        ))}
      </ul>
      <h3>Total: ₦{totalPrice}</h3>
      <div style={styles.actions}>
        <button onClick={clearCart} style={styles.button}>Clear Cart</button>
        <button onClick={handleCheckout} style={styles.checkout}>Proceed to Checkout</button>
      </div>
    </div>
  );
}

const styles = {
  container: { maxWidth: "600px", margin: "50px auto", textAlign: "center" },
  list: { listStyle: "none", padding: 0 },
  item: { display: "flex", justifyContent: "space-between", marginBottom: "10px", borderBottom: "1px solid #ccc", padding: "10px" },
  remove: { backgroundColor: "#c62828", color: "#fff", border: "none", padding: "5px 10px", cursor: "pointer" },
  actions: { display: "flex", justifyContent: "center", gap: "15px", marginTop: "20px" },
  button: { padding: "10px 20px", backgroundColor: "#757575", color: "#fff", border: "none", borderRadius: "5px", cursor: "pointer" },
  checkout: { padding: "10px 20px", backgroundColor: "#2e7d32", color: "#fff", border: "none", borderRadius: "5px", cursor: "pointer" },
};

export default Cart;
