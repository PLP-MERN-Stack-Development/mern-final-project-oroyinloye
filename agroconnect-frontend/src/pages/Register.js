// src/pages/Register.js
import React, { useState } from "react";

export default function Register() {
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });
  const [message, setMessage] = useState("");

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    try {
      const res = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      setMessage(res.ok ? "Registration successful!" : (data.error || "Registration failed"));
    } catch {
      setMessage("Server error");
    }
  };

  return (
    <div className="container">
      <div className="card">
        <h2 className="page-title">Create your account</h2>
        <p className="page-subtitle">Join Agroconnect and start listing or buying farm produce.</p>

        <form className="form" onSubmit={handleSubmit}>
          <div className="form-row">
            <label className="label" htmlFor="name">Name</label>
            <input id="name" name="name" className="input" type="text" value={formData.name} onChange={handleChange} required />
          </div>
          <div className="form-row">
            <label className="label" htmlFor="email">Email</label>
            <input id="email" name="email" className="input" type="email" value={formData.email} onChange={handleChange} required />
          </div>
          <div className="form-row">
            <label className="label" htmlFor="password">Password</label>
            <input id="password" name="password" className="input" type="password" value={formData.password} onChange={handleChange} required />
          </div>

          <div style={{ display: "flex", gap: "12px" }}>
            <button className="btn btn-primary" type="submit">Create account</button>
            <a href="/login" className="btn btn-outline">I already have an account</a>
          </div>
        </form>

        {message && <p className="page-subtitle" style={{ marginTop: 16 }}>{message}</p>}
      </div>
    </div>
  );
}
