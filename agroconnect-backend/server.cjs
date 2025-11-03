const dotenv = require('dotenv');
dotenv.config();

const mongoose = require('mongoose');
const express = require('express');
const app = express(); // ✅ Define app first

app.use(express.json()); // ✅ Now it's safe to use

// Optional: CORS setup if needed
// const cors = require('cors');
// app.use(cors());

const authRoutes = require('./routes/authRoutes');
app.use('/api/auth', authRoutes);

app.get('/', (req, res) => {
  res.send('AgroConnect backend is live!');
});
const cors = require('cors');
app.use(cors());

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.log('Failed to connect:', err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});