const { body } = require('express-validator')
const Admin = require('../models/Admin')

module.exports = {
  validateFirstName: body('firstName')
    .trim()
    .isLength({ min: 1, max: 30 })
    .withMessage('First name must be between 1 and 30 characters'),
  validateLastName: body('lastName', 'Please provide a last name')
    .trim()
    .isLength({ min: 1, max: 30 }),
  validateEmail: body('email')
    .trim()
    .normalizeEmail()
    .isEmail()
    .withMessage('First name must be between 1 and 30 characters'),
  validatePhoneNumber: body('phoneNumber')
    .trim()
    .isLength({ min: 10, max: 10 })
    .withMessage('Phone number must be 10 digits')
    .isMobilePhone()
    .withMessage('Please provide a valid phone number'),
  validateAddressOne: body('addressOne')
    .trim()
    .isLength({ min: 1, max: 50 })
    .withMessage('Address must be between 1 and 50 characters'),
  validateAddressTwo: body('addressTwo')
    .trim()
    .isLength({ max: 50 })
    .withMessage('Address cannot be longer than 50 characters'),
  validateInsuranceCompany: body('insuranceCompany')
    .trim()
    .isLength({ min: 1, max: 30 })
    .withMessage('Insurance company must be between 1 and 30 characters'),
  validateVehicleYear: body('vehicleYear', 'Please provide a vehicle year')
    .trim()
    .isLength({ min: 4, max: 4 }),
  validateVehicleMake: body('vehicleMake', 'Please provide a vehicle make')
    .trim()
    .isLength({ min: 1, max: 30 })
    .withMessage('Vehicle make must be between 1 and 30 characters'),
  validateVehicleModel: body('vehicleModel')
    .trim()
    .isLength({ min: 1, max: 30 })
    .withMessage('Vehicle model must be between 1 and 30 characters'),
  validatePolicyNumber: body('policyNumber')
    .trim()
    .isLength({ min: 1, max: 30 })
    .withMessage('Policy number must be between 1 and 30 characters'),
  validateExpirationDate: body('expirationDate', 'Please provide an expiration date')
    .trim()
    .isDate({ format: 'MM/DD/YYYY' }),
  requireEmailExists: body('email')
    .trim()
    .normalizeEmail()
    .isEmail()
    .withMessage('Must provide a valid email')
    .isLength({ min: 1, max: 30 })
    .withMessage('Email must be between 1 and 30 characters')
    .custom(async email => {
      const admin = await Admin.findOne({ email })

      if (!admin) {
        throw new Error('Invalid credentials')
      }
    }),
  requireValidPasswordForUser: body('password')
    .trim()
    .isLength({ max: 30 })
    .withMessage('Password cannot be longer than 30 characters')
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