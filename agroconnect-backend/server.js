// server.js
const express = require('express');
const cors = require('cors');
require('dotenv').config();
const express = require('express');

const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();
const app = express();

// ✅ CORS: Allow both localhost and Netlify frontend
const allowedOrigins = ['http://localhost:3000', 'https://agroconnect-frontend.netlify.app'];

app.use((req, res, next) => {
  const origin = req.headers.origin;
  if (allowedOrigins.includes(origin)) {
    res.setHeader('Access-Control-Allow-Origin', origin);
  }
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  if (req.method === 'OPTIONS') {
    return res.sendStatus(200);
  }
  next();
app.use(cors());
app.use(express.json());
app.use(cors({
  origin: 'https://agroconnect-frontend.netlify.app', // your frontend URL
  credentials: true
}));
app.use('/api/auth', authRoutes);
app.post('/api/register', async (req, res) => {
  // registration logic
});

app.use(express.json());

// ✅ MongoDB connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('✅ MongoDB connected'))
.catch((err) => console.error('❌ MongoDB connection error:', err));

// ✅ Sample route
app.post('/api/auth/register', async (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    return res.status(400).json({ message: 'All fields are required' });
  }
  console.log('📥 Registering user:', { name, email });
  return res.status(201).json({ message: 'User registered successfully (placeholder)' });
});

// ✅ Root route
app.get('/', (req, res) => {
  res.send('🌱 AgroConnect backend is running!');
});

// ✅ Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});

module.exports = app; // for testing
  next();
});

// Define your routes here
// Example: app.use('/api/auth', authRoutes);
