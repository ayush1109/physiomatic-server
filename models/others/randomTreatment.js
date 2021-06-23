

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const randomTreatmentSchema = new Schema({
  name: {
    type: String,
    required: false,
  },
  description: {
    type: String,
  },
  price: {
    type: Number,
    required: false,
  }
});

module.exports = new mongoose.model(
  "RandomTreatment",
  randomTreatmentSchema
);
