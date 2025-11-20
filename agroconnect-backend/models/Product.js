import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    quantity: { type: Number, required: true },
    price: { type: Number, required: true },
    location: { type: String, required: true },
    imageUrl: { type: String },
    phone: { type: String },   // ✅ new field for phone contact
    email: { type: String },   // ✅ new field for email contact
  },
  { timestamps: true }
);

const Product = mongoose.model("Product", productSchema);
export default Product;
