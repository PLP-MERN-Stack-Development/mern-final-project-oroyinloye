// server.js
const express = require('express');
const cors = require('cors');
const app = express();

// ✅ CORS configuration
app.use(cors({
  origin: ['http://localhost:3000', 'https://agroconnect-frontend.netlify.app'],
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type'],
  credentials: true
}));

app.use(express.json());
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

// Load environment variables
dotenv.config();

const app = express();

// ✅ CORS setup for local and deployed frontend
app.use(cors({
  origin: ['http://localhost:3000', 'https://agroconnect-frontend.netlify.app'],
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
}));

// ✅ Middleware
app.use(express.json());

// ✅ MongoDB connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected'))
.catch((err) => console.error('MongoDB connection error:', err));

// ✅ Sample route for registration
app.post('/api/auth/register', async (req, res) => {
  const { name, email, password } = req.body;

  // Basic validation
  if (!name || !email || !password) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  // TODO: Add logic to check if user exists, hash password, save to DB
  return res.status(201).json({ message: 'User registered successfully (placeholder)' });
});

// ✅ Root route
app.get('/', (req, res) => {
  res.send('AgroConnect backend is live!');
});

// ✅ Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
