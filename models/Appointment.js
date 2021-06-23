const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var d = new Date();
var month = d.getMonth() + 1;

const appointmentSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "user",
  },
  patient: {
    type: Schema.Types.ObjectId,
    ref: "patient",
  },
  treatment: {
    type: Schema.Types.ObjectId,
    ref: "treatment",
  },
  title: {
    type: String,
    required: false,
  },
  consultant: {
    type: String,
    required: false,
  },
  status: {
    type: Number,
    default: 0,
  },
  date: {
    type: String,
    default: d.getDate() + '/' + month + '/' + d.getFullYear()
  },
  start: {
    type: Date,
    required: false,
  },
  end: {
    type: Date,
    required: false,
  },
  allDay: {
    type: Boolean,
    required: false,
  },
  formData: {
    type: Object,
    // required:false
  },
});
module.exports = new mongoose.model("appointment", appointmentSchema);
