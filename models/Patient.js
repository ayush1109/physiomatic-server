const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var d = new Date();
var month = d.getMonth() + 1;

const patientSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "user",
  },
  firstName: {
    type: String,
    required: false,
  },
  lastName: {
    type: String,
    required: false,
  },
  patientType: {
    type: String,
    required: false,
  },
  gender: {
    type: String,
    required: false,
  },
  date: {
    type: String,
    default: d.getDate() + '/' + month + '/' + d.getFullYear()
  },
  dob: {
    type: Date,
    required: false,
  },
  consultant: {
    type: String,
  },
  email: {
    type: String,
    required: false,
  },
  mobile: {
    type: String,
    required: false,
  },
  history: [
    {
      exercise: {
        type: Schema.Types.ObjectId,
        ref: "exercise",
      },
      repetition: {
        type: Number,
        required: false,
      },
      sets: {
        type: Number,
        required: false,
      },
      holdTime: {
        type: Number,
        required: false,
      },
      restTime: {
        type: Number,
        required: false,
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
  patientId: String,
  address1: String,
  address2: String,
  phone: String,
  contactpersonnumber: String,
});

module.exports = mongoose.model("patient", patientSchema);
