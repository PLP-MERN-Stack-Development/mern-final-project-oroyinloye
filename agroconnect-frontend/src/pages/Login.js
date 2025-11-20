// src/pages/Login.js
import React, { useState } from "react";

export default function Login() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [message, setMessage] = useState("");

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    try {
      const res = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (res.ok) {
        localStorage.setItem("token", data.token);
        setMessage("Login successful!");
      } else {
        setMessage(data.error || "Login failed");
      }
    } catch {
      setMessage("Server error");
    }
  };

  return (
    <div className="container">
      <div className="card">
        <h2 className="page-title">Welcome back</h2>
        <p className="page-subtitle">Login to access your dashboard and manage listings.</p>

        <form className="form" onSubmit={handleSubmit}>
          <div className="form-row">
            <label className="label" htmlFor="email">Email</label>
            <input id="email" name="email" className="input" type="email" value={formData.email} onChange={handleChange} required />
          </div>
          <div className="form-row">
            <label className="label" htmlFor="password">Password</label>
            <input id="password" name="password" className="input" type="password" value={formData.password} onChange={handleChange} required />
          </div>

          <div style={{ display: "flex", gap: "12px" }}>
            <button className="btn btn-primary" type="submit">Login</button>
            <a href="/register" className="btn btn-outline">Create an account</a>
          </div>
        </form>

        {message && <p className="page-subtitle" style={{ marginTop: 16 }}>{message}</p>}
      </div>
    </div>
  );
}
