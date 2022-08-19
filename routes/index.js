const express = require('express')
const asyncHandler = require('../middleware/async')
const {
  getIndex,
  getClaimForm,
  postClaimForm,
  getSuccess,
  getFailure
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
  validatePolicyNumber,
  validateExpirationDate
} = require('./validators')

const router = express.Router()

router.route('/')
  .get(getIndex)

router.route('/claim-form')
  .get(getClaimForm)
  .post([
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
    validatePolicyNumber,
    validateExpirationDate
  ], asyncHandler(postClaimForm))

  router.route('/success')
    .get(getSuccess)

  router.route('/failure')
    .get(getFailure)

module.exports = router