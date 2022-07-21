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
  validateAddressOne,
  validateAddressTwo,
  validateInsuranceCompany,
  validateVehicleYear,
  validateVehicleMake,
  validateVehicleModel,
  validatePolicyNumber
} = require('./validators')

const router = express.Router()

router.route('/')
  .get(getIndex)
  .post(postIndex, [
      validateFirstName,
      validateLastName,
      validateEmail,
      validatePhoneNumber,
      validateAddressOne,
      validateAddressTwo,
      validateInsuranceCompany,
      validateVehicleYear,
      validateVehicleMake,
      validateVehicleModel,
      validatePolicyNumber
    ]
  )

router.route('/success')
  .get(getSuccess)

module.exports = router