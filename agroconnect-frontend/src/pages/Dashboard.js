import React, { useContext } from "react";
import AuthContext from "../context/AuthContext";

function Dashboard() {
  const { user } = useContext(AuthContext);

  if (!user) {
    return <h2 style={{ textAlign: "center", marginTop: "50px" }}>Please log in to view your dashboard.</h2>;
  }

  return (
    <div style={styles.container}>
      <h2>Welcome back, {user.name}!</h2>
      <p>Email: {user.email}</p>
      <p>User ID: {user.id}</p>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: "600px",
    margin: "50px auto",
    textAlign: "center",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "8px",
    backgroundColor: "#f9f9f9",
  },
};

export default Dashboard;
