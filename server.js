// Require packages for this file
require('dotenv').config()
const path = require('path')
const express = require('express')
const cookieSession = require('cookie-session')
const connectDB = require('./config/db')

// Envoke function to connect to database
connectDB()

// Initialize express
const app = express()

// Require routes
const index = require('./routes/index')
const admin = require('./routes/admin/index')

// Use public folder for static files
app.use(express.static(path.join(__dirname, 'public')))

// Use body parser for form data
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Use cookie session and set keys
app.use(cookieSession({
  keys: ['lklekaiudbfip32n48dpa3pihirgldnagf3qp3r09ieemviej'],
  secure: process.env.NODE_ENV === 'production' ? true : false,
  httpOnly: true
}))

// Mount routes
app.use('/', index)
app.use('/admin', admin)

const PORT = process.env.PORT || 3000

// Set Express server to listen to port 3000
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`)
})