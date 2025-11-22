import React, { useEffect, useState, useContext } from "react";
import CartContext from "../context/CartContext";

function Catalog() {
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/api/products`)
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error("Fetch products error:", err));
  }, []);

  // Example product list (you can replace with API data later)
  const products = [
    { id: 1, name: "Fresh Tomatoes", price: 500, farmer: "farmer1@example.com", phone: "+2348012345678" },
    { id: 2, name: "Organic Maize", price: 1200, farmer: "farmer2@example.com", phone: "+2348098765432" },
    { id: 3, name: "Yam Tubers", price: 800, farmer: "farmer3@example.com", phone: "+2348076543210" },
  ];

  // Contact farmer via email
  const contactFarmerEmail = (email) => {
    window.location.href = `mailto:${email}?subject=Interested in your farm product&body=Hello, I would like to buy your product.`;
  };

  // Contact farmer via SMS
  const contactFarmerSMS = (phone) => {
    window.location.href = `sms:${phone}?body=Hello, I am interested in your farm product.`;
  };

  return (
    <div style={styles.container}>
      <h2>Catalog</h2>
      <div style={styles.grid}>
        {products.map((product) => (
          <div key={product.id} style={styles.card}>
            <h3>{product.name}</h3>
            <p>Price: ₦{product.price}</p>
            <div style={styles.actions}>
              <button onClick={() => addToCart(product)} style={styles.button}>Add to Cart</button>
              <button onClick={() => contactFarmerEmail(product.farmerEmail)} style={styles.button}>Email Farmer</button>
              <button onClick={() => contactFarmerSMS(product.farmerPhone)} style={styles.button}>SMS Farmer</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const styles = {
  container: { maxWidth: "900px", margin: "50px auto", textAlign: "center" },
  grid: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "20px" },
  card: { border: "1px solid #ccc", borderRadius: "8px", padding: "20px", backgroundColor: "#f9f9f9" },
  actions: { display: "flex", flexDirection: "column", gap: "10px", marginTop: "10px" },
  button: { padding: "10px", backgroundColor: "#2e7d32", color: "#fff", border: "none", borderRadius: "5px", cursor: "pointer" },
};

export default Catalog;
