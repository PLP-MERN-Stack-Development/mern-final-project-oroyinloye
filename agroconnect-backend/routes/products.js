const express = require("express");
const router = express.Router();
const Product = require("../models/Product");
const auth = require("../middleware/auth"); // adjust if your auth middleware is elsewhere

// Add product (farmers only)
router.post("/", auth, async (req, res) => {
  try {
    const product = new Product({ ...req.body, postedBy: req.user.id });
    await product.save();
    res.json(product);
  } catch (err) {
    res.status(500).json({ error: "Failed to add product" });
  }
});

// Get all products (buyers/farmers)
router.get("/", async (req, res) => {
  try {
    const products = await Product.find().sort({ createdAt: -1 });
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch products" });
  }
});

module.exports = router;
