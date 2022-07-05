const indexPage = require('../views/index')
const Client = require('../models/Client')

module.exports = {
  getIndex(req, res, next) {
    res.send(indexPage())
  },
  postIndex(req, res, next) {
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
      res.status(201).json({ message: 'Your information has been successfully submitted.' })
    } else {
      res.status(500)
      throw new Error('Server error')
    }
  }
}