// frontend/src/pages/Register.js
import React, { useState } from "react";
import { toast } from "react-toastify";

export default function Register() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
      });
      const data = await res.json();

      if (!res.ok) throw new Error(data.error || "Registration failed");

      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));
      toast.success("Account created successfully!", { position: "bottom-center" });
    } catch (err) {
      toast.error(err.message, { position: "top-right" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <div className="card">
        <h2 className="page-title">Create account</h2>
        <p className="page-subtitle">Join AgroConnect</p>

        <form className="form" onSubmit={handleSubmit}>
          <div className="form-row">
            <label className="label" htmlFor="name">Name</label>
            <input
              id="name" name="name" type="text" className="input"
              value={form.name} onChange={handleChange} required
            />
          </div>

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
              value={form.password} onChange={handleChange} required minLength={6}
            />
          </div>

          <button className="btn btn-primary" type="submit" disabled={loading}>
            {loading ? "Creating..." : "Register"}
          </button>
        </form>
      </div>
    </div>
  );
}
