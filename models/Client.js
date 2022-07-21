const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ClientSchema = new Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  phoneNumber: {
    type: String,
    required: true
  },
  addressOne: {
    type: String,
    required: true
  },
  addressTwo: String,
  insuranceCompany: {
    type: String,
    required: true
  },
  vehicleYear: {
    type: String,
    required: true
  },
  vehicleMake: {
    type: String,
    required: true
  },
  vehicleModel: {
    type: String,
    required: true
  },
  policyNumber: {
    type: String,
    required: true
  },
  expirationDate: {
    type: Date,
    required: false
  },
  driversLicense: {
    path: {
      type: String,
      required: false
    },
    filename: {
      type: String,
      required: false
    }
  },
  policyCard: {
    path: {
      type: String,
      required: false
    },
    filename: {
      type: String,
      required: false
    }
  },
  submittedAt: {
    type: Date,
    default: Date.now
  }
})

module.exports = mongoose.model('Client', ClientSchema)