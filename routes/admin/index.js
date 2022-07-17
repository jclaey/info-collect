const express = require('express')
const router = express.Router()
const {
  getLogin,
  getRegister
} = require('../../controllers/admin')

router.get('/login', getLogin)

router.get('/register', getRegister)

module.exports = router