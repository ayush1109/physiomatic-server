const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DemographicData = new Schema({
  patientName: {
    type: String,
    required: true
  },
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  dob: {
    type: Date,
    required: true
  },
  gender: {
    type: String,
    required: true
  },
  patientType: {
    type: String,
    required: true
  },
  height: {
    type: String,
    required: true
  },
  weight: {
      type: String,
      required: true
  },
  bmi: {
    type: String,
    required: true
},
mobile: {
    type: Number,
    required: true
},
clinicRef: {
    type: String,
    required: true
}
});

module.exports = new mongoose.model("DemographicData", DemographicData);
