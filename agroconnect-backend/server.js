// server.js

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

// Load environment variables from .env file
dotenv.config();

const app = express();

// ✅ Middleware to parse JSON
app.use(express.json());

// ✅ CORS setup for local and deployed frontend
app.use(cors({
  origin: ['http://localhost:3000', 'https://agroconnect-frontend.netlify.app'],
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type'],
  credentials: true
}));

// ✅ Optional: Handle preflight requests globally
app.options('*', cors());

// ✅ MongoDB connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('✅ MongoDB connected'))
.catch((err) => console.error('❌ MongoDB connection error:', err));

// ✅ Sample register route
app.post('/api/auth/register', async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  // Placeholder logic — replace with real user creation
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
