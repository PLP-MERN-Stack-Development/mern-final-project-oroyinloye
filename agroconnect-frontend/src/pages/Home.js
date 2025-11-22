import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div style={styles.container}>
      <h1>Welcome to AgroConnect</h1>
      <p>Your gateway to farm products and services.</p>
      <div style={styles.links}>
        <Link to="/catalog" style={styles.button}>Browse Catalog</Link>
        <Link to="/register" style={styles.button}>Register</Link>
        <Link to="/login" style={styles.button}>Login</Link>
      </div>
    </div>
  );
}

const styles = {
  container: { textAlign: "center", marginTop: "50px" },
  links: { marginTop: "20px", display: "flex", gap: "15px", justifyContent: "center" },
  button: { padding: "10px 20px", backgroundColor: "#2e7d32", color: "#fff", textDecoration: "none", borderRadius: "5px" },
};

export default Home;
