import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

import authRoutes from "./routes/auth.js";
import productRoutes from "./routes/product.js";


dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());
app.use("/api/products", productRoutes);

// Root route (fixes "Cannot GET /")
app.get("/", (req, res) => {
  res.send("AgroConnect Backend is running ✅");
});

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.error(err));

// Auth routes
app.use("/api/auth", authRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
