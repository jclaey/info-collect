// Require packages for this file
const express = require('express')

// Initialize express
const app = express()

// Routes
app.get('/', (req, res) => {
  res.send('INDEX PAGE')
})

const PORT = process.env.PORT || 3000

// Set Express server to listen to port 3000
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`)
})