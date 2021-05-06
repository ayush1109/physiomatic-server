const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const patientSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "user",
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  patientType: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  dob: {
    type: Date,
    required: true,
  },
  clinicalRefNumber: {
    type: String,
  },
  email: {
    type: String,
    required: true,
  },
  mobile: {
    type: String,
    required: true,
  },
  history: [
    {
      exercise: {
        type: Schema.Types.ObjectId,
        ref: "exercise",
      },
      repetition: {
        type: Number,
        required: true,
      },
      sets: {
        type: Number,
        required: true,
      },
      holdTime: {
        type: Number,
        required: true,
      },
      restTime: {
        type: Number,
        required: true,
      },
      weight: {
        type: Number,
      },
      theraband: {
        type: String,
      },
      notes: {
        type: String,
      },
    },
  ],

  dominance: String,
  referalSource: String,
  height: Number,
  bmi: Number,
  status: String,
  weight: String,
  foodHabit: String,
  ocupationdescription: String,
  city: String,
  pincode: String,
  contact: String,
  contactnumber: String,
  id: String,
  address1: String,
  address2: String,
  phone: String,
  contactpersonnumber: String,
});

module.exports = mongoose.model("patient", patientSchema);
