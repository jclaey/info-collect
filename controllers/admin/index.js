const { validationResult } = require('express-validator')
const loginPage = require('../../views/admin/login')
const adminDashboardPage = require('../../views/admin/dashboard')
const Admin = require('../../models/Admin')
const Client = require('../../models/Client')

module.exports = {
  getLogout(req, res, next) {
    req.session = null
    res.redirect('/admin/login')
  },
  getLogin(req, res, next) {
    res.send(loginPage({}))
  },
  async postLogin(req, res, next) {
    const errors = validationResult(req)

    if (!errors.isEmpty()) {
      return res.send(loginPage({ errors }))
    }

    const { email } = req.body

    const admin = await Admin.findOne({ email })

    req.session.userId = String(admin._id)

    res.redirect('/admin/dashboard')
  },
  async getClients(req, res, next) {
    const clients = await Client.find({})

    if (!clients) {
      // return res.send(errorPage(msg))
      res.status(404)
      throw new Error('Could not get clients')
    }

    res.send(adminDashboardPage({ clients }, req))
  }
}