// src/pages/Dashboard.js
import React, { useEffect, useState } from "react";

export default function Dashboard() {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) return;

    fetch("http://localhost:5000/api/auth/profile", {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((res) => res.json())
      .then((data) => setProfile(data))
      .catch(() => setProfile(null));
  }, []);

  return (
    <div className="container">
      <div className="card">
        <h2 className="page-title">Dashboard</h2>
        <p className="page-subtitle">Your account overview</p>

        {profile ? (
          <div className="grid">
            <div className="card" style={{ background: "#eef2ff" }}>
              <h3 className="page-title" style={{ fontSize: "1.1rem" }}>Profile</h3>
              <div className="stack-2">
                <div><strong>Name:</strong> {profile.name}</div>
                <div><strong>Email:</strong> {profile.email}</div>
              </div>
            </div>

            <div className="card" style={{ background: "#fef3c7" }}>
              <h3 className="page-title" style={{ fontSize: "1.1rem" }}>Quick actions</h3>
              <div style={{ display: "flex", gap: 12 }}>
                <a href="/catalog" className="btn btn-primary">Browse catalog</a>
                <a href="/add-product" className="btn btn-outline">Add a product</a>
              </div>
            </div>
          </div>
        ) : (
          <p className="page-subtitle">Please login to view your profile.</p>
        )}
      </div>
    </div>
  );
}
