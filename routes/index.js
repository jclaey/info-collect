const express = require('express')
const {
  getLanding
} = require('../controllers')

const router = express.Router()

router.route('/')
  .get(getLanding)