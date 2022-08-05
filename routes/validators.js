const { body } = require('express-validator')
const Admin = require('../models/Admin')

module.exports = {
  validateFirstName: body('firstName', 'Please provide a first name')
    .trim()
    .isLength({ min: 1 }),
  validateLastName: body('lastName', 'Please provide a last name')
    .trim()
    .isLength({ min: 1 }),
  validateEmail: body('email', 'Please provide a valid email')
    .trim()
    .normalizeEmail()
    .isEmail(),
  validatePhoneNumber: body('phoneNumber')
    .trim()
    .isLength({ min: 1 })
    .withMessage('Please provide a phone number')
    .isMobilePhone()
    .withMessage('Please provide a valid phone number'),
  validateAddressLineOne: body('addressLineOne', 'Please provide an address')
    .trim()
    .isLength({ min: 1 }),
  validateAddressLineTwo: body('addressLineTwo')
    .trim(),
  validateInsuranceCompany: body('insuranceCompany', 'Please provide an insurance company')
    .trim()
    .isLength({ min: 1 }),
  validateVehicleYear: body('vehicleYear', 'Please provide a vehicle year')
    .trim()
    .isLength({ min: 4, max: 4 }),
  validateVehicleMake: body('vehicleMake', 'Please provide a vehicle make')
    .trim()
    .isLength({ min: 1 }),
  validateVehicleModel: body('vehicleModel', 'Please provide a vehicle model')
    .trim()
    .isLength({ min: 1 }),
  validatePolicyNumber: body('policyNumber', 'Please provide a policy number')
    .trim()
    .isLength({ min: 1 }),
  validateExpirationDate: body('expirationDate', 'Please provide an expiration date')
    .trim()
    .isDate({ format: 'MM/DD/YYYY' }),
  requireEmailExists: body('email')
    .trim()
    .normalizeEmail()
    .isEmail()
    .withMessage('Must provide a valid email')
    .custom(async email => {
      const admin = await Admin.findOne({ email })

      if (!admin) {
        throw new Error('Invalid credentials')
      }
    }),
  requireValidPasswordForUser: body('password')
    .trim()
    .custom(async (password, { req }) => {
      const admin = await Admin.findOne({ email: req.body.email })

      if (!admin) {
        throw new Error('Invalid credentials')
      }

      const validPassword = admin.comparePasswords(password)

      if (!validPassword) {
        throw new Error('Invalid credentials')
      }
    })
}