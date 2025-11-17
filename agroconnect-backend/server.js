// Import dependencies (adjust to your app)
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();
const app = express();

// CORS (add Netlify domain later after deploy)
app.use(cors({
  origin: ['https://agroconnect-frontend.netlify.app', 'http://localhost:3000'],
  credentials: true
}));


app.use(express.json());

// MongoDB connection
const MONGO_URI = process.env.MONGO_URI;
mongoose.connect(MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB error:', err));

// Health check endpoint for Heroku
app.get('/', (req, res) => {
  res.status(200).send('OK');
});

// Example auth route (adjust to your routes)
app.get('/api/auth/profile', (req, res) => {
  res.json({ ok: true });
});

// Heroku-provided port
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));