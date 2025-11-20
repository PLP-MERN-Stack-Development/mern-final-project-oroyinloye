// backend/seed.js
import mongoose from "mongoose";
import dotenv from "dotenv";
import Product from "./models/Product.js"; // adjust path if needed

dotenv.config();

mongoose.connect(process.env.MONGO_URI);

const seedProducts = async () => {
  try {
    await Product.deleteMany(); // clear existing
    await Product.insertMany([
      { name: "Maize", price: 100 },
      { name: "Rice", price: 200 },
      { name: "Beans", price: 150 },
      { name: "Cassava", price: 80 },
    ]);
    console.log("✅ Products seeded");
    mongoose.disconnect();
  } catch (err) {
    console.error("❌ Error seeding products:", err);
  }
};

seedProducts();
