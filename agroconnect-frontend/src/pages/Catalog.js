// src/pages/Catalog.js
import React, { useState, useEffect } from "react";
import "./Catalog.css"; // make sure you created the CSS file we discussed

export default function Catalog() {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Fetch products from backend
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/products");
        const data = await res.json();
        setProducts(data);
      } catch (error) {
        console.error("❌ Failed to fetch products:", error);
      }
    };
    fetchProducts();
  }, []);

  // WhatsApp contact handler
  const handleWhatsApp = (product) => {
    let phone = product.phone.trim();
    if (phone.startsWith("0")) {
      phone = "234" + phone.slice(1); // convert Nigerian local number
    }
    const message = `Hello, I'm interested in your ${product.name}`;
    const encodedMessage = encodeURIComponent(message);
    const isMobile = /Mobi|Android/i.test(navigator.userAgent);

    const whatsappUrl = isMobile
      ? `whatsapp://send?phone=${phone}&text=${encodedMessage}`
      : `https://wa.me/${phone}?text=${encodedMessage}`;

    const newWindow = window.open(whatsappUrl, "_blank");
    if (!newWindow) {
      alert("⚠️ Please install WhatsApp to contact this farmer.");
    }
  };

  // Email contact handler
  const handleEmail = (product) => {
    const subject = `Inquiry about ${product.name}`;
    const body = `Hello,\n\nI'm interested in your ${product.name}. Could you provide more details?\n\nThanks.`;
    const mailtoUrl = `mailto:${product.email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoUrl;
  };

  return (
    <div className="container">
      <h2 className="page-title">Farm Produce Catalog</h2>
      <p className="page-subtitle">
        Browse available farm products from local farmers.
      </p>

      {/* Product grid */}
      <div className="grid">
        {products.map((product) => (
          <div key={product._id} className="card">
            <img
              src={product.imageUrl || "https://via.placeholder.com/300x200"}
              alt={product.name}
              className="card-img"
            />
            <h3 className="card-title">{product.name}</h3>
            <p className="card-text">₦{product.price}</p>
            <p className="card-text">{product.location}</p>
            <button
              className="btn btn-primary"
              onClick={() => setSelectedProduct(product)}
            >
              View Details
            </button>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedProduct && (
        <div
          className={`modal show`}
          onClick={() => setSelectedProduct(null)} // backdrop click closes modal
        >
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside
          >
            <h3>{selectedProduct.name}</h3>
            <img
              src={
                selectedProduct.imageUrl || "https://via.placeholder.com/300x200"
              }
              alt={selectedProduct.name}
              className="modal-img"
            />
            <p>{selectedProduct.description}</p>
            <p>
              <strong>Quantity:</strong> {selectedProduct.quantity}
            </p>
            <p>
              <strong>Price:</strong> ₦{selectedProduct.price}
            </p>
            <p>
              <strong>Location:</strong> {selectedProduct.location}
            </p>

            {/* Contact options */}
            <div style={{ marginTop: "12px" }}>
              {selectedProduct.phone && (
                <button
                  className="btn btn-success"
                  style={{ marginRight: "10px" }}
                  onClick={() => handleWhatsApp(selectedProduct)}
                >
                  Contact via WhatsApp
                </button>
              )}

              {selectedProduct.email && (
                <button
                  className="btn btn-secondary"
                  style={{ marginRight: "10px" }}
                  onClick={() => handleEmail(selectedProduct)}
                >
                  Send Email to Farmer
                </button>
              )}

              <button
                className="btn btn-primary"
                onClick={() => setSelectedProduct(null)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
