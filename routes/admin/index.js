const express = require('express')
const router = express.Router()
const {
  requireEmailExists,
  requireValidPasswordForUser
} = require('../validators')
const {
  getLogin,
  postLogin
} = require('../../controllers/admin')

router.route('/login')
  .get(getLogin)
  .post([
    requireEmailExists,
    requireValidPasswordForUser
  ], postLogin)

module.exports = router