// seed.js
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("✅ MongoDB connected for seeding"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

// Product schema (same as in server.js)
const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    quantity: { type: Number, required: true },
    price: { type: Number, required: true },
    location: { type: String, required: true },
    imageUrl: { type: String },
    phone: { type: String },
    email: { type: String },
  },
  { timestamps: true }
);

const Product = mongoose.model("Product", productSchema);

// Sample products
const products = [
  {
    name: "Yam Tubers",
    description: "Fresh yam from Gwagwalada farms",
    quantity: 20,
    price: 15000,
    location: "Gwagwalada",
    imageUrl: "https://via.placeholder.com/300x200",
    phone: "08012345678",
    email: "farmer.yam@example.com",
  },
  {
    name: "Tomatoes",
    description: "Organic red tomatoes",
    quantity: 50,
    price: 2000,
    location: "Abuja",
    imageUrl: "https://via.placeholder.com/300x200",
    phone: "08098765432",
    email: "farmer.tomato@example.com",
  },
  {
    name: "Maize",
    description: "Yellow maize harvested this season",
    quantity: 100,
    price: 5000,
    location: "Kuje",
    imageUrl: "https://via.placeholder.com/300x200",
    phone: "08123456789",
    email: "farmer.maize@example.com",
  },
];

// Seed function
const seedDB = async () => {
  try {
    await Product.deleteMany({});
    console.log("🗑️ Existing products cleared");

    await Product.insertMany(products);
    console.log("🌱 Sample products seeded successfully");

    mongoose.connection.close();
    console.log("🔒 MongoDB connection closed");
  } catch (err) {
    console.error("❌ Seeding error:", err);
    mongoose.connection.close();
  }
};

seedDB();
