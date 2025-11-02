const dotenv = require('dotenv');
dotenv.config();

console.log('MONGO_URI:', process.env.MONGO_URI);
const mongoose = require('mongoose'); // ← this must come before mongoose.connect()

const express = require('express');
const app = express();

// Now it's safe to use mongoose
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.log('Failed to connect:', err));

app.listen(50000, () => {
  console.log('Server is running on port 50000');
});