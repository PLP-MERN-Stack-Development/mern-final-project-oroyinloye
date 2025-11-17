const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();

// Middleware
app.use(express.json());
app.use(
  cors({
    origin: [
      'http://localhost:3000',
      'https://agroconnect-frontend.netlify.app'
    ],
    credentials: true
  })
);

// MongoDB connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.error('MongoDB connection error:', err));

// Health check route
app.get('/health', (req, res) => {
  res.status(200).send('Backend healthy ✅');
});

// Example base route
app.get('/', (req, res) => {
  res.status(200).json({ status: 'ok', service: 'agroconnect-backend' });
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
