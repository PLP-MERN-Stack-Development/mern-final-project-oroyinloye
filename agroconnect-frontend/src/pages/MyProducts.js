import React, { useEffect, useState, useContext } from "react";
import AuthContext from "../context/AuthContext";

function MyProducts() {
  const { user } = useContext(AuthContext);
  const [products, setProducts] = useState([]);
  const [editingProduct, setEditingProduct] = useState(null);
  const [form, setForm] = useState({
    name: "",
    price: "",
    description: "",
    farmerPhone: "",
  });

  // Fetch all products and filter by farmer email
  useEffect(() => {
    if (!user) return;
    fetch(`${process.env.REACT_APP_API_URL}/api/products`)
      .then((res) => res.json())
      .then((data) => {
        const myProducts = data.filter(
          (product) => product.farmerEmail === user.email
        );
        setProducts(myProducts);
      })
      .catch((err) => console.error("Fetch products error:", err));
  }, [user]);

  // Delete product
  const handleDelete = async (id) => {
    try {
      const res = await fetch(`${process.env.REACT_APP_API_URL}/api/products/${id}`, {
        method: "DELETE",
      });
      const data = await res.json();
      alert(data.message);
      setProducts(products.filter((p) => p._id !== id));
    } catch (err) {
      console.error("Delete error:", err);
    }
  };

  // Start editing a product
  const startEdit = (product) => {
    setEditingProduct(product._id);
    setForm({
      name: product.name,
      price: product.price,
      description: product.description || "",
      farmerPhone: product.farmerPhone || "",
    });
  };

  // Handle form changes
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Submit edit form
  const handleUpdate = async (id) => {
    try {
      const res = await fetch(`${process.env.REACT_APP_API_URL}/api/products/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      alert(data.message);
      setProducts(
        products.map((p) =>
          p._id === id ? { ...p, ...form } : p
        )
      );
      setEditingProduct(null);
    } catch (err) {
      console.error("Update error:", err);
    }
  };

  return (
    <div style={styles.container}>
      <h2>My Products</h2>
      {products.length === 0 ? (
        <p>You have not uploaded any products yet.</p>
      ) : (
        <div style={styles.grid}>
          {products.map((product) => (
            <div key={product._id} style={styles.card}>
              {editingProduct === product._id ? (
                <div style={styles.form}>
                  <input
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Product Name"
                  />
                  <input
                    name="price"
                    type="number"
                    value={form.price}
                    onChange={handleChange}
                    placeholder="Price"
                  />
                  <textarea
                    name="description"
                    value={form.description}
                    onChange={handleChange}
                    placeholder="Description"
                  />
                  <input
                    name="farmerPhone"
                    value={form.farmerPhone}
                    onChange={handleChange}
                    placeholder="Phone"
                  />
                  <div style={styles.actions}>
                    <button onClick={() => handleUpdate(product._id)} style={styles.save}>
                      Save
                    </button>
                    <button onClick={() => setEditingProduct(null)} style={styles.cancel}>
                      Cancel
                    </button>
                  </div>
                </div>
              ) : (
                <>
      <img
      src={`${process.env.REACT_APP_API_URL}${product.imageUrl}`}
      alt={product.name}
      style={{ width: "100%", borderRadius: "8px", marginBottom: "10px" }}
    />           
                  <h3>{product.name}</h3>
                  <p>Price: ₦{product.price}</p>
                  <p>{product.description}</p>
                  <p>Phone: {product.farmerPhone}</p>
                  <div style={styles.actions}>
                    <button onClick={() => startEdit(product)} style={styles.edit}>
                      Edit
                    </button>
                    <button onClick={() => handleDelete(product._id)} style={styles.delete}>
                      Delete
                    </button>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

const styles = {
  container: { maxWidth: "900px", margin: "50px auto", textAlign: "center" },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "20px",
  },
  card: {
    border: "1px solid #ccc",
    borderRadius: "8px",
    padding: "20px",
    backgroundColor: "#f9f9f9",
  },
  form: { display: "flex", flexDirection: "column", gap: "10px" },
  actions: {
    display: "flex",
    justifyContent: "center",
    gap: "10px",
    marginTop: "10px",
  },
  edit: {
    backgroundColor: "#2e7d32",
    color: "#fff",
    border: "none",
    padding: "8px 12px",
    borderRadius: "5px",
    cursor: "pointer",
  },
  delete: {
    backgroundColor: "#c62828",
    color: "#fff",
    border: "none",
    padding: "8px 12px",
    borderRadius: "5px",
    cursor: "pointer",
  },
  save: {
    backgroundColor: "#2e7d32",
    color: "#fff",
    border: "none",
    padding: "8px 12px",
    borderRadius: "5px",
    cursor: "pointer",
  },
  cancel: {
    backgroundColor: "#757575",
    color: "#fff",
    border: "none",
    padding: "8px 12px",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default MyProducts;
