// Require packages for this file
require('dotenv').config()
const express = require('express')
const connectDB = require('./config/db')

// Run function to connect to database
connectDB()

// Initialize express
const app = express()

// Require routes
app.get('/', (req, res) => {
  res.send('INDEX PAGE')
})

const PORT = process.env.PORT || 3000

// Set Express server to listen to port 3000
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`)
})