const { validationResult } = require('express-validator')
const indexPage = require('../views/index')
const successPage = require('../views/success')
const failurePage = require('../views/failure')
const Client = require('../models/Client')

module.exports = {
  getIndex(req, res, next) {
    res.send(indexPage({}))
  },
  async postIndex(req, res, next) {
    const errors = validationResult(req)

    if (!errors.isEmpty()) {
      return res.send(indexPage({ errors, values: req.body }))
    }

    const client = await Client.create(req.body)

    if (client) {
      res.redirect('/success')
    } else {
      if (process.env.NODE_ENV === 'development') {
        res.status(500)
        throw new Error('Server error')
      } else {
        res.redirect('/failure')
      }
    }
  },
  getSuccess(req, res, next) {
    res.send(successPage())
  },
  getFailure(req, res, next) {
    res.send(failurePage())
  }
}