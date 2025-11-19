import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export default function Dashboard() {
  const { user, logout, loading } = useContext(AuthContext);

  if (loading) return <p>Loading...</p>;

  if (!user) return <p>You are not logged in.</p>;

  return (
    <div className="container">
      <div className="card">
        <h2>Dashboard</h2>
        <p><strong>Name:</strong> {user.name}</p>
        <p><strong>Email:</strong> {user.email}</p>
        <button className="button logout" onClick={logout}>Logout</button>
      </div>
    </div>
  );
}
