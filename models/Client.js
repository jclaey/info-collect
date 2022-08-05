const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ClientSchema = new Schema({
  firstName: {
    type: String,
    required: false
  },
  lastName: {
    type: String,
    required: false
  },
  email: {
    type: String,
    required: false
  },
  phoneNumber: {
    type: String,
    required: false
  },
  addressOne: {
    type: String,
    required: false
  },
  addressTwo: String,
  insuranceCompany: {
    type: String,
    required: false
  },
  vehicleYear: {
    type: String,
    required: false
  },
  vehicleMake: {
    type: String,
    required: false
  },
  vehicleModel: {
    type: String,
    required: false
  },
  policyNumber: {
    type: String,
    required: false
  },
  expirationDate: {
    type: Date,
    required: false
  },
  submittedAt: {
    type: Date,
    default: Date.now
  }
})

module.exports = mongoose.model('Client', ClientSchema)