const express = require('express');
const router = express.Router();

router.post('/register', (req, res) => {
  // Sample response for testing
  res.status(201).json({ token: 'mock-token' });
});

module.exports = router;
