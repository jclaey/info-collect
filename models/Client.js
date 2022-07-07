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
    type: Date
  },
  driversLicense: {
    path: {
      type: String,
      required: true
    },
    filename: {
      type: String,
      required: true
    }
  },
  policyCard: {
    path: {
      type: String,
      required: true
    },
    filename: {
      type: String,
      required: true
    }
  },
  submittedAt: {
    type: Date,
    default: Date.now
  }
})

module.exports = mongoose.model('Client', ClientSchema)