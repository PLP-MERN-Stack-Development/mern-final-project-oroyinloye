import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String },
  farmerEmail: { type: String, required: true },
  farmerPhone: { type: String },
  imageUrl: { type: String }, // ✅ new field for product photo
  createdAt: { type: Date, default: Date.now },
});

const Product = mongoose.model("Product", ProductSchema);

export default Product;
