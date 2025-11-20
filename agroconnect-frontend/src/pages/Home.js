// src/pages/Home.js
import React from "react";

export default function Home() {
  return (
    <div className="container">
      <div className="card">
        <h1 className="page-title">Welcome to Agroconnect</h1>
        <p className="page-subtitle">
          Your trusted platform for connecting farmers, buyers, and agricultural services.
        </p>

        <div className="grid grid-2">
          <div className="stack-4">
            <p>
              Discover a marketplace built for agriculture — create an account, list farm produce,
              and connect with verified buyers and services.
            </p>
            <div className="stack-2">
              <a href="/register" className="btn btn-primary">Get started</a>
              <a href="/catalog" className="btn btn-outline">Browse catalog</a>
            </div>
          </div>

          <div className="card" style={{ background: "#f0fdf4" }}>
            <h3 className="page-title" style={{ fontSize: "1.25rem" }}>Why Agroconnect?</h3>
            <ul className="stack-2" style={{ margin: 0, paddingLeft: 18 }}>
              <li>Secure accounts with JWT authentication</li>
              <li>Simple listing tools for farmers</li>
              <li>Search and filter for buyers</li>
              <li>Responsive and mobile‑friendly UI</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
