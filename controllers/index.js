const { validationResult } = require('express-validator')
const indexPage = require('../views/index')
const successPage = require('../views/success')
const Client = require('../models/Client')

module.exports = {
  getIndex(req, res, next) {
    res.send(indexPage())
  },
  async postIndex(req, res, next) {
    const { 
      firstName, 
      lastName,
      email,
      phoneNumber, 
      addressLineOne, 
      addressLineTwo,
      insuranceCompany,
      vehicleYear,
      vehicleMake,
      vehicleModel,
      policyNumber,
      expirationDate
    } = req.body

    const client = await Client.create({
      firstName,
      lastName,
      email,
      phoneNumber,
      addressLineOne,
      addressLineTwo,
      insuranceCompany,
      vehicleYear,
      vehicleMake,
      vehicleModel,
      policyNumber,
      expirationDate
    })

    if (client) {
      res.redirect('/success')
    } else {
      res.status(500)
      throw new Error('Server error')
    }
  },
  getSuccess(req, res, next) {
    res.send(successPage())
  }
}