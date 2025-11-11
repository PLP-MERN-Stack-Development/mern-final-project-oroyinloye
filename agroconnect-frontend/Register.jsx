import React, { useState } from 'react';

function Register() {
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('http://localhost:5000/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      const data = await res.json();
      if (res.ok) {
        setMessage(data.message);
      } else {
        setMessage(data.error || 'Registration failed');
      }
    } catch (err) {
      setMessage('Server error');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" placeholder="Name" onChange={handleChange} />
      <input name="email" placeholder="Email" onChange={handleChange} />
      <input name="password" placeholder="Password" onChange={handleChange} />
      <button type="submit">Register</button>
      {message && <p>{message}</p>}
    </form>
  );
}

export default Register;
if (res.ok) {
  setMessage(data.message);
  // Optionally redirect:
  // navigate('/dashboard');
}
const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const res = await fetch('http://localhost:5000/api/auth/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    });
    const data = await res.json();
    if (res.ok) {
      setMessage(data.message); // ✅ Show success
    } else {
      setMessage(data.error || 'Registration failed'); // ✅ Show error
    }
  } catch (err) {
    setMessage('Server error');
  }
};
        <button type="submit">Register</button> 
        {message && <p>{message}</p>}
        
