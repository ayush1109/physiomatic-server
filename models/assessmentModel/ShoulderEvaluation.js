const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const shoulderEvaluationSchema = new Schema({
  assessmentDate: {
    type: Date,
    required: true
  },
  patientId: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true
  },
  gender: {
    type: String,
    required: true
  },
  occupation: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  admissionDate: {
    type: Date,
    required: true
  },
  surgeryDate: {
      type: Date,
      required: true
  },
  ward: {
    type: String,
    required: true
  },
  chiefComplaints: {
      type: String,
      required: true
  },
  procedure: {
    type: String,
    required: true
  },
  painOnset: {
      type: String,
      required: true
  },
  injury: {
    type: String,
    required: true
  },
  adlLimitation: {
      type: String,
      required: true
  },


  //body chart to be discussed



  warmth: {
    type: String,
    required: true
  },
  swelling: {
      type: String,
      required: true
  },
  stiffness: {
    type: String,
    required: true
  },
  clickingSound: {
      type: String,
      required: true
  },
  alignment: {
    type: String,
    required: true
  },
  winging: {
      type: String,
      required: true
  },
  muscleAtophy: {
    type: String,
    required: true
  },
  muscleTightness: {
      type: String,
      required: true
  },
  contracture: {
    type: String,
    required: true
  },
  painIntensity: {
      type: Number,
      required: true
  },
  painDuration: {
    type: String,
    required: true
  },
  painSite: {
      type: String,
      required: true
  },
  painType: {
    type: String,
    required: true
  },
  painNature: {
      type: String,
      required: true
  },
  neckStiffness: {
    type: String,
    required: true
  },
  neckPain: {
      type: String,
      required: true
  },
  neckRadiation: {
    type: String,
    required: true
  },
  neckAggrevatingFactors: {
      type: String,
      required: true
  },
  neckRelievingFactor: {
    type: String,
    required: true
},

//till here
});

module.exports = new mongoose.model("ShoulderEvaluation", shoulderEvaluationSchema);
