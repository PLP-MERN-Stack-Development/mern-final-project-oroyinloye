// src/pages/AddProduct.js
import "./AddProduct.css";
import React, { useState } from "react";
import { toast } from "react-toastify";

export default function AddProduct({ onProductAdded }) {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    quantity: "",
    price: "",
    location: "",
    imageUrl: "",
    phone: "",
    email: ""
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token");
      const res = await fetch("http://localhost:5000/api/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();

      if (res.ok) {
        toast.success("✅ Product added successfully!");
        onProductAdded(data); // instantly update catalog
        setFormData({
          name: "",
          description: "",
          quantity: "",
          price: "",
          location: "",
          imageUrl: "",
          phone: "",
          email: ""
        });
      } else {
        toast.error(data.error || "❌ Failed to add product");
      }
    } catch {
      toast.error("❌ Server error");
    }
  };

  return (
    <div className="container">
      <div className="card">
        <h2 className="page-title">Add Product</h2>
        <p className="page-subtitle">Post your farm produce for buyers to see.</p>

        <form className="form" onSubmit={handleSubmit}>
          {/* Name */}
          <div className="form-row">
            <label className="label">Name</label>
            <input
              name="name"
              className="input"
              type="text"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          {/* Description */}
          <div className="form-row">
            <label className="label">Description</label>
            <textarea
              name="description"
              className="textarea"
              value={formData.description}
              onChange={handleChange}
              required
            />
          </div>

          {/* Quantity */}
          <div className="form-row">
            <label className="label">Quantity</label>
            <input
              name="quantity"
              className="input"
              type="number"
              value={formData.quantity}
              onChange={handleChange}
              required
            />
          </div>

          {/* Price */}
          <div className="form-row">
            <label className="label">Price (₦)</label>
            <input
              name="price"
              className="input"
              type="number"
              value={formData.price}
              onChange={handleChange}
              required
            />
          </div>

          {/* Location */}
          <div className="form-row">
            <label className="label">Location</label>
            <input
              name="location"
              className="input"
              type="text"
              value={formData.location}
              onChange={handleChange}
              required
            />
          </div>

          {/* Image URL */}
          <div className="form-row">
            <label className="label">Image URL</label>
            <input
              name="imageUrl"
              className="input"
              type="text"
              value={formData.imageUrl}
              onChange={handleChange}
            />
          </div>

          {/* Phone */}
          <div className="form-row">
            <label className="label">Phone</label>
            <input
              name="phone"
              className="input"
              type="text"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>

          {/* Email */}
          <div className="form-row">
            <label className="label">Email</label>
            <input
              name="email"
              className="input"
              type="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Add Product
          </button>
        </form>
      </div>
    </div>
  );
}
