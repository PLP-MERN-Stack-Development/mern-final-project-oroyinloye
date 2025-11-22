import React, { useState } from "react";

function FarmerUpload() {
  const [form, setForm] = useState({
    name: "",
    price: "",
    description: "",
    farmerEmail: "",
    farmerPhone: "",
  });
  const [image, setImage] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      Object.keys(form).forEach((key) => formData.append(key, form[key]));
      if (image) formData.append("image", image);

      const res = await fetch(`${process.env.REACT_APP_API_URL}/api/products/add`, {
        method: "POST",
        body: formData,
      });
      const data = await res.json();
      alert(data.message);
      setForm({ name: "", price: "", description: "", farmerEmail: "", farmerPhone: "" });
      setImage(null);
    } catch (err) {
      console.error("Upload error:", err);
      alert("Failed to upload product");
    }
  };

  return (
    <div style={{ maxWidth: "600px", margin: "50px auto" }}>
      <h2>Upload Farm Product</h2>
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        <input name="name" placeholder="Product Name" value={form.name} onChange={handleChange} required />
        <input name="price" type="number" placeholder="Price" value={form.price} onChange={handleChange} required />
        <textarea name="description" placeholder="Description" value={form.description} onChange={handleChange} />
        <input name="farmerEmail" type="email" placeholder="Farmer Email" value={form.farmerEmail} onChange={handleChange} required />
        <input name="farmerPhone" placeholder="Farmer Phone" value={form.farmerPhone} onChange={handleChange} />
        <input type="file" accept="image/*" onChange={handleImageChange} />
        <button type="submit" style={{ backgroundColor: "#2e7d32", color: "#fff", padding: "10px", border: "none", borderRadius: "5px" }}>
          Upload Product
        </button>
      </form>
    </div>
  );
}

export default FarmerUpload;
