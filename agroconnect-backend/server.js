// backend/server.js
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const path = require("path");

const app = express();

// Middleware
app.use(cors({ origin: "http://localhost:3000", credentials: true }));
app.use(express.json());

// Connect DB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err.message));

// Basic root route
app.get("/", (req, res) => {
  res.send("AgroConnect Backend is running 🚀");
});

// Routes
const authRoutes = require("./routes/auth");
const dashboardRoutes = require("./routes/dashboard");
const messagesRoutes = require("./routes/messages");
app.use("/api/messages", messagesRoutes);

// Optional existing products route
const productsRoutes = require("./routes/products"); // if you have it

app.use("/api/auth", authRoutes);
app.use("/api/dashboard", dashboardRoutes);
if (productsRoutes) app.use("/api/products", productsRoutes);

// Optional: serve frontend build in production
// app.use(express.static(path.join(__dirname, "../frontend/build")));
// app.get("*", (req, res) =>
//   res.sendFile(path.join(__dirname, "../frontend/build", "index.html"))
// );

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
