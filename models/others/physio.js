const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const physioSchema = new Schema({
  name: {
    type: String,
    required: false,
  },
  address: {
    type: String,
  },
  mobile: {
    type: Number,
    required: false,
  },
  designation: {
    type: String,
    required: false,
  },
  email: {
    type: String,
    required: false,
  }, date: {
    type: Date,
    required: false,
  }
});

module.exports = new mongoose.model(
  "Physio",
  physioSchema
);