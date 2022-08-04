const express = require('express')
const router = express.Router()
const asyncHandler = require('../../middleware/async')
const {
  requireEmailExists,
  requireValidPasswordForUser
} = require('../validators')
const {
  getLogout,
  getLogin,
  postLogin,
  getClients
} = require('../../controllers/admin')

router.route('/login')
  .get(getLogin)
  .post([
    requireEmailExists,
    requireValidPasswordForUser
  ], postLogin)

router.get('/logout', getLogout)

router.get('/dashboard', asyncHandler(getClients))

module.exports = router