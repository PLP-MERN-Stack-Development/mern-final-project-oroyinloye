import React, { useState } from 'react';
import { loginUser } from '../utils/api';
import { useNavigate } from 'react-router-dom';
import '../App.css';

function Login() {
  const [form, setForm] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    const res = await loginUser(form);
    if (res.token) {
      localStorage.setItem('token', res.token);
      navigate('/dashboard');
    } else {
      alert(res.error || 'Login failed');
    }
  };

  return (
    <div className="container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input name="email" placeholder="Email" onChange={handleChange} />
        <input name="password" type="password" placeholder="Password" onChange={handleChange} />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
