const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

// ✅ Replace with your actual frontend Render URL
const FRONTEND_URL = 'https://agroconnect-vfag.onrender.com/';

app.use(cors({
  origin: FRONTEND_URL,
  credentials: true
}));

app.use(express.json());

// Root route
app.get('/', (req, res) => {
  res.send('Backend API is running 🚀');
});

// Import your routes once
const authRoutes = require('./routes/auth');
app.use('/api/auth', authRoutes);

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error(err));

// Start server
const PORT = process.env.PORT || 10000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
