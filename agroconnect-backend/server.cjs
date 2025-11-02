const dotenv = require('dotenv');
dotenv.config(); // Load environment variables from .env

console.log('MONGO_URI:', process.env.MONGO_URI); // ← Add this line to debug

const mongoose = require('mongoose');
const express = require('express');
const app = express();

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.log('Failed to connect:', err));

// Start the server
app.listen(50000, () => {
  console.log('Server is running on port 50000');
});