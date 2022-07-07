const express = require('express')
const {
  getIndex,
  postIndex,
  getSuccess
} = require('../controllers')

const router = express.Router()

router.route('/')
  .get(getIndex)
  .post(postIndex)

router.route('/success')
  .get(getSuccess)

module.exports = router