// server.js
// server.cjs or server.js (if no "type": "module")
const dotenv = require('dotenv');
dotenv.config();

const express = require('express');
// ...rest of your code

const express = require('express');
const mongoose = require('mongoose');

const app = express();
const port = process.env.PORT || 3000;

// Connect to MongoDB Atlas
mongoose.connect('mongodb+srv://oroyinloye:Acegid@321@cluster0.xxxxx.mongodb.net/AgroConnect?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('Connected to MongoDB Atlas'))
.catch((err) => console.error('Failed to connect:', err));

// Middleware (e.g., body-parser)
app.use(express.json());

// Define routes
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});