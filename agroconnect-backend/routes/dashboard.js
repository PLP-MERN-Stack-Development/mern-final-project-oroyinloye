// backend/routes/dashboard.js
const express = require("express");
const auth = require("../middleware/auth");
const Product = require("../models/Product");
const Message = require("../models/Message"); // import Message model
const router = express.Router();

router.get("/", auth, async (req, res) => {
  try {
    // Count products
    const productsCount = await Product.countDocuments();

    // Count unread messages for this user
    const messagesCount = await Message.countDocuments({
      recipient: req.user.email,
      read: false,
    });

    res.json({
      message: "Dashboard data",
      user: { id: req.user.id, email: req.user.email, role: req.user.role },
      stats: {
        productsCount,
        messagesCount,
        lastLogin: new Date().toISOString(),
      },
    });
  } catch (err) {
    res.status(500).json({ error: "Failed to load dashboard data" });
  }
});

module.exports = router;
