import React, { useState } from 'react';

function Register() {
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
    if (!formData.password) newErrors.password = 'Password is required';
    return newErrors;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    console.log('Registering:', formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Register</h2>
      <input name="name" placeholder="Name" value={formData.name} onChange={handleChange} />
      {errors.name && <p>{errors.name}</p>}
      <input name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
      {errors.email && <p>{errors.email}</p>}
      <input name="password" placeholder="Password" value={formData.password} onChange={handleChange} />
      {errors.password && <p>{errors.password}</p>}
      <button type="submit">Sign Up</button>
    </form>
  );
}

export default Register;
