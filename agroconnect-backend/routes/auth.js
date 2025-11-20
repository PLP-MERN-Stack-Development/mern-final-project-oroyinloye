// backend/routes/auth.js
const express = require("express");
const jwt = require("jsonwebtoken");
const User = require("../models/User");
const router = express.Router();

// Helper to sign token
function signToken(user) {
  return jwt.sign(
    { id: user._id, email: user.email, role: user.role },
    process.env.JWT_SECRET,
    { expiresIn: process.env.JWT_EXPIRES_IN || "7d" }
  );
}

// Register
router.post("/register", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password)
      return res.status(400).json({ error: "Name, email, and password are required" });

    const existing = await User.findOne({ email });
    if (existing) return res.status(409).json({ error: "Email already registered" });

    const user = await User.create({ name, email, password });
    const token = signToken(user);

    res.status(201).json({
      message: "User registered successfully",
      user: { id: user._id, name: user.name, email: user.email, role: user.role },
      token
    });
  } catch (err) {
    res.status(500).json({ error: "Registration failed" });
  }
});

// Login
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password)
      return res.status(400).json({ error: "Email and password are required" });

    const user = await User.findOne({ email });
    if (!user) return res.status(401).json({ error: "Invalid credentials" });

    const match = await user.matchPassword(password);
    if (!match) return res.status(401).json({ error: "Invalid credentials" });

    const token = signToken(user);

    res.json({
      message: "Login successful",
      user: { id: user._id, name: user.name, email: user.email, role: user.role },
      token
    });
  } catch (err) {
    res.status(500).json({ error: "Login failed" });
  }
});

module.exports = router;
