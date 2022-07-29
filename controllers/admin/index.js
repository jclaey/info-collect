const { validationResult } = require('express-validator')
const loginPage = require('../../views/admin/login')

module.exports = {
  getLogin(req, res, next) {
    res.send(loginPage({}))
  },
  postLogin(req, res, next) {
    
  }
}