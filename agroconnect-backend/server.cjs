const dotenv = require('dotenv');
dotenv.config(); // Load environment variables from .env

const authRoutes = require('./routes/authRoutes');
app.use(express.json()); // to parse JSON bodies
app.use('/api/auth', authRoutes);

console.log('MONGO_URI:', process.env.MONGO_URI); // ← Add this line to debug

const authRoutes = require('./routes/authRoutes');
app.use(express.json()); // to parse JSON bodies
app.use('/api/auth', authRoutes);

const mongoose = require('mongoose');
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('AgroConnect backend is live!');
});

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.log('Failed to connect:', err));

// Start the server
const PORT = process.env.PORT || 5000;
app.get('/api/users', (req, res) => {
  res.json([
    { id: 1, name: 'Richard', role: 'Farmer' },
    { id: 2, name: 'Ada', role: 'Buyer' }
  ]);
});
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

console.log('Current directory:', __dirname);
console.log('Environment Variables:', process.env);


