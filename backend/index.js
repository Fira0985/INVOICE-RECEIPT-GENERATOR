// server.js
const express = require('express');
const pool = require('./config/db');
const app = express();

app.use(express.json()); // Middleware to parse JSON


// Start the server
app.listen(3000, () => {
  console.log('Server running at http://localhost:3000');
});
