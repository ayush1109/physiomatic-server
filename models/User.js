const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//create schema
const UserSchema = new Schema({
  name: {
    type: String,
    required: false,
  },
  email: {
    type: String,
    required: false,
  },
  password: {
    type: String,
    required: false,
  },
  image: {
    type: String,
    required: false
  },
  date: {
    type: Date,
    default: Date.now,
  },

  clinicName: {
    type: String,
    required: false,
  },
  mobile: {
    type: String,
    required: false,
  },
  landline: {
    type: String,
  },
  country: {
    type: String,
    required: false,
  },
  address: {
    type: String,
    required: false,
  },
  coupon: String,
});

module.exports = mongoose.model("user", UserSchema);
