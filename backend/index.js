// server.js
const express = require('express');
const app = express();
const cors = require('cors')

app.use(cors())
app.use(express.json()); // Middleware to parse JSON


app.use("/", require("./Router/route"))

app.get("/", (req,res) => {
  res.send("Backend is running!")
})

// Start the server
app.listen(3000, () => {
  console.log('Server running at http://localhost:3000');
});