// agroconnect-backend/routes/index.js
const express = require('express');
const router = express.Router();

router.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

// Example API route
router.get('/api/example', (req, res) => {
  res.json({ message: 'Hello from backend API' });
});

module.exports = router;
