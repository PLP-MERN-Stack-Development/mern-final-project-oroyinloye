// routes/auth.js
import express from "express";

const router = express.Router();

// Example: Register route
router.post("/register", (req, res) => {
  // You can add logic here to create a new user
  res.json({ message: "Register route working" });
});

// Example: Login route
router.post("/login", (req, res) => {
  // You can add logic here to authenticate user
  res.json({ message: "Login route working" });
});

export default router;
