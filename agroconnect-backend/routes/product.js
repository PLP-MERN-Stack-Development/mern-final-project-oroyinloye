import express from "express";
import multer from "multer";
import path from "path";
import Product from "../models/Product.js";

const router = express.Router();

// Configure Multer storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/"); // save files in /uploads folder
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage });

// Add new product with image
router.post("/add", upload.single("image"), async (req, res) => {
  try {
    const { name, price, description, farmerEmail, farmerPhone } = req.body;

    const newProduct = new Product({
      name,
      price,
      description,
      farmerEmail,
      farmerPhone,
      imageUrl: req.file ? `/uploads/${req.file.filename}` : null,
    });

    await newProduct.save();
    res.json({ message: "Product added successfully", product: newProduct });
  } catch (err) {
    console.error("Add product error:", err);
    res.status(500).json({ message: "Server error" });
  }
});

// Serve uploaded images statically
router.use("/uploads", express.static("uploads"));

export default router;
