const express = require('express')
const {
  getIndex,
  postIndex
} = require('../controllers')

const router = express.Router()

router.route('/')
  .get(getIndex)
  .post(postIndex)

module.exports = router