import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../context/AuthContext";

function Navbar() {
  const { user, logout } = useContext(AuthContext);

  return (
    <nav style={styles.nav}>
      <h2 style={styles.logo}>AgroConnect</h2>
      <div style={styles.links}>
        <Link to="/" style={styles.link}>Home</Link>
        <Link to="/catalog" style={styles.link}>Catalog</Link>
        <Link to="/cart" style={styles.link}>Cart</Link>
        {!user && <Link to="/register" style={styles.link}>Register</Link>}
        {!user && <Link to="/login" style={styles.link}>Login</Link>}
        {user && <Link to="/dashboard" style={styles.link}>Dashboard</Link>}
        {user && (
          <button onClick={logout} style={styles.logout}>Logout</button>
        )}
      </div>
    </nav>
  );
}

const styles = {
  nav: {
    backgroundColor: "#2e7d32", // green background
    padding: "15px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  logo: { color: "#fff", margin: 0 },
  links: { display: "flex", gap: "15px" },
  link: { color: "#fff", textDecoration: "none", fontWeight: "bold" }, // ✅ white links
  logout: {
    backgroundColor: "#c62828",
    color: "#fff",
    border: "none",
    padding: "8px 12px",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default Navbar;
