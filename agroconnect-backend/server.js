// server.js

const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();
const app = express();

// ✅ CORS setup for both localhost and Netlify frontend
const allowedOrigins = ['http://localhost:3000', 'https://agroconnect-frontend.netlify.app'];

app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type'],
  credentials: true
}));

// ✅ Handle preflight requests
app.options('*', cors());

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
<<<<<<< HEAD
=======
const authRoutes = require('./routes/auth');
app.use('/api/auth', authRoutes);

const authMiddleware = require('./middleware/auth');

app.get('/api/dashboard', authMiddleware, (req, res) => {
  res.json({ message: `Welcome user ${req.user.userId}` });
});

app.get('/api/dashboard', authMiddleware, (req, res) => {
  res.json({ message: `Welcome user ${req.user.userId}` });
});
>>>>>>> Dashboard UI
