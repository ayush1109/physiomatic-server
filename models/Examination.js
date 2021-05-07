const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Examination = new Schema({
  date: {
    type: Date,
    required: true
  },
  bloodPressure: {
    type: String,
    required: true
  },
  temperature: {
    type: String,
    required: true
  },
  heartRate: {
    type: String,
    required: true
  },
  respiratoryRate: {
    type: String,
    required: true
  },
  gait: {
    type: String,
    required: true
  },
  patientBuilt: {
    type: String,
    required: true
  },
  description: {
      type: String,
      required: true
  },
  posture: {
    type: String,
    required: true
},
scarType: {
    type: String,
    required: true
}

});

module.exports = new mongoose.model("Examination", Examination);
