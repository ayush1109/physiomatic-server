const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const chiefComplaintsSchema = new Schema({
  date: {
    type: Date,
    required: true
  },
  symptoms: {
    type: String,
    required: true
  },
  duration: {
    type: String,
    required: true
  },
  pain: {
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
  lossOfMotion: {
    type: String,
    required: true
  },
  abnormalSensation: {
    type: String,
    required: true
  },
  instability: {
      type: String,
      required: true
  }
});

module.exports = new mongoose.model("ChiefComplaints", chiefComplaintsSchema);
