const loginPage = require('../../views/admin/login')
const registerPage = require('../../views/admin/register')

module.exports = {
  getLogin(req, res, next) {
    res.send(loginPage())
  },
  getRegister(req, res, next) {
    res.send(registerPage())
  }
}