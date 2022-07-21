const { body } = require('express-validator')

module.exports = {
  validateFirstName: body('firstName', 'Must provide a first name')
    .trim(),
  validateLastName: body('lastName', 'Must provide a last name')
    .trim(),
  validateEmail: body('email', 'Must provide a valid email')
    .trim()
    .normalizeEmail()
    .isEmail(),
  validatePhoneNumber: body('phoneNumber', 'Must provide a valid phone number')
    .trim()
    .isMobilePhone(),
  validateAddressOne: body('addressOne', 'Must provide an address')
    .trim(),
  validateAddressTwo: body('addressTwo')
    .trim(),
  validateInsuranceCompany: body('insuranceCompany', 'Must provide an insurance company')
    .trim(),
  validateVehicleYear: body('vehicleYear', 'Must provide a vehicle year')
    .trim()
    .isLength({ min: 4, max: 4 }),
  validateVehicleMake: body('vehicleMake', 'Must provide a vehicle make')
    .trim(),
  validateVehicleModel: body('vehicleModel', 'Must provide a vehicle model')
    .trim(),
  validatePolicyNumber: body('policyNumber', 'Must provide a policy number')
    .trim(),
  // validateExpirationDate: body('expirationDate')
}