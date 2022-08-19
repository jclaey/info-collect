const express = require('express')
const router = express.Router()
const asyncHandler = require('../../middleware/async')
const { requireAuth } = require('../../middleware/auth')
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
  ], asyncHandler(postLogin))

router.get('/logout', getLogout)

router.get('/dashboard', requireAuth, asyncHandler(getClients))

module.exports = router