const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//create schema
const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },

  clinicName: {
    type: String,
    required: true,
  },
  mobile: {
    type: String,
    required: true,
  },
  landline: {
    type: String,
  },
  country: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  coupon: String,
});

module.exports = mongoose.model("user", UserSchema);
