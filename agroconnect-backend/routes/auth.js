const express = require('express');
const router = express.Router();
const User = require('../models/User');
const bcrypt = require('bcrypt');

router.post('/register', async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: 'Email already registered' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ name, email, password: hashedPassword });
    await user.save();

    res.status(201).json({ message: 'User registered successfully' });
  } catch (err) {
    console.error('Registration error:', err.message);
    res.status(400).json({ error: 'Registration failed', details: err.message });
  }
});

module.exports = router;
router.post('/register', async (req, res) => {
  const { name, email, password } = req.body;

  // ✅ Now these variables are defined
  console.log('Registering user:', { name, email });

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: 'Email already registered' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ name, email, password: hashedPassword });
    await user.save();

    res.status(201).json({ message: 'User registered successfully' });
  } catch (err) {
    console.error('Registration error:', err.message);
    console.log('Registering user:', { name, email });
    res.status(400).json({ error: 'Registration failed', details: err.message });
  }
});
router.post('/register', async (req, res) => {
  const { name, email, password } = req.body;

  console.log('Registering user:', { name, email });
  console.log('✅ /register route hit');
console.log('Request body:', req.body);

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: 'Email already registered' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ name, email, password: hashedPassword });
    await user.save();

    res.status(201).json({ message: 'User registered successfully' });
  } catch (err) {
    console.error('Registration error:', err.message);
    console.log('Registering user:', { name, email });
    res.status(400).json({ error: 'Registration failed', details: err.message });
  }
});

module.exports = router;  
router.post('/register', async (req, res) => {
  const { name, email, password } = req.body;

  console.log('Registering user:', { name, email });

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: 'Email already registered' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ name, email, password: hashedPassword });
    await user.save();

    res.status(201).json({ message: 'User registered successfully' });
  } catch (err) {
    console.error('Registration error:', err.message);
    console.log('Registering user:', { name, email });
    res.status(400).json({ error: 'Registration failed', details: err.message });
  }
});
module.exports = router;  
