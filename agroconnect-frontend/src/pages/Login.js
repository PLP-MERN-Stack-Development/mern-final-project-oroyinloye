import React, { useState, useContext, useEffect } from "react";
import { loginUser } from "../utils/api";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const { login } = useContext(AuthContext);
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
      const data = await loginUser(form.email, form.password);
      if (data.token) {
        await login(data.token); // use AuthContext login
        setMessage("✅ Login successful!");
        navigate("/dashboard"); // redirect after login
      }
    } catch (err) {
      console.error(err);
      setMessage("❌ Login failed. Please check your credentials.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="container">
      <div className="card">
        <h2>Login</h2>
        <form className="form" onSubmit={handleSubmit}>
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
            {loading ? "Logging in..." : "Login"}
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
