import React, { useState, useEffect } from "react";
import { registerUser } from "../utils/api";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  // ✅ Redirect if already logged in
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      navigate("/dashboard");
    }
  }, [navigate]);

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setMessage("");
    try {
      const data = await registerUser(form.name, form.email, form.password);
      setMessage("✅ Registration successful!");
      navigate("/login"); // after register, go to login
    } catch (err) {
      console.error(err);
      setMessage("❌ Registration failed. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="container">
      <div className="card">
        <h2>Register</h2>
        <form className="form" onSubmit={handleSubmit}>
          <label className="label">Name</label>
          <input
            className="input"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />

          <label className="label">Email</label>
          <input
            className="input"
            type="email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />

          <label className="label">Password</label>
          <input
            className="input"
            type="password"
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
          />

          <button className="button" type="submit" disabled={loading}>
            {loading ? "Submitting..." : "Create account"}
          </button>

          {message && (
            <p className={`message ${message.includes("failed") ? "error" : "success"}`}>
              {message}
            </p>
          )}
        </form>
      </div>
    </div>
  );
}
