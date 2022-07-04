// Require packages for this file
require('dotenv').config()
const express = require('express')
const path = require('path')
const connectDB = require('./config/db')

// Envoke function to connect to database
connectDB()

// Initialize express
const app = express()

// Require routes
const index = require('./routes/index')

// Use public folder for static files
app.use(express.static(path.join(__dirname, 'public')));

// Mount routes
app.use('/', index)

const PORT = process.env.PORT || 3000

// Set Express server to listen to port 3000
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`)
})