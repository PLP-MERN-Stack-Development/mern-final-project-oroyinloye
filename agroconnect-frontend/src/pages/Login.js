// frontend/src/pages/Login.js
import React, { useState } from "react";
import { toast } from "react-toastify";

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
      });
      const data = await res.json();

      if (!res.ok) throw new Error(data.error || "Login failed");

      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));
      toast.success("Logged in successfully", { position: "bottom-center" });
    } catch (err) {
      toast.error(err.message, { position: "top-right" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <div className="card">
        <h2 className="page-title">Login</h2>
        <p className="page-subtitle">Access your account</p>

        <form className="form" onSubmit={handleSubmit}>
          <div className="form-row">
            <label className="label" htmlFor="email">Email</label>
            <input
              id="email" name="email" type="email" className="input"
              value={form.email} onChange={handleChange} required
            />
          </div>

          <div className="form-row">
            <label className="label" htmlFor="password">Password</label>
            <input
              id="password" name="password" type="password" className="input"
              value={form.password} onChange={handleChange} required
            />
          </div>

          <button className="btn btn-primary" type="submit" disabled={loading}>
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
}
