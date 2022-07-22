const express = require('express')
const {
  getIndex,
  postIndex,
  getSuccess
} = require('../controllers')
const {
  validateFirstName,
  validateLastName,
  validateEmail,
  validatePhoneNumber,
  validateAddressLineOne,
  validateAddressLineTwo,
  validateInsuranceCompany,
  validateVehicleYear,
  validateVehicleMake,
  validateVehicleModel,
  validatePolicyNumber
} = require('./validators')

const router = express.Router()

router.route('/')
  .get(getIndex)
  .post([
      validateFirstName,
      validateLastName,
      validateEmail,
      validatePhoneNumber,
      validateAddressLineOne,
      validateAddressLineTwo,
      validateInsuranceCompany,
      validateVehicleYear,
      validateVehicleMake,
      validateVehicleModel,
      validatePolicyNumber
    ],
    postIndex
  )

router.route('/success')
  .get(getSuccess)

module.exports = router